'use client';

import {useMemo, useState} from 'react';
import Image from 'next/image';
import {ArrowRight, RotateCcw, Share2, Sparkles} from 'lucide-react';
import {Badge} from '@/components/ui/badge';
import {Button} from '@/components/ui/button';
import {Card, CardContent} from '@/components/ui/card';
import {Progress} from '@/components/ui/progress';
import {ShareButtons} from '@/components/share-buttons';
import {Link} from '@/i18n/navigation';
import {type GameQuiz, localize, type SiteLocale} from '@/lib/data/game-quizzes';

const UI_COPY: Record<
  SiteLocale,
  {
    question: string;
    progress: (current: number, total: number) => string;
    resultKicker: string;
    traits: string;
    restart: string;
    share: string;
  }
> = {
  zh: {
    question: '第',
    progress: (current, total) => `${current} / ${total}`,
    resultKicker: '你的玩家身份',
    traits: '明显症状',
    restart: '重新测试',
    share: '分享结果',
  },
  en: {
    question: 'Q',
    progress: (current, total) => `${current} / ${total}`,
    resultKicker: 'Your Player Identity',
    traits: 'Symptoms',
    restart: 'Retake',
    share: 'Share Result',
  },
  ja: {
    question: '第',
    progress: (current, total) => `${current} / ${total}`,
    resultKicker: 'あなたのプレイヤータイプ',
    traits: 'よく出る症状',
    restart: 'もう一度',
    share: '結果を共有',
  },
  ko: {
    question: 'Q',
    progress: (current, total) => `${current} / ${total}`,
    resultKicker: '당신의 플레이어 유형',
    traits: '주요 증상',
    restart: '다시 테스트',
    share: '결과 공유',
  },
};

function emptyScores(game: GameQuiz) {
  return Object.fromEntries(game.results.map((result) => [result.id, 0]));
}

function pickWinningResult(game: GameQuiz, scores: Record<string, number>) {
  return [...game.results].sort((a, b) => {
    const scoreDiff = (scores[b.id] ?? 0) - (scores[a.id] ?? 0);
    if (scoreDiff !== 0) return scoreDiff;
    return game.results.findIndex((result) => result.id === a.id) - game.results.findIndex((result) => result.id === b.id);
  })[0];
}

export function GameQuizApp({game, locale}: {game: GameQuiz; locale: string}) {
  const safeLocale = (locale === 'zh' || locale === 'ja' || locale === 'ko' || locale === 'en' ? locale : 'en') as SiteLocale;
  const copy = UI_COPY[safeLocale];
  const [current, setCurrent] = useState(0);
  const [scores, setScores] = useState<Record<string, number>>(() => emptyScores(game));
  const [resultId, setResultId] = useState<string | null>(null);
  const currentQuestion = game.questions[current];
  const result = useMemo(
    () => resultId ? game.results.find((item) => item.id === resultId) ?? null : null,
    [game.results, resultId],
  );
  const progress = result ? 100 : ((current + 1) / game.questions.length) * 100;
  const gameTitle = localize(game.title, safeLocale);

  const answer = (targetResultId: string) => {
    const nextScores = {...scores, [targetResultId]: (scores[targetResultId] ?? 0) + 1};
    if (current + 1 >= game.questions.length) {
      setScores(nextScores);
      setResultId(pickWinningResult(game, nextScores).id);
      return;
    }
    setScores(nextScores);
    setCurrent((value) => value + 1);
  };

  const restart = () => {
    setCurrent(0);
    setScores(emptyScores(game));
    setResultId(null);
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-background via-background to-muted/40 px-4 py-16">
      <section className="mx-auto w-full max-w-3xl space-y-6">
        <div className="space-y-3 text-center">
          <Badge variant="outline" className="rounded-full border-primary/20 bg-primary/10 px-3 py-1 text-primary">
            <Sparkles className="size-3.5" aria-hidden="true" />
            {localize(game.genre, safeLocale)}
          </Badge>
          <h1 className="font-heading text-4xl font-black tracking-tight sm:text-5xl">{gameTitle}</h1>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-muted-foreground">
            {localize(game.description, safeLocale)}
          </p>
        </div>

        {game.cover && (
          <div className="overflow-hidden rounded-2xl border border-border/60 bg-card shadow-sm">
            <Image
              src={game.cover.src}
              alt={localize(game.cover.alt, safeLocale)}
              width={720}
              height={960}
              className="mx-auto h-auto max-h-[40rem] max-w-full"
              priority
              unoptimized
            />
          </div>
        )}

        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm font-medium text-muted-foreground">
            <span>{result ? copy.resultKicker : `${copy.question}${current + 1}`}</span>
            <span>{copy.progress(result ? game.questions.length : current + 1, game.questions.length)}</span>
          </div>
          <Progress value={progress} className="h-1.5" />
        </div>

        {!result && currentQuestion && (
          <Card className="border-0 bg-card/85 shadow-sm">
            <CardContent className="space-y-5 p-5 sm:p-6">
              {currentQuestion.illustration && (
                <Image
                  src={currentQuestion.illustration.src}
                  alt={localize(currentQuestion.illustration.alt, safeLocale)}
                  width={720}
                  height={960}
                  className="mx-auto h-auto max-h-[34rem] max-w-full rounded-xl border border-border/60"
                  unoptimized
                />
              )}
              <h2 className="font-heading text-2xl font-black leading-snug">
                {localize(currentQuestion.text, safeLocale)}
              </h2>
              <div className="space-y-3">
                {currentQuestion.options.map((item, index) => (
                  <button
                    key={`${currentQuestion.id}-${index}`}
                    type="button"
                    data-quiz-option={index}
                    onClick={() => answer(item.resultId)}
                    className="group flex w-full items-center gap-3 rounded-xl border border-border/60 bg-background/70 px-4 py-3.5 text-left text-base transition-all hover:border-primary/30 hover:bg-primary/5 active:scale-[0.99]"
                  >
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-muted text-xs font-bold text-muted-foreground transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      {String.fromCharCode(65 + index)}
                    </span>
                    <span className="leading-relaxed">{localize(item.label, safeLocale)}</span>
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {result && (
          <Card className="overflow-hidden border-0 bg-card shadow-sm">
            <CardContent className="space-y-6 p-5 sm:p-7">
              <div className="space-y-3 text-center">
                {result.image && (
                  <Image
                    src={result.image.src}
                    alt={localize(result.image.alt, safeLocale)}
                    width={720}
                    height={720}
                    className="mx-auto aspect-square w-full max-w-xs rounded-2xl border border-border/60 object-contain shadow-sm"
                    priority
                    unoptimized
                  />
                )}
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">
                  {copy.resultKicker}
                </p>
                <div className="space-y-2">
                  <h2 className="font-heading text-4xl font-black leading-tight tracking-tight">
                    {localize(result.title, safeLocale)}
                  </h2>
                  <Badge variant="secondary" className="rounded-full px-3 py-1">
                    {localize(result.badge, safeLocale)}
                  </Badge>
                </div>
                <p className="mx-auto max-w-2xl text-lg leading-relaxed text-foreground/78">
                  {localize(result.description, safeLocale)}
                </p>
              </div>

              <div className="rounded-xl bg-muted/45 p-4">
                <h3 className="font-heading text-base font-bold">{copy.traits}</h3>
                <div className="mt-3 grid gap-2 sm:grid-cols-3">
                  {result.traits[safeLocale].map((trait) => (
                    <div key={trait} className="rounded-lg bg-background/80 px-3 py-2 text-sm font-medium text-foreground/78">
                      {trait}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-2">
                <Button variant="outline" className="rounded-full" onClick={restart}>
                  <RotateCcw className="size-4" aria-hidden="true" />
                  {copy.restart}
                </Button>
                <div className="flex flex-wrap items-center justify-center gap-2">
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-muted-foreground">
                    <Share2 className="size-4" aria-hidden="true" />
                    {copy.share}
                  </span>
                  <ShareButtons
                    url={`/games/${game.slug}`}
                    title={`${gameTitle}: ${localize(result.title, safeLocale)}`}
                    description={localize(result.description, safeLocale)}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        )}

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
