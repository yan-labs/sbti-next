/**
 * Per-game archetype compatibility.
 *
 * Unlike the SBTI flagship `getCompatibility()` which uses a deterministic hash
 * (since the 67 personality codes don't share a structural axis system), game
 * archetypes ALL share the same 6-axis polarityPattern. So we can compute a
 * real, meaningful compatibility based on how many of the 6 axes match.
 *
 * Returns the same shape as `lib/data/compat.ts` so the UI/share helpers can
 * be reused. Result is symmetric: getGameCompatibility(g, a, b) ===
 * getGameCompatibility(g, b, a).
 */

import type {GameQuizV2, ArchetypeV2, Axis} from './types';
import {AXIS_ORDER} from './dimensions';
import type {CompatArchetype, CompatResult} from '@/lib/data/compat';

const ARCHETYPE_EMOJI: Record<CompatArchetype, string> = {
  fated: '💞',
  sync: '✨',
  spicy: '🔥',
  plastic: '🥲',
  awkward: '😬',
  disaster: '💀',
};

/**
 * Base score per (matching axes / 6).
 * 6/6 → fated, 5 → sync, 4 → spicy, 3 → plastic, 2 → awkward, 1 → 0 → disaster.
 * A small jitter (0-9) derived from the sorted slug pair guarantees uniqueness
 * within each tier while keeping the result deterministic and symmetric.
 */
const BASE_BY_MATCHES: Record<number, number> = {
  0: 10,
  1: 18,
  2: 30,
  3: 47,
  4: 62,
  5: 78,
  6: 90,
};

function deterministicJitter(slugA: string, slugB: string): number {
  const sorted = [slugA, slugB].sort().join('|');
  let h = 0;
  for (let i = 0; i < sorted.length; i++) {
    h = (h * 31 + sorted.charCodeAt(i)) | 0;
  }
  return Math.abs(h) % 9; // [0, 8]
}

function scoreToArchetype(score: number): CompatArchetype {
  if (score >= 90) return 'fated';
  if (score >= 75) return 'sync';
  if (score >= 60) return 'spicy';
  if (score >= 45) return 'plastic';
  if (score >= 30) return 'awkward';
  return 'disaster';
}

export interface GameCompatResult extends CompatResult {
  /** How many of the 6 axes share polarity. */
  matches: number;
  /** Per-axis match detail (true = same polarity for both archetypes). */
  axisMatches: Record<Axis, boolean>;
}

export function getGameCompatibility(
  game: GameQuizV2,
  archetypeSlugA: string,
  archetypeSlugB: string,
): GameCompatResult | null {
  const a = game.archetypes.find((x) => x.slug === archetypeSlugA);
  const b = game.archetypes.find((x) => x.slug === archetypeSlugB);
  if (!a || !b) return null;

  const axisMatches = Object.fromEntries(
    AXIS_ORDER.map((axis) => [axis, a.polarityPattern[axis] === b.polarityPattern[axis]]),
  ) as Record<Axis, boolean>;
  const matches = Object.values(axisMatches).filter(Boolean).length;

  const base = BASE_BY_MATCHES[matches] ?? 50;
  const jitter = deterministicJitter(archetypeSlugA, archetypeSlugB);
  // Same-archetype pair → 99% (canonical maximum)
  const score = archetypeSlugA === archetypeSlugB ? 99 : Math.min(99, base + jitter);

  const archetypeKey = scoreToArchetype(score);
  return {
    score,
    archetypeKey,
    emoji: ARCHETYPE_EMOJI[archetypeKey],
    matches,
    axisMatches,
  };
}

/**
 * Enumerate all C(8,2) = 28 unique pairings for a game, sorted by score
 * descending. Useful for generating static pages or "best matches" lists.
 */
export function getAllGamePairings(game: GameQuizV2): Array<{
  a: ArchetypeV2;
  b: ArchetypeV2;
  result: GameCompatResult;
}> {
  const out: Array<{a: ArchetypeV2; b: ArchetypeV2; result: GameCompatResult}> = [];
  for (let i = 0; i < game.archetypes.length; i++) {
    for (let j = i + 1; j < game.archetypes.length; j++) {
      const a = game.archetypes[i]!;
      const b = game.archetypes[j]!;
      const result = getGameCompatibility(game, a.slug, b.slug);
      if (result) out.push({a, b, result});
    }
  }
  return out.sort((x, y) => y.result.score - x.result.score);
}
