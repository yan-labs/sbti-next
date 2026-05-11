'use client';

import {useTranslations, useLocale} from 'next-intl';
import {useRouter, usePathname} from '@/i18n/navigation';
import {useEffect, useRef, useState} from 'react';
import Image from 'next/image';
import {Link} from '@/i18n/navigation';
import {Button} from '@/components/ui/button';
import {ShareButtons} from '@/components/share-buttons';
import {SaveCompatImageButton} from '@/components/save-result-image';
import {BlogCards} from '@/components/blog-cards';
import {NORMAL_TYPES, TYPE_IMAGES} from '@/lib/data/personalities';
import {getCompatibility} from '@/lib/data/compat';
import {DIMENSION_ORDER, DimCode, Level} from '@/lib/types';

const ALL_TYPES = [...NORMAL_TYPES.map(t => t.code), 'HHHH', 'DRUNK'];
const TYPE_PATTERNS = Object.fromEntries(NORMAL_TYPES.map(({code, pattern}) => [code, pattern]));
const COMPARE_DIMS: DimCode[] = ['S1', 'E1', 'E2', 'A1', 'Ac2', 'So1'];

const ARCHETYPE_STYLES: Record<string, {surface: string; soft: string; badge: string; progress: string; ring: string; shadow: string}> = {
  fated: {
    surface: 'bg-accent/10',
    soft: 'bg-accent/10',
    badge: 'border-accent/30 bg-accent/10 text-foreground',
    progress: 'bg-accent',
    ring: 'ring-accent/25',
    shadow: 'shadow-[0_18px_52px_rgba(139,92,246,0.10)]',
  },
  sync: {
    surface: 'bg-primary/10',
    soft: 'bg-primary/10',
    badge: 'border-primary/30 bg-primary/10 text-foreground',
    progress: 'bg-primary',
    ring: 'ring-primary/25',
    shadow: 'shadow-[0_18px_52px_rgba(16,185,129,0.10)]',
  },
  spicy: {
    surface: 'bg-secondary/10',
    soft: 'bg-secondary/10',
    badge: 'border-secondary/35 bg-secondary/10 text-foreground',
    progress: 'bg-secondary',
    ring: 'ring-secondary/25',
    shadow: 'shadow-[0_18px_52px_rgba(245,158,11,0.12)]',
  },
  plastic: {
    surface: 'bg-chart-4/10',
    soft: 'bg-chart-4/10',
    badge: 'border-chart-4/30 bg-chart-4/10 text-foreground',
    progress: 'bg-chart-4',
    ring: 'ring-chart-4/25',
    shadow: 'shadow-[0_18px_52px_rgba(59,130,246,0.10)]',
  },
  awkward: {
    surface: 'bg-secondary/10',
    soft: 'bg-secondary/10',
    badge: 'border-secondary/35 bg-secondary/10 text-foreground',
    progress: 'bg-secondary',
    ring: 'ring-secondary/25',
    shadow: 'shadow-[0_18px_52px_rgba(245,158,11,0.12)]',
  },
  disaster: {
    surface: 'bg-destructive/10',
    soft: 'bg-destructive/10',
    badge: 'border-destructive/30 bg-destructive/10 text-foreground',
    progress: 'bg-destructive',
    ring: 'ring-destructive/25',
    shadow: 'shadow-[0_18px_52px_rgba(239,68,68,0.10)]',
  },
};

function getTypeLevels(code: string): Record<DimCode, Level> | null {
  const pattern = TYPE_PATTERNS[code];
  if (!pattern) return null;
  const levels = pattern.replaceAll('-', '').split('') as Level[];
  if (levels.length !== DIMENSION_ORDER.length) return null;
  return Object.fromEntries(DIMENSION_ORDER.map((dim, i) => [dim, levels[i]])) as Record<DimCode, Level>;
}

function levelValue(level: Level) {
  return level === 'L' ? 1 : level === 'M' ? 2 : 3;
}

function AnimatedScore({target}: {target: number}) {
  const [display, setDisplay] = useState(0);
  const rafRef = useRef<number>(null);
  const startRef = useRef<number | null>(null);

  useEffect(() => {
    startRef.current = null;

    const duration = 900;
    function tick(now: number) {
      if (startRef.current === null) startRef.current = now;
      const elapsed = now - startRef.current;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * target));
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick);
      }
    }
    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [target]);

  return <span>{display}</span>;
}

function TypeSelector({
  label,
  value,
  onChange,
  exclude,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  exclude?: string;
}) {
  const tp = useTranslations('personalities');
  const t = useTranslations('compat');

  const s = (fn: (k: string) => string, key: string, fallback: string) => {
    try { return fn(key); } catch { return fallback; }
  };

  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
        {label}
      </label>
      <div className="relative">
        <select
          value={value}
          onChange={e => onChange(e.target.value)}
          className="w-full appearance-none rounded-xl border border-border bg-surface px-4 py-3 pr-10 text-sm font-medium text-foreground shadow-sm transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 hover:border-border-strong"
          style={{background: 'var(--color-surface, white)'}}
        >
          <option value="">{t('pickPlaceholder')}</option>
          {ALL_TYPES.filter(c => c !== exclude).map(code => (
            <option key={code} value={code}>
              {code} — {s(tp, `${code}.name`, code)}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">
          <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
      {value && (
        <div className="flex items-center gap-2 rounded-lg bg-muted/50 px-3 py-2">
          {TYPE_IMAGES[value] && (
            <Image
              src={TYPE_IMAGES[value]}
              alt={value}
              width={36}
              height={36}
              className="rounded-md"
            />
          )}
          <div>
            <p className="font-heading text-sm font-bold">{value}</p>
            <p className="text-xs text-muted-foreground">{s(tp, `${value}.intro`, '')}</p>
          </div>
        </div>
      )}
    </div>
  );
}

function CompatPageInner({initialA, initialB}: {initialA?: string; initialB?: string}) {
  const t = useTranslations('compat');
  const tp = useTranslations('personalities');
  const td = useTranslations('dimensions');
  const tr = useTranslations('result');
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  const [typeA, setTypeA] = useState(initialA ?? '');
  const [typeB, setTypeB] = useState(initialB ?? '');

  const s = (fn: (k: string) => string, key: string, fallback: string) => {
    try { return fn(key); } catch { return fallback; }
  };

  useEffect(() => {
    if (initialA || initialB) return;
    const params = new URLSearchParams(window.location.search);
    const queryA = params.get('a') ?? '';
    const queryB = params.get('b') ?? '';
    const frame = requestAnimationFrame(() => {
      if (queryA) setTypeA(queryA);
      if (queryB) setTypeB(queryB);
    });
    return () => cancelAnimationFrame(frame);
  }, [initialA, initialB]);

  // Use path segments for shareable/indexable pair pages. Query URLs stay as
  // entry points, then canonicalize to /compat/A/B once both types are known.
  useEffect(() => {
    if (typeA && typeB) {
      const url = `/compat/${encodeURIComponent(typeA)}/${encodeURIComponent(typeB)}`;
      if (pathname !== url) {
        router.replace(url, {scroll: false});
      }
    }
  }, [typeA, typeB, router, pathname]);

  const bothSelected = typeA && typeB;
  const compat = bothSelected ? getCompatibility(typeA, typeB) : null;
  const style = compat ? ARCHETYPE_STYLES[compat.archetypeKey] : null;

  const nameA = typeA ? s(tp, `${typeA}.name`, typeA) : '';
  const nameB = typeB ? s(tp, `${typeB}.name`, typeB) : '';
  const levelsA = getTypeLevels(typeA);
  const levelsB = getTypeLevels(typeB);
  const compareDimensions = levelsA && levelsB
    ? COMPARE_DIMS.map((dim) => {
        const leftLevel = levelsA[dim];
        const rightLevel = levelsB[dim];
        return {
          code: dim,
          label: td(dim),
          leftLevel,
          rightLevel,
          leftLevelLabel: tr(`level${leftLevel}`),
          rightLevelLabel: tr(`level${rightLevel}`),
        };
      })
    : [];
  const compareTitle =
    locale === 'zh' ? '六维对照' :
    locale === 'ja' ? '6次元比較' :
    locale === 'ko' ? '6차원 비교' :
    '6D Compare';
  const analysisTitle =
    locale === 'zh' ? `${typeA} 和 ${typeB} 的相处说明` :
    locale === 'ja' ? `${typeA} と ${typeB} の相性メモ` :
    locale === 'ko' ? `${typeA}와 ${typeB}의 궁합 메모` :
    `${typeA} and ${typeB} compatibility notes`;
  const dimensionSummary = compareDimensions
    .slice(0, 3)
    .map(dim => `${dim.label}: ${typeA} ${dim.leftLevelLabel}, ${typeB} ${dim.rightLevelLabel}`)
    .join(locale === 'en' ? '; ' : '；');
  const analysisCopy = compat ? (
    locale === 'zh' ? [
      `${nameA}（${typeA}）和 ${nameB}（${typeB}）的 SBTI 相性指数是 ${compat.score}%。这个组合被归到「${t(`archetype.${compat.archetypeKey}.label`)}」，重点不在于谁更强，而在于两个人处理安全感、行动节奏和表达方式时会不会互相加戏。`,
      t(`archetype.${compat.archetypeKey}.desc`),
      dimensionSummary ? `从关键维度看，${dimensionSummary}。这些差异会影响他们怎么做决定、怎么回应情绪，以及冲突出现时谁先开口。` : '',
    ] :
    locale === 'ja' ? [
      `${nameA}（${typeA}）と ${nameB}（${typeB}）のSBTI相性スコアは${compat.score}%です。この組み合わせは「${t(`archetype.${compat.archetypeKey}.label`)}」タイプ。大事なのは優劣ではなく、安心感、行動のテンポ、言葉の出し方がどう噛み合うかです。`,
      t(`archetype.${compat.archetypeKey}.desc`),
      dimensionSummary ? `主な違いを見ると、${dimensionSummary}。この差は、決断の速さ、感情への反応、すれ違った時の歩み寄り方に出やすくなります。` : '',
    ] :
    locale === 'ko' ? [
      `${nameA}(${typeA})와 ${nameB}(${typeB})의 SBTI 궁합 지수는 ${compat.score}%입니다. 이 조합은 '${t(`archetype.${compat.archetypeKey}.label`)}' 유형으로, 누가 더 낫다기보다 안정감, 실행 속도, 표현 방식이 어떻게 맞물리는지가 핵심입니다.`,
      t(`archetype.${compat.archetypeKey}.desc`),
      dimensionSummary ? `주요 차원을 보면 ${dimensionSummary}. 이 차이는 의사결정, 감정 반응, 갈등이 생겼을 때 먼저 다가가는 방식에 영향을 줍니다.` : '',
    ] : [
      `${nameA} (${typeA}) and ${nameB} (${typeB}) land at a ${compat.score}% SBTI compatibility score. This pairing is classified as "${t(`archetype.${compat.archetypeKey}.label`)}", which is less about who wins and more about how their safety needs, pace, and communication style collide or cooperate.`,
      t(`archetype.${compat.archetypeKey}.desc`),
      dimensionSummary ? `Across the key dimensions, ${dimensionSummary}. Those differences shape how they make decisions, respond to emotion, and recover when the interaction gets weird.` : '',
    ]
  ) : [];
  const shareTitle = bothSelected && compat
    ? `${typeA} × ${typeB} ${t('title')} — ${compat.score}%`
    : t('title');
  const shareDescription = bothSelected && compat
    ? `${nameA} × ${nameB}: ${t(`archetype.${compat.archetypeKey}.label`)}. ${t(`archetype.${compat.archetypeKey}.desc`)}`
    : t('description');
  const sharePath = bothSelected
    ? `/compat/${encodeURIComponent(typeA)}/${encodeURIComponent(typeB)}`
    : '/compat';

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 md:py-10">
      {/* Page header */}
      <div className="mb-8 text-center">
        <h1 className="font-heading text-4xl font-black tracking-tight md:text-5xl">{t('title')}</h1>
        <p className="mx-auto mt-3 max-w-2xl text-base font-medium leading-relaxed text-foreground/65">
          {t('description')}
        </p>
      </div>

      {/* Selector row */}
      <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-[1fr_auto_1fr] md:items-start">
        <TypeSelector
          label={t('pickA')}
          value={typeA}
          onChange={setTypeA}
          exclude={typeB}
        />

        {/* VS divider */}
        <div className="flex items-center justify-center py-2 md:pt-8">
          <span className="font-heading text-2xl font-black text-muted-foreground/50 select-none">
            VS
          </span>
        </div>

        <TypeSelector
          label={t('pickB')}
          value={typeB}
          onChange={setTypeB}
          exclude={typeA}
        />
      </div>

      {/* Empty state prompt */}
      {!bothSelected && (
        <div className="flex flex-col items-center gap-4 rounded-2xl border border-dashed border-border py-16 text-center">
          <div className="text-5xl">🔮</div>
          <p className="text-lg font-semibold text-foreground/70">
            {locale === 'ko' ? '두 유형을 선택하면 궁합을 알려드려요' :
             locale === 'zh' ? '选择两个人格，看看相性如何' :
             locale === 'ja' ? '2つのタイプを選ぶと相性が出ます' :
             'Pick two types to reveal your compatibility'}
          </p>
          <p className="text-sm text-muted-foreground">
            {locale === 'ko' ? '27가지 유형 중 어떤 조합이든 OK' :
             locale === 'zh' ? '27 种人格，任意搭配' :
             locale === 'ja' ? '27タイプ、どんな組み合わせでもOK' :
             '27 types — any combination works'}
          </p>
        </div>
      )}

      {/* Result card */}
      {bothSelected && compat && (
        <div className={`relative overflow-hidden rounded-2xl p-5 md:p-8 ${style?.surface} ${style?.shadow}`}>
          <div className={`pointer-events-none absolute right-6 top-6 h-28 w-28 rounded-full ${style?.soft} blur-2xl`} />

          {/* Type pair */}
          <div className="relative mb-6 grid grid-cols-[1fr_auto_1fr] items-center gap-3 md:gap-6">
            {/* Type A card */}
            <div className="flex flex-1 flex-col items-center gap-2 text-center">
              {TYPE_IMAGES[typeA] && (
                <div className={`overflow-hidden rounded-xl shadow-sm ring-4 ${style?.ring}`}>
                  <Image
                    src={TYPE_IMAGES[typeA]}
                    alt={typeA}
                    width={96}
                    height={96}
                    className="h-20 w-20 object-cover sm:h-24 sm:w-24 md:h-28 md:w-28"
                  />
                </div>
              )}
              <div>
                <p className="font-heading text-lg font-black md:text-xl">{typeA}</p>
                <p className="line-clamp-2 text-xs font-medium text-muted-foreground md:text-sm">{nameA}</p>
              </div>
            </div>

            {/* Score center */}
            <div className="flex min-w-[4.5rem] flex-col items-center gap-1 md:min-w-28">
              <div className={`flex h-12 w-12 items-center justify-center rounded-full ${style?.soft} text-2xl md:h-16 md:w-16 md:text-3xl`}>
                {compat.emoji}
              </div>
              <div className="flex flex-col items-center">
                <div className="font-heading text-4xl font-black tabular-nums leading-none text-foreground md:text-6xl">
                  <AnimatedScore target={compat.score} />
                </div>
                <span className="text-xs font-medium text-muted-foreground">%</span>
              </div>
              <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                {t('scoreLabel')}
              </span>
            </div>

            {/* Type B card */}
            <div className="flex flex-1 flex-col items-center gap-2 text-center">
              {TYPE_IMAGES[typeB] && (
                <div className={`overflow-hidden rounded-xl shadow-sm ring-4 ${style?.ring}`}>
                  <Image
                    src={TYPE_IMAGES[typeB]}
                    alt={typeB}
                    width={96}
                    height={96}
                    className="h-20 w-20 object-cover sm:h-24 sm:w-24 md:h-28 md:w-28"
                  />
                </div>
              )}
              <div>
                <p className="font-heading text-lg font-black md:text-xl">{typeB}</p>
                <p className="line-clamp-2 text-xs font-medium text-muted-foreground md:text-sm">{nameB}</p>
              </div>
            </div>
          </div>

          {/* Score progress bar */}
          <div className="relative mb-6 h-2 overflow-hidden rounded-full bg-muted">
            <div
              className={`h-full rounded-full transition-all duration-700 ease-out ${style?.progress}`}
              style={{width: `${compat.score}%`}}
            />
          </div>

          {/* Archetype badge + description */}
          <div className="space-y-3 text-center">
            <span className={`inline-flex items-center gap-1.5 rounded-full border px-4 py-1.5 text-sm font-bold ${style?.badge}`}>
              {compat.emoji}{' '}
              {t(`archetype.${compat.archetypeKey}.label`)}
            </span>
            <p className="mx-auto max-w-xl text-sm font-medium leading-relaxed text-foreground/75 md:text-base">
              {t(`archetype.${compat.archetypeKey}.desc`)}
            </p>
          </div>

          {compareDimensions.length > 0 && (
            <div className="relative mt-7 rounded-xl bg-background/55 p-4 md:p-5">
              <div className="mb-4 flex items-center justify-between gap-3">
                <span className="min-w-0 truncate font-heading text-sm font-bold text-foreground">{typeA}</span>
                <span className="shrink-0 rounded-full bg-card/70 px-3 py-1 text-xs font-bold text-muted-foreground">
                  {compareTitle}
                </span>
                <span className="min-w-0 truncate text-right font-heading text-sm font-bold text-foreground">{typeB}</span>
              </div>
              <div className="space-y-3">
                {compareDimensions.map((dim) => {
                  const left = dim.leftLevel;
                  const right = dim.rightLevel;
                  const leftWidth = `${(levelValue(left) / 3) * 100}%`;
                  const rightWidth = `${(levelValue(right) / 3) * 100}%`;
                  return (
                    <div key={dim.code} className="grid grid-cols-[2.5rem_1fr_5.5rem_1fr_2.5rem] items-center gap-2">
                      <span className="text-right font-mono text-xs font-bold text-muted-foreground">
                        {dim.leftLevelLabel}
                      </span>
                      <div className="flex h-2 justify-end overflow-hidden rounded-full bg-card/80">
                        <div className="h-full rounded-full bg-primary" style={{width: leftWidth}} />
                      </div>
                      <div className="text-center">
                        <p className="font-mono text-[11px] font-bold text-muted-foreground">{dim.code}</p>
                        <p className="truncate text-[11px] font-medium text-foreground">{dim.label}</p>
                      </div>
                      <div className="h-2 overflow-hidden rounded-full bg-card/80">
                        <div className={`h-full rounded-full ${style?.progress}`} style={{width: rightWidth}} />
                      </div>
                      <span className="font-mono text-xs font-bold text-muted-foreground">
                        {dim.rightLevelLabel}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      )}

      {bothSelected && compat && (
        <section className="mt-6 rounded-2xl border border-border bg-card/70 p-5 shadow-sm md:p-6">
          <h2 className="font-heading text-xl font-bold tracking-tight">{analysisTitle}</h2>
          <div className="mt-3 space-y-3 text-sm leading-relaxed text-foreground/75 md:text-base">
            {analysisCopy.filter(Boolean).map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </section>
      )}

      {/* Actions */}
      <div className="mt-8 flex flex-col items-center gap-4">
        <Link href="/test">
          <Button size="lg" className="rounded-full px-8 font-bold">
            {t('retakeCta')}
          </Button>
        </Link>
        {bothSelected && (
          <div className="flex max-w-2xl flex-wrap items-center justify-center gap-2">
            {compat && compareDimensions.length > 0 && (
              <SaveCompatImageButton
                codeA={typeA}
                nameA={nameA}
                codeB={typeB}
                nameB={nameB}
                score={compat.score}
                scoreLabel={t('scoreLabel')}
                archetypeKey={compat.archetypeKey}
                archetypeLabel={t(`archetype.${compat.archetypeKey}.label`)}
                archetypeDescription={t(`archetype.${compat.archetypeKey}.desc`)}
                dimensionsTitle={compareTitle}
                dimensions={compareDimensions}
              />
            )}
            <ShareButtons
              url={sharePath}
              title={shareTitle}
              description={shareDescription}
            />
          </div>
        )}
      </div>

      <div className="mt-10">
        <BlogCards compact />
      </div>
    </div>
  );
}

export function CompatPage({initialA, initialB}: {initialA?: string; initialB?: string}) {
  return <CompatPageInner initialA={initialA} initialB={initialB} />;
}
