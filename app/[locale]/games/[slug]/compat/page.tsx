import {notFound} from 'next/navigation';
import {setRequestLocale} from 'next-intl/server';
import {routing} from '@/i18n/routing';
import {JsonLd} from '@/components/json-ld';
import {GameCompatPage} from '@/components/games/game-compat-page';
import {ALL_GAMES_V2, getGameV2, isSiteLocale} from '@/lib/data/games/index';
import type {SiteLocale} from '@/lib/data/games/types';
import {
  BASE_URL,
  buildAlternates,
  buildTwitter,
  DEFAULT_OG_IMAGE,
  getAlternateOgLocales,
  getLocaleUrl,
  getOgLocale,
} from '@/lib/metadata';
import {buildBreadcrumbSchema, buildWebPageSchema} from '@/lib/json-ld';

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    ALL_GAMES_V2.map((game) => ({locale, slug: game.slug})),
  );
}

const TITLE: Record<SiteLocale, (game: string) => string> = {
  zh: (g) => `${g} 玩家相性测试 · 看你和队友合不合`,
  en: (g) => `${g} Player Compatibility — Will you sync or clash?`,
  ja: (g) => `${g} プレイヤー相性診断`,
  ko: (g) => `${g} 플레이어 궁합 테스트`,
};
const DESC: Record<SiteLocale, (g: string) => string> = {
  zh: (g) => `选 ${g} 8 个玩家原型中的两个，看 6 维上对得上几个轴 —— 1-3 秒出相性分数，截图能发的那种。`,
  en: (g) => `Pick two of the 8 ${g} player archetypes. Compare on 6 axes and see whether you'll sync or clash. Shareable card included.`,
  ja: (g) => `${g} の8タイプから2つ選んで、6軸での相性スコアを確認。シェアカードも生成できます。`,
  ko: (g) => `${g} 8가지 유형 중 둘을 골라 6축 궁합 점수를 확인. 공유 카드도 함께 제공됩니다.`,
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{locale: string; slug: string}>;
}) {
  const {locale, slug} = await params;
  const game = getGameV2(slug);
  if (!game) return {};
  const loc = isSiteLocale(locale) ? locale : 'en';
  const gameTitle = game.title[loc];
  const title = TITLE[loc](gameTitle);
  const description = DESC[loc](gameTitle);
  const path = `/games/${slug}/compat`;
  // Use the game's cover.png as OG (every game has /game-quizzes/<slug>/cover.png)
  const ogImage = {
    url: `${BASE_URL}/game-quizzes/${slug}/cover.png`,
    width: 1280,
    height: 720,
  };
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
      images: [ogImage],
      locale: getOgLocale(locale),
      alternateLocale: getAlternateOgLocales(locale),
    },
    twitter: buildTwitter(title, description, {url: ogImage.url}),
    robots: {index: true, follow: true},
  };
}

export default async function GameCompatRoute({
  params,
}: {
  params: Promise<{locale: string; slug: string}>;
}) {
  const {locale, slug} = await params;
  const game = getGameV2(slug);
  if (!game) notFound();
  setRequestLocale(locale);
  const loc: SiteLocale = isSiteLocale(locale) ? locale : 'en';
  const gameTitle = game.title[loc];
  const url = getLocaleUrl(locale, `/games/${slug}/compat`);
  const title = TITLE[loc](gameTitle);
  const description = DESC[loc](gameTitle);

  return (
    <>
      <JsonLd data={buildWebPageSchema(locale, title, description, url)} />
      <JsonLd
        data={buildBreadcrumbSchema(locale, [
          {name: 'SBTI', path: ''},
          {name: gameTitle, path: `/games/${slug}`},
          {name: 'Compatibility', path: `/games/${slug}/compat`},
        ])}
      />
      <GameCompatPage game={game} locale={loc} />
    </>
  );
}
