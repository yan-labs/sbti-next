'use client';

import {useEffect, useState} from 'react';
import Image from 'next/image';
import {useLocale, useTranslations} from 'next-intl';
import {Badge} from '@/components/ui/badge';
import {Button} from '@/components/ui/button';
import {Card, CardContent} from '@/components/ui/card';
import {RadarChart} from '@/components/radar-chart';
import {ShareButtons} from '@/components/share-buttons';
import {BlogCards} from '@/components/blog-cards';
import {Link} from '@/i18n/navigation';
import {decodeResultState} from '@/lib/result-share';
import {determineResult, parsePattern} from '@/lib/engine';
import {NORMAL_TYPES, TYPE_IMAGES} from '@/lib/data/personalities';
import {DIMENSION_ORDER, type DimCode, type Level} from '@/lib/types';

function getPatternLevels(code: string): Record<DimCode, Level> | null {
  const type = NORMAL_TYPES.find(item => item.code === code);
  if (!type) return null;
  const levels = parsePattern(type.pattern);
  return Object.fromEntries(
    DIMENSION_ORDER.map((dim, i) => [dim, levels[i]]),
  ) as Record<DimCode, Level>;
}

function ResultSharePageInner({code}: {code: string}) {
  const t = useTranslations('result');
  const ts = useTranslations('share');
  const ti = useTranslations('intro');
  const tp = useTranslations('personalities');
  const td = useTranslations('dimensions');
  const tde = useTranslations('dimExplanations');
  const locale = useLocale();
  const [resultStateParam, setResultStateParam] = useState<string | null>(null);

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      setResultStateParam(new URLSearchParams(window.location.search).get('r'));
    });
    return () => cancelAnimationFrame(frame);
  }, []);

  const s = (fn: (k: string) => string, key: string, fallback: string) => {
    try { return fn(key); } catch { return fallback; }
  };

  const state = decodeResultState(resultStateParam);
  const sharedResult = state
    ? determineResult(state.levels, state.mode === 'drunk')
    : null;
  const isTrustedShare = Boolean(sharedResult && sharedResult.primary.code === code);
  const levels = isTrustedShare ? state!.levels : getPatternLevels(code);
  const result = isTrustedShare ? sharedResult! : null;

  const name = s(tp, `${code}.name`, code);
  const intro = s(tp, `${code}.intro`, '');
  const desc = s(tp, `${code}.desc`, '');
  const imgSrc = TYPE_IMAGES[code];
  const shareUrl = levels && isTrustedShare
    ? `/result/${encodeURIComponent(code)}?r=${resultStateParam}`
    : `/result/${encodeURIComponent(code)}`;

  return (
    <div className="mx-auto max-w-4xl space-y-6 px-4 py-8 md:py-10">
      <Card className="overflow-hidden border-0 shadow-sm">
        <CardContent className="p-5 md:p-7">
          <div className="grid gap-5 md:grid-cols-[14rem_1fr] md:items-center md:gap-8">
            {imgSrc && (
              <div className="mx-auto w-36 md:w-56">
                <Image src={imgSrc} alt={name} width={320} height={320} className="w-full" priority />
              </div>
            )}

            <div className="space-y-4 text-center md:text-left">
              <div className="space-y-2">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary md:text-sm">
                  {t('yourType')}
                </p>
                <div className="space-y-1">
                  <h1 className="font-heading text-5xl font-black leading-none tracking-tight text-foreground md:text-6xl">
                    {code}
                  </h1>
                  <p className="font-heading text-xl font-bold text-foreground/85 md:text-2xl">
                    {name}
                  </p>
                </div>
              </div>

              {result && (
                <div className="flex flex-wrap items-center justify-center gap-2 md:justify-start">
                  <Badge variant="secondary" className="rounded-full px-3 py-1 font-bold">
                    {t('match', {percent: result.primary.similarity})}
                  </Badge>
                  <Badge variant="outline" className="rounded-full px-3 py-1 font-semibold">
                    {t('exactHits', {count: result.primary.exact})}
                  </Badge>
                </div>
              )}

              <p className="mx-auto max-w-xl text-base font-medium leading-relaxed text-foreground/75 md:mx-0 md:text-lg">
                {intro}
              </p>

              <div className="pt-1">
                <p className="mb-2 text-sm font-semibold text-muted-foreground">{ts('shareResult')}</p>
                <div className="mx-auto flex max-w-[36rem] flex-wrap items-center justify-center gap-2 md:mx-0 md:justify-start">
                  <ShareButtons
                    url={shareUrl}
                    title={`${code} — ${name}`}
                    description={intro}
                  />
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
        <Card className="border-0 shadow-sm">
          <CardContent className="space-y-4 p-5 md:p-6">
            <h2 className="font-heading text-xl font-bold text-foreground md:text-2xl">
              {t('analysis')}
            </h2>
            <p className="text-base leading-7 text-foreground/80">{desc}</p>
          </CardContent>
        </Card>

        {levels && (
          <Card className="border-0 shadow-sm">
            <CardContent className="p-5 md:p-6">
              <h2 className="mb-4 font-heading text-xl font-bold text-foreground md:text-2xl">
                {t('dimensions')}
              </h2>
              <RadarChart levels={levels} />
            </CardContent>
          </Card>
        )}
      </div>

      {levels && (
        <Card className="border-0 shadow-sm">
          <CardContent className="space-y-4 p-5 md:p-6">
            <h2 className="font-heading text-xl font-bold text-foreground md:text-2xl">
              {t('dimensions')}
            </h2>
            <div className="grid gap-3 md:grid-cols-2">
              {DIMENSION_ORDER.map((dim) => {
                const level = levels[dim];
                const explanation = s(tde, `${dim}.${level}`, '');
                const percent = level === 'L' ? 33 : level === 'M' ? 66 : 100;
                return (
                  <div key={dim} className="space-y-2 rounded-xl bg-muted/35 p-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-bold text-foreground">{td(dim)}</span>
                      <span className="font-mono text-xs font-bold text-primary">{t(`level${level}`)}</span>
                    </div>
                    <div className="h-1.5 overflow-hidden rounded-full bg-muted">
                      <div
                        className={`h-full rounded-full transition-all ${
                          level === 'H' ? 'bg-primary' :
                          level === 'M' ? 'bg-primary/60' :
                          'bg-primary/30'
                        }`}
                        style={{width: `${percent}%`}}
                      />
                    </div>
                    <p className="text-sm leading-relaxed text-foreground/70">{explanation}</p>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      )}

      <div className="flex flex-wrap justify-center gap-3">
        <Link href="/test">
          <Button size="lg" className="rounded-full px-8 font-bold">
            {ti('start')}
          </Button>
        </Link>
        <Link href={`/type/${code}`}>
          <Button size="lg" variant="outline" className="rounded-full px-8 font-bold">
            {locale === 'zh' ? '查看人格解析' : locale === 'ja' ? 'タイプ解説を見る' : locale === 'ko' ? '유형 해석 보기' : 'View Type Guide'}
          </Button>
        </Link>
      </div>

      <BlogCards compact />
    </div>
  );
}

export function ResultSharePage({code}: {code: string}) {
  return <ResultSharePageInner code={code} />;
}
