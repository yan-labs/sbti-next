'use client';

import {useTranslations, useLocale} from 'next-intl';
import {Button} from '@/components/ui/button';
import {NORMAL_TYPES, TYPE_IMAGES} from '@/lib/data/personalities';
import {Link} from '@/i18n/navigation';
import Image from 'next/image';
import {getLocaleUrl, getPageSeo} from '@/lib/metadata';
import {BlogCards} from '@/components/blog-cards';
import {HistoryPanel} from '@/components/history-panel';

const DIM_KEYS = ['S', 'E', 'A', 'Ac', 'So'] as const;
const DIM_STYLES = [
  {bg: 'bg-primary', fg: 'text-primary-foreground', soft: 'bg-primary/10'},
  {bg: 'bg-secondary', fg: 'text-secondary-foreground', soft: 'bg-secondary/10'},
  {bg: 'bg-accent', fg: 'text-accent-foreground', soft: 'bg-accent/10'},
  {bg: 'bg-secondary', fg: 'text-secondary-foreground', soft: 'bg-secondary/10'},
  {bg: 'bg-primary', fg: 'text-primary-foreground', soft: 'bg-primary/10'},
];

export function IntroPhase() {
  const t = useTranslations('intro');
  const tp = useTranslations('personalities');
  const th = useTranslations('homepage');
  const ta = useTranslations('about');
  const tf = useTranslations('faq');
  const locale = useLocale();
  const seo = getPageSeo(locale, 'home');
  const pageUrl = getLocaleUrl(locale);

  const s = (fn: (k: string) => string, key: string, fallback: string) => {
    try { return fn(key); } catch { return fallback; }
  };

  return (
    <div className="flex min-h-screen flex-col items-center px-4">
      {/* Hero */}
      <div className="flex min-h-[60vh] flex-col items-center justify-center text-center">
        <div className="w-full max-w-md space-y-8">
          <h1 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl">
            {t('headline')}
            <br />
            <span className="text-primary">{t('headlineBr')}</span>
          </h1>

          <Link href="/test">
            <Button
              size="lg"
              className="rounded-full bg-primary px-10 text-base text-primary-foreground shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30"
            >
              {t('start')}
            </Button>
          </Link>
        </div>
      </div>

      {/* History */}
      <HistoryPanel />

      {/* Personality Types Grid */}
      <div className="w-full max-w-5xl pb-16">
        <h2 className="font-heading mb-10 text-center text-2xl font-bold sm:text-3xl">
          {t('typesTitle')}
        </h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {NORMAL_TYPES.map(({code}) => {
            const name = s(tp, `${code}.name`, code);
            const intro = s(tp, `${code}.intro`, '');
            const img = TYPE_IMAGES[code];
            return (
              <Link
                key={code}
                href={`/type/${code}`}
                className="group flex flex-col items-center gap-3 rounded-2xl border border-transparent bg-card p-4 shadow-sm transition-all hover:border-primary/20 hover:bg-muted/50 hover:-translate-y-1 hover:shadow-md"
              >
                {img && (
                  <div className="w-24 overflow-hidden rounded-xl sm:w-28">
                    <Image
                      src={img}
                      alt={name}
                      width={224}
                      height={224}
                      className="w-full transition-transform group-hover:scale-105"
                    />
                  </div>
                )}
                <div className="text-center">
                  <p className="font-heading text-base font-bold">{code}</p>
                  <p className="text-sm text-muted-foreground">{name}</p>
                  <p className="mt-1 line-clamp-2 text-xs leading-snug text-muted-foreground/70">{intro}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* What is SBTI */}
      <section className="w-full max-w-2xl py-12">
        <div className="rounded-2xl bg-primary/5 p-6 sm:p-8">
          <h2 className="font-heading text-2xl font-bold tracking-tight">
            {th('whatIsSbtiTitle')}
          </h2>
          <div className="mt-4 space-y-3 text-base leading-relaxed text-foreground/80">
            <p>{th('whatIsSbtiP1')}</p>
            <p>{th('whatIsSbtiP2')}</p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="w-full max-w-2xl py-8">
        <h2 className="font-heading mb-8 text-center text-2xl font-bold tracking-tight">
          {th('howItWorksTitle')}
        </h2>
        <div className="space-y-4">
          {(['step1', 'step2', 'step3'] as const).map((step, i) => {
            const accent = ['text-primary', 'text-secondary', 'text-accent'][i];
            return (
              <div key={step} className="flex items-start gap-4">
                <span className={`font-heading shrink-0 text-3xl font-bold leading-tight ${accent}`}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="font-heading text-lg font-semibold">{th(`${step}Title`)}</h3>
                  <p className="mt-1 text-base leading-relaxed text-muted-foreground">{th(`${step}Desc`)}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 5 Dimension Models */}
      <section className="w-full max-w-2xl py-8">
        <h2 className="font-heading mb-8 text-center text-2xl font-bold tracking-tight">
          {th('dimensionsTitle')}
        </h2>
        <div className="space-y-2">
          {DIM_KEYS.map((key, i) => (
            <div
              key={key}
              className={`flex items-center gap-4 rounded-xl p-4 ${DIM_STYLES[i].soft}`}
            >
              <span className={`font-mono text-xl font-bold ${DIM_STYLES[i].bg} ${DIM_STYLES[i].fg} flex h-10 w-10 shrink-0 items-center justify-center rounded-lg`}>
                {key}
              </span>
              <div>
                <h3 className="font-heading text-base font-semibold">{ta(`dim${key}`)}</h3>
                <p className="mt-0.5 text-sm leading-relaxed text-muted-foreground">{ta(`dim${key}Desc`)}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Inline FAQ */}
      <section className="w-full max-w-2xl py-8">
        <h2 className="font-heading mb-6 text-center text-2xl font-bold">{th('faqTitle')}</h2>
        <div className="space-y-4">
          {([1, 2, 3, 4, 5] as const).map(i => (
            <div key={i} className="rounded-lg bg-muted/40 p-4">
              <h3 className="text-base font-semibold">{tf(`q${i}`)}</h3>
              <p className="mt-1.5 text-base leading-relaxed text-muted-foreground">{tf(`a${i}`)}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Blog Cards */}
      <BlogCards />

      {/* Second CTA */}
      <div className="py-8">
        <Link href="/test">
          <Button
            size="lg"
            className="rounded-full bg-primary px-10 text-base text-primary-foreground shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30"
          >
            {t('start')}
          </Button>
        </Link>
      </div>

      {/* Schema.org */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Quiz',
            name: seo.title,
            description: seo.description,
            url: pageUrl,
            numberOfQuestions: 30,
            inLanguage: locale,
            isAccessibleForFree: true,
            about: {
              '@type': 'Thing',
              name: locale === 'zh' ? '人格测试' : locale === 'ja' ? '性格テスト' : locale === 'ko' ? '성격 테스트' : 'Personality Test',
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: 'SBTI',
            description: seo.description,
            url: pageUrl,
            inLanguage: ['zh', 'en', 'ja', 'ko'],
          }),
        }}
      />
    </div>
  );
}
