import Image from 'next/image';
import {Link} from '@/i18n/navigation';
import {ChapterMark} from '@/components/ui/chapter-mark';
import {PaperGrain} from '@/components/ui/paper-grain';
import {getArchetypeArt} from '@/lib/data/games/archetype-art';
import {AXES} from '@/lib/data/games/dimensions';
import type {GameQuizV2, SiteLocale} from '@/lib/data/games/types';

const COPY: Record<SiteLocale, {heading: string; kicker: string; viewResult: string}> = {
  zh: {heading: '8 种玩家原型', kicker: '玩家类型', viewResult: '查看详情'},
  en: {heading: '8 Player Archetypes', kicker: 'Player types', viewResult: 'View profile'},
  ja: {heading: '8タイプのプレイヤーアーキタイプ', kicker: 'プレイヤータイプ', viewResult: '詳細を見る'},
  ko: {heading: '8가지 플레이어 유형', kicker: '플레이어 유형', viewResult: '프로필 보기'},
};

interface ArchetypeGalleryProps {
  game: GameQuizV2;
  locale: SiteLocale;
}

export function ArchetypeGallery({game, locale}: ArchetypeGalleryProps) {
  const copy = COPY[locale];

  return (
    <section className="py-16 md:py-20" id="archetypes">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10">
          <ChapterMark number="01" kicker={copy.kicker} className="mb-3" />
          <h2 className="font-heading text-3xl font-black text-foreground md:text-4xl">
            {copy.heading}
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-4 md:gap-5">
          {game.archetypes.map((arch) => {
            const artPath = getArchetypeArt(game.slug, arch.slug);
            const name = arch.name[locale];
            const oneLiner = arch.oneLiner[locale];

            // Polarity badge using canonical axis letters per AXES (Tempo L/R,
            // Nerve C/A, Bond S/T, Intel D/F, Flair U/H, Mental K/B). Brand-
            // consistent with the 6-letter player identity code (e.g. SAB
            // means Bond=low + Nerve=high + Mental=high for aram-comedian).
            const badge = game.dominantAxes
              .map((axis) => {
                const def = AXES.find((a) => a.axis === axis)!;
                return arch.polarityPattern[axis] === 'high' ? def.highLetter : def.lowLetter;
              })
              .join('');

            return (
              <Link
                key={arch.slug}
                href={`/games/${game.slug}/result/${arch.slug}`}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-border/60 bg-card shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:rotate-1 hover:shadow-xl"
                style={{
                  boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
                }}
                aria-label={`${name} — ${oneLiner}`}
              >
                {/* Art image */}
                <div className="relative aspect-square w-full overflow-hidden bg-muted">
                  {artPath ? (
                    <Image
                      src={artPath}
                      alt={name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                      unoptimized
                    />
                  ) : (
                    <div
                      className="flex h-full items-center justify-center text-3xl font-black opacity-20"
                      style={{color: 'var(--game-primary, var(--primary))'}}
                    >
                      ?
                    </div>
                  )}
                  {/* Paper grain on top of image */}
                  <PaperGrain opacity={0.05} />
                  {/* Gradient veil */}
                  <div
                    className="absolute inset-0"
                    style={{background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 50%)'}}
                    aria-hidden
                  />
                  {/* Polarity badge */}
                  <div className="absolute left-2 top-2">
                    <span
                      className="font-mono text-[10px] font-black uppercase tracking-widest rounded px-1.5 py-0.5"
                      style={{
                        background: 'var(--game-primary, var(--primary))',
                        color: 'var(--game-surface, var(--primary-foreground))',
                      }}
                    >
                      {badge}
                    </span>
                  </div>
                </div>

                {/* Body */}
                <div className="relative flex flex-1 flex-col gap-1.5 p-3">
                  <PaperGrain opacity={0.04} />
                  <p className="font-heading text-sm font-black leading-tight text-foreground">
                    {name}
                  </p>
                  <p className="line-clamp-2 text-xs leading-relaxed text-muted-foreground">
                    {oneLiner}
                  </p>
                  {/* Hover glow underline */}
                  <div
                    className="mt-auto h-0.5 w-0 rounded-full transition-all duration-300 group-hover:w-full"
                    style={{background: 'var(--game-primary, var(--primary))'}}
                    aria-hidden
                  />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
