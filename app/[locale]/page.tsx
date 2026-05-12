import {setRequestLocale} from 'next-intl/server';
import {buildAlternates, buildTwitter, getPageSeo, getLocaleUrl, getOgLocale, getAlternateOgLocales, DEFAULT_OG_IMAGE} from '@/lib/metadata';
import {buildWebSiteSchema, buildOrganizationSchema, buildWebPageSchema} from '@/lib/json-ld';
import {JsonLd} from '@/components/json-ld';
import {TestHubPage} from '@/components/test-hub-page';
import {ALL_GAME_QUIZZES, localize} from '@/lib/data/game-quizzes';

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
      locale: getOgLocale(locale),
      alternateLocale: getAlternateOgLocales(locale),
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
  const seo = getPageSeo(locale, 'home');

  return (
    <>
      <JsonLd data={buildWebSiteSchema(locale)} />
      <JsonLd data={buildOrganizationSchema()} />
      <JsonLd
        data={buildWebPageSchema(locale, seo.title, seo.description, getLocaleUrl(locale), {
          mainEntity: {
            '@type': 'ItemList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'SBTI Personality Test',
                url: getLocaleUrl(locale, '/test'),
              },
              ...ALL_GAME_QUIZZES.map((game, index) => ({
                '@type': 'ListItem',
                position: index + 2,
                name: localize(game.title, locale),
                url: getLocaleUrl(locale, `/games/${game.slug}`),
              })),
            ],
          },
        })}
      />
      <TestHubPage locale={locale} />
    </>
  );
}
