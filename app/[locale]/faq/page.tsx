import {setRequestLocale} from 'next-intl/server';
import {getTranslations} from 'next-intl/server';
import {buildAlternates, buildTwitter, BASE_URL, DEFAULT_OG_IMAGE} from '@/lib/metadata';
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
      images: [DEFAULT_OG_IMAGE],
    },
    twitter: buildTwitter(t('metaTitle'), t('metaDescription')),
    robots: {index: true, follow: true},
  };
}

export default async function FAQ({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  setRequestLocale(locale);
  return <FAQPage />;
}
