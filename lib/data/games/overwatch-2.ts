import type { GameQuizV2 } from './types';

const empty = { zh: '', en: '', ja: '', ko: '' } as const;

const game: GameQuizV2 = {
  slug: 'overwatch-2',
  title: {
    zh: '守望先锋2',
    en: 'Overwatch 2',
    ja: 'オーバーウォッチ2',
    ko: '오버워치 2',
  },
  deck: {
    zh: '你是哪种英雄玩家？',
    en: 'What kind of Overwatch 2 player are you?',
    ja: 'あなたはどんなOW2プレイヤー？',
    ko: '당신은 어떤 오버워치 2 플레이어?',
  },
  description: {
    zh: '30 道题，测出你的守望先锋2玩家类型',
    en: '30 questions to reveal your Overwatch 2 player identity',
    ja: '30問でオーバーウォッチ2のプレイスタイルを診断',
    ko: '30문제로 알아보는 오버워치 2 플레이어 유형',
  },
  dominantAxes: ['Bond', 'Tempo', 'Mental'] as const,
  archetypes: [
    {
      slug: 'ult-economist',
      name: empty,
      oneLiner: empty,
      polarityPattern: {
        Bond: 'high',
        Tempo: 'low',
        Mental: 'low',
        Nerve: 'low',
        Intel: 'low',
        Flair: 'low',
      },
    },
    {
      slug: 'c9-trauma-curator',
      name: empty,
      oneLiner: empty,
      polarityPattern: {
        Bond: 'high',
        Tempo: 'low',
        Mental: 'high',
        Nerve: 'low',
        Intel: 'low',
        Flair: 'low',
      },
    },
    {
      slug: 'payload-parent',
      name: empty,
      oneLiner: empty,
      polarityPattern: {
        Bond: 'high',
        Tempo: 'high',
        Mental: 'low',
        Nerve: 'low',
        Intel: 'low',
        Flair: 'low',
      },
    },
    {
      slug: 'voice-line-saboteur',
      name: empty,
      oneLiner: empty,
      polarityPattern: {
        Bond: 'high',
        Tempo: 'high',
        Mental: 'high',
        Nerve: 'low',
        Intel: 'low',
        Flair: 'low',
      },
    },
    {
      slug: 'solo-tank-philosopher',
      name: empty,
      oneLiner: empty,
      polarityPattern: {
        Bond: 'low',
        Tempo: 'low',
        Mental: 'low',
        Nerve: 'low',
        Intel: 'low',
        Flair: 'low',
      },
    },
    {
      slug: 'dps-victim',
      name: empty,
      oneLiner: empty,
      polarityPattern: {
        Bond: 'low',
        Tempo: 'low',
        Mental: 'high',
        Nerve: 'low',
        Intel: 'low',
        Flair: 'low',
      },
    },
    {
      slug: 'flanker-monk',
      name: empty,
      oneLiner: empty,
      polarityPattern: {
        Bond: 'low',
        Tempo: 'high',
        Mental: 'low',
        Nerve: 'low',
        Intel: 'low',
        Flair: 'low',
      },
    },
    {
      slug: 'killcam-headliner',
      name: empty,
      oneLiner: empty,
      polarityPattern: {
        Bond: 'low',
        Tempo: 'high',
        Mental: 'high',
        Nerve: 'low',
        Intel: 'low',
        Flair: 'low',
      },
    },
  ],
  questions: [],
};

export default game;
