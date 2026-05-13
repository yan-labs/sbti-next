'use client';

import {useTranslations} from 'next-intl';
import {useQuizStore} from '@/lib/store';

export function QuizPhase() {
  const t = useTranslations('quiz');
  const tq = useTranslations('questions');
  const {queue, current, answer} = useQuizStore();
  const question = queue[current];
  if (!question) return null;

  const progress = ((current + 1) / queue.length) * 100;
  const qId = question.id;

  let questionText: string;
  let options: string[];
  try {
    questionText = tq(`${qId}.text`);
    options = question.options.map((_, i) => tq(`${qId}.options.${i}`));
  } catch {
    questionText = question.text;
    options = question.options.map(o => o.label);
  }

  const total = queue.length;
  const totalStr = String(total).padStart(2, '0');
  const currentStr = String(current + 1).padStart(2, '0');

  return (
    <main className="mx-auto flex min-h-[85vh] w-full max-w-[1240px] flex-col items-center justify-center px-5 py-12 md:px-8">
      <div className="w-full max-w-2xl">
        {/* Progress strip: mono numeric counter + thin hair-rule bar */}
        <div className="mb-10 flex items-end justify-between">
          <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
            {t('question', {num: current + 1})}
          </div>
          <div className="flex items-baseline gap-1.5 font-mono text-xs uppercase tracking-[0.18em] text-foreground/70">
            <span className="font-heading text-2xl font-bold leading-none text-foreground" style={{fontVariationSettings: '"opsz" 144, "wght" 700'}}>
              {currentStr}
            </span>
            <span className="text-muted-foreground">/ {totalStr}</span>
          </div>
        </div>

        <div className="mb-12 h-px bg-border">
          <div
            className="h-px bg-foreground transition-all duration-300 ease-out"
            style={{width: `${progress}%`}}
          />
        </div>

        {/* Question — large Fraunces serif, generous line-height */}
        <h2
          className="font-heading text-[clamp(28px,3.4vw,44px)] font-bold leading-[1.25] tracking-tight text-foreground"
          style={{fontVariationSettings: '"opsz" 144, "SOFT" 30, "wght" 700'}}
        >
          {questionText}
        </h2>

        {/* Options — minimalist editorial buttons, large hit-zones */}
        <div className="mt-10 space-y-3">
          {question.options.map((opt, i) => (
            <button
              key={i}
              onClick={() => answer(question.id, opt.value)}
              className="group flex w-full items-start gap-5 border border-border bg-card px-6 py-5 text-left transition-all hover:border-foreground hover:bg-muted active:translate-y-[1px]"
            >
              <span className="font-mono text-[11px] uppercase tracking-[0.18em] leading-[1.5] text-muted-foreground transition-colors group-hover:text-primary">
                {String.fromCharCode(65 + i)}
              </span>
              <span className="flex-1 font-sans text-base leading-[1.55] text-foreground md:text-[17px]">
                {options[i]}
              </span>
              <span className="-mr-1 mt-0.5 inline-flex size-6 shrink-0 items-center justify-center text-muted-foreground opacity-0 transition-all group-hover:translate-x-1 group-hover:text-primary group-hover:opacity-100">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="size-4" aria-hidden="true"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
              </span>
            </button>
          ))}
        </div>

        {/* Footer hint */}
        <div className="mt-10 text-center font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground/70">
          {t('progress', {current: current + 1, total: queue.length})}
        </div>
      </div>
    </main>
  );
}
