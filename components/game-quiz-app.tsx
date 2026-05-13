'use client';

import {useState} from 'react';
import Image from 'next/image';
import {ArrowRight, Sparkles} from 'lucide-react';
import {Badge} from '@/components/ui/badge';
import {Button} from '@/components/ui/button';
import {Card, CardContent} from '@/components/ui/card';
import {Progress} from '@/components/ui/progress';
import {GameV2Result} from '@/components/result-phase';
import {Link, useRouter} from '@/i18n/navigation';
import {computeScores, normalize, derivePolarityCode, mapToArchetype} from '@/lib/data/games/scoring';
import type {GameQuizV2, SiteLocale, Axis} from '@/lib/data/games/types';

const UI_COPY: Record<SiteLocale, {
  start: string;
  questionLabel: (n: number, total: number) => string;
  progress: (current: number, total: number) => string;
  deck: string;
}> = {
  zh: {
    start: '开始测试',
    questionLabel: (n, total) => `第 ${n} / ${total} 题`,
    progress: (n, total) => `${n} / ${total}`,
    deck: '测一测',
  },
  en: {
    start: 'Start Quiz',
    questionLabel: (n, total) => `Q ${n} / ${total}`,
    progress: (n, total) => `${n} / ${total}`,
    deck: 'Take the quiz',
  },
  ja: {
    start: '診断スタート',
    questionLabel: (n, total) => `第 ${n} / ${total} 問`,
    progress: (n, total) => `${n} / ${total}`,
    deck: 'テストを受ける',
  },
  ko: {
    start: '테스트 시작',
    questionLabel: (n, total) => `${n} / ${total} 문항`,
    progress: (n, total) => `${n} / ${total}`,
    deck: '테스트하기',
  },
};

type Phase = 'intro' | 'quiz' | 'result';

interface Answer {
  questionId: string;
  optionIndex: number;
}

interface ResultState {
  scores: Record<Axis, number>;
  archetypeSlug: string;
}

export function GameQuizApp({
  game,
  locale,
  initialPhase = 'intro',
}: {
  game: GameQuizV2;
  locale: SiteLocale;
  initialPhase?: 'intro' | 'quiz';
}) {
  const copy = UI_COPY[locale];
  const [phase, setPhase] = useState<Phase>(initialPhase);
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [resultState, setResultState] = useState<ResultState | null>(null);
  const router = useRouter();

  const questions = game.questions;
  const currentQuestion = questions[current];
  const progress = phase === 'result' ? 100 : ((current + 1) / questions.length) * 100;

  const handleAnswer = (optionIndex: number) => {
    const newAnswers = [...answers, {questionId: currentQuestion!.id, optionIndex}];
    if (current + 1 >= questions.length) {
      const raw = computeScores(newAnswers, questions);
      const normalized = normalize(raw, questions);
      const code = derivePolarityCode(normalized);
      const archetype = mapToArchetype(code, game);
      setAnswers(newAnswers);
      // Navigate to canonical archetype result URL so refresh / share both work.
      // The standalone page renders the full editorial result layout.
      router.push(`/games/${game.slug}/result/${archetype.slug}`);
    } else {
      setAnswers(newAnswers);
      setCurrent((n) => n + 1);
    }
  };

  const handleRetake = () => {
    setCurrent(0);
    setAnswers([]);
    setResultState(null);
    setPhase('intro');
  };

  if (phase === 'result' && resultState) {
    const archetype = game.archetypes.find((a) => a.slug === resultState.archetypeSlug);
    if (!archetype) return null;
    return (
      <main className="min-h-screen bg-background px-5 py-16 md:px-8">
        <section className="mx-auto w-full max-w-3xl space-y-6">
          <GameV2Result
            game={game}
            archetype={archetype}
            scores={resultState.scores}
            locale={locale}
            onRetake={handleRetake}
          />
          <div className="flex justify-center">
            <Link href="/" className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-foreground">
              Back to SBTI
              <ArrowRight className="size-3.5" aria-hidden="true" />
            </Link>
          </div>
        </section>
      </main>
    );
  }

  const currentStr = String(current + 1).padStart(2, '0');
  const totalStr = String(questions.length).padStart(2, '0');

  return (
    <main className="min-h-screen bg-background px-5 py-16 md:px-8">
      <section className="mx-auto w-full max-w-2xl">
        {/* Editorial game header — only on intro */}
        {phase === 'intro' && (
          <>
            <div className="mb-7 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              <span className="h-px w-7 bg-muted-foreground" />
              <span className="text-primary">★</span>
              {game.deck[locale]}
            </div>

            <h1 className="font-heading text-[clamp(40px,6vw,72px)] font-bold leading-[0.95] tracking-tight text-foreground">
              {game.title[locale]}
            </h1>

            <p className="mt-6 max-w-[44ch] font-heading text-lg italic text-muted-foreground md:text-xl"
              style={{fontVariationSettings: '"opsz" 144, "SOFT" 95, "wght" 500'}}
            >
              {game.description[locale]}
            </p>

            {game.cover && (
              <div className="mt-10 overflow-hidden border border-border">
                <Image
                  src={game.cover.src}
                  alt={game.cover.alt[locale]}
                  width={720}
                  height={960}
                  className="mx-auto h-auto max-h-[40rem] max-w-full object-cover"
                  priority
                  unoptimized
                />
              </div>
            )}

            <div className="mt-10">
              <button
                type="button"
                onClick={() => setPhase('quiz')}
                className="group inline-flex items-center gap-3 rounded-full bg-primary px-7 py-4 font-sans text-base font-semibold text-primary-foreground shadow-[0_16px_40px_-10px_rgba(0,0,0,0.4)] transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                {copy.start}
                <span className="inline-flex size-7 items-center justify-center rounded-full bg-background text-primary transition-transform group-hover:translate-x-1">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className="size-4" aria-hidden="true"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
                </span>
              </button>
            </div>
          </>
        )}

        {/* Quiz phase — same minimalist editorial pattern as SBTI quiz-phase */}
        {phase === 'quiz' && currentQuestion && (
          <>
            <div className="mb-10 flex items-end justify-between">
              <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                {copy.questionLabel(current + 1, questions.length)}
              </div>
              <div className="flex items-baseline gap-1.5 font-mono text-xs uppercase tracking-[0.18em] text-foreground/70">
                <span className="font-heading text-2xl font-bold leading-none text-foreground" style={{fontVariationSettings: '"opsz" 144, "wght" 700'}}>
                  {currentStr}
                </span>
                <span className="text-muted-foreground">/ {totalStr}</span>
              </div>
            </div>

            <div className="mb-12 h-px bg-border">
              <div className="h-px bg-foreground transition-all duration-300 ease-out" style={{width: `${progress}%`}} />
            </div>

            <h2
              className="font-heading text-[clamp(26px,3.2vw,40px)] font-bold leading-[1.25] tracking-tight text-foreground"
              style={{fontVariationSettings: '"opsz" 144, "SOFT" 30, "wght" 700'}}
            >
              {currentQuestion.text[locale]}
            </h2>

            <div className="mt-10 space-y-3">
              {currentQuestion.options.map((option, idx) => (
                <button
                  key={`${currentQuestion.id}-${idx}`}
                  type="button"
                  data-quiz-option={idx}
                  onClick={() => handleAnswer(idx)}
                  className="group flex w-full items-start gap-5 border border-border bg-card px-6 py-5 text-left transition-all hover:border-foreground hover:bg-muted active:translate-y-[1px]"
                >
                  <span className="font-mono text-[11px] uppercase tracking-[0.18em] leading-[1.5] text-muted-foreground transition-colors group-hover:text-primary">
                    {String.fromCharCode(65 + idx)}
                  </span>
                  <span className="flex-1 font-sans text-base leading-[1.55] text-foreground md:text-[17px]">
                    {option.label[locale]}
                  </span>
                  <span className="-mr-1 mt-0.5 inline-flex size-6 shrink-0 items-center justify-center text-muted-foreground opacity-0 transition-all group-hover:translate-x-1 group-hover:text-primary group-hover:opacity-100">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="size-4" aria-hidden="true"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
                  </span>
                </button>
              ))}
            </div>
          </>
        )}
      </section>
    </main>
  );
}
