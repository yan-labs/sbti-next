import {setRequestLocale} from 'next-intl/server';
import {routing} from '@/i18n/routing';
import {JsonLd} from '@/components/json-ld';
import {GameHubPage} from '@/components/games/game-hub-page';
import {ALL_GAMES_V2} from '@/lib/data/games';
import {isSiteLocale, type SiteLocale} from '@/lib/data/games/types';
import {
  buildAlternates,
  buildTwitter,
  DEFAULT_OG_IMAGE,
  fitSeoTitle,
  fitSeoDescription,
  getAlternateOgLocales,
  getLocaleUrl,
  getOgLocale,
} from '@/lib/metadata';
import {
  buildBreadcrumbSchema,
  buildItemListSchema,
  buildOrganizationSchema,
  buildWebSiteSchema,
} from '@/lib/json-ld';

const PAGE_TITLE: Record<SiteLocale, string> = {
  zh: '8 款游戏 × 谁是哪种玩家 — SBTI 游戏专属测试',
  en: '8 games × which player are you — SBTI Game Quizzes',
  ja: '8タイトル × どのプレイヤーか — SBTIゲーム別診断',
  ko: '8개 게임 × 어떤 플레이어인가 — SBTI 게임 테스트',
};

const PAGE_DESCRIPTION: Record<SiteLocale, string> = {
  zh: '8 款游戏的玩家类型测试，每款 31 道题映射到共享的 6 个行为轴。LoL、VALORANT、CS2、王者荣耀、守望先锋 2、Apex、PUBG、三角洲行动各 8 个原型，共 64 种玩家档案。',
  en: 'Player-type quizzes for 8 games. Each is 31 questions mapped to the same 6 behavioral axes. LoL, VALORANT, CS2, Honor of Kings, Overwatch 2, Apex, PUBG, Delta Force — 64 archetypes in total.',
  ja: '8タイトルのプレイヤー診断。各31問が共通の6軸にマッピングされる。LoL、VALORANT、CS2、王者栄耀、OW2、Apex、PUBG、デルタフォース、計64タイプ。',
  ko: '8개 게임 플레이어 유형 테스트. 각 31문항이 공통 6축에 매핑된다. LoL, VALORANT, CS2, 왕자영요, OW2, Apex, PUBG, 델타포스, 총 64 유형.',
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  const safeLocale: SiteLocale = isSiteLocale(locale) ? locale : 'en';
  const path = '/games';
  const title = fitSeoTitle(locale, PAGE_TITLE[safeLocale]);
  const description = fitSeoDescription(locale, PAGE_DESCRIPTION[safeLocale]);

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
      images: [DEFAULT_OG_IMAGE],
      locale: getOgLocale(locale),
      alternateLocale: getAlternateOgLocales(locale),
    },
    twitter: buildTwitter(title, description),
    robots: {index: true, follow: true},
  };
}

export default async function GamesRoute({
  params,
}: {
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  setRequestLocale(locale);
  const safeLocale: SiteLocale = isSiteLocale(locale) ? locale : 'en';
  const path = '/games';

  const items = ALL_GAMES_V2.map((g) => ({
    url: getLocaleUrl(locale, `/games/${g.slug}`),
    name: g.title[safeLocale],
    description: g.deck[safeLocale],
  }));

  return (
    <>
      <JsonLd data={buildWebSiteSchema(locale)} />
      <JsonLd data={buildOrganizationSchema()} />
      <JsonLd
        data={buildBreadcrumbSchema(locale, [
          {name: 'SBTI', path: ''},
          {name: 'Games', path},
        ])}
      />
      <JsonLd
        data={buildItemListSchema(
          locale,
          PAGE_TITLE[safeLocale],
          PAGE_DESCRIPTION[safeLocale],
          items,
        )}
      />
      <GameHubPage locale={safeLocale} />
    </>
  );
}
