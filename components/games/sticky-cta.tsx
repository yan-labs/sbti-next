'use client';

import {useEffect, useState} from 'react';
import Image from 'next/image';
import {Link} from '@/i18n/navigation';
import type {GameQuizV2, SiteLocale} from '@/lib/data/games/types';

const CTA_COPY: Record<SiteLocale, (title: string) => string> = {
  zh: (title) => `测 ${title}`,
  en: (title) => `Take the ${title} quiz`,
  ja: (title) => `${title} を診断`,
  ko: (title) => `${title} 테스트`,
};

const BTN_COPY: Record<SiteLocale, string> = {
  zh: '开始',
  en: 'Start',
  ja: 'スタート',
  ko: '시작',
};

interface StickyCTAProps {
  game: GameQuizV2;
  locale: SiteLocale;
  heroRef: React.RefObject<HTMLElement | null>;
}

export function StickyCTA({game, locale, heroRef}: StickyCTAProps) {
  const [visible, setVisible] = useState(false);
  const title = game.title[locale];

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;
    const obs = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      {threshold: 0},
    );
    obs.observe(hero);
    return () => obs.disconnect();
  }, [heroRef]);

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-40 transition-transform duration-300"
      style={{transform: visible ? 'translateY(0)' : 'translateY(100%)'}}
      aria-hidden={!visible}
    >
      <div
        className="flex items-center justify-between gap-4 px-5 py-3 shadow-xl md:mx-auto md:max-w-xl md:mb-4 md:rounded-full"
        style={{
          background: 'var(--game-surface, var(--card))',
          borderTop: '1px solid var(--game-primary, var(--primary))',
          color: 'var(--game-ink, var(--card-foreground))',
        }}
      >
        <div className="flex items-center gap-3 min-w-0">
          <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-background/20 p-1">
            <Image
              src={`/game-logos/${game.slug}.png`}
              alt=""
              width={22}
              height={22}
              className="object-contain"
              unoptimized
            />
          </div>
          <p className="truncate text-sm font-semibold" style={{color: 'var(--game-ink, inherit)'}}>
            {CTA_COPY[locale](title)}
          </p>
        </div>

        <Link
          href={`/games/${game.slug}/play`}
          className="shrink-0 rounded-full px-5 py-2 text-sm font-bold transition-opacity hover:opacity-90 focus-visible:outline-none"
          style={{
            background: 'var(--game-primary, var(--primary))',
            color: 'var(--game-surface, var(--primary-foreground))',
          }}
        >
          {BTN_COPY[locale]}
        </Link>
      </div>
    </div>
  );
}
