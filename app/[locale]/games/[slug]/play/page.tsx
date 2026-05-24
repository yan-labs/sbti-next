import {notFound} from 'next/navigation';
import {setRequestLocale} from 'next-intl/server';
import {routing} from '@/i18n/routing';
import {JsonLd} from '@/components/json-ld';
import {GameQuizApp} from '@/components/game-quiz-app';
import {
  BASE_URL,
  buildAlternates,
  buildTwitter,
  DEFAULT_OG_IMAGE,
  fitSeoTitle,
  fitSeoDescription,
  getAlternateOgLocales,
  getLocaleUrl,
  getOgLocale,
} from '@/lib/metadata';
import {buildBreadcrumbSchema, buildOrganizationSchema, buildWebSiteSchema} from '@/lib/json-ld';
import {GAME_SLUGS, getGameV2, isSiteLocale, type SiteLocale} from '@/lib/data/games/index';

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    GAME_SLUGS.map((slug) => ({locale, slug})),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{locale: string; slug: string}>;
}) {
  const {locale, slug} = await params;
  const game = getGameV2(slug);
  if (!game) return {};

  const safeLocale: SiteLocale = isSiteLocale(locale) ? locale : 'en';
  const path = `/games/${game.slug}/play`;
  const title = fitSeoTitle(locale, game.title[safeLocale]);
  const description = fitSeoDescription(locale, game.description[safeLocale]);
  const image = game.cover
    ? {url: `${BASE_URL}${game.cover.src}`, width: 1200, height: 675}
    : DEFAULT_OG_IMAGE;

  return {
    title,
    description,
    alternates: buildAlternates(locale, path),
    openGraph: {
      title,
      description,
      url: getLocaleUrl(locale, path),
      siteName: 'SBTI',
      type: 'website',
      images: [image],
      locale: getOgLocale(locale),
      alternateLocale: getAlternateOgLocales(locale),
    },
    twitter: buildTwitter(title, description, image),
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function GamePlayPage({
  params,
}: {
  params: Promise<{locale: string; slug: string}>;
}) {
  const {locale, slug} = await params;
  const game = getGameV2(slug);
  if (!game) notFound();

  setRequestLocale(locale);
  const safeLocale: SiteLocale = isSiteLocale(locale) ? locale : 'en';
  const path = `/games/${game.slug}/play`;
  const title = game.title[safeLocale];

  return (
    <div data-game={game.slug}>
      <JsonLd data={buildWebSiteSchema(locale)} />
      <JsonLd data={buildOrganizationSchema()} />
      <JsonLd
        data={buildBreadcrumbSchema(locale, [
          {name: 'SBTI', path: ''},
          {name: title, path: `/games/${game.slug}`},
          {name: title, path},
        ])}
      />
      <GameQuizApp game={game} locale={safeLocale} initialPhase="quiz" />
    </div>
  );
}
