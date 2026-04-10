'use client';

import {useTranslations} from 'next-intl';
import {useQuizStore} from '@/lib/store';
import {Progress} from '@/components/ui/progress';
import {Card, CardContent} from '@/components/ui/card';

export function QuizPhase() {
  const t = useTranslations('quiz');
  const tq = useTranslations('questions');
  const {queue, current, answer} = useQuizStore();
  const question = queue[current];
  if (!question) return null;

  const progress = ((current + 1) / queue.length) * 100;
  const qId = question.id;

  let questionText: string;
  let options: string[];
  try {
    questionText = tq(`${qId}.text`);
    options = question.options.map((_, i) => tq(`${qId}.options.${i}`));
  } catch {
    questionText = question.text;
    options = question.options.map(o => o.label);
  }

  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center px-4">
      <div className="w-full max-w-lg space-y-6">
        {/* Progress */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <span>{t('question', {num: current + 1})}</span>
            <span>{t('progress', {current: current + 1, total: queue.length})}</span>
          </div>
          <Progress value={progress} className="h-1.5" />
        </div>

        {/* Question */}
        <Card className="border-0 bg-card/80 shadow-sm backdrop-blur">
          <CardContent className="space-y-5 pt-6">
            <h2 className="font-heading text-xl font-semibold leading-relaxed">
              {questionText}
            </h2>

            <div className="space-y-2.5">
              {question.options.map((opt, i) => (
                <button
                  key={i}
                  onClick={() => answer(question.id, opt.value)}
                  className="group w-full rounded-xl border border-border/50 bg-background/60 px-4 py-3.5 text-left text-sm transition-all hover:border-primary/30 hover:bg-primary/5 active:scale-[0.98]"
                >
                  <span className="mr-3 inline-flex h-6 w-6 items-center justify-center rounded-md bg-muted text-xs font-semibold text-muted-foreground transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    {String.fromCharCode(65 + i)}
                  </span>
                  {options[i]}
                </button>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
