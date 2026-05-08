'use client';

import {useTranslations} from 'next-intl';
import {Mail} from 'lucide-react';
import {Link} from '@/i18n/navigation';

const EMAIL_USER = 'kanchaishaoxia';
const EMAIL_DOMAIN = 'gmail.com';

const CONTACT_LINKS = [
  {href: 'https://x.com/yan_ai_labs/', labelKey: 'x'},
] as const;

export function SiteFooter() {
  const t = useTranslations('footer');

  const links = [
    {href: '/' as const, label: t('home')},
    {href: '/about' as const, label: t('about')},
    {href: '/types' as const, label: t('types')},
    {href: '/blog' as const, label: t('blog')},
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
        <div className="mt-5 flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
          {CONTACT_LINKS.map(({href, labelKey}) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              <span className="text-xs font-bold" aria-hidden="true">X</span>
              <span>{t(labelKey)}</span>
            </a>
          ))}
          <button
            type="button"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            onClick={() => {
              window.location.href = `mailto:${EMAIL_USER}@${EMAIL_DOMAIN}`;
            }}
          >
            <Mail className="size-3.5" aria-hidden="true" />
            <span>{t('email')}</span>
          </button>
        </div>
        <div className="mt-6 text-center">
          <p className="text-sm font-medium text-foreground/70">{t('copyright')}</p>
          <p className="mt-1 text-xs text-muted-foreground">{t('tagline')}</p>
        </div>
      </div>
    </footer>
  );
}
