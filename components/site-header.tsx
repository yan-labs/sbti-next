import {Link} from '@/i18n/navigation';
import {LocaleSwitcher} from '@/components/locale-switcher';

type Locale = 'zh' | 'en' | 'ja' | 'ko';

const NAV: Record<Locale, {test: string; games: string; types: string; blog: string; tagline: string; cta: string}> = {
  zh: {
    test: 'SBTI 主测试',
    games: '游戏玩家测试',
    types: '全部 27 类型',
    blog: '博客',
    tagline: '荒诞 · 潮流 · 社交',
    cta: '开始 SBTI',
  },
  en: {
    test: 'SBTI Test',
    games: 'Game Quizzes',
    types: 'All 27 Types',
    blog: 'Blog',
    tagline: 'Satirical · Behavior · Type · Indicator',
    cta: 'Take SBTI',
  },
  ja: {
    test: 'SBTI テスト',
    games: 'ゲーム診断',
    types: '全27タイプ',
    blog: 'ブログ',
    tagline: '風刺 × トレンド × ソーシャル',
    cta: '診断する',
  },
  ko: {
    test: 'SBTI 테스트',
    games: '게임 테스트',
    types: '27가지 유형',
    blog: '블로그',
    tagline: '풍자 · 트렌드 · 소셜',
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
    {href: '/test' as const, label: t.test},
    {href: '/#game-wall' as const, label: t.games},
    {href: '/types' as const, label: t.types},
    {href: '/blog' as const, label: t.blog},
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 md:gap-6 md:px-6 md:py-3.5">
        {/* ─── Wordmark ──────────────────────────────────────────────────── */}
        <Link href="/" className="group flex shrink-0 items-center gap-2.5" aria-label="SBTI">
          {/* Sticker badge "S" — slightly rotated on hover */}
          <span
            className="relative inline-flex size-9 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-sm transition-transform group-hover:rotate-3 group-hover:scale-105"
            aria-hidden="true"
          >
            <span className="font-heading text-base font-black leading-none">S</span>
            {/* Tiny corner dot for sticker feel */}
            <span className="absolute -right-0.5 -top-0.5 size-2 rounded-full bg-secondary" aria-hidden="true" />
          </span>

          {/* Wordmark + tagline */}
          <div className="flex flex-col leading-none">
            <span className="font-heading text-base font-black tracking-tight md:text-lg">
              SBTI
            </span>
            <span className="hidden text-[10px] font-mono uppercase tracking-[0.18em] text-muted-foreground sm:mt-0.5 sm:inline">
              {t.tagline}
            </span>
          </div>
        </Link>

        {/* ─── Desktop nav ───────────────────────────────────────────────── */}
        <nav
          className="hidden flex-1 items-center justify-center gap-1 lg:flex"
          aria-label="Primary"
        >
          {navItems.map(({href, label}) => (
            <Link
              key={href}
              href={href}
              className="rounded-full px-3.5 py-1.5 text-sm font-medium text-foreground/75 transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* ─── Right: CTA + Locale ───────────────────────────────────────── */}
        <div className="flex shrink-0 items-center gap-2.5">
          <Link
            href="/test"
            className="hidden h-9 items-center justify-center rounded-full bg-primary px-4 text-xs font-bold text-primary-foreground shadow-sm transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring md:inline-flex"
          >
            {t.cta}
          </Link>
          <LocaleSwitcher />
        </div>
      </div>
    </header>
  );
}
