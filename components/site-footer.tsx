'use client';

import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/navigation';

export function SiteFooter() {
  const t = useTranslations('footer');

  const links = [
    {href: '/' as const, label: t('home')},
    {href: '/about' as const, label: t('about')},
    {href: '/types' as const, label: t('types')},
    {href: '/faq' as const, label: t('faq')},
    {href: '/privacy-policy' as const, label: t('privacy')},
    {href: '/terms' as const, label: t('terms')},
  ];

  return (
    <footer className="border-t border-border/50 bg-muted/30">
      <div className="mx-auto max-w-4xl px-4 py-8">
        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          {links.map(({href, label}) => (
            <Link
              key={href}
              href={href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {label}
            </Link>
          ))}
        </nav>
        <div className="mt-6 text-center">
          <p className="text-sm font-medium text-foreground/70">{t('copyright')}</p>
          <p className="mt-1 text-xs text-muted-foreground">{t('tagline')}</p>
        </div>
      </div>
    </footer>
  );
}
