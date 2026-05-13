'use client';

import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/navigation';
import {ChevronRight} from 'lucide-react';

const FAQ_IDS = ['q1', 'q2', 'q3', 'q4', 'q5', 'q6', 'q7', 'q8', 'q9', 'q10'] as const;

export function FAQPage() {
  const t = useTranslations('faq');
  const tb = useTranslations('breadcrumb');
  const ti = useTranslations('intro');

  return (
    <div className="bg-background">
      <div className="mx-auto max-w-[1240px] px-5 md:px-8 py-20 md:py-24">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-12 flex items-center gap-2 text-xs font-mono uppercase tracking-[0.18em] text-muted-foreground">
          <Link href="/" className="hover:text-foreground transition-colors">{tb('home')}</Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-foreground">{t('pageTitle')}</span>
        </nav>

        {/* Section head */}
        <header className="grid grid-cols-1 gap-8 md:grid-cols-[auto_1fr_auto] md:items-baseline mb-16 md:mb-20">
          <span className="editorial-kicker">FAQ</span>
          <h1 className="editorial-h1 md:col-start-1 md:col-end-3 md:mt-2">
            {t('pageTitle')}
          </h1>
          <span className="hidden md:block font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground md:row-span-2 md:self-end text-right leading-[1.7]">
            {FAQ_IDS.length.toString().padStart(2, '0')} questions<br />
            One honest test
          </span>
        </header>

        {/* Editorial FAQ accordion */}
        <div className="mx-auto max-w-[860px]">
          <div className="editorial-faq">
            {FAQ_IDS.map((id) => (
              <details key={id}>
                <summary>{t(id)}</summary>
                <p>{t(`a${id.slice(1)}`)}</p>
              </details>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 md:mt-24 border-t border-border pt-16 grid gap-8 md:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] md:items-end">
          <div>
            <span className="editorial-kicker block mb-3">Still curious?</span>
            <h2 className="editorial-h2">
              Stop reading. <em>Start testing.</em>
            </h2>
          </div>
          <Link href="/test" className="btn-editorial justify-self-start md:justify-self-end">
            {ti('start')}
          </Link>
        </div>
      </div>
    </div>
  );
}
