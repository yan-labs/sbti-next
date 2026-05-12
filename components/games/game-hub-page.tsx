'use client';

import {useRef} from 'react';
import {GameHero} from './game-hero';
import {ArchetypeGallery} from './archetype-gallery';
import {HowItWorksGame} from './how-it-works-game';
import {SixAxisExplainer} from './six-axis-explainer';
import {GameFAQ} from './game-faq';
import {RelatedGames} from './related-games';
import {StickyCTA} from './sticky-cta';
import type {GameQuizV2, SiteLocale} from '@/lib/data/games/types';

interface GameHubPageProps {
  game: GameQuizV2;
  locale: SiteLocale;
}

export function GameHubPage({game, locale}: GameHubPageProps) {
  const heroRef = useRef<HTMLElement>(null);

  return (
    <main data-game={game.slug} className="min-h-screen">
      <div ref={heroRef as React.RefObject<HTMLDivElement>}>
        <GameHero game={game} locale={locale} />
      </div>
      <ArchetypeGallery game={game} locale={locale} />
      <HowItWorksGame game={game} locale={locale} />
      <SixAxisExplainer locale={locale} />
      <GameFAQ game={game} locale={locale} />
      <RelatedGames game={game} locale={locale} />
      <StickyCTA game={game} locale={locale} heroRef={heroRef as React.RefObject<HTMLElement | null>} />
    </main>
  );
}
