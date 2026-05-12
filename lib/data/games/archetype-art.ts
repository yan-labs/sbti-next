import { ALL_GAMES_V2 } from './index';
import type { GameQuizV2, ArchetypeV2 } from './types';

/**
 * Maps a V2 archetype to one of the four V1 result PNG buckets based on
 * how its dominant axes' polarities combine.
 *
 * Bucket rules (applied in priority order):
 *   carry   — all 3 dominant axes are 'high'
 *   planner — all 3 dominant axes are 'low'
 *   support — Bond axis is dominant AND is 'high', AND at least one other dominant is 'high'
 *   chaos   — everything else (typically Mental/Flair high without Bond)
 */
function bucketForArchetype(game: GameQuizV2, archetype: ArchetypeV2): 'carry' | 'planner' | 'support' | 'chaos' {
  const [a0, a1, a2] = game.dominantAxes;
  const p0 = archetype.polarityPattern[a0];
  const p1 = archetype.polarityPattern[a1];
  const p2 = archetype.polarityPattern[a2];

  const allHigh = p0 === 'high' && p1 === 'high' && p2 === 'high';
  const allLow = p0 === 'low' && p1 === 'low' && p2 === 'low';

  if (allHigh) return 'carry';
  if (allLow) return 'planner';

  // Bond is one of the dominant axes and is 'high' → team-anchored role
  const bondIndex = game.dominantAxes.indexOf('Bond');
  if (bondIndex !== -1) {
    const bondPolarity = archetype.polarityPattern['Bond'];
    const polarities = [p0, p1, p2];
    const highCount = polarities.filter((p) => p === 'high').length;
    if (bondPolarity === 'high' && highCount >= 2) return 'support';
  }

  return 'chaos';
}

/**
 * Returns the path to the V1 result PNG for the given game + archetype slug.
 * Path shape: `/game-quizzes/<gameSlug>/results/<bucket>.png`
 *
 * Returns `undefined` if the game or archetype slug is not found, so callers
 * can provide a fallback image.
 */
export function getArchetypeArt(gameSlug: string, archetypeSlug: string): string | undefined {
  const game = ALL_GAMES_V2.find((g) => g.slug === gameSlug);
  if (!game) return undefined;
  const archetype = game.archetypes.find((a) => a.slug === archetypeSlug);
  if (!archetype) return undefined;
  const bucket = bucketForArchetype(game, archetype);
  return `/game-quizzes/${gameSlug}/results/${bucket}.png`;
}

// ── Compile-time sanity check ─────────────────────────────────────────────────
// Verify that every (game, archetype) pair resolves to a valid bucket.
// This runs at module evaluation time in Node/build; a thrown error means a
// data inconsistency, not a runtime edge case.

const VALID_BUCKETS = new Set(['carry', 'planner', 'support', 'chaos']);

for (const game of ALL_GAMES_V2) {
  for (const archetype of game.archetypes) {
    const bucket = bucketForArchetype(game, archetype);
    if (!VALID_BUCKETS.has(bucket)) {
      throw new Error(
        `getArchetypeArt: unexpected bucket "${bucket}" for ${game.slug}/${archetype.slug}`,
      );
    }
  }
}
