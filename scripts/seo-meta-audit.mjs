#!/usr/bin/env node
/**
 * seo-meta-audit.mjs — offline audit of the static export (out/) for the
 * on-page items Bing Webmaster "Recommendations" flags: title length,
 * meta description length/duplicates, meta robots, canonical, h1, img alt,
 * hreflang. Run after `pnpm build`.
 *
 *   node scripts/seo-meta-audit.mjs                # summary of indexable pages
 *   node scripts/seo-meta-audit.mjs --json out.json
 *   node scripts/seo-meta-audit.mjs --all          # include noindex pages in length checks
 *
 * Thresholds: title 30–70 chars (Bing: ~50–60 ideal), description 70–160.
 * CJK titles are measured in characters like Bing does; short CJK titles are
 * still flagged because Bing's rule is character based.
 */
import {readFileSync, readdirSync, statSync, writeFileSync} from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..', 'out');
const BASE = 'https://sbti.support';
const args = process.argv.slice(2);
const includeAll = args.includes('--all');
const jsonOut = args.includes('--json') ? args[args.indexOf('--json') + 1] : null;

function walk(dir, acc = []) {
  for (const name of readdirSync(dir)) {
    if (name === '_next') continue;
    const p = path.join(dir, name);
    const st = statSync(p);
    if (st.isDirectory()) walk(p, acc);
    else if (name.endsWith('.html')) acc.push(p);
  }
  return acc;
}

const decode = (s) => s.replace(/&amp;/g, '&').replace(/&#x27;|&#39;/g, "'").replace(/&quot;/g, '"').replace(/&lt;/g, '<').replace(/&gt;/g, '>');
const attr = (tag, name) => { const m = tag.match(new RegExp(`${name}="([^"]*)"`)); return m ? decode(m[1]) : null; };

function toUrl(file) {
  let rel = path.relative(ROOT, file).replace(/\\/g, '/').replace(/\.html$/, '').replace(/(^|\/)index$/, '');
  if (rel === 'en') rel = '';
  else if (rel.startsWith('en/')) rel = rel.slice(3);
  return `${BASE}${rel ? `/${rel}` : ''}`;
}

const rows = [];
for (const file of walk(ROOT)) {
  const html = readFileSync(file, 'utf8');
  const head = html.slice(0, html.indexOf('</head>') + 7);
  const title = decode((head.match(/<title>([^<]*)<\/title>/) || [])[1] || '');
  const descTag = (head.match(/<meta name="description"[^>]*>/) || [])[0];
  const robotsTag = (head.match(/<meta name="robots"[^>]*>/) || [])[0];
  const canonTag = (head.match(/<link rel="canonical"[^>]*>/) || [])[0];
  const hreflangs = (head.match(/<link rel="alternate" hrefLang="[^"]+"/gi) || []).length;
  const h1 = (html.match(/<h1[\s>]/g) || []).length;
  const imgs = html.match(/<img\b[^>]*>/g) || [];
  const imgNoAlt = imgs.filter((t) => !/\balt=/.test(t)).length;
  const robots = robotsTag ? attr(robotsTag, 'content') : null;
  rows.push({
    file: path.relative(ROOT, file), url: toUrl(file), title, titleLen: [...title].length,
    description: descTag ? attr(descTag, 'content') : null,
    robots, noindex: !!robots && /noindex/i.test(robots),
    canonical: canonTag ? attr(canonTag, 'href') : null, hreflangs, h1, imgNoAlt,
  });
}
for (const r of rows) r.descLen = r.description ? [...r.description].length : 0;

const scope = rows.filter((r) => includeAll || !r.noindex);
const descCount = new Map();
for (const r of scope) if (r.description) descCount.set(r.description, (descCount.get(r.description) || 0) + 1);

const issues = {
  titleShort: scope.filter((r) => r.titleLen < 30),
  titleLong: scope.filter((r) => r.titleLen > 70),
  descMissing: scope.filter((r) => !r.description),
  descShort: scope.filter((r) => r.description && r.descLen < 70),
  descLong: scope.filter((r) => r.descLen > 160),
  descDup: scope.filter((r) => r.description && descCount.get(r.description) > 1),
  h1Bad: scope.filter((r) => r.h1 !== 1),
  canonicalMissing: scope.filter((r) => !r.canonical),
  canonicalMismatch: scope.filter((r) => r.canonical && r.canonical.replace(/\/$/, '') !== r.url.replace(/\/$/, '') && !r.file.startsWith('en/')),
  imgNoAlt: scope.filter((r) => r.imgNoAlt > 0),
  hreflangMissing: scope.filter((r) => r.hreflangs === 0),
};

console.log(`pages: ${rows.length} total, ${rows.filter((r) => r.noindex).length} noindex, ${scope.length} in scope`);
for (const [k, v] of Object.entries(issues)) {
  console.log(`${k.padEnd(18)} ${String(v.length).padStart(5)}`);
  for (const r of v.slice(0, 5)) console.log(`   ${r.url}  [${r.titleLen}] ${r.title}${k.startsWith('desc') ? `  (desc ${r.descLen})` : ''}${k === 'h1Bad' ? ` (h1=${r.h1})` : ''}${k.startsWith('canonical') ? ` -> ${r.canonical}` : ''}`);
}
if (jsonOut) writeFileSync(jsonOut, JSON.stringify({issues: Object.fromEntries(Object.entries(issues).map(([k, v]) => [k, v.map((r) => r.url)])), rows}, null, 1));
process.exitCode = issues.titleShort.length || issues.descMissing.length || issues.h1Bad.length || issues.canonicalMissing.length ? 1 : 0;
