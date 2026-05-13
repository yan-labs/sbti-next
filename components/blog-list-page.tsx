'use client';

import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/navigation';
import {ChevronRight} from 'lucide-react';
import {BLOG_POSTS} from '@/lib/data/blog';

export function BlogListPage() {
  const t = useTranslations('blog');
  const tb = useTranslations('breadcrumb');

  const [featured, ...rest] = BLOG_POSTS;

  return (
    <div className="bg-background">
      <div className="mx-auto max-w-[1240px] px-5 md:px-8 py-20 md:py-24">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-12 flex items-center gap-2 text-xs font-mono uppercase tracking-[0.18em] text-muted-foreground">
          <Link href="/" className="hover:text-foreground transition-colors">{tb('home')}</Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-foreground">{t('pageTitle')}</span>
        </nav>

        {/* Section head */}
        <header className="grid grid-cols-1 gap-8 md:grid-cols-[auto_1fr_auto] md:items-baseline mb-16 md:mb-20">
          <span className="editorial-kicker">Journal</span>
          <h1 className="editorial-h1 md:col-start-1 md:col-end-3 md:mt-2">
            Notes from the <em>satire lab</em>.
          </h1>
          <p className="editorial-dek max-w-[40ch] md:col-start-1 md:col-end-3 md:mt-4">
            {t('pageSubtitle')}
          </p>
          <span className="hidden md:block font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground md:row-span-2 md:self-end text-right leading-[1.7]">
            {BLOG_POSTS.length.toString().padStart(2, '0')} articles<br />
            Updated weekly
          </span>
        </header>

        {/* Featured */}
        <Link href={`/blog/${featured.slug}`} className="group block mb-16 md:mb-20">
          <article className="grid grid-cols-1 gap-8 md:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] md:gap-16 border-t border-ink/90 dark:border-foreground pt-8 transition-all">
            <div className="flex flex-col gap-3">
              <span className="editorial-kicker text-primary">Featured · 01</span>
              <div className="flex items-center gap-4 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                <time dateTime={featured.date}>{featured.date}</time>
                <span aria-hidden>·</span>
                <span>{t('readTime', {minutes: featured.readTime})}</span>
              </div>
            </div>
            <div>
              <h2 className="font-heading text-3xl md:text-5xl font-bold leading-[1.04] tracking-[-0.02em] text-foreground group-hover:text-primary transition-colors">
                {t(`posts.${featured.slug}.title`)}
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground max-w-[52ch]">
                {t(`posts.${featured.slug}.excerpt`)}
              </p>
              <span className="mt-6 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-primary border-b border-primary/40 group-hover:border-primary pb-[2px]">
                {t('readArticle')}
                <span className="font-heading not-italic">→</span>
              </span>
            </div>
          </article>
        </Link>

        {/* Rest of posts — editorial 2-col */}
        <div className="grid grid-cols-1 gap-px bg-border border border-border md:grid-cols-2">
          {rest.map((post, i) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block bg-card p-8 md:p-10 transition-colors hover:bg-muted"
            >
              <div className="flex items-center gap-4 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground mb-5">
                <span className="text-primary">{String(i + 2).padStart(2, '0')}</span>
                <time dateTime={post.date}>{post.date}</time>
                <span aria-hidden>·</span>
                <span>{t('readTime', {minutes: post.readTime})}</span>
              </div>
              <h3 className="font-heading text-2xl md:text-[28px] font-bold leading-[1.15] tracking-[-0.015em] text-foreground group-hover:text-primary transition-colors">
                {t(`posts.${post.slug}.title`)}
              </h3>
              <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground line-clamp-3">
                {t(`posts.${post.slug}.excerpt`)}
              </p>
              <span className="mt-5 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-foreground/70 group-hover:text-primary transition-colors">
                {t('readArticle')}
                <span className="font-heading not-italic transition-transform group-hover:translate-x-1">→</span>
              </span>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 md:mt-24 border-t border-border pt-16 grid gap-8 md:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] md:items-end">
          <div>
            <span className="editorial-kicker block mb-3">Take the test</span>
            <h3 className="editorial-h2">{t('bottomCtaTitle')}</h3>
            <p className="mt-4 text-muted-foreground max-w-[40ch]">{t('bottomCtaDesc')}</p>
          </div>
          <Link href="/test" className="btn-editorial justify-self-start md:justify-self-end">
            {t('bottomCtaButton')}
          </Link>
        </div>
      </div>
    </div>
  );
}
