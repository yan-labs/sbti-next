'use client';

import {useTranslations, useLocale} from 'next-intl';
import {useQuizStore} from '@/lib/store';
import {Button} from '@/components/ui/button';
import {Card, CardContent} from '@/components/ui/card';
import {NORMAL_TYPES, TYPE_IMAGES} from '@/lib/data/personalities';
import {Link} from '@/i18n/navigation';
import Image from 'next/image';

const DIM_KEYS = ['S', 'E', 'A', 'Ac', 'So'] as const;
const DIM_COLORS = ['bg-primary/10 text-primary', 'bg-secondary/10 text-secondary', 'bg-accent/10 text-accent-foreground', 'bg-info/10 text-info', 'bg-primary/10 text-primary'];

export function IntroPhase() {
  const t = useTranslations('intro');
  const tp = useTranslations('personalities');
  const th = useTranslations('homepage');
  const ta = useTranslations('about');
  const tf = useTranslations('faq');
  const startQuiz = useQuizStore((s) => s.startQuiz);
  const locale = useLocale();

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

          <Button
            size="lg"
            onClick={startQuiz}
            className="rounded-full bg-primary px-10 text-base text-primary-foreground shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30"
          >
            {t('start')}
          </Button>
        </div>
      </div>

      {/* Personality Types Grid */}
      <div className="w-full max-w-4xl pb-16">
        <h2 className="mb-8 text-center text-lg font-semibold text-muted-foreground">
          {t('typesTitle')}
        </h2>
        <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6">
          {NORMAL_TYPES.map(({code}) => {
            const name = s(tp, `${code}.name`, code);
            const img = TYPE_IMAGES[code];
            return (
              <Link
                key={code}
                href={`/type/${code}`}
                className="group flex flex-col items-center gap-2 rounded-xl border border-transparent p-3 transition-all hover:border-primary/20 hover:bg-muted/50 hover:-translate-y-0.5 hover:shadow-sm"
              >
                {img && (
                  <div className="w-16 overflow-hidden rounded-lg sm:w-20">
                    <Image
                      src={img}
                      alt={name}
                      width={160}
                      height={160}
                      className="w-full transition-transform group-hover:scale-105"
                    />
                  </div>
                )}
                <div className="text-center">
                  <p className="text-xs font-bold text-foreground/80">{code}</p>
                  <p className="text-[10px] text-muted-foreground">{name}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* What is SBTI */}
      <section className="w-full max-w-2xl py-12">
        <h2 className="font-heading text-center text-2xl font-bold">{th('whatIsSbtiTitle')}</h2>
        <p className="mt-4 text-center text-base leading-relaxed text-foreground/85">{th('whatIsSbtiP1')}</p>
        <p className="mt-3 text-center text-base leading-relaxed text-foreground/85">{th('whatIsSbtiP2')}</p>
      </section>

      {/* How It Works */}
      <section className="w-full max-w-3xl py-8">
        <h2 className="font-heading mb-6 text-center text-2xl font-bold">{th('howItWorksTitle')}</h2>
        <div className="grid gap-4 sm:grid-cols-3">
          {(['step1', 'step2', 'step3'] as const).map((step, i) => (
            <Card key={step} className="border-0 shadow-sm">
              <CardContent className="pt-6 text-center">
                <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                  {i + 1}
                </div>
                <h3 className="font-heading text-lg font-semibold">{th(`${step}Title`)}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{th(`${step}Desc`)}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* 5 Dimension Models */}
      <section className="w-full max-w-2xl py-8">
        <h2 className="font-heading mb-6 text-center text-2xl font-bold">{th('dimensionsTitle')}</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {DIM_KEYS.map((key, i) => (
            <Card key={key} className="border-0 shadow-sm">
              <CardContent className="flex items-start gap-3 pt-5">
                <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg font-mono text-sm font-bold ${DIM_COLORS[i]}`}>
                  {key}
                </div>
                <div>
                  <h3 className="font-heading text-base font-semibold">{ta(`dim${key}`)}</h3>
                  <p className="mt-0.5 text-xs text-muted-foreground">{ta(`dim${key}Desc`)}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Inline FAQ */}
      <section className="w-full max-w-2xl py-8">
        <h2 className="font-heading mb-6 text-center text-2xl font-bold">{th('faqTitle')}</h2>
        <div className="space-y-4">
          {([1, 2, 3, 4, 5] as const).map(i => (
            <div key={i} className="rounded-lg bg-muted/40 p-4">
              <h3 className="text-sm font-semibold">{tf(`q${i}`)}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{tf(`a${i}`)}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Second CTA */}
      <div className="py-8">
        <Button
          size="lg"
          onClick={startQuiz}
          className="rounded-full bg-primary px-10 text-base text-primary-foreground shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30"
        >
          {t('start')}
        </Button>
      </div>

      {/* Schema.org */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Quiz',
            name: 'SBTI Personality Test',
            description: 'MBTI is outdated. SBTI is here.',
            url: 'https://sbti.support',
            numberOfQuestions: 30,
            inLanguage: locale,
            about: {
              '@type': 'Thing',
              name: 'Personality Assessment',
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
            url: 'https://sbti.support',
            inLanguage: ['zh', 'en', 'ja', 'ko'],
          }),
        }}
      />
    </div>
  );
}
