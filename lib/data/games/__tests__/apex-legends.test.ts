import { describe, it, expect } from 'vitest';
import { computeScores, normalize, derivePolarityCode, mapToArchetype } from '../scoring';
import game from '../apex-legends';
import type { Axis, Polarity } from '../types';
import { AXES } from '../dimensions';

// ── Shape invariants ──────────────────────────────────────────────────────────

describe('Apex Legends question structure', () => {
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

  it('dominant axes are Tempo, Flair, Bond', () => {
    expect(game.dominantAxes).toEqual(['Tempo', 'Flair', 'Bond']);
  });

  it('has exactly 8 archetypes with unique slugs', () => {
    expect(game.archetypes).toHaveLength(8);
    const slugs = game.archetypes.map((a) => a.slug);
    expect(new Set(slugs).size).toBe(8);
  });
});

// ── Axis coverage ─────────────────────────────────────────────────────────────

describe('Apex Legends axis vote coverage', () => {
  const allAxes: Axis[] = ['Tempo', 'Flair', 'Bond', 'Nerve', 'Intel', 'Mental'];

  it('each axis is covered by at least 4 total questions', () => {
    for (const axis of allAxes) {
      const count = game.questions.filter((q) =>
        q.options.some((opt) => opt.scoring.some((v) => v.axis === axis)),
      ).length;
      expect(count, `axis ${axis} should appear in at least 4 questions`).toBeGreaterThanOrEqual(4);
    }
  });

  it('each dominant axis (Tempo, Flair, Bond) is covered by at least 8 questions', () => {
    for (const axis of ['Tempo', 'Flair', 'Bond'] as Axis[]) {
      const count = game.questions.filter((q) =>
        q.options.some((opt) => opt.scoring.some((v) => v.axis === axis)),
      ).length;
      expect(count, `dominant axis ${axis} should appear in at least 8 questions`).toBeGreaterThanOrEqual(8);
    }
  });

  it('every axis appears in at least 2 anchor questions', () => {
    const anchorAxes: Record<Axis, number> = {
      Tempo: 0, Nerve: 0, Bond: 0, Intel: 0, Flair: 0, Mental: 0,
    };
    for (const q of game.questions.filter((q) => q.kind === 'anchor')) {
      const axis = q.options[0]!.scoring[0]!.axis;
      anchorAxes[axis]++;
    }
    for (const axis of allAxes) {
      expect(anchorAxes[axis], `axis ${axis} should have ≥2 anchor questions`).toBeGreaterThanOrEqual(2);
    }
  });
});

// ── Reachability: all 8 archetypes ───────────────────────────────────────────

function buildAnswersFor(tempo: Polarity, flair: Polarity, bond: Polarity) {
  const targets: Record<Axis, Polarity | null> = {
    Tempo: tempo,
    Flair: flair,
    Bond: bond,
    Nerve: null,
    Intel: null,
    Mental: null,
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

function buildCode(pattern: Record<Axis, Polarity>): string {
  return AXES.map((def) =>
    pattern[def.axis] === 'high' ? def.highLetter : def.lowLetter,
  ).join('');
}

describe('Apex Legends archetype reachability', () => {
  const archetypeTargets: Array<{
    slug: string;
    tempo: Polarity;
    flair: Polarity;
    bond: Polarity;
  }> = [
    // Tempo=L(low) Flair=U(low) Bond=T(high)
    { slug: 'rotation-cartographer', tempo: 'low',  flair: 'low',  bond: 'high' },
    // Tempo=L(low) Flair=U(low) Bond=S(low)
    { slug: 'loot-hermit',           tempo: 'low',  flair: 'low',  bond: 'low'  },
    // Tempo=L(low) Flair=H(high) Bond=T(high)
    { slug: 'pinging-poet',          tempo: 'low',  flair: 'high', bond: 'high' },
    // Tempo=L(low) Flair=H(high) Bond=S(low)
    { slug: 'shield-influencer',     tempo: 'low',  flair: 'high', bond: 'low'  },
    // Tempo=R(high) Flair=U(low) Bond=T(high)
    { slug: 'third-party-strategist', tempo: 'high', flair: 'low',  bond: 'high' },
    // Tempo=R(high) Flair=U(low) Bond=S(low)
    { slug: 'solo-octane',           tempo: 'high', flair: 'low',  bond: 'low'  },
    // Tempo=R(high) Flair=H(high) Bond=T(high)
    { slug: 'slide-jump-evangelist', tempo: 'high', flair: 'high', bond: 'high' },
    // Tempo=R(high) Flair=H(high) Bond=S(low)
    { slug: 'wraith-portal-clown',   tempo: 'high', flair: 'high', bond: 'low'  },
  ];

  for (const { slug, tempo, flair, bond } of archetypeTargets) {
    it(`reaches ${slug} with Tempo=${tempo} Flair=${flair} Bond=${bond}`, () => {
      const answers = buildAnswersFor(tempo, flair, bond);
      const raw = computeScores(answers, game.questions);
      const normalized = normalize(raw, game.questions);
      const code = derivePolarityCode(normalized);
      const archetype = mapToArchetype(code as any, game);
      expect(archetype.slug).toBe(slug);
    });
  }
});

// ── Localization completeness ─────────────────────────────────────────────────

describe('Apex Legends localization completeness', () => {
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
