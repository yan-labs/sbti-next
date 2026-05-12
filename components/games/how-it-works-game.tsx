import {Link} from '@/i18n/navigation';
import {ChapterMark} from '@/components/ui/chapter-mark';
import type {GameQuizV2, SiteLocale} from '@/lib/data/games/types';

const COPY: Record<SiteLocale, {
  kicker: string;
  heading: string;
  steps: {num: string; name: string; text: string}[];
  cta: string;
}> = {
  zh: {
    kicker: '测试流程',
    heading: '3 步找到你的原型',
    steps: [
      {num: '01', name: '30 道题，2-3 分钟', text: '没有对错，没有计时压力。每道题都在追一件事：你在游戏里到底是什么风格。'},
      {num: '02', name: '六维计算', text: '系统在 6 个维度上分析你的答案，生成独属于你的极性组合码——不是归类，是刻画。'},
      {num: '03', name: '获取你的玩家档案', text: '8 种原型、一张可截图的雷达图、一个你可以发给朋友的玩家身份码。看完记得截图。'},
    ],
    cta: '开始测试',
  },
  en: {
    kicker: 'How it works',
    heading: '3 steps to find your type',
    steps: [
      {num: '01', name: '30 questions, 2-3 minutes', text: 'No right answers, no timer breathing down your neck. Each question targets one thing: how you actually play.'},
      {num: '02', name: '6-axis calculation', text: 'Your answers get mapped across 6 behavioral axes. The system derives a polarity code — not a bucket, but a profile.'},
      {num: '03', name: 'Get your player profile', text: 'One of 8 archetypes, a radar chart, and a 6-letter player code you can paste anywhere. Screenshot it before closing the tab.'},
    ],
    cta: 'Take the quiz',
  },
  ja: {
    kicker: '診断の流れ',
    heading: '3ステップでタイプ判明',
    steps: [
      {num: '01', name: '30問・2〜3分', text: '正解なし、タイマーなし。各問はただひとつのことを追う：あなたのプレイスタイル。'},
      {num: '02', name: '6軸分析', text: '回答を6つの行動軸でマッピング。あなただけの極性コードが生成される。分類じゃなく、描写だ。'},
      {num: '03', name: 'プレイヤーファイルを受け取る', text: '8タイプのうちの1つ、レーダーチャート、6文字のコード。タブを閉じる前にスクリーンショットしよう。'},
    ],
    cta: '診断する',
  },
  ko: {
    kicker: '진행 방식',
    heading: '3단계로 유형 확인',
    steps: [
      {num: '01', name: '30문항, 2~3분', text: '정답 없음, 타이머 없음. 각 문항은 하나만 묻는다: 실제로 어떻게 플레이하는지.'},
      {num: '02', name: '6축 분석', text: '답변이 6개 행동 축에 매핑된다. 분류가 아닌 프로파일, 나만의 극성 코드가 나온다.'},
      {num: '03', name: '플레이어 프로필 받기', text: '8가지 유형 중 하나, 레이더 차트, 6자리 코드. 탭 닫기 전에 스크린샷해두자.'},
    ],
    cta: '테스트 시작',
  },
};

interface HowItWorksGameProps {
  game: GameQuizV2;
  locale: SiteLocale;
}

export function HowItWorksGame({game, locale}: HowItWorksGameProps) {
  const copy = COPY[locale];

  return (
    <section className="bg-muted/30 py-16 md:py-20" id="how-it-works">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10">
          <ChapterMark number="02" kicker={copy.kicker} className="mb-3" />
          <h2 className="font-heading text-3xl font-black text-foreground md:text-4xl">
            {copy.heading}
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {copy.steps.map(({num, name, text}) => (
            <div key={num} className="relative rounded-2xl border border-border/60 bg-card p-6 shadow-sm">
              {/* Editorial number */}
              <div
                className="mb-4 font-mono text-6xl font-black leading-none opacity-15"
                style={{color: 'var(--game-primary, var(--primary))'}}
                aria-hidden
              >
                {num}
              </div>
              <h3 className="mb-2 font-heading text-lg font-bold text-foreground">{name}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href={`/games/${game.slug}/play`}
            className="inline-flex items-center justify-center rounded-full px-8 py-3.5 text-base font-bold transition-opacity hover:opacity-90 focus-visible:outline-none"
            style={{
              background: 'var(--game-primary, var(--primary))',
              color: 'var(--game-surface, var(--primary-foreground))',
            }}
          >
            {copy.cta}
          </Link>
        </div>
      </div>
    </section>
  );
}
