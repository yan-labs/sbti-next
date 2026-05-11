import {setRequestLocale} from 'next-intl/server';
import {getTranslations} from 'next-intl/server';
import {
  buildAlternates,
  buildTwitter,
  DEFAULT_OG_IMAGE,
  fitSeoDescription,
  fitSeoTitle,
  getAlternateOgLocales,
  getLocaleUrl,
  getOgLocale,
} from '@/lib/metadata';
import {buildBreadcrumbSchema, buildWebPageSchema} from '@/lib/json-ld';
import {JsonLd} from '@/components/json-ld';
import {PrivacyPolicyPage} from '@/components/privacy-policy-page';

export async function generateMetadata({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: 'privacy'});
  const title = fitSeoTitle(locale, t('metaTitle'));
  const description = fitSeoDescription(locale, t('metaDescription'));
  return {
    title,
    description,
    alternates: buildAlternates(locale, '/privacy-policy'),
    openGraph: {
      title,
      description,
      url: getLocaleUrl(locale, '/privacy-policy'),
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

export default async function PrivacyPolicy({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  setRequestLocale(locale);
  const t = await getTranslations({locale, namespace: 'privacy'});
  const tBreadcrumb = await getTranslations({locale, namespace: 'breadcrumb'});
  const title = fitSeoTitle(locale, t('metaTitle'));
  const description = fitSeoDescription(locale, t('metaDescription'));
  const path = '/privacy-policy';

  return (
    <>
      <JsonLd data={buildWebPageSchema(locale, title, description, getLocaleUrl(locale, path))} />
      <JsonLd data={buildBreadcrumbSchema(locale, [
        {name: tBreadcrumb('home'), path: ''},
        {name: t('pageTitle'), path},
      ])} />
      <PrivacyPolicyPage />
    </>
  );
}
