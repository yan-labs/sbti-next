import {setRequestLocale} from 'next-intl/server';
import {getTranslations} from 'next-intl/server';
import {
  buildAlternates,
  buildTwitter,
  fitSeoDescription,
  fitSeoTitle,
  getAlternateOgLocales,
  getLocaleUrl,
  getOgLocale,
  DEFAULT_OG_IMAGE,
} from '@/lib/metadata';
import {TermsPage} from '@/components/terms-page';

export async function generateMetadata({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: 'terms'});
  const title = fitSeoTitle(locale, t('metaTitle'));
  const description = fitSeoDescription(locale, t('metaDescription'));
  return {
    title,
    description,
    alternates: buildAlternates(locale, '/terms'),
    openGraph: {
      title,
      description,
      url: getLocaleUrl(locale, '/terms'),
      siteName: 'SBTI',
      type: 'website',
      images: [DEFAULT_OG_IMAGE],
      locale: getOgLocale(locale),
      alternateLocale: getAlternateOgLocales(locale),
    },
    twitter: buildTwitter(title, description),
    robots: {index: true, follow: true},
  };
}

export default async function Terms({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  setRequestLocale(locale);
  return <TermsPage />;
}
