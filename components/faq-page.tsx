'use client';

import {useState} from 'react';
import {useTranslations, useLocale} from 'next-intl';
import {Link} from '@/i18n/navigation';
import {Button} from '@/components/ui/button';
import {Separator} from '@/components/ui/separator';
import {ChevronRight, ChevronDown} from 'lucide-react';

const FAQ_IDS = ['q1', 'q2', 'q3', 'q4', 'q5', 'q6', 'q7', 'q8', 'q9', 'q10'] as const;

function FAQItem({question, answer}: {question: string; answer: string}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border/50">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-4 text-left transition-colors hover:text-primary"
      >
        <h3 className="pr-4 text-base font-semibold">{question}</h3>
        <ChevronDown className={`h-4 w-4 shrink-0 text-muted-foreground transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <p className="pb-4 text-base leading-relaxed text-muted-foreground">{answer}</p>
      )}
    </div>
  );
}

export function FAQPage() {
  const t = useTranslations('faq');
  const tb = useTranslations('breadcrumb');
  const ti = useTranslations('intro');
  const locale = useLocale();
  const baseUrl = 'https://sbti.support';

  const faqItems = FAQ_IDS.map(id => ({
    question: t(id),
    answer: t(`a${id.slice(1)}`),
  }));

  return (
    <div className="mx-auto max-w-2xl px-4 py-12">
      <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-1 text-sm text-muted-foreground">
        <Link href="/" className="hover:text-foreground transition-colors">{tb('home')}</Link>
        <ChevronRight className="h-3.5 w-3.5" />
        <span className="text-foreground font-medium">{t('pageTitle')}</span>
      </nav>

      <h1 className="font-heading text-4xl font-bold tracking-tight">{t('pageTitle')}</h1>

      <Separator className="my-8" />

      <div className="space-y-0">
        {faqItems.map((item, i) => (
          <FAQItem key={i} {...item} />
        ))}
      </div>

      <div className="mt-12 text-center">
        <Link href="/">
          <Button size="lg" className="rounded-full px-10">
            {ti('start')}
          </Button>
        </Link>
      </div>

      {/* FAQPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqItems.map(item => ({
              '@type': 'Question',
              name: item.question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: item.answer,
              },
            })),
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
              {'@type': 'ListItem', position: 1, name: tb('home'), item: `${baseUrl}/${locale}`},
              {'@type': 'ListItem', position: 2, name: t('pageTitle')},
            ],
          }),
        }}
      />
    </div>
  );
}
