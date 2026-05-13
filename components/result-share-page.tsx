'use client';

import {useEffect, useState} from 'react';
import Image from 'next/image';
import {useLocale, useTranslations} from 'next-intl';
import {ShareButtons} from '@/components/share-buttons';
import {SaveImageButton} from '@/components/save-result-image';
import {BlogCards} from '@/components/blog-cards';
import {Link} from '@/i18n/navigation';
import {decodeResultState} from '@/lib/result-share';
import {determineResult, parsePattern} from '@/lib/engine';
import {NORMAL_TYPES, TYPE_IMAGES} from '@/lib/data/personalities';
import {
  DIMENSION_ORDER,
  MODEL_DIMS,
  type DimCode,
  type Level,
  type ModelCode,
} from '@/lib/types';

// ─── Helpers ──────────────────────────────────────────────────────────────
const ALL_TYPE_CODES: string[] = [
  ...NORMAL_TYPES.map((t) => t.code),
  'HHHH',
  'DRUNK',
];
const fmtNo = (n: number) => String(n).padStart(3, '0');
const LEVEL_NUM: Record<Level, number> = {L: 1, M: 2, H: 3};

function getPatternLevels(code: string): Record<DimCode, Level> | null {
  const type = NORMAL_TYPES.find((item) => item.code === code);
  if (!type) return null;
  const levels = parsePattern(type.pattern);
  return Object.fromEntries(
    DIMENSION_ORDER.map((dim, i) => [dim, levels[i]]),
  ) as Record<DimCode, Level>;
}

/** Collapse 15 dims → 5 model axes, then add Overall = mean(all). 6 bars total. */
function toSixAxisScores(levels: Record<DimCode, Level>) {
  const models: ModelCode[] = ['S', 'E', 'A', 'Ac', 'So'];
  const rows = models.map((m) => {
    const dims = MODEL_DIMS[m];
    const avg =
      dims.reduce((acc, d) => acc + LEVEL_NUM[levels[d]], 0) / dims.length;
    // 1..3 → 0..100
    const pct = Math.round(((avg - 1) / 2) * 100);
    return {key: m as ModelCode | 'OVR', percent: pct};
  });
  const overall = Math.round(
    rows.reduce((acc, r) => acc + r.percent, 0) / rows.length,
  );
  rows.push({key: 'OVR', percent: overall});
  return rows;
}

// Hash the type code → a one-of-one stable issue number so each share shows
// a unique "Vol. 27 · No. xxx" badge. Same code always renders the same number.
function issueNumber(code: string) {
  let h = 0;
  for (let i = 0; i < code.length; i++) h = (h * 31 + code.charCodeAt(i)) | 0;
  return String(Math.abs(h) % 9000 + 1000);
}

function todayStamp(locale: string) {
  try {
    return new Intl.DateTimeFormat(locale === 'zh' ? 'zh-CN' : locale, {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }).format(new Date());
  } catch {
    return new Date().toDateString();
  }
}

function ResultSharePageInner({code}: {code: string}) {
  const t = useTranslations('result');
  const ts = useTranslations('share');
  const ti = useTranslations('intro');
  const tr = useTranslations('resultPage');
  const tp = useTranslations('personalities');
  const tm = useTranslations('models');
  const td = useTranslations('dimensions');
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
  const isTrustedShare = Boolean(
    sharedResult && sharedResult.primary.code === code,
  );
  const levels = isTrustedShare ? state!.levels : getPatternLevels(code);
  const result = isTrustedShare ? sharedResult! : null;

  const cn = s(tp, `${code}.name`, code);
  const intro = s(tp, `${code}.intro`, '');
  const desc = s(tp, `${code}.desc`, '');
  const imgSrc = TYPE_IMAGES[code];
  const shareUrl = levels && isTrustedShare
    ? `/result/${encodeURIComponent(code)}?r=${resultStateParam}`
    : `/result/${encodeURIComponent(code)}`;

  // Issue / date / Nº labels
  const idx = ALL_TYPE_CODES.indexOf(code);
  const no = idx >= 0 ? idx + 1 : 27;
  const issue = issueNumber(code);
  const dateStr = todayStamp(locale);

  // Rival / squad mate derived from the trusted ranking when available;
  // otherwise pull deterministic candidates that aren't us.
  const ranked = result?.rankings ?? [];
  const squadMate = ranked.length >= 2 ? ranked[1].code : ALL_TYPE_CODES[(idx + 1) % 25] ?? 'OJBK';
  const rival = ranked.length > 0 ? ranked[ranked.length - 1].code : ALL_TYPE_CODES[(idx + 13) % 25] ?? 'FAKE';
  const squadMateCn = s(tp, `${squadMate}.name`, squadMate);
  const rivalCn = s(tp, `${rival}.name`, rival);

  // 6-axis bars
  const sixAxis = levels ? toSixAxisScores(levels) : null;

  // Body split for 3-col newspaper + dropcap
  const dropcap = desc ? [...desc][0] : '';
  const descBody = desc ? desc.slice(dropcap.length) : '';

  return (
    <div
      className="result-front mx-auto max-w-[1180px] px-4 pt-8 pb-14 md:px-8 md:pt-10"
      style={{color: 'var(--foreground)'}}
    >
      {/* ─────────── MASTHEAD ─────────── */}
      <header className="border-b-4 border-t border-foreground/85 pt-4 pb-3">
        <div className="mono-label flex flex-wrap items-baseline justify-between gap-2">
          <span>{dateStr}</span>
          <span style={{color: 'var(--vermillion)'}}>
            {s(tr, 'oneOfOne', 'YOUR ISSUE · ONE-OF-ONE')}
          </span>
        </div>
        <div className="flex flex-col items-stretch gap-2 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
          <h1
            className="font-heading m-0 text-foreground"
            style={{
              fontVariationSettings: '"opsz" 144, "SOFT" 30, "wght" 800',
              fontSize: 'clamp(54px, 7.2vw, 108px)',
              lineHeight: 0.92,
              letterSpacing: '-0.035em',
            }}
          >
            {s(tr, 'mastheadLead', 'SBTI ')}
            <em
              className="not-italic"
              style={{
                fontStyle: 'italic',
                fontVariationSettings: '"opsz" 144, "SOFT" 90, "wght" 800',
                color: 'var(--vermillion)',
                letterSpacing: '-0.04em',
              }}
            >
              {s(tr, 'mastheadEm', 'Daily')}
            </em>
          </h1>
          <span
            className="font-mono flex justify-between gap-3 text-[11px] uppercase tracking-[0.18em] text-muted-foreground sm:block sm:text-right"
            aria-hidden
          >
            <span>Vol. 27 · No. {issue}</span>
            <span className="hidden sm:block">
              <br />
            </span>
            <span>FILE Nº {fmtNo(no)} / 027</span>
          </span>
        </div>
      </header>

      {/* Thin secondary rule with section labels — mimics paper column rule */}
      <div className="mt-3 grid grid-cols-2 gap-6 border-b pb-2 sm:grid-cols-4" style={{borderColor: 'var(--ink)'}}>
        {[
          s(tr, 'section1', 'SPECIMEN'),
          s(tr, 'section2', 'ANALYSIS'),
          s(tr, 'section3', '6-AXIS'),
          s(tr, 'section4', 'FACTS'),
        ].map((label, i) => (
          <div
            key={i}
            className="mono-label text-[10px]"
            style={{color: 'var(--ink-muted, var(--muted-foreground))'}}
          >
            {label}
          </div>
        ))}
      </div>

      {/* ─────────── HEADLINE ROW — portrait + giant code + strap ─────────── */}
      <section className="grid grid-cols-1 gap-6 border-b py-7 md:grid-cols-[240px_1fr] md:gap-10 md:py-9" style={{borderColor: 'var(--ink)'}}>
        <div>
          <div
            className="relative aspect-square w-[60vw] max-w-[260px] overflow-hidden md:w-60"
            style={{
              background: 'var(--paper-soft)',
              border: '2px solid var(--ink)',
              boxShadow: '0 18px 36px -24px color-mix(in oklab, var(--ink) 60%, transparent)',
            }}
          >
            {imgSrc && (
              <Image
                src={imgSrc}
                alt={cn}
                width={520}
                height={520}
                priority
                className="h-full w-full object-cover"
                style={{filter: 'saturate(0.85) contrast(1.04)'}}
              />
            )}
            <span
              aria-hidden
              className="pointer-events-none absolute -left-1 -top-1 h-4 w-4"
              style={{borderTop: '2px solid var(--vermillion)', borderLeft: '2px solid var(--vermillion)'}}
            />
            <span
              aria-hidden
              className="pointer-events-none absolute -right-1 -bottom-1 h-4 w-4"
              style={{borderBottom: '2px solid var(--vermillion)', borderRight: '2px solid var(--vermillion)'}}
            />
          </div>
          <div className="mono-label mt-3" style={{color: 'var(--vermillion)'}}>
            Nº {fmtNo(no)} · {result ? t('match', {percent: result.primary.similarity}) : s(tr, 'sampleBadge', 'TYPE SAMPLE')}
          </div>
        </div>

        <div className="min-w-0">
          <p
            className="mono-label mb-2"
            style={{color: 'var(--ink-muted, var(--muted-foreground))'}}
          >
            {t('yourType')}
          </p>
          <div
            className="font-heading leading-[0.86] text-foreground"
            style={{
              fontVariationSettings: '"opsz" 144, "SOFT" 30, "wght" 900',
              fontSize: 'clamp(72px, 13vw, 192px)',
              letterSpacing: '-0.045em',
            }}
          >
            {code}
            <span style={{color: 'var(--vermillion)'}}>.</span>
          </div>
          <p
            className="font-heading mt-1"
            style={{
              fontStyle: 'italic',
              fontVariationSettings: '"opsz" 144, "SOFT" 90, "wght" 500',
              fontSize: 'clamp(20px, 2.4vw, 28px)',
              color: 'var(--ink-soft, var(--foreground))',
              letterSpacing: '-0.005em',
            }}
          >
            {cn}
          </p>

          {/* Strap line — italic with scandal-red highlighter on the punch phrase */}
          <p
            className="font-heading mt-4 max-w-[36ch]"
            style={{
              fontStyle: 'italic',
              fontVariationSettings: '"opsz" 144, "SOFT" 75, "wght" 500',
              fontSize: 'clamp(17px, 1.5vw, 21px)',
              lineHeight: 1.35,
              color: 'var(--ink-soft, var(--foreground))',
            }}
          >
            <span
              className="px-1.5 py-0.5"
              style={{
                background: 'var(--vermillion)',
                color: 'var(--paper-soft)',
                boxDecorationBreak: 'clone',
                WebkitBoxDecorationBreak: 'clone',
              }}
            >
              {intro || s(tr, 'strapFallback', '本期独家样本')}
            </span>
          </p>

          {/* Stats row */}
          {result && (
            <div
              className="mt-5 grid max-w-[440px] grid-cols-3 gap-x-6 gap-y-2 border-t pt-3"
              style={{borderColor: 'var(--border)'}}
            >
              <div>
                <div
                  className="font-heading"
                  style={{
                    fontVariationSettings: '"opsz" 144, "wght" 700',
                    fontSize: 32,
                    lineHeight: 1,
                    letterSpacing: '-0.02em',
                    color: 'var(--vermillion)',
                  }}
                >
                  {result.primary.similarity}%
                </div>
                <div className="font-mono mt-1 text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                  {s(tr, 'statMatch', '匹配度')}
                </div>
              </div>
              <div>
                <div
                  className="font-heading"
                  style={{
                    fontVariationSettings: '"opsz" 144, "wght" 700',
                    fontSize: 32,
                    lineHeight: 1,
                    letterSpacing: '-0.02em',
                  }}
                >
                  {result.primary.exact}/15
                </div>
                <div className="font-mono mt-1 text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                  {s(tr, 'statExact', '精准命中')}
                </div>
              </div>
              <div>
                <div
                  className="font-heading"
                  style={{
                    fontVariationSettings: '"opsz" 144, "wght" 700',
                    fontSize: 32,
                    lineHeight: 1,
                    letterSpacing: '-0.02em',
                  }}
                >
                  {fmtNo(no)}
                </div>
                <div className="font-mono mt-1 text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                  {s(tr, 'statFileNo', '档案编号')}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ─────────── 3-COL BODY + FACTS-ON-FILE ─────────── */}
      <section className="grid gap-8 border-b py-8 md:grid-cols-[1fr_280px] md:gap-10" style={{borderColor: 'var(--ink)'}}>
        <article>
          <div
            className="mono-label mb-3"
            style={{color: 'var(--vermillion)'}}
          >
            {s(tr, 'analysisKicker', '本期专栏 · THE ANALYSIS')}
          </div>
          {desc ? (
            <div
              className="prose-result text-[15px] leading-[1.7] md:columns-2 md:gap-7 md:[column-rule:1px_solid_var(--border)]"
              style={{color: 'var(--ink-soft, var(--foreground))'}}
            >
              <p className="m-0">
                <span
                  className="font-heading float-left mr-2 mt-1 leading-[0.85]"
                  style={{
                    fontVariationSettings: '"opsz" 144, "SOFT" 30, "wght" 800',
                    fontSize: '4.5em',
                    color: 'var(--vermillion)',
                    letterSpacing: '-0.04em',
                  }}
                >
                  {dropcap}
                </span>
                {descBody}
              </p>
            </div>
          ) : (
            <p className="text-muted-foreground">{intro}</p>
          )}
        </article>

        {/* Facts on File */}
        <aside
          className="p-5 md:self-start"
          style={{background: 'var(--paper-deep)', border: '2px solid var(--ink)'}}
        >
          <div
            className="mono-label mb-3 flex items-center justify-between"
            style={{color: 'var(--vermillion)'}}
          >
            <span>{s(tr, 'factsTitle', 'FACTS ON FILE')}</span>
            <span>§ {fmtNo(no)}</span>
          </div>
          <dl className="grid grid-cols-1 gap-y-3 text-sm">
            <div>
              <dt className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                {s(tr, 'mainSymptom', '主诊断')}
              </dt>
              <dd
                className="font-heading mt-1"
                style={{fontVariationSettings: '"opsz" 144, "wght" 700', fontSize: 18, lineHeight: 1.15}}
              >
                {code}
                <span style={{color: 'var(--vermillion)'}}>.</span>{' '}
                <span className="font-normal text-foreground/80" style={{fontSize: 13}}>
                  / {cn}
                </span>
              </dd>
            </div>
            <div>
              <dt className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                {s(tr, 'rival', '克星类型 · RIVAL')}
              </dt>
              <dd className="mt-0.5 text-foreground/85">
                <span className="font-heading font-bold" style={{fontVariationSettings: '"opsz" 144, "wght" 700'}}>
                  {rival}
                </span>{' '}
                · {rivalCn}
              </dd>
            </div>
            <div>
              <dt className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                {s(tr, 'squadMate', '最佳队友 · BEST SQUAD MATE')}
              </dt>
              <dd className="mt-0.5 text-foreground/85">
                <span className="font-heading font-bold" style={{fontVariationSettings: '"opsz" 144, "wght" 700'}}>
                  {squadMate}
                </span>{' '}
                · {squadMateCn}
              </dd>
            </div>
            <div>
              <dt className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                {s(tr, 'rarity', '稀有度 · RARITY')}
              </dt>
              <dd className="mt-0.5" style={{color: 'var(--vermillion)'}}>
                {no <= 3
                  ? s(tr, 'rarityVeryRare', '极罕 · 0.04%')
                  : no <= 10
                    ? s(tr, 'rarityRare', '罕见 · < 2%')
                    : no <= 19
                      ? s(tr, 'rarityUncommon', '不常见 · < 6%')
                      : s(tr, 'rarityCommon', '常见 · > 10%')}
              </dd>
            </div>
          </dl>
        </aside>
      </section>

      {/* ─────────── 6-AXIS PROFILE ─────────── */}
      {sixAxis && (
        <section className="border-b py-8 md:py-10" style={{borderColor: 'var(--ink)'}}>
          <header className="mb-5 flex flex-wrap items-baseline justify-between gap-2">
            <div className="mono-label" style={{color: 'var(--vermillion)'}}>
              {s(tr, 'sixAxisKicker', '六维画像 · THE PROFILE')}
            </div>
            <div className="mono-label">
              {s(tr, 'sixAxisRight', '15 DIMS → 5 MODELS + OVERALL')}
            </div>
          </header>
          <ul className="grid gap-4 md:grid-cols-2 md:gap-x-10">
            {sixAxis.map((row, i) => {
              const label =
                row.key === 'OVR'
                  ? s(tr, 'overall', '整体 · OVERALL')
                  : tm(row.key);
              const isPrimary = row.key === 'OVR';
              const dominant = !isPrimary && row.percent >= 66;
              return (
                <li key={String(row.key)} className="grid grid-cols-[auto_1fr_auto] items-center gap-3">
                  <span
                    aria-hidden
                    className="font-mono w-6 text-[10px] tracking-[0.14em] text-muted-foreground"
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div className="min-w-0">
                    <div className="flex items-baseline justify-between">
                      <span
                        className="font-heading truncate"
                        style={{fontVariationSettings: '"opsz" 144, "wght" 600', fontSize: 14}}
                      >
                        {label}
                      </span>
                      <span
                        className="font-mono ml-3 text-[11px] font-bold"
                        style={{color: isPrimary || dominant ? 'var(--vermillion)' : 'var(--ink)'}}
                      >
                        {row.percent}
                      </span>
                    </div>
                    <div
                      className="mt-1.5 h-1.5 overflow-hidden"
                      style={{background: 'var(--paper-deep)'}}
                    >
                      <div
                        className="h-full"
                        style={{
                          width: `${Math.max(2, row.percent)}%`,
                          background: isPrimary
                            ? 'var(--vermillion)'
                            : dominant
                              ? 'var(--vermillion)'
                              : 'var(--ink)',
                          opacity: isPrimary ? 1 : dominant ? 0.95 : 0.78,
                        }}
                      />
                    </div>
                  </div>
                  <span className="sr-only">{row.percent}%</span>
                </li>
              );
            })}
          </ul>
        </section>
      )}

      {/* ─────────── ACTION ROW ─────────── */}
      <section className="py-8 md:py-10">
        <div className="mb-4 flex flex-wrap items-baseline justify-between gap-3">
          <div className="mono-label" style={{color: 'var(--vermillion)'}}>
            {s(tr, 'actionsKicker', '把这份头版带走')}
          </div>
          <div className="mono-label">{ts('shareResult')}</div>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
          <div className="grid grid-cols-2 gap-3 sm:flex sm:flex-wrap sm:items-center">
            <Link
              href="/test"
              className="inline-flex items-center justify-center gap-2.5 rounded-none px-4 py-3 font-bold transition-[background,transform,box-shadow] duration-200 hover:-translate-y-[1px] sm:px-6"
              style={{
                background: 'var(--vermillion)',
                color: 'var(--paper-soft)',
                boxShadow: '4px 4px 0 0 var(--ink)',
              }}
            >
              <span>{ti('start')}</span>
              <span aria-hidden className="font-heading text-lg leading-none">→</span>
            </Link>
            <Link
              href={`/type/${code}`}
              className="inline-flex items-center justify-center gap-2.5 rounded-none border-2 border-foreground px-4 py-3 font-semibold text-foreground transition-colors duration-200 hover:bg-foreground hover:text-background sm:px-6"
            >
              <span>
                {locale === 'zh'
                  ? '查看人格档案'
                  : locale === 'ja'
                    ? 'タイプ解説を見る'
                    : locale === 'ko'
                      ? '유형 해석 보기'
                      : 'View Type Guide'}
              </span>
            </Link>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {levels && (
              <SaveImageButton
                code={code}
                name={cn}
                description={intro}
                matchLabel={result ? `${result.primary.similarity}%` : '100%'}
                exactHitsLabel={result ? `${result.primary.exact}/15` : '15/15'}
                dimensionsTitle={t('dimensions')}
                dimensions={DIMENSION_ORDER.map((dim) => {
                  const level = levels[dim];
                  return {
                    code: dim,
                    label: td(dim),
                    level,
                    levelLabel: t(`level${level}`),
                  };
                })}
              />
            )}
            <ShareButtons
              url={shareUrl}
              title={`${code} — ${cn}`}
              description={intro}
            />
          </div>
        </div>
      </section>

      <section className="pt-6">
        <BlogCards compact />
      </section>
    </div>
  );
}

export function ResultSharePage({code}: {code: string}) {
  return <ResultSharePageInner code={code} />;
}
