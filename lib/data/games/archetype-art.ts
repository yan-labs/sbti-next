import { ALL_GAMES_V2 } from './index';
import type { GameQuizV2, ArchetypeV2 } from './types';

/**
 * Static manifest of which `game/archetype` slug pairs have a per-archetype
 * WebP shipped under `/public/game-quizzes/<game>/archetypes/<archetype>.webp`.
 *
 * This MUST be a compile-time constant, not a runtime fs.existsSync() check,
 * because the lookup runs in both server components (Node + fs available)
 * and client components (no fs). A runtime check would resolve to different
 * paths on each side and trigger a React hydration mismatch.
 *
 * Sync this list with `find public/game-quizzes -name "*.webp"` whenever new
 * archetype illustrations land.
 */
const EXISTING_ARCHETYPE_ART = new Set<string>([
  'apex-legends/loot-hermit',
  'apex-legends/pinging-poet',
  'apex-legends/rotation-cartographer',
  'apex-legends/shield-influencer',
  'apex-legends/slide-jump-evangelist',
  'apex-legends/solo-octane',
  'apex-legends/third-party-strategist',
  'apex-legends/wraith-portal-clown',
  'counter-strike-2/arch-cleric',
  'counter-strike-2/awp-cowboy',
  'counter-strike-2/clutch-saint',
  'counter-strike-2/default-igl',
  'counter-strike-2/eco-cfo',
  'counter-strike-2/flash-entry',
  'counter-strike-2/lineup-priest',
  'counter-strike-2/silent-anchor',
  'delta-force/armored-showoff',
  'delta-force/boss-contractor',
  'delta-force/crate-philosopher',
  'delta-force/extract-actuary',
  'delta-force/kit-merchant',
  'delta-force/loadout-romantic',
  'delta-force/recon-foreman',
  'delta-force/whisper-runner',
  'honor-of-kings/bm-ping-mayor',
  'honor-of-kings/defeat-grief-counselor',
  'honor-of-kings/family-host',
  'honor-of-kings/jungle-auditor',
  'honor-of-kings/lane-pressure-artist',
  'honor-of-kings/skin-collector',
  'honor-of-kings/solo-curse',
  'honor-of-kings/teamfight-festival',
  'league-of-legends/aram-comedian',
  'league-of-legends/clutch-evangelist',
  'league-of-legends/flame-conductor',
  'league-of-legends/lane-tyrant',
  'league-of-legends/mute-strategist',
  'league-of-legends/rift-cfo',
  'league-of-legends/solo-victim',
  'league-of-legends/tilt-shepherd',
  'overwatch-2/c9-trauma-curator',
  'overwatch-2/dps-victim',
  'overwatch-2/flanker-monk',
  'overwatch-2/killcam-headliner',
  'overwatch-2/payload-parent',
  'overwatch-2/solo-tank-philosopher',
  'overwatch-2/ult-economist',
  'overwatch-2/voice-line-saboteur',
  'pubg-battlegrounds/circle-aesthete',
  'pubg-battlegrounds/final-pose',
  'pubg-battlegrounds/hot-drop-cfo',
  'pubg-battlegrounds/hot-drop-comedian',
  'pubg-battlegrounds/loot-accountant',
  'pubg-battlegrounds/prone-philosopher',
  'pubg-battlegrounds/ridge-sniper',
  'pubg-battlegrounds/safezone-ferry',
  'valorant/caffeinated-igl',
  'valorant/clutch-narrator',
  'valorant/data-duelist',
  'valorant/instalock-spectator',
  'valorant/lineup-librarian',
  'valorant/sentinel-guardian',
  'valorant/sheriff-economist',
  'valorant/sheriff-mystic',
]);

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
