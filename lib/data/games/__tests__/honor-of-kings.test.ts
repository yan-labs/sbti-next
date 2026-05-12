import { describe, it, expect } from 'vitest';
import { computeScores, normalize, derivePolarityCode, mapToArchetype } from '../scoring';
import { AXIS_ORDER } from '../dimensions';
import game from '../honor-of-kings';
import type { Axis } from '../types';

// ── Structural checks ─────────────────────────────────────────────────────────

describe('HoK question structure', () => {
  it('has exactly 30 questions', () => {
    expect(game.questions).toHaveLength(30);
  });

  it('has 12 anchor questions', () => {
    const anchors = game.questions.filter((q) => q.kind === 'anchor');
    expect(anchors).toHaveLength(12);
  });

  it('has 18 compound questions', () => {
    const compounds = game.questions.filter((q) => q.kind === 'compound');
    expect(compounds).toHaveLength(18);
  });

  it('each anchor option has exactly 1 AxisVote', () => {
    for (const q of game.questions.filter((q) => q.kind === 'anchor')) {
      for (const opt of q.options) {
        expect(opt.scoring).toHaveLength(1);
      }
    }
  });

  it('each compound option has exactly 2 AxisVotes on distinct axes', () => {
    for (const q of game.questions.filter((q) => q.kind === 'compound')) {
      for (const opt of q.options) {
        expect(opt.scoring).toHaveLength(2);
        expect(opt.scoring[0]!.axis).not.toBe(opt.scoring[1]!.axis);
      }
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
    for (const axis of AXIS_ORDER) {
      expect(anchorAxes[axis]).toBeGreaterThanOrEqual(2);
    }
  });

  it('all question ids are unique', () => {
    const ids = game.questions.map((q) => q.id);
    expect(new Set(ids).size).toBe(ids.length);
  });
});

// ── Reachability checks ───────────────────────────────────────────────────────

function buildTargetAnswers(
  targetPattern: Record<Axis, 'high' | 'low'>,
): Array<{ questionId: string; optionIndex: number }> {
  return game.questions.map((q) => {
    let bestOption = 0;
    let bestScore = -Infinity;

    for (let i = 0; i < q.options.length; i++) {
      const opt = q.options[i]!;
      let score = 0;
      for (const vote of opt.scoring) {
        if (game.dominantAxes.includes(vote.axis as typeof game.dominantAxes[number])) {
          const wantHigh = targetPattern[vote.axis] === 'high';
          score += wantHigh ? vote.delta : -vote.delta;
        }
      }
      if (score > bestScore) {
        bestScore = score;
        bestOption = i;
      }
    }

    return { questionId: q.id, optionIndex: bestOption };
  });
}

describe('HoK archetype reachability', () => {
  for (const archetype of game.archetypes) {
    it(`archetype "${archetype.slug}" is reachable`, () => {
      const answers = buildTargetAnswers(archetype.polarityPattern);
      const raw = computeScores(answers, game.questions);
      const normalised = normalize(raw, game.questions);
      const code = derivePolarityCode(normalised);
      const result = mapToArchetype(code, game);
      expect(result.slug).toBe(archetype.slug);
    });
  }
});
