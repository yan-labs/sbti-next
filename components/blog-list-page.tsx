'use client';

import {useTranslations, useLocale} from 'next-intl';
import {Link} from '@/i18n/navigation';
import {Button} from '@/components/ui/button';
import {ChevronRight, Clock, ArrowRight} from 'lucide-react';
import {BLOG_POSTS} from '@/lib/data/blog';
import {getLocaleUrl, getPageSeo} from '@/lib/metadata';

const CARD_THEMES = [
  {
    gradient: 'from-primary/12 via-primary/6 to-transparent',
    border: 'border-primary/20 hover:border-primary/40',
    badge: 'bg-primary/15 text-primary',
    emoji: '⚔️',
    tag: 'VS',
  },
  {
    gradient: 'from-secondary/12 via-secondary/6 to-transparent',
    border: 'border-secondary/20 hover:border-secondary/40',
    badge: 'bg-secondary/15 text-secondary',
    emoji: '🎭',
    tag: 'GUIDE',
  },
  {
    gradient: 'from-accent/12 via-accent/6 to-transparent',
    border: 'border-accent/20 hover:border-accent/40',
    badge: 'bg-accent/15 text-accent-foreground',
    emoji: '🧬',
    tag: 'DEEP DIVE',
  },
];

export function BlogListPage() {
  const t = useTranslations('blog');
  const tb = useTranslations('breadcrumb');
  const locale = useLocale();
  const seo = getPageSeo(locale, 'blog');

  const featured = BLOG_POSTS[0];
  const rest = BLOG_POSTS.slice(1);
  const featuredTheme = CARD_THEMES[0];

  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-1 text-sm text-muted-foreground">
        <Link href="/" className="hover:text-foreground transition-colors">{tb('home')}</Link>
        <ChevronRight className="h-3.5 w-3.5" />
        <span className="text-foreground font-medium">{t('pageTitle')}</span>
      </nav>

      {/* Header */}
      <div className="mb-10">
        <h1 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl">{t('pageTitle')}</h1>
        <p className="mt-3 text-lg text-muted-foreground">{t('pageSubtitle')}</p>
      </div>

      {/* Featured / Hero Card */}
      <Link href={`/blog/${featured.slug}`} className="group block">
        <div className={`relative overflow-hidden rounded-2xl border bg-gradient-to-br p-6 sm:p-8 transition-all hover:-translate-y-1 hover:shadow-lg ${featuredTheme.gradient} ${featuredTheme.border}`}>
          <div className="flex items-start gap-4">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground text-xl">
              {featuredTheme.emoji}
            </span>
            <div className="min-w-0 flex-1">
              <div className="mb-3 flex flex-wrap items-center gap-2">
                <span className={`rounded-full px-2.5 py-0.5 text-xs font-bold ${featuredTheme.badge}`}>
                  {featuredTheme.tag}
                </span>
                <span className="text-xs text-muted-foreground">{featured.date}</span>
                <span className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Clock className="h-3 w-3" />
                  {t('readTime', {minutes: featured.readTime})}
                </span>
              </div>
              <h2 className="font-heading text-2xl font-bold tracking-tight group-hover:text-primary transition-colors sm:text-3xl">
                {t(`posts.${featured.slug}.title`)}
              </h2>
              <p className="mt-3 text-base leading-relaxed text-foreground/70">
                {t(`posts.${featured.slug}.excerpt`)}
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">
                {t('readArticle')}
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </span>
            </div>
          </div>
        </div>
      </Link>

      {/* Rest of Posts */}
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        {rest.map((post, i) => {
          const theme = CARD_THEMES[(i + 1) % CARD_THEMES.length];
          return (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
              <div className={`relative h-full overflow-hidden rounded-xl border bg-gradient-to-br p-5 transition-all hover:-translate-y-0.5 hover:shadow-md ${theme.gradient} ${theme.border}`}>
                <div className="flex items-start gap-3">
                  <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-base ${theme.badge}`}>
                    {theme.emoji}
                  </span>
                  <div className="min-w-0">
                    <div className="mb-2 flex flex-wrap items-center gap-2">
                      <span className={`rounded-full px-2 py-0.5 text-[10px] font-bold ${theme.badge}`}>
                        {theme.tag}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Clock className="h-3 w-3" />
                        {t('readTime', {minutes: post.readTime})}
                      </span>
                    </div>
                    <h2 className="font-heading text-lg font-bold leading-snug group-hover:text-primary transition-colors">
                      {t(`posts.${post.slug}.title`)}
                    </h2>
                    <p className="mt-2 text-sm leading-relaxed text-foreground/60 line-clamp-2">
                      {t(`posts.${post.slug}.excerpt`)}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      {/* CTA */}
      <div className="mt-12 rounded-2xl bg-primary/5 border border-primary/20 p-8 text-center">
        <h3 className="font-heading text-xl font-bold">{t('bottomCtaTitle')}</h3>
        <p className="mt-2 text-sm text-muted-foreground">{t('bottomCtaDesc')}</p>
        <Link href="/test">
          <Button size="lg" className="mt-4 rounded-full px-10">{t('bottomCtaButton')}</Button>
        </Link>
      </div>

      {/* Schema.org */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Blog',
            name: seo.title,
            url: getLocaleUrl(locale, '/blog'),
            description: seo.description,
            publisher: {
              '@type': 'Organization',
              name: 'SBTI',
              url: getLocaleUrl(locale),
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              {'@type': 'ListItem', position: 1, name: tb('home'), item: getLocaleUrl(locale)},
              {'@type': 'ListItem', position: 2, name: t('pageTitle')},
            ],
          }),
        }}
      />
    </div>
  );
}
