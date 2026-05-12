import {execFile} from 'node:child_process';
import {mkdir, mkdtemp, readFile, writeFile} from 'node:fs/promises';
import {tmpdir} from 'node:os';
import path from 'node:path';
import {promisify} from 'node:util';
import sharp from 'sharp';

const execFileAsync = promisify(execFile);
const root = process.cwd();
const logoDir = path.join(root, 'public/game-logos');

const sources = [
  {
    slug: 'league-of-legends',
    name: 'League of Legends',
    sourcePage: 'https://www.riotgames.com/en/press',
    url: 'https://www.riotgames.com/darkroom/original/9a50f5b3bdcfb815580ef103ec9b6ee2:d49b78b12cf185e10127cdf81b144a00/lol-logo-rendered-hi-res.png',
  },
  {
    slug: 'counter-strike-2',
    name: 'Counter-Strike 2',
    sourcePage: 'https://store.steampowered.com/app/730/CounterStrike_2/',
    url: 'https://cdn.cloudflare.steamstatic.com/steam/apps/730/logo.png',
  },
  {
    slug: 'valorant',
    name: 'VALORANT',
    sourcePage: 'https://www.riotgames.com/en/press',
    url: 'https://www.riotgames.com/darkroom/original/529d413f0d04b52fa43ac4e0afae762a:5079209ca6c46089fe07ff56ed1cf3d1/valorant-logos.zip',
    zipEntry: 'VALORANT Logos/Lockup Horizontal/V_Lockup_Horizontal_Pos_Red.png',
  },
  {
    slug: 'delta-force',
    name: 'Delta Force',
    sourcePage: 'https://store.steampowered.com/app/2507950/Delta_Force/',
    url: 'https://cdn.cloudflare.steamstatic.com/steam/apps/2507950/logo.png',
  },
  {
    slug: 'honor-of-kings',
    name: 'Honor of Kings',
    sourcePage: 'https://www.honorofkings.com/',
    url: 'https://www.honorofkings.com/img/logo_new.png',
  },
  {
    slug: 'overwatch-2',
    name: 'Overwatch 2',
    sourcePage: 'https://store.steampowered.com/app/2357570/Overwatch_2/',
    url: 'https://cdn.cloudflare.steamstatic.com/steam/apps/2357570/logo.png',
  },
  {
    slug: 'pubg-battlegrounds',
    name: 'PUBG: BATTLEGROUNDS',
    sourcePage: 'https://store.steampowered.com/app/578080/PUBG_BATTLEGROUNDS/',
    url: 'https://cdn.cloudflare.steamstatic.com/steam/apps/578080/logo.png',
  },
  {
    slug: 'apex-legends',
    name: 'Apex Legends',
    sourcePage: 'https://store.steampowered.com/app/1172470/Apex_Legends/',
    url: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1172470/logo.png',
  },
];

async function fetchBuffer(url) {
  const response = await fetch(url, {
    headers: {
      'user-agent': 'SBTI asset fetcher',
    },
  });
  if (!response.ok) {
    throw new Error(`Failed to fetch ${url}: ${response.status} ${response.statusText}`);
  }
  return Buffer.from(await response.arrayBuffer());
}

async function extractZipEntry(zipBuffer, entryName) {
  const dir = await mkdtemp(path.join(tmpdir(), 'sbti-logo-'));
  const zipPath = path.join(dir, 'asset.zip');
  await writeFile(zipPath, zipBuffer);
  await execFileAsync('unzip', ['-q', zipPath, entryName, '-d', dir]);
  return readFile(path.join(dir, entryName));
}

async function normalizeLogo(input, output) {
  const trimmed = await sharp(input)
    .trim({background: {r: 0, g: 0, b: 0, alpha: 0}})
    .resize({width: 512, height: 220, fit: 'inside', withoutEnlargement: true})
    .png()
    .toBuffer();
  const metadata = await sharp(trimmed).metadata();
  const left = Math.max(0, Math.floor((512 - (metadata.width ?? 512)) / 2));
  const top = Math.max(0, Math.floor((256 - (metadata.height ?? 220)) / 2));

  await sharp({
    create: {
      width: 512,
      height: 256,
      channels: 4,
      background: {r: 0, g: 0, b: 0, alpha: 0},
    },
  })
    .composite([{input: trimmed, left, top}])
    .png()
    .toFile(output);
}

await mkdir(logoDir, {recursive: true});

const manifest = [];
for (const source of sources) {
  const downloaded = await fetchBuffer(source.url);
  const raw = source.zipEntry ? await extractZipEntry(downloaded, source.zipEntry) : downloaded;
  const output = path.join(logoDir, `${source.slug}.png`);
  await normalizeLogo(raw, output);
  manifest.push({
    slug: source.slug,
    name: source.name,
    asset: `/game-logos/${source.slug}.png`,
    sourcePage: source.sourcePage,
    sourceUrl: source.url,
    zipEntry: source.zipEntry,
  });
}

await writeFile(
  path.join(root, 'docs/game-logo-sources.json'),
  `${JSON.stringify({generatedAt: new Date().toISOString(), items: manifest}, null, 2)}\n`,
);

console.log(`Fetched and normalized ${manifest.length} game logos.`);
