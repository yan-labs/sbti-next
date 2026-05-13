import Image from 'next/image';
import {Link} from '@/i18n/navigation';
import {TYPE_LIBRARY, TYPE_IMAGES} from '@/lib/data/personalities';

type Locale = 'zh' | 'en' | 'ja' | 'ko';

interface FeaturedResultProps {
  locale: string;
}

const COPY: Record<
  Locale,
  {
    kicker: string;
    rightA: string;
    rightB: string;
    headLead: string;
    headEm: string;
    headTail: string;
    badgePrefix: string;
    rarityRare: string;
    rarityCommon: string;
    profileEnNames: Record<string, string>;
  }
> = {
  zh: {
    kicker: '04 · 真实测试结果',
    rightA: 'SHAREABLE BY DESIGN',
    rightB: '结果即截图',
    headLead: '测完你拿到的，是 ',
    headEm: '一份可截图的档案',
    headTail: '',
    badgePrefix: 'Nº',
    rarityRare: '罕见',
    rarityCommon: '常见',
    profileEnNames: {
      CTRL: 'The Control Freak',
      MALO: 'The Primate',
      'Dior-s': "Diogenes' Heir",
    },
  },
  en: {
    kicker: '04 · Real Test Results',
    rightA: 'SHAREABLE BY DESIGN',
    rightB: 'The result IS the screenshot',
    headLead: 'What you actually walk away with: ',
    headEm: 'a screenshot-ready file',
    headTail: '.',
    badgePrefix: 'Nº',
    rarityRare: 'Rare',
    rarityCommon: 'Common',
    profileEnNames: {
      CTRL: 'The Control Freak',
      MALO: 'The Primate',
      'Dior-s': "Diogenes' Heir",
    },
  },
  ja: {
    kicker: '04 · リアルな結果',
    rightA: 'SHAREABLE BY DESIGN',
    rightB: '結果＝スクショ',
    headLead: '診断後に手に入るのは、',
    headEm: 'スクショ前提のファイル',
    headTail: '。',
    badgePrefix: 'Nº',
    rarityRare: 'レア',
    rarityCommon: 'よく出る',
    profileEnNames: {
      CTRL: 'The Control Freak',
      MALO: 'The Primate',
      'Dior-s': "Diogenes' Heir",
    },
  },
  ko: {
    kicker: '04 · 실제 테스트 결과',
    rightA: 'SHAREABLE BY DESIGN',
    rightB: '결과 = 스크린샷',
    headLead: '테스트 끝나면 받는 건 ',
    headEm: '스크린샷용 파일 한 장',
    headTail: '.',
    badgePrefix: 'Nº',
    rarityRare: '희귀',
    rarityCommon: '흔함',
    profileEnNames: {
      CTRL: 'The Control Freak',
      MALO: 'The Primate',
      'Dior-s': "Diogenes' Heir",
    },
  },
};

const FEATURED = [
  {code: 'CTRL', no: '001', rare: true, quote: {
    zh: '"Ctrl+S 一键存档，把你混乱的人生硬核备份。"',
    en: '"One Ctrl+S and your chaotic life gets a hard backup."',
    ja: '"Ctrl+Sひとつで、君の混沌な人生をハードに保存する。"',
    ko: '"Ctrl+S 한 번이면, 너의 혼란스러운 인생도 하드 백업된다."',
  }},
  {code: 'MALO', no: '015', rare: false, quote: {
    zh: '"人生是个副本，而我只是一只吗喽。"',
    en: '"Life is just a side quest, and I\'m a monkey side character."',
    ja: '"人生はサイドクエスト。俺はサルのモブキャラだ。"',
    ko: '"인생은 부캐릭의 부캐 퀘스트. 나는 그냥 원숭이다."',
  }},
  {code: 'Dior-s', no: '003', rare: false, quote: {
    zh: '"等着我屌丝逆袭。"',
    en: '"Watch this loser comeback arc."',
    ja: '"負け犬の逆襲、これから見せる。"',
    ko: '"찌질이 역전 드라마 곧 시작한다."',
  }},
] as const;

export function FeaturedResult({locale}: FeaturedResultProps) {
  const l = (locale as Locale) in COPY ? (locale as Locale) : 'en';
  const t = COPY[l];

  return (
    <section className="border-b border-border py-24">
      <div className="container mx-auto max-w-[1240px] px-5 md:px-8">
        <header className="mb-12 grid items-baseline gap-6 md:grid-cols-[auto_1fr_auto]">
          <div className="mono-label md:col-span-2">{t.kicker}</div>
          <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground leading-7 md:row-start-1 md:row-span-2 md:col-start-3 md:text-right self-end">
            {t.rightA}
            <br />
            {t.rightB}
          </div>
          <h2
            className="font-heading text-foreground m-0 md:col-span-2"
            style={{
              fontVariationSettings: '"opsz" 144, "SOFT" 30, "wght" 700',
              fontSize: 'clamp(36px, 5vw, 64px)',
              lineHeight: 0.96,
              letterSpacing: '-0.02em',
              maxWidth: '18ch',
            }}
          >
            {t.headLead}
            <em
              className="not-italic"
              style={{
                fontStyle: 'italic',
                fontVariationSettings: '"opsz" 144, "SOFT" 90, "wght" 700',
                color: 'var(--vermillion)',
                letterSpacing: '-0.025em',
              }}
            >
              {t.headEm}
            </em>
            {t.headTail}
          </h2>
        </header>

        <div className="grid gap-5 md:grid-cols-3">
          {FEATURED.map((p) => {
            const data = TYPE_LIBRARY[p.code];
            const img = TYPE_IMAGES[p.code];
            const cn = data?.cn ?? '';
            const enName = t.profileEnNames[p.code] ?? p.code;
            const quote = p.quote[l] ?? p.quote.en;
            return (
              <Link
                key={p.code}
                href={`/type/${encodeURIComponent(p.code)}`}
                className="group grid grid-cols-[120px_1fr] items-stretch gap-5 border p-5 transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: 'var(--paper-soft)',
                  borderColor: 'var(--border)',
                }}
              >
                <div
                  className="relative aspect-square overflow-hidden"
                  style={{background: 'var(--paper-deep)'}}
                >
                  {img && (
                    <Image
                      src={img}
                      alt=""
                      fill
                      sizes="120px"
                      className="object-cover"
                      style={{filter: 'saturate(0.85)'}}
                      loading="lazy"
                      unoptimized
                    />
                  )}
                </div>
                <div className="flex flex-col justify-between gap-2">
                  <div>
                    <div
                      className="font-mono uppercase"
                      style={{
                        fontSize: 9,
                        letterSpacing: '0.16em',
                        color: 'var(--vermillion)',
                      }}
                    >
                      {t.badgePrefix} {p.no} ·{' '}
                      {p.rare ? `0.04% ${t.rarityRare}` : t.rarityCommon}
                    </div>
                    <h3
                      className="font-heading text-foreground mt-1 mb-0.5"
                      style={{
                        fontVariationSettings: '"opsz" 144, "wght" 700',
                        fontSize: 30,
                        lineHeight: 0.95,
                        letterSpacing: '-0.015em',
                      }}
                    >
                      {p.code}.
                    </h3>
                    <div className="text-[13px] font-medium text-muted-foreground">
                      {cn} · {enName}
                    </div>
                  </div>
                  <p
                    className="font-heading m-0 border-t border-border pt-2.5"
                    style={{
                      fontStyle: 'italic',
                      fontVariationSettings: '"opsz" 144, "SOFT" 90, "wght" 500',
                      fontSize: 15,
                      lineHeight: 1.4,
                      color: 'var(--ink-soft)',
                    }}
                  >
                    {quote}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
