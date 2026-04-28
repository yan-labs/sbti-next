import {setRequestLocale, getTranslations} from 'next-intl/server';
import {buildAlternates, buildTwitter, getLocaleUrl, getPageSeo, getOgLocale, getAlternateOgLocales, DEFAULT_OG_IMAGE} from '@/lib/metadata';
import {buildFAQPageSchema} from '@/lib/json-ld';
import {JsonLd} from '@/components/json-ld';
import {FAQPage} from '@/components/faq-page';

export async function generateMetadata({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  const seo = getPageSeo(locale, 'faq');
  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    alternates: buildAlternates(locale, '/faq'),
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: getLocaleUrl(locale, '/faq'),
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

// FAQ has exactly 10 Q&A pairs: q1/a1 through q10/a10
const FAQ_COUNT = 10;

export default async function FAQ({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  setRequestLocale(locale);

  const t = await getTranslations({locale, namespace: 'faq'});
  const qaPairs = Array.from({length: FAQ_COUNT}, (_, i) => ({
    question: t(`q${i + 1}`),
    answer: t(`a${i + 1}`),
  }));

  return (
    <>
      <JsonLd data={buildFAQPageSchema(qaPairs)} />
      <FAQPage />
    </>
  );
}
