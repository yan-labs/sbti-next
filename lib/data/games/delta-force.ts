import type { GameQuizV2 } from './types';

const empty = { zh: '', en: '', ja: '', ko: '' } as const;

const game: GameQuizV2 = {
  slug: 'delta-force',
  title: {
    zh: '三角洲行动',
    en: 'Delta Force',
    ja: 'デルタフォース',
    ko: '델타포스',
  },
  deck: {
    zh: '你在撤离局是哪种玩家？',
    en: 'What kind of operator are you in Delta Force?',
    ja: 'デルタフォースであなたは何型？',
    ko: '델타포스에서 당신은 어떤 오퍼레이터?',
  },
  description: {
    zh: '30 道题，测出你的三角洲行动战术类型',
    en: '30 questions to reveal your Delta Force operator type',
    ja: '30問でデルタフォースのプレイスタイルを診断',
    ko: '30문제로 알아보는 델타포스 전술 유형',
  },
  dominantAxes: ['Nerve', 'Intel', 'Tempo'] as const,
  archetypes: [
    {
      slug: 'extract-actuary',
      name: empty,
      oneLiner: empty,
      polarityPattern: {
        Nerve: 'low',
        Intel: 'low',
        Tempo: 'low',
        Bond: 'low',
        Flair: 'low',
        Mental: 'low',
      },
    },
    {
      slug: 'recon-foreman',
      name: empty,
      oneLiner: empty,
      polarityPattern: {
        Nerve: 'low',
        Intel: 'low',
        Tempo: 'high',
        Bond: 'low',
        Flair: 'low',
        Mental: 'low',
      },
    },
    {
      slug: 'crate-philosopher',
      name: empty,
      oneLiner: empty,
      polarityPattern: {
        Nerve: 'low',
        Intel: 'high',
        Tempo: 'low',
        Bond: 'low',
        Flair: 'low',
        Mental: 'low',
      },
    },
    {
      slug: 'whisper-runner',
      name: empty,
      oneLiner: empty,
      polarityPattern: {
        Nerve: 'low',
        Intel: 'high',
        Tempo: 'high',
        Bond: 'low',
        Flair: 'low',
        Mental: 'low',
      },
    },
    {
      slug: 'kit-merchant',
      name: empty,
      oneLiner: empty,
      polarityPattern: {
        Nerve: 'high',
        Intel: 'low',
        Tempo: 'low',
        Bond: 'low',
        Flair: 'low',
        Mental: 'low',
      },
    },
    {
      slug: 'boss-contractor',
      name: empty,
      oneLiner: empty,
      polarityPattern: {
        Nerve: 'high',
        Intel: 'low',
        Tempo: 'high',
        Bond: 'low',
        Flair: 'low',
        Mental: 'low',
      },
    },
    {
      slug: 'loadout-romantic',
      name: empty,
      oneLiner: empty,
      polarityPattern: {
        Nerve: 'high',
        Intel: 'high',
        Tempo: 'low',
        Bond: 'low',
        Flair: 'low',
        Mental: 'low',
      },
    },
    {
      slug: 'armored-showoff',
      name: empty,
      oneLiner: empty,
      polarityPattern: {
        Nerve: 'high',
        Intel: 'high',
        Tempo: 'high',
        Bond: 'low',
        Flair: 'low',
        Mental: 'low',
      },
    },
  ],
  questions: [],
};

export default game;
