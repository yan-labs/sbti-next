import { describe, it, expect } from 'vitest';
import { computeScores, normalize, derivePolarityCode, mapToArchetype } from '../scoring';
import game from '../overwatch-2';
import type { Axis, Polarity } from '../types';
import { AXES } from '../dimensions';

// ── Shape invariants ──────────────────────────────────────────────────────────

describe('Overwatch 2 question structure', () => {
  it('has exactly 30 questions', () => {
    expect(game.questions).toHaveLength(30);
  });

  it('has exactly 12 anchor questions', () => {
    const anchors = game.questions.filter((q) => q.kind === 'anchor');
    expect(anchors).toHaveLength(12);
  });

  it('has exactly 18 compound questions', () => {
    const compounds = game.questions.filter((q) => q.kind === 'compound');
    expect(compounds).toHaveLength(18);
  });

  it('every question has exactly 4 options', () => {
    for (const q of game.questions) {
      expect(q.options, `question ${q.id} should have 4 options`).toHaveLength(4);
    }
  });

  it('every anchor option has exactly 1 AxisVote', () => {
    const anchors = game.questions.filter((q) => q.kind === 'anchor');
    for (const q of anchors) {
      for (const opt of q.options) {
        expect(opt.scoring, `anchor ${q.id} option must have 1 vote`).toHaveLength(1);
      }
    }
  });

  it('every compound option has exactly 2 AxisVotes on distinct axes', () => {
    const compounds = game.questions.filter((q) => q.kind === 'compound');
    for (const q of compounds) {
      for (const opt of q.options) {
        expect(opt.scoring, `compound ${q.id} option must have 2 votes`).toHaveLength(2);
        const axes = opt.scoring.map((v) => v.axis);
        expect(new Set(axes).size, `compound ${q.id} votes must be on distinct axes`).toBe(2);
      }
    }
  });

  it('all question ids are unique', () => {
    const ids = game.questions.map((q) => q.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it('dominant axes are Bond, Tempo, Mental', () => {
    expect(game.dominantAxes).toEqual(['Bond', 'Tempo', 'Mental']);
  });

  it('has exactly 8 archetypes with unique slugs', () => {
    expect(game.archetypes).toHaveLength(8);
    const slugs = game.archetypes.map((a) => a.slug);
    expect(new Set(slugs).size).toBe(8);
  });
});

// ── Axis coverage ─────────────────────────────────────────────────────────────

describe('Overwatch 2 axis vote coverage', () => {
  const allAxes: Axis[] = ['Bond', 'Tempo', 'Mental', 'Nerve', 'Intel', 'Flair'];

  it('each axis is covered by at least 4 total questions', () => {
    for (const axis of allAxes) {
      const count = game.questions.filter((q) =>
        q.options.some((opt) => opt.scoring.some((v) => v.axis === axis)),
      ).length;
      expect(count, `axis ${axis} should appear in at least 4 questions`).toBeGreaterThanOrEqual(4);
    }
  });

  it('each dominant axis (Bond, Tempo, Mental) is covered by at least 8 questions', () => {
    for (const axis of ['Bond', 'Tempo', 'Mental'] as Axis[]) {
      const count = game.questions.filter((q) =>
        q.options.some((opt) => opt.scoring.some((v) => v.axis === axis)),
      ).length;
      expect(count, `dominant axis ${axis} should appear in at least 8 questions`).toBeGreaterThanOrEqual(8);
    }
  });
});

// ── Reachability: all 8 archetypes ───────────────────────────────────────────

function buildCode(pattern: Record<Axis, Polarity>): string {
  return AXES.map((def) =>
    pattern[def.axis] === 'high' ? def.highLetter : def.lowLetter,
  ).join('');
}

function buildAnswersFor(bond: Polarity, tempo: Polarity, mental: Polarity) {
  const targets: Record<Axis, Polarity | null> = {
    Bond: bond,
    Tempo: tempo,
    Mental: mental,
    Nerve: null,
    Intel: null,
    Flair: null,
  };

  return game.questions.map((q) => {
    let bestIndex = 0;
    let bestScore = -Infinity;

    for (let i = 0; i < q.options.length; i++) {
      const opt = q.options[i]!;
      let score = 0;
      for (const vote of opt.scoring) {
        const target = targets[vote.axis];
        if (target !== null) {
          const wantDelta = target === 'high' ? 1 : -1;
          score += vote.delta === wantDelta ? 1 : -1;
        }
      }
      if (score > bestScore) {
        bestScore = score;
        bestIndex = i;
      }
    }

    return { questionId: q.id, optionIndex: bestIndex };
  });
}

describe('Overwatch 2 archetype reachability', () => {
  const archetypeTargets: Array<{
    slug: string;
    bond: Polarity;
    tempo: Polarity;
    mental: Polarity;
  }> = [
    // Bond=T(high) Tempo=L(low) Mental=K(low)
    { slug: 'ult-economist',        bond: 'high', tempo: 'low',  mental: 'low'  },
    // Bond=T(high) Tempo=L(low) Mental=B(high)
    { slug: 'c9-trauma-curator',    bond: 'high', tempo: 'low',  mental: 'high' },
    // Bond=T(high) Tempo=R(high) Mental=K(low)
    { slug: 'payload-parent',       bond: 'high', tempo: 'high', mental: 'low'  },
    // Bond=T(high) Tempo=R(high) Mental=B(high)
    { slug: 'voice-line-saboteur',  bond: 'high', tempo: 'high', mental: 'high' },
    // Bond=S(low)  Tempo=L(low) Mental=K(low)
    { slug: 'solo-tank-philosopher', bond: 'low', tempo: 'low',  mental: 'low'  },
    // Bond=S(low)  Tempo=L(low) Mental=B(high)
    { slug: 'dps-victim',           bond: 'low',  tempo: 'low',  mental: 'high' },
    // Bond=S(low)  Tempo=R(high) Mental=K(low)
    { slug: 'flanker-monk',         bond: 'low',  tempo: 'high', mental: 'low'  },
    // Bond=S(low)  Tempo=R(high) Mental=B(high)
    { slug: 'killcam-headliner',    bond: 'low',  tempo: 'high', mental: 'high' },
  ];

  for (const { slug, bond, tempo, mental } of archetypeTargets) {
    it(`reaches ${slug} with Bond=${bond} Tempo=${tempo} Mental=${mental}`, () => {
      const answers = buildAnswersFor(bond, tempo, mental);
      const raw = computeScores(answers, game.questions);
      const normalized = normalize(raw, game.questions);
      const code = derivePolarityCode(normalized);
      const archetype = mapToArchetype(code as any, game);
      expect(archetype.slug).toBe(slug);
    });
  }
});

// ── Localization completeness ─────────────────────────────────────────────────

describe('Overwatch 2 localization completeness', () => {
  const locales = ['zh', 'en', 'ja', 'ko'] as const;

  it('every question text has all 4 locales', () => {
    for (const q of game.questions) {
      for (const locale of locales) {
        expect(q.text[locale], `question ${q.id} missing ${locale}`).toBeTruthy();
      }
    }
  });

  it('every option label has all 4 locales', () => {
    for (const q of game.questions) {
      for (let i = 0; i < q.options.length; i++) {
        const opt = q.options[i]!;
        for (const locale of locales) {
          expect(
            opt.label[locale],
            `question ${q.id} option ${i} missing ${locale}`,
          ).toBeTruthy();
        }
      }
    }
  });
});
