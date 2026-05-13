import {Link} from '@/i18n/navigation';
import type {GameQuizV2, SiteLocale} from '@/lib/data/games/types';

const COPY: Record<SiteLocale, {kicker: string; cta: string; stats: {value: string; label: string}[]}> = {
  zh: {
    kicker: '02 · 测试规模',
    cta: '开始测试',
    stats: [
      {value: '31', label: '道题'},
      {value: '6', label: '行为轴'},
      {value: '8', label: '玩家原型'},
      {value: '3', label: '分钟'},
    ],
  },
  en: {
    kicker: '02 · The numbers',
    cta: 'Take the quiz',
    stats: [
      {value: '31', label: 'Questions'},
      {value: '6', label: 'Axes'},
      {value: '8', label: 'Archetypes'},
      {value: '3', label: 'Minutes'},
    ],
  },
  ja: {
    kicker: '02 · 診断スペック',
    cta: '診断を始める',
    stats: [
      {value: '31', label: '問'},
      {value: '6', label: '行動軸'},
      {value: '8', label: 'タイプ'},
      {value: '3', label: '分'},
    ],
  },
  ko: {
    kicker: '02 · 테스트 규모',
    cta: '테스트 시작',
    stats: [
      {value: '31', label: '문항'},
      {value: '6', label: '행동 축'},
      {value: '8', label: '유형'},
      {value: '3', label: '분'},
    ],
  },
};

interface HowItWorksGameProps {
  game: GameQuizV2;
  locale: SiteLocale;
}

/** Editorial stats strip — replaces the previous 3-step grid. */
export function HowItWorksGame({game, locale}: HowItWorksGameProps) {
  const copy = COPY[locale];

  return (
    <section className="border-b border-border py-12 md:py-14" id="how-it-works">
      <div className="mx-auto max-w-[1240px] px-5 md:px-8">
        <div className="mono-label mb-6">{copy.kicker}</div>
        <div className="grid grid-cols-2 gap-x-6 gap-y-7 border-y border-border py-7 md:flex md:items-end md:justify-between md:gap-12 md:py-9">
          {copy.stats.map(({value, label}) => (
            <div key={label} className="flex flex-col gap-1.5">
              <span
                className="font-heading leading-none text-foreground"
                style={{
                  fontVariationSettings: '"opsz" 144, "SOFT" 30, "wght" 700',
                  fontSize: 'clamp(40px, 5.5vw, 64px)',
                  letterSpacing: '-0.02em',
                }}
              >
                {value}
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--ink-muted)]">
                {label}
              </span>
            </div>
          ))}
          <Link
            href={`/games/${game.slug}/play`}
            className="col-span-2 mt-2 inline-flex items-center justify-center gap-2 self-end rounded-full bg-[var(--ink)] px-6 py-3 text-sm font-semibold text-[var(--paper-soft)] transition-[background,transform] duration-200 hover:-translate-y-0.5 hover:bg-[var(--vermillion)] md:col-span-1 md:mt-0"
          >
            {copy.cta}
            <span className="font-heading" aria-hidden>
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
