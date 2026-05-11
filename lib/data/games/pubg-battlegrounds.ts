import type { GameQuizV2 } from './types';

const empty = { zh: '', en: '', ja: '', ko: '' } as const;

const game: GameQuizV2 = {
  slug: 'pubg-battlegrounds',
  title: {
    zh: 'PUBG',
    en: 'PUBG: Battlegrounds',
    ja: 'PUBG: バトルグラウンズ',
    ko: 'PUBG: 배틀그라운즈',
  },
  deck: {
    zh: '你是哪种吃鸡玩家？',
    en: 'What kind of PUBG player are you?',
    ja: 'あなたはどんなPUBGプレイヤー？',
    ko: '당신은 어떤 PUBG 플레이어?',
  },
  description: {
    zh: '30 道题，测出你的 PUBG 求生风格',
    en: '30 questions to reveal your PUBG survival style',
    ja: '30問でPUBGのサバイバルスタイルを診断',
    ko: '30문제로 알아보는 PUBG 생존 스타일',
  },
  dominantAxes: ['Tempo', 'Nerve', 'Flair'] as const,
  archetypes: [
    {
      slug: 'loot-accountant',
      name: empty,
      oneLiner: empty,
      polarityPattern: {
        Tempo: 'low',
        Nerve: 'low',
        Flair: 'low',
        Bond: 'low',
        Intel: 'low',
        Mental: 'low',
      },
    },
    {
      slug: 'circle-aesthete',
      name: empty,
      oneLiner: empty,
      polarityPattern: {
        Tempo: 'low',
        Nerve: 'low',
        Flair: 'high',
        Bond: 'low',
        Intel: 'low',
        Mental: 'low',
      },
    },
    {
      slug: 'ridge-sniper',
      name: empty,
      oneLiner: empty,
      polarityPattern: {
        Tempo: 'low',
        Nerve: 'high',
        Flair: 'low',
        Bond: 'low',
        Intel: 'low',
        Mental: 'low',
      },
    },
    {
      slug: 'prone-philosopher',
      name: empty,
      oneLiner: empty,
      polarityPattern: {
        Tempo: 'low',
        Nerve: 'high',
        Flair: 'high',
        Bond: 'low',
        Intel: 'low',
        Mental: 'low',
      },
    },
    {
      slug: 'safezone-ferry',
      name: empty,
      oneLiner: empty,
      polarityPattern: {
        Tempo: 'high',
        Nerve: 'low',
        Flair: 'low',
        Bond: 'low',
        Intel: 'low',
        Mental: 'low',
      },
    },
    {
      slug: 'final-pose',
      name: empty,
      oneLiner: empty,
      polarityPattern: {
        Tempo: 'high',
        Nerve: 'low',
        Flair: 'high',
        Bond: 'low',
        Intel: 'low',
        Mental: 'low',
      },
    },
    {
      slug: 'hot-drop-cfo',
      name: empty,
      oneLiner: empty,
      polarityPattern: {
        Tempo: 'high',
        Nerve: 'high',
        Flair: 'low',
        Bond: 'low',
        Intel: 'low',
        Mental: 'low',
      },
    },
    {
      slug: 'hot-drop-comedian',
      name: empty,
      oneLiner: empty,
      polarityPattern: {
        Tempo: 'high',
        Nerve: 'high',
        Flair: 'high',
        Bond: 'low',
        Intel: 'low',
        Mental: 'low',
      },
    },
  ],
  questions: [],
};

export default game;
