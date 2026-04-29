import {create} from 'zustand';
import {Question, DimCode, Level, TestResult} from './types';
import {mainQuestions, specialQuestions} from './data/questions';
import {calcDimensionScores, scoresToLevels, determineResult} from './engine';
import {saveResult, HistoryEntry} from './history';

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function insertAtRandom<T>(arr: T[], item: T): T[] {
  const a = [...arr];
  const i = Math.floor(Math.random() * (a.length + 1));
  a.splice(i, 0, item);
  return a;
}

type Phase = 'intro' | 'quiz' | 'result';

interface QuizState {
  phase: Phase;
  queue: Question[];
  current: number;
  answers: Record<string, number>;
  isDrunk: boolean;
  result: TestResult | null;
  userLevels: Record<DimCode, Level> | null;

  startQuiz: () => void;
  answer: (questionId: string, value: number) => void;
  restart: () => void;
  loadFromHistory: (entry: HistoryEntry) => void;
}

export const useQuizStore = create<QuizState>((set, get) => ({
  phase: 'intro',
  queue: [],
  current: 0,
  answers: {},
  isDrunk: false,
  result: null,
  userLevels: null,

  startQuiz: () => {
    const shuffled = shuffle(mainQuestions);
    const drinkQ1 = specialQuestions.find((q) => q.id === 'drink_gate_q1')!;
    const queue = insertAtRandom(shuffled, drinkQ1);
    set({phase: 'quiz', queue, current: 0, answers: {}, isDrunk: false, result: null, userLevels: null});
  },

  answer: (questionId, value) => {
    const state = get();
    const newAnswers = {...state.answers, [questionId]: value};
    let newQueue = state.queue;
    let newDrunk = state.isDrunk;

    // Drink gate logic
    if (questionId === 'drink_gate_q1' && value === 3) {
      const drinkQ2 = specialQuestions.find((q) => q.id === 'drink_gate_q2')!;
      const currentIdx = state.current;
      newQueue = [...state.queue];
      newQueue.splice(currentIdx + 1, 0, drinkQ2);
    }
    if (questionId === 'drink_gate_q2' && value === 2) {
      newDrunk = true;
    }

    const nextIdx = state.current + 1;

    if (nextIdx >= newQueue.length) {
      // Quiz complete
      const scores = calcDimensionScores(newAnswers, [...mainQuestions, ...specialQuestions]);
      const levels = scoresToLevels(scores);
      const result = determineResult(levels, newDrunk);
      saveResult(result, levels, newDrunk);
      set({answers: newAnswers, queue: newQueue, isDrunk: newDrunk, result, userLevels: levels, phase: 'result'});
    } else {
      set({answers: newAnswers, queue: newQueue, isDrunk: newDrunk, current: nextIdx});
    }
  },

  restart: () => {
    get().startQuiz();
  },

  loadFromHistory: (entry) => {
    set({
      result: entry.result,
      userLevels: entry.userLevels,
      isDrunk: entry.isDrunk,
      phase: 'result',
    });
  },
}));
