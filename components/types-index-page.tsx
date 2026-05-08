'use client';

import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/navigation';
import {NORMAL_TYPES, TYPE_IMAGES} from '@/lib/data/personalities';
import {Card, CardContent} from '@/components/ui/card';
import {Separator} from '@/components/ui/separator';
import {ChevronRight} from 'lucide-react';
import Image from 'next/image';

export function TypesIndexPage() {
  const t = useTranslations('typesIndex');
  const tp = useTranslations('personalities');
  const tb = useTranslations('breadcrumb');

  const s = (fn: (k: string) => string, key: string, fallback: string) => {
    try { return fn(key); } catch { return fallback; }
  };

  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-1 text-sm text-muted-foreground">
        <Link href="/" className="hover:text-foreground transition-colors">{tb('home')}</Link>
        <ChevronRight className="h-3.5 w-3.5" />
        <span className="text-foreground font-medium">{t('pageTitle')}</span>
      </nav>

      <div className="mb-8 text-center">
        <h1 className="font-heading text-4xl font-bold tracking-tight">{t('pageTitle')}</h1>
        <p className="mt-3 text-lg text-muted-foreground">{t('pageSubtitle')}</p>
      </div>

      <Separator className="my-8" />

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
        {NORMAL_TYPES.map(({code}) => {
          const name = s(tp, `${code}.name`, code);
          const intro = s(tp, `${code}.intro`, '');
          const img = TYPE_IMAGES[code];
          return (
            <Link key={code} href={`/type/${code}`}>
              <Card className="group h-full border-0 shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5">
                <CardContent className="flex flex-col items-center p-4 text-center">
                  {img && (
                    <div className="mb-3 w-24 overflow-hidden rounded-lg">
                      <Image
                        src={img}
                        alt={name}
                        width={192}
                        height={192}
                        className="w-full transition-transform group-hover:scale-105"
                      />
                    </div>
                  )}
                  <p className="font-heading text-base font-bold">{code}</p>
                  <p className="mt-0.5 text-sm text-muted-foreground">{name}</p>
                  <p className="mt-1 line-clamp-2 text-xs leading-snug text-muted-foreground/70">{intro}</p>
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </div>

    </div>
  );
}
