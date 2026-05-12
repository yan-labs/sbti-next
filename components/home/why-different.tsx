type Locale = 'zh' | 'en' | 'ja' | 'ko';

interface Reason {
  num: string;
  title: string;
  desc: string;
}

const COPY: Record<Locale, {heading: string; reasons: [Reason, Reason, Reason, Reason]}> = {
  zh: {
    heading: '为什么不一样',
    reasons: [
      {
        num: '01',
        title: '游戏文化深度',
        desc: '每款游戏的题目都是针对该游戏圈内梗单独写的，不是通用心理学题换皮。CS2 玩家不会看到"你怎么处理压力"这种问题。',
      },
      {
        num: '02',
        title: '6 维心理学结构',
        desc: '双极六轴模型，67 种组合，不是 BuzzFeed 的三道题猜你最像哪个明星。每个轴都是玩家行为科学里的独立变量。',
      },
      {
        num: '03',
        title: '截图友好设计',
        desc: '每个结果都为社交分享做过优化：6 字母玩家身份码、雷达图、原型卡，截图发出去就有人问"我也要测"。',
      },
      {
        num: '04',
        title: '四语种真本地化',
        desc: '中文、英文、日文、韩文，每种语言的题目和原型描述都根据该地区玩家文化单独写，不是直接机翻。',
      },
    ],
  },
  en: {
    heading: 'What makes this different',
    reasons: [
      {
        num: '01',
        title: 'Game-specific questions',
        desc: 'Every question is written for that game\'s community. CS2 players get CS2 situations. No generic psychology prompts in disguise.',
      },
      {
        num: '02',
        title: '6-axis psychological model',
        desc: 'Bipolar six-axis system, 67 combinations. Not a three-question "which celebrity are you" thing. Each axis is an independent variable in gamer behavior.',
      },
      {
        num: '03',
        title: 'Built for screenshots',
        desc: 'Every result ships with a 6-letter player code, a radar chart, and an archetype card. The kind of thing people actually post.',
      },
      {
        num: '04',
        title: 'Four languages, actually localized',
        desc: 'Chinese, English, Japanese, Korean — each with game-culture references specific to that region\'s player community. Not a translation.',
      },
    ],
  },
  ja: {
    heading: '何が違うのか',
    reasons: [
      {
        num: '01',
        title: 'ゲームごとの専用問題',
        desc: '各ゲームのコミュニティ向けに問題を個別に作成。CS2プレイヤーはCS2の状況に答える。汎用心理学問題の使い回しはない。',
      },
      {
        num: '02',
        title: '6軸心理学モデル',
        desc: '双極6軸システム、67の組み合わせ。「あなたは芸能人の誰に似てる？」系の問題ではない。各軸はゲーマー行動の独立変数だ。',
      },
      {
        num: '03',
        title: 'スクショ前提の設計',
        desc: 'すべての結果に6文字プレイヤーコード・レーダーチャート・アーキタイプカードが付く。実際にシェアしたくなるやつ。',
      },
      {
        num: '04',
        title: '4言語、ちゃんとローカライズ',
        desc: '中国語・英語・日本語・韓国語。各地域のプレイヤー文化に合わせて個別に書かれている。機械翻訳ではない。',
      },
    ],
  },
  ko: {
    heading: '무엇이 다른가',
    reasons: [
      {
        num: '01',
        title: '게임 전용 문제',
        desc: '각 게임 커뮤니티를 위해 문제를 따로 작성했다. CS2 플레이어는 CS2 상황에 답한다. 범용 심리학 문제 재활용 없음.',
      },
      {
        num: '02',
        title: '6축 심리학 모델',
        desc: '양극 6축 시스템, 67가지 조합. "당신은 어떤 연예인을 닮았나요?" 류의 테스트가 아니다. 각 축은 게이머 행동의 독립 변수다.',
      },
      {
        num: '03',
        title: '스크린샷 친화적 설계',
        desc: '모든 결과에 6자리 플레이어 코드·레이더 차트·아키타입 카드가 포함된다. 실제로 공유하고 싶어지는 디자인.',
      },
      {
        num: '04',
        title: '4개 언어, 제대로 된 현지화',
        desc: '중국어·영어·일본어·한국어. 각 지역 플레이어 문화에 맞게 별도로 작성됐다. 기계 번역이 아니다.',
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
    <section className="bg-muted/40 py-16 md:py-20">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="font-heading text-2xl font-bold text-center text-foreground mb-10 md:text-3xl">
          {t.heading}
        </h2>

        <div className="grid gap-4 sm:grid-cols-2">
          {t.reasons.map((r) => (
            <div
              key={r.num}
              className="rounded-2xl border border-border bg-card p-6 shadow-sm"
            >
              <div className="mb-3 flex items-center gap-3">
                <span className="font-mono text-2xl font-bold text-primary/30">{r.num}</span>
                <h3 className="font-heading text-base font-semibold text-foreground">{r.title}</h3>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
