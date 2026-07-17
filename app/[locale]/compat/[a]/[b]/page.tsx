import {notFound} from 'next/navigation';
import {getTranslations, setRequestLocale} from 'next-intl/server';
import {routing} from '@/i18n/routing';
import {NORMAL_TYPES, TYPE_IMAGES} from '@/lib/data/personalities';
import {getCompatibility} from '@/lib/data/compat';
import {
  BASE_URL,
  buildAlternates,
  buildTwitter,
  DEFAULT_OG_IMAGE,
  getAlternateOgLocales,
  getCompatSeo,
  getLocaleUrl,
  getOgLocale,
} from '@/lib/metadata';
import {buildBreadcrumbSchema, buildWebPageSchema} from '@/lib/json-ld';
import {JsonLd} from '@/components/json-ld';
import {CompatPage} from '@/components/compat-page';

const ALL_CODES = [...NORMAL_TYPES.map(t => t.code), 'HHHH', 'DRUNK'];
const CODE_SET = new Set(ALL_CODES);

function isValidPair(a: string, b: string) {
  return CODE_SET.has(a) && CODE_SET.has(b) && a !== b;
}

export function generateStaticParams() {
  return routing.locales.flatMap(locale =>
    ALL_CODES.flatMap(a =>
      ALL_CODES
        .filter(b => b !== a)
        .map(b => ({locale, a, b})),
    ),
  );
}

export async function generateMetadata({params}: {params: Promise<{locale: string; a: string; b: string}>}) {
  const {locale, a, b} = await params;
  if (!isValidPair(a, b)) return {};

  const tPersonalities = await getTranslations({locale, namespace: 'personalities'});
  const tCompat = await getTranslations({locale, namespace: 'compat'});
  const compat = getCompatibility(a, b);
  const nameA = tPersonalities(`${a}.name`);
  const nameB = tPersonalities(`${b}.name`);
  const archetypeLabel = tCompat(`archetype.${compat.archetypeKey}.label`);
  const seo = getCompatSeo(locale, a, b, {
    nameA,
    nameB,
    score: compat.score,
    archetypeLabel,
  });
  const path = `/compat/${encodeURIComponent(a)}/${encodeURIComponent(b)}`;
  const imageA = TYPE_IMAGES[a];
  const imageB = TYPE_IMAGES[b];

  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    alternates: buildAlternates(locale, path),
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: getLocaleUrl(locale, path),
      siteName: 'SBTI',
      type: 'website',
      images: imageA
        ? [{url: `${BASE_URL}${imageA}`, width: 1024, height: 1024}]
        : imageB
          ? [{url: `${BASE_URL}${imageB}`, width: 1024, height: 1024}]
          : [DEFAULT_OG_IMAGE],
      locale: getOgLocale(locale),
      alternateLocale: getAlternateOgLocales(locale),
    },
    twitter: buildTwitter(
      seo.title,
      seo.description,
      imageA ? {url: `${BASE_URL}${imageA}`, width: 1024, height: 1024} : undefined,
    ),
    // Deliberately noindex: 2,808 pair pages sat in GSC "Crawled - currently
    // not indexed" and dragged sitewide quality signals (2026-07 audit). The
    // hub page carries the 궁합/compat search demand; pairs stay usable and
    // followable so link equity still flows.
    robots: {index: false, follow: true},
  };
}

export default async function CompatPairRoute({params}: {params: Promise<{locale: string; a: string; b: string}>}) {
  const {locale, a, b} = await params;
  if (!isValidPair(a, b)) notFound();

  setRequestLocale(locale);

  const tPersonalities = await getTranslations({locale, namespace: 'personalities'});
  const tCompat = await getTranslations({locale, namespace: 'compat'});
  const tBreadcrumb = await getTranslations({locale, namespace: 'breadcrumb'});
  const compat = getCompatibility(a, b);
  const nameA = tPersonalities(`${a}.name`);
  const nameB = tPersonalities(`${b}.name`);
  const archetypeLabel = tCompat(`archetype.${compat.archetypeKey}.label`);
  const seo = getCompatSeo(locale, a, b, {
    nameA,
    nameB,
    score: compat.score,
    archetypeLabel,
  });
  const path = `/compat/${encodeURIComponent(a)}/${encodeURIComponent(b)}`;
  const url = getLocaleUrl(locale, path);

  return (
    <>
      <JsonLd data={buildWebPageSchema(locale, seo.title, seo.description, url, {
        mainEntity: {
          '@type': 'Thing',
          name: `${a} × ${b} SBTI compatibility`,
          description: `${nameA} × ${nameB}: ${compat.score}% ${archetypeLabel}`,
        },
        about: [
          {'@type': 'Thing', name: 'SBTI compatibility'},
          {'@id': `${BASE_URL}/#quiz`},
        ],
        keywords: seo.keywords.join(', '),
      })} />
      <JsonLd data={buildBreadcrumbSchema(locale, [
        {name: tBreadcrumb('home'), path: ''},
        {name: tCompat('title'), path: '/compat'},
        {name: `${a} × ${b}`, path},
      ])} />
      <CompatPage initialA={a} initialB={b} />
    </>
  );
}
