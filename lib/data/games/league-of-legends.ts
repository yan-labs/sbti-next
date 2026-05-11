import type { GameQuizV2 } from './types';

const empty = { zh: '', en: '', ja: '', ko: '' } as const;

const game: GameQuizV2 = {
  slug: 'league-of-legends',
  title: {
    zh: '英雄联盟',
    en: 'League of Legends',
    ja: 'リーグ・オブ・レジェンド',
    ko: '리그 오브 레전드',
  },
  deck: {
    zh: '你是峡谷里哪种玩家？',
    en: 'What kind of summoner are you?',
    ja: '召喚師峡谷のあなたは何型？',
    ko: '소환사 협곡의 당신은 어떤 유형?',
  },
  description: {
    zh: '30 道题，测出你在峡谷的真实玩家类型',
    en: '30 questions to find your true Rift identity',
    ja: '30問でリフトの本当のプレイスタイルを発見',
    ko: '30문제로 알아보는 협곡 속 진짜 플레이어 유형',
  },
  dominantAxes: ['Bond', 'Nerve', 'Mental'] as const,
  archetypes: [
    {
      slug: 'rift-cfo',
      name: empty,
      oneLiner: empty,
      polarityPattern: {
        Bond: 'high',
        Nerve: 'low',
        Mental: 'low',
        Tempo: 'low',
        Intel: 'low',
        Flair: 'low',
      },
    },
    {
      slug: 'tilt-shepherd',
      name: empty,
      oneLiner: empty,
      polarityPattern: {
        Bond: 'high',
        Nerve: 'low',
        Mental: 'high',
        Tempo: 'low',
        Intel: 'low',
        Flair: 'low',
      },
    },
    {
      slug: 'clutch-evangelist',
      name: empty,
      oneLiner: empty,
      polarityPattern: {
        Bond: 'high',
        Nerve: 'high',
        Mental: 'low',
        Tempo: 'low',
        Intel: 'low',
        Flair: 'low',
      },
    },
    {
      slug: 'flame-conductor',
      name: empty,
      oneLiner: empty,
      polarityPattern: {
        Bond: 'high',
        Nerve: 'high',
        Mental: 'high',
        Tempo: 'low',
        Intel: 'low',
        Flair: 'low',
      },
    },
    {
      slug: 'mute-strategist',
      name: empty,
      oneLiner: empty,
      polarityPattern: {
        Bond: 'low',
        Nerve: 'low',
        Mental: 'low',
        Tempo: 'low',
        Intel: 'low',
        Flair: 'low',
      },
    },
    {
      slug: 'solo-victim',
      name: empty,
      oneLiner: empty,
      polarityPattern: {
        Bond: 'low',
        Nerve: 'low',
        Mental: 'high',
        Tempo: 'low',
        Intel: 'low',
        Flair: 'low',
      },
    },
    {
      slug: 'lane-tyrant',
      name: empty,
      oneLiner: empty,
      polarityPattern: {
        Bond: 'low',
        Nerve: 'high',
        Mental: 'low',
        Tempo: 'low',
        Intel: 'low',
        Flair: 'low',
      },
    },
    {
      slug: 'aram-comedian',
      name: empty,
      oneLiner: empty,
      polarityPattern: {
        Bond: 'low',
        Nerve: 'high',
        Mental: 'high',
        Tempo: 'low',
        Intel: 'low',
        Flair: 'low',
      },
    },
  ],
  questions: [],
};

export default game;
