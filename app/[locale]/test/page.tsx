import {setRequestLocale} from 'next-intl/server';
import {SBTIApp} from '@/components/sbti-app';
import {
  buildAlternates,
  buildTwitter,
  DEFAULT_OG_IMAGE,
  getAlternateOgLocales,
  getLocaleUrl,
  getOgLocale,
  getPageSeo,
} from '@/lib/metadata';
import {buildOrganizationSchema, buildQuizSchema, buildWebSiteSchema} from '@/lib/json-ld';
import {JsonLd} from '@/components/json-ld';

export async function generateMetadata({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  const seo = getPageSeo(locale, 'home');
  const title = seo.title;
  const description = seo.description;

  return {
    title,
    description,
    keywords: seo.keywords,
    alternates: buildAlternates(locale, '/test'),
    openGraph: {
      title,
      description,
      url: getLocaleUrl(locale, '/test'),
      siteName: 'SBTI',
      type: 'website',
      images: [DEFAULT_OG_IMAGE],
      locale: getOgLocale(locale),
      alternateLocale: getAlternateOgLocales(locale),
    },
    twitter: buildTwitter(title, description),
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function TestPage({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  setRequestLocale(locale);

  return (
    <>
      <JsonLd data={buildWebSiteSchema(locale)} />
      <JsonLd data={buildOrganizationSchema()} />
      <JsonLd data={buildQuizSchema(locale)} />
      <h1 className="sr-only">{getPageSeo(locale, 'home').title}</h1>
      <SBTIApp autoStart />
    </>
  );
}
