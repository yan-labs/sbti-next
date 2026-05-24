'use client';

import {useTranslations} from 'next-intl';
import {Mail} from 'lucide-react';
import {Link} from '@/i18n/navigation';

const EMAIL_USER = 'kanchaishaoxia';
const EMAIL_DOMAIN = 'gmail.com';

const CONTACT_LINKS = [
  {href: 'https://x.com/yan_ai_labs/', labelKey: 'x'},
] as const;

function buildEmailAddress() {
  return `${EMAIL_USER}@${EMAIL_DOMAIN}`;
}

/** X (formerly Twitter) brand glyph. */
function XLogo({className}: {className?: string}) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

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
    <footer className="border-t border-border bg-muted/60">
      <div className="mx-auto max-w-[1240px] px-5 py-12 md:px-8">
        {/* ── Top row: brand wordmark + nav columns ─────────────────────── */}
        <div className="grid grid-cols-1 items-end gap-8 md:grid-cols-[auto_1fr]">
          <div className="flex flex-col">
            <span className="font-heading text-3xl font-bold leading-none tracking-tight text-foreground">
              SBTI
            </span>
            <span className="mt-2 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              Satirical Behavior Type Indicator
            </span>
          </div>
          <nav className="flex flex-wrap justify-start gap-x-6 gap-y-3 md:justify-end" aria-label="Footer">
            {links.map(({href, label}) => (
              <Link
                key={href}
                href={href}
                className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:text-foreground hover:underline hover:underline-offset-4"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>

        {/* ── Contact row ──────────────────────────────────────────────── */}
        <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-border pt-6">
          {CONTACT_LINKS.map(({href, labelKey}) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="nofollow noreferrer"
              className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:text-foreground"
            >
              <XLogo className="size-3" />
              <span>{t(labelKey)}</span>
            </a>
          ))}
          <button
            type="button"
            onClick={() => {
              window.location.href = `mailto:${buildEmailAddress()}`;
            }}
            className="inline-flex cursor-pointer items-center gap-1.5 border-0 bg-transparent p-0 font-mono text-[11px] tracking-[0.06em] lowercase text-muted-foreground transition-colors hover:text-foreground"
            aria-label="Email SBTI"
          >
            <Mail className="size-3" aria-hidden="true" />
            <span>{EMAIL_USER}</span>
            <span aria-hidden="true">@</span>
            <span>{EMAIL_DOMAIN}</span>
          </button>
        </div>

        {/* ── Colophon ─────────────────────────────────────────────────── */}
        <div className="mt-6 flex flex-col items-start justify-between gap-2 font-mono text-[10px] uppercase tracking-[0.14em] text-foreground/55 md:flex-row md:items-center">
          <span>{t('copyright')}</span>
          <span className="text-foreground/40">{t('tagline')}</span>
        </div>
      </div>
    </footer>
  );
}
