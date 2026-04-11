import {setRequestLocale} from 'next-intl/server';
import {SBTIApp} from '@/components/sbti-app';
import {buildAlternates, buildTwitter, getPageSeo, getLocaleUrl, DEFAULT_OG_IMAGE} from '@/lib/metadata';

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

  return <SBTIApp />;
}
