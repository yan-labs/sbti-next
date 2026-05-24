import Image from 'next/image';
import {Link} from '@/i18n/navigation';
import {ALL_GAMES_V2} from '@/lib/data/games';
import type {GameQuizV2, SiteLocale} from '@/lib/data/games/types';

// SEO priority order from docs/research/seo/00-overview.md
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

const COPY: Record<SiteLocale, {kicker: string; headingLead: string; headingItalic: string; cardCta: string; genreLabel: string}> = {
  zh: {kicker: '05 · 更多游戏专属测试', headingLead: '还有 7 款 ', headingItalic: '游戏测试等你', cardCta: '立即开测', genreLabel: '玩家测试'},
  en: {kicker: '05 · More game quizzes', headingLead: '7 more ', headingItalic: 'games to try', cardCta: 'Start quiz', genreLabel: 'Player quiz'},
  ja: {kicker: '05 · 他のゲーム別診断', headingLead: 'あと7', headingItalic: 'タイトルの診断', cardCta: '今すぐ診断', genreLabel: 'プレイヤー診断'},
  ko: {kicker: '05 · 다른 게임 테스트', headingLead: '7개 게임 ', headingItalic: '테스트 더 있다', cardCta: '바로 시작', genreLabel: '플레이어 테스트'},
};

interface RelatedGamesProps {
  game: GameQuizV2;
  locale: SiteLocale;
}

export function RelatedGames({game, locale}: RelatedGamesProps) {
  const copy = COPY[locale];

  // Sort all games by SEO priority, skip the current one, take first 3.
  const related = SEO_ORDER
    .filter((slug) => slug !== game.slug)
    .map((slug) => ALL_GAMES_V2.find((g) => g.slug === slug))
    .filter((g): g is GameQuizV2 => Boolean(g))
    .slice(0, 3);

  return (
    <section className="border-b border-border py-16 md:py-20" id="related">
      <div className="mx-auto max-w-[1240px] px-5 md:px-8">
        <header className="mb-10 grid grid-cols-1 items-baseline gap-3 md:grid-cols-[auto_1fr]">
          <div className="mono-label md:col-start-1">{copy.kicker}</div>
          <h2 className="editorial-h2 md:col-span-2">
            {copy.headingLead}
            <em>{copy.headingItalic}</em>
          </h2>
        </header>

        <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-3">
          {related.map((relGame) => {
            const no = String(SEO_ORDER.indexOf(relGame.slug as (typeof SEO_ORDER)[number]) + 1).padStart(2, '0');
            const title = relGame.title[locale];
            const deck = relGame.deck[locale];
            return (
              <Link
                key={relGame.slug}
                href={`/games/${relGame.slug}`}
                aria-label={`${title} · ${copy.cardCta}`}
                className="group relative block aspect-[4/5] overflow-hidden border border-border bg-[var(--ink)] transition-[transform,border-color] duration-300 ease-[cubic-bezier(.22,.7,.27,1)] hover:-translate-y-1 hover:border-[var(--ink)]"
              >
                <Image
                  src={`/game-quizzes/${relGame.slug}/cover.webp`}
                  alt={`${title} player quiz cover`}
                  fill
                  sizes="(max-width: 720px) 100vw, 33vw"
                  className="absolute inset-0 z-[1] object-cover transition-[transform,filter] duration-500 ease-[cubic-bezier(.22,.7,.27,1)] group-hover:scale-[1.04]"
                  style={{filter: 'saturate(0.92) contrast(1.05)'}}
                  loading="lazy"
                  unoptimized
                />
                <div
                  className="absolute inset-0 z-[2] transition-opacity duration-300 group-hover:opacity-90"
                  style={{
                    background:
                      'linear-gradient(180deg, color-mix(in oklab, var(--ink) 10%, transparent) 0%, color-mix(in oklab, var(--ink) 30%, transparent) 45%, color-mix(in oklab, var(--ink) 85%, transparent) 100%)',
                  }}
                  aria-hidden
                />
                <div className="absolute inset-0 z-[3] flex flex-col justify-between p-5 text-[var(--paper-soft)]">
                  <div className="flex items-center justify-between gap-3 font-mono text-[10px] uppercase tracking-[0.18em] opacity-85">
                    <span>{no} / 08</span>
                    <span>{copy.genreLabel}</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3
                      className="m-0 font-heading"
                      style={{
                        fontVariationSettings: '"opsz" 144, "SOFT" 40, "wght" 700',
                        fontSize: 'clamp(22px, 2vw, 30px)',
                        lineHeight: 1.05,
                        letterSpacing: '-0.015em',
                      }}
                    >
                      {title}
                    </h3>
                    <p
                      className="m-0 max-w-[28ch] font-heading italic opacity-90"
                      style={{
                        fontVariationSettings: '"opsz" 144, "SOFT" 95, "wght" 500',
                        fontSize: '14px',
                        lineHeight: 1.3,
                      }}
                    >
                      {deck}
                    </p>
                  </div>
                </div>
                <span className="card-cta">
                  {copy.cardCta}
                  <span className="icon" aria-hidden>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M13 5l7 7-7 7" />
                    </svg>
                  </span>
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
