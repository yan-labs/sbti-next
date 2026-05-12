import type {MetadataRoute} from 'next';
import {routing} from '@/i18n/routing';
import {BLOG_POSTS} from '@/lib/data/blog';
import {GAME_SLUGS} from '@/lib/data/game-quizzes';

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
  }

  // Type pages
  for (const code of TYPE_CODES) {
    addLocalized(`/type/${encodeURIComponent(code)}`, 0.8, '2026-04-10');
  }

  // Shareable result pages. Personal result state lives in a short query
  // parameter, while these clean URLs are the canonical indexable targets.
  for (const code of TYPE_CODES) {
    addLocalized(`/result/${encodeURIComponent(code)}`, 0.75, '2026-04-29');
  }

  // Static pages
  addLocalized('/about', 0.5, '2026-04-10');
  addLocalized('/types', 0.7, '2026-04-10');
  addLocalized('/faq', 0.5, '2026-04-10');
  addLocalized('/privacy-policy', 0.3, '2026-04-10');
  addLocalized('/terms', 0.3, '2026-04-10');

  // Compatibility page
  addLocalized('/compat', 0.6, '2026-04-28');
  for (const codeA of TYPE_CODES) {
    for (const codeB of TYPE_CODES) {
      if (codeA !== codeB) {
        addLocalized(`/compat/${encodeURIComponent(codeA)}/${encodeURIComponent(codeB)}`, 0.45, '2026-04-29');
      }
    }
  }

  // Blog list
  addLocalized('/blog', 0.7);

  // Blog articles
  for (const post of BLOG_POSTS) {
    addLocalized(`/blog/${post.slug}`, 0.8, post.date);
  }

  return entries;
}
