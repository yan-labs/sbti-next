import { describe, it, expect } from 'vitest';
import { computeScores, normalize, derivePolarityCode, mapToArchetype } from '../scoring';
import game from '../valorant';
import type { Axis, Polarity } from '../types';

// ── Shape invariants ──────────────────────────────────────────────────────────

describe('VALORANT question structure', () => {
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

  it('dominant axes are Bond, Intel, Flair', () => {
    expect(game.dominantAxes).toEqual(['Bond', 'Intel', 'Flair']);
  });

  it('has exactly 8 archetypes with unique slugs', () => {
    expect(game.archetypes).toHaveLength(8);
    const slugs = game.archetypes.map((a) => a.slug);
    expect(new Set(slugs).size).toBe(8);
  });
});

// ── Axis coverage ─────────────────────────────────────────────────────────────

describe('VALORANT axis vote coverage', () => {
  const allAxes: Axis[] = ['Bond', 'Intel', 'Flair', 'Tempo', 'Nerve', 'Mental'];

  it('each axis is covered by at least 4 total questions', () => {
    for (const axis of allAxes) {
      const count = game.questions.filter((q) =>
        q.options.some((opt) => opt.scoring.some((v) => v.axis === axis)),
      ).length;
      expect(count, `axis ${axis} should appear in at least 4 questions`).toBeGreaterThanOrEqual(4);
    }
  });

  it('each dominant axis (Bond, Intel, Flair) is covered by at least 8 questions', () => {
    for (const axis of ['Bond', 'Intel', 'Flair'] as Axis[]) {
      const count = game.questions.filter((q) =>
        q.options.some((opt) => opt.scoring.some((v) => v.axis === axis)),
      ).length;
      expect(count, `dominant axis ${axis} should appear in at least 8 questions`).toBeGreaterThanOrEqual(8);
    }
  });
});

// ── Reachability: all 8 archetypes ───────────────────────────────────────────

/**
 * Construct answers for all 30 questions that attempt to drive Bond, Intel,
 * Flair toward the given polarities. For each question, pick the option whose
 * combined contribution to the 3 dominant axes is best (weighted sum).
 * Non-dominant axes and questions not touching any dominant axis default to 0.
 */
function buildAnswersFor(bond: Polarity, intel: Polarity, flair: Polarity) {
  const targets: Record<Axis, Polarity | null> = {
    Bond: bond,
    Intel: intel,
    Flair: flair,
    Tempo: null,
    Nerve: null,
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

describe('VALORANT archetype reachability', () => {
  const archetypeTargets: Array<{
    slug: string;
    bond: Polarity;
    intel: Polarity;
    flair: Polarity;
  }> = [
    // Bond=T(high) Intel=D(low) Flair=U(low)
    { slug: 'lineup-librarian',   bond: 'high', intel: 'low',  flair: 'low'  },
    // Bond=T(high) Intel=D(low) Flair=H(high)
    { slug: 'caffeinated-igl',    bond: 'high', intel: 'low',  flair: 'high' },
    // Bond=T(high) Intel=F(high) Flair=U(low)
    { slug: 'sentinel-guardian',  bond: 'high', intel: 'high', flair: 'low'  },
    // Bond=T(high) Intel=F(high) Flair=H(high)
    { slug: 'clutch-narrator',    bond: 'high', intel: 'high', flair: 'high' },
    // Bond=S(low)  Intel=D(low) Flair=U(low)
    { slug: 'data-duelist',       bond: 'low',  intel: 'low',  flair: 'low'  },
    // Bond=S(low)  Intel=D(low) Flair=H(high)
    { slug: 'instalock-spectator', bond: 'low', intel: 'low',  flair: 'high' },
    // Bond=S(low)  Intel=F(high) Flair=U(low)
    { slug: 'sheriff-economist',  bond: 'low',  intel: 'high', flair: 'low'  },
    // Bond=S(low)  Intel=F(high) Flair=H(high)
    { slug: 'sheriff-mystic',     bond: 'low',  intel: 'high', flair: 'high' },
  ];

  for (const { slug, bond, intel, flair } of archetypeTargets) {
    it(`reaches ${slug} with Bond=${bond} Intel=${intel} Flair=${flair}`, () => {
      const answers = buildAnswersFor(bond, intel, flair);
      const raw = computeScores(answers, game.questions);
      const normalized = normalize(raw, game.questions);
      const code = derivePolarityCode(normalized);
      const archetype = mapToArchetype(code, game);
      expect(archetype.slug).toBe(slug);
    });
  }
});

// ── Localization completeness ─────────────────────────────────────────────────

describe('VALORANT localization completeness', () => {
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
