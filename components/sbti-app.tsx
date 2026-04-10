'use client';

import {useQuizStore} from '@/lib/store';
import {IntroPhase} from './intro-phase';
import {QuizPhase} from './quiz-phase';
import {ResultPhase} from './result-phase';
import {LocaleSwitcher} from './locale-switcher';

export function SBTIApp() {
  const phase = useQuizStore((s) => s.phase);

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-background via-background to-muted/40">
      {/* Top bar */}
      <header className="fixed right-0 top-0 z-50 p-4">
        <LocaleSwitcher />
      </header>

      {/* Phases */}
      {phase === 'intro' && <IntroPhase />}
      {phase === 'quiz' && <QuizPhase />}
      {phase === 'result' && <ResultPhase />}
    </div>
  );
}
