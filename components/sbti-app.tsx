'use client';

import {useEffect, useRef} from 'react';
import {useQuizStore} from '@/lib/store';
import {useRouter} from '@/i18n/navigation';
import {IntroPhase} from './intro-phase';
import {QuizPhase} from './quiz-phase';
import {ResultPhase} from './result-phase';

export function SBTIApp({autoStart = false}: {autoStart?: boolean}) {
  const phase = useQuizStore((s) => s.phase);
  const result = useQuizStore((s) => s.result);
  const startQuiz = useQuizStore((s) => s.startQuiz);
  const router = useRouter();
  const navigatedRef = useRef(false);

  useEffect(() => {
    if (autoStart && phase === 'intro') {
      startQuiz();
    }
  }, [autoStart, phase, startQuiz]);

  // When the quiz finishes, push the canonical result URL so the page is
  // bookmarkable and refresh-safe. The /result/[code] route renders the full
  // shareable newspaper-style result (matches the v2 design).
  useEffect(() => {
    if (phase === 'result' && result && !navigatedRef.current) {
      navigatedRef.current = true;
      router.replace(`/result/${result.primary.code}`);
    }
    if (phase !== 'result') {
      navigatedRef.current = false;
    }
  }, [phase, result, router]);

  return (
    <div className="relative min-h-screen bg-background">
      {phase === 'intro' && !autoStart && <IntroPhase />}
      {phase === 'quiz' && <QuizPhase />}
      {phase === 'result' && <ResultPhase />}
    </div>
  );
}
