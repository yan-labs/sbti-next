import {setRequestLocale} from 'next-intl/server';
import {SBTIApp} from '@/components/sbti-app';
import {buildAlternates, buildTwitter, getPageSeo, getLocaleUrl, getOgLocale, getAlternateOgLocales, DEFAULT_OG_IMAGE} from '@/lib/metadata';
import {buildWebSiteSchema, buildOrganizationSchema, buildQuizSchema} from '@/lib/json-ld';
import {JsonLd} from '@/components/json-ld';

export async function generateMetadata({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  const seo = getPageSeo(locale, 'home');
  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    alternates: buildAlternates(locale),
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: getLocaleUrl(locale),
      siteName: 'SBTI',
      type: 'website',
      images: [DEFAULT_OG_IMAGE],
      locale: getOgLocale(locale),
      alternateLocale: getAlternateOgLocales(locale),
    },
    twitter: buildTwitter(seo.title, seo.description),
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function Home({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  setRequestLocale(locale);

  return (
    <>
      <JsonLd data={buildWebSiteSchema(locale)} />
      <JsonLd data={buildOrganizationSchema()} />
      <JsonLd data={buildQuizSchema(locale)} />
      <SBTIApp />
    </>
  );
}
