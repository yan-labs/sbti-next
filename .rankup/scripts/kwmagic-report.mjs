#!/usr/bin/env node
/**
 * 关键词魔法工具导出的 CSV → 汇总报告
 *
 * 输入：`semrush-kwmagic.browser.js` 导出、文件名形如 `<seed>_all-keywords_<db>_<date>.csv` 的目录。
 * 输出：每个文件一段「盘面摘要 + 按搜索量排序的 TopN」，以及跨文件的簇归类。
 *
 * 用法：
 *   node .rankup/scripts/kwmagic-report.mjs --dir data/game-mbti/kwmagic --top 25 --kd 30 --min-vol 500
 *
 * 注意：CSV 的 Trend 字段是逗号分隔的 12 个月数值且被引号包住，
 * 必须用带引号状态的解析器，按 \n 切行会错。
 */
import fs from 'node:fs';
import path from 'node:path';

const arg = (k, d) => {
  const i = process.argv.indexOf(`--${k}`);
  return i > -1 ? process.argv[i + 1] : d;
};
const DIR = arg('dir', 'data/game-mbti/kwmagic');
const TOP = +arg('top', 25);
const KD = +arg('kd', 30);
const MINVOL = +arg('min-vol', 0);

/** 带引号状态的 CSV 解析。字段里有换行和逗号，naive split 会碎掉。 */
function parseCsv(text) {
  const t = text.replace(/^﻿/, '');
  const rows = [];
  let row = [], cur = '', q = false;
  for (let i = 0; i < t.length; i++) {
    const c = t[i];
    if (q) {
      if (c === '"') { if (t[i + 1] === '"') { cur += '"'; i++; } else q = false; }
      else cur += c;
      continue;
    }
    if (c === '"') { q = true; continue; }
    if (c === ',') { row.push(cur); cur = ''; continue; }
    if (c === '\n') { row.push(cur); rows.push(row); row = []; cur = ''; continue; }
    if (c !== '\r') cur += c;
  }
  if (cur || row.length) { row.push(cur); rows.push(row); }
  const head = rows.shift();
  return rows.filter((r) => r.length === head.length).map((r) => Object.fromEntries(head.map((h, i) => [h, r[i]])));
}

/** 意图簇：用词形判断这个词属于哪种页面形态，决定要不要建实体页。 */
const CLUSTERS = [
  ['对比/克制 (vs)', /\bvs\b|versus|best match|worst match|soulmate|compatib|궁합|相性/i],
  ['角色/实体反查', /character|anime|캐릭터|キャラ|角色/i],
  ['类型页 (16型/九型)', /\b(i|e)(n|s)(t|f)(j|p)\b|enneagram|\d w \d|\dw\d|유형|タイプ/i],
  ['测试/答题', /test|quiz|검사|테스트|診断|测试/i],
];
const clusterOf = (k) => (CLUSTERS.find(([, re]) => re.test(k)) || ['其他'])[0];

const files = fs.readdirSync(DIR).filter((f) => f.endsWith('.csv')).sort();
const out = [];
out.push(`# 关键词魔法工具导出汇总\n`);
out.push(`目录：\`${DIR}\` · 筛选：KD ≤ ${KD} 且 搜索量 ≥ ${MINVOL} · 每档 Top ${TOP}\n`);

for (const f of files) {
  const m = f.match(/^(.+)_all-keywords_([a-z]{2})_/);
  const seed = m ? m[1] : f;
  const db = m ? m[2] : '?';
  const rows = parseCsv(fs.readFileSync(path.join(DIR, f), 'utf8'))
    .map((r) => ({ k: r.Keyword, v: +r.Volume || 0, kd: +r['Keyword Difficulty'] || 0, cpc: +r['CPC (USD)'] || 0, intent: r.Intent }))
    .filter((r) => r.k);
  const hit = rows.filter((r) => r.kd <= KD && r.v >= MINVOL).sort((a, b) => b.v - a.v);
  const sum = (a) => a.reduce((s, r) => s + r.v, 0);

  out.push(`\n## ${seed} · db=${db}\n`);
  out.push(`导出 ${rows.length} 词 / 总量 ${sum(rows).toLocaleString()}；符合筛选 ${hit.length} 词 / ${sum(hit).toLocaleString()}\n`);

  const byC = {};
  hit.forEach((r) => { (byC[clusterOf(r.k)] = byC[clusterOf(r.k)] || []).push(r); });
  out.push(`| 意图簇 | 词数 | 总搜索量 | 均 KD |`);
  out.push(`|---|---:|---:|---:|`);
  Object.entries(byC).sort((a, b) => sum(b[1]) - sum(a[1])).forEach(([c, rs]) =>
    out.push(`| ${c} | ${rs.length} | ${sum(rs).toLocaleString()} | ${(rs.reduce((s, r) => s + r.kd, 0) / rs.length).toFixed(1)} |`));

  out.push(`\n| 关键词 | 搜索量 | KD | CPC | 意图 | 簇 |`);
  out.push(`|---|---:|---:|---:|---|---|`);
  hit.slice(0, TOP).forEach((r) =>
    out.push(`| ${r.k} | ${r.v.toLocaleString()} | ${r.kd} | ${r.cpc.toFixed(2)} | ${r.intent} | ${clusterOf(r.k)} |`));
}

const dest = path.join(DIR, 'REPORT.md');
fs.writeFileSync(dest, out.join('\n') + '\n');
console.log(`wrote ${dest} (${files.length} files)`);
