import type {MetadataRoute} from 'next';
import {execFileSync} from 'node:child_process';
import {routing} from '@/i18n/routing';
import {BLOG_POSTS} from '@/lib/data/blog';
import {ALL_GAMES_V2, GAME_SLUGS} from '@/lib/data/games/index';

export const dynamic = 'force-static';

const BASE_URL = 'https://sbti.support';

// Import type codes at build time
const TYPE_CODES = [
  'CTRL', 'ATM-er', 'Dior-s', 'BOSS', 'THAN-K', 'OH-NO', 'GOGO',
  'SEXY', 'LOVE-R', 'MUM', 'FAKE', 'OJBK', 'MALO', 'JOKE-R',
  'WOC!', 'THIN-K', 'SHIT', 'ZZZZ', 'POOR', 'MONK', 'IMSB',
  'SOLO', 'FUCK', 'DEAD', 'IMFW', 'HHHH', 'DRUNK',
];

// Keep in sync with VALIDATED_KO_COMPAT_CODES in
// app/[locale]/compat/[a]/[b]/page.tsx — these are the only compat pair
// codes currently indexed (2026-09-13 small, reversible unblock).
const VALIDATED_KO_COMPAT_CODES = ['CTRL', 'THIN-K', 'FUCK'];

function localeUrl(locale: string, path: string = '') {
  return locale === 'en' ? `${BASE_URL}${path}` : `${BASE_URL}/${locale}${path}`;
}

function makeAlternates(path: string) {
  const languages: Record<string, string> = {};
  for (const locale of routing.locales) {
    languages[locale] = localeUrl(locale, path);
  }
  languages['x-default'] = localeUrl('en', path);
  return {languages};
}

function entry(
  path: string,
  priority: number,
  lastModified: string,
  locale: string = 'en',
): MetadataRoute.Sitemap[number] {
  return {
    url: localeUrl(locale, path),
    lastModified,
    priority,
    alternates: makeAlternates(path),
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  const messageDates = new Map<string, Record<string, string>>();
  function modified(locale: string, files: string[], namespaces: string[]) {
    if (!messageDates.has(locale)) {
      const file = `messages/${locale}.json`;
      const history = execFileSync('git', ['log', '--format=%H %cs', '--', file], {encoding: 'utf8'}).trim().split('\n');
      const dates: Record<string, string> = {};
      let newer: Record<string, unknown> | undefined;
      let newerDate = '';
      for (const line of history) {
        const [hash, date] = line.split(' ');
        const older = JSON.parse(execFileSync('git', ['show', `${hash}:${file}`], {encoding: 'utf8'}));
        if (newer) {
          for (const key of Object.keys(newer)) {
            if (!dates[key] && JSON.stringify(newer[key]) !== JSON.stringify(older[key])) dates[key] = newerDate;
          }
        }
        newer = older;
        newerDate = date;
      }
      for (const key of Object.keys(newer || {})) if (!dates[key]) dates[key] = newerDate;
      messageDates.set(locale, dates);
    }
    const sourceDate = execFileSync('git', ['log', '-1', '--format=%cs', '--',
      ...files.map(file => `:(literal)${file}`),
    ], {encoding: 'utf8'}).trim();
    return [sourceDate, ...namespaces.map(key => messageDates.get(locale)![key] || '')].sort().at(-1)!;
  }

  function namespaces(path: string) {
    if (path === '') return ['faq'];
    if (path === '/test') return ['intro', 'quiz', 'questions'];
    if (path.startsWith('/games')) return ['games', 'result', 'share'];
    if (path.startsWith('/type/')) return ['result', 'share', 'typeDetail', 'intro', 'personalities', 'dimensions', 'breadcrumb'];
    if (path === '/types') return ['typesIndex', 'personalities', 'breadcrumb'];
    if (path.startsWith('/compat')) return ['compat', 'personalities', 'dimensions', 'result'];
    if (path.startsWith('/blog')) return ['blog', 'personalities', 'breadcrumb'];
    const key: Record<string, string[]> = {
      '/about': ['about', 'breadcrumb', 'intro'], '/faq': ['faq', 'breadcrumb', 'intro'],
      '/privacy-policy': ['privacy', 'breadcrumb'], '/terms': ['terms', 'breadcrumb'],
    };
    return key[path] || [];
  }

  function addLocalized(path: string, priority: number, files: string[]) {
    for (const locale of routing.locales) {
      entries.push(entry(path, priority, modified(locale, files, namespaces(path)), locale));
    }
  }

  // Homepage
  addLocalized('', 1.0, ['app/[locale]/page.tsx', 'components/home', 'lib/data/personalities.json', 'lib/data/games']);
  addLocalized('/test', 0.9, ['app/[locale]/test/page.tsx', 'components/sbti-app.tsx', 'components/intro-phase.tsx', 'components/quiz-phase.tsx', 'lib/data/questions.ts']);

  // Game personality tests (hub + per-game pages)
  addLocalized('/games', 0.8, ['app/[locale]/games/page.tsx', 'components/games/game-hub-page.tsx', 'lib/data/games']);
  for (const slug of GAME_SLUGS) {
    addLocalized(`/games/${slug}`, 0.82, ['app/[locale]/games/[slug]/page.tsx', 'components/games', `lib/data/games/${slug}.ts`]);
    addLocalized(`/games/${slug}/compat`, 0.6, ['app/[locale]/games/[slug]/compat/page.tsx', 'components/games/game-compat-page.tsx', `lib/data/games/${slug}.ts`, 'lib/data/games/compat.ts']);
  }

  // Game archetype result pages (8 games × 8 archetypes = 64 routes)
  for (const game of ALL_GAMES_V2) {
    for (const archetype of game.archetypes) {
      addLocalized(`/games/${game.slug}/result/${archetype.slug}`, 0.78, ['app/[locale]/games/[slug]/result/[archetype]/page.tsx', `lib/data/games/${game.slug}.ts`, 'lib/data/games/archetype-art.ts']);
    }
  }

  // Type pages
  for (const code of TYPE_CODES) {
    addLocalized(`/type/${encodeURIComponent(code)}`, 0.8, ['app/[locale]/type/[code]/page.tsx', 'components/type-detail-page.tsx', 'lib/data/personalities.json', 'lib/data/personalities.ts']);
  }

  // /result/* share landing pages are noindexed (they duplicate /type/*,
  // which is what actually ranks) and therefore stay out of the sitemap.

  // Static pages
  addLocalized('/about', 0.5, ['app/[locale]/about/page.tsx', 'components/about-page.tsx']);
  addLocalized('/types', 0.7, ['app/[locale]/types/page.tsx', 'components/types-index-page.tsx', 'lib/data/personalities.json']);
  addLocalized('/faq', 0.5, ['app/[locale]/faq/page.tsx', 'components/faq-page.tsx']);
  addLocalized('/privacy-policy', 0.3, ['app/[locale]/privacy-policy/page.tsx', 'components/privacy-policy-page.tsx']);
  addLocalized('/terms', 0.3, ['app/[locale]/terms/page.tsx', 'components/terms-page.tsx']);

  // Compatibility hub only. The 27×26 pair pages stay reachable through
  // in-page links but are deliberately kept out of the sitemap: GSC showed
  // ~890 of them stuck in "Crawled - currently not indexed", dragging down
  // sitewide quality signals (2026-07 audit).
  addLocalized('/compat', 0.6, ['app/[locale]/compat/page.tsx', 'components/compat-page.tsx', 'lib/data/compat.ts', 'lib/data/personalities.json']);

  // 2026-09-13 small, reversible unblock: the 6 ko-locale pair pages among
  // CTRL / THIN-K / FUCK now carry robots index:true (see
  // app/[locale]/compat/[a]/[b]/page.tsx and the "[2026-09-13]" entry in
  // .rankup/decisions.md), so list them here too —
  // an indexable page missing from the sitemap just reads as another
  // "discovered, not indexed" signal. Every other pair page (all other
  // codes, all other locales) is intentionally still excluded above.
  for (const a of VALIDATED_KO_COMPAT_CODES) {
    for (const b of VALIDATED_KO_COMPAT_CODES) {
      if (a === b) continue;
      entries.push(entry(`/compat/${encodeURIComponent(a)}/${encodeURIComponent(b)}`, 0.55, modified('ko', ['app/[locale]/compat/[a]/[b]/page.tsx', 'components/compat-page.tsx', 'lib/data/compat.ts', 'lib/data/personalities.json'], namespaces('/compat')), 'ko'));
    }
  }

  // Blog list
  addLocalized('/blog', 0.7, ['app/[locale]/blog/page.tsx', 'components/blog-list-page.tsx', 'lib/data/blog.ts']);

  // Blog articles
  for (const post of BLOG_POSTS) {
    addLocalized(`/blog/${post.slug}`, 0.8, ['app/[locale]/blog/[slug]/page.tsx', 'components/blog-post-page.tsx', 'lib/data/blog.ts']);
  }

  return entries;
}
