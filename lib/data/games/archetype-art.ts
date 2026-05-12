import { ALL_GAMES_V2 } from './index';
import type { GameQuizV2, ArchetypeV2 } from './types';

type NodeBuiltins = {
  fs: {existsSync(path: string): boolean};
  path: {join(...paths: string[]): string};
};

function loadBuiltin<T>(id: string): T | undefined {
  if (typeof process !== 'undefined' && typeof process.getBuiltinModule === 'function') {
    return process.getBuiltinModule(id) as T | undefined;
  }

  try {
    const nodeRequire = (0, eval)('typeof require === "function" ? require : undefined') as
      | ((moduleId: string) => unknown)
      | undefined;
    return nodeRequire?.(id) as T | undefined;
  } catch {
    return undefined;
  }
}

function loadNodeBuiltins(): NodeBuiltins | undefined {
  const fs = loadBuiltin<NodeBuiltins['fs']>('fs');
  const path = loadBuiltin<NodeBuiltins['path']>('path');
  if (!fs?.existsSync || !path?.join) return undefined;

  return {fs, path};
}

const nodeBuiltins = loadNodeBuiltins();
const EXISTING_ARCHETYPE_ART = new Set<string>();

if (nodeBuiltins) {
  const archetypeArtRoot = nodeBuiltins.path.join(process.cwd(), 'public', 'game-quizzes');
  for (const game of ALL_GAMES_V2) {
    for (const archetype of game.archetypes) {
      const artPath = nodeBuiltins.path.join(
        archetypeArtRoot,
        game.slug,
        'archetypes',
        `${archetype.slug}.webp`,
      );
      if (nodeBuiltins.fs.existsSync(artPath)) {
        EXISTING_ARCHETYPE_ART.add(`${game.slug}/${archetype.slug}`);
      }
    }
  }
}

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
 * Returns the path to a per-archetype WebP when present; otherwise falls
 * back to the V1 result PNG bucket for the given game + archetype slug.
 * Path shapes:
 *   `/game-quizzes/<gameSlug>/archetypes/<archetypeSlug>.webp`
 *   `/game-quizzes/<gameSlug>/results/<bucket>.png`
 *
 * Returns `undefined` if the game or archetype slug is not found, so callers
 * can provide a fallback image.
 */
export function getArchetypeArt(gameSlug: string, archetypeSlug: string): string | undefined {
  if (EXISTING_ARCHETYPE_ART.has(`${gameSlug}/${archetypeSlug}`)) {
    return `/game-quizzes/${gameSlug}/archetypes/${archetypeSlug}.webp`;
  }

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
