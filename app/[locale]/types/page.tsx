import {setRequestLocale} from 'next-intl/server';
import {getTranslations} from 'next-intl/server';
import {buildAlternates, buildTwitter, getLocaleUrl, getPageSeo, getOgLocale, getAlternateOgLocales, DEFAULT_OG_IMAGE} from '@/lib/metadata';
import {buildBreadcrumbSchema, buildCollectionPageSchema} from '@/lib/json-ld';
import {JsonLd} from '@/components/json-ld';
import {NORMAL_TYPES} from '@/lib/data/personalities';
import {TypesIndexPage} from '@/components/types-index-page';

export async function generateMetadata({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  const seo = getPageSeo(locale, 'types');
  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    alternates: buildAlternates(locale, '/types'),
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: getLocaleUrl(locale, '/types'),
      siteName: 'SBTI',
      type: 'website',
      images: [DEFAULT_OG_IMAGE],
      locale: getOgLocale(locale),
      alternateLocale: getAlternateOgLocales(locale),
    },
    twitter: buildTwitter(seo.title, seo.description),
    robots: {index: true, follow: true},
  };
}

// All 27 type codes: 25 normal + HHHH + DRUNK
const ALL_TYPE_CODES = [...NORMAL_TYPES.map(t => t.code), 'HHHH', 'DRUNK'];

export default async function Types({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  setRequestLocale(locale);
  const seo = getPageSeo(locale, 'types');
  const url = getLocaleUrl(locale, '/types');
  const tBreadcrumb = await getTranslations({locale, namespace: 'breadcrumb'});
  return (
    <>
      <JsonLd data={buildCollectionPageSchema(locale, seo.title, seo.description, url, ALL_TYPE_CODES)} />
      <JsonLd data={buildBreadcrumbSchema(locale, [
        {name: tBreadcrumb('home'), path: ''},
        {name: tBreadcrumb('types'), path: '/types'},
      ])} />
      <TypesIndexPage />
    </>
  );
}
