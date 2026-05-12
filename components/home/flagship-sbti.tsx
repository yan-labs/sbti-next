import Image from 'next/image';
import {Link} from '@/i18n/navigation';
import {NORMAL_TYPES, TYPE_IMAGES} from '@/lib/data/personalities';

type Locale = 'zh' | 'en' | 'ja' | 'ko';

const COPY: Record<Locale, {heading: string; sub: string; ctaBrowse: string; ctaTest: string; badge: string}> = {
  zh: {
    heading: '想看 27 种 SBTI 完整图谱？',
    sub: '从 CTRL（控制狂）到 ZZZZ（贪睡型）—— 每种类型有专属插画、长描述、克星和最佳搭档。',
    ctaBrowse: '浏览全部 27 类型',
    ctaTest: '没测过？开始测一下',
    badge: '人格测试图鉴',
  },
  en: {
    heading: 'Browse all 27 SBTI types',
    sub: 'From CTRL (the Controller) to ZZZZ (the Sleeper) — each type comes with art, long description, rivals, and best squad.',
    ctaBrowse: 'View all 27 types',
    ctaTest: 'Haven\'t tested yet? Start here',
    badge: 'Type library',
  },
  ja: {
    heading: 'SBTI 全27タイプの図鑑',
    sub: 'CTRL（コントローラー）から ZZZZ（寝坊家）まで —— 各タイプに専用イラスト・詳しい説明・天敵・最高の相棒つき。',
    ctaBrowse: '全27タイプを見る',
    ctaTest: 'まだ診断してない？こちらから',
    badge: 'タイプ図鑑',
  },
  ko: {
    heading: 'SBTI 27가지 유형 전체 도감',
    sub: 'CTRL(컨트롤러)부터 ZZZZ(잠꾸러기)까지 —— 유형마다 일러스트, 상세 설명, 천적, 최고의 짝꿍 정보 제공.',
    ctaBrowse: '전체 27개 유형 보기',
    ctaTest: '아직 테스트 안 했다면?',
    badge: '유형 도감',
  },
};

// 12 SBTI types in a 4x3 image grid (most recognisable codes first)
const TYPES_FOR_GRID = NORMAL_TYPES.slice(0, 12).map((t) => t.code);

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
            {/* Left: 4x3 type image grid */}
            <div className="relative p-6 md:p-8 flex items-center justify-center">
              <div className="grid grid-cols-4 gap-2 max-w-sm w-full">
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

            {/* Right: heading + dual CTA */}
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

              <div className="flex flex-col items-start gap-2 sm:flex-row sm:items-center">
                <Link
                  href="/types"
                  className="inline-flex h-11 items-center justify-center rounded-xl bg-primary px-6 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  {t.ctaBrowse}
                </Link>
                <Link
                  href="/test"
                  className="inline-flex h-11 items-center justify-center px-2 text-sm font-medium text-foreground/70 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  {t.ctaTest} →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
