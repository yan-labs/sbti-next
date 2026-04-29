'use client';

import {useTranslations} from 'next-intl';
import {useQuizStore} from '@/lib/store';
import {Button} from '@/components/ui/button';
import {Card, CardContent} from '@/components/ui/card';
import {Badge} from '@/components/ui/badge';
import {RadarChart} from '@/components/radar-chart';
import {ShareButtons} from '@/components/share-buttons';
import {TYPE_IMAGES} from '@/lib/data/personalities';
import {DIMENSION_ORDER} from '@/lib/types';
import Image from 'next/image';
import {BlogCards} from '@/components/blog-cards';
import {Link} from '@/i18n/navigation';
import {SaveImageButton} from '@/components/save-result-image';

export function ResultPhase() {
  const t = useTranslations('result');
  const ts = useTranslations('share');
  const tc = useTranslations('compat');
  const td = useTranslations('dimensions');
  const tp = useTranslations('personalities');
  const tde = useTranslations('dimExplanations');
  const {result, userLevels, restart} = useQuizStore();

  if (!result || !userLevels) return null;

  const {primary, secondary, rankings, mode} = result;
  const imgSrc = TYPE_IMAGES[primary.code];

  const kicker =
    mode === 'drunk' ? t('hiddenActivated') :
    mode === 'fallback' ? t('systemFallback') :
    t('yourType');

  // Get translated personality data with fallback
  const s = (t: (k: string) => string, key: string, fallback: string) => {
    try { return t(key); } catch { return fallback; }
  };
  const pName = s(tp, `${primary.code}.name`, primary.cn);
  const pIntro = s(tp, `${primary.code}.intro`, primary.intro);
  const pDesc = s(tp, `${primary.code}.desc`, primary.desc);

  return (
    <div className="mx-auto max-w-4xl space-y-6 px-4 py-8 md:py-10">
      {/* Hero Card */}
      <Card className="overflow-hidden border-0 shadow-sm">
        <CardContent className="p-5 md:p-7">
          <div className="grid gap-5 md:grid-cols-[14rem_1fr] md:items-center md:gap-8">
            {imgSrc && (
              <div className="mx-auto w-36 md:w-56">
                <Image
                  src={imgSrc}
                  alt={pName}
                  width={320}
                  height={320}
                  className="w-full"
                  priority
                />
              </div>
            )}

            <div className="space-y-4 text-center md:text-left">
              <div className="space-y-2">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary md:text-sm">
                  {kicker}
                </p>
                <div className="space-y-1">
                  <h1 className="font-heading text-5xl font-black leading-none tracking-tight text-foreground md:text-6xl">
                    {primary.code}
                  </h1>
                  <p className="font-heading text-xl font-bold text-foreground/85 md:text-2xl">
                    {pName}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-2 md:justify-start">
                <Badge variant="secondary" className="rounded-full px-3 py-1 font-bold">
                  {t('match', {percent: primary.similarity})}
                </Badge>
                <Badge variant="outline" className="rounded-full px-3 py-1 font-semibold">
                  {t('exactHits', {count: primary.exact})}
                </Badge>
              </div>

              <p className="mx-auto max-w-xl text-base font-medium leading-relaxed text-foreground/75 md:mx-0 md:text-lg">
                {pIntro}
              </p>

              <div className="pt-1">
                <p className="mb-2 text-sm font-semibold text-muted-foreground">{ts('shareResult')}</p>
                <div className="mx-auto flex max-w-[36rem] flex-wrap items-center justify-center gap-2 md:mx-0 md:justify-start">
                  <SaveImageButton
                    code={primary.code}
                    name={pName}
                    description={pIntro}
                    matchLabel={`${primary.similarity}%`}
                    exactHitsLabel={`${primary.exact}/15`}
                    dimensionsTitle={t('dimensions')}
                    dimensions={DIMENSION_ORDER.map((dim) => {
                      const level = userLevels[dim];
                      return {
                        code: dim,
                        label: td(dim),
                        level,
                        levelLabel: t(`level${level}`),
                      };
                    })}
                  />
                  <ShareButtons
                    url={`/type/${primary.code}`}
                    title={`${primary.code} — ${pName}`}
                    description={pIntro}
                  />
                </div>
              </div>

              <div className="pt-1">
                <Link
                  href={{pathname: '/compat', query: {a: primary.code}}}
                  className="inline-flex items-center gap-1 rounded-full bg-secondary px-5 py-2.5 text-sm font-bold text-secondary-foreground shadow-sm shadow-secondary/20 transition-colors hover:bg-secondary/90"
                >
                  💞 {tc('compatCta')}
                </Link>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
        {/* Analysis */}
        <Card className="border-0 shadow-sm">
          <CardContent className="space-y-4 p-5 md:p-6">
            <h2 className="font-heading text-xl font-bold text-foreground md:text-2xl">
              {t('analysis')}
            </h2>
            <p className="text-base leading-7 text-foreground/80">{pDesc}</p>

            {secondary && (() => {
              const sName = s(tp, `${secondary.code}.name`, secondary.cn);
              return (
                <div className="mt-4 rounded-xl bg-muted/55 p-4">
                  <p className="text-sm font-medium leading-relaxed text-foreground/70">
                    {mode === 'drunk' ? '🍺' : '🎯'}{' '}
                    {secondary.code} ({sName}) — {t('similarity')}: {secondary.similarity}%
                  </p>
                </div>
              );
            })()}
          </CardContent>
        </Card>

        {/* Radar Chart */}
        <Card className="border-0 shadow-sm">
          <CardContent className="p-5 md:p-6">
            <h2 className="mb-4 font-heading text-xl font-bold text-foreground md:text-2xl">
              {t('dimensions')}
            </h2>
            <RadarChart levels={userLevels} />
          </CardContent>
        </Card>
      </div>

      {/* Dimension Details */}
      <Card className="border-0 shadow-sm">
        <CardContent className="space-y-4 p-5 md:p-6">
          <h2 className="font-heading text-xl font-bold text-foreground md:text-2xl">
            {t('dimensions')}
          </h2>
          <div className="grid gap-3 md:grid-cols-2">
          {DIMENSION_ORDER.map((dim) => {
            const level = userLevels[dim];
            const explanation = s(tde, `${dim}.${level}`, '');
            const percent = level === 'L' ? 33 : level === 'M' ? 66 : 100;
            const levelLabel = t(`level${level}`);

            return (
              <div key={dim} className="space-y-2 rounded-xl bg-muted/35 p-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-bold text-foreground">{td(dim)}</span>
                  <span className="font-mono text-xs font-bold text-primary">{levelLabel}</span>
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

      {/* Top 5 */}
      <Card className="border-0 shadow-sm">
        <CardContent className="space-y-3 p-5 md:p-6">
          <h2 className="font-heading text-xl font-bold text-foreground md:text-2xl">
            {t('top5')}
          </h2>
          {rankings.slice(0, 5).map((r, i) => {
            const rName = s(tp, `${r.code}.name`, r.cn);
            return (
              <div key={r.code} className="flex items-center justify-between gap-3 rounded-xl bg-muted/35 px-3 py-2.5">
                <div className="flex min-w-0 items-center gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                    {i + 1}
                  </span>
                  <span className="shrink-0 font-heading text-sm font-bold">{r.code}</span>
                  <span className="min-w-0 truncate text-sm text-muted-foreground">{rName}</span>
                </div>
                <span className="shrink-0 font-mono text-sm font-bold text-foreground/70">{r.similarity}%</span>
              </div>
            );
          })}
        </CardContent>
      </Card>


      {/* Blog Cards */}
      <Card className="border-0 shadow-sm">
        <CardContent className="p-5 md:p-6">
          <BlogCards compact />
        </CardContent>
      </Card>

      {/* Actions */}
      <div className="flex justify-center gap-3 pb-8">
        <Button variant="outline" onClick={restart} className="rounded-full">
          {t('restart')}
        </Button>
      </div>
    </div>
  );
}
