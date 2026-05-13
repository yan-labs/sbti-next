import {notFound} from 'next/navigation';
import {setRequestLocale} from 'next-intl/server';
import {routing} from '@/i18n/routing';
import {JsonLd} from '@/components/json-ld';
import {GameCompatPage} from '@/components/games/game-compat-page';
import {ALL_GAMES_V2, getGameV2, isSiteLocale} from '@/lib/data/games/index';
import {getGameCompatibility} from '@/lib/data/games/compat';
import {getArchetypeArt} from '@/lib/data/games/archetype-art';
import type {SiteLocale} from '@/lib/data/games/types';
import {
  BASE_URL,
  buildAlternates,
  buildTwitter,
  DEFAULT_OG_IMAGE,
  getAlternateOgLocales,
  getLocaleUrl,
  getOgLocale,
  fitSeoTitle,
  fitSeoDescription,
} from '@/lib/metadata';
import {buildBreadcrumbSchema, buildWebPageSchema} from '@/lib/json-ld';

/**
 * Emits all C(8,2) × 2 (ordered pairs) × locales = 224 × 4 = 896 pages per game,
 * × 8 games = 7168 total. That's heavy. We emit ordered + unordered for SEO
 * symmetry — both URLs return the same content; canonical handled via alternates.
 */
export function generateStaticParams() {
  const params: Array<{locale: string; slug: string; a: string; b: string}> = [];
  for (const locale of routing.locales) {
    for (const game of ALL_GAMES_V2) {
      for (let i = 0; i < game.archetypes.length; i++) {
        for (let j = 0; j < game.archetypes.length; j++) {
          if (i === j) continue;
          params.push({
            locale,
            slug: game.slug,
            a: game.archetypes[i]!.slug,
            b: game.archetypes[j]!.slug,
          });
        }
      }
    }
  }
  return params;
}

const TITLE: Record<SiteLocale, (game: string, a: string, b: string, score: number) => string> = {
  zh: (g, a, b, s) => `${a} × ${b} | ${g} 相性 ${s}%`,
  en: (g, a, b, s) => `${a} × ${b} | ${g} Compat ${s}%`,
  ja: (g, a, b, s) => `${a} × ${b} | ${g} 相性 ${s}%`,
  ko: (g, a, b, s) => `${a} × ${b} | ${g} 궁합 ${s}%`,
};
const DESC: Record<SiteLocale, (g: string, a: string, b: string, s: number, archLabel: string) => string> = {
  zh: (g, a, b, s, l) => `在 ${g} 里，${a} 和 ${b} 的玩家相性指数是 ${s}% —— ${l}。6 维对照、可截图分享。`,
  en: (g, a, b, s, l) => `In ${g}, ${a} and ${b} land at ${s}% compatibility — ${l}. 6-axis breakdown, shareable.`,
  ja: (g, a, b, s, l) => `${g} の ${a} と ${b} の相性スコアは ${s}% — ${l}。6軸比較・シェア可能。`,
  ko: (g, a, b, s, l) => `${g} 의 ${a}와 ${b} 궁합 점수는 ${s}% — ${l}. 6축 비교 · 공유 가능.`,
};

const ARCH_LABEL: Record<SiteLocale, Record<string, string>> = {
  zh: {fated: '天选 CP', sync: '高度合拍', spicy: '微辣组合', plastic: '塑料情谊', awkward: '尴尬配对', disaster: '灾难现场'},
  en: {fated: 'Fated Pair', sync: 'In Sync', spicy: 'Spicy Combo', plastic: 'Plastic Friendship', awkward: 'Awkward Match', disaster: 'Disaster Zone'},
  ja: {fated: '運命のペア', sync: '抜群の相性', spicy: 'スパイシー', plastic: 'プラスチック友情', awkward: '気まずい組み合わせ', disaster: '災害級'},
  ko: {fated: '운명의 페어', sync: '환상의 짝꿍', spicy: '스파이시 조합', plastic: '플라스틱 우정', awkward: '어색한 매치', disaster: '재난 현장'},
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{locale: string; slug: string; a: string; b: string}>;
}) {
  const {locale, slug, a: slugA, b: slugB} = await params;
  const game = getGameV2(slug);
  if (!game) return {};
  const loc = isSiteLocale(locale) ? locale : 'en';
  const a = game.archetypes.find((x) => x.slug === slugA);
  const b = game.archetypes.find((x) => x.slug === slugB);
  if (!a || !b) return {};

  const compat = getGameCompatibility(game, slugA, slugB);
  if (!compat) return {};

  const gameTitle = game.title[loc];
  const nameA = a.name[loc];
  const nameB = b.name[loc];
  const archLabel = ARCH_LABEL[loc][compat.archetypeKey] ?? compat.archetypeKey;

  const title = fitSeoTitle(locale, TITLE[loc](gameTitle, nameA, nameB, compat.score));
  const description = fitSeoDescription(locale, DESC[loc](gameTitle, nameA, nameB, compat.score, archLabel));
  const path = `/games/${slug}/compat/${slugA}/${slugB}`;
  // Pick one of the two archetype webps as the OG image. Side A (first in
  // URL) tends to be the user's own result when shared from /games/…/result.
  const artA = getArchetypeArt(slug, slugA);
  const ogImage = artA
    ? {url: `${BASE_URL}${artA}`, width: 1024, height: 1024}
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
      images: [ogImage],
      locale: getOgLocale(locale),
      alternateLocale: getAlternateOgLocales(locale),
    },
    twitter: buildTwitter(title, description, {url: ogImage.url}),
    robots: {index: true, follow: true},
  };
}

export default async function GameCompatPairRoute({
  params,
}: {
  params: Promise<{locale: string; slug: string; a: string; b: string}>;
}) {
  const {locale, slug, a: slugA, b: slugB} = await params;
  const game = getGameV2(slug);
  if (!game) notFound();
  const a = game.archetypes.find((x) => x.slug === slugA);
  const b = game.archetypes.find((x) => x.slug === slugB);
  if (!a || !b) notFound();
  setRequestLocale(locale);
  const loc: SiteLocale = isSiteLocale(locale) ? locale : 'en';

  const compat = getGameCompatibility(game, slugA, slugB);
  const gameTitle = game.title[loc];
  const path = `/games/${slug}/compat/${slugA}/${slugB}`;
  const url = getLocaleUrl(locale, path);
  const archLabel = compat ? ARCH_LABEL[loc][compat.archetypeKey] : '';
  const title = fitSeoTitle(locale, TITLE[loc](gameTitle, a.name[loc], b.name[loc], compat?.score ?? 0));
  const description = fitSeoDescription(
    locale,
    DESC[loc](gameTitle, a.name[loc], b.name[loc], compat?.score ?? 0, archLabel ?? ''),
  );

  return (
    <>
      <JsonLd data={buildWebPageSchema(locale, title, description, url)} />
      <JsonLd
        data={buildBreadcrumbSchema(locale, [
          {name: 'SBTI', path: ''},
          {name: gameTitle, path: `/games/${slug}`},
          {name: 'Compatibility', path: `/games/${slug}/compat`},
          {name: `${a.name[loc]} × ${b.name[loc]}`, path},
        ])}
      />
      <GameCompatPage game={game} locale={loc} initialA={slugA} initialB={slugB} />
    </>
  );
}
