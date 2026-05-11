import type { GameQuizV2 } from './types';

const empty = { zh: '', en: '', ja: '', ko: '' } as const;

const game: GameQuizV2 = {
  slug: 'honor-of-kings',
  title: {
    zh: '王者荣耀',
    en: 'Honor of Kings',
    ja: '王者栄耀',
    ko: '왕자영요',
  },
  deck: {
    zh: '你在峡谷是哪种段位灵魂？',
    en: 'What kind of Honor of Kings player are you?',
    ja: '峡谷であなたは何型プレイヤー？',
    ko: '협곡에서 당신은 어떤 플레이어?',
  },
  description: {
    zh: '30 道题，测出你的王者荣耀玩家类型',
    en: '30 questions to find your Honor of Kings player type',
    ja: '30問で王者栄耀のプレイスタイルを診断',
    ko: '30문제로 알아보는 왕자영요 플레이어 유형',
  },
  dominantAxes: ['Bond', 'Mental', 'Flair'] as const,
  archetypes: [
    {
      slug: 'jungle-auditor',
      name: empty,
      oneLiner: empty,
      polarityPattern: {
        Bond: 'high',
        Mental: 'low',
        Flair: 'low',
        Tempo: 'low',
        Nerve: 'low',
        Intel: 'low',
      },
    },
    {
      slug: 'family-host',
      name: empty,
      oneLiner: empty,
      polarityPattern: {
        Bond: 'high',
        Mental: 'low',
        Flair: 'high',
        Tempo: 'low',
        Nerve: 'low',
        Intel: 'low',
      },
    },
    {
      slug: 'defeat-grief-counselor',
      name: empty,
      oneLiner: empty,
      polarityPattern: {
        Bond: 'high',
        Mental: 'high',
        Flair: 'low',
        Tempo: 'low',
        Nerve: 'low',
        Intel: 'low',
      },
    },
    {
      slug: 'teamfight-festival',
      name: empty,
      oneLiner: empty,
      polarityPattern: {
        Bond: 'high',
        Mental: 'high',
        Flair: 'high',
        Tempo: 'low',
        Nerve: 'low',
        Intel: 'low',
      },
    },
    {
      slug: 'lane-pressure-artist',
      name: empty,
      oneLiner: empty,
      polarityPattern: {
        Bond: 'low',
        Mental: 'low',
        Flair: 'low',
        Tempo: 'low',
        Nerve: 'low',
        Intel: 'low',
      },
    },
    {
      slug: 'skin-collector',
      name: empty,
      oneLiner: empty,
      polarityPattern: {
        Bond: 'low',
        Mental: 'low',
        Flair: 'high',
        Tempo: 'low',
        Nerve: 'low',
        Intel: 'low',
      },
    },
    {
      slug: 'solo-curse',
      name: empty,
      oneLiner: empty,
      polarityPattern: {
        Bond: 'low',
        Mental: 'high',
        Flair: 'low',
        Tempo: 'low',
        Nerve: 'low',
        Intel: 'low',
      },
    },
    {
      slug: 'bm-ping-mayor',
      name: empty,
      oneLiner: empty,
      polarityPattern: {
        Bond: 'low',
        Mental: 'high',
        Flair: 'high',
        Tempo: 'low',
        Nerve: 'low',
        Intel: 'low',
      },
    },
  ],
  questions: [],
};

export default game;
