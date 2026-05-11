import type { GameQuizV2 } from './types';

const empty = { zh: '', en: '', ja: '', ko: '' } as const;

const game: GameQuizV2 = {
  slug: 'counter-strike-2',
  title: {
    zh: 'CS2',
    en: 'Counter-Strike 2',
    ja: 'カウンターストライク2',
    ko: '카운터 스트라이크 2',
  },
  deck: {
    zh: '你是哪种 CS2 玩家？',
    en: 'What kind of CS2 player are you?',
    ja: 'あなたはどんな CS2 プレイヤー？',
    ko: '당신은 어떤 CS2 플레이어인가요?',
  },
  description: {
    zh: '30 道题，测出你的 CS2 战术风格',
    en: '30 questions to find your CS2 tactical identity',
    ja: '30問でCS2の戦術スタイルを診断',
    ko: '30문제로 알아보는 CS2 전술 스타일',
  },
  dominantAxes: ['Tempo', 'Intel', 'Nerve'] as const,
  archetypes: [
    {
      slug: 'eco-cfo',
      name: empty,
      oneLiner: empty,
      polarityPattern: {
        Tempo: 'low',
        Intel: 'low',
        Nerve: 'low',
        Bond: 'low',
        Flair: 'low',
        Mental: 'low',
      },
    },
    {
      slug: 'lineup-priest',
      name: empty,
      oneLiner: empty,
      polarityPattern: {
        Tempo: 'low',
        Intel: 'low',
        Nerve: 'high',
        Bond: 'low',
        Flair: 'low',
        Mental: 'low',
      },
    },
    {
      slug: 'silent-anchor',
      name: empty,
      oneLiner: empty,
      polarityPattern: {
        Tempo: 'low',
        Intel: 'high',
        Nerve: 'low',
        Bond: 'low',
        Flair: 'low',
        Mental: 'low',
      },
    },
    {
      slug: 'clutch-saint',
      name: empty,
      oneLiner: empty,
      polarityPattern: {
        Tempo: 'low',
        Intel: 'high',
        Nerve: 'high',
        Bond: 'low',
        Flair: 'low',
        Mental: 'low',
      },
    },
    {
      slug: 'default-igl',
      name: empty,
      oneLiner: empty,
      polarityPattern: {
        Tempo: 'high',
        Intel: 'low',
        Nerve: 'low',
        Bond: 'low',
        Flair: 'low',
        Mental: 'low',
      },
    },
    {
      slug: 'flash-entry',
      name: empty,
      oneLiner: empty,
      polarityPattern: {
        Tempo: 'high',
        Intel: 'low',
        Nerve: 'high',
        Bond: 'low',
        Flair: 'low',
        Mental: 'low',
      },
    },
    {
      slug: 'arch-cleric',
      name: empty,
      oneLiner: empty,
      polarityPattern: {
        Tempo: 'high',
        Intel: 'high',
        Nerve: 'low',
        Bond: 'low',
        Flair: 'low',
        Mental: 'low',
      },
    },
    {
      slug: 'awp-cowboy',
      name: empty,
      oneLiner: empty,
      polarityPattern: {
        Tempo: 'high',
        Intel: 'high',
        Nerve: 'high',
        Bond: 'low',
        Flair: 'low',
        Mental: 'low',
      },
    },
  ],
  questions: [],
};

export default game;
