'use client';

import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/navigation';
import {NORMAL_TYPES, TYPE_IMAGES} from '@/lib/data/personalities';
import {ChevronRight} from 'lucide-react';
import Image from 'next/image';

// All 27 type codes: 25 normal + HHHH + DRUNK — match the order used in metadata.
const ALL_TYPE_CODES: string[] = [
  ...NORMAL_TYPES.map((t) => t.code),
  'HHHH',
  'DRUNK',
];

const fmtNo = (n: number) => String(n).padStart(3, '0');

export function TypesIndexPage() {
  const t = useTranslations('typesIndex');
  const tp = useTranslations('personalities');
  const tb = useTranslations('breadcrumb');

  const s = (fn: (k: string) => string, key: string, fallback: string) => {
    try { return fn(key); } catch { return fallback; }
  };

  const kicker = s(t, 'kicker', 'ALL 27 · SPECIMENS FILED');
  const filed = s(t, 'filed', 'FILED UNDER · SBTI · Nº 001 → 027');
  const headLead = s(t, 'headLead', '27 种');
  const headEm = s(t, 'headEm', '荒诞人格');
  const headTail = s(t, 'headTail', '，谁是你身边那个？');
  const intro = s(
    t,
    'intro',
    '31 道题，把你归类成 27 种没办法解释给爸妈听的荒诞类型之一。下面是完整档案柜：每一张都是测出来的真实样本。',
  );

  return (
    <div>
      <div className="mx-auto max-w-[1240px] px-5 pt-10 pb-4 md:px-8 md:pt-14">
        <nav
          aria-label="Breadcrumb"
          className="mb-8 flex items-center gap-1 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground"
        >
          <Link href="/" className="transition-colors hover:text-foreground">
            {tb('home')}
          </Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-foreground">{tb('types')}</span>
        </nav>

        {/* Editorial section header — kicker · h2 · right rail */}
        <header className="grid grid-cols-1 items-baseline gap-3 md:grid-cols-[auto_1fr_auto] md:gap-6">
          <div className="mono-label">{kicker}</div>
          <h1
            className="font-heading m-0 text-foreground md:col-span-1 md:col-start-1 md:row-start-2"
            style={{
              fontVariationSettings: '"opsz" 144, "SOFT" 30, "wght" 700',
              fontSize: 'clamp(36px, 5vw, 64px)',
              lineHeight: 0.96,
              letterSpacing: '-0.02em',
              maxWidth: '20ch',
            }}
          >
            {headLead}
            <em
              className="not-italic"
              style={{
                fontStyle: 'italic',
                fontVariationSettings: '"opsz" 144, "SOFT" 90, "wght" 700',
                color: 'var(--vermillion)',
                letterSpacing: '-0.025em',
              }}
            >
              {headEm}
            </em>
            {headTail}
          </h1>
          <div className="mono-label text-right md:col-start-3 md:row-start-1 md:row-span-2 md:self-end whitespace-pre-line">
            {filed}
          </div>
        </header>

        <p
          className="mt-6 max-w-[58ch] text-[15px] leading-[1.6] md:text-base"
          style={{color: 'var(--ink-soft, var(--foreground))'}}
        >
          {intro}
        </p>
      </div>

      {/* Grid section — alt paper-deep band to set the cards apart */}
      <section className="border-t border-b border-border bg-muted/55">
        <div className="mx-auto max-w-[1240px] px-5 py-12 md:px-8 md:py-16">
          <ul
            role="list"
            className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 md:gap-3.5 lg:grid-cols-6"
          >
            {ALL_TYPE_CODES.map((code, i) => {
              const cn = s(tp, `${code}.name`, code);
              const oneLiner = s(tp, `${code}.intro`, '');
              const img = TYPE_IMAGES[code];
              return (
                <li key={code}>
                  <Link
                    href={`/type/${code}`}
                    className="type-card group relative block bg-card p-2.5 pb-3.5 transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-[3px] hover:border-foreground hover:shadow-[0_14px_28px_-18px_color-mix(in_oklab,var(--ink)_60%,transparent)]"
                    style={{border: '1px solid var(--border)'}}
                  >
                    <span
                      aria-hidden
                      className="absolute right-3 top-3 z-[2] font-mono text-[9px] tracking-[0.14em]"
                      style={{color: 'var(--ink-subtle, var(--muted-foreground))'}}
                    >
                      Nº {fmtNo(i + 1)}
                    </span>
                    <div
                      className="relative mb-3 aspect-square overflow-hidden"
                      style={{background: 'var(--paper-deep)'}}
                    >
                      {img && (
                        <Image
                          src={img}
                          alt={cn}
                          width={384}
                          height={384}
                          className="type-card-img h-full w-full object-cover transition-[filter,transform] duration-[450ms] group-hover:scale-[1.04]"
                          style={{filter: 'saturate(0.78) contrast(1.02)'}}
                        />
                      )}
                    </div>
                    <div className="px-0.5">
                      <p
                        className="type-card-code font-heading m-0 leading-none transition-colors duration-300 group-hover:text-primary"
                        style={{
                          fontVariationSettings: '"opsz" 144, "wght" 700',
                          fontSize: 22,
                          letterSpacing: '-0.01em',
                        }}
                      >
                        {code}
                        <span style={{color: 'var(--vermillion)'}}>.</span>
                      </p>
                      <p
                        className="mt-1 text-[13px] font-medium"
                        style={{color: 'var(--ink-muted, var(--muted-foreground))'}}
                      >
                        {cn}
                      </p>
                      {oneLiner && (
                        <p
                          className="mt-1.5 line-clamp-2 text-[12px] leading-[1.45]"
                          style={{color: 'var(--ink-subtle, var(--muted-foreground))'}}
                        >
                          {oneLiner}
                        </p>
                      )}
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* Trailing rule + CTA back to test */}
      <div className="mx-auto max-w-[1240px] px-5 py-12 md:px-8 md:py-16">
        <div className="flex flex-col items-center gap-5 text-center">
          <p
            className="font-heading max-w-[28ch]"
            style={{
              fontVariationSettings: '"opsz" 144, "SOFT" 60, "wght" 600',
              fontSize: 'clamp(22px, 2.4vw, 30px)',
              lineHeight: 1.2,
              letterSpacing: '-0.015em',
            }}
          >
            {s(t, 'ctaLine', '不知道你是哪一种？')}
            <em
              className="not-italic ml-1.5"
              style={{
                fontStyle: 'italic',
                fontVariationSettings: '"opsz" 144, "SOFT" 90, "wght" 700',
                color: 'var(--vermillion)',
              }}
            >
              {s(t, 'ctaLineEm', '去测一下。')}
            </em>
          </p>
          <Link
            href="/test"
            className="inline-flex items-center gap-2.5 rounded-full bg-foreground px-6 py-3.5 font-semibold text-background transition-[background,transform] duration-200 hover:bg-primary hover:-translate-y-[1px]"
          >
            <span>{s(t, 'ctaButton', '开始 31 题测试')}</span>
            <span aria-hidden className="font-heading text-lg leading-none">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
