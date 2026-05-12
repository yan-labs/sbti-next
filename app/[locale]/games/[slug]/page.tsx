import {notFound} from 'next/navigation';
import {setRequestLocale} from 'next-intl/server';
import {routing} from '@/i18n/routing';
import type {GameSlug} from '@/lib/theme/game-themes';

// Phase 5: data-game attribute injection point.
// Full game quiz content wired in Phase 7 (game-quiz-app + game-quizzes data).

const VALID_SLUGS = [
  'league-of-legends',
  'counter-strike-2',
  'valorant',
  'delta-force',
  'honor-of-kings',
  'overwatch-2',
  'pubg-battlegrounds',
  'apex-legends',
] as const satisfies readonly GameSlug[];

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    VALID_SLUGS.map((slug) => ({locale, slug})),
  );
}

export default async function GameQuizPage({
  params,
}: {
  params: Promise<{locale: string; slug: string}>;
}) {
  const {locale, slug} = await params;
  if (!VALID_SLUGS.includes(slug as GameSlug)) {
    notFound();
  }
  setRequestLocale(locale);

  return (
    <div data-game={slug}>
      {/* Game quiz content rendered here — Phase 7 wires GameQuizApp */}
    </div>
  );
}
