import {BASE_URL, getLocaleUrl} from './metadata';

const SCHEMA_ORG = 'https://schema.org';

// Language code map for Schema.org inLanguage
const IN_LANGUAGE: Record<string, string> = {
  zh: 'zh-CN',
  en: 'en',
  ja: 'ja',
  ko: 'ko',
};

function inLanguage(locale: string): string {
  return IN_LANGUAGE[locale] ?? 'en';
}

// ─────────────────────────────────────────────────────────────────────────────
// Organization
// ─────────────────────────────────────────────────────────────────────────────

export function buildOrganizationSchema() {
  return {
    '@context': SCHEMA_ORG,
    '@type': 'Organization',
    '@id': `${BASE_URL}/#org`,
    name: 'SBTI',
    url: BASE_URL,
    logo: {
      '@type': 'ImageObject',
      url: `${BASE_URL}/icon.svg`,
    },
    description:
      'SBTI (Satirical Behavior Type Indicator) is a viral satirical personality test that parodies MBTI with 27 absurd personality types across 15 dimensions.',
    sameAs: [],
  };
}

// ─────────────────────────────────────────────────────────────────────────────
// WebSite
// ─────────────────────────────────────────────────────────────────────────────

export function buildWebSiteSchema(locale: string) {
  const siteUrl = getLocaleUrl(locale);
  return {
    '@context': SCHEMA_ORG,
    '@type': 'WebSite',
    '@id': `${BASE_URL}/#website`,
    url: siteUrl,
    name: 'SBTI Test Hub',
    description:
      'Free multilingual quiz hub for satirical personality tests and gamer type quizzes, including SBTI, League of Legends, Counter-Strike 2, VALORANT, Delta Force, Honor of Kings, Overwatch, PUBG, and Apex.',
    inLanguage: inLanguage(locale),
    publisher: {
      '@id': `${BASE_URL}/#org`,
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${BASE_URL}/types?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };
}

// ─────────────────────────────────────────────────────────────────────────────
// Quiz
// ─────────────────────────────────────────────────────────────────────────────

const QUIZ_NAME: Record<string, string> = {
  zh: 'SBTI 人格测试',
  en: 'SBTI Personality Test',
  ja: 'SBTI 性格テスト',
  ko: 'SBTI 성격 테스트',
};

const QUIZ_DESCRIPTION: Record<string, string> = {
  zh: '免费在线人格测试，戏仿 MBTI，30 道题测出你的 SBTI 人格类型（共 27 种）。',
  en: 'Free satirical personality quiz that parodies MBTI. Answer 30 questions to discover your SBTI type from 27 absurd personality archetypes.',
  ja: 'MBTIをパロディした無料性格テスト。30問で27タイプからあなたのSBTIタイプを診断します。',
  ko: 'MBTI를 패러디한 무료 성격 테스트. 30문항으로 27가지 유형 중 당신의 SBTI 유형을 찾아보세요.',
};

export function buildQuizSchema(locale: string) {
  return {
    '@context': SCHEMA_ORG,
    '@type': 'Quiz',
    '@id': `${BASE_URL}/#quiz`,
    name: QUIZ_NAME[locale] ?? QUIZ_NAME.en,
    description: QUIZ_DESCRIPTION[locale] ?? QUIZ_DESCRIPTION.en,
    url: getLocaleUrl(locale, '/test'),
    numberOfQuestions: 30,
    educationalLevel: 'casual',
    inLanguage: inLanguage(locale),
    isPartOf: {
      '@id': `${BASE_URL}/#website`,
    },
    provider: {
      '@id': `${BASE_URL}/#org`,
    },
    about: [
      {
        '@type': 'Thing',
        name: 'MBTI parody',
      },
      {
        '@type': 'Thing',
        name: 'satirical personality test',
      },
      {
        '@type': 'Thing',
        name: '27 personality types',
      },
    ],
  };
}

export function buildGameQuizSchema(
  locale: string,
  input: {
    id: string;
    name: string;
    description: string;
    url: string;
    numberOfQuestions: number;
    about: string[];
    imageUrl?: string;
  },
) {
  return {
    '@context': SCHEMA_ORG,
    '@type': 'Quiz',
    '@id': `${input.url}#quiz`,
    name: input.name,
    description: input.description,
    url: input.url,
    image: input.imageUrl
      ? {
          '@type': 'ImageObject',
          url: input.imageUrl,
        }
      : undefined,
    numberOfQuestions: input.numberOfQuestions,
    educationalLevel: 'casual',
    inLanguage: inLanguage(locale),
    isPartOf: {
      '@id': `${BASE_URL}/#website`,
    },
    provider: {
      '@id': `${BASE_URL}/#org`,
    },
    about: input.about.map((name) => ({
      '@type': 'Thing',
      name,
    })),
  };
}

// ─────────────────────────────────────────────────────────────────────────────
// BreadcrumbList
// ─────────────────────────────────────────────────────────────────────────────

export function buildBreadcrumbSchema(locale: string, segments: {name: string; path: string}[]) {
  return {
    '@context': SCHEMA_ORG,
    '@type': 'BreadcrumbList',
    itemListElement: segments.map((seg, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: seg.name,
      item: getLocaleUrl(locale, seg.path),
    })),
  };
}

// ─────────────────────────────────────────────────────────────────────────────
// Person (author stub)
// ─────────────────────────────────────────────────────────────────────────────

export function buildPersonSchema(authorName: string) {
  return {
    '@context': SCHEMA_ORG,
    '@type': 'Person',
    name: authorName,
    url: BASE_URL,
  };
}

// ─────────────────────────────────────────────────────────────────────────────
// Article
// ─────────────────────────────────────────────────────────────────────────────

export interface ArticleSchemaInput {
  headline: string;
  description: string;
  datePublished: string;
  dateModified: string;
  url: string;
  imageUrl?: string;
  authorName?: string;
}

export function buildArticleSchema(locale: string, input: ArticleSchemaInput) {
  const {headline, description, datePublished, dateModified, url, imageUrl, authorName} = input;
  return {
    '@context': SCHEMA_ORG,
    '@type': 'Article',
    headline,
    description,
    url,
    datePublished,
    dateModified,
    inLanguage: inLanguage(locale),
    image: imageUrl
      ? {
          '@type': 'ImageObject',
          url: imageUrl,
        }
      : {
          '@type': 'ImageObject',
          url: `${BASE_URL}/og-default.png`,
          width: 1200,
          height: 630,
        },
    author: {
      '@type': 'Person',
      name: authorName ?? 'SBTI Team',
      url: BASE_URL,
    },
    publisher: {
      '@id': `${BASE_URL}/#org`,
    },
    isPartOf: {
      '@id': `${BASE_URL}/#website`,
    },
  };
}

// ─────────────────────────────────────────────────────────────────────────────
// DefinedTerm (personality type pages)
// ─────────────────────────────────────────────────────────────────────────────

export function buildDefinedTermSchema(
  locale: string,
  code: string,
  name: string,
  description: string,
  url: string,
  imageUrl?: string,
) {
  const termSetName: Record<string, string> = {
    zh: 'SBTI 人格类型',
    en: 'SBTI Personality Types',
    ja: 'SBTI 性格タイプ',
    ko: 'SBTI 성격 유형',
  };

  return {
    '@context': SCHEMA_ORG,
    '@type': 'DefinedTerm',
    '@id': `${url}#type`,
    name: `${code} — ${name}`,
    description,
    url,
    inDefinedTermSet: {
      '@type': 'DefinedTermSet',
      '@id': `${BASE_URL}/types#termset`,
      name: termSetName[locale] ?? termSetName.en,
      url: getLocaleUrl(locale, '/types'),
    },
    image: imageUrl
      ? {
          '@type': 'ImageObject',
          url: imageUrl,
        }
      : undefined,
    inLanguage: inLanguage(locale),
    isPartOf: {
      '@id': `${BASE_URL}/#quiz`,
    },
  };
}

// ─────────────────────────────────────────────────────────────────────────────
// FAQPage
// ─────────────────────────────────────────────────────────────────────────────

export function buildFAQPageSchema(qaPairs: {question: string; answer: string}[]) {
  return {
    '@context': SCHEMA_ORG,
    '@type': 'FAQPage',
    mainEntity: qaPairs.map(({question, answer}) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: answer,
      },
    })),
  };
}

// ─────────────────────────────────────────────────────────────────────────────
// CollectionPage (types index)
// ─────────────────────────────────────────────────────────────────────────────

export function buildCollectionPageSchema(
  locale: string,
  name: string,
  description: string,
  url: string,
  typeCodes: string[],
) {
  return {
    '@context': SCHEMA_ORG,
    '@type': 'CollectionPage',
    name,
    description,
    url,
    inLanguage: inLanguage(locale),
    isPartOf: {
      '@id': `${BASE_URL}/#website`,
    },
    hasPart: typeCodes.map(code => ({
      '@type': 'DefinedTerm',
      '@id': `${getLocaleUrl(locale, `/type/${code}`)}#type`,
      name: code,
      url: getLocaleUrl(locale, `/type/${code}`),
    })),
  };
}

// ─────────────────────────────────────────────────────────────────────────────
// DefinedTerm — game archetype
// ─────────────────────────────────────────────────────────────────────────────

export function buildArchetypeDefinedTermSchema(
  locale: string,
  input: {
    gameSlug: string;
    gameTitle: string;
    archetypeSlug: string;
    archetypeName: string;
    description: string;
    url: string;
    imageUrl?: string;
  },
) {
  const termSetName: Record<string, string> = {
    zh: `${input.gameTitle} 玩家类型`,
    en: `${input.gameTitle} Player Types`,
    ja: `${input.gameTitle} プレイヤータイプ`,
    ko: `${input.gameTitle} 플레이어 유형`,
  };

  return {
    '@context': SCHEMA_ORG,
    '@type': 'DefinedTerm',
    '@id': `${input.url}#archetype`,
    name: input.archetypeName,
    description: input.description,
    url: input.url,
    inDefinedTermSet: {
      '@type': 'DefinedTermSet',
      '@id': `${BASE_URL}/games/${input.gameSlug}#archetypes`,
      name: termSetName[locale] ?? termSetName.en,
      url: getLocaleUrl(locale, `/games/${input.gameSlug}`),
    },
    image: input.imageUrl
      ? {'@type': 'ImageObject', url: input.imageUrl}
      : undefined,
    inLanguage: inLanguage(locale),
    isPartOf: {
      '@id': `${BASE_URL}/#website`,
    },
  };
}

// ─────────────────────────────────────────────────────────────────────────────
// WebPage (blog list, compat)
// ─────────────────────────────────────────────────────────────────────────────

export function buildWebPageSchema(
  locale: string,
  name: string,
  description: string,
  url: string,
  extra?: Record<string, unknown>,
) {
  return {
    '@context': SCHEMA_ORG,
    '@type': 'WebPage',
    name,
    description,
    url,
    inLanguage: inLanguage(locale),
    isPartOf: {
      '@id': `${BASE_URL}/#website`,
    },
    ...extra,
  };
}
