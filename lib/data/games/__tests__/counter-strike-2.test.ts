import { describe, it, expect } from 'vitest';
import {
  computeScores,
  normalize,
  derivePolarityCode,
  mapToArchetype,
} from '../scoring';
import type { Axis, Polarity, PolarityCode } from '../types';
import { AXES } from '../dimensions';
import cs2 from '../counter-strike-2';

// ── Helpers ───────────────────────────────────────────────────────────────────

function buildCode(pattern: Record<Axis, Polarity>): PolarityCode {
  return AXES.map((def) =>
    pattern[def.axis] === 'high' ? def.highLetter : def.lowLetter,
  ).join('') as PolarityCode;
}

/**
 * Return answers that push each dominant axis toward the specified polarity
 * by always picking options whose scoring votes in that direction on that axis.
 * Non-dominant axes are voted toward 'low' for simplicity.
 */
function buildAnswersForPattern(
  tempoTarget: Polarity,
  intelTarget: Polarity,
  nerveTarget: Polarity,
): { questionId: string; optionIndex: number }[] {
  return cs2.questions.map((q) => {
    // For each question, pick the first option whose scoring agrees with
    // all three dominant-axis targets (Tempo, Intel, Nerve).
    const targets: Partial<Record<Axis, Polarity>> = {
      Tempo: tempoTarget,
      Intel: intelTarget,
      Nerve: nerveTarget,
    };

    let bestOptionIndex = 0;
    let bestScore = -Infinity;

    for (let i = 0; i < q.options.length; i++) {
      const option = q.options[i]!;
      let score = 0;
      for (const vote of option.scoring) {
        const target = targets[vote.axis];
        if (target === undefined) continue;
        const wantHigh = target === 'high';
        if ((wantHigh && vote.delta === 1) || (!wantHigh && vote.delta === -1)) {
          score += 1;
        }
      }
      if (score > bestScore) {
        bestScore = score;
        bestOptionIndex = i;
      }
    }

    return { questionId: q.id, optionIndex: bestOptionIndex };
  });
}

// ── Structure tests ───────────────────────────────────────────────────────────

describe('CS2 quiz structure', () => {
  it('has exactly 30 questions', () => {
    expect(cs2.questions).toHaveLength(30);
  });

  it('has exactly 12 anchor questions', () => {
    const anchors = cs2.questions.filter((q) => q.kind === 'anchor');
    expect(anchors).toHaveLength(12);
  });

  it('has exactly 18 compound questions', () => {
    const compounds = cs2.questions.filter((q) => q.kind === 'compound');
    expect(compounds).toHaveLength(18);
  });

  it('every question has exactly 4 options', () => {
    for (const q of cs2.questions) {
      expect(q.options).toHaveLength(4);
    }
  });

  it('every anchor option has exactly 1 AxisVote', () => {
    for (const q of cs2.questions.filter((q) => q.kind === 'anchor')) {
      for (const opt of q.options) {
        expect(opt.scoring).toHaveLength(1);
      }
    }
  });

  it('every compound option has exactly 2 AxisVotes on distinct axes', () => {
    for (const q of cs2.questions.filter((q) => q.kind === 'compound')) {
      for (const opt of q.options) {
        expect(opt.scoring).toHaveLength(2);
        const axes = opt.scoring.map((v) => v.axis);
        expect(new Set(axes).size).toBe(2);
      }
    }
  });

  it('every question has all 4 locales populated', () => {
    const locales = ['zh', 'en', 'ja', 'ko'] as const;
    for (const q of cs2.questions) {
      for (const locale of locales) {
        expect(q.text[locale].length).toBeGreaterThan(0);
        for (const opt of q.options) {
          expect(opt.label[locale].length).toBeGreaterThan(0);
        }
      }
    }
  });

  it('each axis appears at least 2 times in anchor questions', () => {
    const anchors = cs2.questions.filter((q) => q.kind === 'anchor');
    const axisCounts: Record<string, number> = {};
    for (const q of anchors) {
      for (const opt of q.options) {
        for (const vote of opt.scoring) {
          axisCounts[vote.axis] = (axisCounts[vote.axis] ?? 0) + 1;
        }
      }
    }
    const axes: Axis[] = ['Tempo', 'Nerve', 'Bond', 'Intel', 'Flair', 'Mental'];
    for (const axis of axes) {
      expect(axisCounts[axis] ?? 0).toBeGreaterThanOrEqual(2);
    }
  });

  it('has 8 archetypes', () => {
    expect(cs2.archetypes).toHaveLength(8);
  });

  it('dominant axes are Tempo, Intel, Nerve', () => {
    expect(cs2.dominantAxes).toEqual(['Tempo', 'Intel', 'Nerve']);
  });
});

// ── Reachability tests ────────────────────────────────────────────────────────

describe('CS2 all 8 archetypes reachable', () => {
  const archetypeTargets: {
    slug: string;
    tempo: Polarity;
    intel: Polarity;
    nerve: Polarity;
  }[] = [
    { slug: 'eco-cfo',      tempo: 'low',  intel: 'low',  nerve: 'low'  },
    { slug: 'lineup-priest', tempo: 'low',  intel: 'low',  nerve: 'high' },
    { slug: 'silent-anchor', tempo: 'low',  intel: 'high', nerve: 'low'  },
    { slug: 'clutch-saint',  tempo: 'low',  intel: 'high', nerve: 'high' },
    { slug: 'default-igl',   tempo: 'high', intel: 'low',  nerve: 'low'  },
    { slug: 'flash-entry',   tempo: 'high', intel: 'low',  nerve: 'high' },
    { slug: 'arch-cleric',   tempo: 'high', intel: 'high', nerve: 'low'  },
    { slug: 'awp-cowboy',    tempo: 'high', intel: 'high', nerve: 'high' },
  ];

  for (const { slug, tempo, intel, nerve } of archetypeTargets) {
    it(`reaches archetype "${slug}" (Tempo=${tempo}, Intel=${intel}, Nerve=${nerve})`, () => {
      const answers = buildAnswersForPattern(tempo, intel, nerve);
      const raw = computeScores(answers, cs2.questions);
      const normalized = normalize(raw, cs2.questions);
      const code = derivePolarityCode(normalized);
      const archetype = mapToArchetype(code, cs2);
      expect(archetype.slug).toBe(slug);
    });
  }
});
