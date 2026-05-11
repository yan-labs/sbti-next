import { AXES, AXIS_ORDER } from './dimensions';
import type { Axis, PolarityCode, QuestionV2, ArchetypeV2, GameQuizV2 } from './types';

/**
 * Sum signed votes per axis across all answered questions.
 * Unanswered questions contribute 0. Returns 0 for any axis with no votes.
 */
export function computeScores(
  answers: ReadonlyArray<{ questionId: string; optionIndex: number }>,
  questions: readonly QuestionV2[],
): Record<Axis, number> {
  const scores = Object.fromEntries(AXIS_ORDER.map((a) => [a, 0])) as Record<Axis, number>;

  for (const answer of answers) {
    const question = questions.find((q) => q.id === answer.questionId);
    if (!question) continue;
    const option = question.options[answer.optionIndex];
    if (!option) continue;
    for (const vote of option.scoring) {
      scores[vote.axis] += vote.delta;
    }
  }

  return scores;
}

/**
 * Map raw axis scores to 0–100 where 50 is perfectly balanced.
 *
 * Denominator per axis = the maximum absolute score achievable on that axis,
 * computed as the sum over questions of the max |vote| any single option
 * contributes to that axis. The mapping is symmetric around 50.
 *
 * Relies on `AxisVote.delta: -1 | 1` — the "max per option" denominator
 * overcounts if delta magnitudes ever vary across options on the same axis
 * within one question. Widen `delta` only after revisiting this contract.
 *
 * When the denominator is 0 (no question touches the axis), the score
 * stays at 50 (neutral).
 */
export function normalize(
  rawScores: Record<Axis, number>,
  questions: readonly QuestionV2[],
): Record<Axis, number> {
  const maxAbsVotes = Object.fromEntries(AXIS_ORDER.map((a) => [a, 0])) as Record<Axis, number>;
  const perAxisMax: Record<Axis, number> = {
    Tempo: 0, Nerve: 0, Bond: 0, Intel: 0, Flair: 0, Mental: 0,
  };

  for (const question of questions) {
    for (const axis of AXIS_ORDER) perAxisMax[axis] = 0;
    for (const option of question.options) {
      for (const vote of option.scoring) {
        perAxisMax[vote.axis] = Math.max(perAxisMax[vote.axis], Math.abs(vote.delta));
      }
    }
    for (const axis of AXIS_ORDER) {
      maxAbsVotes[axis] += perAxisMax[axis];
    }
  }

  const normalized = Object.fromEntries(AXIS_ORDER.map((a) => [a, 50])) as Record<Axis, number>;
  for (const axis of AXIS_ORDER) {
    const max = maxAbsVotes[axis];
    if (max === 0) {
      normalized[axis] = 50;
    } else {
      normalized[axis] = ((rawScores[axis] / max) + 1) / 2 * 100;
    }
  }

  return normalized;
}

/**
 * Derive the 6-letter polarity code from normalised 0–100 axis scores.
 * Score > 50 → high-pole letter; score ≤ 50 → low-pole letter (exact tie
 * resolves to low-pole). Axis order: Tempo Nerve Bond Intel Flair Mental.
 */
export function derivePolarityCode(normalized: Record<Axis, number>): PolarityCode {
  const letters = AXIS_ORDER.map((axis, i) => {
    const def = AXES[i]!;
    return normalized[axis] > 50 ? def.highLetter : def.lowLetter;
  });
  return letters.join('') as PolarityCode;
}

/**
 * Pick the archetype whose polarityPattern matches the polarity code on the
 * game's 3 dominant axes. Always returns one of the 8 archetypes; falls back
 * to the first archetype when no exact match exists (should not happen with
 * valid data).
 */
export function mapToArchetype(code: PolarityCode, game: GameQuizV2): ArchetypeV2 {
  const codeLetters = code.split('');

  const codePolarities = Object.fromEntries(
    AXIS_ORDER.map((axis, i) => {
      const letter = codeLetters[i];
      const def = AXES[i]!;
      return [axis, letter === def.highLetter ? 'high' : 'low'];
    }),
  ) as Record<Axis, 'low' | 'high'>;

  const [d0, d1, d2] = game.dominantAxes;

  const match = game.archetypes.find(
    (a) =>
      a.polarityPattern[d0] === codePolarities[d0] &&
      a.polarityPattern[d1] === codePolarities[d1] &&
      a.polarityPattern[d2] === codePolarities[d2],
  );

  return match ?? game.archetypes[0]!;
}
