# Six-Axis Redesign — 2026-05-12

Eight games. Thirty questions each. One 6-letter player code.

The original SBTI game quizzes mapped your answers to four buckets: carry, support, planner, chaos. That worked, but the results felt thin. You'd get "Carry" and think — OK, but what kind of carry? The old model had no way to answer that.

The six-axis redesign fixes this. Every game now scores you across six dimensions: Tempo (slow burn vs. rush down), Nerve (risk manager vs. all-in), Bond (solo wolf vs. team anchor), Intel (data driven vs. feel player), Flair (efficiency mode vs. show time), Mental (titanium tilt vs. quick tilt). Each axis has two poles, each answer casts signed votes, and the final 6-letter code captures where you land on all six.

Eight visual identity tokens ship alongside the scoring model — one per game. Each hub page gets its own CSS color theme (e.g. Valorant's electric accent, PUBG's tactical olive) so the result page looks like it belongs to that game, not generic quiz software.

Under the hood: 64 archetype static routes (8 games × 8 archetypes) pre-built at compile time, giving 256 total locale-prefixed pages. FAQ schema is injected on all 8 game hubs using the real archetype names and the actual 30-question count. V1 `GameQuiz` shape and `game-quizzes.ts` are deleted — V2 is now the only code path.

If you tested on the old model, retake. The radar chart is worth it.
