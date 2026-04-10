'use client';

import {usePathname, useRouter} from '@/i18n/navigation';
import {routing} from '@/i18n/routing';
import {useLocale} from 'next-intl';

const LOCALE_LABELS: Record<string, string> = {
  zh: '中文',
  en: 'EN',
  ja: '日本語',
  ko: '한국어',
};

export function LocaleSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="flex items-center gap-1">
      {routing.locales.map((l) => (
        <button
          key={l}
          onClick={() => router.replace(pathname, {locale: l})}
          className={`rounded-md px-2 py-1 text-xs transition-colors ${
            l === locale
              ? 'bg-primary text-primary-foreground'
              : 'text-muted-foreground hover:text-foreground'
          }`}
        >
          {LOCALE_LABELS[l]}
        </button>
      ))}
    </div>
  );
}
