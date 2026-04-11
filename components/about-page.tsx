'use client';

import {useTranslations, useLocale} from 'next-intl';
import {Link} from '@/i18n/navigation';
import {Card, CardContent} from '@/components/ui/card';
import {Button} from '@/components/ui/button';
import {Separator} from '@/components/ui/separator';
import {ChevronRight} from 'lucide-react';
import {getLocaleUrl, getPageSeo} from '@/lib/metadata';

const DIMENSION_MODELS = [
  {key: 'S', color: 'bg-primary/10 text-primary'},
  {key: 'E', color: 'bg-secondary/10 text-secondary'},
  {key: 'A', color: 'bg-accent/10 text-accent-foreground'},
  {key: 'Ac', color: 'bg-secondary/10 text-secondary'},
  {key: 'So', color: 'bg-primary/10 text-primary'},
] as const;

export function AboutPage() {
  const t = useTranslations('about');
  const tb = useTranslations('breadcrumb');
  const ti = useTranslations('intro');
  const locale = useLocale();
  const seo = getPageSeo(locale, 'about');
  const pageUrl = getLocaleUrl(locale, '/about');

  return (
    <div className="mx-auto max-w-2xl px-4 py-12">
      <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-1 text-sm text-muted-foreground">
        <Link href="/" className="hover:text-foreground transition-colors">{tb('home')}</Link>
        <ChevronRight className="h-3.5 w-3.5" />
        <span className="text-foreground font-medium">{t('pageTitle')}</span>
      </nav>

      <h1 className="font-heading text-4xl font-bold tracking-tight">{t('pageTitle')}</h1>

      <Separator className="my-8" />

      {/* What is SBTI */}
      <section className="space-y-4">
        <h2 className="font-heading text-2xl font-bold">{t('whatIsSbti')}</h2>
        <p className="text-base leading-relaxed text-foreground/85">{t('whatIsSbtiP1')}</p>
        <p className="text-base leading-relaxed text-foreground/85">{t('whatIsSbtiP2')}</p>
      </section>

      <Separator className="my-8" />

      {/* How It Works */}
      <section className="space-y-6">
        <h2 className="font-heading text-2xl font-bold">{t('howItWorks')}</h2>
        <div className="grid gap-4 sm:grid-cols-3">
          {(['howStep1', 'howStep2', 'howStep3'] as const).map((step, i) => (
            <Card key={step} className="border-0 shadow-sm">
              <CardContent className="pt-6">
                <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                  {i + 1}
                </div>
                <h3 className="font-heading text-lg font-semibold">{t(`${step}Title`)}</h3>
                <p className="mt-2 text-base leading-relaxed text-muted-foreground">{t(`${step}Desc`)}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Separator className="my-8" />

      {/* 5 Dimension Models */}
      <section className="space-y-6">
        <h2 className="font-heading text-2xl font-bold">{t('dimensionsTitle')}</h2>
        <p className="text-base leading-relaxed text-foreground/85">{t('dimensionsIntro')}</p>
        <div className="space-y-3">
          {DIMENSION_MODELS.map(({key, color}) => (
            <Card key={key} className="border-0 shadow-sm">
              <CardContent className="flex items-start gap-4 pt-6">
                <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg font-mono text-sm font-bold ${color}`}>
                  {key}
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold">{t(`dim${key}`)}</h3>
                  <p className="mt-1 text-base leading-relaxed text-muted-foreground">{t(`dim${key}Desc`)}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA */}
      <div className="mt-12 text-center">
        <Link href="/">
          <Button size="lg" className="rounded-full px-10">
            {ti('start')}
          </Button>
        </Link>
      </div>

      {/* Schema.org */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'AboutPage',
            name: seo.title,
            url: pageUrl,
            description: seo.description,
            about: {
              '@type': 'Thing',
              name: 'SBTI',
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
