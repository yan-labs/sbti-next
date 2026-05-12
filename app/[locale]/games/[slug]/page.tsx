import {notFound} from 'next/navigation';
import {setRequestLocale} from 'next-intl/server';
import {routing} from '@/i18n/routing';
import {JsonLd} from '@/components/json-ld';
import {GameQuizApp} from '@/components/game-quiz-app';
import {BASE_URL, buildAlternates, buildTwitter, DEFAULT_OG_IMAGE, fitSeoTitle, getAlternateOgLocales, getLocaleUrl, getOgLocale} from '@/lib/metadata';
import {buildBreadcrumbSchema, buildGameQuizSchema, buildOrganizationSchema, buildWebSiteSchema} from '@/lib/json-ld';
import {GAME_SLUGS, getGameQuiz, isSiteLocale, localize, type SiteLocale} from '@/lib/data/game-quizzes';

const GAME_SEO_SUFFIX: Record<SiteLocale, string> = {
  zh: '完成 10 道题后生成玩家圈熟悉的身份结果，文案贴近玩家日常梗，适合作为游戏独立 route、搜索落地页和截图分享页。',
  en: 'Answer 10 questions to get a player-culture result, with a dedicated game route, multilingual page, and shareable outcome.',
  ja: '10問でプレイヤー文化に寄せた結果を表示し、多言語ページ、共有しやすい結果、ゲーム別ルート、検索向け入口に対応します。',
  ko: '10문항 후 유저 문화에 맞춘 결과를 보여주며, 다국어 페이지, 공유 가능한 결과, 게임별 독립 route와 검색 랜딩 페이지에 맞췄습니다.',
};

const GAME_SEO_TAIL: Record<SiteLocale, string> = {
  zh: '首批覆盖热门 PC、移动和电竞游戏。',
  en: 'The first batch covers major PC, mobile, and esports titles.',
  ja: '初期ラインアップはPC、モバイル、eスポーツ人気作を含みます。',
  ko: '첫 라인업은 PC, 모바일, e스포츠 인기작을 포함합니다.',
};

function fitGameSeoDescription(locale: string, description: string) {
  const safeLocale = isSiteLocale(locale) ? locale : 'en';
  let withSuffix = description.replace(/\s+/g, ' ').trim();
  if (withSuffix.length < 110) {
    withSuffix = `${withSuffix} ${GAME_SEO_SUFFIX[safeLocale]}`.replace(/\s+/g, ' ').trim();
  }
  if (withSuffix.length < 110) {
    withSuffix = `${withSuffix} ${GAME_SEO_TAIL[safeLocale]}`.replace(/\s+/g, ' ').trim();
  }

  return withSuffix.length > 145 ? `${withSuffix.slice(0, 144).trim()}…` : withSuffix;
}

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    GAME_SLUGS.map((slug) => ({
      locale,
      slug,
    })),
  );
}

export async function generateMetadata({params}: {params: Promise<{locale: string; slug: string}>}) {
  const {locale, slug} = await params;
  const game = getGameQuiz(slug);
  if (!game) return {};

  const path = `/games/${game.slug}`;
  const title = fitSeoTitle(locale, localize(game.seoTitle, locale));
  const description = fitGameSeoDescription(locale, localize(game.seoDescription, locale));
  const image = game.cover ? {url: `${BASE_URL}${game.cover.src}`, width: 1200, height: 675} : DEFAULT_OG_IMAGE;

  return {
    title,
    description,
    keywords: localize(game.keywords, locale),
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

export default async function GameQuizPage({params}: {params: Promise<{locale: string; slug: string}>}) {
  const {locale, slug} = await params;
  const game = getGameQuiz(slug);
  if (!game) {
    notFound();
  }

  setRequestLocale(locale);
  const path = `/games/${game.slug}`;
  const title = localize(game.title, locale);
  const description = localize(game.description, locale);
  const imageUrl = game.cover ? `${BASE_URL}${game.cover.src}` : DEFAULT_OG_IMAGE.url;

  return (
    <div data-game={game.slug}>
      <JsonLd data={buildWebSiteSchema(locale)} />
      <JsonLd data={buildOrganizationSchema()} />
      <JsonLd
        data={buildGameQuizSchema(locale, {
          id: game.slug,
          name: title,
          description,
          url: getLocaleUrl(locale, path),
          numberOfQuestions: game.questions.length,
          about: [game.shortTitle, localize(game.genre, locale), 'game personality quiz', 'player type quiz'],
          imageUrl,
        })}
      />
      <JsonLd
        data={buildBreadcrumbSchema(locale, [
          {name: 'SBTI', path: ''},
          {name: title, path},
        ])}
      />
      <GameQuizApp game={game} locale={locale} />
    </div>
  );
}
