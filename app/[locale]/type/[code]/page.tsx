import {setRequestLocale} from 'next-intl/server';
import {getTranslations} from 'next-intl/server';
import {routing} from '@/i18n/routing';
import {NORMAL_TYPES, TYPE_IMAGES} from '@/lib/data/personalities';
import {BASE_URL, buildAlternates, buildTwitter, getLocaleUrl, getTypeSeo, getOgLocale, getAlternateOgLocales, DEFAULT_OG_IMAGE} from '@/lib/metadata';
import {buildDefinedTermSchema, buildBreadcrumbSchema} from '@/lib/json-ld';
import {JsonLd} from '@/components/json-ld';
import {TypeDetailPage} from '@/components/type-detail-page';

const ALL_CODES = [...NORMAL_TYPES.map(t => t.code), 'HHHH', 'DRUNK'];

export function generateStaticParams() {
  return routing.locales.flatMap(locale =>
    ALL_CODES.map(code => ({locale, code}))
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
  const seo = getTypeSeo(locale, code, name, intro);

  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    alternates: buildAlternates(locale, `/type/${code}`),
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: getLocaleUrl(locale, `/type/${code}`),
      siteName: 'SBTI',
      type: 'article',
      images: TYPE_IMAGES[code] ? [{url: `${BASE_URL}${TYPE_IMAGES[code]}`, width: 1024, height: 1024}] : [DEFAULT_OG_IMAGE],
      locale: getOgLocale(locale),
      alternateLocale: getAlternateOgLocales(locale),
    },
    twitter: buildTwitter(
      seo.title,
      seo.description,
      TYPE_IMAGES[code] ? {url: `${BASE_URL}${TYPE_IMAGES[code]}`, width: 1024, height: 1024} : undefined,
    ),
    robots: {index: true, follow: true},
  };
}

export default async function TypePage({params}: {params: Promise<{locale: string; code: string}>}) {
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

  const typeUrl = getLocaleUrl(locale, `/type/${code}`);
  const imageUrl = TYPE_IMAGES[code] ? `${BASE_URL}${TYPE_IMAGES[code]}` : undefined;

  const tBreadcrumb = await getTranslations({locale, namespace: 'breadcrumb'});

  return (
    <>
      <JsonLd data={buildDefinedTermSchema(locale, code, name, intro, typeUrl, imageUrl)} />
      <JsonLd data={buildBreadcrumbSchema(locale, [
        {name: tBreadcrumb('home'), path: ''},
        {name: tBreadcrumb('types'), path: '/types'},
        {name: code, path: `/type/${code}`},
      ])} />
      <TypeDetailPage code={code} />
    </>
  );
}
