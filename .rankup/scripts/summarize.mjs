import { readFileSync } from 'node:fs';

const files = {
  kr: '.rankup/data/kd-kr.json',
  jp: '.rankup/data/kd-jp.json',
  us: '.rankup/data/kd-us.json',
  us2: '.rankup/data/kd-us2.json',
  cn: '.rankup/data/kd-cn.json',
};

const all = {};
for (const [market, f] of Object.entries(files)) {
  const j = JSON.parse(readFileSync(f, 'utf8'));
  const rows = [];
  for (const [key, v] of Object.entries(j)) {
    if (v.error) { rows.push({ keyword: key, error: v.error }); continue; }
    const details = v.details || [];
    const top1 = details[0] || {};
    const dedicatedCount = details.filter(d => d.dedicated).length;
    rows.push({
      keyword: v.keyword,
      score: v.score,
      level: v.level,
      top1domain: top1.domain,
      top1dedicated: top1.dedicated,
      dedicatedCount,
      total: details.length,
    });
  }
  rows.sort((a, b) => (a.score ?? 999) - (b.score ?? 999));
  all[market] = rows;
}

console.log(JSON.stringify(all, null, 2));
