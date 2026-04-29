import type {MetadataRoute} from 'next';
import {routing} from '@/i18n/routing';
import {BLOG_POSTS} from '@/lib/data/blog';

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
): MetadataRoute.Sitemap[number] {
  return {
    url: localeUrl('en', path),
    lastModified,
    priority,
    alternates: makeAlternates(path),
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  // Homepage
  entries.push(entry('', 1.0, '2026-04-10'));
  entries.push(entry('/test', 0.9, '2026-04-29'));

  // Type pages
  for (const code of TYPE_CODES) {
    entries.push(entry(`/type/${encodeURIComponent(code)}`, 0.8, '2026-04-10'));
  }

  // Static pages
  entries.push(entry('/about', 0.5, '2026-04-10'));
  entries.push(entry('/types', 0.7, '2026-04-10'));
  entries.push(entry('/faq', 0.5, '2026-04-10'));
  entries.push(entry('/privacy-policy', 0.3, '2026-04-10'));
  entries.push(entry('/terms', 0.3, '2026-04-10'));

  // Compatibility page
  entries.push(entry('/compat', 0.6, '2026-04-28'));
  for (const codeA of TYPE_CODES) {
    for (const codeB of TYPE_CODES) {
      if (codeA !== codeB) {
        entries.push(entry(`/compat/${encodeURIComponent(codeA)}/${encodeURIComponent(codeB)}`, 0.45, '2026-04-29'));
      }
    }
  }

  // Blog list
  entries.push(entry('/blog', 0.7));

  // Blog articles
  for (const post of BLOG_POSTS) {
    entries.push(entry(`/blog/${post.slug}`, 0.8, post.date));
  }

  return entries;
}
