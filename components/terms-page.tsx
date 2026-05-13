'use client';

import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/navigation';
import {ChevronRight} from 'lucide-react';

const SECTIONS = ['section1', 'section2', 'section3', 'section4', 'section5'] as const;

export function TermsPage() {
  const t = useTranslations('terms');
  const tb = useTranslations('breadcrumb');

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
        <header className="grid grid-cols-1 gap-8 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] md:gap-16 mb-16 md:mb-20">
          <div className="flex flex-col gap-3">
            <span className="editorial-kicker text-primary">Legal</span>
            <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
              {t('lastUpdated')}
            </span>
          </div>
          <h1 className="editorial-h1 max-w-[18ch]">
            {t('pageTitle')}
          </h1>
        </header>

        {/* Body */}
        <div className="mx-auto max-w-[68ch]">
          <div className="prose-custom">
            {SECTIONS.map((id, i) => (
              <section key={id} className={i === 0 ? '' : 'mt-12'}>
                <span className="block font-mono text-[11px] uppercase tracking-[0.2em] text-primary mb-3">
                  {String(i + 1).padStart(2, '0')} · {t(`${id}Title`)}
                </span>
                <h2 className="!mt-0">{t(`${id}Title`)}</h2>
                <p>{t(`${id}Text`)}</p>
              </section>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
