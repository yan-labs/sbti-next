import {ALL_GAMES_V2} from '@/lib/data/games';
import type {GameSlug} from '@/lib/data/games';
import {GamePosterCard} from './game-poster-card';

type Locale = 'zh' | 'en' | 'ja' | 'ko';

// SEO priority order from docs/research/seo/00-overview.md
const SEO_ORDER: GameSlug[] = [
  'league-of-legends',
  'valorant',
  'counter-strike-2',
  'honor-of-kings',
  'pubg-battlegrounds',
  'overwatch-2',
  'apex-legends',
  'delta-force',
];

const COPY: Record<Locale, {heading: string; sub: string}> = {
  zh: {
    heading: '选你玩的游戏',
    sub: '每款游戏都有独立的圈内题库和 8 种玩家原型',
  },
  en: {
    heading: 'Pick Your Game',
    sub: 'Each title has its own culture-specific questions and 8 player archetypes',
  },
  ja: {
    heading: 'あなたのゲームを選ぼう',
    sub: 'タイトルごとに独自の問題と8つのアーキタイプを用意',
  },
  ko: {
    heading: '게임을 선택하세요',
    sub: '각 타이틀마다 게임 특화 문제와 8가지 플레이어 유형 제공',
  },
};

interface GameWallProps {
  locale: string;
}

export function GameWall({locale}: GameWallProps) {
  const l = (locale as Locale) in COPY ? (locale as Locale) : 'en';
  const t = COPY[l];

  const sorted = SEO_ORDER
    .map((slug) => ALL_GAMES_V2.find((g) => g.slug === slug))
    .filter(Boolean) as typeof ALL_GAMES_V2;

  return (
    <section id="game-wall" className="py-16 md:py-20">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-10 text-center">
          <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl">
            {t.heading}
          </h2>
          <p className="mt-2 text-sm text-muted-foreground md:text-base">{t.sub}</p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-5 lg:gap-6">
          {sorted.map((game, i) => (
            <GamePosterCard key={game.slug} game={game} locale={locale} sortIndex={i + 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
