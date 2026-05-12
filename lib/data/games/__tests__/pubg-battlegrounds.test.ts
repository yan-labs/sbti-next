import { describe, it, expect } from 'vitest';
import { computeScores, normalize, derivePolarityCode, mapToArchetype } from '../scoring';
import game from '../pubg-battlegrounds';
import type { Axis, Polarity } from '../types';

// ── Shape invariants ──────────────────────────────────────────────────────────

describe('PUBG Battlegrounds question structure', () => {
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

  it('dominant axes are Tempo, Nerve, Flair', () => {
    expect(game.dominantAxes).toEqual(['Tempo', 'Nerve', 'Flair']);
  });

  it('has exactly 8 archetypes with unique slugs', () => {
    expect(game.archetypes).toHaveLength(8);
    const slugs = game.archetypes.map((a) => a.slug);
    expect(new Set(slugs).size).toBe(8);
  });
});

// ── Axis coverage ─────────────────────────────────────────────────────────────

describe('PUBG Battlegrounds axis vote coverage', () => {
  const allAxes: Axis[] = ['Tempo', 'Nerve', 'Flair', 'Bond', 'Intel', 'Mental'];

  it('each axis is covered by at least 4 total questions', () => {
    for (const axis of allAxes) {
      const count = game.questions.filter((q) =>
        q.options.some((opt) => opt.scoring.some((v) => v.axis === axis)),
      ).length;
      expect(count, `axis ${axis} should appear in at least 4 questions`).toBeGreaterThanOrEqual(4);
    }
  });

  it('each dominant axis (Tempo, Nerve, Flair) is covered by at least 8 questions', () => {
    for (const axis of ['Tempo', 'Nerve', 'Flair'] as Axis[]) {
      const count = game.questions.filter((q) =>
        q.options.some((opt) => opt.scoring.some((v) => v.axis === axis)),
      ).length;
      expect(count, `dominant axis ${axis} should appear in at least 8 questions`).toBeGreaterThanOrEqual(8);
    }
  });
});

// ── Reachability: all 8 archetypes ───────────────────────────────────────────

function buildAnswersFor(tempo: Polarity, nerve: Polarity, flair: Polarity) {
  const targets: Record<Axis, Polarity | null> = {
    Tempo: tempo,
    Nerve: nerve,
    Flair: flair,
    Bond: null,
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

describe('PUBG Battlegrounds archetype reachability', () => {
  const archetypeTargets: Array<{
    slug: string;
    tempo: Polarity;
    nerve: Polarity;
    flair: Polarity;
  }> = [
    // Tempo=L(low) Nerve=C(low) Flair=U(low)
    { slug: 'loot-accountant',    tempo: 'low',  nerve: 'low',  flair: 'low'  },
    // Tempo=L(low) Nerve=C(low) Flair=H(high)
    { slug: 'circle-aesthete',    tempo: 'low',  nerve: 'low',  flair: 'high' },
    // Tempo=L(low) Nerve=A(high) Flair=U(low)
    { slug: 'ridge-sniper',       tempo: 'low',  nerve: 'high', flair: 'low'  },
    // Tempo=L(low) Nerve=A(high) Flair=H(high)
    { slug: 'prone-philosopher',  tempo: 'low',  nerve: 'high', flair: 'high' },
    // Tempo=R(high) Nerve=C(low) Flair=U(low)
    { slug: 'safezone-ferry',     tempo: 'high', nerve: 'low',  flair: 'low'  },
    // Tempo=R(high) Nerve=C(low) Flair=H(high)
    { slug: 'final-pose',         tempo: 'high', nerve: 'low',  flair: 'high' },
    // Tempo=R(high) Nerve=A(high) Flair=U(low)
    { slug: 'hot-drop-cfo',       tempo: 'high', nerve: 'high', flair: 'low'  },
    // Tempo=R(high) Nerve=A(high) Flair=H(high)
    { slug: 'hot-drop-comedian',  tempo: 'high', nerve: 'high', flair: 'high' },
  ];

  for (const { slug, tempo, nerve, flair } of archetypeTargets) {
    it(`reaches ${slug} with Tempo=${tempo} Nerve=${nerve} Flair=${flair}`, () => {
      const answers = buildAnswersFor(tempo, nerve, flair);
      const raw = computeScores(answers, game.questions);
      const normalized = normalize(raw, game.questions);
      const code = derivePolarityCode(normalized);
      const archetype = mapToArchetype(code, game);
      expect(archetype.slug).toBe(slug);
    });
  }
});

// ── Localization completeness ─────────────────────────────────────────────────

describe('PUBG Battlegrounds localization completeness', () => {
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
