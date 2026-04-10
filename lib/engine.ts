import {Level, DimCode, TestResult, MatchResult, Question} from './types';
import {DIMENSION_ORDER} from './types';
import {TYPE_LIBRARY, NORMAL_TYPES} from './data/personalities';

const LEVEL_NUMERIC: Record<Level, number> = {L: 1, M: 2, H: 3};
const MAX_DISTANCE = 30;
const FALLBACK_THRESHOLD = 60;

export function calcDimensionScores(
  answers: Record<string, number>,
  questions: Question[]
): Record<DimCode, number> {
  const scores = {} as Record<DimCode, number>;
  for (const dim of DIMENSION_ORDER) scores[dim] = 0;
  for (const q of questions) {
    if (q.dim && answers[q.id] !== undefined) {
      scores[q.dim as DimCode] = (scores[q.dim as DimCode] || 0) + answers[q.id];
    }
  }
  return scores;
}

export function scoresToLevels(scores: Record<DimCode, number>): Record<DimCode, Level> {
  const levels = {} as Record<DimCode, Level>;
  for (const dim of DIMENSION_ORDER) {
    const s = scores[dim];
    if (s <= 3) levels[dim] = 'L';
    else if (s >= 5) levels[dim] = 'H';
    else levels[dim] = 'M';
  }
  return levels;
}

export function parsePattern(pattern: string): Level[] {
  return pattern.replace(/-/g, '').split('') as Level[];
}

function matchType(
  userLevels: Record<DimCode, Level>,
  pattern: string
): {distance: number; exact: number; similarity: number} {
  const patternLevels = parsePattern(pattern);
  let distance = 0;
  let exact = 0;
  for (let i = 0; i < DIMENSION_ORDER.length; i++) {
    const dim = DIMENSION_ORDER[i];
    const diff = Math.abs(LEVEL_NUMERIC[userLevels[dim]] - LEVEL_NUMERIC[patternLevels[i]]);
    distance += diff;
    if (diff === 0) exact++;
  }
  return {distance, exact, similarity: Math.max(0, Math.round((1 - distance / MAX_DISTANCE) * 100))};
}

export function determineResult(
  userLevels: Record<DimCode, Level>,
  isDrunk: boolean
): TestResult {
  const rankings: MatchResult[] = NORMAL_TYPES.map((t) => {
    const {distance, exact, similarity} = matchType(userLevels, t.pattern);
    const info = TYPE_LIBRARY[t.code];
    return {code: t.code, cn: info.cn, intro: info.intro, desc: info.desc, similarity, exact, distance};
  });

  rankings.sort((a, b) => {
    if (a.distance !== b.distance) return a.distance - b.distance;
    if (a.exact !== b.exact) return b.exact - a.exact;
    return b.similarity - a.similarity;
  });

  const best = rankings[0];

  if (isDrunk) {
    const d = TYPE_LIBRARY['DRUNK'];
    return {
      primary: {code: 'DRUNK', cn: d.cn, intro: d.intro, desc: d.desc, similarity: 100, exact: 15, distance: 0},
      secondary: best, rankings, mode: 'drunk',
    };
  }

  if (best.similarity < FALLBACK_THRESHOLD) {
    const f = TYPE_LIBRARY['HHHH'];
    return {
      primary: {code: 'HHHH', cn: f.cn, intro: f.intro, desc: f.desc, similarity: best.similarity, exact: best.exact, distance: best.distance},
      secondary: best, rankings, mode: 'fallback',
    };
  }

  return {primary: best, secondary: null, rankings, mode: 'normal'};
}
