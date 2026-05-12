import Image from 'next/image';
import {Link} from '@/i18n/navigation';
import {TYPE_IMAGES, NORMAL_TYPES} from '@/lib/data/personalities';

type Locale = 'zh' | 'en' | 'ja' | 'ko';

const COPY = {
  zh: {
    h1: '测一下你是哪种人？',
    sub: 'SBTI 27 种荒诞人格类型 — 顺便 8 款游戏专属玩家测试',
    statA: '27 SBTI 类型',
    statB: '8 款游戏',
    statC: '4 种语言',
    ctaPrimary: '开始 SBTI 测试',
    ctaSecondary: '看 8 款游戏玩家测试 →',
    flagshipLabel: '人格测试元祖',
  },
  en: {
    h1: 'Which Type Are You?',
    sub: "SBTI's 27 satirical personality types — plus 8 game-specific player quizzes",
    statA: '27 SBTI Types',
    statB: '8 Games',
    statC: '4 Languages',
    ctaPrimary: 'Take the SBTI Test',
    ctaSecondary: 'Find your game player type →',
    flagshipLabel: 'The original quiz',
  },
  ja: {
    h1: 'あなたはどのタイプ？',
    sub: 'SBTI の27の風刺人格タイプ — ＋8ゲーム別プレイヤータイプ診断も',
    statA: '27 SBTI タイプ',
    statB: '8 ゲーム',
    statC: '4 言語',
    ctaPrimary: 'SBTI テストを始める',
    ctaSecondary: 'ゲーム別プレイヤー診断を見る →',
    flagshipLabel: '元祖性格診断',
  },
  ko: {
    h1: '당신은 어떤 유형?',
    sub: 'SBTI의 27가지 풍자 성격 유형 — 그리고 8개 게임별 플레이어 유형 테스트',
    statA: '27 SBTI 유형',
    statB: '8개 게임',
    statC: '4개 언어',
    ctaPrimary: 'SBTI 테스트 시작',
    ctaSecondary: '게임별 플레이어 유형 보기 →',
    flagshipLabel: '원조 성격 테스트',
  },
} as const;

// 12 SBTI types for the background mosaic (pulled from the 27 normal types).
const COLLAGE_CODES = NORMAL_TYPES.slice(0, 12).map((t) => t.code);

interface HeroProps {
  locale: string;
}

export function Hero({locale}: HeroProps) {
  const l = (locale as Locale) in COPY ? (locale as Locale) : 'en';
  const t = COPY[l];

  return (
    <section className="relative overflow-hidden bg-background pt-14 pb-16 md:pt-20 md:pb-24">
      {/* Background: 4x3 SBTI type collage */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.10] dark:opacity-[0.14]" aria-hidden>
        <div className="grid grid-cols-4 gap-6 w-full max-w-3xl px-8">
          {COLLAGE_CODES.map((code) => {
            const img = TYPE_IMAGES[code];
            if (!img) return null;
            return (
              <div key={code} className="aspect-square overflow-hidden rounded-xl">
                <Image
                  src={img}
                  alt=""
                  width={120}
                  height={120}
                  className="h-full w-full object-cover"
                  priority
                  unoptimized
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* Soft gradient veil to keep text readable over collage */}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background"
        aria-hidden
      />

      <div className="relative mx-auto max-w-3xl px-6 text-center">
        {/* Flagship pill */}
        <div className="mb-5 flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 text-xs font-semibold text-primary">
            <span className="size-1.5 rounded-full bg-primary" aria-hidden />
            {t.flagshipLabel}
          </span>
        </div>

        <h1 className="font-heading text-4xl font-black leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl">
          {t.h1}
        </h1>

        <p className="mt-5 text-base text-muted-foreground sm:text-lg md:text-xl">
          {t.sub}
        </p>

        {/* Stats row */}
        <div className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2">
          {([t.statA, t.statB, t.statC] as const).map((stat) => (
            <span
              key={stat}
              className="font-mono text-xs font-medium tracking-wide text-foreground/60"
            >
              {stat}
            </span>
          ))}
        </div>

        {/* CTAs: primary action is taking the SBTI test */}
        <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Link
            href="/test"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-primary px-8 text-base font-bold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:h-13"
          >
            {t.ctaPrimary}
          </Link>
          <Link
            href="#game-wall"
            className="inline-flex h-11 items-center justify-center gap-1 rounded-xl px-5 text-sm font-semibold text-foreground/80 transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            {t.ctaSecondary}
          </Link>
        </div>
      </div>
    </section>
  );
}
