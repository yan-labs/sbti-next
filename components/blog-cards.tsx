'use client';

import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/navigation';
import {BLOG_POSTS} from '@/lib/data/blog';
import {ArrowRight} from 'lucide-react';

const CARD_STYLES = [
  {
    gradient: 'from-primary/15 to-primary/5',
    border: 'border-primary/20 hover:border-primary/40',
    icon: 'bg-primary text-primary-foreground',
    emoji: '⚔️',
  },
  {
    gradient: 'from-secondary/15 to-secondary/5',
    border: 'border-secondary/20 hover:border-secondary/40',
    icon: 'bg-secondary text-secondary-foreground',
    emoji: '🎭',
  },
  {
    gradient: 'from-accent/15 to-accent/5',
    border: 'border-accent/20 hover:border-accent/40',
    icon: 'bg-accent text-accent-foreground',
    emoji: '🧬',
  },
];

export function BlogCards({compact = false}: {compact?: boolean}) {
  const t = useTranslations('blog');

  return (
    <section className={compact ? 'w-full' : 'w-full max-w-2xl py-8'}>
      <div className="mb-6 flex items-center justify-between">
        <h2 className="font-heading text-2xl font-bold tracking-tight">
          {t('sectionTitle')}
        </h2>
        <Link
          href="/blog"
          className="flex items-center gap-1 text-sm font-medium text-primary hover:underline"
        >
          {t('viewAll')}
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>

      <div className={`grid gap-3 ${compact ? 'grid-cols-1' : 'grid-cols-1 sm:grid-cols-3'}`}>
        {BLOG_POSTS.map((post, i) => {
          const style = CARD_STYLES[i % CARD_STYLES.length];
          return (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
              <div
                className={`relative overflow-hidden rounded-xl border bg-gradient-to-br p-4 transition-all hover:-translate-y-0.5 hover:shadow-md ${style.gradient} ${style.border}`}
              >
                <div className="flex items-start gap-3">
                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-base ${style.icon}`}
                  >
                    {style.emoji}
                  </span>
                  <div className="min-w-0">
                    <h3 className="font-heading text-sm font-bold leading-tight group-hover:text-primary transition-colors line-clamp-2">
                      {t(`posts.${post.slug}.title`)}
                    </h3>
                    {!compact && (
                      <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground line-clamp-2">
                        {t(`posts.${post.slug}.excerpt`)}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
