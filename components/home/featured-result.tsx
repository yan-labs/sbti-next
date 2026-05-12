import Image from 'next/image';
import {Link} from '@/i18n/navigation';
import {getGameV2, getArchetype} from '@/lib/data/games';

type Locale = 'zh' | 'en' | 'ja' | 'ko';

const COPY: Record<Locale, {heading: string; sub: string; pct: string; cta: string}> = {
  zh: {
    heading: '真实玩家档案',
    sub: '来自三款游戏的高人气原型，看看别人测出了什么',
    pct: '的玩家是这种类型',
    cta: '查看完整结果库',
  },
  en: {
    heading: 'Real Player Profiles',
    sub: 'Top archetypes from three games — see what others got',
    pct: 'of players are this type',
    cta: 'Browse all results',
  },
  ja: {
    heading: 'リアルなプレイヤーファイル',
    sub: '3タイトルの人気アーキタイプ — 他のプレイヤーの結果を見てみよう',
    pct: 'のプレイヤーがこのタイプ',
    cta: '全タイプ一覧を見る',
  },
  ko: {
    heading: '실제 플레이어 프로필',
    sub: '세 게임의 인기 유형 — 다른 플레이어들의 결과 확인하기',
    pct: '의 플레이어가 이 유형',
    cta: '전체 결과 보기',
  },
};

// Top SEO-priority games × signature archetypes (Phase 0 / 1 picks)
const FEATURED = [
  {gameSlug: 'league-of-legends', archetypeSlug: 'aram-comedian', pct: '12'},
  {gameSlug: 'valorant', archetypeSlug: 'data-duelist', pct: '14'},
  {gameSlug: 'counter-strike-2', archetypeSlug: 'arch-cleric', pct: '11'},
] as const;

interface FeaturedResultProps {
  locale: string;
}

export function FeaturedResult({locale}: FeaturedResultProps) {
  const l = (locale as Locale) in COPY ? (locale as Locale) : 'en';
  const t = COPY[l];

  const cards = FEATURED.map(({gameSlug, archetypeSlug, pct}) => {
    const game = getGameV2(gameSlug);
    if (!game) return null;
    const arch = getArchetype(game, archetypeSlug);
    if (!arch) return null;
    return {game, arch, pct};
  }).filter(Boolean) as {game: NonNullable<ReturnType<typeof getGameV2>>; arch: NonNullable<ReturnType<typeof getArchetype>>; pct: string}[];

  return (
    <section id="featured-result" className="bg-muted/40 py-16 md:py-20">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-10 text-center">
          <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl">
            {t.heading}
          </h2>
          <p className="mt-2 text-sm text-muted-foreground md:text-base">{t.sub}</p>
        </div>

        <div
          className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory md:grid md:grid-cols-3 md:overflow-visible md:pb-0"
          style={{scrollbarWidth: 'none'}}
        >
          {cards.map(({game, arch, pct}) => {
            const gameTitle = game.title[l] ?? game.title.en;
            const archName = arch.name[l] ?? arch.name.en;
            const oneLiner = arch.oneLiner[l] ?? arch.oneLiner.en;

            return (
              <Link
                key={arch.slug}
                data-game={game.slug}
                href={`/games/${game.slug}/result/${arch.slug}`}
                className="group flex shrink-0 w-72 snap-center flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-shadow hover:shadow-md md:w-auto"
              >
                {/* Cover image — full bleed */}
                <div className="relative h-40 w-full overflow-hidden">
                  <Image
                    src={`/game-quizzes/${game.slug}/cover.png`}
                    alt={gameTitle}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                    unoptimized
                  />
                  {/* Dark gradient + game label */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" aria-hidden />
                  <div className="absolute bottom-2 left-3 flex items-center gap-2">
                    <Image
                      src={`/game-logos/${game.slug}.png`}
                      alt=""
                      width={20}
                      height={20}
                      className="rounded bg-white/90 p-0.5 object-contain"
                      loading="lazy"
                    />
                    <p className="font-mono text-xs font-medium text-white/95">{gameTitle}</p>
                  </div>
                </div>

                {/* Body */}
                <div className="flex flex-1 flex-col gap-2 p-4">
                  <p
                    className="font-heading text-lg font-bold leading-tight text-foreground"
                    style={{color: 'var(--game-primary, inherit)'}}
                  >
                    {archName}
                  </p>
                  <p className="text-sm leading-relaxed text-muted-foreground line-clamp-2">{oneLiner}</p>
                  <div className="mt-auto flex items-center gap-2 pt-2">
                    <span className="font-mono text-xs font-semibold text-primary">{pct}%</span>
                    <span className="text-xs text-muted-foreground">{t.pct}</span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/types"
            className="inline-flex h-10 items-center justify-center rounded-xl border border-border bg-background px-6 text-sm font-medium text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            {t.cta}
          </Link>
        </div>
      </div>
    </section>
  );
}
