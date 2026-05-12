'use client';

import {useState} from 'react';
import Image from 'next/image';
import {ArrowRight, Sparkles} from 'lucide-react';
import {Badge} from '@/components/ui/badge';
import {Button} from '@/components/ui/button';
import {Card, CardContent} from '@/components/ui/card';
import {Progress} from '@/components/ui/progress';
import {GameV2Result} from '@/components/result-phase';
import {Link} from '@/i18n/navigation';
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
      setResultState({scores: normalized, archetypeSlug: archetype.slug});
      setPhase('result');
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
      <main className="min-h-screen bg-gradient-to-b from-background via-background to-muted/40 px-4 py-16">
        <section className="mx-auto w-full max-w-3xl space-y-6">
          <GameV2Result
            game={game}
            archetype={archetype}
            scores={resultState.scores}
            locale={locale}
            onRetake={handleRetake}
          />
          <div className="flex justify-center">
            <Link href="/">
              <Button variant="ghost" className="rounded-full">
                SBTI
                <ArrowRight className="size-4" aria-hidden="true" />
              </Button>
            </Link>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-background via-background to-muted/40 px-4 py-16">
      <section className="mx-auto w-full max-w-3xl space-y-6">
        {/* Game header */}
        <div className="space-y-3 text-center">
          <Badge variant="outline" className="rounded-full border-primary/20 bg-primary/10 px-3 py-1 text-primary">
            <Sparkles className="size-3.5" aria-hidden="true" />
            {game.deck[locale]}
          </Badge>
          <h1 className="font-heading text-4xl font-black tracking-tight sm:text-5xl">
            {game.title[locale]}
          </h1>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-muted-foreground">
            {game.description[locale]}
          </p>
        </div>

        {/* Cover image (intro only) */}
        {phase === 'intro' && game.cover && (
          <div className="overflow-hidden rounded-2xl border border-border/60 bg-card shadow-sm">
            <Image
              src={game.cover.src}
              alt={game.cover.alt[locale]}
              width={720}
              height={960}
              className="mx-auto h-auto max-h-[40rem] max-w-full"
              priority
              unoptimized
            />
          </div>
        )}

        {/* Intro CTA */}
        {phase === 'intro' && (
          <div className="flex justify-center pt-2">
            <Button
              size="lg"
              className="rounded-full px-10 text-base shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30"
              onClick={() => setPhase('quiz')}
            >
              {copy.start}
            </Button>
          </div>
        )}

        {/* Quiz phase */}
        {phase === 'quiz' && currentQuestion && (
          <>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm font-medium text-muted-foreground">
                <span>{copy.questionLabel(current + 1, questions.length)}</span>
                <span>{copy.progress(current + 1, questions.length)}</span>
              </div>
              <Progress value={progress} className="h-1.5" />
            </div>

            <Card className="border-0 bg-card/85 shadow-sm">
              <CardContent className="space-y-5 p-5 sm:p-6">
                <h2 className="font-heading text-2xl font-black leading-snug">
                  {currentQuestion.text[locale]}
                </h2>
                <div className="space-y-3">
                  {currentQuestion.options.map((option, idx) => (
                    <button
                      key={`${currentQuestion.id}-${idx}`}
                      type="button"
                      data-quiz-option={idx}
                      onClick={() => handleAnswer(idx)}
                      className="group flex w-full items-center gap-3 rounded-xl border border-border/60 bg-background/70 px-4 py-3.5 text-left text-base transition-all hover:border-primary/30 hover:bg-primary/5 active:scale-[0.99]"
                    >
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-muted text-xs font-bold text-muted-foreground transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                        {String.fromCharCode(65 + idx)}
                      </span>
                      <span className="leading-relaxed">{option.label[locale]}</span>
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </>
        )}
      </section>
    </main>
  );
}
