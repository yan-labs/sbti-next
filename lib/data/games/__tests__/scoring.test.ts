import { describe, it, expect } from 'vitest';
import {
  computeScores,
  normalize,
  derivePolarityCode,
  mapToArchetype,
} from '../scoring';
import { AXES, AXIS_ORDER } from '../dimensions';
import { ALL_GAMES_V2 } from '../index';
import type { QuestionV2, PolarityCode, Axis, Polarity } from '../types';

// ── Synthetic question builders ───────────────────────────────────────────────

/**
 * Anchor question: option 0 votes -1 (low), option 1 votes +1 (high).
 * Options 2 and 3 also vote low/high to allow "all low" and "all high" tests.
 */
function anchorQ(axis: Axis, id: string): QuestionV2 {
  return {
    id,
    text: { zh: '', en: '', ja: '', ko: '' },
    kind: 'anchor',
    options: [
      { label: { zh: '', en: '', ja: '', ko: '' }, scoring: [{ axis, delta: -1 }] },
      { label: { zh: '', en: '', ja: '', ko: '' }, scoring: [{ axis, delta: 1 }] },
      { label: { zh: '', en: '', ja: '', ko: '' }, scoring: [{ axis, delta: -1 }] },
      { label: { zh: '', en: '', ja: '', ko: '' }, scoring: [{ axis, delta: 1 }] },
    ],
  };
}

/**
 * One anchor question per axis (6 questions total).
 * Option index 0 = low vote, option index 1 = high vote.
 */
const SYNTHETIC_QUESTIONS: QuestionV2[] = AXIS_ORDER.map((axis, i) =>
  anchorQ(axis, `q${i}`),
);

/** Build answers array choosing option 0 (low) for all questions */
const ALL_LOW_ANSWERS = SYNTHETIC_QUESTIONS.map((q) => ({
  questionId: q.id,
  optionIndex: 0,
}));

/** Build answers array choosing option 1 (high) for all questions */
const ALL_HIGH_ANSWERS = SYNTHETIC_QUESTIONS.map((q) => ({
  questionId: q.id,
  optionIndex: 1,
}));

// ── Helper: build a 6-letter polarity code from axis→polarity map ────────────

function buildCode(pattern: Record<Axis, Polarity>): PolarityCode {
  const letters = AXES.map((def) =>
    pattern[def.axis] === 'high' ? def.highLetter : def.lowLetter,
  );
  return letters.join('') as PolarityCode;
}

/** Generate all 64 possible 6-letter polarity codes */
function allPolarityCodes(): PolarityCode[] {
  const polarities: Polarity[] = ['low', 'high'];
  const codes: PolarityCode[] = [];

  for (const t of polarities) {
    for (const n of polarities) {
      for (const b of polarities) {
        for (const i of polarities) {
          for (const f of polarities) {
            for (const m of polarities) {
              codes.push(
                buildCode({
                  Tempo: t,
                  Nerve: n,
                  Bond: b,
                  Intel: i,
                  Flair: f,
                  Mental: m,
                }),
              );
            }
          }
        }
      }
    }
  }

  return codes;
}

// ── Tests ─────────────────────────────────────────────────────────────────────

describe('computeScores', () => {
  it('all low-pole answers → all axes score negative', () => {
    const raw = computeScores(ALL_LOW_ANSWERS, SYNTHETIC_QUESTIONS);
    for (const axis of AXIS_ORDER) {
      expect(raw[axis]).toBeLessThan(0);
    }
  });

  it('all high-pole answers → all axes score positive', () => {
    const raw = computeScores(ALL_HIGH_ANSWERS, SYNTHETIC_QUESTIONS);
    for (const axis of AXIS_ORDER) {
      expect(raw[axis]).toBeGreaterThan(0);
    }
  });

  it('empty answers → all axes score 0', () => {
    const raw = computeScores([], SYNTHETIC_QUESTIONS);
    for (const axis of AXIS_ORDER) {
      expect(raw[axis]).toBe(0);
    }
  });
});

describe('normalize', () => {
  it('all low-pole answers → normalized = 0 for every axis', () => {
    const raw = computeScores(ALL_LOW_ANSWERS, SYNTHETIC_QUESTIONS);
    const n = normalize(raw, SYNTHETIC_QUESTIONS);
    for (const axis of AXIS_ORDER) {
      expect(n[axis]).toBe(0);
    }
  });

  it('all high-pole answers → normalized = 100 for every axis', () => {
    const raw = computeScores(ALL_HIGH_ANSWERS, SYNTHETIC_QUESTIONS);
    const n = normalize(raw, SYNTHETIC_QUESTIONS);
    for (const axis of AXIS_ORDER) {
      expect(n[axis]).toBe(100);
    }
  });

  it('empty answers → normalized = 50 for every axis', () => {
    const raw = computeScores([], SYNTHETIC_QUESTIONS);
    const n = normalize(raw, SYNTHETIC_QUESTIONS);
    for (const axis of AXIS_ORDER) {
      expect(n[axis]).toBe(50);
    }
  });
});

describe('derivePolarityCode', () => {
  it('all low-pole answers → code equals LCSDUK (one low letter per axis)', () => {
    const raw = computeScores(ALL_LOW_ANSWERS, SYNTHETIC_QUESTIONS);
    const n = normalize(raw, SYNTHETIC_QUESTIONS);
    const code = derivePolarityCode(n);
    expect(code).toBe('LCSDUK');
  });

  it('all high-pole answers → code equals RATFHB (one high letter per axis)', () => {
    const raw = computeScores(ALL_HIGH_ANSWERS, SYNTHETIC_QUESTIONS);
    const n = normalize(raw, SYNTHETIC_QUESTIONS);
    const code = derivePolarityCode(n);
    expect(code).toBe('RATFHB');
  });

  it('empty answers → normalized = 50 → tie → code equals LCSDUK (low-pole on tie)', () => {
    const raw = computeScores([], SYNTHETIC_QUESTIONS);
    const n = normalize(raw, SYNTHETIC_QUESTIONS);
    expect(Object.values(n).every((v) => v === 50)).toBe(true);
    const code = derivePolarityCode(n);
    expect(code).toBe('LCSDUK');
  });
});

describe('mapToArchetype', () => {
  const codes = allPolarityCodes();

  for (const game of ALL_GAMES_V2) {
    const validSlugs = new Set(game.archetypes.map((a) => a.slug));

    it(`${game.slug}: mapToArchetype returns a valid archetype for all 64 codes`, () => {
      for (const code of codes) {
        const archetype = mapToArchetype(code, game);
        expect(archetype).toBeTruthy();
        expect(validSlugs.has(archetype.slug)).toBe(true);
      }
    });
  }

  it('each game has exactly 8 archetypes with unique slugs', () => {
    for (const game of ALL_GAMES_V2) {
      expect(game.archetypes).toHaveLength(8);
      const slugs = game.archetypes.map((a) => a.slug);
      const uniqueSlugs = new Set(slugs);
      expect(uniqueSlugs.size).toBe(8);
    }
  });
});
