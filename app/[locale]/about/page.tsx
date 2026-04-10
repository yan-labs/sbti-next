import {setRequestLocale} from 'next-intl/server';
import {getTranslations} from 'next-intl/server';
import {buildAlternates, BASE_URL} from '@/lib/metadata';
import {AboutPage} from '@/components/about-page';

export async function generateMetadata({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: 'about'});
  return {
    title: t('metaTitle'),
    description: t('metaDescription'),
    alternates: buildAlternates(locale, '/about'),
    openGraph: {
      title: t('metaTitle'),
      description: t('metaDescription'),
      url: `${BASE_URL}/${locale}/about`,
      siteName: 'SBTI',
      type: 'website',
    },
    robots: {index: true, follow: true},
  };
}

export default async function About({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  setRequestLocale(locale);
  return <AboutPage />;
}
