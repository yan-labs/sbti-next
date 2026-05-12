// Game-specific visual identity tokens.
// Each theme maps to a :root[data-game="<slug>"] block in app/globals.css.

export type GameSlug =
  | 'league-of-legends'
  | 'counter-strike-2'
  | 'valorant'
  | 'delta-force'
  | 'honor-of-kings'
  | 'overwatch-2'
  | 'pubg-battlegrounds'
  | 'apex-legends';

export interface GameTheme {
  /** Dominant brand color */
  primary: string;
  /** Secondary / accent pairing */
  secondary: string;
  /** Tertiary accent (third color from §1.3 table) */
  accent: string;
  /** Dark surface / background */
  surface: string;
  /** Text / ink on surface */
  ink: string;
  /** CSS font-family string for display headings */
  fontFamily?: string;
}

export const GAME_THEMES: Record<GameSlug, GameTheme> = {
  'league-of-legends': {
    primary: '#0AC8B9',
    secondary: '#C89B3C',
    accent: '#785A28',
    surface: '#0A1428',
    ink: '#F0E6D2',
    fontFamily: "'Cinzel', serif",
  },
  'counter-strike-2': {
    primary: '#DE9B35',
    secondary: '#1B6EC2',
    accent: '#E84855',
    surface: '#0F1419',
    ink: '#C5D0D8',
    fontFamily: "'JetBrains Mono', monospace",
  },
  valorant: {
    primary: '#FF4655',
    secondary: '#0F1923',
    accent: '#ECE8E1',
    surface: '#0F1923',
    ink: '#ECE8E1',
    fontFamily: "'DM Sans', sans-serif",
  },
  'delta-force': {
    primary: '#C19A4B',
    secondary: '#5E4F2E',
    accent: '#E84B25',
    surface: '#1E1B14',
    ink: '#D4C8A8',
    fontFamily: "'Oswald', sans-serif",
  },
  'honor-of-kings': {
    primary: '#A8141A',
    secondary: '#D4A14A',
    accent: '#0E0506',
    surface: '#1A0B0F',
    ink: '#F7E9CD',
    fontFamily: "'Noto Serif SC', serif",
  },
  'overwatch-2': {
    primary: '#F99E1A',
    secondary: '#218FFF',
    accent: '#FF5C5C',
    surface: '#1E1E22',
    ink: '#FFFFFF',
    fontFamily: "'Bebas Neue', sans-serif",
  },
  'pubg-battlegrounds': {
    primary: '#FCBF1E',
    secondary: '#6B6B47',
    accent: '#E63946',
    surface: '#1A1A1A',
    ink: '#C7B299',
    fontFamily: "'Oswald', sans-serif",
  },
  'apex-legends': {
    primary: '#DA292A',
    secondary: '#2B2D31',
    accent: '#11D5FF',
    surface: '#101317',
    ink: '#B2B3B3',
    fontFamily: "'Saira Condensed', sans-serif",
  },
};

export function getGameTheme(slug: GameSlug): GameTheme {
  return GAME_THEMES[slug];
}
