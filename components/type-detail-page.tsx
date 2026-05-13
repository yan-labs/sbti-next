'use client';

import {useTranslations, useLocale} from 'next-intl';
import {TYPE_IMAGES, NORMAL_TYPES} from '@/lib/data/personalities';
import {DIMENSION_ORDER} from '@/lib/types';
import {parsePattern} from '@/lib/engine';
import {Link} from '@/i18n/navigation';
import Image from 'next/image';
import {ChevronRight} from 'lucide-react';
import {ShareButtons} from '@/components/share-buttons';

// Mirror the 27-entry ordering used by the index page, so Nº numbering matches.
const ALL_TYPE_CODES: string[] = [
  ...NORMAL_TYPES.map((t) => t.code),
  'HHHH',
  'DRUNK',
];

const fmtNo = (n: number) => String(n).padStart(3, '0');

// Bucket Nº-based scarcity label — keeps copy varied across the catalog.
// 1-3 → 极罕, 4-10 → 罕见, 11-19 → 不常见, 20+ → 常见/普遍.
type RarityKey = 'veryRare' | 'rare' | 'uncommon' | 'common';
function rarityKey(no: number): RarityKey {
  if (no <= 3) return 'veryRare';
  if (no <= 10) return 'rare';
  if (no <= 19) return 'uncommon';
  return 'common';
}

export function TypeDetailPage({code}: {code: string}) {
  const t = useTranslations('result');
  const ts = useTranslations('share');
  const td = useTranslations('typeDetail');
  const ti = useTranslations('intro');
  const tp = useTranslations('personalities');
  const tdim = useTranslations('dimensions');
  const tb = useTranslations('breadcrumb');
  const locale = useLocale();

  const s = (fn: (k: string) => string, key: string, fallback: string) => {
    try { return fn(key); } catch { return fallback; }
  };

  const cn = s(tp, `${code}.name`, code);
  const intro = s(tp, `${code}.intro`, '');
  const desc = s(tp, `${code}.desc`, '');
  const imgSrc = TYPE_IMAGES[code];

  const idx = ALL_TYPE_CODES.indexOf(code);
  const no = idx >= 0 ? idx + 1 : 0;
  const rarity = s(td, `rarity.${rarityKey(no || 27)}`, '罕见');

  // Pattern → ordered 15-row L/M/H, plus the raw pattern string for the dossier.
  const typeEntry = NORMAL_TYPES.find((entry) => entry.code === code);
  const patternRaw = typeEntry?.pattern ?? '—';
  const pattern = typeEntry ? parsePattern(typeEntry.pattern) : null;

  // First-letter dropcap split (works for ASCII and CJK alike: take one grapheme).
  const dropcap = desc ? [...desc][0] : '';
  const descBody = desc ? desc.slice(dropcap.length) : '';

  // Related specimens — first 6 that aren't us.
  const related = ALL_TYPE_CODES.filter((c) => c !== code).slice(0, 6);

  return (
    <div>
      {/* ─── Header strip ──────────────────────────────────── */}
      <div className="mx-auto max-w-[1240px] px-5 pt-10 pb-3 md:px-8 md:pt-14">
        <nav
          aria-label="Breadcrumb"
          className="mb-8 flex flex-wrap items-center gap-1 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground"
        >
          <Link href="/" className="transition-colors hover:text-foreground">
            {tb('home')}
          </Link>
          <ChevronRight className="h-3 w-3" />
          <Link href="/types" className="transition-colors hover:text-foreground">
            {tb('types')}
          </Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-foreground">
            {code} · {cn}
          </span>
        </nav>

        <div className="mono-label flex flex-wrap items-baseline justify-between gap-3">
          <span>
            Nº {fmtNo(no || 27)} · {s(td, 'kicker', 'SBTI SPECIMEN PROFILE')}
          </span>
          <span style={{color: 'var(--vermillion)'}}>{rarity}</span>
        </div>

        <h1
          className="font-heading mt-3 mb-1 text-foreground"
          style={{
            fontVariationSettings: '"opsz" 144, "SOFT" 30, "wght" 800',
            fontSize: 'clamp(64px, 9vw, 132px)',
            lineHeight: 0.92,
            letterSpacing: '-0.035em',
          }}
        >
          {code}
          <span style={{color: 'var(--vermillion)'}}>.</span>
        </h1>
        <p
          className="font-heading"
          style={{
            fontStyle: 'italic',
            fontVariationSettings: '"opsz" 144, "SOFT" 90, "wght" 500',
            fontSize: 'clamp(22px, 2.4vw, 32px)',
            color: 'var(--ink-soft, var(--foreground))',
            letterSpacing: '-0.01em',
          }}
        >
          {cn}
        </p>
      </div>

      {/* Rule under masthead */}
      <div className="mx-auto max-w-[1240px] px-5 md:px-8">
        <div className="h-px w-full" style={{background: 'var(--ink)'}} />
        <div className="mt-1 h-px w-full" style={{background: 'var(--ink)', opacity: 0.35}} />
      </div>

      {/* ─── Body: portrait + dossier ──────────────────────── */}
      <div className="mx-auto grid max-w-[1240px] gap-8 px-5 py-10 md:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] md:gap-12 md:px-8 md:py-14">
        {/* Portrait column */}
        <div>
          <div
            className="relative aspect-square w-full overflow-hidden"
            style={{
              background: 'var(--paper-soft)',
              border: '2px solid var(--ink)',
              boxShadow:
                '0 24px 60px -32px color-mix(in oklab, var(--ink) 65%, transparent)',
            }}
          >
            {imgSrc && (
              <Image
                src={imgSrc}
                alt={cn}
                width={720}
                height={720}
                priority
                className="h-full w-full object-cover"
                style={{filter: 'saturate(0.85) contrast(1.04)'}}
              />
            )}
            {/* Vermillion corner ticks — editorial print artifact */}
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

          {/* Facts on File card */}
          <aside
            className="mt-6 p-5"
            style={{
              background: 'var(--paper-deep)',
              border: '2px solid var(--ink)',
            }}
          >
            <div
              className="mono-label mb-3 flex items-center justify-between"
              style={{color: 'var(--vermillion)'}}
            >
              <span>{s(td, 'factsTitle', 'FACTS ON FILE')}</span>
              <span aria-hidden>§ {fmtNo(no || 27)}</span>
            </div>
            <dl className="grid grid-cols-[auto_1fr] gap-x-5 gap-y-2.5 text-sm">
              <dt className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                {s(td, 'fieldCode', 'CODE')}
              </dt>
              <dd className="font-heading font-bold" style={{fontVariationSettings: '"opsz" 144, "wght" 700'}}>
                {code}
              </dd>
              <dt className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                {s(td, 'fieldName', 'NAME')}
              </dt>
              <dd>{cn}</dd>
              <dt className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                {s(td, 'fieldRarity', 'RARITY')}
              </dt>
              <dd style={{color: 'var(--vermillion)'}} className="font-medium">{rarity}</dd>
              <dt className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                {s(td, 'fieldFile', 'FILE Nº')}
              </dt>
              <dd className="font-mono">{fmtNo(no || 27)} / 027</dd>
              <dt className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                {s(td, 'fieldPattern', 'PATTERN')}
              </dt>
              <dd className="font-mono text-[12px]">{patternRaw}</dd>
            </dl>
          </aside>
        </div>

        {/* Copy column */}
        <article>
          {intro && (
            <blockquote
              className="font-heading mb-7 border-l-2 pl-5"
              style={{
                fontStyle: 'italic',
                fontVariationSettings: '"opsz" 144, "SOFT" 90, "wght" 500',
                fontSize: 'clamp(22px, 2.4vw, 30px)',
                lineHeight: 1.3,
                color: 'var(--ink-soft, var(--foreground))',
                borderColor: 'var(--vermillion)',
              }}
            >
              {intro}
            </blockquote>
          )}

          <div
            className="mono-label mb-3"
            style={{color: 'var(--vermillion)'}}
          >
            {s(td, 'analysisKicker', '01 · 该样本的人格档案')}
          </div>
          <h2
            className="font-heading mb-5 text-foreground"
            style={{
              fontVariationSettings: '"opsz" 144, "wght" 700',
              fontSize: 'clamp(26px, 2.8vw, 36px)',
              lineHeight: 1.15,
              letterSpacing: '-0.015em',
            }}
          >
            {s(td, 'analysisTitle', '关于这种荒诞类型')}
          </h2>

          {desc && (
            <div
              className="text-[16px] leading-[1.7] md:text-[17px]"
              style={{color: 'var(--ink-soft, var(--foreground))'}}
            >
              <span
                className="font-heading float-left mr-2.5 mt-1 leading-[0.85]"
                style={{
                  fontVariationSettings: '"opsz" 144, "SOFT" 30, "wght" 800',
                  fontSize: '5.5em',
                  color: 'var(--vermillion)',
                  letterSpacing: '-0.04em',
                }}
              >
                {dropcap}
              </span>
              {descBody}
            </div>
          )}

          {/* Dimension pattern bars */}
          {pattern && (
            <div className="mt-12">
              <div
                className="mono-label mb-3"
                style={{color: 'var(--vermillion)'}}
              >
                {s(td, 'dimensionsKicker', '02 · 十五维度画像')}
              </div>
              <h3
                className="font-heading mb-5 text-foreground"
                style={{
                  fontVariationSettings: '"opsz" 144, "wght" 700',
                  fontSize: 'clamp(22px, 2.2vw, 28px)',
                  lineHeight: 1.2,
                  letterSpacing: '-0.012em',
                }}
              >
                {s(td, 'dimensionsTitle', '该类型的轴线分布')}
              </h3>
              <ul className="grid gap-2.5 sm:grid-cols-2">
                {DIMENSION_ORDER.map((dim, i) => {
                  const level = pattern[i];
                  const percent = level === 'L' ? 33 : level === 'M' ? 66 : 100;
                  return (
                    <li
                      key={dim}
                      className="flex items-center gap-3 border-b py-2"
                      style={{borderColor: 'var(--border)'}}
                    >
                      <span className="font-mono w-9 shrink-0 text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                        {dim}
                      </span>
                      <span className="min-w-0 flex-1 truncate text-[13px] font-medium">
                        {tdim(dim)}
                      </span>
                      <div
                        className="h-1.5 w-20 overflow-hidden shrink-0"
                        style={{background: 'var(--paper-deep)'}}
                      >
                        <div
                          className="h-full"
                          style={{
                            width: `${percent}%`,
                            background:
                              level === 'H' ? 'var(--vermillion)' : 'var(--ink)',
                            opacity: level === 'L' ? 0.45 : level === 'M' ? 0.75 : 1,
                          }}
                        />
                      </div>
                      <span
                        className="font-mono w-6 shrink-0 text-right text-[11px] font-bold"
                        style={{
                          color:
                            level === 'H'
                              ? 'var(--vermillion)'
                              : 'var(--ink-muted, var(--muted-foreground))',
                        }}
                      >
                        {t(`level${level}`)}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}

          {/* Share row */}
          <div className="mt-10">
            <p className="mono-label mb-2">{ts('shareType')}</p>
            <ShareButtons
              url={`/${locale}/type/${code}`}
              title={`${code} — ${cn}`}
              description={intro}
            />
          </div>
        </article>
      </div>

      {/* ─── Related specimens ─────────────────────────────── */}
      <section
        className="border-t border-b"
        style={{borderColor: 'var(--border)', background: 'var(--paper-deep)'}}
      >
        <div className="mx-auto max-w-[1240px] px-5 py-12 md:px-8 md:py-16">
          <header className="mb-8 flex flex-wrap items-baseline justify-between gap-3">
            <div>
              <div className="mono-label mb-2">
                {s(td, 'relatedKicker', 'FILED ALONGSIDE · 同柜样本')}
              </div>
              <h2
                className="font-heading text-foreground"
                style={{
                  fontVariationSettings: '"opsz" 144, "wght" 700',
                  fontSize: 'clamp(26px, 3vw, 40px)',
                  lineHeight: 1.05,
                  letterSpacing: '-0.02em',
                  margin: 0,
                }}
              >
                {s(td, 'relatedTitle', '其他')}
                <em
                  className="not-italic ml-1.5"
                  style={{
                    fontStyle: 'italic',
                    fontVariationSettings: '"opsz" 144, "SOFT" 90, "wght" 700',
                    color: 'var(--vermillion)',
                  }}
                >
                  {s(td, 'relatedTitleEm', '荒诞样本')}
                </em>
              </h2>
            </div>
            <Link
              href="/types"
              className="font-mono pb-0.5 text-[12px] uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-foreground"
              style={{borderBottom: '1px solid var(--ink-muted, currentColor)'}}
            >
              {s(td, 'viewAll', '查看全部 27 件 →')}
            </Link>
          </header>

          <ul role="list" className="grid grid-cols-3 gap-3 sm:grid-cols-6">
            {related.map((rc) => {
              const rIdx = ALL_TYPE_CODES.indexOf(rc);
              const rNo = rIdx >= 0 ? rIdx + 1 : 0;
              const rCn = s(tp, `${rc}.name`, rc);
              const rImg = TYPE_IMAGES[rc];
              return (
                <li key={rc}>
                  <Link
                    href={`/type/${rc}`}
                    className="group relative block bg-card p-2 pb-3 transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-[2px] hover:border-foreground"
                    style={{border: '1px solid var(--border)'}}
                  >
                    <span
                      aria-hidden
                      className="absolute right-2.5 top-2 z-[2] font-mono text-[9px] tracking-[0.14em]"
                      style={{color: 'var(--ink-subtle, var(--muted-foreground))'}}
                    >
                      Nº {fmtNo(rNo || 27)}
                    </span>
                    <div
                      className="relative mb-2.5 aspect-square overflow-hidden"
                      style={{background: 'var(--paper-deep)'}}
                    >
                      {rImg && (
                        <Image
                          src={rImg}
                          alt={rCn}
                          width={240}
                          height={240}
                          className="h-full w-full object-cover transition-[filter,transform] duration-500 group-hover:scale-[1.04]"
                          style={{filter: 'saturate(0.78) contrast(1.02)'}}
                        />
                      )}
                    </div>
                    <p
                      className="font-heading m-0 leading-none transition-colors duration-300 group-hover:text-primary"
                      style={{
                        fontVariationSettings: '"opsz" 144, "wght" 700',
                        fontSize: 18,
                        letterSpacing: '-0.01em',
                      }}
                    >
                      {rc}
                      <span style={{color: 'var(--vermillion)'}}>.</span>
                    </p>
                    <p
                      className="mt-1 text-[12px] font-medium"
                      style={{color: 'var(--ink-muted, var(--muted-foreground))'}}
                    >
                      {rCn}
                    </p>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────────────────── */}
      <div className="mx-auto max-w-[1240px] px-5 py-14 text-center md:px-8 md:py-20">
        <p
          className="font-heading mx-auto max-w-[28ch]"
          style={{
            fontVariationSettings: '"opsz" 144, "SOFT" 60, "wght" 600',
            fontSize: 'clamp(22px, 2.4vw, 32px)',
            lineHeight: 1.2,
            letterSpacing: '-0.015em',
          }}
        >
          {s(td, 'ctaLead', '不是这一种？')}
          <em
            className="not-italic ml-1.5"
            style={{
              fontStyle: 'italic',
              fontVariationSettings: '"opsz" 144, "SOFT" 90, "wght" 700',
              color: 'var(--vermillion)',
            }}
          >
            {s(td, 'ctaLeadEm', '去测测你自己。')}
          </em>
        </p>
        <Link
          href="/test"
          className="mt-6 inline-flex items-center gap-2.5 rounded-full bg-foreground px-7 py-3.5 font-semibold text-background transition-[background,transform] duration-200 hover:bg-primary hover:-translate-y-[1px]"
        >
          <span>{ti('start')}</span>
          <span aria-hidden className="font-heading text-lg leading-none">→</span>
        </Link>
      </div>
    </div>
  );
}
