#!/usr/bin/env node
/**
 * semrush-collect.mjs — 把「导出当前页面」落到下载目录的 CSV 等齐、查重、搬进项目并改名。
 *
 * 为什么必须有：Semrush 的导出文件名是 `current-page-<YYYYMMDD>-<HHMMSS>.csv`，
 * **不含目标域名也不含报表名**。两个不同目标的导出混在下载目录里，除了时间戳没有任何区分依据，
 * 隔一轮就再也认不出哪份是谁的。所以规则是：**每导完一个目标立刻跑这个脚本，中间不许插入别的导出。**
 *
 * 另外两件事这个脚本替你把关：
 *  - **等齐**：下载是异步的，最后一个文件常晚几秒落盘。提前搬会静默丢文件，而下游报告看起来完全正常。
 *    判据是「文件数达标 **且** 连续两次采样各文件大小不变」。
 *  - **搬走而不是复制**：源文件从下载目录删除。留一份在那里，下一轮就会被当成本轮的产物重复计入。
 *
 * 用法：
 *   node .rankup/scripts/semrush-collect.mjs \
 *     --target op.gg --report refdomains --expect 3 --out data/game-mbti/raw
 *   可选：--since <ISO时间>  只收这个时刻之后产生的文件（默认脚本启动前 10 分钟）
 *        --downloads <目录>  默认 ~/Downloads
 *        --timeout <秒>      默认 120
 *
 * 已验证 2026-08-19。
 */
import fs from 'node:fs';
import path from 'node:path';

const arg = (k, d) => { const i = process.argv.indexOf('--' + k); return i > -1 ? process.argv[i + 1] : d; };
const need = (k) => { const v = arg(k); if (!v) throw new Error(`缺参数 --${k}`); return v; };

const target = need('target');
const report = need('report');
const expect = Number(arg('expect', '1'));
const outDir = path.resolve(arg('out', 'data/raw'));
const dlDir = arg('downloads', path.join(process.env.HOME, 'Downloads'));
const timeoutMs = Number(arg('timeout', '120')) * 1000;
const since = arg('since') ? Date.parse(arg('since')) : Date.now() - 10 * 60 * 1000;

const PAT = /^current-page-\d{8}-\d{6}(?: \(\d+\))?\.csv$/;
const slug = (s) => String(s).replace(/[^a-z0-9.-]+/gi, '-').replace(/^-|-$/g, '');
const stamp = () => { const d = new Date(); return `${d.getFullYear()}${String(d.getMonth()+1).padStart(2,'0')}${String(d.getDate()).padStart(2,'0')}`; };
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

function candidates() {
  let names;
  try { names = fs.readdirSync(dlDir); }
  catch (e) {
    // macOS 的 TCC 会让终端读不到下载目录，且可能在任务中途才生效。
    // 这时候唯一的出路是改用本地接收端方案，而不是在这里重试。
    throw new Error(`读不到下载目录 ${dlDir}（${e.code}）。若是 EPERM，改用 receiver.mjs 接收端链路，不要在这里重试。`);
  }
  return names.filter((n) => PAT.test(n))
    .map((n) => { const p = path.join(dlDir, n); const st = fs.statSync(p); return { n, p, size: st.size, mtime: st.mtimeMs }; })
    .filter((f) => f.mtime >= since)
    .sort((a, b) => a.mtime - b.mtime);
}

// 注意：不能按 \n 数行——导出的 CSV 里「Root Domain / Category」这类字段自带换行，
// 100 行会被数成 203 行。必须按引号状态判断真正的记录边界。
function dataRows(p) {
  const t = fs.readFileSync(p, 'utf8').replace(/^\uFEFF/, '');
  let q = false, n = 0, cur = false;
  for (let i = 0; i < t.length; i++) {
    const c = t[i];
    if (c === '"') { if (q && t[i + 1] === '"') { i++; continue; } q = !q; cur = true; continue; }
    if (c === '\n' && !q) { if (cur) n++; cur = false; continue; }
    if (c !== '\r') cur = true;
  }
  if (cur) n++;
  return Math.max(0, n - 1); // 去掉表头
}

// —— 等齐：数量达标 且 连续两次采样大小全部不变 ——
const t0 = Date.now();
let prev = '';
for (;;) {
  const c = candidates();
  const sig = c.map((f) => f.n + ':' + f.size).join('|');
  if (c.length >= expect && sig === prev && sig !== '') break;
  if (Date.now() - t0 > timeoutMs) {
    if (c.length === 0) throw new Error(`超时且一个文件都没等到。确认点的是「导出当前页面」而不是「导出」（后者会弹付费墙且不产文件）`);
    console.warn(`⚠ 超时：只等到 ${c.length}/${expect} 个，按现有的继续`);
    break;
  }
  prev = sig;
  await sleep(1500);
}

// —— 归并重名副本：Chrome 同名不覆盖，会另存 `xxx (1).csv`，且两份内容可能不同 ——
const files = candidates();
const byRows = new Map();
for (const f of files) {
  const key = f.n.replace(/ \(\d+\)/, '');
  const rows = dataRows(f.p);
  const kept = byRows.get(key);
  if (!kept || rows > kept.rows) {
    if (kept) { fs.unlinkSync(kept.p); console.log(`  丢弃重名副本（行少）: ${kept.n} (${kept.rows} 行)`); }
    byRows.set(key, { ...f, rows });
  } else {
    fs.unlinkSync(f.p); console.log(`  丢弃重名副本（行少）: ${f.n} (${rows} 行)`);
  }
}

fs.mkdirSync(outDir, { recursive: true });
const manifestPath = path.join(outDir, 'manifest.json');
const manifest = fs.existsSync(manifestPath) ? JSON.parse(fs.readFileSync(manifestPath, 'utf8')) : {};

const kept = [...byRows.values()].sort((a, b) => a.mtime - b.mtime);
let page = 0;
for (const f of kept) {
  page += 1;
  if (f.rows <= 0) throw new Error(`${f.n} 数据行为 0 —— 这是抓取失败的信号，不许静默通过。先查页面是不是没加载完。`);
  const name = `${slug(target)}__${slug(report)}__p${String(page).padStart(2, '0')}__${stamp()}.csv`;
  const dest = path.join(outDir, name);
  fs.renameSync(f.p, dest);                    // 搬走，不是复制
  manifest[name] = { target, report, page, rows: f.rows, bytes: f.size, collectedAt: new Date().toISOString().slice(0, 10) };
  console.log(`✓ ${name}  ${f.rows} 行 / ${f.size} B`);
}
fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));
console.log(`\n共收 ${kept.length} 个文件 → ${outDir}\nmanifest: ${manifestPath}`);
