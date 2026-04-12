'use client';

import {useTranslations} from 'next-intl';
import {useQuizStore} from '@/lib/store';
import {Button} from '@/components/ui/button';
import {Card, CardContent} from '@/components/ui/card';
import {Badge} from '@/components/ui/badge';
import {Separator} from '@/components/ui/separator';
import {RadarChart} from '@/components/radar-chart';
import {ShareButtons} from '@/components/share-buttons';
import {TYPE_IMAGES} from '@/lib/data/personalities';
import {DIMENSION_ORDER} from '@/lib/types';
import Image from 'next/image';
import {BlogCards} from '@/components/blog-cards';

export function ResultPhase() {
  const t = useTranslations('result');
  const ts = useTranslations('share');
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
    <div className="mx-auto max-w-lg space-y-6 px-4 py-8">
      {/* Hero Card */}
      <Card className="overflow-hidden border-0 shadow-sm">
        <CardContent className="space-y-4 pt-6 text-center">
          <p className="text-sm font-medium text-muted-foreground">{kicker}</p>

          {imgSrc && (
            <div className="mx-auto w-40">
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

          <div className="space-y-1">
            <h1 className="font-heading text-4xl font-bold tracking-tight">{primary.code}</h1>
            <p className="font-heading text-xl font-semibold text-foreground/80">{pName}</p>
          </div>

          <div className="flex items-center justify-center gap-2">
            <Badge variant="secondary" className="rounded-full">
              {t('match', {percent: primary.similarity})}
            </Badge>
            <Badge variant="outline" className="rounded-full">
              {t('exactHits', {count: primary.exact})}
            </Badge>
          </div>

          <p className="italic text-muted-foreground">{pIntro}</p>

          <div className="pt-2">
            <p className="mb-2 text-sm font-medium text-muted-foreground">{ts('shareResult')}</p>
            <ShareButtons
              url={`/type/${primary.code}`}
              title={`${primary.code} — ${pName}`}
              description={pIntro}
            />
          </div>
        </CardContent>
      </Card>

      {/* Analysis */}
      <Card className="border-0 shadow-sm">
        <CardContent className="space-y-3 pt-6">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            {t('analysis')}
          </h3>
          <p className="text-base leading-relaxed text-foreground/85">{pDesc}</p>

          {secondary && (() => {
            const sName = s(tp, `${secondary.code}.name`, secondary.cn);
            return (
              <div className="mt-4 rounded-lg bg-muted/50 p-4">
                <p className="text-sm text-muted-foreground">
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
        <CardContent className="pt-6">
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            {t('dimensions')}
          </h3>
          <RadarChart levels={userLevels} />
        </CardContent>
      </Card>

      {/* Dimension Details */}
      <Card className="border-0 shadow-sm">
        <CardContent className="space-y-3 pt-6">
          {DIMENSION_ORDER.map((dim) => {
            const level = userLevels[dim];
            const explanation = s(tde, `${dim}.${level}`, '');
            const percent = level === 'L' ? 33 : level === 'M' ? 66 : 100;
            const levelLabel = t(`level${level}`);

            return (
              <div key={dim} className="space-y-1.5">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium">{td(dim)}</span>
                  <span className="text-muted-foreground">{levelLabel}</span>
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
                <p className="text-sm leading-relaxed text-muted-foreground">{explanation}</p>
              </div>
            );
          })}
        </CardContent>
      </Card>

      {/* Top 5 */}
      <Card className="border-0 shadow-sm">
        <CardContent className="space-y-3 pt-6">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            {t('top5')}
          </h3>
          {rankings.slice(0, 5).map((r, i) => {
            const rName = s(tp, `${r.code}.name`, r.cn);
            return (
              <div key={r.code} className="flex items-center justify-between py-1.5">
                <div className="flex items-center gap-3">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-muted text-xs font-medium">
                    {i + 1}
                  </span>
                  <span className="text-sm font-medium">{r.code}</span>
                  <span className="text-sm text-muted-foreground">{rName}</span>
                </div>
                <span className="text-sm text-muted-foreground">{r.similarity}%</span>
              </div>
            );
          })}
        </CardContent>
      </Card>


      {/* Blog Cards */}
      <Card className="border-0 shadow-sm">
        <CardContent className="pt-6">
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
