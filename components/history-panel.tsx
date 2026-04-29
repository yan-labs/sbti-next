'use client';

import {useState} from 'react';
import {useTranslations, useLocale} from 'next-intl';
import Image from 'next/image';
import {useRouter} from '@/i18n/navigation';
import {useQuizStore} from '@/lib/store';
import {getHistory, clearHistory, deleteEntry, HistoryEntry} from '@/lib/history';
import {TYPE_IMAGES} from '@/lib/data/personalities';

function formatDate(isoDate: string, locale: string): string {
  return new Intl.DateTimeFormat(locale === 'zh' ? 'zh-CN' : locale === 'ja' ? 'ja-JP' : locale === 'ko' ? 'ko-KR' : 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(isoDate));
}

export function HistoryPanel() {
  const t = useTranslations('history');
  const tp = useTranslations('personalities');
  const locale = useLocale();
  const router = useRouter();
  const loadFromHistory = useQuizStore((s) => s.loadFromHistory);
  const [entries, setEntries] = useState<HistoryEntry[]>(() => getHistory());

  if (entries.length === 0) return null;

  const s = (fn: (k: string) => string, key: string, fallback: string) => {
    try { return fn(key); } catch { return fallback; }
  };

  function handleView(entry: HistoryEntry) {
    loadFromHistory(entry);
    router.push('/test');
  }

  function handleDelete(id: string) {
    deleteEntry(id);
    setEntries((prev) => prev.filter((e) => e.id !== id));
  }

  function handleClearAll() {
    clearHistory();
    setEntries([]);
  }

  return (
    <section className="w-full max-w-lg py-8">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="font-heading text-lg font-bold tracking-tight text-foreground">
          {t('title')}
        </h2>
        <button
          onClick={handleClearAll}
          className="text-xs text-muted-foreground underline-offset-2 transition-colors hover:text-foreground hover:underline"
        >
          {t('clearAll')}
        </button>
      </div>

      <div className="space-y-2">
        {entries.map((entry) => {
          const code = entry.result.primary.code;
          const img = TYPE_IMAGES[code];
          const name = s(tp, `${code}.name`, entry.result.primary.cn);
          const similarity = Math.round(entry.result.primary.similarity);

          return (
            <div
              key={entry.id}
              className="group flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3 shadow-sm transition-all hover:border-primary/30 hover:shadow-md"
            >
              {img && (
                <div className="shrink-0 overflow-hidden rounded-lg w-10 h-10">
                  <Image
                    src={img}
                    alt={name}
                    width={80}
                    height={80}
                    className="h-full w-full object-cover transition-transform group-hover:scale-105"
                  />
                </div>
              )}

              <div className="min-w-0 flex-1">
                <div className="flex items-baseline gap-2">
                  <span className="font-heading text-sm font-bold text-foreground">{code}</span>
                  <span className="truncate text-xs text-muted-foreground">{name}</span>
                  <span className="ml-auto shrink-0 font-mono text-xs text-primary">{similarity}%</span>
                </div>
                <p className="mt-0.5 text-xs text-muted-foreground/70">
                  {formatDate(entry.date, locale)}
                </p>
              </div>

              <div className="flex shrink-0 items-center gap-1">
                <button
                  onClick={() => handleView(entry)}
                  className="rounded-lg bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary transition-all hover:bg-primary/20 active:scale-95"
                >
                  {t('viewAgain')}
                </button>
                <button
                  onClick={() => handleDelete(entry.id)}
                  className="rounded-lg p-1.5 text-muted-foreground/50 transition-colors hover:text-muted-foreground"
                  aria-label="delete"
                >
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M1 1l10 10M11 1L1 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
