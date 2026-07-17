import {setRequestLocale} from 'next-intl/server';
import {getTranslations} from 'next-intl/server';
import {routing} from '@/i18n/routing';
import {NORMAL_TYPES, TYPE_IMAGES} from '@/lib/data/personalities';
import {
  BASE_URL,
  DEFAULT_OG_IMAGE,
  buildAlternates,
  buildTwitter,
  getAlternateOgLocales,
  getLocaleUrl,
  getOgLocale,
  getResultSeo,
} from '@/lib/metadata';
import {buildBreadcrumbSchema} from '@/lib/json-ld';
import {JsonLd} from '@/components/json-ld';
import {ResultSharePage} from '@/components/result-share-page';

const ALL_CODES = [...NORMAL_TYPES.map(t => t.code), 'HHHH', 'DRUNK'];

export function generateStaticParams() {
  return routing.locales.flatMap(locale =>
    ALL_CODES.map(code => ({locale, code})),
  );
}

export async function generateMetadata({params}: {params: Promise<{locale: string; code: string}>}) {
  const {locale, code} = await params;
  const t = await getTranslations({locale, namespace: 'personalities'});

  let name: string, intro: string;
  try {
    name = t(`${code}.name`);
    intro = t(`${code}.intro`);
  } catch {
    name = code;
    intro = '';
  }

  const seo = getResultSeo(locale, code, name, intro);
  const resultPath = `/result/${encodeURIComponent(code)}`;
  const image = TYPE_IMAGES[code] ? {url: `${BASE_URL}${TYPE_IMAGES[code]}`, width: 1024, height: 1024} : DEFAULT_OG_IMAGE;

  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    alternates: buildAlternates(locale, resultPath),
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: getLocaleUrl(locale, resultPath),
      siteName: 'SBTI',
      type: 'website',
      images: [image],
      locale: getOgLocale(locale),
      alternateLocale: getAlternateOgLocales(locale),
    },
    twitter: buildTwitter(seo.title, seo.description, image),
    // Deliberately noindex: these are share landing pages that duplicate
    // /type/* content (the page that actually ranks for type queries) and
    // had almost no internal links — 108 URLs of index dilution. Social
    // shares keep working; search demand is served by /type/*.
    robots: {index: false, follow: true},
  };
}

export default async function ResultPage({params}: {params: Promise<{locale: string; code: string}>}) {
  const {locale, code} = await params;
  setRequestLocale(locale);

  const t = await getTranslations({locale, namespace: 'personalities'});
  let name: string, intro: string;
  try {
    name = t(`${code}.name`);
    intro = t(`${code}.intro`);
  } catch {
    name = code;
    intro = '';
  }

  const seo = getResultSeo(locale, code, name, intro);
  const tBreadcrumb = await getTranslations({locale, namespace: 'breadcrumb'});
  const resultPath = `/result/${encodeURIComponent(code)}`;

  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: seo.title,
          description: seo.description,
          url: getLocaleUrl(locale, resultPath),
          inLanguage: locale === 'zh' ? 'zh-CN' : locale,
          isPartOf: {'@id': `${BASE_URL}/#website`},
          about: [
            {'@type': 'Thing', name: 'SBTI result'},
            {'@type': 'Thing', name: `${code} SBTI`},
          ],
        }}
      />
      <JsonLd data={buildBreadcrumbSchema(locale, [
        {name: tBreadcrumb('home'), path: ''},
        {name: code, path: resultPath},
      ])} />
      <ResultSharePage code={code} />
    </>
  );
}
