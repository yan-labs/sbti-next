import {notFound} from 'next/navigation';
import {setRequestLocale} from 'next-intl/server';
import {routing} from '@/i18n/routing';
import {JsonLd} from '@/components/json-ld';
import {PerGamePage} from '@/components/games/per-game-page';
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
import {
  buildBreadcrumbSchema,
  buildFAQPageSchema,
  buildGameQuizSchema,
  buildItemListSchema,
  buildHowToSchema,
  buildOrganizationSchema,
  buildWebSiteSchema,
} from '@/lib/json-ld';
import {GAME_SLUGS, getGameV2, isSiteLocale, type SiteLocale} from '@/lib/data/games/index';
import {buildGameHubFAQs} from '@/lib/data/games/faqs';

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
  const path = `/games/${game.slug}`;
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
    robots: {index: true, follow: true},
  };
}

export default async function GameHubRoute({
  params,
}: {
  params: Promise<{locale: string; slug: string}>;
}) {
  const {locale, slug} = await params;
  const game = getGameV2(slug);
  if (!game) notFound();

  setRequestLocale(locale);
  const safeLocale: SiteLocale = isSiteLocale(locale) ? locale : 'en';
  const path = `/games/${game.slug}`;
  const pageUrl = getLocaleUrl(locale, path);
  const title = game.title[safeLocale];
  const description = game.description[safeLocale];
  const imageUrl = game.cover ? `${BASE_URL}${game.cover.src}` : DEFAULT_OG_IMAGE.url;

  // ItemList — one entry per archetype
  const archetypeItems = game.archetypes.map((arch) => ({
    url: getLocaleUrl(locale, `/games/${game.slug}/result/${arch.slug}`),
    name: arch.name[safeLocale],
    description: arch.oneLiner[safeLocale],
  }));

  // HowTo — 3-step quiz process
  const howToSteps: Record<SiteLocale, {name: string; text: string}[]> = {
    zh: [
      {name: '回答 30 道题', text: '每道题有 4 个选项，选最符合你游戏风格的那个，大约 2-3 分钟。'},
      {name: '六维分析', text: '系统从 6 个维度分析你的答案，生成专属玩家身份码。'},
      {name: '获取原型和雷达图', text: '查看你的玩家原型、六维雷达图，截图分享给朋友。'},
    ],
    en: [
      {name: 'Answer 30 questions', text: 'Four options per question — pick the one closest to how you actually play. About 2-3 minutes.'},
      {name: '6-axis analysis', text: 'The system maps your answers across 6 behavioral axes and derives your player code.'},
      {name: 'Get your archetype and radar', text: 'See your player archetype, 6-axis radar chart, and share the result.'},
    ],
    ja: [
      {name: '30問に答える', text: '各問4択。自分のプレイに近いものを選ぼう。2〜3分で終わる。'},
      {name: '6軸分析', text: 'システムが6つの行動軸でマッピングし、プレイヤーコードを生成。'},
      {name: 'アーキタイプとレーダーを受け取る', text: 'プレイヤーアーキタイプと6軸レーダーを確認してシェアしよう。'},
    ],
    ko: [
      {name: '30문항 답하기', text: '문항당 4개 선택지. 내 플레이와 가장 비슷한 것을 고르면 된다. 2~3분 소요.'},
      {name: '6축 분석', text: '시스템이 6개 행동 축으로 답변을 매핑해 플레이어 코드를 생성한다.'},
      {name: '유형과 레이더 받기', text: '플레이어 유형과 6축 레이더를 확인하고 결과를 공유하자.'},
    ],
  };

  const howToNames: Record<SiteLocale, string> = {
    zh: `如何完成 ${title} 玩家类型测试`,
    en: `How to take the ${title} player quiz`,
    ja: `${title} プレイヤー診断の受け方`,
    ko: `${title} 플레이어 테스트 방법`,
  };

  const howToDescs: Record<SiteLocale, string> = {
    zh: `通过 30 道题，了解你在 ${title} 的玩家类型，获取 6 维雷达和玩家身份码。`,
    en: `Find your ${title} player archetype in 30 questions — get a 6-axis radar and player code.`,
    ja: `30問で ${title} のプレイヤーアーキタイプを発見し、6軸レーダーとコードを取得。`,
    ko: `30문항으로 ${title} 플레이어 유형을 찾고 6축 레이더와 코드를 받아보자.`,
  };

  const itemListNames: Record<SiteLocale, string> = {
    zh: `${title} 玩家类型列表`,
    en: `${title} Player Archetypes`,
    ja: `${title} プレイヤータイプ一覧`,
    ko: `${title} 플레이어 유형 목록`,
  };

  const itemListDescs: Record<SiteLocale, string> = {
    zh: `${title} 共有 ${game.archetypes.length} 种玩家原型，完成测试获取你的类型。`,
    en: `${title} has ${game.archetypes.length} player archetypes. Take the quiz to find yours.`,
    ja: `${title} の ${game.archetypes.length} 種類のプレイヤーアーキタイプ。診断して自分のタイプを見つけよう。`,
    ko: `${title}의 ${game.archetypes.length}가지 플레이어 유형. 테스트하고 내 유형을 찾아보자.`,
  };

  return (
    <>
      <JsonLd data={buildWebSiteSchema(locale)} />
      <JsonLd data={buildOrganizationSchema()} />
      <JsonLd
        data={buildGameQuizSchema(locale, {
          id: game.slug,
          name: title,
          description,
          url: pageUrl,
          about: [title, 'game personality quiz', 'player type quiz'],
          imageUrl,
        })}
      />
      <JsonLd
        data={buildBreadcrumbSchema(locale, [
          {name: 'SBTI', path: ''},
          {name: title, path},
        ])}
      />
      <JsonLd data={buildFAQPageSchema(buildGameHubFAQs(game, safeLocale))} />
      <JsonLd
        data={buildItemListSchema(
          locale,
          itemListNames[safeLocale],
          itemListDescs[safeLocale],
          archetypeItems,
        )}
      />
      <JsonLd
        data={buildHowToSchema(
          locale,
          howToNames[safeLocale],
          howToDescs[safeLocale],
          howToSteps[safeLocale],
        )}
      />
      <PerGamePage game={game} locale={safeLocale} />
    </>
  );
}
