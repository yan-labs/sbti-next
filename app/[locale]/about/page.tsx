import {setRequestLocale} from 'next-intl/server';
import {buildAlternates, buildTwitter, getLocaleUrl, getPageSeo, getOgLocale, getAlternateOgLocales, DEFAULT_OG_IMAGE} from '@/lib/metadata';
import {buildArticleSchema} from '@/lib/json-ld';
import {JsonLd} from '@/components/json-ld';
import {AboutPage} from '@/components/about-page';

export async function generateMetadata({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  const seo = getPageSeo(locale, 'about');
  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    alternates: buildAlternates(locale, '/about'),
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: getLocaleUrl(locale, '/about'),
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

export default async function About({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  setRequestLocale(locale);
  const seo = getPageSeo(locale, 'about');
  const url = getLocaleUrl(locale, '/about');
  return (
    <>
      <JsonLd data={buildArticleSchema(locale, {
        headline: seo.title,
        description: seo.description,
        datePublished: '2026-04-12',
        dateModified: '2026-04-12',
        url,
      })} />
      <AboutPage />
    </>
  );
}
