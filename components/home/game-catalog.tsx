import Image from 'next/image';
import {Link} from '@/i18n/navigation';
import {ALL_GAMES_V2, AXES} from '@/lib/data/games';
import type {Axis, AxisDefinition, GameQuizV2} from '@/lib/data/games';

type Locale = 'zh' | 'en' | 'ja' | 'ko';

interface GameCatalogProps {
  locale: string;
}

const COPY: Record<
  Locale,
  {
    kicker: string;
    rightLineA: string;
    rightLineB: string;
    headTop: string;
    headEm: string;
    introHeadLead: string;
    introHeadEm: string;
    introBody: string;
    axisLabel: string;
    introAxisLabel: string;
    dominantLabel: string;
    cta: string;
    genreFor: (slug: string) => string;
  }
> = {
  zh: {
    kicker: '03 · 8 款游戏完整目录',
    rightLineA: 'SHARED 6-AXIS · 共享六维体系',
    rightLineB: '8 × 8 = 64 玩家档案',
    headTop: '8 款游戏 × 8 原型',
    headEm: '64 种玩家档案',
    introHeadLead: '所有测试共享的',
    introHeadEm: '六维体系',
    introBody: '每款游戏 31 道题，最终映射到这 6 个轴上。差异点在于：每款游戏会侧重其中 3 个主导轴 —— 比如 LoL 看你的 Bond 团魂 / Nerve 心态 / Mental 抗压；CS2 看你的 Tempo 节奏 / Intel 判断 / Nerve 心态。',
    axisLabel: '主导维度',
    introAxisLabel: '六维',
    dominantLabel: '主导维度 · Dominant Axes',
    cta: '开始测试',
    genreFor: (slug) => GENRE_ZH[slug] ?? '',
  },
  en: {
    kicker: '03 · The 8-Game Full Catalog',
    rightLineA: 'SHARED 6-AXIS FRAMEWORK',
    rightLineB: '8 × 8 = 64 player files',
    headTop: '8 games × 8 archetypes',
    headEm: '64 player files',
    introHeadLead: 'A shared ',
    introHeadEm: 'six-axis framework',
    introBody: 'Every quiz is 31 questions mapped onto the same 6 axes. What differs is the dominant three — LoL leans on Bond / Nerve / Mental; CS2 leans on Tempo / Intel / Nerve. Same skeleton, different muscles.',
    axisLabel: 'Dominant axes',
    introAxisLabel: 'Six axes',
    dominantLabel: 'Dominant Axes',
    cta: 'Start quiz',
    genreFor: (slug) => GENRE_EN[slug] ?? '',
  },
  ja: {
    kicker: '03 · 8タイトル完全カタログ',
    rightLineA: 'SHARED 6-AXIS · 共通6軸',
    rightLineB: '8 × 8 = 64プレイヤーファイル',
    headTop: '8タイトル × 8原型',
    headEm: '64のプレイヤーファイル',
    introHeadLead: 'すべての診断は共通の',
    introHeadEm: '6軸体系',
    introBody: '各ゲーム31問が、同じ6軸にマッピングされる。違うのは主導3軸 —— LoLはBond / Nerve / Mental寄り、CS2はTempo / Intel / Nerve寄り。骨格は同じ、筋肉が違う。',
    axisLabel: '主導軸',
    introAxisLabel: '6軸',
    dominantLabel: 'Dominant Axes · 主導軸',
    cta: '診断を始める',
    genreFor: (slug) => GENRE_JA[slug] ?? '',
  },
  ko: {
    kicker: '03 · 8개 게임 풀 카탈로그',
    rightLineA: 'SHARED 6-AXIS · 공통 6축',
    rightLineB: '8 × 8 = 64 플레이어 파일',
    headTop: '8개 게임 × 8개 원형',
    headEm: '64가지 플레이어 파일',
    introHeadLead: '모든 테스트가 공유하는 ',
    introHeadEm: '6축 체계',
    introBody: '각 게임 31문항이 같은 6축에 매핑된다. 다른 점은 주도 3축 —— LoL은 Bond / Nerve / Mental에, CS2는 Tempo / Intel / Nerve에 무게가 실린다. 골격은 같고 근육이 다르다.',
    axisLabel: '주도 축',
    introAxisLabel: '6축',
    dominantLabel: 'Dominant Axes · 주도 축',
    cta: '테스트 시작',
    genreFor: (slug) => GENRE_KO[slug] ?? '',
  },
};

const GENRE_EN: Record<string, string> = {
  'league-of-legends': 'MOBA',
  'valorant': 'FPS',
  'counter-strike-2': 'FPS',
  'honor-of-kings': 'MOBA',
  'overwatch-2': 'HERO FPS',
  'apex-legends': 'BR',
  'pubg-battlegrounds': 'BR',
  'delta-force': 'TACTICAL',
};
const GENRE_ZH: Record<string, string> = {
  'league-of-legends': 'MOBA',
  'valorant': 'FPS',
  'counter-strike-2': 'FPS',
  'honor-of-kings': 'MOBA',
  'overwatch-2': '英雄 FPS',
  'apex-legends': '大逃杀',
  'pubg-battlegrounds': '大逃杀',
  'delta-force': '战术',
};
const GENRE_JA: Record<string, string> = {
  'league-of-legends': 'MOBA',
  'valorant': 'FPS',
  'counter-strike-2': 'FPS',
  'honor-of-kings': 'MOBA',
  'overwatch-2': 'ヒーロー FPS',
  'apex-legends': 'バトロワ',
  'pubg-battlegrounds': 'バトロワ',
  'delta-force': '戦術',
};
const GENRE_KO: Record<string, string> = {
  'league-of-legends': 'MOBA',
  'valorant': 'FPS',
  'counter-strike-2': 'FPS',
  'honor-of-kings': 'MOBA',
  'overwatch-2': '히어로 FPS',
  'apex-legends': '배틀로얄',
  'pubg-battlegrounds': '배틀로얄',
  'delta-force': '전술',
};

// SEO priority order
const GAME_ORDER = [
  'league-of-legends',
  'valorant',
  'counter-strike-2',
  'honor-of-kings',
  'overwatch-2',
  'apex-legends',
  'pubg-battlegrounds',
  'delta-force',
];

// Short axis labels in Chinese (for display next to letters)
const AXIS_SHORT_ZH: Record<Axis, string> = {
  Tempo: '节奏',
  Nerve: '心态',
  Bond: '默契',
  Intel: '判断',
  Flair: '风格',
  Mental: '抗压',
};

function axisShortName(axis: Axis, l: Locale): string {
  if (l === 'zh') return `${axis} · ${AXIS_SHORT_ZH[axis]}`;
  return axis;
}

function axisLetters(a: AxisDefinition): string {
  return `${a.lowLetter} ↔ ${a.highLetter}`;
}

export function GameCatalog({locale}: GameCatalogProps) {
  const l = (locale as Locale) in COPY ? (locale as Locale) : 'en';
  const t = COPY[l];

  const games = GAME_ORDER.map((slug) =>
    ALL_GAMES_V2.find((g) => g.slug === slug),
  ).filter(Boolean) as GameQuizV2[];

  return (
    <section id="catalog" className="border-b border-border py-24">
      <div className="container mx-auto max-w-[1240px] px-5 md:px-8">
        {/* Header */}
        <header className="mb-12 grid items-baseline gap-6 md:grid-cols-[auto_1fr_auto]">
          <div className="mono-label md:col-span-2">{t.kicker}</div>
          <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground leading-7 md:row-start-1 md:row-span-2 md:col-start-3 md:text-right self-end">
            {t.rightLineA}
            <br />
            {t.rightLineB}
          </div>
          <h2
            className="font-heading text-foreground m-0 md:col-span-2"
            style={{
              fontVariationSettings: '"opsz" 144, "SOFT" 30, "wght" 700',
              fontSize: 'clamp(36px, 5vw, 64px)',
              lineHeight: 0.96,
              letterSpacing: '-0.02em',
              maxWidth: '18ch',
            }}
          >
            {t.headTop}
            <br />
            <em
              className="not-italic"
              style={{
                fontStyle: 'italic',
                fontVariationSettings: '"opsz" 144, "SOFT" 90, "wght" 700',
                color: 'var(--vermillion)',
                letterSpacing: '-0.025em',
              }}
            >
              {t.headEm}
            </em>
          </h2>
        </header>

        {/* Axis framework explainer */}
        <div className="mb-16 grid gap-8 md:grid-cols-[minmax(0,1.3fr)_minmax(0,2fr)] pb-12 border-b border-border">
          <div>
            <h3
              className="font-heading m-0 mb-3 text-foreground"
              style={{
                fontVariationSettings: '"opsz" 144, "wght" 700',
                fontSize: 'clamp(24px, 2.4vw, 32px)',
                lineHeight: 1.15,
                letterSpacing: '-0.015em',
              }}
            >
              {t.introHeadLead}
              <em
                className="not-italic"
                style={{
                  fontStyle: 'italic',
                  fontVariationSettings: '"opsz" 144, "SOFT" 90, "wght" 700',
                  color: 'var(--vermillion)',
                }}
              >
                {t.introHeadEm}
              </em>
            </h3>
            <p
              className="m-0 max-w-[38ch] text-[15px] leading-relaxed"
              style={{color: 'var(--ink-soft)'}}
            >
              {t.introBody}
            </p>
          </div>
          <div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-px border"
            style={{background: 'var(--border)', borderColor: 'var(--border)'}}
          >
            {AXES.map((a) => (
              <div
                key={a.axis}
                className="flex flex-col gap-1.5 px-4 py-4"
                style={{background: 'var(--paper-soft)'}}
              >
                <div
                  className="font-mono"
                  style={{
                    fontSize: 11,
                    letterSpacing: '0.2em',
                    color: 'var(--vermillion)',
                  }}
                >
                  {axisLetters(a)}
                </div>
                <div
                  className="font-heading text-foreground"
                  style={{
                    fontVariationSettings: '"opsz" 144, "wght" 700',
                    fontSize: 19,
                    letterSpacing: '-0.01em',
                  }}
                >
                  {axisShortName(a.axis, l)}
                </div>
                <div className="text-[13px] leading-snug text-muted-foreground">
                  <span>{a.lowLabel[l] ?? a.lowLabel.en}</span>
                  <span style={{color: 'var(--ink-subtle)', margin: '0 4px'}}>↔</span>
                  <span>{a.highLabel[l] ?? a.highLabel.en}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Game blocks */}
        <div className="flex flex-col gap-14">
          {games.map((game, i) => {
            const no = String(i + 1).padStart(2, '0');
            const title = game.title[l] ?? game.title.en;
            const en = game.title.en;
            const deck = game.deck[l] ?? game.deck.en;
            const genre = t.genreFor(game.slug);

            return (
              <article
                key={game.slug}
                id={`game-${game.slug}`}
                className="grid items-start gap-9 md:grid-cols-[minmax(0,1fr)_minmax(0,2.4fr)]"
              >
                {/* Sticky left column */}
                <div className="md:sticky md:top-22 md:pr-6">
                  <div
                    className="mb-3.5 flex items-center gap-2.5 font-mono uppercase"
                    style={{
                      fontSize: 11,
                      letterSpacing: '0.18em',
                      color: 'var(--ink-muted)',
                    }}
                  >
                    <span
                      aria-hidden
                      className="inline-block h-px w-[22px]"
                      style={{background: 'var(--vermillion)'}}
                    />
                    {no} / 08 · {genre}
                  </div>
                  <div
                    className="relative mb-4 aspect-[16/9] overflow-hidden border"
                    style={{borderColor: 'var(--border)'}}
                  >
                    <Image
                      src={`/game-quizzes/${game.slug}/cover.png`}
                      alt={title}
                      fill
                      sizes="(max-width: 980px) 100vw, 33vw"
                      className="object-cover"
                      loading="lazy"
                      unoptimized
                    />
                    <div
                      aria-hidden
                      className="absolute inset-0"
                      style={{
                        background: `linear-gradient(180deg, transparent 30%, color-mix(in oklab, var(--ink) 25%, transparent))`,
                      }}
                    />
                  </div>
                  <h3
                    className="font-heading m-0 mb-1.5 text-foreground"
                    style={{
                      fontVariationSettings: '"opsz" 144, "SOFT" 30, "wght" 700',
                      fontSize: 'clamp(28px, 2.6vw, 36px)',
                      lineHeight: 1.1,
                      letterSpacing: '-0.018em',
                    }}
                  >
                    {title}
                    {title !== en && (
                      <em
                        className="not-italic block mt-0.5 text-muted-foreground"
                        style={{
                          fontStyle: 'italic',
                          fontVariationSettings: '"opsz" 144, "SOFT" 90, "wght" 600',
                          fontSize: '0.6em',
                          letterSpacing: '-0.005em',
                        }}
                      >
                        {en}
                      </em>
                    )}
                  </h3>
                  <p
                    className="font-heading mb-4"
                    style={{
                      fontStyle: 'italic',
                      fontVariationSettings: '"opsz" 144, "SOFT" 90, "wght" 500',
                      fontSize: 17,
                      lineHeight: 1.4,
                      color: 'var(--ink-soft)',
                      margin: '0 0 18px',
                    }}
                  >
                    {deck}
                  </p>
                  <div
                    className="mb-5 flex flex-col gap-1.5 py-3.5 border-y border-border"
                  >
                    <span className="mono-label mb-1" style={{fontSize: 10, letterSpacing: '0.18em'}}>
                      {t.dominantLabel}
                    </span>
                    {game.dominantAxes.map((axisKey) => {
                      const a = AXES.find((x) => x.axis === axisKey);
                      if (!a) return null;
                      return (
                        <div
                          key={axisKey}
                          className="flex items-baseline gap-2.5"
                          style={{fontSize: 13, color: 'var(--ink-soft)'}}
                        >
                          <span
                            className="font-mono"
                            style={{
                              fontSize: 10,
                              letterSpacing: '0.16em',
                              color: 'var(--vermillion)',
                              minWidth: 32,
                            }}
                          >
                            {axisLetters(a)}
                          </span>
                          <span
                            className="font-heading text-foreground"
                            style={{
                              fontVariationSettings: '"opsz" 144, "wght" 600',
                              fontSize: 14,
                            }}
                          >
                            {axisShortName(axisKey, l)}
                          </span>
                          <span className="text-muted-foreground" style={{fontSize: 12}}>
                            {a.lowLabel[l] ?? a.lowLabel.en} ↔{' '}
                            {a.highLabel[l] ?? a.highLabel.en}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                  <Link
                    href={`/games/${game.slug}`}
                    data-game={game.slug}
                    className="gb-cta-link inline-flex items-center gap-2 rounded-full px-4 py-2.5 font-semibold transition-all"
                    style={{
                      background: 'var(--ink)',
                      color: 'var(--paper-soft)',
                      fontSize: 14,
                    }}
                  >
                    {t.cta} <span aria-hidden>→</span>
                  </Link>
                </div>

                {/* Archetype mini-cards */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                  {game.archetypes.map((arch, ai) => {
                    const aNo = String(ai + 1).padStart(2, '0');
                    const archName = arch.name[l] ?? arch.name.en;
                    const archEn = arch.name.en;
                    return (
                      <Link
                        key={arch.slug}
                        href={`/games/${game.slug}/result/${arch.slug}`}
                        data-game={game.slug}
                        aria-label={`${archName} · ${archEn}`}
                        className="arch-card group relative block border p-2.5 pb-3 transition-all duration-300 hover:-translate-y-1"
                        style={{
                          background: 'var(--paper-soft)',
                          borderColor: 'var(--border)',
                        }}
                      >
                        <span
                          className="absolute right-3 top-3 z-[2] font-mono"
                          style={{
                            fontSize: 9,
                            letterSpacing: '0.14em',
                            color: 'var(--ink-subtle)',
                          }}
                        >
                          № {aNo}
                        </span>
                        <div
                          className="relative mb-2.5 aspect-square overflow-hidden"
                          style={{background: 'var(--paper-deep)'}}
                        >
                          <Image
                            src={`/game-quizzes/${game.slug}/archetypes/${arch.slug}.webp`}
                            alt=""
                            fill
                            sizes="(max-width: 720px) 50vw, 20vw"
                            className="object-cover transition-all duration-500 group-hover:scale-[1.04]"
                            style={{filter: 'saturate(0.78) contrast(1.02)'}}
                            loading="lazy"
                            unoptimized
                          />
                        </div>
                        <h4
                          className="font-heading text-foreground m-0 mb-0.5 transition-colors group-hover:text-[var(--vermillion)]"
                          style={{
                            fontVariationSettings: '"opsz" 144, "wght" 700',
                            fontSize: 16,
                            lineHeight: 1.15,
                            letterSpacing: '-0.005em',
                          }}
                        >
                          {archName}
                        </h4>
                        {archName !== archEn && (
                          <div
                            className="font-mono uppercase text-muted-foreground"
                            style={{fontSize: 10, letterSpacing: '0.12em'}}
                          >
                            {archEn}
                          </div>
                        )}
                      </Link>
                    );
                  })}
                </div>
              </article>
            );
          })}
        </div>
      </div>
      <style>{`
        .arch-card:hover {
          border-color: var(--ink);
          box-shadow: 0 12px 26px -16px color-mix(in oklab, var(--ink) 50%, transparent);
        }
        .arch-card:hover img {
          filter: saturate(1.05) contrast(1.05) !important;
        }
        .gb-cta-link:hover {
          background: var(--vermillion);
          transform: translateY(-1px);
        }
      `}</style>
    </section>
  );
}
