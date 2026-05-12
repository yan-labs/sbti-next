export type {
  SiteLocale,
  LocalizedText,
  Axis,
  Polarity,
  PolarityLetter,
  PolarityCode,
  AxisVote,
  OptionScoring,
  QuestionOption,
  QuestionV2,
  GameQuizAsset,
  ArchetypeV2,
  GameQuizV2,
} from './types';
export { isSiteLocale, localize } from './types';

export type { AxisDefinition } from './dimensions';
export { AXES, axisByLetter, polarityFromScore } from './dimensions';

export { computeScores, normalize, derivePolarityCode, mapToArchetype } from './scoring';

import leagueOfLegends from './league-of-legends';
import counterStrike2 from './counter-strike-2';
import valorant from './valorant';
import deltaForce from './delta-force';
import honorOfKings from './honor-of-kings';
import overwatch2 from './overwatch-2';
import pubgBattlegrounds from './pubg-battlegrounds';
import apexLegends from './apex-legends';
import type { ArchetypeV2, GameQuizV2 } from './types';

export const GAME_SLUGS = [
  'league-of-legends',
  'counter-strike-2',
  'valorant',
  'honor-of-kings',
  'pubg-battlegrounds',
  'overwatch-2',
  'apex-legends',
  'delta-force',
] as const;

export type GameSlug = (typeof GAME_SLUGS)[number];

export const ALL_GAMES_V2: GameQuizV2[] = [
  leagueOfLegends,
  counterStrike2,
  valorant,
  honorOfKings,
  pubgBattlegrounds,
  overwatch2,
  apexLegends,
  deltaForce,
];

export function getGameV2(slug: string): GameQuizV2 | undefined {
  return ALL_GAMES_V2.find((g) => g.slug === slug);
}

export function getArchetype(game: GameQuizV2, slug: string): ArchetypeV2 | undefined {
  return game.archetypes.find((a) => a.slug === slug);
}
