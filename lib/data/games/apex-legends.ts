import type { GameQuizV2 } from './types';

const empty = { zh: '', en: '', ja: '', ko: '' } as const;

const game: GameQuizV2 = {
  slug: 'apex-legends',
  title: {
    zh: 'Apex 英雄',
    en: 'Apex Legends',
    ja: 'エーペックスレジェンズ',
    ko: '에이펙스 레전드',
  },
  deck: {
    zh: '你是哪种传奇玩家？',
    en: 'What kind of Apex Legends player are you?',
    ja: 'あなたはどんなApexプレイヤー？',
    ko: '당신은 어떤 에이펙스 레전드 플레이어?',
  },
  description: {
    zh: '30 道题，测出你的 Apex 英雄玩家风格',
    en: '30 questions to reveal your Apex Legends legend type',
    ja: '30問でエーペックスのレジェンドスタイルを診断',
    ko: '30문제로 알아보는 에이펙스 레전드 플레이어 유형',
  },
  dominantAxes: ['Tempo', 'Flair', 'Bond'] as const,
  archetypes: [
    {
      slug: 'rotation-cartographer',
      name: empty,
      oneLiner: empty,
      polarityPattern: {
        Tempo: 'low',
        Flair: 'low',
        Bond: 'high',
        Nerve: 'low',
        Intel: 'low',
        Mental: 'low',
      },
    },
    {
      slug: 'loot-hermit',
      name: empty,
      oneLiner: empty,
      polarityPattern: {
        Tempo: 'low',
        Flair: 'low',
        Bond: 'low',
        Nerve: 'low',
        Intel: 'low',
        Mental: 'low',
      },
    },
    {
      slug: 'pinging-poet',
      name: empty,
      oneLiner: empty,
      polarityPattern: {
        Tempo: 'low',
        Flair: 'high',
        Bond: 'high',
        Nerve: 'low',
        Intel: 'low',
        Mental: 'low',
      },
    },
    {
      slug: 'shield-influencer',
      name: empty,
      oneLiner: empty,
      polarityPattern: {
        Tempo: 'low',
        Flair: 'high',
        Bond: 'low',
        Nerve: 'low',
        Intel: 'low',
        Mental: 'low',
      },
    },
    {
      slug: 'third-party-strategist',
      name: empty,
      oneLiner: empty,
      polarityPattern: {
        Tempo: 'high',
        Flair: 'low',
        Bond: 'high',
        Nerve: 'low',
        Intel: 'low',
        Mental: 'low',
      },
    },
    {
      slug: 'solo-octane',
      name: empty,
      oneLiner: empty,
      polarityPattern: {
        Tempo: 'high',
        Flair: 'low',
        Bond: 'low',
        Nerve: 'low',
        Intel: 'low',
        Mental: 'low',
      },
    },
    {
      slug: 'slide-jump-evangelist',
      name: empty,
      oneLiner: empty,
      polarityPattern: {
        Tempo: 'high',
        Flair: 'high',
        Bond: 'high',
        Nerve: 'low',
        Intel: 'low',
        Mental: 'low',
      },
    },
    {
      slug: 'wraith-portal-clown',
      name: empty,
      oneLiner: empty,
      polarityPattern: {
        Tempo: 'high',
        Flair: 'high',
        Bond: 'low',
        Nerve: 'low',
        Intel: 'low',
        Mental: 'low',
      },
    },
  ],
  questions: [],
};

export default game;
