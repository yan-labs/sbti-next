'use client';

import Image from 'next/image';
import {Link} from '@/i18n/navigation';

type Locale = 'zh' | 'en' | 'ja' | 'ko';

const COPY = {
  zh: {
    h1: '你是哪种玩家？',
    sub: '30 道题 · 6 个玩家维度 · 67 种结果 · 4 种语言',
    statA: '30 道题',
    statB: '6 个维度',
    statC: '67 种结果',
    cta: '选你的游戏',
    ctaSub: '看玩家怎么说',
  },
  en: {
    h1: 'What Kind of Player Are You?',
    sub: '30 questions · 6 player dimensions · 67 results · 4 languages',
    statA: '30 Questions',
    statB: '6 Axes',
    statC: '67 Results',
    cta: 'Pick Your Game',
    ctaSub: 'See what players say',
  },
  ja: {
    h1: 'あなたはどんなプレイヤー？',
    sub: '30問 · 6次元 · 67タイプ · 4言語',
    statA: '30問',
    statB: '6次元',
    statC: '67タイプ',
    cta: 'ゲームを選ぶ',
    ctaSub: 'みんなの結果を見る',
  },
  ko: {
    h1: '당신은 어떤 플레이어인가요?',
    sub: '30문항 · 6개 플레이어 축 · 67가지 결과 · 4개 언어',
    statA: '30문항',
    statB: '6개 축',
    statC: '67가지 결과',
    cta: '게임 선택하기',
    ctaSub: '플레이어 후기 보기',
  },
};

const GAME_SLUGS = [
  'league-of-legends',
  'counter-strike-2',
  'valorant',
  'honor-of-kings',
  'pubg-battlegrounds',
  'overwatch-2',
  'apex-legends',
  'delta-force',
] as const;

interface HeroProps {
  locale: string;
}

export function Hero({locale}: HeroProps) {
  const t = COPY[(locale as Locale) in COPY ? (locale as Locale) : 'en'];

  return (
    <section className="relative overflow-hidden bg-background pt-16 pb-20 md:pt-24 md:pb-28">
      {/* Background logo collage */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.06] dark:opacity-[0.08]" aria-hidden>
        <div className="grid grid-cols-4 gap-8 w-full max-w-2xl px-8">
          {GAME_SLUGS.map((slug) => (
            <div key={slug} className="flex items-center justify-center">
              <Image
                src={`/game-logos/${slug}.png`}
                alt=""
                width={80}
                height={80}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Hexagon wireframe SVG */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center" aria-hidden>
        <svg
          width="520"
          height="520"
          viewBox="0 0 520 520"
          fill="none"
          className="opacity-[0.06] dark:opacity-[0.10] animate-[spin_60s_linear_infinite]"
        >
          <polygon
            points="260,20 480,140 480,380 260,500 40,380 40,140"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
          />
          <polygon
            points="260,80 420,170 420,350 260,440 100,350 100,170"
            stroke="currentColor"
            strokeWidth="1"
            fill="none"
          />
        </svg>
      </div>

      <div className="relative mx-auto max-w-4xl px-6 text-center">
        {/* Stats row */}
        <div className="mb-8 flex flex-wrap justify-center gap-x-8 gap-y-2">
          {([t.statA, t.statB, t.statC] as const).map((stat) => (
            <span
              key={stat}
              className="font-mono text-sm font-medium tracking-wide text-primary/80 dark:text-primary/70"
            >
              {stat}
            </span>
          ))}
        </div>

        <h1 className="font-heading text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl">
          {t.h1}
        </h1>

        <p className="mt-5 text-base text-muted-foreground sm:text-lg md:text-xl">
          {t.sub}
        </p>

        <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Link
            href="#game-wall"
            className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-primary px-7 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            {t.cta}
          </Link>
          <Link
            href="#featured-result"
            className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-border bg-background px-7 text-sm font-medium text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            {t.ctaSub}
          </Link>
        </div>
      </div>
    </section>
  );
}
