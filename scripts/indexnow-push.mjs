#!/usr/bin/env node
/**
 * indexnow-push.mjs — notify IndexNow (Bing directly + the shared
 * api.indexnow.org hub) after a deploy.
 *
 * Why it lives in the repo and runs from the deploy workflow: a post-deploy
 * ping that someone has to remember is a ping that silently stops happening.
 * `.github/workflows/deploy.yml` runs it right after `wrangler pages deploy`.
 *
 * It must run AFTER the deploy finishes: it verifies the live key file and
 * reads the live sitemap, so running it earlier checks stale content.
 *
 * Usage:
 *   node scripts/indexnow-push.mjs --baseline old-sitemap.xml
 *        # default mode: push only URLs that are new or whose <lastmod>
 *        # changed compared with the sitemap captured before the deploy
 *   node scripts/indexnow-push.mjs --all          # every URL in the live sitemap
 *   node scripts/indexnow-push.mjs /faq /ko/test  # just these paths
 *   add --dry-run to print what would be sent without sending
 *
 * Exit code is non-zero if the key file does not verify or if *both*
 * endpoints reject the submission. One endpoint failing is reported but
 * does not fail the deploy (the other one still shares with all engines).
 */
import {existsSync, readFileSync} from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

export const INDEXNOW_KEY = '8ea47f8693256fdca5ff57272721fd57';
// Canonical origin: sbti.support is the apex; www is not the canonical host.
export const SITE_URL = 'https://sbti.support';

const here = path.dirname(fileURLToPath(import.meta.url));
const keyFile = path.join(here, '..', 'public', `${INDEXNOW_KEY}.txt`);
const host = new URL(SITE_URL).host;
const keyLocation = `${SITE_URL}/${INDEXNOW_KEY}.txt`;
const ENDPOINTS = ['https://www.bing.com/indexnow', 'https://api.indexnow.org/indexnow'];
const BATCH = 10000; // protocol limit per request

function assertKeyFileMatches() {
  if (!existsSync(keyFile)) {
    throw new Error(`IndexNow: public/${INDEXNOW_KEY}.txt is missing. The key constant and the file name/content must match.`);
  }
  const body = readFileSync(keyFile, 'utf8').trim();
  if (body !== INDEXNOW_KEY) {
    throw new Error(`IndexNow: public/${INDEXNOW_KEY}.txt contains "${body}", expected the key itself (ownership check would fail with 403).`);
  }
}

async function liveKeyProblem() {
  const res = await fetch(keyLocation, {redirect: 'manual'});
  if (res.status !== 200) return `HTTP ${res.status}`;
  const body = (await res.text()).trim();
  return body === INDEXNOW_KEY ? null : `body is "${body.slice(0, 40)}"`;
}

function parseSitemap(xml) {
  const entries = new Map();
  for (const m of xml.matchAll(/<url>([\s\S]*?)<\/url>/g)) {
    const loc = (m[1].match(/<loc>\s*([^<\s]+)\s*<\/loc>/) || [])[1];
    const lastmod = (m[1].match(/<lastmod>\s*([^<\s]+)\s*<\/lastmod>/) || [])[1] || '';
    if (loc) entries.set(loc, lastmod);
  }
  return entries;
}

async function liveSitemap() {
  const res = await fetch(`${SITE_URL}/sitemap.xml`);
  if (!res.ok) throw new Error(`IndexNow: cannot read sitemap.xml: HTTP ${res.status}`);
  return parseSitemap(await res.text());
}

async function submit(endpoint, urlList) {
  const res = await fetch(endpoint, {
    method: 'POST',
    headers: {'content-type': 'application/json; charset=utf-8'},
    body: JSON.stringify({host, key: INDEXNOW_KEY, keyLocation, urlList}),
  });
  const text = (await res.text()).slice(0, 200);
  return {endpoint, status: res.status, ok: res.status === 200 || res.status === 202, text};
}

async function main() {
  const argv = process.argv.slice(2);
  const dryRun = argv.includes('--dry-run');
  const all = argv.includes('--all');
  const baselineIdx = argv.indexOf('--baseline');
  const baseline = baselineIdx >= 0 ? argv[baselineIdx + 1] : null;
  const paths = argv.filter((a, i) => !a.startsWith('--') && !(baselineIdx >= 0 && i === baselineIdx + 1));

  assertKeyFileMatches();
  const problem = await liveKeyProblem();
  if (problem) {
    throw new Error(`IndexNow: live key file ${keyLocation} does not verify (${problem}). Was this run before the deploy finished?`);
  }

  let urlList;
  if (paths.length) {
    urlList = paths.map((p) => (p.startsWith('http') ? p : `${SITE_URL}${p.startsWith('/') ? p : `/${p}`}`));
  } else if (all) {
    urlList = [...(await liveSitemap()).keys()];
  } else if (baseline) {
    const before = existsSync(baseline) ? parseSitemap(readFileSync(baseline, 'utf8')) : new Map();
    if (!before.size) {
      throw new Error(`IndexNow: baseline ${baseline} is missing or empty; rerun with --all to push everything.`);
    }
    const now = await liveSitemap();
    urlList = [...now].filter(([loc, lastmod]) => before.get(loc) !== lastmod).map(([loc]) => loc);
  } else {
    throw new Error('IndexNow: pass --baseline <old-sitemap.xml>, --all, or explicit paths.');
  }

  const foreign = urlList.filter((u) => new URL(u).host !== host);
  if (foreign.length) throw new Error(`IndexNow: URLs on another host (would 422 the batch): ${foreign.join(', ')}`);
  if (!urlList.length) {
    console.log('IndexNow: nothing new or changed in the sitemap, nothing to send.');
    return;
  }

  console.log(`IndexNow: ${urlList.length} URL(s) for host ${host}, key file ${keyLocation}`);
  if (dryRun) {
    console.log(urlList.slice(0, 20).join('\n') + (urlList.length > 20 ? `\n… +${urlList.length - 20}` : ''));
    return;
  }

  const results = [];
  for (const endpoint of ENDPOINTS) {
    for (let i = 0; i < urlList.length; i += BATCH) {
      const r = await submit(endpoint, urlList.slice(i, i + BATCH));
      results.push(r);
      console.log(`  ${endpoint} -> HTTP ${r.status}${r.ok ? '' : ` ${r.text}`}`);
    }
  }
  // Accepted means queued, not indexed; each engine decides when (or whether) to crawl.
  if (!results.some((r) => r.ok)) {
    throw new Error('IndexNow: every endpoint rejected the submission.');
  }
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  main().catch((e) => {
    console.error(e.message);
    process.exit(1);
  });
}
