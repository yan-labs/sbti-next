import Image from 'next/image';
import {Link} from '@/i18n/navigation';
import {ChapterMark} from '@/components/ui/chapter-mark';
import {ALL_GAMES_V2} from '@/lib/data/games/index';
import type {GameQuizV2, SiteLocale} from '@/lib/data/games/types';

// SEO priority order from docs/research/seo/00-overview.md
const SEO_ORDER = [
  'league-of-legends',
  'valorant',
  'counter-strike-2',
  'honor-of-kings',
  'pubg-battlegrounds',
  'overwatch-2',
  'apex-legends',
  'delta-force',
] as const;

const COPY: Record<SiteLocale, {kicker: string; heading: string; cta: string}> = {
  zh: {kicker: '更多测试', heading: '还有 7 款游戏等你', cta: '开始测试'},
  en: {kicker: 'More quizzes', heading: '7 more games to try', cta: 'Take quiz'},
  ja: {kicker: 'ほかの診断', heading: 'あと7タイトル', cta: '診断する'},
  ko: {kicker: '다른 테스트', heading: '7개 더 있다', cta: '테스트'},
};

interface RelatedGamesProps {
  game: GameQuizV2;
  locale: SiteLocale;
}

export function RelatedGames({game, locale}: RelatedGamesProps) {
  const copy = COPY[locale];

  // Sort all games by SEO priority, skip the current one, take first 3
  const related = SEO_ORDER
    .filter((slug) => slug !== game.slug)
    .map((slug) => ALL_GAMES_V2.find((g) => g.slug === slug))
    .filter((g): g is GameQuizV2 => Boolean(g))
    .slice(0, 3);

  return (
    <section className="py-16 md:py-20" id="related">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10">
          <ChapterMark number="05" kicker={copy.kicker} className="mb-3" />
          <h2 className="font-heading text-3xl font-black text-foreground md:text-4xl">
            {copy.heading}
          </h2>
        </div>

        <div
          className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory md:grid md:grid-cols-3 md:overflow-visible md:pb-0"
          style={{scrollbarWidth: 'none'}}
        >
          {related.map((relGame) => {
            const title = relGame.title[locale];
            const deck = relGame.deck[locale];
            return (
              <Link
                key={relGame.slug}
                data-game={relGame.slug}
                href={`/games/${relGame.slug}`}
                className="group flex shrink-0 w-72 snap-center flex-col overflow-hidden rounded-2xl border border-border/60 bg-card shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md md:w-auto"
              >
                <div className="relative h-36 w-full overflow-hidden">
                  <Image
                    src={`/game-quizzes/${relGame.slug}/cover.png`}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    unoptimized
                  />
                  <div
                    className="absolute inset-0"
                    style={{background: 'linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 60%)'}}
                    aria-hidden
                  />
                  <div className="absolute bottom-2 left-3 flex items-center gap-2">
                    <div className="flex size-7 items-center justify-center rounded-md bg-background/80 p-1 backdrop-blur-sm">
                      <Image
                        src={`/game-logos/${relGame.slug}.png`}
                        alt=""
                        width={18}
                        height={18}
                        className="object-contain"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex flex-1 flex-col gap-2 p-4">
                  <p className="font-heading text-base font-bold text-foreground leading-tight">{title}</p>
                  <p className="text-xs leading-relaxed text-muted-foreground line-clamp-2">{deck}</p>
                  <div className="mt-auto pt-2">
                    <span
                      className="text-xs font-bold"
                      style={{color: 'var(--game-primary, var(--primary))'}}
                    >
                      {copy.cta} →
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
