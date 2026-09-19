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
  bareGameName,
} from '@/lib/metadata';
import {buildBreadcrumbSchema, buildOrganizationSchema, buildWebSiteSchema} from '@/lib/json-ld';
import {GAME_SLUGS, getGameV2, isSiteLocale, type SiteLocale} from '@/lib/data/games/index';

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    GAME_SLUGS.map((slug) => ({locale, slug})),
  );
}

// Distinct from the game hub title so the (noindex) quiz screen never
// duplicates the hub's <title>.
const PLAY_TITLE: Record<SiteLocale, (name: string) => string> = {
  zh: (name) => `开始 ${name} 玩家人格测试：30 道题 | SBTI`,
  en: (name) => `Take the ${name} Player Quiz: 30 Questions | SBTI`,
  ja: (name) => `${name} プレイヤー性格診断を始める：全30問 | SBTI`,
  ko: (name) => `${name} 플레이어 성격 테스트 시작: 30문항 | SBTI`,
};

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
  const title = fitSeoTitle(locale, PLAY_TITLE[safeLocale](bareGameName(safeLocale, game.title[safeLocale])));
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
    // Quiz-in-progress screens have no standalone content worth indexing;
    // the game hub page is the indexable entry point.
    robots: {
      index: false,
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
