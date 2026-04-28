/**
 * SBTI Compatibility (궁합) Algorithm
 *
 * Deterministic and symmetric: given any two type codes, always returns the same result
 * regardless of order. Hash is derived from the sorted, concatenated code string.
 */

export type CompatArchetype = 'fated' | 'sync' | 'spicy' | 'plastic' | 'awkward' | 'disaster';

export interface CompatResult {
  score: number;          // 10–99
  archetypeKey: CompatArchetype;
  emoji: string;
}

const ARCHETYPE_EMOJI: Record<CompatArchetype, string> = {
  fated: '💞',
  sync: '✨',
  spicy: '🔥',
  plastic: '🥲',
  awkward: '😬',
  disaster: '💀',
};

function deterministicHash(a: string, b: string): number {
  const sorted = [a, b].sort();
  const str = sorted.join('');
  let h = 0;
  for (let i = 0; i < str.length; i++) {
    h = (h * 31 + str.charCodeAt(i)) | 0;
  }
  return Math.abs(h) % 90 + 10; // [10, 99]
}

function scoreToArchetype(score: number): CompatArchetype {
  if (score >= 90) return 'fated';
  if (score >= 75) return 'sync';
  if (score >= 60) return 'spicy';
  if (score >= 45) return 'plastic';
  if (score >= 30) return 'awkward';
  return 'disaster';
}

export function getCompatibility(codeA: string, codeB: string): CompatResult {
  const score = deterministicHash(codeA, codeB);
  const archetypeKey = scoreToArchetype(score);
  return {
    score,
    archetypeKey,
    emoji: ARCHETYPE_EMOJI[archetypeKey],
  };
}
