'use client';

import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/navigation';
import {Card, CardContent} from '@/components/ui/card';
import {Separator} from '@/components/ui/separator';
import {ChevronRight} from 'lucide-react';

const SECTIONS = ['section1', 'section2', 'section3', 'section4', 'section5'] as const;

export function PrivacyPolicyPage() {
  const t = useTranslations('privacy');
  const tb = useTranslations('breadcrumb');

  return (
    <div className="mx-auto max-w-2xl px-4 py-12">
      <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-1 text-sm text-muted-foreground">
        <Link href="/" className="hover:text-foreground transition-colors">{tb('home')}</Link>
        <ChevronRight className="h-3.5 w-3.5" />
        <span className="text-foreground font-medium">{t('pageTitle')}</span>
      </nav>

      <h1 className="font-heading text-4xl font-bold tracking-tight">{t('pageTitle')}</h1>
      <p className="mt-2 text-sm text-muted-foreground">{t('lastUpdated')}</p>

      <Separator className="my-8" />

      <div className="space-y-2">
        <h2 className="font-heading text-xl font-bold">{t('introTitle')}</h2>
        <p className="text-base leading-relaxed text-foreground/85">{t('introText')}</p>
      </div>

      <div className="mt-8 space-y-6">
        {SECTIONS.map(id => (
          <Card key={id} className="border-0 shadow-sm">
            <CardContent className="pt-6">
              <h2 className="font-heading text-lg font-semibold">{t(`${id}Title`)}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t(`${id}Text`)}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
