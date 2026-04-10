'use client';

import {useQuizStore} from '@/lib/store';
import {IntroPhase} from './intro-phase';
import {QuizPhase} from './quiz-phase';
import {ResultPhase} from './result-phase';
export function SBTIApp() {
  const phase = useQuizStore((s) => s.phase);

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-background via-background to-muted/40">
      {/* Phases */}
      {phase === 'intro' && <IntroPhase />}
      {phase === 'quiz' && <QuizPhase />}
      {phase === 'result' && <ResultPhase />}
    </div>
  );
}
