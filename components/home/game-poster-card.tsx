import Image from 'next/image';
import {Link} from '@/i18n/navigation';
import {PaperGrain} from '@/components/ui/paper-grain';
import type {GameQuizV2} from '@/lib/data/games/types';

type Locale = 'zh' | 'en' | 'ja' | 'ko';

const META_COPY: Record<Locale, (q: number, a: number) => string> = {
  zh: (q, a) => `${q} 题 · ${a} 个原型`,
  en: (q, a) => `${q} Questions · ${a} Archetypes`,
  ja: (q, a) => `${q}問 · ${a}タイプ`,
  ko: (q, a) => `${q}문항 · ${a}가지 유형`,
};

const CTA_COPY: Record<Locale, string> = {
  zh: '开始测试',
  en: 'Take the Quiz',
  ja: '診断する',
  ko: '테스트 시작',
};

const TOP_LABEL: Record<Locale, string> = {
  zh: '热门原型',
  en: 'Top Archetypes',
  ja: '人気タイプ',
  ko: '인기 유형',
};

interface GamePosterCardProps {
  game: GameQuizV2;
  locale: string;
  /** Sort order (1-8) used for the corner number on the cover */
  sortIndex?: number;
  /** Indices of top-3 archetypes to show below */
  featuredIndices?: [number, number, number];
}

export function GamePosterCard({
  game,
  locale,
  sortIndex,
  featuredIndices = [0, 1, 2],
}: GamePosterCardProps) {
  const l = (locale as Locale) in META_COPY ? (locale as Locale) : 'en';

  const title = game.title[l] ?? game.title.en;
  const deck = game.deck[l] ?? game.deck.en;
  const meta = META_COPY[l](game.questions.length, game.archetypes.length);
  const cta = CTA_COPY[l];
  const topLabel = TOP_LABEL[l];

  const featured = featuredIndices.map((i) => game.archetypes[i]).filter(Boolean);
  const chapterNum = sortIndex != null ? String(sortIndex).padStart(2, '0') : undefined;

  return (
    <article
      data-game={game.slug}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-border/60 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
      style={{
        background: 'var(--game-surface, var(--card))',
        color: 'var(--game-ink, var(--card-foreground))',
      }}
    >
      <PaperGrain opacity={0.04} />

      {/* ── Cover image (top 200px) ──────────────────────────────────────── */}
      <div className="relative h-48 w-full overflow-hidden md:h-56">
        <Image
          src={`/game-quizzes/${game.slug}/cover.png`}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
          unoptimized
        />
        {/* Gradient veil so any overlaid text stays legible */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'linear-gradient(to bottom, transparent 50%, color-mix(in srgb, var(--game-surface, var(--card)) 90%, transparent) 100%)',
          }}
          aria-hidden
        />
        {/* Game logo (right top corner) */}
        <div className="absolute right-3 top-3 flex size-10 items-center justify-center rounded-lg bg-background/70 p-1.5 shadow-sm backdrop-blur-sm">
          <Image
            src={`/game-logos/${game.slug}.png`}
            alt=""
            width={28}
            height={28}
            className="object-contain"
            loading="lazy"
          />
        </div>
        {/* Chapter number (left top corner) */}
        {chapterNum && (
          <div className="absolute left-3 top-3">
            <span
              className="font-mono text-xs font-black opacity-80 leading-none"
              style={{
                color: 'var(--game-primary, var(--primary))',
                textShadow: '0 1px 3px rgba(0,0,0,0.5)',
              }}
            >
              {chapterNum}
            </span>
          </div>
        )}
      </div>

      {/* Accent bar separating cover from body */}
      <div
        className="h-1 w-full"
        style={{background: 'var(--game-primary, var(--primary))'}}
        aria-hidden
      />

      {/* ── Title + deck + meta ──────────────────────────────────────────── */}
      <div className="relative flex flex-col gap-2 px-5 py-4">
        <h3
          className="font-heading text-xl font-bold leading-tight"
          style={{color: 'var(--game-ink, inherit)'}}
        >
          {title}
        </h3>
        <p
          className="text-sm leading-snug opacity-80"
          style={{color: 'var(--game-ink, inherit)'}}
        >
          {deck}
        </p>
        <span
          className="mt-0.5 font-mono text-[11px] font-medium opacity-60"
          style={{color: 'var(--game-ink, inherit)'}}
        >
          {meta}
        </span>
      </div>

      {/* ── Top archetypes (was the flip back side; now stacked) ─────────── */}
      <div className="relative flex flex-col gap-2 px-5 pb-4">
        <p
          className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] opacity-60"
          style={{color: 'var(--game-ink, inherit)'}}
        >
          {topLabel}
        </p>
        <ul className="flex flex-col gap-1.5">
          {featured.map((arch) => (
            <li
              key={arch.slug}
              className="rounded-lg px-3 py-2 text-sm"
              style={{
                background: 'color-mix(in srgb, var(--game-primary, var(--primary)) 14%, transparent)',
              }}
            >
              <span
                className="font-medium"
                style={{color: 'var(--game-ink, inherit)'}}
              >
                {arch.name[l] ?? arch.name.en}
              </span>
              <p
                className="mt-0.5 text-xs leading-snug opacity-70"
                style={{color: 'var(--game-ink, inherit)'}}
              >
                {arch.oneLiner[l] ?? arch.oneLiner.en}
              </p>
            </li>
          ))}
        </ul>
      </div>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <div className="relative px-5 pb-5">
        <Link
          href={`/games/${game.slug}`}
          className="inline-flex w-full items-center justify-center rounded-xl py-3 text-sm font-bold transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
          style={{
            background: 'var(--game-primary, var(--primary))',
            color: 'var(--game-surface, var(--primary-foreground))',
          }}
        >
          {cta}
        </Link>
      </div>
    </article>
  );
}
