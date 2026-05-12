'use client';

import {useState} from 'react';
import Image from 'next/image';
import {Link} from '@/i18n/navigation';
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

const BACK_LABEL: Record<Locale, string> = {
  zh: '热门原型',
  en: 'Top Archetypes',
  ja: '人気タイプ',
  ko: '인기 유형',
};

interface GamePosterCardProps {
  game: GameQuizV2;
  locale: string;
  /** Indices of top-3 archetypes to show on flip side */
  featuredIndices?: [number, number, number];
}

export function GamePosterCard({game, locale, featuredIndices = [0, 1, 2]}: GamePosterCardProps) {
  const [flipped, setFlipped] = useState(false);
  const l = (locale as Locale) in META_COPY ? (locale as Locale) : 'en';

  const title = game.title[l] ?? game.title.en;
  const deck = game.deck[l] ?? game.deck.en;
  const meta = META_COPY[l](game.questions.length, game.archetypes.length);
  const cta = CTA_COPY[l];
  const backLabel = BACK_LABEL[l];

  const featured = featuredIndices.map((i) => game.archetypes[i]).filter(Boolean);

  return (
    <div
      data-game={game.slug}
      className="group relative h-72 cursor-pointer select-none md:h-80"
      style={{perspective: '1000px'}}
      onClick={() => setFlipped((f) => !f)}
      onKeyDown={(e) => {if (e.key === 'Enter' || e.key === ' ') setFlipped((f) => !f);}}
      tabIndex={0}
      role="button"
      aria-pressed={flipped}
      aria-label={title}
    >
      {/* Card shell with 3D flip */}
      <div
        className="relative h-full w-full transition-transform duration-500"
        style={{
          transformStyle: 'preserve-3d',
          transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
        }}
      >
        {/* ── FRONT ─────────────────────────────────────────────────────────── */}
        <div
          className="absolute inset-0 overflow-hidden rounded-2xl border border-border/60 shadow-md"
          style={{
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            background: 'var(--game-surface, var(--card))',
            color: 'var(--game-ink, var(--card-foreground))',
          }}
        >
          {/* Decor background (subtle) */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.07]"
            style={{backgroundImage: 'var(--game-decor)', backgroundSize: 'cover', backgroundPosition: 'center'}}
            aria-hidden
          />

          {/* Accent bar */}
          <div
            className="absolute left-0 top-0 h-1 w-full"
            style={{background: 'var(--game-primary, var(--primary))'}}
            aria-hidden
          />

          <div className="relative flex h-full flex-col items-center justify-center gap-4 px-6 py-6">
            {/* Logo */}
            <div className="flex size-16 items-center justify-center">
              <Image
                src={`/game-logos/${game.slug}.png`}
                alt={title}
                width={64}
                height={64}
                className="object-contain drop-shadow-sm"
                loading="lazy"
              />
            </div>

            {/* Title */}
            <h3
              className="font-heading text-xl font-bold leading-tight text-center"
              style={{color: 'var(--game-ink, inherit)'}}
            >
              {title}
            </h3>

            {/* Deck */}
            <p
              className="text-sm text-center leading-snug opacity-80"
              style={{color: 'var(--game-ink, inherit)'}}
            >
              {deck}
            </p>

            {/* Meta */}
            <span
              className="font-mono text-xs font-medium opacity-60"
              style={{color: 'var(--game-ink, inherit)'}}
            >
              {meta}
            </span>
          </div>

          {/* Hover hint */}
          <div className="absolute bottom-3 right-4 opacity-0 transition-opacity duration-200 group-hover:opacity-60 group-focus:opacity-60">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>

        {/* ── BACK ──────────────────────────────────────────────────────────── */}
        <div
          className="absolute inset-0 overflow-hidden rounded-2xl border border-border/60 shadow-md"
          style={{
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
            background: 'var(--game-surface, var(--card))',
            color: 'var(--game-ink, var(--card-foreground))',
          }}
        >
          <div
            className="absolute left-0 top-0 h-1 w-full"
            style={{background: 'var(--game-primary, var(--primary))'}}
            aria-hidden
          />

          <div className="relative flex h-full flex-col gap-3 px-5 py-5">
            <p
              className="font-mono text-xs font-semibold uppercase tracking-wider opacity-60"
              style={{color: 'var(--game-ink, inherit)'}}
            >
              {backLabel}
            </p>

            <div className="flex flex-1 flex-col gap-2">
              {featured.map((arch) => (
                <div
                  key={arch.slug}
                  className="rounded-lg px-3 py-2 text-sm"
                  style={{
                    background: 'color-mix(in srgb, var(--game-primary, var(--primary)) 12%, transparent)',
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
                </div>
              ))}
            </div>

            <Link
              href={`/games/${game.slug}`}
              onClick={(e) => e.stopPropagation()}
              className="mt-1 inline-flex w-full items-center justify-center rounded-xl py-2 text-sm font-semibold transition-opacity hover:opacity-90"
              style={{
                background: 'var(--game-primary, var(--primary))',
                color: 'var(--game-surface, var(--primary-foreground))',
              }}
            >
              {cta}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
