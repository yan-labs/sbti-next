import type { GameQuizV2, SiteLocale } from './types';
import { AXES } from './dimensions';

type QA = { question: string; answer: string };

// ── Per-locale templates ──────────────────────────────────────────────────────
// Each template receives substituted values; [Game] / [N] / [Types] / [Axes]
// are never exposed as literal slots — the function fills them before returning.

const TEMPLATES: Record<
  SiteLocale,
  {
    q1: (game: string, n: number, anchor: number, compound: number) => QA;
    q2: (game: string, count: number, types: string) => QA;
    q3: (game: string, axes: string) => QA;
    q4: (game: string) => QA;
    q5: () => QA;
  }
> = {
  zh: {
    q1: (game, n, anchor, compound) => ({
      question: `${game}有几道题？`,
      answer: `共 ${n} 道题：${anchor} 道单轴锚定题 + ${compound} 道多轴复合场景题，每题 4 个选项，大约 2-3 分钟完成。`,
    }),
    q2: (game, count, types) => ({
      question: `${game}有哪 ${count} 种玩家类型？`,
      answer: `${count} 种玩家类型分别是：${types}。完成测试后系统会告诉你属于哪一种。`,
    }),
    q3: (game, axes) => ({
      question: `${game}六维模型测量什么？`,
      answer: `测试从 6 个维度刻画你的游戏风格：${axes}。每个维度都有低极和高极，最终生成一个 6 位玩家身份码。`,
    }),
    q4: (game) => ({
      question: `${game}免费吗？`,
      answer: '免费，无需注册账号，支持中文、英文、日文、韩文 4 种语言，测完即看结果。',
    }),
    q5: () => ({
      question: '6 位玩家身份码是什么意思？',
      answer: '玩家身份码（如 RASFHB）由 6 个字母组成，每个字母对应一个维度的极性：节奏（L/R）、胆量（C/A）、协作（S/T）、信息（D/F）、表达（U/H）、心态（K/B）。',
    }),
  },
  en: {
    q1: (game, n, anchor, compound) => ({
      question: `How many questions does the ${game} have?`,
      answer: `${n} questions total: ${anchor} single-axis anchor questions and ${compound} compound situational ones. Four options each. Runs about 2-3 minutes.`,
    }),
    q2: (game, count, types) => ({
      question: `What are the ${count} player types in the ${game}?`,
      answer: `The ${count} player types are: ${types}. Finish the quiz and the result maps you to one of them.`,
    }),
    q3: (game, axes) => ({
      question: `What does the 6-axis model in the ${game} measure?`,
      answer: `Six axes cover how you actually play: ${axes}. Each axis has two poles, and your 6-letter player code shows which pole you land on.`,
    }),
    q4: (game) => ({
      question: `Is the ${game} free?`,
      answer: 'Yes — no account needed. Available in Chinese, English, Japanese, and Korean. Results show up right after the last question.',
    }),
    q5: () => ({
      question: 'What does the 6-letter player code mean?',
      answer: 'The player code (e.g. RASFHB) has one letter per axis pole: Tempo (L/R), Nerve (C/A), Bond (S/T), Intel (D/F), Flair (U/H), Mental (K/B).',
    }),
  },
  ja: {
    q1: (game, n, anchor, compound) => ({
      question: `${game}は何問ある？`,
      answer: `全 ${n} 問だ。単軸アンカー ${anchor} 問 + 複合シナリオ ${compound} 問で、選択肢は各4つ。2〜3分で終わる。`,
    }),
    q2: (game, count, types) => ({
      question: `${game}の${count}タイプは何？`,
      answer: `${count}種類のプレイヤータイプは：${types}。診断を受ければどれに当たるかわかる。`,
    }),
    q3: (game, axes) => ({
      question: `${game}の6軸モデルは何を測定する？`,
      answer: `プレイスタイルを6軸で診断する：${axes}。各軸に2極があり、6文字のプレイヤーコードで自分のポジションがわかる。`,
    }),
    q4: (game) => ({
      question: `${game}は無料？`,
      answer: '無料で登録不要だ。日本語・英語・中国語・韓国語の4言語に対応していて、最後の問いに答えたらすぐ結果が出る。',
    }),
    q5: () => ({
      question: '6文字のプレイヤーコードは何を意味する？',
      answer: 'プレイヤーコード（例：RASFHB）は1文字ずつ各軸の極性を示す：テンポ（L/R）・ナーブ（C/A）・ボンド（S/T）・インテル（D/F）・フレア（U/H）・メンタル（K/B）。',
    }),
  },
  ko: {
    q1: (game, n, anchor, compound) => ({
      question: `${game}은 몇 문항인가요?`,
      answer: `총 ${n}문항이다. 단일 축 앵커 ${anchor}문항 + 복합 상황 ${compound}문항으로, 선택지는 각 4개. 2~3분이면 끝난다.`,
    }),
    q2: (game, count, types) => ({
      question: `${game}의 ${count}가지 유형은 무엇인가요?`,
      answer: `${count}가지 유형은 ${types}다. 테스트를 마치면 내 유형을 바로 확인할 수 있다.`,
    }),
    q3: (game, axes) => ({
      question: `${game}의 6축 모델은 무엇을 측정하나요?`,
      answer: `6개 축으로 플레이 스타일을 분석한다: ${axes}. 각 축마다 두 극이 있고, 6자리 플레이어 코드로 내 포지션을 확인할 수 있다.`,
    }),
    q4: (game) => ({
      question: `${game}은 무료인가요?`,
      answer: '무료이고 회원가입 없이 바로 시작할 수 있다. 한국어·영어·중국어·일본어 4개 언어를 지원하며 마지막 문항 후 결과가 바로 나온다.',
    }),
    q5: () => ({
      question: '6자리 플레이어 코드는 무슨 의미인가요?',
      answer: '플레이어 코드(예: RASFHB)는 각 축의 극성을 한 글자씩 나타낸다: 템포(L/R), 너브(C/A), 본드(S/T), 인텔(D/F), 플레어(U/H), 멘탈(K/B).',
    }),
  },
};

// ── Axis label builder ────────────────────────────────────────────────────────

function buildAxesDescription(locale: SiteLocale): string {
  const sep = locale === 'en' ? '; ' : '、';
  const wrap = locale === 'en'
    ? (axis: string, low: string, high: string) => `${axis} (${low} / ${high})`
    : (axis: string, low: string, high: string) => `${axis}（${low} / ${high}）`;
  return AXES.map((a) => wrap(a.axis, a.lowLabel[locale], a.highLabel[locale])).join(sep);
}

// ── Question-count split ──────────────────────────────────────────────────────

function splitQuestions(total: number): { anchor: number; compound: number } {
  // Canonical split per spec: 12 anchor + 18 compound = 30
  // For any other count, fall back to rough 40/60 split
  if (total === 30) return { anchor: 12, compound: 18 };
  const anchor = Math.round(total * 0.4);
  return { anchor, compound: total - anchor };
}

// ── Public API ────────────────────────────────────────────────────────────────

export function buildGameHubFAQs(game: GameQuizV2, locale: SiteLocale): QA[] {
  const t = TEMPLATES[locale];
  const gameTitle = game.title[locale];
  const { anchor, compound } = splitQuestions(game.questions.length);
  const listSep = locale === 'en' ? ', ' : '、';
  const typesList = game.archetypes.map((a) => a.name[locale]).join(listSep);
  const typeCount = game.archetypes.length;
  const axesDesc = buildAxesDescription(locale);

  return [
    t.q1(gameTitle, game.questions.length, anchor, compound),
    t.q2(gameTitle, typeCount, typesList),
    t.q3(gameTitle, axesDesc),
    t.q4(gameTitle),
    t.q5(),
  ];
}
