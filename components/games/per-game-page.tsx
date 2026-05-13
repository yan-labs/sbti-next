'use client';

import {useRef} from 'react';
import {GameHero} from './game-hero';
import {ArchetypeGallery} from './archetype-gallery';
import {CompatPromo} from './compat-promo';
import {HowItWorksGame} from './how-it-works-game';
import {SixAxisExplainer} from './six-axis-explainer';
import {GameFAQ} from './game-faq';
import {RelatedGames} from './related-games';
import {StickyCTA} from './sticky-cta';
import type {GameQuizV2, SiteLocale} from '@/lib/data/games/types';

interface PerGamePageProps {
  game: GameQuizV2;
  locale: SiteLocale;
}

/**
 * Per-game page composition (`/games/[slug]`).
 *
 * Editorial layout: GameHero → 8 archetype gallery → quick stats strip →
 * 6-axis framework (dominant axes highlighted) → FAQ → related games.
 * Sticky CTA shows once the hero scrolls past.
 */
export function PerGamePage({game, locale}: PerGamePageProps) {
  const heroRef = useRef<HTMLElement>(null);

  return (
    <main data-game={game.slug} className="min-h-screen">
      <div ref={heroRef as React.RefObject<HTMLDivElement>}>
        <GameHero game={game} locale={locale} />
      </div>
      <ArchetypeGallery game={game} locale={locale} />
      <CompatPromo game={game} locale={locale} />
      <HowItWorksGame game={game} locale={locale} />
      <SixAxisExplainer game={game} locale={locale} />
      <GameFAQ game={game} locale={locale} />
      <RelatedGames game={game} locale={locale} />
      <StickyCTA game={game} locale={locale} heroRef={heroRef as React.RefObject<HTMLElement | null>} />
    </main>
  );
}
