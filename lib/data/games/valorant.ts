import type { GameQuizV2 } from './types';

const empty = { zh: '', en: '', ja: '', ko: '' } as const;

const game: GameQuizV2 = {
  slug: 'valorant',
  title: {
    zh: 'VALORANT',
    en: 'VALORANT',
    ja: 'ヴァロラント',
    ko: '발로란트',
  },
  deck: {
    zh: '你是哪种 VALORANT 特工？',
    en: 'What kind of VALORANT agent are you?',
    ja: 'あなたはどんな VAL エージェント？',
    ko: '당신은 어떤 발로란트 요원인가요?',
  },
  description: {
    zh: '30 道题，测出你的 VALORANT 特工风格',
    en: '30 questions to find your VALORANT agent identity',
    ja: '30問でVALORANTのエージェントスタイルを診断',
    ko: '30문제로 알아보는 발로란트 요원 스타일',
  },
  dominantAxes: ['Bond', 'Intel', 'Flair'] as const,
  archetypes: [
    {
      slug: 'lineup-librarian',
      name: empty,
      oneLiner: empty,
      polarityPattern: {
        Bond: 'high',
        Intel: 'low',
        Flair: 'low',
        Tempo: 'low',
        Nerve: 'low',
        Mental: 'low',
      },
    },
    {
      slug: 'caffeinated-igl',
      name: empty,
      oneLiner: empty,
      polarityPattern: {
        Bond: 'high',
        Intel: 'low',
        Flair: 'high',
        Tempo: 'low',
        Nerve: 'low',
        Mental: 'low',
      },
    },
    {
      slug: 'sentinel-guardian',
      name: empty,
      oneLiner: empty,
      polarityPattern: {
        Bond: 'high',
        Intel: 'high',
        Flair: 'low',
        Tempo: 'low',
        Nerve: 'low',
        Mental: 'low',
      },
    },
    {
      slug: 'clutch-narrator',
      name: empty,
      oneLiner: empty,
      polarityPattern: {
        Bond: 'high',
        Intel: 'high',
        Flair: 'high',
        Tempo: 'low',
        Nerve: 'low',
        Mental: 'low',
      },
    },
    {
      slug: 'data-duelist',
      name: empty,
      oneLiner: empty,
      polarityPattern: {
        Bond: 'low',
        Intel: 'low',
        Flair: 'low',
        Tempo: 'low',
        Nerve: 'low',
        Mental: 'low',
      },
    },
    {
      slug: 'instalock-spectator',
      name: empty,
      oneLiner: empty,
      polarityPattern: {
        Bond: 'low',
        Intel: 'low',
        Flair: 'high',
        Tempo: 'low',
        Nerve: 'low',
        Mental: 'low',
      },
    },
    {
      slug: 'sheriff-economist',
      name: empty,
      oneLiner: empty,
      polarityPattern: {
        Bond: 'low',
        Intel: 'high',
        Flair: 'low',
        Tempo: 'low',
        Nerve: 'low',
        Mental: 'low',
      },
    },
    {
      slug: 'sheriff-mystic',
      name: empty,
      oneLiner: empty,
      polarityPattern: {
        Bond: 'low',
        Intel: 'high',
        Flair: 'high',
        Tempo: 'low',
        Nerve: 'low',
        Mental: 'low',
      },
    },
  ],
  questions: [],
};

export default game;
