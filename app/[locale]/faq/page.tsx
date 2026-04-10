import {setRequestLocale} from 'next-intl/server';
import {getTranslations} from 'next-intl/server';
import {buildAlternates, BASE_URL} from '@/lib/metadata';
import {FAQPage} from '@/components/faq-page';

export async function generateMetadata({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: 'faq'});
  return {
    title: t('metaTitle'),
    description: t('metaDescription'),
    alternates: buildAlternates(locale, '/faq'),
    openGraph: {
      title: t('metaTitle'),
      description: t('metaDescription'),
      url: `${BASE_URL}/${locale}/faq`,
      siteName: 'SBTI',
      type: 'website',
    },
    robots: {index: true, follow: true},
  };
}

export default async function FAQ({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  setRequestLocale(locale);
  return <FAQPage />;
}
