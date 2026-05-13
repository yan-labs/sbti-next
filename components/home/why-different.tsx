type Locale = 'zh' | 'en' | 'ja' | 'ko';

interface Reason {
  num: string;
  title: string;
  desc: string;
}

const COPY: Record<
  Locale,
  {
    kicker: string;
    right: string;
    headLead: string;
    headEm: string;
    headTail: string;
    reasons: [Reason, Reason, Reason, Reason];
  }
> = {
  zh: {
    kicker: '05 · 为什么不一样',
    right: '不是另一个 MBTI 克隆',
    headLead: '和那 100 个 MBTI 测试，',
    headEm: '有点不一样',
    headTail: '',
    reasons: [
      {
        num: '01',
        title: '不装作很科学',
        desc: 'SBTI 是讽刺，不是心理学。我们不会引用任何论文，但你大概率会觉得"这真的就是我"。',
      },
      {
        num: '02',
        title: '每款游戏单独建模',
        desc: 'LOL 的 8 个玩家原型不会出现在 Valorant 里。每款游戏 31 道题、6 个轴、8 种原型，独立设计。',
      },
      {
        num: '03',
        title: '结果即截图',
        desc: '测试结果页面就是一张可保存的卡片。无需手动整理，1080×1920 直接发朋友圈。',
      },
      {
        num: '04',
        title: '四种语言，真本地化',
        desc: '中文 / English / 日本語 / 한국어 —— 不是 Google Translate，每一句都是人写的。',
      },
    ],
  },
  en: {
    kicker: '05 · What makes this different',
    right: 'Not another MBTI clone',
    headLead: 'A bit ',
    headEm: 'different',
    headTail: ' from the 100 other MBTI quizzes',
    reasons: [
      {
        num: '01',
        title: 'Not pretending to be science',
        desc: 'SBTI is satire, not psychology. We do not cite a single paper. But you will probably still say "this is actually me".',
      },
      {
        num: '02',
        title: 'Each game modeled separately',
        desc: 'The 8 LoL archetypes do not show up in Valorant. 31 questions, 6 axes, 8 archetypes per game — built from scratch each time.',
      },
      {
        num: '03',
        title: 'The result IS the screenshot',
        desc: 'Your result page is already a saveable card. No manual layout work. 1080×1920, ready for the group chat.',
      },
      {
        num: '04',
        title: 'Four languages, actually written',
        desc: 'Chinese / English / 日本語 / 한국어 — not Google Translate. Every line was written by a human in that language.',
      },
    ],
  },
  ja: {
    kicker: '05 · 何が違うのか',
    right: 'MBTIクローンではない',
    headLead: '世にあふれる100個のMBTI診断と、',
    headEm: 'ちょっと違う',
    headTail: '',
    reasons: [
      {
        num: '01',
        title: '科学のフリをしない',
        desc: 'SBTIは風刺、心理学ではない。論文は一切引用しない。それでも「これ自分だ」と思う確率はかなり高い。',
      },
      {
        num: '02',
        title: 'ゲームごとに別モデル',
        desc: 'LoLの8タイプはValorantには出てこない。各ゲーム31問・6軸・8タイプ、毎回ゼロから設計。',
      },
      {
        num: '03',
        title: '結果＝スクショ',
        desc: '結果ページがそのまま保存用カード。レイアウト作業は要らない。1080×1920、グループチャット直行。',
      },
      {
        num: '04',
        title: '4言語、ちゃんと書いた',
        desc: '中文 / English / 日本語 / 한국어 —— Google翻訳ではない。一行ずつ、その言語で書いてる。',
      },
    ],
  },
  ko: {
    kicker: '05 · 무엇이 다른가',
    right: '또 하나의 MBTI 클론은 아니다',
    headLead: '세상에 널린 100개의 MBTI 테스트랑, ',
    headEm: '좀 다르다',
    headTail: '',
    reasons: [
      {
        num: '01',
        title: '과학인 척하지 않는다',
        desc: 'SBTI는 풍자다, 심리학이 아니다. 논문 인용 없음. 그래도 "이거 진짜 나야"라고 느낄 확률은 꽤 높다.',
      },
      {
        num: '02',
        title: '게임마다 따로 만든다',
        desc: 'LoL의 8개 유형이 발로란트에 나오지 않는다. 게임마다 31문항·6축·8유형, 매번 처음부터 설계.',
      },
      {
        num: '03',
        title: '결과 = 스크린샷',
        desc: '결과 페이지가 이미 저장용 카드다. 따로 레이아웃 작업할 필요 없다. 1080×1920, 단톡방 직행.',
      },
      {
        num: '04',
        title: '4개 언어, 진짜 사람이 썼다',
        desc: '中文 / English / 日本語 / 한국어 —— 구글 번역 아니다. 한 줄 한 줄 그 언어로 직접 썼다.',
      },
    ],
  },
};

interface WhyDifferentProps {
  locale: string;
}

export function WhyDifferent({locale}: WhyDifferentProps) {
  const l = (locale as Locale) in COPY ? (locale as Locale) : 'en';
  const t = COPY[l];

  return (
    <section
      className="border-b border-border py-24"
      style={{background: 'var(--paper-deep)'}}
    >
      <div className="container mx-auto max-w-[1240px] px-5 md:px-8">
        <header className="mb-12 grid items-baseline gap-6 md:grid-cols-[auto_1fr_auto]">
          <div className="mono-label md:col-span-2">{t.kicker}</div>
          <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground leading-7 md:row-start-1 md:row-span-2 md:col-start-3 md:text-right self-end">
            {t.right}
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

        <div className="border grid grid-cols-1 sm:grid-cols-2" style={{borderColor: 'var(--border)'}}>
          {t.reasons.map((r, i) => {
            const isLastRow = i >= t.reasons.length - 2;
            const isRightCol = i % 2 === 1;
            return (
              <div
                key={r.num}
                className="p-8"
                style={{
                  borderRight: isRightCol ? '0' : '1px solid var(--border)',
                  borderBottom: isLastRow ? '0' : '1px solid var(--border)',
                }}
              >
                <div
                  className="font-mono mb-3.5"
                  style={{
                    fontSize: 10,
                    letterSpacing: '0.18em',
                    color: 'var(--vermillion)',
                  }}
                >
                  {r.num}
                </div>
                <h3
                  className="font-heading text-foreground m-0 mb-2.5"
                  style={{
                    fontVariationSettings: '"opsz" 144, "wght" 700',
                    fontSize: 22,
                    lineHeight: 1.2,
                    letterSpacing: '-0.01em',
                  }}
                >
                  {r.title}
                </h3>
                <p
                  className="m-0 text-[15px] leading-relaxed"
                  style={{color: 'var(--ink-soft)'}}
                >
                  {r.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
