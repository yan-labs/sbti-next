'use client';

import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/navigation';
import {BLOG_POSTS} from '@/lib/data/blog';

/**
 * Editorial blog-card row — used as a teaser strip on inline pages.
 * Replaces the previous emoji/gradient theme with hairline cards that
 * match the v2 design register (mono dates, Fraunces titles, vermillion
 * accent on hover).
 */
export function BlogCards({compact = false}: {compact?: boolean}) {
  const t = useTranslations('blog');

  return (
    <section className={compact ? 'w-full' : 'mx-auto w-full max-w-[1240px] py-12'}>
      <div className="mb-8 flex items-end justify-between gap-4 border-b border-border pb-4">
        <h2 className="font-heading text-2xl font-bold tracking-tight md:text-3xl">
          {t('sectionTitle')}
        </h2>
        <Link
          href="/blog"
          className="inline-flex shrink-0 items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-foreground"
        >
          {t('viewAll')}
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="size-3" aria-hidden="true"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
        </Link>
      </div>

      <div className={`grid gap-5 ${compact ? 'grid-cols-1 md:grid-cols-3' : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'}`}>
        {BLOG_POSTS.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group flex h-full flex-col border border-border bg-card p-5 transition-all hover:-translate-y-0.5 hover:border-foreground"
          >
            {/* Mono meta row */}
            <div className="mb-4 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              <time dateTime={post.date}>{post.date}</time>
              <span className="text-muted-foreground/40">·</span>
              <span>{t('readTime', {minutes: post.readTime})}</span>
            </div>

            {/* Editorial title in Fraunces */}
            <h3 className="line-clamp-2 font-heading text-xl font-bold leading-[1.15] tracking-tight text-foreground transition-colors group-hover:text-primary md:text-[22px]">
              {t(`posts.${post.slug}.title`)}
            </h3>

            {/* Italic dek */}
            <p
              className="mt-3 line-clamp-3 flex-1 font-heading text-[15px] italic leading-[1.45] text-muted-foreground"
              style={{fontVariationSettings: '"opsz" 144, "SOFT" 80, "wght" 400'}}
            >
              {t(`posts.${post.slug}.excerpt`)}
            </p>

            {/* Read article link */}
            <span className="mt-5 inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-foreground/80 transition-colors group-hover:text-primary">
              {t('readArticle')}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="size-3 transition-transform group-hover:translate-x-1" aria-hidden="true"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
