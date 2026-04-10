import {setRequestLocale} from 'next-intl/server';
import {getTranslations} from 'next-intl/server';
import {buildAlternates, BASE_URL} from '@/lib/metadata';
import {TermsPage} from '@/components/terms-page';

export async function generateMetadata({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: 'terms'});
  return {
    title: t('metaTitle'),
    description: t('metaDescription'),
    alternates: buildAlternates(locale, '/terms'),
    openGraph: {
      title: t('metaTitle'),
      description: t('metaDescription'),
      url: `${BASE_URL}/${locale}/terms`,
      siteName: 'SBTI',
      type: 'website',
    },
    robots: {index: true, follow: true},
  };
}

export default async function Terms({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  setRequestLocale(locale);
  return <TermsPage />;
}
