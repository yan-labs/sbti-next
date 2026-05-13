'use client';

import {useTranslations, useLocale} from 'next-intl';
import {useRouter, usePathname} from '@/i18n/navigation';
import {useEffect, useRef, useState} from 'react';
import Image from 'next/image';
import {Link} from '@/i18n/navigation';
import {ShareButtons} from '@/components/share-buttons';
import {SaveCompatImageButton} from '@/components/save-result-image';
import {BlogCards} from '@/components/blog-cards';
import {NORMAL_TYPES, TYPE_IMAGES} from '@/lib/data/personalities';
import {getCompatibility} from '@/lib/data/compat';
import {DIMENSION_ORDER, DimCode, Level} from '@/lib/types';

const ALL_TYPES = [...NORMAL_TYPES.map(t => t.code), 'HHHH', 'DRUNK'];
const TYPE_PATTERNS = Object.fromEntries(NORMAL_TYPES.map(({code, pattern}) => [code, pattern]));
const COMPARE_DIMS: DimCode[] = ['S1', 'E1', 'E2', 'A1', 'Ac2', 'So1'];

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
    <div className="flex flex-col gap-3">
      <label className="editorial-kicker">
        {label}
      </label>
      <div className="relative">
        <select
          value={value}
          onChange={e => onChange(e.target.value)}
          className="w-full appearance-none border border-border bg-card px-4 py-3.5 pr-10 font-heading text-base font-medium text-foreground transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
        >
          <option value="">{t('pickPlaceholder')}</option>
          {ALL_TYPES.filter(c => c !== exclude).map(code => (
            <option key={code} value={code}>
              {code} — {s(tp, `${code}.name`, code)}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground">
          <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
      {value && (
        <div className="flex items-center gap-3 border border-border bg-muted px-3 py-2.5">
          {TYPE_IMAGES[value] && (
            <Image
              src={TYPE_IMAGES[value]}
              alt={value}
              width={40}
              height={40}
              className="border border-border"
              style={{filter: 'saturate(0.92)'}}
            />
          )}
          <div className="min-w-0">
            <p className="font-mono text-[11px] tracking-[0.16em] text-primary">{value}</p>
            <p className="font-heading text-sm font-semibold tracking-tight text-foreground truncate">
              {s(tp, `${value}.name`, value)}
            </p>
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
    <div className="bg-background">
      <div className="mx-auto max-w-[1240px] px-5 md:px-8 py-16 md:py-20">
        {/* Section head */}
        <header className="grid grid-cols-1 gap-8 md:grid-cols-[auto_1fr_auto] md:items-baseline mb-12 md:mb-16">
          <span className="editorial-kicker">Compatibility</span>
          <h1 className="editorial-h1 md:col-start-1 md:col-end-3 md:mt-2">
            {t('title')}
          </h1>
          <p className="editorial-dek max-w-[42ch] md:col-start-1 md:col-end-3 md:mt-3">
            {t('description')}
          </p>
        </header>

        {/* Selector row */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-[1fr_auto_1fr] md:items-end mb-14">
          <TypeSelector
            label={t('pickA')}
            value={typeA}
            onChange={setTypeA}
            exclude={typeB}
          />

          <div className="flex items-center justify-center py-2 md:pb-4">
            <span className="font-heading italic text-3xl md:text-4xl text-primary select-none"
                  style={{fontVariationSettings: '"opsz" 144, "SOFT" 95, "wght" 700'}}>
              ×
            </span>
          </div>

          <TypeSelector
            label={t('pickB')}
            value={typeB}
            onChange={setTypeB}
            exclude={typeA}
          />
        </div>

        {/* Empty state */}
        {!bothSelected && (
          <div className="border-t border-b border-border py-20 text-center flex flex-col items-center gap-4">
            <span className="editorial-kicker text-primary">Awaiting input</span>
            <p className="font-heading italic text-2xl md:text-3xl text-foreground max-w-[28ch]"
               style={{fontVariationSettings: '"opsz" 144, "SOFT" 95, "wght" 500'}}>
              {locale === 'ko' ? '두 유형을 선택하면 궁합을 알려드려요' :
               locale === 'zh' ? '选择两个人格，看看相性如何' :
               locale === 'ja' ? '2つのタイプを選ぶと相性が出ます' :
               'Pick two types to reveal your compatibility.'}
            </p>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              {locale === 'ko' ? '27가지 유형 · 어떤 조합이든' :
               locale === 'zh' ? '27 种人格 · 任意搭配' :
               locale === 'ja' ? '27タイプ · どんな組み合わせでも' :
               '27 types · any combination'}
            </p>
          </div>
        )}

        {/* Result card */}
        {bothSelected && compat && (
          <div className="border border-ink/90 dark:border-foreground bg-card p-6 md:p-10">
            {/* Type pair */}
            <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-4 md:gap-8 mb-8">
              {/* Type A */}
              <div className="flex flex-col items-center gap-3 text-center">
                {TYPE_IMAGES[typeA] && (
                  <div className="border border-border overflow-hidden">
                    <Image
                      src={TYPE_IMAGES[typeA]}
                      alt={typeA}
                      width={120}
                      height={120}
                      className="h-24 w-24 object-cover md:h-32 md:w-32"
                      style={{filter: 'saturate(0.92)'}}
                    />
                  </div>
                )}
                <div>
                  <p className="font-mono text-[11px] tracking-[0.18em] text-primary">{typeA}</p>
                  <p className="font-heading text-lg md:text-xl font-bold tracking-tight">{nameA}</p>
                </div>
              </div>

              {/* Score */}
              <div className="flex flex-col items-center gap-2 min-w-[5rem] md:min-w-32">
                <span className="editorial-kicker">{t('scoreLabel')}</span>
                <div className="font-heading text-5xl md:text-7xl font-bold tabular-nums leading-none text-foreground tracking-tight"
                     style={{fontVariationSettings: '"opsz" 144, "SOFT" 30, "wght" 800'}}>
                  <AnimatedScore target={compat.score} />
                  <span className="text-primary">%</span>
                </div>
                <span className="text-2xl md:text-3xl mt-1" aria-hidden>{compat.emoji}</span>
              </div>

              {/* Type B */}
              <div className="flex flex-col items-center gap-3 text-center">
                {TYPE_IMAGES[typeB] && (
                  <div className="border border-border overflow-hidden">
                    <Image
                      src={TYPE_IMAGES[typeB]}
                      alt={typeB}
                      width={120}
                      height={120}
                      className="h-24 w-24 object-cover md:h-32 md:w-32"
                      style={{filter: 'saturate(0.92)'}}
                    />
                  </div>
                )}
                <div>
                  <p className="font-mono text-[11px] tracking-[0.18em] text-primary">{typeB}</p>
                  <p className="font-heading text-lg md:text-xl font-bold tracking-tight">{nameB}</p>
                </div>
              </div>
            </div>

            {/* Score bar */}
            <div className="relative mb-8 h-[2px] overflow-hidden bg-border">
              <div
                className="h-full bg-primary transition-all duration-700 ease-out"
                style={{width: `${compat.score}%`}}
              />
            </div>

            {/* Archetype */}
            <div className="text-center mb-2">
              <span className="editorial-kicker text-primary block mb-3">Archetype</span>
              <h2 className="font-heading text-2xl md:text-3xl font-bold tracking-tight text-foreground">
                {t(`archetype.${compat.archetypeKey}.label`)}
              </h2>
              <p className="mx-auto mt-4 max-w-[52ch] text-base leading-relaxed text-muted-foreground">
                {t(`archetype.${compat.archetypeKey}.desc`)}
              </p>
            </div>

            {/* 6D comparison */}
            {compareDimensions.length > 0 && (
              <div className="mt-10 border-t border-border pt-8">
                <div className="flex items-center justify-between mb-6">
                  <span className="font-heading text-sm font-bold tracking-tight text-foreground">{typeA}</span>
                  <span className="editorial-kicker">{compareTitle}</span>
                  <span className="font-heading text-sm font-bold tracking-tight text-foreground">{typeB}</span>
                </div>
                <div className="space-y-4">
                  {compareDimensions.map((dim) => {
                    const left = dim.leftLevel;
                    const right = dim.rightLevel;
                    const leftWidth = `${(levelValue(left) / 3) * 100}%`;
                    const rightWidth = `${(levelValue(right) / 3) * 100}%`;
                    return (
                      <div key={dim.code} className="grid grid-cols-[2.5rem_1fr_5.5rem_1fr_2.5rem] items-center gap-2">
                        <span className="text-right font-mono text-[10px] tracking-[0.16em] text-muted-foreground uppercase">
                          {dim.leftLevelLabel}
                        </span>
                        <div className="flex h-[3px] justify-end overflow-hidden bg-border">
                          <div className="h-full bg-foreground" style={{width: leftWidth}} />
                        </div>
                        <div className="text-center">
                          <p className="font-mono text-[10px] tracking-[0.16em] text-primary uppercase">{dim.code}</p>
                          <p className="truncate text-[11px] text-foreground mt-0.5">{dim.label}</p>
                        </div>
                        <div className="h-[3px] overflow-hidden bg-border">
                          <div className="h-full bg-primary" style={{width: rightWidth}} />
                        </div>
                        <span className="font-mono text-[10px] tracking-[0.16em] text-muted-foreground uppercase">
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

        {/* Analysis */}
        {bothSelected && compat && (
          <section className="mt-10 border-t border-border pt-10">
            <span className="editorial-kicker block mb-3">Analysis</span>
            <h2 className="editorial-h2 mb-6">{analysisTitle}</h2>
            <div className="prose-custom max-w-[68ch]">
              {analysisCopy.filter(Boolean).map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </section>
        )}

        {/* Actions */}
        <div className="mt-12 flex flex-col items-start gap-6 border-t border-border pt-10">
          <Link href="/test" className="btn-editorial">
            {t('retakeCta')}
          </Link>
          {bothSelected && (
            <div className="flex max-w-2xl flex-wrap items-center gap-2">
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

        <div className="mt-16 border-t border-border pt-12">
          <BlogCards compact />
        </div>
      </div>
    </div>
  );
}

export function CompatPage({initialA, initialB}: {initialA?: string; initialB?: string}) {
  return <CompatPageInner initialA={initialA} initialB={initialB} />;
}
