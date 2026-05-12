import Image from 'next/image';
import {Link} from '@/i18n/navigation';
import {PaperGrain} from '@/components/ui/paper-grain';
import type {GameQuizV2, SiteLocale} from '@/lib/data/games/types';

const STAT_COPY: Record<SiteLocale, {questions: string; archetypes: string; axes: string; languages: string; cta: string; kicker: string}> = {
  zh: {
    questions: '题',
    archetypes: '个原型',
    axes: '维评估',
    languages: '种语言',
    cta: '开始测试',
    kicker: '玩家类型测试',
  },
  en: {
    questions: 'Questions',
    archetypes: 'Archetypes',
    axes: 'Axes',
    languages: 'Languages',
    cta: 'Take the quiz',
    kicker: 'Player type quiz',
  },
  ja: {
    questions: '問',
    archetypes: 'タイプ',
    axes: '軸',
    languages: '言語',
    cta: '診断する',
    kicker: 'プレイヤータイプ診断',
  },
  ko: {
    questions: '문항',
    archetypes: '유형',
    axes: '축',
    languages: '개 언어',
    cta: '테스트 시작',
    kicker: '플레이어 유형 테스트',
  },
};

interface GameHeroProps {
  game: GameQuizV2;
  locale: SiteLocale;
}

export function GameHero({game, locale}: GameHeroProps) {
  const copy = STAT_COPY[locale];
  const title = game.title[locale];
  const deck = game.deck[locale];

  return (
    <section
      className="relative overflow-hidden"
      style={{
        background: 'var(--game-surface, var(--card))',
        color: 'var(--game-ink, var(--card-foreground))',
        minHeight: 'clamp(400px, 60vh, 680px)',
      }}
    >
      <PaperGrain opacity={0.03} />

      {/* Decor pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-5"
        style={{backgroundImage: 'var(--game-decor)', backgroundSize: '300px'}}
        aria-hidden
      />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-8 px-6 py-16 md:flex-row md:items-stretch md:gap-12 md:py-20">
        {/* Cover image — left 55% */}
        {game.cover && (
          <div className="w-full shrink-0 md:w-[55%]">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl" style={{aspectRatio: '4/3'}}>
              <Image
                src={game.cover.src}
                alt={game.cover.alt[locale]}
                fill
                className="object-cover"
                priority
                unoptimized
              />
              {/* Dark edge veil */}
              <div
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(135deg, transparent 50%, color-mix(in srgb, var(--game-surface) 60%, transparent) 100%)',
                }}
                aria-hidden
              />
            </div>
          </div>
        )}

        {/* Right column — kicker + H1 + deck + stats + CTA */}
        <div className="flex w-full flex-col justify-center gap-6 md:w-[45%]">
          {/* Game logo + kicker */}
          <div className="flex items-center gap-3">
            <Image
              src={`/game-logos/${game.slug}.png`}
              alt=""
              width={32}
              height={32}
              className="rounded-lg object-contain"
              unoptimized
            />
            <p
              className="text-xs font-bold uppercase tracking-widest"
              style={{color: 'var(--game-primary, var(--primary))'}}
            >
              {copy.kicker}
            </p>
          </div>

          <h1
            className="font-heading font-black leading-none tracking-tight"
            style={{fontSize: 'clamp(2.5rem, 7vw, 5rem)', color: 'var(--game-ink, var(--foreground))'}}
          >
            {title}
          </h1>

          <p
            className="text-base leading-relaxed opacity-80 md:text-lg"
            style={{color: 'var(--game-ink, var(--foreground))'}}
          >
            {deck}
          </p>

          {/* Stat row */}
          <div className="flex flex-wrap gap-5">
            {[
              {value: String(game.questions.length), label: copy.questions},
              {value: String(game.archetypes.length), label: copy.archetypes},
              {value: '6', label: copy.axes},
              {value: '4', label: copy.languages},
            ].map(({value, label}) => (
              <div key={label} className="flex flex-col gap-0.5">
                <span
                  className="font-mono text-2xl font-black leading-none"
                  style={{color: 'var(--game-primary, var(--primary))'}}
                >
                  {value}
                </span>
                <span className="text-xs opacity-60" style={{color: 'var(--game-ink, inherit)'}}>
                  {label}
                </span>
              </div>
            ))}
          </div>

          <div>
            <Link
              href={`/games/${game.slug}/play`}
              className="inline-flex items-center justify-center rounded-full px-8 py-3.5 text-base font-bold transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2"
              style={{
                background: 'var(--game-primary, var(--primary))',
                color: 'var(--game-surface, var(--primary-foreground))',
              }}
            >
              {copy.cta}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
