import Image from 'next/image';
import {Link} from '@/i18n/navigation';
import {AXES} from '@/lib/data/games/dimensions';
import type {GameQuizV2, SiteLocale} from '@/lib/data/games/types';

// English subtitle/wordmark — italicized under the zh title for editorial accent.
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

const GAME_NUMBER: Record<string, string> = {
  'league-of-legends': '01',
  valorant: '02',
  'counter-strike-2': '03',
  'honor-of-kings': '04',
  'pubg-battlegrounds': '07',
  'overwatch-2': '05',
  'apex-legends': '06',
  'delta-force': '08',
};

const COPY: Record<SiteLocale, {playerQuiz: string; dominantLabel: string; ctaPrefix: string; ctaSuffix: string}> = {
  zh: {playerQuiz: '玩家测试', dominantLabel: '主导维度 · Dominant Axes', ctaPrefix: '开始', ctaSuffix: '玩家测试'},
  en: {playerQuiz: 'Player quiz', dominantLabel: 'Dominant axes', ctaPrefix: 'Take the', ctaSuffix: 'quiz'},
  ja: {playerQuiz: 'プレイヤー診断', dominantLabel: '主導軸 · Dominant Axes', ctaPrefix: '', ctaSuffix: 'プレイヤー診断を始める'},
  ko: {playerQuiz: '플레이어 테스트', dominantLabel: '주요 축 · Dominant Axes', ctaPrefix: '', ctaSuffix: '플레이어 테스트 시작'},
};

interface GameHeroProps {
  game: GameQuizV2;
  locale: SiteLocale;
}

export function GameHero({game, locale}: GameHeroProps) {
  const copy = COPY[locale];
  const title = game.title[locale];
  const enTitle = GAME_EN_TITLE[game.slug] ?? '';
  const genre = GAME_GENRE[game.slug] ?? '';
  const no = GAME_NUMBER[game.slug] ?? '01';
  const deck = game.deck[locale];

  return (
    <section className="relative overflow-hidden border-b border-border">
      {/* Cover bg + dark overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={`/game-quizzes/${game.slug}/cover.png`}
          alt=""
          fill
          priority
          unoptimized
          className="object-cover"
          style={{filter: 'saturate(0.78) contrast(1.02)'}}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, color-mix(in oklab, var(--paper) 78%, transparent) 0%, color-mix(in oklab, var(--paper) 90%, transparent) 60%, var(--paper) 100%)',
          }}
          aria-hidden
        />
      </div>

      <div className="relative z-10 mx-auto grid max-w-[1240px] gap-10 px-5 py-16 md:grid-cols-[1.4fr_1fr] md:gap-12 md:px-8 md:py-20">
        {/* Left: editorial */}
        <div className="flex flex-col">
          <div className="editorial-kicker-line mb-5">
            {no} / 08 · {genre} · {copy.playerQuiz}
          </div>
          {/* Game logo */}
          <Image
            src={`/game-logos/${game.slug}.png`}
            alt={title}
            width={280}
            height={140}
            className="mb-5 h-auto w-[180px] object-contain md:w-[240px]"
            style={{filter: 'drop-shadow(0 2px 12px rgba(0,0,0,0.18))'}}
            unoptimized
            priority
          />
          <h1 className="editorial-h1">
            {title}
            {enTitle && (
              <em
                className="block"
                style={{
                  fontVariationSettings: '"opsz" 144, "SOFT" 90, "wght" 700',
                  fontSize: '0.55em',
                  lineHeight: 1,
                  marginTop: '0.18em',
                }}
              >
                {enTitle}
              </em>
            )}
          </h1>
          <p
            className="mt-5 max-w-[36ch] font-heading italic text-[var(--ink-soft)]"
            style={{
              fontVariationSettings: '"opsz" 144, "SOFT" 90, "wght" 500',
              fontSize: 'clamp(18px, 1.7vw, 22px)',
              lineHeight: 1.35,
            }}
          >
            {deck}
          </p>

          {/* Per-game secondary accent line — uses --game-primary subtly */}
          <div
            className="mt-7 h-px w-24"
            style={{background: 'var(--game-primary, var(--vermillion))', opacity: 0.6}}
            aria-hidden
          />

          {/* CTA */}
          <div className="mt-7">
            <Link
              href={`/games/${game.slug}/play`}
              className="inline-flex items-center gap-2.5 rounded-full bg-[var(--vermillion)] px-7 py-4 text-[16px] font-semibold text-[var(--paper-soft)] shadow-[0_18px_44px_-12px_rgba(0,0,0,0.45)] transition-[background,transform] duration-200 hover:-translate-y-0.5 hover:bg-[var(--ink)]"
            >
              {copy.ctaPrefix && <span>{copy.ctaPrefix}</span>}
              <span>{title}</span>
              <span>{copy.ctaSuffix}</span>
              <span className="font-heading text-xl" aria-hidden>
                →
              </span>
            </Link>
          </div>
        </div>

        {/* Right: dominant axes list */}
        <aside className="self-end rounded-none border border-border bg-[color-mix(in_oklab,var(--paper-soft)_92%,transparent)] p-5 md:p-6">
          <div className="mono-label mb-3">{copy.dominantLabel}</div>
          <ul className="flex flex-col gap-3">
            {game.dominantAxes.map((axis) => {
              const def = AXES.find((a) => a.axis === axis)!;
              return (
                <li
                  key={axis}
                  className="grid grid-cols-[auto_1fr] items-baseline gap-x-4 border-t border-border pt-3 first:border-t-0 first:pt-0"
                >
                  <span className="font-mono text-[11px] tracking-[0.16em] text-[var(--vermillion)]">
                    {def.lowLetter} ↔ {def.highLetter}
                  </span>
                  <span
                    className="font-heading text-[18px] text-foreground"
                    style={{fontVariationSettings: '"opsz" 144, "wght" 700', letterSpacing: '-0.01em'}}
                  >
                    {axis}
                  </span>
                  <span className="col-span-2 text-[13px] text-[var(--ink-muted)]">
                    {def.lowLabel[locale]} ↔ {def.highLabel[locale]}
                  </span>
                </li>
              );
            })}
          </ul>
        </aside>
      </div>
    </section>
  );
}
