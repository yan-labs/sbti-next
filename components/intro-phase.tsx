'use client';

import {useTranslations} from 'next-intl';
import {useQuizStore} from '@/lib/store';
import {Button} from '@/components/ui/button';
import {NORMAL_TYPES, TYPE_IMAGES} from '@/lib/data/personalities';
import {Link} from '@/i18n/navigation';
import Image from 'next/image';

export function IntroPhase() {
  const t = useTranslations('intro');
  const tp = useTranslations('personalities');
  const startQuiz = useQuizStore((s) => s.startQuiz);

  const s = (fn: (k: string) => string, key: string, fallback: string) => {
    try { return fn(key); } catch { return fallback; }
  };

  return (
    <div className="flex min-h-screen flex-col items-center px-4">
      {/* Hero */}
      <div className="flex min-h-[70vh] flex-col items-center justify-center text-center">
        <div className="w-full max-w-md space-y-8">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {t('headline')}
            <br />
            {t('headlineBr')}
          </h1>

          <Button
            size="lg"
            onClick={startQuiz}
            className="rounded-full px-10 text-base"
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
                className="group flex flex-col items-center gap-2 rounded-xl p-3 transition-colors hover:bg-muted/50"
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

      {/* Schema.org Quiz structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Quiz',
            name: 'SBTI Personality Test',
            description: 'MBTI is outdated. SBTI is here.',
            url: 'https://sbti.support',
            about: {
              '@type': 'Thing',
              name: 'Personality Assessment',
            },
          }),
        }}
      />
    </div>
  );
}
