import {AXES} from '@/lib/data/games/dimensions';
import type {Axis, GameQuizV2, SiteLocale} from '@/lib/data/games/types';

const COPY: Record<SiteLocale, {kicker: string; headingLead: string; headingItalic: string; dek: string; dominantBadge: string}> = {
  zh: {
    kicker: '03 · 六维评估体系',
    headingLead: '所有测试共享的 ',
    headingItalic: '六维体系',
    dek: '每款游戏 31 道题，最终都映射到这 6 个轴上。本款游戏的 3 个主导轴用 vermillion 标记。',
    dominantBadge: '主导轴',
  },
  en: {
    kicker: '03 · The 6-axis framework',
    headingLead: 'The shared ',
    headingItalic: '6-axis framework',
    dek: 'Every quiz is 31 questions mapped to these 6 axes. The 3 dominant axes for this game are flagged in vermillion.',
    dominantBadge: 'Dominant',
  },
  ja: {
    kicker: '03 · 6軸モデル',
    headingLead: 'すべての診断で共通の',
    headingItalic: '6軸モデル',
    dek: '各診断は31問、最終的にこの6軸にマッピングされる。このゲームの主導軸3つはvermillionで表示。',
    dominantBadge: '主導',
  },
  ko: {
    kicker: '03 · 6축 모델',
    headingLead: '모든 테스트가 공유하는 ',
    headingItalic: '6축 모델',
    dek: '각 테스트는 31문항으로 같은 6축에 매핑된다. 이 게임의 주요 축 3개는 vermillion으로 표시된다.',
    dominantBadge: '주요',
  },
};

interface SixAxisExplainerProps {
  game: GameQuizV2;
  locale: SiteLocale;
}

export function SixAxisExplainer({game, locale}: SixAxisExplainerProps) {
  const copy = COPY[locale];
  const dominantSet = new Set<Axis>(game.dominantAxes);

  return (
    <section className="border-b border-border bg-[var(--paper-deep)] py-16 md:py-20" id="six-axes">
      <div className="mx-auto max-w-[1240px] px-5 md:px-8">
        <header className="mb-10 grid grid-cols-1 items-baseline gap-3 md:grid-cols-[auto_1fr]">
          <div className="mono-label md:col-start-1">{copy.kicker}</div>
          <h2 className="editorial-h2 md:col-span-2">
            {copy.headingLead}
            <em>{copy.headingItalic}</em>
          </h2>
          <p className="mt-3 max-w-[58ch] text-[15px] leading-[1.6] text-[var(--ink-soft)] md:col-span-2 md:col-start-1">
            {copy.dek}
          </p>
        </header>

        <div className="grid gap-[1px] border border-border bg-border sm:grid-cols-2 md:grid-cols-3">
          {AXES.map((ax) => {
            const isDominant = dominantSet.has(ax.axis);
            return (
              <div
                key={ax.axis}
                className="relative flex flex-col gap-2 p-5 md:p-6"
                style={{
                  background: isDominant
                    ? 'color-mix(in oklab, var(--vermillion-soft) 70%, var(--paper-soft))'
                    : 'var(--paper-soft)',
                  borderLeft: isDominant ? '3px solid var(--vermillion)' : '3px solid transparent',
                }}
              >
                <div className="flex items-center justify-between gap-2">
                  <span
                    className="font-mono text-[11px] uppercase tracking-[0.2em]"
                    style={{color: isDominant ? 'var(--vermillion)' : 'var(--ink-muted)'}}
                  >
                    {ax.lowLetter} ↔ {ax.highLetter}
                  </span>
                  {isDominant && (
                    <span className="rounded-full bg-[var(--vermillion)] px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.16em] text-[var(--paper-soft)]">
                      {copy.dominantBadge}
                    </span>
                  )}
                </div>
                <div
                  className="font-heading text-[22px] text-foreground"
                  style={{fontVariationSettings: '"opsz" 144, "wght" 700', letterSpacing: '-0.012em'}}
                >
                  {ax.axis}
                </div>
                <div className="text-[13px] leading-[1.45] text-[var(--ink-muted)]">
                  <span>{ax.lowLabel[locale]}</span>
                  <span className="mx-1 text-[var(--ink-subtle)]">↔</span>
                  <span>{ax.highLabel[locale]}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
