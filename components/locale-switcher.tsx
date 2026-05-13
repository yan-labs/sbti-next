'use client';

import {usePathname, useRouter} from '@/i18n/navigation';
import {routing} from '@/i18n/routing';
import {useLocale} from 'next-intl';

// Compact glyphs matching the v2 design proposal (中 / EN / 日 / 한).
const LOCALE_LABELS: Record<string, string> = {
  zh: '中',
  en: 'EN',
  ja: '日',
  ko: '한',
};

export function LocaleSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="inline-flex items-center rounded-full border border-border bg-card/60 p-[3px] backdrop-blur">
      {routing.locales.map((l) => (
        <button
          key={l}
          onClick={() => router.replace(pathname, {locale: l})}
          className={`rounded-full px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.16em] transition-colors ${
            l === locale
              ? 'bg-foreground text-background'
              : 'text-muted-foreground hover:text-foreground'
          }`}
          aria-label={l}
        >
          {LOCALE_LABELS[l]}
        </button>
      ))}
    </div>
  );
}
