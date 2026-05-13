import {notFound} from 'next/navigation';
import {setRequestLocale} from 'next-intl/server';
import {routing} from '@/i18n/routing';
import Image from 'next/image';
import {Link} from '@/i18n/navigation';
import {JsonLd} from '@/components/json-ld';
import {RadarChartSixAxis} from '@/components/radar-chart-six-axis';
import {Badge} from '@/components/ui/badge';
import {Button} from '@/components/ui/button';
import {Card, CardContent} from '@/components/ui/card';
import {
  BASE_URL,
  buildAlternates,
  buildTwitter,
  DEFAULT_OG_IMAGE,
  fitSeoDescription,
  fitSeoTitle,
  getAlternateOgLocales,
  getLocaleUrl,
  getOgLocale,
} from '@/lib/metadata';
import {
  buildBreadcrumbSchema,
  buildFAQPageSchema,
  buildOrganizationSchema,
  buildWebSiteSchema,
  buildArchetypeDefinedTermSchema,
} from '@/lib/json-ld';
import {ShareButtons} from '@/components/share-buttons';
import {SaveGameArchetypeImageButton} from '@/components/games/save-archetype-image';
import {ALL_GAMES_V2, getGameV2} from '@/lib/data/games/index';
import {getArchetypeArt} from '@/lib/data/games/archetype-art';
import {AXES, AXIS_ORDER, polarityFromScore} from '@/lib/data/games/dimensions';
import {derivePolarityCode} from '@/lib/data/games/scoring';
import type {Axis, ArchetypeV2, SiteLocale} from '@/lib/data/games/types';
import {isSiteLocale} from '@/lib/data/games/index';
import {RotateCcw} from 'lucide-react';

// ── Static generation ─────────────────────────────────────────────────────────

/** Emits all 8 games × 8 archetypes = 64 (slug, archetype) pairs per locale. */
export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    ALL_GAMES_V2.flatMap((game) =>
      game.archetypes.map((archetype) => ({
        locale,
        slug: game.slug,
        archetype: archetype.slug,
      })),
    ),
  );
}

// ── Helpers ───────────────────────────────────────────────────────────────────

function safeLocale(locale: string): SiteLocale {
  return isSiteLocale(locale) ? locale : 'en';
}

/**
 * Default radar scores for the static archetype page when no quiz scores exist.
 *
 * When a user lands on `/games/<slug>/result/<archetype>` directly (without
 * completing the quiz), there are no real scores. We default each axis to the
 * polarity pole defined by the archetype's `polarityPattern`:
 *   - low  → 25  (well into the low-pole half)
 *   - high → 75  (well into the high-pole half)
 * This ensures the chart has a meaningful shape that reflects the archetype's
 * identity rather than a neutral all-50 hexagon.
 */
function defaultScoresForArchetype(archetype: ArchetypeV2): Record<Axis, number> {
  return Object.fromEntries(
    AXIS_ORDER.map((axis) => [
      axis,
      archetype.polarityPattern[axis] === 'high' ? 75 : 25,
    ]),
  ) as Record<Axis, number>;
}

const COPY: Record<SiteLocale, {
  kicker: string;
  polarityCode: string;
  symptoms: string;
  rival: string;
  bestSquad: string;
  retake: string;
  axisProfile: string;
  backToGame: string;
  viewAllTypes: string;
  shareLabel: string;
  shareTitle: (game: string, archetype: string) => string;
  shareDescription: (game: string, archetype: string, oneLiner: string) => string;
  faqQ1: (game: string) => string;
  faqA1: (name: string, oneLiner: string) => string;
  faqQ2: (game: string) => string;
  faqA2: (code: string) => string;
}> = {
  zh: {
    kicker: '玩家身份',
    polarityCode: '玩家身份码',
    symptoms: '明显症状',
    rival: '克星原型',
    bestSquad: '最佳队友',
    retake: '重新测试',
    axisProfile: '六维画像',
    backToGame: '返回测试',
    viewAllTypes: '查看所有类型',
    shareLabel: '分享你的结果',
    shareTitle: (g, a) => `我在 ${g} 里是「${a}」 — SBTI 玩家测试`,
    shareDescription: (g, a, o) => `${g} 玩家类型：${a}。${o}`,
    faqQ1: (game) => `${game}有哪些玩家类型？`,
    faqA1: (name, oneLiner) => `这是"${name}"：${oneLiner}。共有 8 种玩家类型，完成测试即可获取你的类型。`,
    faqQ2: (game) => `${game}玩家身份码是什么意思？`,
    faqA2: (code) => `玩家身份码（如 ${code}）是由 6 个字母组成的极性代号，分别对应节奏、胆量、协作、信号、表达、心态六个维度的极性。`,
  },
  en: {
    kicker: 'Player Archetype',
    polarityCode: 'Player Code',
    symptoms: 'Symptoms',
    rival: 'Natural Enemy',
    bestSquad: 'Best Squad Mate',
    retake: 'Take the Quiz',
    axisProfile: '6-Axis Profile',
    backToGame: 'Back to Quiz',
    viewAllTypes: 'All Archetypes',
    shareLabel: 'Share your result',
    shareTitle: (g, a) => `I'm "${a}" in ${g} — SBTI Player Quiz`,
    shareDescription: (g, a, o) => `${g} player archetype: ${a}. ${o}`,
    faqQ1: (game) => `What are the player types in ${game}?`,
    faqA1: (name, oneLiner) => `This is "${name}": ${oneLiner}. There are 8 archetypes total — take the quiz to find yours.`,
    faqQ2: (game) => `What does the ${game} player code mean?`,
    faqA2: (code) => `The player code (e.g. ${code}) is a 6-letter string showing your polarity on the Tempo, Nerve, Bond, Intel, Flair, and Mental axes.`,
  },
  ja: {
    kicker: 'プレイヤーアーキタイプ',
    polarityCode: 'プレイヤーコード',
    symptoms: 'よく出る症状',
    rival: '天敵タイプ',
    bestSquad: '最高の相棒',
    retake: '診断する',
    axisProfile: '6軸プロフィール',
    backToGame: '診断に戻る',
    viewAllTypes: '全タイプ',
    shareLabel: '結果をシェア',
    shareTitle: (g, a) => `${g} の私は「${a}」 — SBTI プレイヤー診断`,
    shareDescription: (g, a, o) => `${g} プレイヤータイプ：${a}。${o}`,
    faqQ1: (game) => `${game}のプレイヤータイプは何種類？`,
    faqA1: (name, oneLiner) => `これは「${name}」：${oneLiner}。全8タイプあります。診断してあなたのタイプを見つけよう。`,
    faqQ2: (game) => `${game}のプレイヤーコードとは？`,
    faqA2: (code) => `プレイヤーコード（例：${code}）は、テンポ・ナーブ・ボンド・インテル・フレア・メンタルの6軸の極性を表す6文字です。`,
  },
  ko: {
    kicker: '플레이어 아키타입',
    polarityCode: '플레이어 코드',
    symptoms: '주요 증상',
    rival: '천적 유형',
    bestSquad: '최고의 팀원',
    retake: '테스트하기',
    axisProfile: '6축 프로필',
    backToGame: '테스트로 돌아가기',
    viewAllTypes: '전체 유형',
    shareLabel: '결과 공유',
    shareTitle: (g, a) => `${g}에서 나는 "${a}" — SBTI 플레이어 테스트`,
    shareDescription: (g, a, o) => `${g} 플레이어 유형: ${a}. ${o}`,
    faqQ1: (game) => `${game}에는 플레이어 유형이 몇 가지인가요?`,
    faqA1: (name, oneLiner) => `이것은 "${name}": ${oneLiner}. 총 8가지 유형이 있습니다. 테스트로 내 유형을 찾아보세요.`,
    faqQ2: (game) => `${game} 플레이어 코드는 무엇인가요?`,
    faqA2: (code) => `플레이어 코드(예: ${code})는 템포, 너브, 본드, 인텔, 플레어, 멘탈 6축의 극성을 나타내는 6자리 문자입니다.`,
  },
};

// ── Metadata ──────────────────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: Promise<{locale: string; slug: string; archetype: string}>;
}) {
  const {locale, slug, archetype: archetypeSlug} = await params;
  const game = getGameV2(slug);
  if (!game) return {};
  const archetype = game.archetypes.find((a) => a.slug === archetypeSlug);
  if (!archetype) return {};

  const loc = safeLocale(locale);
  const gameTitle = game.title[loc];
  const archetypeName = archetype.name[loc];
  const oneLiner = archetype.oneLiner[loc];
  const path = `/games/${slug}/result/${archetypeSlug}`;

  const scores = defaultScoresForArchetype(archetype);
  const code = derivePolarityCode(scores);

  const titleMap: Record<SiteLocale, string> = {
    zh: `${archetypeName} | ${gameTitle} 玩家类型`,
    en: `${archetypeName} | ${gameTitle} Player Type`,
    ja: `${archetypeName} | ${gameTitle} プレイヤータイプ`,
    ko: `${archetypeName} | ${gameTitle} 플레이어 유형`,
  };
  const descMap: Record<SiteLocale, string> = {
    zh: `${archetypeName}：${oneLiner}。完成 ${gameTitle} 玩家类型测试，获取你的 6 维雷达和玩家身份码（${code}）。`,
    en: `${archetypeName}: ${oneLiner}. Take the ${gameTitle} player quiz to get your 6-axis radar and player code.`,
    ja: `${archetypeName}：${oneLiner}。${gameTitle} プレイヤー診断で6軸レーダーとコード（${code}）を取得。`,
    ko: `${archetypeName}: ${oneLiner}. ${gameTitle} 플레이어 테스트로 6축 레이더와 코드(${code})를 받으세요.`,
  };

  const title = fitSeoTitle(locale, titleMap[loc]);
  const description = fitSeoDescription(locale, descMap[loc]);
  // Per-archetype OG image: prefer the dedicated .webp shipped per archetype,
  // fall back to legacy `archetype.image.src` if set, then SBTI default.
  const artPath = getArchetypeArt(slug, archetypeSlug);
  const imageUrl = artPath
    ? `${BASE_URL}${artPath}`
    : archetype.image
      ? `${BASE_URL}${archetype.image.src}`
      : DEFAULT_OG_IMAGE.url;

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
      images: [{url: imageUrl, width: 1024, height: 1024}],
      locale: getOgLocale(locale),
      alternateLocale: getAlternateOgLocales(locale),
    },
    twitter: buildTwitter(title, description, {url: imageUrl}),
    robots: {index: true, follow: true},
  };
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default async function ArchetypeResultPage({
  params,
}: {
  params: Promise<{locale: string; slug: string; archetype: string}>;
}) {
  const {locale, slug, archetype: archetypeSlug} = await params;
  const game = getGameV2(slug);
  if (!game) notFound();

  const archetype = game.archetypes.find((a) => a.slug === archetypeSlug);
  if (!archetype) notFound();

  setRequestLocale(locale);

  const loc = safeLocale(locale);
  const copy = COPY[loc];
  const gameTitle = game.title[loc];
  const archetypeName = archetype.name[loc];
  const oneLiner = archetype.oneLiner[loc];
  const description = archetype.description?.[loc];

  const scores = defaultScoresForArchetype(archetype);
  const polarityCode = derivePolarityCode(scores);

  const path = `/games/${slug}/result/${archetypeSlug}`;
  const pageUrl = getLocaleUrl(locale, path);

  // Look up archetype artwork: per-archetype WebP if shipped, else bucket fallback.
  const archetypeArt = archetype.image?.src ?? getArchetypeArt(slug, archetypeSlug);
  const imageUrl = archetypeArt ? `${BASE_URL}${archetypeArt}` : undefined;

  const rivalArchetype = archetype.rivalSlug
    ? game.archetypes.find((a) => a.slug === archetype.rivalSlug)
    : undefined;
  const bestSquadArchetype = archetype.bestSquadSlug
    ? game.archetypes.find((a) => a.slug === archetype.bestSquadSlug)
    : undefined;
  const rivalArt = rivalArchetype
    ? (rivalArchetype.image?.src ?? getArchetypeArt(slug, rivalArchetype.slug))
    : undefined;
  const bestSquadArt = bestSquadArchetype
    ? (bestSquadArchetype.image?.src ?? getArchetypeArt(slug, bestSquadArchetype.slug))
    : undefined;

  const faqPairs = [
    {
      question: copy.faqQ1(gameTitle),
      answer: copy.faqA1(archetypeName, oneLiner),
    },
    {
      question: copy.faqQ2(gameTitle),
      answer: copy.faqA2(polarityCode),
    },
  ];

  return (
    <>
      <JsonLd data={buildWebSiteSchema(locale)} />
      <JsonLd data={buildOrganizationSchema()} />
      <JsonLd
        data={buildBreadcrumbSchema(locale, [
          {name: 'SBTI', path: ''},
          {name: gameTitle, path: `/games/${slug}`},
          {name: archetypeName, path},
        ])}
      />
      <JsonLd
        data={buildArchetypeDefinedTermSchema(locale, {
          gameSlug: slug,
          gameTitle,
          archetypeSlug,
          archetypeName,
          description: oneLiner,
          url: pageUrl,
          imageUrl,
        })}
      />
      <JsonLd data={buildFAQPageSchema(faqPairs)} />

      <main
        className="min-h-screen bg-background px-4 py-12 md:py-16"
        data-game={slug}
      >
        <article className="mx-auto w-full max-w-[1100px]">
          {/* Header */}
          <div className="mb-6 flex items-center justify-center gap-3 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
            <span>{gameTitle}</span>
            <span className="text-muted-foreground/40">·</span>
            <span className="text-primary">{copy.kicker}</span>
          </div>

          {/* ──────────────────────────────────────────────────────────────
              TOP ROW — Hero (left, wide) + Rival/Squad (right, narrow)
              On mobile both stack: Hero → Rival → Squad. Same 320px right
              column width as the bottom grid below, so the rail aligns.
              ────────────────────────────────────────────────────────────── */}
          <div className="mb-6 grid gap-6 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-start">
            {/* Hero */}
            <Card className="overflow-hidden border border-border bg-card shadow-none">
              <CardContent className="p-5 sm:p-7">
                <div className="grid gap-5 sm:grid-cols-[auto_1fr] sm:items-start sm:gap-7">
                  {archetypeArt && (
                    <div className="mx-auto w-40 shrink-0 sm:mx-0 sm:w-44 lg:w-40">
                      <Image
                        src={archetypeArt}
                        alt={archetype.image?.alt?.[loc] ?? archetypeName}
                        width={320}
                        height={320}
                        className="w-full border border-border bg-muted object-contain"
                        priority
                        unoptimized
                      />
                    </div>
                  )}
                  <div className="space-y-3 text-center sm:text-left">
                    <div className="space-y-1">
                      <h1
                        className="font-heading text-4xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-[44px] lg:text-[40px] xl:text-5xl"
                        style={{fontVariationSettings: '"opsz" 144, "wght" 800'}}
                      >
                        {archetypeName}
                        <span className="text-primary">.</span>
                      </h1>
                      <p
                        className="font-heading text-base italic leading-snug text-foreground/75 sm:text-lg"
                        style={{fontVariationSettings: '"opsz" 144, "SOFT" 95, "wght" 500'}}
                      >
                        &ldquo;{oneLiner}&rdquo;
                      </p>
                    </div>
                    <div className="flex flex-wrap items-center justify-center gap-2 sm:justify-start">
                      <Badge
                        variant="secondary"
                        className="rounded-full px-3 py-1 font-mono text-base font-bold tracking-widest"
                      >
                        {polarityCode}
                      </Badge>
                      <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                        {copy.polarityCode}
                      </span>
                    </div>
                    <div className="pt-1">
                      <Link href={`/games/${slug}`}>
                        <Button variant="outline" size="sm" className="rounded-full gap-1.5">
                          <RotateCcw className="size-3.5" aria-hidden="true" />
                          {copy.retake}
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Top-right rail: Rival + Squad compact cards (fills the
                whitespace next to the hero on lg+, stacks below on mobile). */}
            <div className="space-y-4">
              {rivalArchetype && (
                <Link
                  href={`/games/${slug}/result/${rivalArchetype.slug}`}
                  className="group block"
                >
                  <article className="flex h-full flex-col border border-border bg-card p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-foreground hover:shadow-[0_14px_28px_-18px_rgba(0,0,0,0.45)] sm:p-5">
                    <div className="mb-4 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.18em]">
                      <span className="text-primary">✕ {copy.rival}</span>
                      <span className="text-muted-foreground">VS</span>
                    </div>
                    <div className="flex items-start gap-3">
                      {rivalArt && (
                        <div className="shrink-0 border border-border bg-muted">
                          <Image
                            src={rivalArt}
                            alt={rivalArchetype.image?.alt?.[loc] ?? rivalArchetype.name[loc]}
                            width={160}
                            height={160}
                            className="size-16 object-contain"
                            unoptimized
                          />
                        </div>
                      )}
                      <div className="min-w-0 flex-1">
                        <h3
                          className="font-heading text-[18px] font-bold leading-[1.1] tracking-tight text-foreground transition-colors group-hover:text-primary"
                          style={{fontVariationSettings: '"opsz" 144, "wght" 700'}}
                        >
                          {rivalArchetype.name[loc]}
                          <span className="text-primary">.</span>
                        </h3>
                        <p className="mt-1.5 font-mono text-[9px] uppercase tracking-[0.16em] text-muted-foreground">
                          {rivalArchetype.slug.replace(/-/g, ' ')}
                        </p>
                      </div>
                    </div>
                    <p
                      className="mt-4 border-t border-border pt-3 font-heading text-[13px] italic leading-[1.4] text-foreground/75"
                      style={{fontVariationSettings: '"opsz" 144, "SOFT" 95, "wght" 500'}}
                    >
                      &ldquo;{rivalArchetype.oneLiner[loc]}&rdquo;
                    </p>
                  </article>
                </Link>
              )}
              {bestSquadArchetype && (
                <Link
                  href={`/games/${slug}/result/${bestSquadArchetype.slug}`}
                  className="group block"
                >
                  <article className="flex h-full flex-col border border-border bg-card p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-foreground hover:shadow-[0_14px_28px_-18px_rgba(0,0,0,0.45)] sm:p-5">
                    <div className="mb-4 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.18em]">
                      <span className="text-primary">★ {copy.bestSquad}</span>
                      <span className="text-muted-foreground">SQUAD</span>
                    </div>
                    <div className="flex items-start gap-3">
                      {bestSquadArt && (
                        <div className="shrink-0 border border-border bg-muted">
                          <Image
                            src={bestSquadArt}
                            alt={bestSquadArchetype.image?.alt?.[loc] ?? bestSquadArchetype.name[loc]}
                            width={160}
                            height={160}
                            className="size-16 object-contain"
                            unoptimized
                          />
                        </div>
                      )}
                      <div className="min-w-0 flex-1">
                        <h3
                          className="font-heading text-[18px] font-bold leading-[1.1] tracking-tight text-foreground transition-colors group-hover:text-primary"
                          style={{fontVariationSettings: '"opsz" 144, "wght" 700'}}
                        >
                          {bestSquadArchetype.name[loc]}
                          <span className="text-primary">.</span>
                        </h3>
                        <p className="mt-1.5 font-mono text-[9px] uppercase tracking-[0.16em] text-muted-foreground">
                          {bestSquadArchetype.slug.replace(/-/g, ' ')}
                        </p>
                      </div>
                    </div>
                    <p
                      className="mt-4 border-t border-border pt-3 font-heading text-[13px] italic leading-[1.4] text-foreground/75"
                      style={{fontVariationSettings: '"opsz" 144, "SOFT" 95, "wght" 500'}}
                    >
                      &ldquo;{bestSquadArchetype.oneLiner[loc]}&rdquo;
                    </p>
                  </article>
                </Link>
              )}
            </div>
          </div>

          {/* ──────────────────────────────────────────────────────────────
              BOTTOM ROW — Body (left) + Radar (right sticky)
              ────────────────────────────────────────────────────────────── */}
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-start">

            {/* ── LEFT: Description + 6-axis + Symptoms + Back ─────────────── */}
            <div className="space-y-6">

              {description && (
                <Card className="border border-border bg-card shadow-none">
                  <CardContent className="p-5 sm:p-7">
                    <p className="text-base leading-7 text-foreground/85 md:text-[17px] md:leading-[1.75]">
                      {description}
                    </p>
                  </CardContent>
                </Card>
              )}

              {/* 6-axis feedback */}
              <Card className="border border-border bg-card shadow-none">
                <CardContent className="space-y-3 p-5 sm:p-6">
                  <div className="grid gap-2 sm:grid-cols-2">
                    {AXIS_ORDER.map((axis, i) => {
                  const def = AXES[i]!;
                  const score = scores[axis];
                  const polarity = polarityFromScore(score);
                  const feedback =
                    polarity === 'high' ? def.highFeedback[loc] : def.lowFeedback[loc];
                  const label =
                    polarity === 'high' ? def.highLabel[loc] : def.lowLabel[loc];
                  const letter = polarity === 'high' ? def.highLetter : def.lowLetter;
                  const barWidth = Math.round(score);

                  return (
                    <div key={axis} className="border border-border bg-card p-4">
                      <div className="flex items-center justify-between gap-2">
                        <span className="font-heading text-base font-bold text-foreground" style={{fontVariationSettings: '"opsz" 144, "wght" 700'}}>{label}</span>
                        <span className="font-mono text-xs font-bold tracking-widest text-primary">{letter}</span>
                      </div>
                      <div className="mt-2 h-[3px] overflow-hidden bg-border">
                        <div
                          className="h-full bg-primary transition-all"
                          style={{width: `${barWidth}%`}}
                        />
                      </div>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{feedback}</p>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>

              {/* Symptoms */}
              {archetype.symptoms && archetype.symptoms.length > 0 && (
                <Card className="border border-border bg-card shadow-none">
                  <CardContent className="p-5 sm:p-6">
                    <div className="mb-4 font-mono text-[11px] uppercase tracking-[0.18em] text-primary">
                      {copy.symptoms}
                    </div>
                    <ul className="space-y-3">
                      {archetype.symptoms.map((symptom, idx) => (
                        <li
                          key={idx}
                          className="flex gap-3 border-t border-border pt-3 text-[15px] leading-[1.55] text-foreground/85 first:border-t-0 first:pt-0"
                        >
                          <span className="font-mono text-[11px] tracking-[0.16em] text-muted-foreground">
                            {String(idx + 1).padStart(2, '0')}
                          </span>
                          <span className="flex-1">{symptom[loc]}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )}

              {/* Share section — Save-as-PNG (vermillion primary) +
                  copy link / X / LINE / Facebook (secondary). */}
              <div className="border-t border-border pt-6">
                <div className="mb-4 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.18em] text-primary">
                  <span>★ {copy.shareLabel}</span>
                  <span className="text-muted-foreground">·</span>
                  <span className="text-muted-foreground">SHARE</span>
                </div>
                <div className="flex flex-wrap items-center gap-3">
                  <SaveGameArchetypeImageButton
                    gameSlug={slug}
                    gameTitle={gameTitle}
                    archetypeName={archetypeName}
                    archetypeSlug={archetypeSlug}
                    polarityCode={polarityCode}
                    oneLiner={oneLiner}
                    scores={scores}
                    artUrl={archetypeArt}
                    locale={loc}
                  />
                  <ShareButtons
                    url={path}
                    title={copy.shareTitle(gameTitle, archetypeName)}
                    description={copy.shareDescription(gameTitle, archetypeName, oneLiner)}
                  />
                </div>
              </div>

              {/* Back to game CTA — sits at end of left column */}
              <div className="pt-2">
                <Link
                  href={`/games/${slug}`}
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 font-mono text-[11px] uppercase tracking-[0.18em] text-foreground transition-colors hover:border-foreground hover:bg-muted"
                >
                  <RotateCcw className="size-3.5" aria-hidden="true" />
                  {copy.backToGame}
                </Link>
              </div>
            </div>

            {/* ── RIGHT: sticky sidebar (radar + rival + squad) ────────────── */}
            <aside className="lg:sticky lg:top-24 lg:self-start">
              {/* Radar (Rival/Squad moved to top row alongside hero) */}
              <div className="border border-border bg-card p-4 sm:p-5">
                <div className="mb-3 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                  <span className="text-primary">◆ {copy.axisProfile}</span>
                  <span>6 AXES</span>
                </div>
                <RadarChartSixAxis scores={scores} locale={loc} size={240} gameAccent="var(--vermillion)" />
              </div>
            </aside>

          </div>
        </article>
      </main>
    </>
  );
}
