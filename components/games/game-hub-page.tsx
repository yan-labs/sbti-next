import Image from 'next/image';
import {Link} from '@/i18n/navigation';
import {ALL_GAMES_V2, AXES} from '@/lib/data/games';
import {getArchetypeArt} from '@/lib/data/games/archetype-art';
import type {SiteLocale, GameQuizV2, Axis} from '@/lib/data/games/types';

const COPY: Record<
  SiteLocale,
  {
    kicker: string;
    h1Lead: string;
    h1Italic: string;
    dek: string;
    statsKicker: string;
    archetypesTotal: string;
    catalogKicker: string;
    catalogH2Lead: string;
    catalogH2Italic: string;
    sixAxisLead: string;
    sixAxisItalic: string;
    sixAxisBody: string;
    sixAxisLabel: string;
    dominantLabel: string;
    cta: string;
    catalogRight: string;
    cardCta: string;
    genreLabel: string;
  }
> = {
  zh: {
    kicker: 'GAME QUIZZES · 8 个游戏专属测试',
    h1Lead: '8 款游戏 × ',
    h1Italic: '谁是哪种玩家',
    dek: '每款游戏 31 道题，最终映射到共享的 6 个行为轴。差异在于：每款游戏侧重其中 3 个主导轴 — 比如 LoL 看你的 Bond/Nerve/Mental，CS2 看你的 Tempo/Intel/Nerve。',
    statsKicker: '31 道题 · 6 轴 · 8 原型 · 3 分钟',
    archetypesTotal: '64 个玩家档案',
    catalogKicker: '02 · 8 款游戏完整目录',
    catalogH2Lead: '8 款游戏 × 8 原型',
    catalogH2Italic: '64 种玩家档案',
    sixAxisLead: '所有测试共享的',
    sixAxisItalic: '六维体系',
    sixAxisBody:
      '每款游戏 31 道题，最终映射到这 6 个轴上。差异点在于：每款游戏会侧重其中 3 个主导轴。',
    sixAxisLabel: 'SHARED 6-AXIS · 共享六维体系',
    dominantLabel: '主导维度 · Dominant Axes',
    cta: '开始测试',
    catalogRight: '8 × 8 = 64 玩家档案',
    cardCta: '立即开测',
    genreLabel: '玩家测试',
  },
  en: {
    kicker: 'GAME QUIZZES · 8 quizzes',
    h1Lead: '8 games × ',
    h1Italic: 'which player are you',
    dek: 'Every quiz is 31 questions mapped to the same 6 behavioral axes. The twist: each game leans on 3 dominant axes — LoL reads Bond/Nerve/Mental, CS2 reads Tempo/Intel/Nerve.',
    statsKicker: '31 questions · 6 axes · 8 archetypes · 3 min',
    archetypesTotal: '64 player profiles',
    catalogKicker: '02 · Full 8-game catalog',
    catalogH2Lead: '8 games × 8 archetypes',
    catalogH2Italic: '64 player profiles',
    sixAxisLead: 'The shared ',
    sixAxisItalic: '6-axis framework',
    sixAxisBody:
      'Every quiz is 31 questions mapped to these 6 axes. The twist is which 3 axes a given game emphasizes.',
    sixAxisLabel: 'SHARED 6-AXIS framework',
    dominantLabel: 'Dominant axes',
    cta: 'Take the quiz',
    catalogRight: '8 × 8 = 64 profiles',
    cardCta: 'Start quiz',
    genreLabel: 'Player quiz',
  },
  ja: {
    kicker: 'GAME QUIZZES · 8タイトル',
    h1Lead: '8タイトル × ',
    h1Italic: 'どのプレイヤーか',
    dek: '各診断は31問。すべて共通の6軸にマッピングされる。違いは「どの3軸を重視するか」 — LoLはBond/Nerve/Mental、CS2はTempo/Intel/Nerve。',
    statsKicker: '31問 · 6軸 · 8タイプ · 3分',
    archetypesTotal: '64プレイヤーアーキタイプ',
    catalogKicker: '02 · 8タイトル完全目録',
    catalogH2Lead: '8タイトル × 8タイプ',
    catalogH2Italic: '64プレイヤーアーキタイプ',
    sixAxisLead: 'すべての診断で共通の',
    sixAxisItalic: '6軸モデル',
    sixAxisBody:
      '各診断は31問、最終的に6軸にマッピングされる。違いはどの3軸を重視するかだ。',
    sixAxisLabel: 'SHARED 6-AXIS · 共通6軸',
    dominantLabel: '主導軸 · Dominant Axes',
    cta: '診断を始める',
    catalogRight: '8 × 8 = 64タイプ',
    cardCta: '今すぐ診断',
    genreLabel: 'プレイヤー診断',
  },
  ko: {
    kicker: 'GAME QUIZZES · 8개 게임 전용 테스트',
    h1Lead: '8개 게임 × ',
    h1Italic: '나는 어떤 플레이어인가',
    dek: '각 테스트는 31문항이며 모두 같은 6축에 매핑된다. 차이는 게임마다 강조하는 3축이 다르다는 점 — LoL은 Bond/Nerve/Mental, CS2는 Tempo/Intel/Nerve.',
    statsKicker: '31문항 · 6축 · 8유형 · 3분',
    archetypesTotal: '64 플레이어 프로필',
    catalogKicker: '02 · 8개 게임 전체 카탈로그',
    catalogH2Lead: '8개 게임 × 8유형',
    catalogH2Italic: '64 플레이어 프로필',
    sixAxisLead: '모든 테스트가 공유하는 ',
    sixAxisItalic: '6축 모델',
    sixAxisBody:
      '각 테스트는 31문항으로 같은 6축에 매핑된다. 차이는 어느 3축을 강조하느냐다.',
    sixAxisLabel: 'SHARED 6-AXIS · 공통 6축',
    dominantLabel: '주요 축 · Dominant Axes',
    cta: '테스트 시작',
    catalogRight: '8 × 8 = 64 프로필',
    cardCta: '바로 시작',
    genreLabel: '플레이어 테스트',
  },
};

// Each game's English subtitle for editorial italic (taken from the design proposal).
const GAME_EN_TITLE: Record<string, string> = {
  'league-of-legends': 'League of Legends',
  valorant: 'VALORANT',
  'counter-strike-2': 'Counter-Strike 2',
  'honor-of-kings': 'Honor of Kings',
  'overwatch-2': 'Overwatch 2',
  'apex-legends': 'Apex Legends',
  'pubg-battlegrounds': 'PUBG: Battlegrounds',
  'delta-force': 'Delta Force',
};

const GAME_GENRE: Record<string, string> = {
  'league-of-legends': 'MOBA',
  valorant: 'FPS',
  'counter-strike-2': 'FPS',
  'honor-of-kings': 'MOBA',
  'overwatch-2': 'HERO FPS',
  'apex-legends': 'BR',
  'pubg-battlegrounds': 'BR',
  'delta-force': 'TACTICAL',
};

// Whether per-archetype illustrations exist for the game (drives placeholder fallback).
const HAS_ARCHETYPE_ART: Record<string, boolean> = {
  'league-of-legends': true,
  valorant: true,
  'counter-strike-2': true,
  'honor-of-kings': false,
  'overwatch-2': false,
  'apex-legends': false,
  'pubg-battlegrounds': false,
  'delta-force': false,
};

// SEO display order — matches docs/research/seo/00-overview.md priority.
const SEO_ORDER = [
  'league-of-legends',
  'valorant',
  'counter-strike-2',
  'honor-of-kings',
  'pubg-battlegrounds',
  'overwatch-2',
  'apex-legends',
  'delta-force',
] as const;

function orderedGames(): GameQuizV2[] {
  return SEO_ORDER.map((slug) => ALL_GAMES_V2.find((g) => g.slug === slug)!).filter(Boolean);
}

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M5 12h14M13 5l7 7-7 7" />
    </svg>
  );
}

interface GameHubPageProps {
  locale: SiteLocale;
}

/**
 * `/games` route — game hub landing.
 *
 * Replaces the V1 per-game wrapper. Editorial layout:
 *  - section header (kicker / Fraunces H1 / dek)
 *  - 4×2 game tile grid (cover + logo + italic deck + hover CTA chip)
 *  - 6-axis framework explainer (3×2 cells)
 *  - 8 `.gb` catalog blocks: sticky left header + 4×2 archetype mini cards
 */
export function GameHubPage({locale}: GameHubPageProps) {
  const copy = COPY[locale];
  const games = orderedGames();

  return (
    <main className="min-h-screen">
      {/* ─── HERO / SECTION HEADER ─────────────────────────────────────── */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-[1240px] px-5 pt-12 pb-8 md:px-8 md:pt-16 md:pb-12">
          <div className="editorial-kicker-line mb-6">{copy.kicker}</div>
          <h1 className="editorial-h1 max-w-[18ch]">
            {copy.h1Lead}
            <em>{copy.h1Italic}</em>
          </h1>
          <p className="editorial-dek mt-5 max-w-[58ch]">{copy.dek}</p>
          <div className="mono-label mt-7 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-border pt-5">
            <span>{copy.statsKicker}</span>
            <span className="opacity-50">·</span>
            <span>{copy.archetypesTotal}</span>
          </div>
        </div>
      </section>

      {/* ─── 4×2 TILE GRID ─────────────────────────────────────────────── */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-[1240px] px-5 py-10 md:px-8 md:py-14">
          <div className="grid grid-cols-2 gap-3.5 md:grid-cols-4 md:gap-3.5">
            {games.map((game, idx) => {
              const no = String(idx + 1).padStart(2, '0');
              const title = game.title[locale];
              const deck = game.deck[locale];
              return (
                <Link
                  key={game.slug}
                  href={`/games/${game.slug}`}
                  aria-label={`${title} · ${copy.cardCta}`}
                  className="group relative aspect-square overflow-hidden border border-border bg-[var(--ink)] transition-[transform,border-color] duration-300 ease-[cubic-bezier(.22,.7,.27,1)] hover:-translate-y-0.5 hover:border-[var(--ink)]"
                >
                  {/* Cover */}
                  <Image
                    src={`/game-quizzes/${game.slug}/cover.webp`}
                    alt={`${title} player quiz cover`}
                    fill
                    sizes="(max-width: 720px) 50vw, 25vw"
                    className="absolute inset-0 z-[1] object-cover transition-[transform,filter] duration-500 ease-[cubic-bezier(.22,.7,.27,1)] group-hover:scale-[1.02]"
                    style={{filter: 'saturate(0.88) contrast(1.04)'}}
                    unoptimized
                  />
                  {/* Dark mask */}
                  <div
                    className="absolute inset-0 z-[2] transition-opacity duration-300 group-hover:opacity-[1.1]"
                    style={{
                      background:
                        'linear-gradient(180deg, color-mix(in oklab, var(--ink) 55%, transparent) 0%, color-mix(in oklab, var(--ink) 70%, transparent) 55%, color-mix(in oklab, var(--ink) 92%, transparent) 100%)',
                    }}
                    aria-hidden
                  />
                  {/* Content */}
                  <div className="absolute inset-0 z-[3] grid grid-rows-[auto_1fr_auto] items-center p-4 text-[var(--paper-soft)]">
                    <div className="font-mono text-[10px] uppercase tracking-[0.2em] opacity-80 self-start">
                      {no} / 08 · {copy.genreLabel}
                    </div>
                    <div className="flex w-full items-center justify-center py-3 transition-transform duration-300 group-hover:scale-95 group-hover:opacity-55">
                      <Image
                        src={`/game-logos/${game.slug}.png`}
                        alt={title}
                        width={220}
                        height={110}
                        className="h-auto w-[80%] max-w-[220px] object-contain"
                        style={{filter: 'drop-shadow(0 3px 12px rgba(0,0,0,0.45))'}}
                        unoptimized
                      />
                    </div>
                    <p
                      className="m-0 self-end font-heading italic transition-opacity duration-300 group-hover:opacity-45"
                      style={{
                        fontVariationSettings: '"opsz" 144, "SOFT" 95, "wght" 500',
                        fontSize: 'clamp(13px, 1.1vw, 16px)',
                        lineHeight: 1.35,
                      }}
                    >
                      {deck}
                    </p>
                  </div>
                  {/* Hover CTA chip */}
                  <span className="card-cta">
                    {copy.cardCta}
                    <span className="icon" aria-hidden>
                      <ArrowIcon />
                    </span>
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── CATALOG: 6-AXIS EXPLAINER + 8 GAME BLOCKS ────────────────── */}
      <section className="border-b border-border bg-[var(--paper-deep)]">
        <div className="mx-auto max-w-[1240px] px-5 py-16 md:px-8 md:py-24">
          <header className="mb-10 grid grid-cols-1 gap-6 md:grid-cols-[auto_1fr_auto] md:items-baseline md:gap-6">
            <div className="mono-label md:col-start-1">{copy.catalogKicker}</div>
            <h2 className="editorial-h2 max-w-[18ch] md:col-span-2 md:col-start-1">
              {copy.catalogH2Lead}
              <br />
              <em>{copy.catalogH2Italic}</em>
            </h2>
            <div className="mono-label md:col-start-3 md:row-span-2 md:row-start-1 md:self-end md:text-right">
              {copy.sixAxisLabel}
              <br />
              {copy.catalogRight}
            </div>
          </header>

          {/* 6-axis explainer */}
          <div className="mb-14 grid gap-7 border-b border-border pb-12 md:grid-cols-[1.3fr_2fr] md:gap-12">
            <div>
              <h3
                className="m-0 font-heading"
                style={{
                  fontVariationSettings: '"opsz" 144, "wght" 700',
                  fontSize: 'clamp(24px, 2.4vw, 32px)',
                  lineHeight: 1.15,
                  letterSpacing: '-0.015em',
                }}
              >
                {copy.sixAxisLead}
                <em
                  style={{
                    fontStyle: 'italic',
                    fontVariationSettings: '"opsz" 144, "SOFT" 90, "wght" 700',
                    color: 'var(--vermillion)',
                  }}
                >
                  {copy.sixAxisItalic}
                </em>
              </h3>
              <p className="mt-3 max-w-[38ch] text-[15px] leading-[1.6] text-[var(--ink-soft)]">
                {copy.sixAxisBody}
              </p>
            </div>
            <div className="grid gap-[1px] border border-border bg-border sm:grid-cols-2 md:grid-cols-3">
              {AXES.map((ax) => (
                <div
                  key={ax.axis}
                  className="flex flex-col gap-1.5 bg-[var(--paper-soft)] p-4 md:p-[18px]"
                >
                  <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--vermillion)]">
                    {ax.lowLetter} ↔ {ax.highLetter}
                  </div>
                  <div
                    className="font-heading text-[19px] text-foreground"
                    style={{fontVariationSettings: '"opsz" 144, "wght" 700', letterSpacing: '-0.01em'}}
                  >
                    {ax.axis}
                  </div>
                  <div className="text-[13px] leading-[1.4] text-[var(--ink-muted)]">
                    <span>{ax.lowLabel[locale]}</span>
                    <span className="mx-1 text-[var(--ink-subtle)]">↔</span>
                    <span>{ax.highLabel[locale]}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 8 game catalog blocks */}
          <div className="flex flex-col gap-14">
            {games.map((game, idx) => {
              const no = String(idx + 1).padStart(2, '0');
              const title = game.title[locale];
              const enTitle = GAME_EN_TITLE[game.slug] ?? '';
              const genre = GAME_GENRE[game.slug] ?? '';
              const deck = game.deck[locale];
              const hasArt = HAS_ARCHETYPE_ART[game.slug];

              return (
                <article
                  key={game.slug}
                  id={`game-${game.slug}`}
                  data-game={game.slug}
                  className="grid items-start gap-9 md:grid-cols-[1fr_2.4fr]"
                >
                  {/* Left column — sticky header */}
                  <div className="md:sticky md:top-[88px] md:pr-6">
                    <div className="mb-3 flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--ink-muted)]">
                      <span className="block h-px w-[22px] bg-[var(--vermillion)]" />
                      <span>
                        {no} / 08 · {genre}
                      </span>
                    </div>
                    <div className="relative mb-4 aspect-[16/9] overflow-hidden border border-border">
                      <Image
                        src={`/game-quizzes/${game.slug}/cover.webp`}
                        alt={title}
                        fill
                        sizes="(max-width: 980px) 100vw, 35vw"
                        className="object-cover"
                        unoptimized
                      />
                      <div
                        className="absolute inset-0"
                        style={{
                          background:
                            'linear-gradient(180deg, transparent 30%, color-mix(in oklab, var(--ink) 25%, transparent))',
                        }}
                        aria-hidden
                      />
                    </div>
                    <h3
                      className="m-0 mb-1 font-heading text-foreground"
                      style={{
                        fontVariationSettings: '"opsz" 144, "SOFT" 30, "wght" 700',
                        fontSize: 'clamp(28px, 2.6vw, 36px)',
                        lineHeight: 1.1,
                        letterSpacing: '-0.018em',
                      }}
                    >
                      {title}
                      {enTitle && (
                        <em
                          className="block"
                          style={{
                            fontStyle: 'italic',
                            fontVariationSettings: '"opsz" 144, "SOFT" 90, "wght" 600',
                            fontSize: '0.6em',
                            color: 'var(--ink-muted)',
                            letterSpacing: '-0.005em',
                            marginTop: '2px',
                          }}
                        >
                          {enTitle}
                        </em>
                      )}
                    </h3>
                    <p
                      className="m-0 mb-4 font-heading italic text-[var(--ink-soft)]"
                      style={{
                        fontVariationSettings: '"opsz" 144, "SOFT" 90, "wght" 500',
                        fontSize: '17px',
                        lineHeight: 1.4,
                      }}
                    >
                      {deck}
                    </p>
                    <DominantAxes game={game} locale={locale} label={copy.dominantLabel} />
                    <Link
                      href={`/games/${game.slug}`}
                      className="mt-5 inline-flex items-center gap-2 rounded-full bg-[var(--ink)] px-[18px] py-[11px] text-sm font-semibold text-[var(--paper-soft)] transition-[background,transform] duration-200 hover:-translate-y-px hover:bg-[var(--vermillion)]"
                    >
                      {copy.cta}
                      <span className="font-heading" aria-hidden>
                        →
                      </span>
                    </Link>
                  </div>

                  {/* Right column — 4×2 archetype mini cards */}
                  <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
                    {game.archetypes.map((arch, i) => {
                      const arcNo = String(i + 1).padStart(2, '0');
                      const artPath = hasArt
                        ? `/game-quizzes/${game.slug}/archetypes/${arch.slug}.webp`
                        : getArchetypeArt(game.slug, arch.slug);
                      return (
                        <Link
                          key={arch.slug}
                          href={`/games/${game.slug}/result/${arch.slug}`}
                          aria-label={`${arch.name[locale]}`}
                          className="group relative block border border-border bg-[var(--paper-soft)] p-2.5 pb-3 transition-[transform,border-color,box-shadow] duration-300 ease-[cubic-bezier(.22,.7,.27,1)] hover:-translate-y-0.5 hover:border-[var(--ink)] hover:shadow-[0_12px_26px_-16px_color-mix(in_oklab,var(--ink)_50%,transparent)]"
                        >
                          <span className="absolute right-3 top-3 z-[2] font-mono text-[9px] uppercase tracking-[0.14em] text-[var(--ink-subtle)]">
                            № {arcNo}
                          </span>
                          <div
                            className="relative mb-2.5 aspect-square overflow-hidden bg-[var(--paper-deep)]"
                            style={
                              !artPath
                                ? {
                                    background:
                                      'radial-gradient(circle at 30% 30%, color-mix(in oklab, var(--vermillion) 14%, transparent) 0%, transparent 60%), var(--paper-deep)',
                                  }
                                : undefined
                            }
                          >
                            {artPath ? (
                              <Image
                                src={artPath}
                                alt={`${arch.name[locale]} player archetype`}
                                fill
                                sizes="(max-width: 720px) 50vw, 18vw"
                                className="object-cover transition-[transform,filter] duration-500 ease-[cubic-bezier(.22,.7,.27,1)] group-hover:scale-[1.04]"
                                style={{filter: 'saturate(0.78) contrast(1.02)'}}
                                loading="lazy"
                                unoptimized
                              />
                            ) : (
                              <div className="flex h-full items-center justify-center font-heading text-[40px] text-[var(--ink-subtle)]">
                                —
                              </div>
                            )}
                          </div>
                          <div
                            className="m-0 mb-0.5 font-heading text-[16px] leading-[1.15] text-foreground transition-colors group-hover:text-[var(--vermillion)]"
                            style={{
                              fontVariationSettings: '"opsz" 144, "wght" 700',
                              letterSpacing: '-0.005em',
                            }}
                          >
                            {arch.name[locale]}
                          </div>
                          <div className="font-mono text-[10px] uppercase tracking-[0.12em] text-[var(--ink-muted)]">
                            {arch.slug.replace(/-/g, ' ')}
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}

function DominantAxes({
  game,
  locale,
  label,
}: {
  game: GameQuizV2;
  locale: SiteLocale;
  label: string;
}) {
  return (
    <div className="my-1 flex flex-col gap-1.5 border-y border-border py-3.5">
      <span className="mb-1 font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--ink-muted)]">
        {label}
      </span>
      {game.dominantAxes.map((axis: Axis) => {
        const def = AXES.find((a) => a.axis === axis)!;
        return (
          <div key={axis} className="flex items-baseline gap-2.5 text-[13px] text-[var(--ink-soft)]">
            <span className="min-w-8 font-mono text-[10px] tracking-[0.16em] text-[var(--vermillion)]">
              {def.lowLetter} ↔ {def.highLetter}
            </span>
            <span
              className="font-heading text-[14px] text-foreground"
              style={{fontVariationSettings: '"opsz" 144, "wght" 600'}}
            >
              {axis}
            </span>
            <span className="text-[12px] text-[var(--ink-muted)]">
              {def.lowLabel[locale]} ↔ {def.highLabel[locale]}
            </span>
          </div>
        );
      })}
    </div>
  );
}
