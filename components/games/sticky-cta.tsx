'use client';

import {useEffect, useState} from 'react';
import {Link} from '@/i18n/navigation';
import type {GameQuizV2, SiteLocale} from '@/lib/data/games/types';

const COPY: Record<SiteLocale, (title: string) => string> = {
  zh: (title) => `开始 ${title} 玩家测试`,
  en: (title) => `Take the ${title} quiz`,
  ja: (title) => `${title} プレイヤー診断を始める`,
  ko: (title) => `${title} 플레이어 테스트 시작`,
};

interface StickyCTAProps {
  game: GameQuizV2;
  locale: SiteLocale;
  heroRef: React.RefObject<HTMLElement | null>;
}

/** Vermillion pill that slides in after the hero scrolls past. */
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
      className="pointer-events-none fixed bottom-5 left-0 right-0 z-40 flex justify-center px-5 transition-[transform,opacity] duration-300"
      style={{
        transform: visible ? 'translateY(0)' : 'translateY(120%)',
        opacity: visible ? 1 : 0,
      }}
      aria-hidden={!visible}
    >
      <Link
        href={`/games/${game.slug}/play`}
        className="pointer-events-auto inline-flex items-center gap-2.5 rounded-full bg-[var(--vermillion)] px-6 py-3.5 text-[14px] font-semibold text-[var(--paper-soft)] shadow-[0_16px_40px_-10px_rgba(0,0,0,0.55),inset_0_0_0_1px_color-mix(in_oklab,var(--paper-soft)_25%,transparent)] transition-[background,transform] duration-200 hover:-translate-y-0.5 hover:bg-[var(--ink)]"
      >
        <span className="truncate max-w-[60vw]">{COPY[locale](title)}</span>
        <span
          className="inline-flex size-[22px] items-center justify-center rounded-full bg-[var(--paper-soft)] text-[var(--vermillion)]"
          aria-hidden
        >
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </span>
      </Link>
    </div>
  );
}
