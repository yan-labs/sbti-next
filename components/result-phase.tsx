'use client';

import {useTranslations} from 'next-intl';
import {useQuizStore} from '@/lib/store';
import {Button} from '@/components/ui/button';
import {Card, CardContent} from '@/components/ui/card';
import {Badge} from '@/components/ui/badge';
import {RadarChart} from '@/components/radar-chart';
import {RadarChartSixAxis} from '@/components/radar-chart-six-axis';
import {ShareButtons} from '@/components/share-buttons';
import {TYPE_IMAGES} from '@/lib/data/personalities';
import {DIMENSION_ORDER} from '@/lib/types';
import Image from 'next/image';
import {BlogCards} from '@/components/blog-cards';
import {Link} from '@/i18n/navigation';
import {SaveImageButton} from '@/components/save-result-image';
import {encodeResultState} from '@/lib/result-share';
import type {ArchetypeV2, GameQuizV2, Axis, SiteLocale} from '@/lib/data/games/types';
import {AXES, AXIS_ORDER, polarityFromScore} from '@/lib/data/games/dimensions';
import {derivePolarityCode} from '@/lib/data/games/scoring';
import {getArchetype} from '@/lib/data/games/index';
import {getArchetypeArt} from '@/lib/data/games/archetype-art';
import {RotateCcw, Share2} from 'lucide-react';

// ── V2 game quiz result props ─────────────────────────────────────────────────

interface GameV2ResultProps {
  game: GameQuizV2;
  archetype: ArchetypeV2;
  /** Normalized 0–100 scores per axis. */
  scores: Record<Axis, number>;
  locale: SiteLocale;
  onRetake: () => void;
}

const GAME_RESULT_UI: Record<SiteLocale, {
  kicker: string;
  polarityCode: string;
  symptoms: string;
  rival: string;
  bestSquad: string;
  retake: string;
  share: string;
  axisProfile: string;
}> = {
  zh: {
    kicker: '你的玩家身份',
    polarityCode: '玩家身份码',
    symptoms: '明显症状',
    rival: '克星原型',
    bestSquad: '最佳队友',
    retake: '重新测试',
    share: '分享结果',
    axisProfile: '六维画像',
  },
  en: {
    kicker: 'Your Player Identity',
    polarityCode: 'Player Code',
    symptoms: 'Symptoms',
    rival: 'Natural Enemy',
    bestSquad: 'Best Squad Mate',
    retake: 'Retake',
    share: 'Share Result',
    axisProfile: '6-Axis Profile',
  },
  ja: {
    kicker: 'あなたのプレイヤータイプ',
    polarityCode: 'プレイヤーコード',
    symptoms: 'よく出る症状',
    rival: '天敵タイプ',
    bestSquad: '最高の相棒',
    retake: 'もう一度',
    share: '結果を共有',
    axisProfile: '6軸プロフィール',
  },
  ko: {
    kicker: '당신의 플레이어 유형',
    polarityCode: '플레이어 코드',
    symptoms: '주요 증상',
    rival: '천적 유형',
    bestSquad: '최고의 팀원',
    retake: '다시 테스트',
    share: '결과 공유',
    axisProfile: '6축 프로필',
  },
};

export function GameV2Result({game, archetype, scores, locale, onRetake}: GameV2ResultProps) {
  const copy = GAME_RESULT_UI[locale];
  const polarityCode = derivePolarityCode(scores);
  const gameTitle = game.title[locale];
  const archetypeName = archetype.name[locale];
  const oneLiner = archetype.oneLiner[locale];
  const description = archetype.description?.[locale];
  const shareUrl = `/games/${game.slug}/result/${archetype.slug}`;

  const rivalArchetype = archetype.rivalSlug ? getArchetype(game, archetype.rivalSlug) : undefined;
  const bestSquadArchetype = archetype.bestSquadSlug
    ? getArchetype(game, archetype.bestSquadSlug)
    : undefined;

  // Look up illustration: per-archetype WebP if available, else bucket fallback.
  // (Same lookup the catalog + per-game pages use, so result matches the rest.)
  const archetypeArt = archetype.image?.src ?? getArchetypeArt(game.slug, archetype.slug);
  const rivalArt = rivalArchetype
    ? (rivalArchetype.image?.src ?? getArchetypeArt(game.slug, rivalArchetype.slug))
    : undefined;
  const bestSquadArt = bestSquadArchetype
    ? (bestSquadArchetype.image?.src ?? getArchetypeArt(game.slug, bestSquadArchetype.slug))
    : undefined;

  return (
    <div className="space-y-5">
      {/* Hero Card */}
      <Card className="overflow-hidden border-0 shadow-sm">
        <CardContent className="p-5 sm:p-7">
          <div className="grid gap-5 sm:grid-cols-[auto_1fr] sm:items-start sm:gap-7">
            {archetypeArt && (
              <div className="mx-auto w-40 shrink-0 sm:mx-0 sm:w-48">
                <Image
                  src={archetypeArt}
                  alt={archetype.image?.alt?.[locale] ?? archetypeName}
                  width={320}
                  height={320}
                  className="w-full rounded-2xl border border-border/60 object-contain shadow-sm"
                  priority
                  unoptimized
                />
              </div>
            )}
            <div className="space-y-3 text-center sm:text-left">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">
                {copy.kicker}
              </p>
              <div className="space-y-1">
                <h2 className="font-heading text-4xl font-black leading-tight tracking-tight">
                  {archetypeName}
                </h2>
                <p className="text-base font-medium text-foreground/75 sm:text-lg">
                  {oneLiner}
                </p>
              </div>

              {/* Polarity code badge */}
              <div className="flex flex-wrap items-center justify-center gap-2 sm:justify-start">
                <Badge variant="secondary" className="rounded-full px-3 py-1 font-mono text-base font-bold tracking-widest">
                  {polarityCode}
                </Badge>
                <span className="text-xs text-muted-foreground">{copy.polarityCode}</span>
              </div>

              {/* Share + retake */}
              <div className="flex flex-wrap items-center justify-center gap-2 pt-1 sm:justify-start">
                <Button variant="outline" size="sm" className="rounded-full gap-1.5" onClick={onRetake}>
                  <RotateCcw className="size-3.5" aria-hidden="true" />
                  {copy.retake}
                </Button>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-muted-foreground">
                  <Share2 className="size-3.5" aria-hidden="true" />
                  {copy.share}
                </span>
                <ShareButtons
                  url={shareUrl}
                  title={`${gameTitle}: ${archetypeName}`}
                  description={oneLiner}
                />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-5 lg:grid-cols-[1fr_auto]">
        {/* Description */}
        {description && (
          <Card className="border-0 shadow-sm">
            <CardContent className="p-5 sm:p-6">
              <p className="text-base leading-7 text-foreground/80">{description}</p>
            </CardContent>
          </Card>
        )}

        {/* Radar chart */}
        <Card className="border-0 shadow-sm lg:w-72">
          <CardContent className="p-4 sm:p-5">
            <p className="mb-3 text-center text-sm font-bold text-foreground/70">{copy.axisProfile}</p>
            <RadarChartSixAxis scores={scores} locale={locale} size={240} gameAccent="var(--vermillion)" />
          </CardContent>
        </Card>
      </div>

      {/* 6-axis feedback */}
      <Card className="border-0 shadow-sm">
        <CardContent className="space-y-3 p-5 sm:p-6">
          <div className="grid gap-2 sm:grid-cols-2">
            {AXIS_ORDER.map((axis, i) => {
              const def = AXES[i]!;
              const score = scores[axis];
              const polarity = polarityFromScore(score);
              const feedback = polarity === 'high'
                ? def.highFeedback[locale]
                : def.lowFeedback[locale];
              const label = polarity === 'high'
                ? def.highLabel[locale]
                : def.lowLabel[locale];
              const letter = polarity === 'high' ? def.highLetter : def.lowLetter;
              const barWidth = Math.round(score);

              return (
                <div key={axis} className="space-y-1.5 rounded-xl bg-muted/35 p-3">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-sm font-bold text-foreground">{label}</span>
                    <span className="font-mono text-xs font-bold text-primary">{letter}</span>
                  </div>
                  <div className="h-1 overflow-hidden rounded-full bg-muted">
                    <div
                      className="h-full rounded-full bg-primary/70 transition-all"
                      style={{width: `${barWidth}%`}}
                    />
                  </div>
                  <p className="text-sm leading-relaxed text-foreground/70">{feedback}</p>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Symptoms */}
      {archetype.symptoms && archetype.symptoms.length > 0 && (
        <Card className="border-0 shadow-sm">
          <CardContent className="space-y-3 p-5 sm:p-6">
            <h3 className="font-heading text-lg font-bold text-foreground">{copy.symptoms}</h3>
            <ul className="space-y-2">
              {archetype.symptoms.map((symptom, idx) => (
                <li key={idx} className="flex gap-2 rounded-xl bg-muted/35 px-3 py-2 text-sm text-foreground/80">
                  <span className="shrink-0 text-primary">•</span>
                  {symptom[locale]}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}

      {/* Rival + Best Squad — editorial relation cards (mirror static archetype page) */}
      {(rivalArchetype || bestSquadArchetype) && (
        <div className="grid gap-5 sm:grid-cols-2">
          {rivalArchetype && (
            <Link
              href={`/games/${game.slug}/result/${rivalArchetype.slug}`}
              className="group block"
            >
              <article className="flex h-full flex-col border border-border bg-card p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-foreground hover:shadow-[0_14px_28px_-18px_rgba(0,0,0,0.45)] sm:p-6">
                <div className="mb-5 flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.18em]">
                  <span className="text-primary">✕ {copy.rival}</span>
                  <span className="text-muted-foreground">VS · 克 星</span>
                </div>
                <div className="flex items-start gap-4">
                  {rivalArt && (
                    <div className="shrink-0 border border-border bg-muted">
                      <Image
                        src={rivalArt}
                        alt={rivalArchetype.image?.alt?.[locale] ?? rivalArchetype.name[locale]}
                        width={200}
                        height={200}
                        className="size-20 object-contain sm:size-24"
                        unoptimized
                      />
                    </div>
                  )}
                  <div className="min-w-0 flex-1">
                    <h3
                      className="font-heading text-[26px] font-bold leading-[1.05] tracking-tight text-foreground transition-colors group-hover:text-primary sm:text-[30px]"
                      style={{fontVariationSettings: '"opsz" 144, "wght" 700'}}
                    >
                      {rivalArchetype.name[locale]}
                      <span className="text-primary">.</span>
                    </h3>
                    <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                      {rivalArchetype.slug.replace(/-/g, ' ')}
                    </p>
                  </div>
                </div>
                <p
                  className="mt-5 border-t border-border pt-5 font-heading text-[15px] italic leading-[1.45] text-foreground/85 sm:text-base"
                  style={{fontVariationSettings: '"opsz" 144, "SOFT" 95, "wght" 500'}}
                >
                  &ldquo;{rivalArchetype.oneLiner[locale]}&rdquo;
                </p>
              </article>
            </Link>
          )}
          {bestSquadArchetype && (
            <Link
              href={`/games/${game.slug}/result/${bestSquadArchetype.slug}`}
              className="group block"
            >
              <article className="flex h-full flex-col border border-border bg-card p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-foreground hover:shadow-[0_14px_28px_-18px_rgba(0,0,0,0.45)] sm:p-6">
                <div className="mb-5 flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.18em]">
                  <span className="text-primary">★ {copy.bestSquad}</span>
                  <span className="text-muted-foreground">SQUAD · 搭 档</span>
                </div>
                <div className="flex items-start gap-4">
                  {bestSquadArt && (
                    <div className="shrink-0 border border-border bg-muted">
                      <Image
                        src={bestSquadArt}
                        alt={bestSquadArchetype.image?.alt?.[locale] ?? bestSquadArchetype.name[locale]}
                        width={200}
                        height={200}
                        className="size-20 object-contain sm:size-24"
                        unoptimized
                      />
                    </div>
                  )}
                  <div className="min-w-0 flex-1">
                    <h3
                      className="font-heading text-[26px] font-bold leading-[1.05] tracking-tight text-foreground transition-colors group-hover:text-primary sm:text-[30px]"
                      style={{fontVariationSettings: '"opsz" 144, "wght" 700'}}
                    >
                      {bestSquadArchetype.name[locale]}
                      <span className="text-primary">.</span>
                    </h3>
                    <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                      {bestSquadArchetype.slug.replace(/-/g, ' ')}
                    </p>
                  </div>
                </div>
                <p
                  className="mt-5 border-t border-border pt-5 font-heading text-[15px] italic leading-[1.45] text-foreground/85 sm:text-base"
                  style={{fontVariationSettings: '"opsz" 144, "SOFT" 95, "wght" 500'}}
                >
                  &ldquo;{bestSquadArchetype.oneLiner[locale]}&rdquo;
                </p>
              </article>
            </Link>
          )}
        </div>
      )}
    </div>
  );
}

// ── SBTI main test result (unchanged) ────────────────────────────────────────

export function ResultPhase() {
  return <SBTIResultPhase />;
}

function SBTIResultPhase() {
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

  const s = (t: (k: string) => string, key: string, fallback: string) => {
    try { return t(key); } catch { return fallback; }
  };
  const pName = s(tp, `${primary.code}.name`, primary.cn);
  const pIntro = s(tp, `${primary.code}.intro`, primary.intro);
  const pDesc = s(tp, `${primary.code}.desc`, primary.desc);
  const resultShareUrl = `/result/${encodeURIComponent(primary.code)}?r=${encodeResultState(userLevels, mode)}`;

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
                    url={resultShareUrl}
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
