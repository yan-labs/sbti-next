import Image from 'next/image';
import {Link} from '@/i18n/navigation';
import {ALL_GAMES_V2} from '@/lib/data/games';
import type {GameSlug} from '@/lib/data/games';

type Locale = 'zh' | 'en' | 'ja' | 'ko';

const COPY: Record<
  Locale,
  {
    ctaLabel: string;
    flagshipKicker: string;
    flagshipKickerStar: string;
    flagshipMark: string;
    flagshipTaglineEn: string;
    flagshipTaglineZh: string;
    flagshipDeck: string;
    tileQuizSuffix: string;
  }
> = {
  zh: {
    ctaLabel: '立即开测',
    flagshipKicker: '01 · 旗舰人格测试',
    flagshipKickerStar: '★ Est. 2026',
    flagshipMark: 'SBTI',
    flagshipTaglineEn: 'Satirical Behavior Type Indicator',
    flagshipTaglineZh: '讽刺人格测试 · 31 道题',
    flagshipDeck: '你是 27 种荒诞人格里的哪个？',
    tileQuizSuffix: '玩家测试',
  },
  en: {
    ctaLabel: 'Take it now',
    flagshipKicker: '01 · Flagship Personality Test',
    flagshipKickerStar: '★ Est. 2026',
    flagshipMark: 'SBTI',
    flagshipTaglineEn: 'Satirical Behavior Type Indicator',
    flagshipTaglineZh: 'Satirical Personality Test · 31 questions',
    flagshipDeck: 'Which of the 27 absurd types are you?',
    tileQuizSuffix: 'Player Quiz',
  },
  ja: {
    ctaLabel: '今すぐ診断',
    flagshipKicker: '01 · 旗艦人格診断',
    flagshipKickerStar: '★ Est. 2026',
    flagshipMark: 'SBTI',
    flagshipTaglineEn: 'Satirical Behavior Type Indicator',
    flagshipTaglineZh: '風刺人格診断 · 31問',
    flagshipDeck: '27の風刺タイプのどれ？',
    tileQuizSuffix: 'プレイヤー診断',
  },
  ko: {
    ctaLabel: '바로 테스트',
    flagshipKicker: '01 · 대표 인격 테스트',
    flagshipKickerStar: '★ Est. 2026',
    flagshipMark: 'SBTI',
    flagshipTaglineEn: 'Satirical Behavior Type Indicator',
    flagshipTaglineZh: '풍자 인격 테스트 · 31문항',
    flagshipDeck: '27가지 풍자 유형 중 어떤 것?',
    tileQuizSuffix: '플레이어 테스트',
  },
};

const FLAGSHIP_CODES = ['CTRL', 'MUM', 'MALO', 'FAKE'] as const;

// SEO priority order
const GAME_ORDER: GameSlug[] = [
  'league-of-legends',
  'valorant',
  'counter-strike-2',
  'honor-of-kings',
  'overwatch-2',
  'apex-legends',
  'pubg-battlegrounds',
  'delta-force',
];

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14M13 5l7 7-7 7" />
    </svg>
  );
}

interface TestLauncherProps {
  locale: string;
}

export function TestLauncher({locale}: TestLauncherProps) {
  const l = (locale as Locale) in COPY ? (locale as Locale) : 'en';
  const t = COPY[l];

  const games = GAME_ORDER.map((slug) =>
    ALL_GAMES_V2.find((g) => g.slug === slug),
  ).filter(Boolean) as typeof ALL_GAMES_V2;

  return (
    <div className="grid gap-3.5 md:grid-cols-[minmax(0,1.2fr)_minmax(0,2.4fr)]">
      {/* ─── Flagship SBTI card ─────────────────────────────────────────── */}
      <Link
        href="/test"
        aria-label={`${t.flagshipMark} — ${t.flagshipDeck}`}
        className="flagship-card group relative block overflow-hidden border min-h-[320px] transition-all duration-300 hover:-translate-y-1"
        style={{
          background: 'var(--ink)',
          color: 'var(--paper-soft)',
          borderColor: 'var(--ink)',
        }}
      >
        {/* Portrait 2x2 background */}
        <div className="absolute inset-0 z-0 grid grid-cols-2 grid-rows-2">
          {FLAGSHIP_CODES.map((code) => (
            <div key={code} className="relative overflow-hidden">
              <Image
                src={`/types/${code}.webp`}
                alt=""
                fill
                sizes="(max-width: 980px) 50vw, 25vw"
                className="object-cover transition-all duration-500 group-hover:scale-[1.03]"
                style={{filter: 'saturate(0.88) contrast(1.04)'}}
                loading="eager"
                unoptimized
              />
            </div>
          ))}
        </div>

        {/* Dark mask + vermillion glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-[1] transition-opacity duration-300"
          style={{
            background: `
              radial-gradient(circle at 85% 15%, color-mix(in oklab, var(--vermillion) 45%, transparent) 0%, transparent 55%),
              radial-gradient(circle at 12% 92%, color-mix(in oklab, var(--vermillion) 18%, transparent) 0%, transparent 55%),
              linear-gradient(180deg,
                color-mix(in oklab, var(--ink) 60%, transparent) 0%,
                color-mix(in oklab, var(--ink) 72%, transparent) 50%,
                color-mix(in oklab, var(--ink) 94%, transparent) 100%)
            `,
          }}
        />

        {/* Inner content */}
        <div className="absolute inset-0 z-[2] grid grid-rows-[auto_1fr_auto] items-center px-6 py-5">
          <div
            className="flex items-center justify-between font-mono uppercase"
            style={{
              fontSize: 11,
              letterSpacing: '0.22em',
              color: 'color-mix(in oklab, var(--paper-soft) 75%, transparent)',
            }}
          >
            <span>{t.flagshipKicker}</span>
            <span style={{color: 'var(--vermillion)'}}>{t.flagshipKickerStar}</span>
          </div>

          <div className="flex flex-col gap-1 self-center text-left">
            <span
              className="font-heading"
              style={{
                fontVariationSettings: '"opsz" 144, "SOFT" 30, "wght" 800',
                fontSize: 'clamp(56px, 6vw, 92px)',
                lineHeight: 0.92,
                letterSpacing: '-0.04em',
                color: 'var(--paper-soft)',
                textShadow: '0 4px 24px rgba(0,0,0,0.45)',
              }}
            >
              {t.flagshipMark}
              <span style={{color: 'var(--vermillion)'}}>.</span>
            </span>
            <span
              className="font-mono uppercase"
              style={{
                fontSize: 11,
                letterSpacing: '0.22em',
                color: 'var(--vermillion)',
              }}
            >
              {t.flagshipTaglineEn}
            </span>
            <span
              className="font-heading"
              style={{
                fontStyle: 'italic',
                fontVariationSettings: '"opsz" 144, "SOFT" 95, "wght" 500',
                fontSize: 15,
                color: 'color-mix(in oklab, var(--paper-soft) 85%, transparent)',
                marginTop: 2,
              }}
            >
              {t.flagshipTaglineZh}
            </span>
          </div>

          <p
            className="font-heading m-0"
            style={{
              fontStyle: 'italic',
              fontVariationSettings: '"opsz" 144, "SOFT" 95, "wght" 500',
              fontSize: 'clamp(15px, 1.3vw, 18px)',
              lineHeight: 1.35,
              color: 'var(--paper-soft)',
            }}
          >
            {t.flagshipDeck}
            <span style={{color: 'var(--vermillion)', opacity: 0.7, marginLeft: 6}}>
              →
            </span>
          </p>
        </div>

        {/* Hover CTA */}
        <span className="card-cta">
          {t.ctaLabel}
          <span className="icon" aria-hidden>
            <ArrowIcon />
          </span>
        </span>
      </Link>

      {/* ─── 8 game tiles ───────────────────────────────────────────────── */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 grid-rows-[repeat(2,1fr)] gap-3.5">
        {games.map((game, i) => {
          const title = game.title[l] ?? game.title.en;
          const deck = game.deck[l] ?? game.deck.en;
          const no = String(i + 1).padStart(2, '0');
          return (
            <Link
              key={game.slug}
              href={`/games/${game.slug}`}
              data-game={game.slug}
              aria-label={`${title} — ${deck}`}
              className="group relative overflow-hidden border aspect-square transition-all duration-300 hover:-translate-y-1"
              style={{
                background: 'var(--ink)',
                borderColor: 'var(--border)',
              }}
            >
              {/* Cover image */}
              <Image
                src={`/game-quizzes/${game.slug}/cover.png`}
                alt=""
                fill
                sizes="(max-width: 720px) 50vw, (max-width: 980px) 33vw, 25vw"
                className="object-cover transition-all duration-500 group-hover:scale-[1.03]"
                style={{filter: 'saturate(0.88) contrast(1.04)'}}
                loading="lazy"
                unoptimized
              />
              {/* Dark mask */}
              <div
                aria-hidden
                className="absolute inset-0 z-[2] transition-opacity duration-300"
                style={{
                  background: `linear-gradient(180deg,
                    color-mix(in oklab, var(--ink) 55%, transparent) 0%,
                    color-mix(in oklab, var(--ink) 70%, transparent) 55%,
                    color-mix(in oklab, var(--ink) 92%, transparent) 100%)`,
                }}
              />
              <div className="absolute inset-0 z-[3] grid grid-rows-[auto_1fr_auto] items-center p-4 text-[var(--paper-soft)]">
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] opacity-80">
                  {no} / 08 · {t.tileQuizSuffix}
                </div>
                <div className="flex items-center justify-center px-2 py-3">
                  <Image
                    src={`/game-logos/${game.slug}.png`}
                    alt={title}
                    width={220}
                    height={80}
                    className="h-auto w-4/5 max-w-[220px] object-contain transition-all duration-500 group-hover:opacity-55 group-hover:scale-[0.94]"
                    style={{filter: 'drop-shadow(0 3px 12px rgba(0,0,0,0.45))'}}
                    loading="lazy"
                    unoptimized
                  />
                </div>
                <p
                  className="font-heading m-0 transition-opacity duration-300 group-hover:opacity-45"
                  style={{
                    fontStyle: 'italic',
                    fontVariationSettings: '"opsz" 144, "SOFT" 95, "wght" 500',
                    fontSize: 'clamp(13px, 1.1vw, 16px)',
                    lineHeight: 1.35,
                  }}
                >
                  {deck}
                </p>
              </div>
              <span className="card-cta">
                {t.ctaLabel}
                <span className="icon" aria-hidden>
                  <ArrowIcon />
                </span>
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
