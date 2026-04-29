'use client';

import {useEffect} from 'react';
import {useQuizStore} from '@/lib/store';
import {IntroPhase} from './intro-phase';
import {QuizPhase} from './quiz-phase';
import {ResultPhase} from './result-phase';

export function SBTIApp({autoStart = false}: {autoStart?: boolean}) {
  const phase = useQuizStore((s) => s.phase);
  const startQuiz = useQuizStore((s) => s.startQuiz);

  useEffect(() => {
    if (autoStart && phase === 'intro') {
      startQuiz();
    }
  }, [autoStart, phase, startQuiz]);

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-background via-background to-muted/40">
      {/* Phases */}
      {phase === 'intro' && !autoStart && <IntroPhase />}
      {phase === 'quiz' && <QuizPhase />}
      {phase === 'result' && <ResultPhase />}
    </div>
  );
}
