type Locale = 'zh' | 'en' | 'ja' | 'ko';

const COPY: Record<
  Locale,
  {
    kicker: string;
    h1Top: string;
    h1Bottom: string;
    dekLead: string;
    dekRest: string;
    helper: string;
    statTypes: string;
    statGames: string;
    statQuestions: string;
    statLanguages: string;
  }
> = {
  zh: {
    kicker: 'SBTI · 沙雕人格测试 · Est. 2026',
    h1Top: '你是哪种人？',
    h1Bottom: '哪种玩家？',
    dekLead: '31 道题，1–3 分钟。',
    dekRest: '比 MBTI 更不靠谱的人格测试 —— 把你归类成 27 种没办法解释给爸妈听的荒诞类型之一。外加 8 款游戏专属玩家分型。',
    helper: '挑一个测试，开始',
    statTypes: '人格类型',
    statGames: '游戏测试',
    statQuestions: '道题',
    statLanguages: '语言',
  },
  en: {
    kicker: 'SBTI · Satirical Personality Test · Est. 2026',
    h1Top: 'Which kind of human?',
    h1Bottom: 'Which kind of player?',
    dekLead: '31 questions, 1–3 minutes.',
    dekRest: 'A less reliable take on MBTI — sorting you into 27 absurd types you cannot really explain to your parents. Plus 8 game-specific player archetypes.',
    helper: 'Pick a quiz to start',
    statTypes: 'Types',
    statGames: 'Game Quizzes',
    statQuestions: 'Questions',
    statLanguages: 'Languages',
  },
  ja: {
    kicker: 'SBTI · 風刺人格診断 · Est. 2026',
    h1Top: 'あなたはどんな人？',
    h1Bottom: 'どんなプレイヤー？',
    dekLead: '31問、1〜3分。',
    dekRest: 'MBTIよりちょっと当てにならない人格診断 —— 親に説明しづらい27タイプのどれかに分類。さらに8ゲーム別のプレイヤー診断つき。',
    helper: '診断を選んでスタート',
    statTypes: 'タイプ',
    statGames: 'ゲーム診断',
    statQuestions: '問',
    statLanguages: '言語',
  },
  ko: {
    kicker: 'SBTI · 풍자 인격 테스트 · Est. 2026',
    h1Top: '당신은 어떤 사람?',
    h1Bottom: '어떤 플레이어?',
    dekLead: '31문항, 1–3분.',
    dekRest: 'MBTI보다 살짝 더 황당한 인격 테스트 —— 부모님께 설명 안 되는 27가지 유형 중 하나로 분류한다. 거기에 게임별 플레이어 유형 테스트 8종까지.',
    helper: '테스트 하나 골라 시작',
    statTypes: '유형',
    statGames: '게임 테스트',
    statQuestions: '문항',
    statLanguages: '언어',
  },
};

interface HeroProps {
  locale: string;
}

export function Hero({locale}: HeroProps) {
  const l = (locale as Locale) in COPY ? (locale as Locale) : 'en';
  const t = COPY[l];

  return (
    <div className="grid items-end gap-10 md:gap-14 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] mb-8 md:mb-10">
      <div>
        <div className="mono-label mb-5 inline-flex items-center gap-2.5">
          <span aria-hidden className="inline-block h-px w-6 bg-current" />
          {t.kicker}
        </div>
        <h1
          className="font-heading text-foreground m-0"
          style={{
            fontVariationSettings: '"opsz" 144, "SOFT" 30, "wght" 800',
            fontSize: 'clamp(44px, 6vw, 88px)',
            lineHeight: 0.96,
            letterSpacing: '-0.025em',
          }}
        >
          {t.h1Top}
          <br />
          <em
            className="not-italic"
            style={{
              fontStyle: 'italic',
              fontVariationSettings: '"opsz" 144, "SOFT" 90, "wght" 700',
              color: 'var(--vermillion)',
              letterSpacing: '-0.03em',
            }}
          >
            {t.h1Bottom}
          </em>
        </h1>

        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-x-10 gap-y-4 pt-4 border-t border-border">
          {[
            {num: '27', lbl: t.statTypes},
            {num: '08', lbl: t.statGames},
            {num: '31', lbl: t.statQuestions},
            {num: '04', lbl: t.statLanguages},
          ].map((s) => (
            <div key={s.lbl} className="flex flex-col gap-1.5">
              <div
                className="font-heading text-foreground"
                style={{
                  fontVariationSettings: '"opsz" 144, "SOFT" 30, "wght" 700',
                  fontSize: 36,
                  lineHeight: 1,
                  letterSpacing: '-0.02em',
                }}
              >
                {s.num}
              </div>
              <div className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                {s.lbl}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-4 md:text-right">
        <p
          className="text-base md:text-lg leading-snug max-w-[40ch] md:ml-auto"
          style={{color: 'var(--ink-soft)'}}
        >
          <strong className="font-semibold text-foreground">{t.dekLead}</strong>
          {' '}
          {t.dekRest}
        </p>
        <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
          <span style={{color: 'var(--vermillion)'}}>↓ </span>
          {t.helper}
        </div>
      </div>
    </div>
  );
}
