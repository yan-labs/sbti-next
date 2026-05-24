#!/usr/bin/env node
/**
 * Post-build cleanup for Cloudflare Pages.
 *
 * Next.js 16 static export emits ~10 RSC streaming payload `.txt` files per
 * route segment for client-side `<Link>` prefetching. With 5200+ pages this
 * pushes us over Cloudflare Pages' 20,000-file-per-deployment limit (we end
 * up around 61k files).
 *
 * This script removes the RSC `.txt` files from `out/` while preserving:
 *   - robots.txt
 *   - llms.txt / llms-full.txt (AI crawler instructions)
 *   - .well-known/llms.txt
 *   - Cloudflare domain verification text files (hex-named)
 *
 * Trade-off: deleting the RSC payloads disables Next's client-side route
 * prefetching, so `<Link>` clicks become full-page navigations. That's
 * acceptable for SBTI (a static content + share site) and gets us well under
 * the file limit (~5,400 files post-strip).
 */
import {readdir, unlink} from 'node:fs/promises';
import {join} from 'node:path';

const OUT_DIR = new URL('../out', import.meta.url).pathname;

// Allow-list: keep these even if .txt
const KEEP_NAMES = new Set([
  'robots.txt',
  'llms.txt',
  'llms-full.txt',
  '_not-found.txt', // tiny, harmless
]);

// Keep any hex-named .txt at the root (Cloudflare domain verification)
const HEX_NAME = /^[a-f0-9]{16,}\.txt$/i;

let removed = 0;
let kept = 0;

async function walk(dir) {
  let entries;
  try {
    entries = await readdir(dir, {withFileTypes: true});
  } catch {
    return;
  }

  for (const entry of entries) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      await walk(full);
      continue;
    }
    if (!entry.name.endsWith('.txt')) continue;

    if (KEEP_NAMES.has(entry.name)) {
      kept++;
      continue;
    }
    if (HEX_NAME.test(entry.name)) {
      kept++;
      continue;
    }

    await unlink(full);
    removed++;
  }
}

console.log(`Stripping RSC payloads from ${OUT_DIR}...`);
const t0 = Date.now();
await walk(OUT_DIR);
const t1 = Date.now();

console.log(`  ✓ removed: ${removed.toLocaleString()} files`);
console.log(`  ✓ kept:    ${kept} files (robots / llms / verification)`);
console.log(`  ✓ took:    ${t1 - t0}ms`);
