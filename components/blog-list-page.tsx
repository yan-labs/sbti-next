'use client';

import {useTranslations, useLocale} from 'next-intl';
import {Link} from '@/i18n/navigation';
import {Card, CardContent} from '@/components/ui/card';
import {Separator} from '@/components/ui/separator';
import {ChevronRight, Clock} from 'lucide-react';
import {BLOG_POSTS} from '@/lib/data/blog';
import {getLocaleUrl, getPageSeo} from '@/lib/metadata';

export function BlogListPage() {
  const t = useTranslations('blog');
  const tb = useTranslations('breadcrumb');
  const locale = useLocale();
  const seo = getPageSeo(locale, 'blog');

  return (
    <div className="mx-auto max-w-2xl px-4 py-12">
      <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-1 text-sm text-muted-foreground">
        <Link href="/" className="hover:text-foreground transition-colors">{tb('home')}</Link>
        <ChevronRight className="h-3.5 w-3.5" />
        <span className="text-foreground font-medium">{t('pageTitle')}</span>
      </nav>

      <div className="mb-8">
        <h1 className="font-heading text-4xl font-bold tracking-tight">{t('pageTitle')}</h1>
        <p className="mt-3 text-lg text-muted-foreground">{t('pageSubtitle')}</p>
      </div>

      <Separator className="my-8" />

      <div className="space-y-6">
        {BLOG_POSTS.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`}>
            <Card className="group border-0 shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5">
              <CardContent className="p-6">
                <div className="mb-2 flex items-center gap-3 text-sm text-muted-foreground">
                  <time dateTime={post.date}>{post.date}</time>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" />
                    {t('readTime', {minutes: post.readTime})}
                  </span>
                </div>
                <h2 className="font-heading text-xl font-bold group-hover:text-primary transition-colors">
                  {t(`posts.${post.slug}.title`)}
                </h2>
                <p className="mt-2 text-base text-muted-foreground leading-relaxed">
                  {t(`posts.${post.slug}.excerpt`)}
                </p>
              </CardContent>
            </Card>
          </Link>
        ))}
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
