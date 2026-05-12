type Locale = 'zh' | 'en' | 'ja' | 'ko';

interface Step {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

const COPY: Record<Locale, {heading: string; steps: [string, string][]}> = {
  zh: {
    heading: '三步搞定你的玩家档案',
    steps: [
      ['选游戏', '8 款热门游戏，每款都有独立的 30 道圈内题，不套模板'],
      ['答 30 道情景题', '每道题都是真实玩家场景，4 个选项，选最像你的那个'],
      ['拿到 6 维档案', '雷达图 + 原型卡 + 6 字母玩家身份码，截图直接发'],
    ],
  },
  en: {
    heading: 'Three steps to your player profile',
    steps: [
      ['Pick a game', '8 titles, each with 30 culture-specific questions — no shared template'],
      ['Answer 30 scenarios', 'Real in-game situations, 4 options, pick the one that fits you'],
      ['Get your 6-axis profile', 'Radar chart + archetype card + 6-letter player code to share'],
    ],
  },
  ja: {
    heading: '3ステップでプレイヤーファイル完成',
    steps: [
      ['ゲームを選ぶ', '8タイトル、それぞれ30問のゲーム固有問題。テンプレートなし'],
      ['30のシナリオに答える', 'リアルなゲーム内状況、4択で自分に一番近いものを選ぶ'],
      ['6軸プロファイルをゲット', 'レーダーチャート＋アーキタイプカード＋6文字コードで共有'],
    ],
  },
  ko: {
    heading: '세 단계로 플레이어 프로필 완성',
    steps: [
      ['게임 선택', '8개 타이틀, 각 30문항의 게임 특화 문제. 공통 템플릿 없음'],
      ['30개 시나리오 답하기', '실제 인게임 상황, 4개 선택지 중 가장 나다운 것 선택'],
      ['6축 프로필 받기', '레이더 차트 + 아키타입 카드 + 6자리 코드로 공유'],
    ],
  },
};

const STEP_ICONS = [
  // Step 1: game controller / diamond
  <svg key="1" width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden>
    <rect x="8" y="8" width="32" height="32" rx="4" stroke="currentColor" strokeWidth="1.5" fill="none"/>
    <circle cx="24" cy="24" r="6" fill="currentColor" opacity="0.2"/>
    <circle cx="24" cy="24" r="2.5" fill="currentColor"/>
    <line x1="8" y1="24" x2="14" y2="24" stroke="currentColor" strokeWidth="1.5"/>
    <line x1="34" y1="24" x2="40" y2="24" stroke="currentColor" strokeWidth="1.5"/>
  </svg>,

  // Step 2: question bubble
  <svg key="2" width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden>
    <rect x="6" y="10" width="30" height="22" rx="4" stroke="currentColor" strokeWidth="1.5" fill="none"/>
    <path d="M14 36 L10 42 L22 36" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinejoin="round"/>
    <line x1="14" y1="18" x2="28" y2="18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <line x1="14" y1="24" x2="24" y2="24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>,

  // Step 3: hexagon radar
  <svg key="3" width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden>
    <polygon points="24,6 40,15 40,33 24,42 8,33 8,15" stroke="currentColor" strokeWidth="1.5" fill="none"/>
    <polygon points="24,14 33,19 33,29 24,34 15,29 15,19" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.4"/>
    <polygon points="24,20 29,23 29,27 24,30 19,27 19,23" fill="currentColor" opacity="0.2"/>
  </svg>,
];

interface HowItWorksProps {
  locale: string;
}

export function HowItWorks({locale}: HowItWorksProps) {
  const l = (locale as Locale) in COPY ? (locale as Locale) : 'en';
  const t = COPY[l];

  return (
    <section className="bg-muted/40 py-16 md:py-20">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="font-heading text-2xl font-bold text-center text-foreground mb-10 md:text-3xl">
          {t.heading}
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          {t.steps.map(([title, desc], i) => (
            <div
              key={i}
              className="flex flex-col items-center gap-4 rounded-2xl border border-border bg-card p-6 text-center shadow-sm"
            >
              <div className="flex size-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
                {STEP_ICONS[i]}
              </div>

              <div>
                <div className="mb-1 flex items-center justify-center gap-2">
                  <span className="font-mono text-xs font-semibold text-primary/70">0{i + 1}</span>
                  <h3 className="font-heading text-base font-semibold text-foreground">{title}</h3>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
