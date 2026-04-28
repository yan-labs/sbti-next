'use client';

import {useTranslations, useLocale} from 'next-intl';
import {useRouter, usePathname} from '@/i18n/navigation';
import {useSearchParams} from 'next/navigation';
import {useEffect, useRef, useState, Suspense} from 'react';
import Image from 'next/image';
import {Link} from '@/i18n/navigation';
import {Button} from '@/components/ui/button';
import {NORMAL_TYPES, TYPE_IMAGES} from '@/lib/data/personalities';
import {getCompatibility} from '@/lib/data/compat';

const ALL_TYPES = [...NORMAL_TYPES.map(t => t.code), 'HHHH', 'DRUNK'];

// Archetype gradient configs for the score card
const ARCHETYPE_GRADIENTS: Record<string, string> = {
  fated: 'from-pink-500/20 via-rose-400/10 to-purple-500/20',
  sync: 'from-emerald-500/20 via-teal-400/10 to-cyan-500/20',
  spicy: 'from-orange-500/20 via-red-400/10 to-pink-500/20',
  plastic: 'from-sky-500/20 via-blue-400/10 to-indigo-500/20',
  awkward: 'from-yellow-500/20 via-amber-400/10 to-orange-500/20',
  disaster: 'from-slate-500/20 via-gray-400/10 to-zinc-500/20',
};

const ARCHETYPE_BADGE_COLORS: Record<string, string> = {
  fated: 'bg-pink-500/15 text-pink-700 dark:text-pink-300 border-pink-300/30',
  sync: 'bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border-emerald-300/30',
  spicy: 'bg-orange-500/15 text-orange-700 dark:text-orange-300 border-orange-300/30',
  plastic: 'bg-sky-500/15 text-sky-700 dark:text-sky-300 border-sky-300/30',
  awkward: 'bg-yellow-500/15 text-yellow-700 dark:text-yellow-300 border-yellow-300/30',
  disaster: 'bg-slate-500/15 text-slate-700 dark:text-slate-300 border-slate-300/30',
};

function AnimatedScore({target}: {target: number}) {
  const [display, setDisplay] = useState(0);
  const rafRef = useRef<number>(null);
  const startRef = useRef<number | null>(null);

  useEffect(() => {
    setDisplay(0);
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

function CompatPageInner() {
  const t = useTranslations('compat');
  const tp = useTranslations('personalities');
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();
  const searchParams = useSearchParams();

  const [typeA, setTypeA] = useState(searchParams.get('a') ?? '');
  const [typeB, setTypeB] = useState(searchParams.get('b') ?? '');

  const s = (fn: (k: string) => string, key: string, fallback: string) => {
    try { return fn(key); } catch { return fallback; }
  };

  // Sync URL when both selected
  useEffect(() => {
    if (typeA && typeB) {
      const url = `${pathname}?a=${encodeURIComponent(typeA)}&b=${encodeURIComponent(typeB)}`;
      router.replace(url, {scroll: false});
    }
  }, [typeA, typeB, router, pathname]);

  const bothSelected = typeA && typeB;
  const compat = bothSelected ? getCompatibility(typeA, typeB) : null;
  const gradient = compat ? ARCHETYPE_GRADIENTS[compat.archetypeKey] : '';
  const badgeColor = compat ? ARCHETYPE_BADGE_COLORS[compat.archetypeKey] : '';

  const nameA = s(tp, `${typeA}.name`, typeA);
  const nameB = s(tp, `${typeB}.name`, typeB);

  return (
    <div className="mx-auto max-w-2xl px-4 py-10">
      {/* Page header */}
      <div className="mb-8 text-center">
        <h1 className="font-heading text-4xl font-bold tracking-tight">{t('title')}</h1>
        <p className="mt-2 text-muted-foreground">{t('description')}</p>
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
        <div
          className={`relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br ${gradient} p-6 shadow-lg`}
        >
          {/* Decorative blob */}
          <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-primary/5 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-accent/5 blur-3xl" />

          {/* Type pair */}
          <div className="relative mb-6 flex items-center justify-between gap-4">
            {/* Type A card */}
            <div className="flex flex-1 flex-col items-center gap-2 text-center">
              {TYPE_IMAGES[typeA] && (
                <div className="overflow-hidden rounded-xl shadow-md ring-2 ring-border">
                  <Image
                    src={TYPE_IMAGES[typeA]}
                    alt={typeA}
                    width={96}
                    height={96}
                    className="h-24 w-24 object-cover"
                  />
                </div>
              )}
              <div>
                <p className="font-heading text-lg font-bold">{typeA}</p>
                <p className="text-xs text-muted-foreground">{nameA}</p>
              </div>
            </div>

            {/* Score center */}
            <div className="flex flex-col items-center gap-1">
              <div className="text-4xl">{compat.emoji}</div>
              <div className="flex flex-col items-center">
                <div className="font-heading text-5xl font-black tabular-nums leading-none text-foreground">
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
                <div className="overflow-hidden rounded-xl shadow-md ring-2 ring-border">
                  <Image
                    src={TYPE_IMAGES[typeB]}
                    alt={typeB}
                    width={96}
                    height={96}
                    className="h-24 w-24 object-cover"
                  />
                </div>
              )}
              <div>
                <p className="font-heading text-lg font-bold">{typeB}</p>
                <p className="text-xs text-muted-foreground">{nameB}</p>
              </div>
            </div>
          </div>

          {/* Score progress bar */}
          <div className="relative mb-6 h-2 overflow-hidden rounded-full bg-muted/60">
            <div
              className="h-full rounded-full bg-primary transition-all duration-700 ease-out"
              style={{width: `${compat.score}%`}}
            />
          </div>

          {/* Archetype badge + description */}
          <div className="space-y-3 text-center">
            <span className={`inline-flex items-center gap-1.5 rounded-full border px-4 py-1.5 text-sm font-semibold ${badgeColor}`}>
              {compat.emoji}{' '}
              {t(`archetype.${compat.archetypeKey}.label`)}
            </span>
            <p className="mx-auto max-w-sm text-sm leading-relaxed text-foreground/80">
              {t(`archetype.${compat.archetypeKey}.desc`)}
            </p>
          </div>
        </div>
      )}

      {/* Actions */}
      <div className="mt-8 flex flex-col items-center gap-3">
        <Link href="/">
          <Button size="lg" className="rounded-full px-8">
            {t('retakeCta')}
          </Button>
        </Link>
        {bothSelected && (
          <button
            type="button"
            onClick={() => {
              if (typeof navigator !== 'undefined' && navigator.share) {
                navigator.share({
                  title: `${typeA} × ${typeB} SBTI 궁합`,
                  url: window.location.href,
                }).catch(() => {});
              } else if (typeof navigator !== 'undefined') {
                navigator.clipboard.writeText(window.location.href).catch(() => {});
              }
            }}
            className="text-sm text-muted-foreground underline-offset-2 hover:underline transition-colors"
          >
            {locale === 'ko' ? '결과 공유하기' :
             locale === 'zh' ? '分享结果' :
             locale === 'ja' ? '結果をシェア' :
             'Share this result'}
          </button>
        )}
      </div>
    </div>
  );
}

export function CompatPage() {
  return (
    <Suspense>
      <CompatPageInner />
    </Suspense>
  );
}
