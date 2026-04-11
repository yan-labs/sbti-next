import {setRequestLocale} from 'next-intl/server';
import {getTranslations} from 'next-intl/server';
import {routing} from '@/i18n/routing';
import {NORMAL_TYPES, TYPE_IMAGES} from '@/lib/data/personalities';
import {BASE_URL, buildAlternates, buildTwitter, getLocaleUrl, getTypeSeo, DEFAULT_OG_IMAGE} from '@/lib/metadata';
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
  return <TypeDetailPage code={code} />;
}
