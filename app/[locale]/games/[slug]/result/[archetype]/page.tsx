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
import {ALL_GAMES_V2, getArchetype, getGameV2} from '@/lib/data/games/index';
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
  const imageUrl = archetype.image ? `${BASE_URL}${archetype.image.src}` : DEFAULT_OG_IMAGE.url;

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
      images: [{url: imageUrl, width: 720, height: 720}],
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
  const imageUrl = archetype.image ? `${BASE_URL}${archetype.image.src}` : undefined;

  const rivalArchetype = archetype.rivalSlug
    ? game.archetypes.find((a) => a.slug === archetype.rivalSlug)
    : undefined;
  const bestSquadArchetype = archetype.bestSquadSlug
    ? game.archetypes.find((a) => a.slug === archetype.bestSquadSlug)
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
        className="min-h-screen bg-gradient-to-b from-background via-background to-muted/40 px-4 py-16"
        data-game={slug}
      >
        <article className="mx-auto w-full max-w-3xl space-y-6">
          {/* Header */}
          <div className="space-y-2 text-center">
            <Badge variant="outline" className="rounded-full border-primary/20 bg-primary/10 px-3 py-1 text-primary">
              {gameTitle}
            </Badge>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">
              {copy.kicker}
            </p>
          </div>

          {/* Hero */}
          <Card className="overflow-hidden border-0 shadow-sm">
            <CardContent className="p-5 sm:p-7">
              <div className="grid gap-5 sm:grid-cols-[auto_1fr] sm:items-start sm:gap-7">
                {archetype.image && (
                  <div className="mx-auto w-40 shrink-0 sm:mx-0 sm:w-48">
                    <Image
                      src={archetype.image.src}
                      alt={archetype.image.alt[loc]}
                      width={320}
                      height={320}
                      className="w-full rounded-2xl border border-border/60 object-contain shadow-sm"
                      priority
                      unoptimized
                    />
                  </div>
                )}
                <div className="space-y-3 text-center sm:text-left">
                  <div className="space-y-1">
                    <h1 className="font-heading text-4xl font-black leading-tight tracking-tight">
                      {archetypeName}
                    </h1>
                    <p className="text-base font-medium text-foreground/75 sm:text-lg">
                      {oneLiner}
                    </p>
                  </div>
                  <div className="flex flex-wrap items-center justify-center gap-2 sm:justify-start">
                    <Badge
                      variant="secondary"
                      className="rounded-full px-3 py-1 font-mono text-base font-bold tracking-widest"
                    >
                      {polarityCode}
                    </Badge>
                    <span className="text-xs text-muted-foreground">{copy.polarityCode}</span>
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

          {/* Description + Radar */}
          <div className="grid gap-5 lg:grid-cols-[1fr_auto]">
            {description && (
              <Card className="border-0 shadow-sm">
                <CardContent className="p-5 sm:p-6">
                  <p className="text-base leading-7 text-foreground/80">{description}</p>
                </CardContent>
              </Card>
            )}
            <Card className="border-0 shadow-sm lg:w-72">
              <CardContent className="p-4 sm:p-5">
                <p className="mb-3 text-center text-sm font-bold text-foreground/70">
                  {copy.axisProfile}
                </p>
                <RadarChartSixAxis scores={scores} locale={loc} size={240} />
              </CardContent>
            </Card>
          </div>

          {/* 6-axis feedback */}
          <Card className="border-0 shadow-sm">
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
                    <div key={axis} className="space-y-1.5 rounded-xl bg-muted/35 p-3">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-sm font-bold text-foreground">{label}</span>
                        <span className="font-mono text-xs font-bold text-primary">{letter}</span>
                      </div>
                      <div className="h-1 overflow-hidden rounded-full bg-muted">
                        <div
                          className="h-full rounded-full bg-primary/70 transition-all"
                          style={{width: `${barWidth}%`}}
                        />
                      </div>
                      <p className="text-sm leading-relaxed text-foreground/70">{feedback}</p>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          {/* Symptoms */}
          {archetype.symptoms && archetype.symptoms.length > 0 && (
            <Card className="border-0 shadow-sm">
              <CardContent className="space-y-3 p-5 sm:p-6">
                <h2 className="font-heading text-lg font-bold text-foreground">{copy.symptoms}</h2>
                <ul className="space-y-2">
                  {archetype.symptoms.map((symptom, idx) => (
                    <li
                      key={idx}
                      className="flex gap-2 rounded-xl bg-muted/35 px-3 py-2 text-sm text-foreground/80"
                    >
                      <span className="shrink-0 text-primary">•</span>
                      {symptom[loc]}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          )}

          {/* Rival + Best Squad */}
          {(rivalArchetype || bestSquadArchetype) && (
            <div className="grid gap-4 sm:grid-cols-2">
              {rivalArchetype && (
                <Card className="border-0 shadow-sm">
                  <CardContent className="p-4">
                    <p className="mb-1 text-xs font-bold uppercase tracking-wide text-muted-foreground">
                      {copy.rival}
                    </p>
                    <Link href={`/games/${slug}/result/${rivalArchetype.slug}`}>
                      <div className="group flex items-center gap-3 rounded-xl bg-muted/30 px-3 py-2.5 transition-colors hover:bg-muted/60">
                        {rivalArchetype.image && (
                          <Image
                            src={rivalArchetype.image.src}
                            alt={rivalArchetype.image.alt[loc]}
                            width={40}
                            height={40}
                            className="size-10 rounded-lg object-contain"
                            unoptimized
                          />
                        )}
                        <div className="min-w-0">
                          <p className="truncate font-heading text-sm font-bold group-hover:text-primary">
                            {rivalArchetype.name[loc]}
                          </p>
                          <p className="truncate text-xs text-muted-foreground">
                            {rivalArchetype.oneLiner[loc]}
                          </p>
                        </div>
                      </div>
                    </Link>
                  </CardContent>
                </Card>
              )}
              {bestSquadArchetype && (
                <Card className="border-0 shadow-sm">
                  <CardContent className="p-4">
                    <p className="mb-1 text-xs font-bold uppercase tracking-wide text-muted-foreground">
                      {copy.bestSquad}
                    </p>
                    <Link href={`/games/${slug}/result/${bestSquadArchetype.slug}`}>
                      <div className="group flex items-center gap-3 rounded-xl bg-muted/30 px-3 py-2.5 transition-colors hover:bg-muted/60">
                        {bestSquadArchetype.image && (
                          <Image
                            src={bestSquadArchetype.image.src}
                            alt={bestSquadArchetype.image.alt[loc]}
                            width={40}
                            height={40}
                            className="size-10 rounded-lg object-contain"
                            unoptimized
                          />
                        )}
                        <div className="min-w-0">
                          <p className="truncate font-heading text-sm font-bold group-hover:text-primary">
                            {bestSquadArchetype.name[loc]}
                          </p>
                          <p className="truncate text-xs text-muted-foreground">
                            {bestSquadArchetype.oneLiner[loc]}
                          </p>
                        </div>
                      </div>
                    </Link>
                  </CardContent>
                </Card>
              )}
            </div>
          )}

          {/* Back to game CTA */}
          <div className="flex justify-center gap-3 pb-8">
            <Link href={`/games/${slug}`}>
              <Button variant="outline" className="rounded-full gap-1.5">
                <RotateCcw className="size-4" aria-hidden="true" />
                {copy.backToGame}
              </Button>
            </Link>
          </div>
        </article>
      </main>
    </>
  );
}
