import Image from 'next/image';
import {Link} from '@/i18n/navigation';
import {getArchetypeArt} from '@/lib/data/games/archetype-art';
import type {GameQuizV2, SiteLocale} from '@/lib/data/games/types';

const COPY: Record<SiteLocale, {kicker: string; heading: string; headingItalic: string}> = {
  zh: {kicker: '01 · 8 个玩家原型', heading: '8 种 ', headingItalic: '玩家原型档案'},
  en: {kicker: '01 · 8 player archetypes', heading: '8 ', headingItalic: 'player archetypes'},
  ja: {kicker: '01 · 8タイプのアーキタイプ', heading: '8タイプの', headingItalic: 'プレイヤーアーキタイプ'},
  ko: {kicker: '01 · 8가지 아키타입', heading: '8가지 ', headingItalic: '플레이어 아키타입'},
};

interface ArchetypeGalleryProps {
  game: GameQuizV2;
  locale: SiteLocale;
}

/**
 * 4-column grid of archetype mini-cards matching the design proposal `.arch`
 * pattern. Portrait + Nº + Fraunces zh name + mono en slug.
 */
export function ArchetypeGallery({game, locale}: ArchetypeGalleryProps) {
  const copy = COPY[locale];

  return (
    <section className="border-b border-border py-16 md:py-20" id="archetypes">
      <div className="mx-auto max-w-[1240px] px-5 md:px-8">
        <header className="mb-10 grid grid-cols-1 items-baseline gap-3 md:grid-cols-[auto_1fr]">
          <div className="mono-label md:col-start-1">{copy.kicker}</div>
          <h2 className="editorial-h2 md:col-span-2">
            {copy.heading}
            <em>{copy.headingItalic}</em>
          </h2>
        </header>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {game.archetypes.map((arch, i) => {
            const arcNo = String(i + 1).padStart(2, '0');
            const artPath = getArchetypeArt(game.slug, arch.slug);
            const name = arch.name[locale];
            return (
              <Link
                key={arch.slug}
                href={`/games/${game.slug}/result/${arch.slug}`}
                aria-label={name}
                className="group relative block border border-border bg-[var(--paper-soft)] p-2.5 pb-3 transition-[transform,border-color,box-shadow] duration-300 ease-[cubic-bezier(.22,.7,.27,1)] hover:-translate-y-0.5 hover:border-[var(--ink)] hover:shadow-[0_12px_26px_-16px_color-mix(in_oklab,var(--ink)_50%,transparent)]"
              >
                <span className="absolute right-3 top-3 z-[2] font-mono text-[9px] uppercase tracking-[0.14em] text-[var(--ink-subtle)]">
                  № {arcNo}
                </span>
                <div
                  className="relative mb-2.5 aspect-square overflow-hidden bg-[var(--paper-deep)]"
                  style={
                    !artPath
                      ? {
                          background:
                            'radial-gradient(circle at 30% 30%, color-mix(in oklab, var(--vermillion) 14%, transparent) 0%, transparent 60%), var(--paper-deep)',
                        }
                      : undefined
                  }
                >
                  {artPath ? (
                    <Image
                      src={artPath}
                      alt=""
                      fill
                      sizes="(max-width: 720px) 50vw, 18vw"
                      className="object-cover transition-[transform,filter] duration-500 ease-[cubic-bezier(.22,.7,.27,1)] group-hover:scale-[1.04]"
                      style={{filter: 'saturate(0.78) contrast(1.02)'}}
                      loading="lazy"
                      unoptimized
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center font-heading text-[40px] text-[var(--ink-subtle)]">
                      —
                    </div>
                  )}
                </div>
                <div
                  className="m-0 mb-0.5 font-heading text-[16px] leading-[1.15] text-foreground transition-colors group-hover:text-[var(--vermillion)]"
                  style={{
                    fontVariationSettings: '"opsz" 144, "wght" 700',
                    letterSpacing: '-0.005em',
                  }}
                >
                  {name}
                </div>
                <div className="font-mono text-[10px] uppercase tracking-[0.12em] text-[var(--ink-muted)]">
                  {arch.slug.replace(/-/g, ' ')}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
