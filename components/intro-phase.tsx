'use client';

import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/navigation';
import {useQuizStore} from '@/lib/store';
import {HistoryPanel} from '@/components/history-panel';

/**
 * Minimal intro for /test — per the v2 direction "干脆利落，没有引导就是最好的引导".
 * Just a clean editorial hero with one big CTA. The marketing/explainer content
 * lives on the homepage; this page is purely a launch pad into the quiz.
 */
export function IntroPhase() {
  const t = useTranslations('intro');
  const startQuiz = useQuizStore((s) => s.startQuiz);

  return (
    <main className="mx-auto flex min-h-[80vh] w-full max-w-[1240px] flex-col items-center justify-center px-5 py-20 md:px-8">
      <div className="w-full max-w-2xl text-center">
        <div className="mb-6 inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
          <span className="h-px w-7 bg-muted-foreground" />
          SBTI · 主测试 · 31 道题
        </div>

        <h1 className="font-heading text-[clamp(48px,7vw,96px)] font-bold leading-[0.95] tracking-tight text-foreground">
          {t('headline')}
          <br />
          <em className="text-accent-italic">{t('headlineBr')}</em>
        </h1>

        <p className="mx-auto mt-7 max-w-md font-heading text-base italic text-muted-foreground md:text-lg" style={{fontVariationSettings: '"opsz" 144, "SOFT" 95, "wght" 500'}}>
          {t('subhead')}
        </p>

        <div className="mt-10 flex flex-col items-center gap-4">
          <button
            type="button"
            onClick={() => startQuiz()}
            className="group inline-flex items-center gap-3 rounded-full bg-primary px-7 py-4 font-sans text-base font-semibold text-primary-foreground shadow-[0_16px_40px_-10px_rgba(0,0,0,0.4)] transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            {t('start')}
            <span className="inline-flex size-7 items-center justify-center rounded-full bg-background text-primary transition-transform group-hover:translate-x-1">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className="size-4" aria-hidden="true"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
            </span>
          </button>
          <Link href="/types" className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-foreground">
            {t('browseTypes')}
          </Link>
        </div>
      </div>

      {/* History (resumes a previous attempt if any) */}
      <div className="mt-16 w-full max-w-2xl">
        <HistoryPanel />
      </div>
    </main>
  );
}
