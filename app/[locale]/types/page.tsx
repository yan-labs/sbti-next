import {setRequestLocale} from 'next-intl/server';
import {buildAlternates, buildTwitter, getLocaleUrl, getPageSeo, DEFAULT_OG_IMAGE} from '@/lib/metadata';
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
    },
    twitter: buildTwitter(seo.title, seo.description),
    robots: {index: true, follow: true},
  };
}

export default async function Types({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  setRequestLocale(locale);
  return <TypesIndexPage />;
}
