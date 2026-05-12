import type { Axis, Polarity, PolarityLetter, LocalizedText } from './types';

export interface AxisDefinition {
  axis: Axis;
  lowLetter: PolarityLetter;
  highLetter: PolarityLetter;
  lowLabel: LocalizedText;
  highLabel: LocalizedText;
  lowFeedback: LocalizedText;
  highFeedback: LocalizedText;
}

/**
 * Six axes in canonical order: Tempo Nerve Bond Intel Flair Mental.
 * The order determines the 6-letter polarity code (e.g. LCSDUK).
 */
export const AXES: readonly AxisDefinition[] = [
  {
    axis: 'Tempo',
    lowLetter: 'L',
    highLetter: 'R',
    lowLabel: {
      zh: '慢热运营',
      en: 'Slow burn',
      ja: '堅実運営',
      ko: '느긋한 운영',
    },
    highLabel: {
      zh: '速通快攻',
      en: 'Rush down',
      ja: 'スピード突破',
      ko: '속공 러시',
    },
    lowFeedback: {
      zh: '你靠资源差磨死对面，急不得',
      en: 'You farm the lead. Patience is your weapon.',
      ja: 'じっくり資源差で勝ちに行くタイプ',
      ko: '자원 격차로 차분하게 이기는 스타일',
    },
    highFeedback: {
      zh: '你是第一个开团的人，等待对你是折磨',
      en: 'You open the fight. Waiting feels like losing.',
      ja: '真っ先に仕掛ける。待つのは性に合わない。',
      ko: '먼저 치고 들어간다. 기다리는 건 고통이다.',
    },
  },
  {
    axis: 'Nerve',
    lowLetter: 'C',
    highLetter: 'A',
    lowLabel: {
      zh: '风控会计',
      en: 'Risk manager',
      ja: 'リスク管理派',
      ko: '리스크 관리형',
    },
    highLabel: {
      zh: '一把梭哈',
      en: 'All-in',
      ja: '全賭け派',
      ko: '올인형',
    },
    lowFeedback: {
      zh: '你在别人梭哈时撤退，活得最久',
      en: 'You fold when others shove. That\'s why you\'re still alive.',
      ja: '他が全賭けするとき引く。だから生き残る。',
      ko: '남들이 올인할 때 빠진다. 그래서 살아남는다.',
    },
    highFeedback: {
      zh: '你押对了是传说，押错了是名场面',
      en: 'Win or lose, your plays end up on the highlight reel.',
      ja: '当たれば伝説、外れても名場面になる。',
      ko: '맞으면 전설, 틀려도 하이라이트가 된다.',
    },
  },
  {
    axis: 'Bond',
    lowLetter: 'S',
    highLetter: 'T',
    lowLabel: {
      zh: '独狼专精',
      en: 'Solo wolf',
      ja: 'ソロ特化',
      ko: '솔로 특화',
    },
    highLabel: {
      zh: '团魂派',
      en: 'Team anchor',
      ja: 'チーム魂',
      ko: '팀플레이형',
    },
    lowFeedback: {
      zh: '你靠自己，队友只是地图上的五个名字',
      en: 'You carry alone. Teammates are just names on the minimap.',
      ja: 'ひとりで動く。味方はミニマップの名前に過ぎない。',
      ko: '혼자 한다. 팀원은 미니맵의 닉네임일 뿐이다.',
    },
    highFeedback: {
      zh: '你为团队活，没有队友你会迷失',
      en: 'You live for the squad. Without them, the game loses its point.',
      ja: 'チームのために動く。仲間なしでは意味がない。',
      ko: '팀을 위해 산다. 팀 없이는 게임 의미가 없다.',
    },
  },
  {
    axis: 'Intel',
    lowLetter: 'D',
    highLetter: 'F',
    lowLabel: {
      zh: '数据派',
      en: 'Data driven',
      ja: 'データ重視',
      ko: '데이터 중시형',
    },
    highLabel: {
      zh: '手感派',
      en: 'Feel player',
      ja: '感覚プレイヤー',
      ko: '감각 플레이어',
    },
    lowFeedback: {
      zh: '你相信数字，胜率和 timer 是你的信仰',
      en: 'Win rates and timers are your religion.',
      ja: '勝率とタイマーが信仰。数字を信じる。',
      ko: '승률과 타이머가 신념이다. 숫자를 믿는다.',
    },
    highFeedback: {
      zh: '你手感好的时候什么数据都不用看',
      en: 'When the aim is on, stats are irrelevant.',
      ja: 'ノッてるときは数字なんか見ない。',
      ko: '감각이 살아있을 때 통계는 필요 없다.',
    },
  },
  {
    axis: 'Flair',
    lowLetter: 'U',
    highLetter: 'H',
    lowLabel: {
      zh: '效率主义',
      en: 'Efficiency mode',
      ja: '効率主義',
      ko: '효율 우선형',
    },
    highLabel: {
      zh: '节目效果',
      en: 'Show time',
      ja: 'ショータイム',
      ko: '쇼타임형',
    },
    lowFeedback: {
      zh: '你不需要好看，只要赢就行',
      en: 'You don\'t need it to look good. You just need it to work.',
      ja: '見た目より勝ち。それだけでいい。',
      ko: '멋있을 필요 없다. 이기면 그만이다.',
    },
    highFeedback: {
      zh: '赢了要好看，输了也要好看',
      en: 'Win or lose, you\'re making it a show.',
      ja: '勝っても負けても見せ場を作る。',
      ko: '이기든 지든 볼거리는 만든다.',
    },
  },
  {
    axis: 'Mental',
    lowLetter: 'K',
    highLetter: 'B',
    lowLabel: {
      zh: '钝感如山',
      en: 'Titanium tilt',
      ja: 'ストレス無敵',
      ko: '멘탈 강철형',
    },
    highLabel: {
      zh: '红温易燃',
      en: 'Quick tilt',
      ja: '即炎上',
      ko: '빠른 틸트형',
    },
    lowFeedback: {
      zh: '你被 int 了还是能打，队友羡慕这份钝感',
      en: 'You get inted and keep playing. Teammates envy the calm.',
      ja: 'ゲームを壊されても動じない。みんなが羨む鈍さ。',
      ko: '다 망해도 꿋꿋이 한다. 팀원이 그 멘탈을 부러워한다.',
    },
    highFeedback: {
      zh: '一个 int 够你骂三局，但你还是回来了',
      en: 'One feed and you\'re on fire for three games. You always come back anyway.',
      ja: '一回やらかされただけで三試合ぐずる。でも戻ってくる。',
      ko: '인트 한 번에 세 판 동안 화난다. 그래도 다시 돌아온다.',
    },
  },
] as const;

/**
 * Canonical axis order — derived from AXES; determines letter position in
 * the 6-letter polarity code (Tempo first → Mental last).
 */
export const AXIS_ORDER: readonly Axis[] = AXES.map((a) => a.axis);

// ── Helpers ───────────────────────────────────────────────────────────────────

export function axisByLetter(letter: string): AxisDefinition | undefined {
  return AXES.find(
    (a) => a.lowLetter === letter || a.highLetter === letter,
  );
}

export function polarityFromScore(normalizedScore: number): Polarity {
  return normalizedScore > 50 ? 'high' : 'low';
}
