import Image from 'next/image';
import {Link} from '@/i18n/navigation';
import {TYPE_LIBRARY, TYPE_IMAGES} from '@/lib/data/personalities';

type Locale = 'zh' | 'en' | 'ja' | 'ko';

interface TypesWallProps {
  locale: string;
}

const COPY: Record<
  Locale,
  {
    kicker: string;
    rightLineA: string;
    rightLineB: string;
    headLead: string;
    headEm: string;
    headTail: string;
    moreCta: string;
  }
> = {
  zh: {
    kicker: '02 · SBTI 主测试 · 27 种荒诞人格',
    rightLineA: 'FILED UNDER · SBTI',
    rightLineB: 'Nº 001 → 027',
    headLead: '27 种 ',
    headEm: '人格档案',
    headTail: '，谁是你身边那个',
    moreCta: '查看全部 27 件档案',
  },
  en: {
    kicker: '02 · The SBTI Flagship · 27 Absurd Types',
    rightLineA: 'FILED UNDER · SBTI',
    rightLineB: 'Nº 001 → 027',
    headLead: '27 ',
    headEm: 'personality files',
    headTail: ', someone you know is in here',
    moreCta: 'See all 27 files',
  },
  ja: {
    kicker: '02 · SBTI 本編 · 27の風刺タイプ',
    rightLineA: 'FILED UNDER · SBTI',
    rightLineB: 'Nº 001 → 027',
    headLead: '27の',
    headEm: '人格ファイル',
    headTail: '、周りのあいつもどれかにいる',
    moreCta: '27ファイル全部見る',
  },
  ko: {
    kicker: '02 · SBTI 본편 · 27가지 황당 유형',
    rightLineA: 'FILED UNDER · SBTI',
    rightLineB: 'Nº 001 → 027',
    headLead: '27가지 ',
    headEm: '인격 파일',
    headTail: ', 주변 그 사람도 여기 어딘가',
    moreCta: '27개 파일 전부 보기',
  },
};

// Render the 27 types in the order defined by TYPE_LIBRARY
const TYPE_CODES = Object.keys(TYPE_LIBRARY);

export function TypesWall({locale}: TypesWallProps) {
  const l = (locale as Locale) in COPY ? (locale as Locale) : 'en';
  const t = COPY[l];

  return (
    <section
      id="types"
      className="border-b border-border py-24"
      style={{background: 'var(--paper-deep)'}}
    >
      <div className="container mx-auto max-w-[1240px] px-5 md:px-8">
        {/* Section header */}
        <header className="mb-12 grid items-baseline gap-6 md:grid-cols-[auto_1fr_auto]">
          <div className="mono-label md:col-span-2">{t.kicker}</div>
          <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground leading-7 md:row-start-1 md:row-span-2 md:col-start-3 md:text-right self-end">
            {t.rightLineA}
            <br />
            {t.rightLineB}
          </div>
          <h2
            className="font-heading text-foreground m-0 md:col-span-2"
            style={{
              fontVariationSettings: '"opsz" 144, "SOFT" 30, "wght" 700',
              fontSize: 'clamp(36px, 5vw, 64px)',
              lineHeight: 0.96,
              letterSpacing: '-0.02em',
              maxWidth: '18ch',
            }}
          >
            {t.headLead}
            <em
              className="not-italic"
              style={{
                fontStyle: 'italic',
                fontVariationSettings: '"opsz" 144, "SOFT" 90, "wght" 700',
                color: 'var(--vermillion)',
                letterSpacing: '-0.025em',
              }}
            >
              {t.headEm}
            </em>
            {t.headTail}
          </h2>
        </header>

        {/* 27-type grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3.5">
          {TYPE_CODES.map((code, i) => {
            const data = TYPE_LIBRARY[code];
            const img = TYPE_IMAGES[code];
            const no = String(i + 1).padStart(3, '0');
            const cn = data?.cn ?? '';
            return (
              <Link
                key={code}
                href={`/type/${encodeURIComponent(code)}`}
                aria-label={`${code} · ${cn}`}
                className="type-card group relative block border p-2.5 pb-3.5 transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: 'var(--paper-soft)',
                  borderColor: 'var(--border)',
                }}
              >
                <span
                  className="absolute right-3 top-3 z-[2] font-mono"
                  style={{
                    fontSize: 9,
                    letterSpacing: '0.14em',
                    color: 'var(--ink-subtle)',
                  }}
                >
                  Nº {no}
                </span>
                <div
                  className="relative overflow-hidden mb-3 aspect-square"
                  style={{background: 'var(--paper-deep)'}}
                >
                  {img && (
                    <Image
                      src={img}
                      alt={`${code} ${cn} SBTI personality type`}
                      fill
                      sizes="(max-width: 720px) 50vw, (max-width: 1100px) 25vw, 16vw"
                      className="object-cover transition-all duration-500 group-hover:scale-[1.04]"
                      style={{filter: 'saturate(0.78) contrast(1.02)'}}
                      loading="lazy"
                      unoptimized
                    />
                  )}
                </div>
                <h3
                  className="font-heading m-0 mb-0.5 text-foreground transition-colors"
                  style={{
                    fontVariationSettings: '"opsz" 144, "wght" 700',
                    fontSize: 22,
                    lineHeight: 1,
                    letterSpacing: '-0.01em',
                  }}
                >
                  {code}.
                </h3>
                <div className="text-[13px] font-medium text-muted-foreground">{cn}</div>
              </Link>
            );
          })}
        </div>

        {/* Ghost CTA */}
        <div className="mt-10 flex justify-center">
          <Link
            href="/types"
            className="inline-flex items-center gap-1 border-b border-muted-foreground pb-1 font-medium text-foreground transition-colors hover:text-[var(--vermillion)] hover:border-[var(--vermillion)]"
            style={{fontSize: 14}}
          >
            {t.moreCta} <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
      <style>{`
        .type-card:hover {
          border-color: var(--ink);
          box-shadow: 0 14px 28px -18px color-mix(in oklab, var(--ink) 60%, transparent);
        }
        .type-card:hover img {
          filter: saturate(1.05) contrast(1.05) !important;
        }
        .type-card:hover h3 {
          color: var(--vermillion);
        }
      `}</style>
    </section>
  );
}
