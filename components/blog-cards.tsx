'use client';

import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/navigation';
import {BLOG_POSTS} from '@/lib/data/blog';
import {ArrowRight, CalendarDays, Clock} from 'lucide-react';

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
    <section className={compact ? 'w-full' : 'w-full max-w-4xl py-8'}>
      <div className="mb-5 flex items-center justify-between gap-4">
        <h2 className="font-heading text-2xl font-bold tracking-tight md:text-3xl">
          {t('sectionTitle')}
        </h2>
        <Link
          href="/blog"
          className="flex shrink-0 items-center gap-1 text-sm font-bold text-primary hover:underline"
        >
          {t('viewAll')}
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>

      <div className={`grid gap-3 ${compact ? 'grid-cols-1 md:grid-cols-3' : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'}`}>
        {BLOG_POSTS.map((post, i) => {
          const style = CARD_STYLES[i % CARD_STYLES.length];
          return (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
              <div
                className={`relative h-full overflow-hidden rounded-xl border bg-gradient-to-br p-4 transition-all hover:-translate-y-0.5 hover:shadow-md ${style.gradient} ${style.border}`}
              >
                <div className="flex h-full flex-col">
                  <div className="mb-3 flex items-center gap-2 text-xs font-medium text-muted-foreground">
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-base ${style.icon}`}
                    >
                      {style.emoji}
                    </span>
                    <span className="flex items-center gap-1">
                      <CalendarDays className="h-3.5 w-3.5" />
                      <time dateTime={post.date}>{post.date}</time>
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" />
                      {t('readTime', {minutes: post.readTime})}
                    </span>
                  </div>

                  <div className="min-w-0 flex-1">
                    <h3 className="line-clamp-2 font-heading text-base font-bold leading-snug transition-colors group-hover:text-primary">
                      {t(`posts.${post.slug}.title`)}
                    </h3>
                    <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-foreground/70">
                      {t(`posts.${post.slug}.excerpt`)}
                    </p>
                    <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-muted-foreground">
                      {t(`articles.${post.slug}.p1`)}
                    </p>
                  </div>

                  <span className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-primary">
                    {t('readArticle')}
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
