import type {MetadataRoute} from 'next';
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
  lastModified: string = '2026-04-12',
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

  function addLocalized(path: string, priority: number, lastModified?: string) {
    for (const locale of routing.locales) {
      entries.push(entry(path, priority, lastModified, locale));
    }
  }

  // Homepage
  addLocalized('', 1.0, '2026-04-10');
  addLocalized('/test', 0.9, '2026-04-29');

  // Game personality tests
  for (const slug of GAME_SLUGS) {
    addLocalized(`/games/${slug}`, 0.82, '2026-05-11');
    addLocalized(`/games/${slug}/compat`, 0.6, '2026-05-12');
  }

  // Game archetype result pages (8 games × 8 archetypes = 64 routes)
  for (const game of ALL_GAMES_V2) {
    for (const archetype of game.archetypes) {
      addLocalized(`/games/${game.slug}/result/${archetype.slug}`, 0.78, '2026-05-12');
    }
  }

  // Type pages
  for (const code of TYPE_CODES) {
    addLocalized(`/type/${encodeURIComponent(code)}`, 0.8, '2026-04-10');
  }

  // /result/* share landing pages are noindexed (they duplicate /type/*,
  // which is what actually ranks) and therefore stay out of the sitemap.

  // Static pages
  addLocalized('/about', 0.5, '2026-04-10');
  addLocalized('/types', 0.7, '2026-04-10');
  addLocalized('/faq', 0.5, '2026-04-10');
  addLocalized('/privacy-policy', 0.3, '2026-04-10');
  addLocalized('/terms', 0.3, '2026-04-10');

  // Compatibility hub only. The 27×26 pair pages stay reachable through
  // in-page links but are deliberately kept out of the sitemap: GSC showed
  // ~890 of them stuck in "Crawled - currently not indexed", dragging down
  // sitewide quality signals (2026-07 audit).
  addLocalized('/compat', 0.6, '2026-04-28');

  // Blog list
  addLocalized('/blog', 0.7);

  // Blog articles
  for (const post of BLOG_POSTS) {
    addLocalized(`/blog/${post.slug}`, 0.8, post.date);
  }

  return entries;
}
