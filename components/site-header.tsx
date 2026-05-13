import {Link} from '@/i18n/navigation';
import {LocaleSwitcher} from '@/components/locale-switcher';

type Locale = 'zh' | 'en' | 'ja' | 'ko';

const NAV: Record<Locale, {tests: string; catalog: string; types: string; faq: string; cta: string}> = {
  zh: {
    tests: '9 个测试',
    catalog: '完整目录',
    types: '27 人格',
    faq: 'FAQ',
    cta: '开始 SBTI',
  },
  en: {
    tests: '9 Tests',
    catalog: 'Full Catalog',
    types: '27 Types',
    faq: 'FAQ',
    cta: 'Take SBTI',
  },
  ja: {
    tests: '9 種の診断',
    catalog: '全カタログ',
    types: '27 タイプ',
    faq: 'FAQ',
    cta: '診断する',
  },
  ko: {
    tests: '9가지 테스트',
    catalog: '전체 목록',
    types: '27가지 유형',
    faq: 'FAQ',
    cta: 'SBTI 시작',
  },
};

interface SiteHeaderProps {
  locale: string;
}

export function SiteHeader({locale}: SiteHeaderProps) {
  const l = (locale in NAV ? locale : 'en') as Locale;
  const t = NAV[l];

  const navItems = [
    {href: '/#tests' as const, label: t.tests},
    {href: '/#catalog' as const, label: t.catalog},
    {href: '/types' as const, label: t.types},
    {href: '/faq' as const, label: t.faq},
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="mx-auto flex max-w-[1240px] items-center justify-between gap-4 px-5 py-3.5 md:px-8">
        {/* ─── Wordmark ────────────────────────────────────────────── */}
        <Link href="/" className="inline-flex items-baseline gap-2.5" aria-label="SBTI">
          <span className="font-heading text-[22px] font-bold leading-none tracking-tight text-foreground">
            SBTI
          </span>
          <span className="hidden translate-y-[-3px] rounded-full border border-border bg-muted px-[7px] py-[3px] font-mono text-[9px] uppercase tracking-[0.16em] text-muted-foreground sm:inline-block">
            Beta
          </span>
        </Link>

        {/* ─── Desktop nav ─────────────────────────────────────────── */}
        <nav className="hidden flex-1 items-center justify-end gap-7 text-sm text-foreground/75 lg:flex" aria-label="Primary">
          {navItems.map(({href, label}) => (
            <Link
              key={href}
              href={href}
              className="relative py-1.5 transition-colors hover:text-foreground"
            >
              {label}
            </Link>
          ))}
          <LocaleSwitcher />
          <Link
            href="/test"
            className="inline-flex h-9 items-center gap-1.5 rounded-full bg-foreground px-4 text-xs font-semibold text-background transition-colors hover:bg-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            {t.cta} →
          </Link>
        </nav>

        {/* ─── Mobile (compact) ────────────────────────────────────── */}
        <div className="flex items-center gap-2 lg:hidden">
          <LocaleSwitcher />
          <Link
            href="/test"
            className="inline-flex h-8 items-center gap-1 rounded-full bg-foreground px-3 text-[11px] font-semibold text-background"
          >
            {t.cta} →
          </Link>
        </div>
      </div>
    </header>
  );
}
