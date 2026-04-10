import {setRequestLocale} from 'next-intl/server';
import {getTranslations} from 'next-intl/server';
import {buildAlternates, buildTwitter, BASE_URL, DEFAULT_OG_IMAGE} from '@/lib/metadata';
import {TypesIndexPage} from '@/components/types-index-page';

export async function generateMetadata({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: 'typesIndex'});
  return {
    title: t('metaTitle'),
    description: t('metaDescription'),
    alternates: buildAlternates(locale, '/types'),
    openGraph: {
      title: t('metaTitle'),
      description: t('metaDescription'),
      url: `${BASE_URL}/${locale}/types`,
      siteName: 'SBTI',
      type: 'website',
      images: [DEFAULT_OG_IMAGE],
    },
    twitter: buildTwitter(t('metaTitle'), t('metaDescription')),
    robots: {index: true, follow: true},
  };
}

export default async function Types({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  setRequestLocale(locale);
  return <TypesIndexPage />;
}
