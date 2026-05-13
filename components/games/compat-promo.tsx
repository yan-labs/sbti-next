import {Link} from '@/i18n/navigation';
import {getArchetypeArt} from '@/lib/data/games/archetype-art';
import {getAllGamePairings} from '@/lib/data/games/compat';
import Image from 'next/image';
import type {GameQuizV2, SiteLocale} from '@/lib/data/games/types';

type Locale = SiteLocale;

const COPY: Record<Locale, {
  kicker: string;
  headLead: string;
  headEm: string;
  headTail: string;
  dek: string;
  cta: string;
  topPairsLabel: string;
  vs: string;
}> = {
  zh: {
    kicker: '玩家相性 · 28 种组合',
    headLead: '你和队友',
    headEm: '合不合？',
    headTail: '',
    dek: '挑两个原型，看 6 维上你们能对上几个轴。开黑前先来一发，免得开局就掉星。',
    cta: '打开相性测试',
    topPairsLabel: '本周天选 CP',
    vs: '×',
  },
  en: {
    kicker: 'PLAYER COMPATIBILITY · 28 PAIRINGS',
    headLead: 'Will you ',
    headEm: 'sync or clash',
    headTail: '?',
    dek: 'Pick any two archetypes, see how many of the 6 axes overlap. Settle the duo-queue question before your rating tanks.',
    cta: 'Open compat tool',
    topPairsLabel: 'Top fated pairs',
    vs: '×',
  },
  ja: {
    kicker: 'プレイヤー相性 · 28通り',
    headLead: '相性は',
    headEm: '合う？合わない？',
    headTail: '',
    dek: '2つのタイプを選んで、6軸でどれくらい噛み合うか。デュオキューの前にチェック。',
    cta: '相性診断を開く',
    topPairsLabel: '運命のペア',
    vs: '×',
  },
  ko: {
    kicker: '플레이어 궁합 · 28가지 조합',
    headLead: '잘 맞을까',
    headEm: '안 맞을까',
    headTail: '?',
    dek: '두 유형을 골라 6축 중 몇 개가 맞는지 확인. 듀오큐 전에 한 번 체크하세요.',
    cta: '궁합 테스트 열기',
    topPairsLabel: '운명의 페어',
    vs: '×',
  },
};

/**
 * Inline promo on per-game pages: links to the game's compatibility tool with a
 * teaser featuring the top 3 highest-score pairings as social proof.
 */
export function CompatPromo({game, locale}: {game: GameQuizV2; locale: Locale}) {
  const copy = COPY[locale];
  const topPairings = getAllGamePairings(game).slice(0, 3);

  return (
    <section className="border-y border-border bg-muted/40">
      <div className="mx-auto max-w-[1240px] grid gap-10 px-5 py-16 md:grid-cols-[1fr_minmax(0,1.1fr)] md:gap-16 md:px-8 md:py-20">

        {/* LEFT: editorial header + CTA */}
        <div className="flex flex-col justify-center">
          <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-primary">
            {copy.kicker}
          </div>
          <h2
            className="mt-3 font-heading text-foreground"
            style={{
              fontVariationSettings: '"opsz" 144, "SOFT" 30, "wght" 800',
              fontSize: 'clamp(36px, 5vw, 64px)',
              lineHeight: 0.96,
              letterSpacing: '-0.02em',
            }}
          >
            {copy.headLead}
            <em
              className="not-italic"
              style={{
                fontStyle: 'italic',
                fontVariationSettings: '"opsz" 144, "SOFT" 95, "wght" 700',
                color: 'var(--vermillion)',
                letterSpacing: '-0.025em',
              }}
            >
              {copy.headEm}
            </em>
            {copy.headTail}
          </h2>
          <p
            className="mt-5 max-w-[44ch] font-heading text-[17px] italic leading-[1.45] text-muted-foreground md:text-lg"
            style={{fontVariationSettings: '"opsz" 144, "SOFT" 95, "wght" 500'}}
          >
            {copy.dek}
          </p>
          <div className="mt-7">
            <Link
              href={`/games/${game.slug}/compat`}
              className="group inline-flex items-center gap-3 rounded-full bg-primary px-7 py-4 font-sans text-base font-semibold text-primary-foreground shadow-[0_16px_40px_-10px_rgba(0,0,0,0.45)] transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              {copy.cta}
              <span className="inline-flex size-7 items-center justify-center rounded-full bg-background text-primary transition-transform group-hover:translate-x-1">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="size-4"
                  aria-hidden="true"
                >
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
          </div>
        </div>

        {/* RIGHT: top 3 pairings preview */}
        <div className="space-y-4">
          <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
            {copy.topPairsLabel}
          </div>
          {topPairings.map(({a, b, result}, idx) => {
            const artA = getArchetypeArt(game.slug, a.slug);
            const artB = getArchetypeArt(game.slug, b.slug);
            return (
              <Link
                key={`${a.slug}-${b.slug}`}
                href={`/games/${game.slug}/compat/${a.slug}/${b.slug}`}
                className="group flex items-center gap-4 border border-border bg-card p-3 transition-all hover:-translate-y-0.5 hover:border-foreground hover:shadow-[0_14px_28px_-18px_rgba(0,0,0,0.45)] sm:p-4"
              >
                <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                  {String(idx + 1).padStart(2, '0')}
                </div>
                <div className="flex items-center gap-2">
                  {artA && (
                    <Image
                      src={artA}
                      alt={a.name[locale]}
                      width={120}
                      height={120}
                      className="size-12 border border-border bg-muted object-contain sm:size-14"
                      unoptimized
                    />
                  )}
                  <span className="font-heading italic text-primary" style={{fontVariationSettings: '"opsz" 144, "SOFT" 95, "wght" 700'}}>
                    {copy.vs}
                  </span>
                  {artB && (
                    <Image
                      src={artB}
                      alt={b.name[locale]}
                      width={120}
                      height={120}
                      className="size-12 border border-border bg-muted object-contain sm:size-14"
                      unoptimized
                    />
                  )}
                </div>
                <div className="min-w-0 flex-1">
                  <div
                    className="truncate font-heading text-[15px] font-bold tracking-tight text-foreground transition-colors group-hover:text-primary sm:text-base"
                    style={{fontVariationSettings: '"opsz" 144, "wght" 700'}}
                  >
                    {a.name[locale]} <span className="text-muted-foreground/60">×</span> {b.name[locale]}
                  </div>
                  <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                    {result.matches}/6 match · {result.emoji}
                  </div>
                </div>
                <div
                  className="font-heading text-2xl font-bold tabular-nums text-foreground sm:text-3xl"
                  style={{fontVariationSettings: '"opsz" 144, "wght" 800'}}
                >
                  {result.score}
                  <span className="text-primary">%</span>
                </div>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
}
