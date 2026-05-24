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
  fitSeoDescription,
  fitSeoTitle,
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
  en: (g) => `${g} Compatibility Check | SBTI`,
  ja: (g) => `${g} プレイヤー相性診断`,
  ko: (g) => `${g} 플레이어 궁합 테스트`,
};
const DESC: Record<SiteLocale, (g: string) => string> = {
  zh: (g) => `选择 ${g} 8 个玩家原型中的两个，比较 6 个行为轴上的默契、冲突点和相性分数。页面会生成适合截图分享的队友匹配卡，帮你判断谁适合双排、谁更像灾难开黑。`,
  en: (g) => `Pick two of the 8 ${g} player archetypes, compare them across 6 behavior axes, and get a shareable compatibility score for duo queues, squads, or group chat arguments.`,
  ja: (g) => `${g} の8タイプから2つ選び、6つの行動軸で相性スコアと噛み合う点を比較。スクショで共有できるカードつきで、デュオやチームの相性を楽しく確認できます。`,
  ko: (g) => `${g} 8가지 플레이어 유형 중 둘을 골라 6개 행동 축에서 궁합 점수와 충돌 지점을 비교합니다. 듀오, 스쿼드, 친구 채팅방에 공유하기 좋은 매칭 카드도 함께 제공합니다.`,
};

function getCompatSeoGameTitle(gameTitle: string, locale: SiteLocale) {
  return locale === 'en' ? gameTitle.replace(/\s+Player Quiz$/i, '') : gameTitle;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{locale: string; slug: string}>;
}) {
  const {locale, slug} = await params;
  const game = getGameV2(slug);
  if (!game) return {};
  const loc = isSiteLocale(locale) ? locale : 'en';
  const gameTitle = getCompatSeoGameTitle(game.title[loc], loc);
  const title = fitSeoTitle(locale, TITLE[loc](gameTitle));
  const description = fitSeoDescription(locale, DESC[loc](gameTitle));
  const path = `/games/${slug}/compat`;
  // Use the game's cover.png as OG (every game has /game-quizzes/<slug>/cover.png).
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
