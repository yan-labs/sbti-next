export type Level = 'L' | 'M' | 'H';
export type DimCode = 'S1' | 'S2' | 'S3' | 'E1' | 'E2' | 'E3' | 'A1' | 'A2' | 'A3' | 'Ac1' | 'Ac2' | 'Ac3' | 'So1' | 'So2' | 'So3';
export type ModelCode = 'S' | 'E' | 'A' | 'Ac' | 'So';

export interface QuestionOption {
  label: string;
  value: number;
}

export interface Question {
  id: string;
  dim?: string;
  kind?: string;
  text: string;
  options: QuestionOption[];
}

export interface PersonalityType {
  code: string;
  cn: string;
  intro: string;
  desc: string;
  pattern?: string;
}

export interface MatchResult {
  code: string;
  cn: string;
  intro: string;
  desc: string;
  similarity: number;
  exact: number;
  distance: number;
}

export interface TestResult {
  primary: MatchResult;
  secondary: MatchResult | null;
  rankings: MatchResult[];
  mode: 'normal' | 'drunk' | 'fallback';
}

export interface DimExplanation {
  L: string;
  M: string;
  H: string;
}

export const DIMENSION_ORDER: DimCode[] = ['S1', 'S2', 'S3', 'E1', 'E2', 'E3', 'A1', 'A2', 'A3', 'Ac1', 'Ac2', 'Ac3', 'So1', 'So2', 'So3'];

export const MODEL_DIMS: Record<ModelCode, DimCode[]> = {
  S: ['S1', 'S2', 'S3'],
  E: ['E1', 'E2', 'E3'],
  A: ['A1', 'A2', 'A3'],
  Ac: ['Ac1', 'Ac2', 'Ac3'],
  So: ['So1', 'So2', 'So3'],
};
