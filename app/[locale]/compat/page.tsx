import {setRequestLocale} from 'next-intl/server';
import {routing} from '@/i18n/routing';
import {buildAlternates, buildTwitter, getLocaleUrl, getCompatSeo, DEFAULT_OG_IMAGE} from '@/lib/metadata';
import {CompatPage} from '@/components/compat-page';
import {Suspense} from 'react';

export function generateStaticParams() {
  return routing.locales.map(locale => ({locale}));
}

export async function generateMetadata({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  // Query params (a/b) are only available client-side in a static export
  const seo = getCompatSeo(locale);

  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    alternates: buildAlternates(locale, '/compat'),
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: getLocaleUrl(locale, '/compat'),
      siteName: 'SBTI',
      type: 'website',
      images: [DEFAULT_OG_IMAGE],
    },
    twitter: buildTwitter(seo.title, seo.description),
    robots: {index: true, follow: true},
  };
}

export default async function CompatRoute({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  setRequestLocale(locale);
  return (
    <Suspense>
      <CompatPage />
    </Suspense>
  );
}
