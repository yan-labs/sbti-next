'use client';

import {useTranslations} from 'next-intl';
import {TYPE_IMAGES, NORMAL_TYPES} from '@/lib/data/personalities';
import {DIMENSION_ORDER} from '@/lib/types';
import {parsePattern} from '@/lib/engine';
import {Card, CardContent} from '@/components/ui/card';
import {Badge} from '@/components/ui/badge';
import {Button} from '@/components/ui/button';
import {Separator} from '@/components/ui/separator';
import {Link} from '@/i18n/navigation';
import {useLocale} from 'next-intl';
import Image from 'next/image';
import {ChevronRight} from 'lucide-react';
import {ShareButtons} from '@/components/share-buttons';
import {BASE_URL, getLocaleUrl, getTypeSeo} from '@/lib/metadata';

export function TypeDetailPage({code}: {code: string}) {
  const t = useTranslations('result');
  const ts = useTranslations('share');
  const tp = useTranslations('personalities');
  const td = useTranslations('dimensions');
  const tde = useTranslations('dimExplanations');
  const ti = useTranslations('intro');
  const tb = useTranslations('breadcrumb');
  const locale = useLocale();

  const s = (fn: (k: string) => string, key: string, fallback: string) => {
    try { return fn(key); } catch { return fallback; }
  };

  const name = s(tp, `${code}.name`, code);
  const intro = s(tp, `${code}.intro`, '');
  const desc = s(tp, `${code}.desc`, '');
  const imgSrc = TYPE_IMAGES[code];

  // Find pattern for this type
  const typeEntry = NORMAL_TYPES.find(t => t.code === code);
  const pattern = typeEntry ? parsePattern(typeEntry.pattern) : null;

  const pageUrl = getLocaleUrl(locale, `/type/${code}`);
  const seo = getTypeSeo(locale, code, name, intro);

  return (
    <div className="mx-auto max-w-2xl px-4 py-12">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-1 text-sm text-muted-foreground">
        <Link href="/" className="hover:text-foreground transition-colors">{tb('home')}</Link>
        <ChevronRight className="h-3.5 w-3.5" />
        <span className="text-foreground font-medium">{code}（{name}）</span>
      </nav>

      {/* Hero */}
      <div className="mb-8 text-center">
        {imgSrc && (
          <div className="mx-auto mb-6 w-48">
            <Image src={imgSrc} alt={name} width={384} height={384} className="w-full" priority />
          </div>
        )}
        <h1 className="font-heading text-5xl font-bold tracking-tight">{code}</h1>
        <p className="font-heading mt-2 text-2xl font-semibold text-foreground/80">{name}</p>
        <p className="mt-3 italic text-muted-foreground">{intro}</p>

        <div className="mt-4">
          <p className="mb-2 text-sm font-medium text-muted-foreground">{ts('shareType')}</p>
          <ShareButtons
            url={`/${locale}/type/${code}`}
            title={`${code} — ${name}`}
            description={intro}
          />
        </div>
      </div>

      <Separator className="my-8" />

      {/* Description */}
      <Card className="border-0 shadow-sm">
        <CardContent className="pt-6">
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            {t('analysis')}
          </h2>
          <p className="text-base leading-relaxed text-foreground/85">{desc}</p>
        </CardContent>
      </Card>

      {/* Dimension Pattern */}
      {pattern && (
        <Card className="mt-6 border-0 shadow-sm">
          <CardContent className="pt-6">
            <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              {t('dimensions')}
            </h2>
            <div className="space-y-3">
              {DIMENSION_ORDER.map((dim, i) => {
                const level = pattern[i];
                const percent = level === 'L' ? 33 : level === 'M' ? 66 : 100;
                const explanation = s(tde, `${dim}.${level}`, '');
                return (
                  <div key={dim} className="space-y-1.5">
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium">{td(dim)}</span>
                      <Badge variant="outline" className="text-xs">
                        {t(`level${level}`)}
                      </Badge>
                    </div>
                    <div className="h-1.5 overflow-hidden rounded-full bg-muted">
                      <div
                        className={`h-full rounded-full ${
                          level === 'H' ? 'bg-primary' :
                          level === 'M' ? 'bg-primary/60' :
                          'bg-primary/30'
                        }`}
                        style={{width: `${percent}%`}}
                      />
                    </div>
                    <p className="text-sm leading-relaxed text-muted-foreground">{explanation}</p>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Other Types */}
      <Card className="mt-6 border-0 shadow-sm">
        <CardContent className="pt-6">
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            {t('top5')}
          </h2>
          <div className="flex flex-wrap gap-2">
            {NORMAL_TYPES.filter(t => t.code !== code).slice(0, 12).map(t => (
              <Link key={t.code} href={`/type/${t.code}`}>
                <Badge variant={t.code === code ? 'default' : 'secondary'} className="cursor-pointer hover:bg-primary/10">
                  {t.code}
                </Badge>
              </Link>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* CTA */}
      <div className="mt-8 text-center">
        <Link href="/test">
          <Button size="lg" className="rounded-full px-10">
            {ti('start')}
          </Button>
        </Link>
      </div>

      {/* Schema.org structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: seo.title,
            description: seo.description,
            image: imgSrc ? `${BASE_URL}${imgSrc}` : undefined,
            datePublished: '2026-04-01',
            dateModified: '2026-04-10',
            mainEntityOfPage: pageUrl,
            keywords: seo.keywords.join(', '),
            articleSection: locale === 'zh' ? '人格类型' : locale === 'ja' ? '性格タイプ' : locale === 'ko' ? '성격 유형' : 'Personality Types',
            author: {
              '@type': 'Organization',
              name: 'SBTI',
              url: BASE_URL,
            },
            publisher: {
              '@type': 'Organization',
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
              {
                '@type': 'ListItem',
                position: 1,
                name: tb('home'),
                item: getLocaleUrl(locale),
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: `${code}（${name}）`,
              },
            ],
          }),
        }}
      />
    </div>
  );
}
