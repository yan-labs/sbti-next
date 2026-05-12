import Image from 'next/image';
import {Link} from '@/i18n/navigation';
import {TYPE_LIBRARY, TYPE_IMAGES} from '@/lib/data/personalities';

type Locale = 'zh' | 'en' | 'ja' | 'ko';

const COPY: Record<Locale, {heading: string; sub: string; cta: string; badge: string}> = {
  zh: {
    heading: 'SBTI 人格测试',
    sub: '30 题，15 个维度，27 种荒诞人格类型。不是 MBTI，但你可能更想转发这个。',
    cta: '开始 SBTI 测试',
    badge: '人格测试元祖',
  },
  en: {
    heading: 'SBTI Personality Test',
    sub: '30 questions, 15 dimensions, 27 absurd types. Not MBTI — but you might share this one instead.',
    cta: 'Take the SBTI Test',
    badge: 'Original',
  },
  ja: {
    heading: 'SBTI 性格テスト',
    sub: '30問・15次元・27の荒唐無稽なタイプ。MBTIではないが、これをシェアしたくなるはず。',
    cta: 'SBTI テストを始める',
    badge: 'オリジナル診断',
  },
  ko: {
    heading: 'SBTI 성격 테스트',
    sub: '30문항·15차원·27가지 황당한 유형. MBTI는 아니지만, 이걸 공유하고 싶어질 거야.',
    cta: 'SBTI 테스트 시작하기',
    badge: '원조 성격 테스트',
  },
};

// First 9 types for the image grid
const TYPES_FOR_GRID = Object.keys(TYPE_LIBRARY).slice(0, 9);

interface FlagshipSBTIProps {
  locale: string;
}

export function FlagshipSBTI({locale}: FlagshipSBTIProps) {
  const l = (locale as Locale) in COPY ? (locale as Locale) : 'en';
  const t = COPY[l];

  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-5xl px-6">
        <div className="overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-primary/5 via-card to-accent/5 shadow-sm">
          <div className="grid md:grid-cols-2">
            {/* Left: type image grid */}
            <div className="relative p-6 flex items-center justify-center">
              <div className="grid grid-cols-3 gap-2 max-w-xs w-full">
                {TYPES_FOR_GRID.map((code) => {
                  const imgSrc = TYPE_IMAGES[code];
                  if (!imgSrc) return null;
                  return (
                    <div key={code} className="aspect-square overflow-hidden rounded-lg border border-border/60 bg-muted">
                      <Image
                        src={imgSrc}
                        alt={code}
                        width={80}
                        height={80}
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right: CTA */}
            <div className="flex flex-col justify-center gap-5 p-8 md:py-12">
              <span className="w-fit rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
                {t.badge}
              </span>

              <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl">
                {t.heading}
              </h2>

              <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                {t.sub}
              </p>

              <Link
                href="/test"
                className="w-fit inline-flex h-11 items-center justify-center rounded-xl bg-primary px-7 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                {t.cta}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
