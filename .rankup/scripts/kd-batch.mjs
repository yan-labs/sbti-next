#!/usr/bin/env node
// 批量跑 seo.web.cafe /kd/api/v1/kd，每个词一条难度分 + 完整 top9 盘面。
// 用法：node .rankup/scripts/kd-batch.mjs --file words.txt --gl us --out .rankup/data/kd-<主题>.json
//       node .rankup/scripts/kd-batch.mjs --keyword "genshin impact mbti" --gl us
// 参数化：词表、国家、输出路径、间隔全从命令行来，不写死。
// 强制同步前台执行 + 每词写一次盘：中途被打断也留得住已跑完的部分。
// 令牌读取顺序 = 环境变量 KD_TOKEN → rankup Skill 根目录 .env（skillEnv 已实现）。
// 已验证 2026-08-19。
import { writeFileSync, readFileSync, existsSync } from 'node:fs';
import { pinnedFetch, skillEnv } from './fetch-pinned.mjs';

const argv = process.argv.slice(2);
const arg = (n, d) => { const i = argv.indexOf('--' + n); return i < 0 ? d : argv[i + 1]; };

const gl = arg('gl', 'us');
const hl = arg('hl', gl === 'kr' ? 'ko' : 'en');
const out = arg('out', `.rankup/data/kd-${gl}.json`);
const gap = Number(arg('gap', 2500));
const file = arg('file');
const single = arg('keyword');

const words = single ? [single]
  : readFileSync(file, 'utf8').split('\n').map(s => s.trim()).filter(s => s && !s.startsWith('#'));

const token = skillEnv('KD_TOKEN');
if (!token) throw new Error('缺 KD_TOKEN：设环境变量，或写进 ~/.claude/skills/rankup/.env');

const results = existsSync(out) ? JSON.parse(readFileSync(out, 'utf8')) : {};
const sleep = ms => new Promise(r => setTimeout(r, ms));

for (const [i, kw] of words.entries()) {
  const key = `${gl}::${kw}`;
  if (results[key] && !results[key].error) { console.log(`[${i + 1}/${words.length}] skip(cached) ${kw}`); continue; }
  const url = `https://seo.web.cafe/kd/api/v1/kd?keyword=${encodeURIComponent(kw)}&gl=${gl}&hl=${hl}`;
  try {
    const r = await pinnedFetch(url, { headers: { Authorization: 'Bearer ' + token }, timeout: 180 });
    if (r.status !== 200) { results[key] = { error: `HTTP ${r.status}`, body: r.text.slice(0, 300) }; }
    else { results[key] = JSON.parse(r.text); }
  } catch (e) { results[key] = { error: String(e).slice(0, 300) }; }
  const d = results[key];
  console.log(`[${i + 1}/${words.length}] ${kw} → ${d.error ? '❌ ' + d.error : `KD ${d.score} (${d.level})`}`);
  writeFileSync(out, JSON.stringify(results, null, 2));   // 每词落一次盘
  if (i < words.length - 1) await sleep(gap);
}
console.log('写入', out);
