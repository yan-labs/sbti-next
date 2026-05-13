'use client';

import {useTranslations, useLocale} from 'next-intl';
import {Link} from '@/i18n/navigation';
import {ChevronRight} from 'lucide-react';
import {getLocaleUrl, getPageSeo} from '@/lib/metadata';

const DIMENSION_MODELS = ['S', 'E', 'A', 'Ac', 'So'] as const;

export function AboutPage() {
  const t = useTranslations('about');
  const tb = useTranslations('breadcrumb');
  const ti = useTranslations('intro');
  const locale = useLocale();
  const seo = getPageSeo(locale, 'about');
  const pageUrl = getLocaleUrl(locale, '/about');

  return (
    <div className="bg-background">
      <div className="mx-auto max-w-[1240px] px-5 md:px-8 py-20 md:py-24">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-12 flex items-center gap-2 text-xs font-mono uppercase tracking-[0.18em] text-muted-foreground">
          <Link href="/" className="hover:text-foreground transition-colors">{tb('home')}</Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-foreground">{t('pageTitle')}</span>
        </nav>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-[minmax(0,1.3fr)_minmax(0,2fr)] md:gap-20 mb-20">
          <header>
            <span className="editorial-kicker-line mb-6">{t('pageTitle')}</span>
            <h1 className="editorial-h1">
              About <em>SBTI</em>
            </h1>
          </header>

          {/* Intro / Pull-quote area */}
          <div className="md:pt-2">
            <p className="editorial-dek mb-6 max-w-[40ch]">
              {t('whatIsSbtiP1')}
            </p>
            <p className="editorial-dek max-w-[40ch]">
              {t('whatIsSbtiP2')}
            </p>
          </div>
        </div>

        {/* What is SBTI section */}
        <section className="border-t border-border pt-20 mb-20">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] md:gap-20">
            <div>
              <span className="editorial-kicker block mb-3">01 / Premise</span>
              <h2 className="editorial-h2">
                What is <em>SBTI</em>?
              </h2>
            </div>
            <div className="prose-custom">
              <p>{t('whatIsSbtiP1')}</p>
              <p>{t('whatIsSbtiP2')}</p>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="border-t border-border pt-20 mb-20">
          <div className="mb-12">
            <span className="editorial-kicker block mb-3">02 / Method</span>
            <h2 className="editorial-h2">{t('howItWorks')}</h2>
          </div>
          <div className="grid gap-px bg-border border border-border md:grid-cols-3">
            {(['howStep1', 'howStep2', 'howStep3'] as const).map((step, i) => (
              <div key={step} className="bg-card p-7">
                <span className="editorial-kicker block mb-4">
                  Step {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="font-heading text-xl font-semibold tracking-tight mb-3">
                  {t(`${step}Title`)}
                </h3>
                <p className="text-[15px] leading-relaxed text-muted-foreground">
                  {t(`${step}Desc`)}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 5 Dimensions */}
        <section className="border-t border-border pt-20 mb-20">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] md:gap-20 mb-12">
            <div>
              <span className="editorial-kicker block mb-3">03 / Dimensions</span>
              <h2 className="editorial-h2">
                <em>Five</em> axes,<br />fifteen poles.
              </h2>
            </div>
            <div>
              <p className="editorial-dek max-w-[44ch]">{t('dimensionsIntro')}</p>
            </div>
          </div>

          <div className="grid gap-px bg-border border border-border md:grid-cols-2 lg:grid-cols-3">
            {DIMENSION_MODELS.map((key) => (
              <div key={key} className="bg-card p-6 flex flex-col gap-3">
                <span className="font-mono text-xs tracking-[0.2em] text-primary">{key}</span>
                <h3 className="font-heading text-lg font-semibold tracking-tight">
                  {t(`dim${key}`)}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {t(`dim${key}Desc`)}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="border-t border-border pt-20 flex flex-col items-start gap-6">
          <span className="editorial-kicker">Ready when you are</span>
          <Link href="/test" className="btn-editorial">
            {ti('start')}
          </Link>
        </div>
      </div>

      {/* Schema.org */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'AboutPage',
            name: seo.title,
            url: pageUrl,
            description: seo.description,
            about: {
              '@type': 'Thing',
              name: 'SBTI',
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              {'@type': 'ListItem', position: 1, name: tb('home'), item: getLocaleUrl(locale)},
              {'@type': 'ListItem', position: 2, name: t('pageTitle')},
            ],
          }),
        }}
      />
    </div>
  );
}
