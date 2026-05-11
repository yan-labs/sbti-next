export type { SiteLocale, LocalizedText } from '../game-quizzes';
import type { LocalizedText } from '../game-quizzes';

// ── Axis identifiers ──────────────────────────────────────────────────────────

export type Axis = 'Tempo' | 'Nerve' | 'Bond' | 'Intel' | 'Flair' | 'Mental';

export type Polarity = 'low' | 'high';

// Low-pole letters: L C S D U K  (axis order: Tempo Nerve Bond Intel Flair Mental)
// High-pole letters: R A T F H B
export type PolarityLetter = 'L' | 'R' | 'C' | 'A' | 'S' | 'T' | 'D' | 'F' | 'U' | 'H' | 'K' | 'B';

// Branded string to prevent plain string assignment
declare const _polarityCode: unique symbol;
export type PolarityCode = string & { readonly [_polarityCode]: true };

// ── Scoring primitives ────────────────────────────────────────────────────────

export interface AxisVote {
  axis: Axis;
  /** +1 pushes toward high pole; -1 pushes toward low pole */
  delta: -1 | 1;
}

/** Anchor questions carry 1 vote; compound questions carry 2 */
export type OptionScoring = AxisVote[];

// ── Question ──────────────────────────────────────────────────────────────────

export interface QuestionOption {
  label: LocalizedText;
  scoring: OptionScoring;
}

export interface QuestionV2 {
  id: string;
  text: LocalizedText;
  options: QuestionOption[];
  kind: 'anchor' | 'compound';
}

// ── Archetype ─────────────────────────────────────────────────────────────────

export interface GameQuizAsset {
  src: string;
  alt: LocalizedText;
  prompt: string;
}

export interface ArchetypeV2 {
  slug: string;
  name: LocalizedText;
  oneLiner: LocalizedText;
  description?: LocalizedText;
  symptoms?: LocalizedText[];
  rivalSlug?: string;
  bestSquadSlug?: string;
  /** The polarity on each axis that defines this archetype */
  polarityPattern: Record<Axis, Polarity>;
  image?: GameQuizAsset;
}

// ── Game quiz ─────────────────────────────────────────────────────────────────

export interface GameQuizV2 {
  slug: string;
  title: LocalizedText;
  deck: LocalizedText;
  description: LocalizedText;
  /** The 3 axes whose polarity combinations define the 8 archetypes */
  dominantAxes: readonly [Axis, Axis, Axis];
  archetypes: ArchetypeV2[];
  questions: QuestionV2[];
  cover?: GameQuizAsset;
  logo?: GameQuizAsset;
}
