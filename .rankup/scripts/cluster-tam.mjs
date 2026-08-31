#!/usr/bin/env node
/**
 * cluster-tam.mjs — 把关键词魔法工具的整包导出按「意图簇」聚类，并算出**真实可抢量**。
 *
 * 为什么需要这一步：Keyword Magic 的总搜索量是毛数，里面混着三类根本抢不到的词——
 *   1) 品牌导航词（用户冲着某个产品去的，你排第一他也不点）
 *   2) 平台垄断词（前十全是 YouTube / Naver / 知恵袋 这类，你挤不进去）
 *   3) 型名本体词（官方百科锁死席位）
 * 把这三类剔掉之后剩下的，才是「你真的有机会拿到」的量。
 *
 * 用法：node cluster-tam.mjs --dir <csv目录> --market jp|kr --kd 40
 */
import fs from 'node:fs';
import path from 'node:path';

const arg = (k, d) => { const i = process.argv.indexOf('--' + k); return i > 0 ? process.argv[i + 1] : d; };
const DIR = path.resolve(arg('dir', '.'));
const MARKET = arg('market', 'jp');
const KDMAX = Number(arg('kd', 40));

/** 带引号的 CSV 解析：Trend 和 SERP Features 两列里都有逗号。 */
function parseCsv(text) {
  const rows = []; let row = [], cell = '', q = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (q) { if (c === '"') { if (text[i + 1] === '"') { cell += '"'; i++; } else q = false; } else cell += c; }
    else if (c === '"') q = true;
    else if (c === ',') { row.push(cell); cell = ''; }
    else if (c === '\n') { row.push(cell); rows.push(row); row = []; cell = ''; }
    else if (c !== '\r') cell += c;
  }
  if (cell || row.length) { row.push(cell); rows.push(row); }
  return rows;
}

// ── 剔除规则 ───────────────────────────────────────────────────────────────
// 品牌导航词：用户冲着一个具体产品去搜的。你排第一他也不点你。
const BRAND = {
  jp: /16personalities|16 ?パーソナリティ|ミンチャット|mgram|エムグラム|診断メーカー|shindanmaker|ドラゴンクエスト|ポケモン|原神|あんスタ|ツイステ|うたプリ|ヒロアカ|呪術廻戦|鬼滅|プロセカ|にじさんじ|ホロライブ/i,
  kr: /16personalities|16 ?퍼스널리티|마인드챗|mgram|점신|포스텔러|헬로우봇|카카오|네이버|인스타|유튜브|틱톡/i,
};
// 型名本体词：官方百科锁死席位（日语译名 + 英文四字母）
const TYPENAME = {
  jp: /建築家|論理学者|指揮官|討論者|提唱者|仲介者|主人公|運動家|管理者|擁護者|幹部|領事館?|巨匠|冒険家|実業家|起業家|エンターテイナー|広報運動家|自由人/,
  kr: /건축가|논리술사|통솔자|변론가|옹호자|중재자|선도자|활동가|현실주의자|수호자|경영자|집정관|장인|모험가|사업가|연예인/,
};
// 与性格无关的工具/硬件/能力测试。韩语种子「테스트」是通用词，会把这些全捞进来，
// 它们和本项目没有任何关系，留在池子里会把可抢量虚报一大截。
const OFFTOPIC = {
  jp: /タイピング|回線|速度|ping|キーボード|マウス|視力|色覚|聴力|通信|iq ?テスト|学力|漢字|英語|toeic|妊娠|コロナ|アレルギー|血液/i,
  kr: /반응 ?속도|키보드|마우스|타자|핑 ?테스트|인터넷|속도|발음|iq|아이큐|시력|색약|청력|모니터|주사율|통신|영어|토익|학력|한자|임신|코로나|알레르기|혈액|중독 ?테스트 ?타자/i,
};
// 平台垄断意图：这些后缀基本上前十全是 UGC / 视频平台
const PLATFORM = {
  jp: /知恵袋|なんj|5ch|まとめ|画像|イラスト|動画|youtube|twitter|インスタ|tiktok|pixiv|アニメ/i,
  kr: /디시|더쿠|인벤|짤|짤방|움짤|영상|유튜브|나무위키|위키|블로그/i,
};

// ── 意图簇 ────────────────────────────────────────────────────────────────
const CLUSTERS = {
  jp: [
    ['相性・恋愛',       /相性|恋愛|恋人|カップル|結婚|付き合|好きな|モテ|惚れ|デート|失恋|片思い/],
    ['診断・テスト',     /診断|テスト|検査|測定|チェック|質問|問題/],
    ['適職・仕事',       /適職|仕事|職業|転職|就活|向いてる|天職|バイト|キャリア|上司|部下|職場/],
    ['あるある・性格描写', /あるある|特徴|性格|あるある|考え方|行動|口癖|苦手|得意|長所|短所|弱点|強み/],
    ['人間関係',         /友達|友情|人間関係|親|家族|兄弟|コミュ|会話|付き合い方|接し方/],
    ['ランキング・割合', /ランキング|割合|人口|多い|少ない|珍しい|レア|順位|人気/],
    ['キャラ・作品反查', /キャラ|アニメ|漫画|声優|アイドル|芸能人|有名人|俳優|歌手/],
    ['型名本体',         null], // 由 TYPENAME 命中
  ],
  kr: [
    ['궁합・연애',       /궁합|연애|사랑|커플|결혼|썸|이상형|짝사랑|데이트|이별|남자친구|여자친구/],
    ['테스트・진단',     /테스트|진단|검사|검사지|질문|문항/],
    ['직업・적성',       /직업|적성|진로|취업|알바|일|회사|직장|상사|업무/],
    ['특징・성격묘사',   /특징|성격|성향|장점|단점|팩폭|말투|행동|생각|유형별/],
    ['인간관계',         /친구|우정|인간관계|가족|부모|대화|사람/],
    ['순위・비율',       /순위|비율|인구|많은|적은|희귀|드문|랭킹|인기/],
    ['캐릭터・작품역검색', /캐릭터|애니|웹툰|아이돌|연예인|배우|가수/],
    ['유형명 본체',       null],
  ],
};

// ── 读入并合并去重 ─────────────────────────────────────────────────────────
const files = fs.readdirSync(DIR).filter((f) => f.endsWith('.csv') && f.includes(`_${MARKET}_`));
const seen = new Map();
for (const f of files) {
  const rows = parseCsv(fs.readFileSync(path.join(DIR, f), 'utf8'));
  const head = rows[0];
  const iK = head.indexOf('Keyword'), iV = head.indexOf('Volume'),
        iD = head.indexOf('Keyword Difficulty'), iC = head.indexOf('CPC (USD)'),
        iI = head.indexOf('Intent');
  for (const r of rows.slice(1)) {
    const kw = (r[iK] || '').trim();
    if (!kw) continue;
    const vol = Number(r[iV] || 0);
    if (!seen.has(kw) || seen.get(kw).vol < vol) {
      seen.set(kw, { kw, vol, kd: Number(r[iD] || 0), cpc: Number(r[iC] || 0), intent: r[iI] || '', src: f });
    }
  }
}
const all = [...seen.values()];

// ── 分类 ──────────────────────────────────────────────────────────────────
const brand = BRAND[MARKET], typename = TYPENAME[MARKET], platform = PLATFORM[MARKET], offtopic = OFFTOPIC[MARKET];
const clusters = CLUSTERS[MARKET];
const buckets = new Map(clusters.map(([n]) => [n, []]));
buckets.set('其他', []);
const excluded = { 品牌导航: [], 平台垄断: [], 无关工具测试: [] };

for (const k of all) {
  if (brand.test(k.kw)) { excluded.品牌导航.push(k); continue; }
  if (platform.test(k.kw)) { excluded.平台垄断.push(k); continue; }
  if (offtopic.test(k.kw)) { excluded.无关工具测试.push(k); continue; }
  if (typename.test(k.kw)) { buckets.get(clusters[clusters.length - 1][0]).push(k); continue; }
  let hit = null;
  for (const [name, re] of clusters) { if (re && re.test(k.kw)) { hit = name; break; } }
  buckets.get(hit || '其他').push(k);
}

const sum = (a) => a.reduce((s, x) => s + x.vol, 0);
const fmt = (n) => n.toLocaleString('en-US');
const pct = (a, b) => (b ? ((a / b) * 100).toFixed(1) + '%' : '—');

const grossAll = sum(all);
console.log(`\n# ${MARKET.toUpperCase()} 意图聚簇与真实可抢量\n`);
console.log(`文件：${files.join('、')}`);
console.log(`去重后关键词：${fmt(all.length)} 个，毛搜索量 ${fmt(grossAll)}/月\n`);

console.log(`## 先剔掉抢不到的\n`);
console.log(`| 类别 | 词数 | 搜索量 | 占毛量 |`);
console.log(`|---|---:|---:|---:|`);
for (const [n, arr] of Object.entries(excluded))
  console.log(`| ${n} | ${fmt(arr.length)} | ${fmt(sum(arr))} | ${pct(sum(arr), grossAll)} |`);
const typenameVol = sum(buckets.get(clusters[clusters.length - 1][0]));
console.log(`| 型名本体（官方锁席） | ${fmt(buckets.get(clusters[clusters.length-1][0]).length)} | ${fmt(typenameVol)} | ${pct(typenameVol, grossAll)} |`);
const deadVol = Object.values(excluded).reduce((a, x) => a + sum(x), 0) + typenameVol;
console.log(`| **合计剔除** | | **${fmt(deadVol)}** | **${pct(deadVol, grossAll)}** |\n`);

console.log(`## 剩下的按意图簇排\n`);
console.log(`| 意图簇 | 词数 | 总量 | KD≤${KDMAX} 词数 | **KD≤${KDMAX} 可抢量** | 均KD | 均CPC | 头部词 |`);
console.log(`|---|---:|---:|---:|---:|---:|---:|---|`);
let realTam = 0;
const rows = [...buckets.entries()]
  .filter(([n]) => n !== clusters[clusters.length - 1][0])
  .map(([n, arr]) => {
    const easy = arr.filter((k) => k.kd <= KDMAX);
    const ev = sum(easy);
    return { n, arr, easy, ev };
  })
  .sort((a, b) => b.ev - a.ev);
for (const { n, arr, easy, ev } of rows) {
  if (!arr.length) continue;
  realTam += ev;
  const avgKd = arr.length ? (arr.reduce((s, x) => s + x.kd, 0) / arr.length).toFixed(1) : '—';
  const avgCpc = arr.length ? (arr.reduce((s, x) => s + x.cpc, 0) / arr.length).toFixed(2) : '—';
  const top = arr.slice().sort((a, b) => b.vol - a.vol).slice(0, 2)
    .map((k) => `${k.kw} ${fmt(k.vol)}`).join('；');
  console.log(`| ${n} | ${fmt(arr.length)} | ${fmt(sum(arr))} | ${fmt(easy.length)} | **${fmt(ev)}** | ${avgKd} | $${avgCpc} | ${top} |`);
}
console.log(`\n**真实可抢量（剔除后 × KD≤${KDMAX}）= ${fmt(realTam)}/月**，占毛量 ${pct(realTam, grossAll)}。\n`);

// 每簇最值钱的 12 个词
console.log(`## 各簇 KD≤${KDMAX} 的头部词\n`);
for (const { n, easy } of rows) {
  if (!easy.length) continue;
  console.log(`### ${n}\n`);
  console.log(`| 关键词 | 量/月 | KD | CPC |`);
  console.log(`|---|---:|---:|---:|`);
  for (const k of easy.sort((a, b) => b.vol - a.vol).slice(0, 12))
    console.log(`| ${k.kw} | ${fmt(k.vol)} | ${k.kd} | $${k.cpc.toFixed(2)} |`);
  console.log('');
}
