export const BASE_URL = 'https://sbti.support';

const LOCALES = ['zh', 'en', 'ja', 'ko'] as const;
const DEFAULT_LOCALE = 'en' as const;

export const TWITTER_HANDLE = '@yan_ai_labs';

export const DEFAULT_OG_IMAGE = {url: `${BASE_URL}/og-default.png`, width: 1200, height: 630};

type Locale = (typeof LOCALES)[number];
type StaticSeoPage = 'home' | 'about' | 'faq' | 'types';

const PAGE_KEYWORDS: Record<StaticSeoPage, Record<Locale, string[]>> = {
  home: {
    zh: [
      'SBTI测试',
      'SBTI人格测试',
      '人格测试',
      '免费人格测试',
      '搞笑人格测试',
      'MBTI恶搞版',
      'MBTI替代',
      '27种人格',
      'SBTI是什么',
    ],
    en: [
      'SBTI personality test',
      'SBTI test',
      'what is SBTI',
      'free personality test',
      'satirical personality test',
      'viral personality quiz',
      'funny personality test',
      'MBTI parody',
      'MBTI alternative',
      '27 personality types',
    ],
    ja: [
      'SBTI 性格テスト',
      'SBTI診断',
      '性格診断',
      '無料性格テスト',
      '面白い性格テスト',
      'MBTI パロディ',
      '27タイプ',
    ],
    ko: [
      'SBTI 성격 테스트',
      'SBTI 테스트',
      '성격 테스트',
      '무료 성격 테스트',
      '재미있는 성격 유형 테스트',
      'MBTI 패러디',
      '27가지 유형',
    ],
  },
  about: {
    zh: ['SBTI是什么', 'SBTI含义', 'SBTI测试原理', 'SBTI和MBTI区别', '15维人格测试'],
    en: ['what is SBTI', 'SBTI meaning', 'how SBTI works', 'SBTI vs MBTI', '15-dimension personality test'],
    ja: ['SBTIとは', 'SBTI 意味', 'SBTI 仕組み', 'SBTI と MBTI の違い', '15次元 性格診断'],
    ko: ['SBTI란', 'SBTI 의미', 'SBTI 작동 방식', 'SBTI MBTI 차이', '15차원 성격 테스트'],
  },
  faq: {
    zh: ['SBTI常见问题', 'SBTI和MBTI有什么区别', 'SBTI免费吗', 'SBTI测试多久', 'SBTI结果怎么看'],
    en: ['SBTI FAQ', 'is SBTI free', 'how long is the SBTI test', 'SBTI vs MBTI', 'how SBTI results work'],
    ja: ['SBTI FAQ', 'SBTI 無料', 'SBTI 何分', 'SBTI と MBTI の違い', 'SBTI 結果'],
    ko: ['SBTI FAQ', 'SBTI 무료', 'SBTI 몇 분', 'SBTI MBTI 차이', 'SBTI 결과'],
  },
  types: {
    zh: ['SBTI人格类型', 'SBTI 27种人格', 'SBTI类型大全', '人格类型列表', 'SBTI结果'],
    en: ['SBTI types', 'all 27 SBTI personality types', 'SBTI type list', 'SBTI results', 'personality type directory'],
    ja: ['SBTI タイプ一覧', 'SBTI 27タイプ', '性格タイプ一覧', 'SBTI 結果'],
    ko: ['SBTI 유형', 'SBTI 27가지 유형', '성격 유형 목록', 'SBTI 결과'],
  },
};

const PAGE_SEO_COPY: Record<
  StaticSeoPage,
  Record<Locale, {title: string; description: string}>
> = {
  home: {
    zh: {
      title: 'SBTI测试 | 免费在线人格测试，测你的搞笑人格类型',
      description:
        'SBTI 是爆火的搞笑人格测试，也是 MBTI 恶搞版人格测试。30 道题，1-3 分钟测出你的 SBTI 人格类型，查看 27 种结果和详细解析。',
    },
    en: {
      title: 'SBTI Personality Test | Free Viral Satirical Personality Quiz',
      description:
        'Take the free SBTI personality test, a viral satirical MBTI parody with 27 absurd personality types. Answer 30 questions, get your result in minutes, and compare all SBTI types.',
    },
    ja: {
      title: 'SBTI 性格テスト | 無料でできる話題の診断・27タイプ',
      description:
        'SBTIはMBTIをパロディした話題の性格テスト。30問であなたのSBTIタイプを無料診断し、27種類の性格タイプと詳細プロフィールを確認できます。',
    },
    ko: {
      title: 'SBTI 성격 테스트 | 무료 밈 성격 유형 테스트·27가지 결과',
      description:
        'SBTI는 MBTI를 패러디한 화제의 성격 테스트입니다. 30문항으로 무료 진단하고, 27가지 SBTI 유형과 자세한 결과 해석을 확인하세요.',
    },
  },
  about: {
    zh: {
      title: '什么是 SBTI？| SBTI 测试来源、玩法与 15 维设定',
      description:
        '了解 SBTI 是什么：它为什么被称为 MBTI 恶搞版人格测试、27 种人格类型怎么来的，以及 30 道题和 15 维评分如何工作。',
    },
    en: {
      title: 'What Is SBTI? | Satirical Personality Test, MBTI Parody, 15 Dimensions',
      description:
        'Learn what SBTI means, how this satirical personality test works, why people compare it with MBTI, and how 30 questions map to 27 types across 15 dimensions.',
    },
    ja: {
      title: 'SBTIとは？ | MBTIパロディ診断の意味・30問・15次元',
      description:
        'SBTIとは何か、なぜMBTIのパロディ診断と呼ばれるのか、30問と15次元のスコアで27タイプに分かれる仕組みを紹介します。',
    },
    ko: {
      title: 'SBTI란? | MBTI 패러디 테스트 의미·30문항·15차원',
      description:
        'SBTI가 무엇인지, 왜 MBTI 패러디 성격 테스트로 불리는지, 30문항과 15차원 점수로 27가지 유형이 나뉘는 방식을 설명합니다.',
    },
  },
  faq: {
    zh: {
      title: 'SBTI 常见问题 | SBTI 是什么、和 MBTI 有什么区别？',
      description:
        '查看 SBTI FAQ：SBTI 是什么、测试要多久、是否免费、和 MBTI 有什么区别、27 种人格类型如何判定。',
    },
    en: {
      title: 'SBTI FAQ | What Is SBTI, Is It Free, and SBTI vs MBTI',
      description:
        'Answers about the SBTI personality test: what SBTI is, how long the quiz takes, whether it is free, how results work, and how SBTI differs from MBTI.',
    },
    ja: {
      title: 'SBTI FAQ | SBTIとは？無料？MBTIとの違いは？',
      description:
        'SBTI性格テストのよくある質問をまとめました。SBTIとは何か、無料か、何分かかるか、MBTIとの違い、結果の見方を確認できます。',
    },
    ko: {
      title: 'SBTI FAQ | SBTI란? 무료인가요? MBTI와 차이는?',
      description:
        'SBTI 성격 테스트 자주 묻는 질문 모음입니다. SBTI가 무엇인지, 무료인지, 얼마나 걸리는지, MBTI와 무엇이 다른지 확인하세요.',
    },
  },
  types: {
    zh: {
      title: 'SBTI 27 种人格类型 | 全部人格结果与名称列表',
      description:
        '浏览 SBTI 27 种人格类型大全，查看每个结果的名称、标签和人格简介，找到你的 SBTI 测试结果并进入详细解析页。',
    },
    en: {
      title: 'All 27 SBTI Types | Full Personality Type List and Meanings',
      description:
        'Browse all 27 SBTI personality types, from CTRL to DEAD. Compare names, archetypes, and result pages, then open each type for traits, scores, and closest matches.',
    },
    ja: {
      title: 'SBTI 27タイプ一覧 | 全性格タイプと結果ページ',
      description:
        'SBTIの全27タイプを一覧で確認。タイプ名、キャラ設定、結果ページを比較し、各タイプの詳細プロフィールへ進めます。',
    },
    ko: {
      title: 'SBTI 27가지 유형 | 전체 성격 결과와 타입 목록',
      description:
        'SBTI의 27가지 성격 유형을 한눈에 확인하세요. 타입 이름과 캐릭터, 결과 페이지를 비교하고 각 유형의 상세 해석으로 이동할 수 있습니다.',
    },
  },
};

const TYPE_KEYWORD_BASE: Record<Locale, string[]> = {
  zh: ['SBTI人格类型', 'SBTI测试结果', '人格解析', '性格特点', '人格标签'],
  en: ['SBTI result', 'SBTI personality type', 'personality traits', 'type meaning', 'satirical personality type'],
  ja: ['SBTI タイプ', 'SBTI 結果', '性格タイプ', 'タイプ解説'],
  ko: ['SBTI 유형', 'SBTI 결과', '성격 유형', '유형 해석'],
};

function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}

function getLocale(locale: string): Locale {
  return isLocale(locale) ? locale : DEFAULT_LOCALE;
}

function dedupeKeywords(keywords: string[]) {
  return [...new Set(keywords.filter(Boolean))];
}

function normalizeDescription(description: string) {
  return description.replace(/\s+/g, ' ').trim();
}

export function buildTwitter(title: string, description: string, image?: {url: string; width?: number; height?: number}) {
  return {
    card: 'summary_large_image' as const,
    site: TWITTER_HANDLE,
    title,
    description,
    images: image ? [image] : [DEFAULT_OG_IMAGE],
  };
}

export function buildAlternates(locale: string, path: string = '') {
  const url = (l: string) => l === 'en' ? `${BASE_URL}${path}` : `${BASE_URL}/${l}${path}`;
  return {
    canonical: url(locale),
    languages: {
      ...Object.fromEntries(LOCALES.map(l => [l, url(l)])),
      'x-default': url('en'),
    },
  };
}

export function getPageSeo(locale: string, page: StaticSeoPage) {
  const currentLocale = getLocale(locale);
  return {
    ...PAGE_SEO_COPY[page][currentLocale],
    keywords: PAGE_KEYWORDS[page][currentLocale],
  };
}

export function getLocaleUrl(locale: string, path: string = '') {
  const currentLocale = getLocale(locale);
  return currentLocale === 'en' ? `${BASE_URL}${path}` : `${BASE_URL}/${currentLocale}${path}`;
}

export function getTypeSeo(locale: string, code: string, name: string, intro: string) {
  const currentLocale = getLocale(locale);

  const titleMap: Record<Locale, string> = {
    zh: `${code}（${name}）人格解析 | SBTI 测试结果`,
    en: `${code} (${name}) Personality Type | SBTI Result, Traits & Meaning`,
    ja: `${code}（${name}）性格タイプ | SBTI診断結果`,
    ko: `${code} (${name}) 성격 유형 | SBTI 결과 해석`,
  };

  const descriptionMap: Record<Locale, string> = {
    zh: normalizeDescription(
      `查看 SBTI 测试结果 ${code}（${name}）：${intro} 了解这个人格的特点、15 维评分、最接近类型，并重新测试你的 SBTI 人格。`,
    ),
    en: normalizeDescription(
      `See the SBTI result for ${code} (${name}). ${intro} Read the traits, 15-dimension profile, closest matches, and retake the free SBTI personality test.`,
    ),
    ja: normalizeDescription(
      `${code}（${name}）のSBTI診断結果を確認。${intro} この性格タイプの特徴、15次元スコア、近いタイプ、無料テストへの再挑戦をまとめています。`,
    ),
    ko: normalizeDescription(
      `${code} (${name}) SBTI 결과를 확인하세요. ${intro} 이 성격 유형의 특징, 15차원 점수, 가까운 유형, 무료 테스트 다시 하기를 한 페이지에서 볼 수 있습니다.`,
    ),
  };

  const localeKeywords = TYPE_KEYWORD_BASE[currentLocale];
  const dynamicKeywords = currentLocale === 'zh'
    ? [`${code}人格`, `${name}人格`, `${code} SBTI`, `${name} SBTI`]
    : currentLocale === 'ja'
      ? [`${code} SBTI`, `${name} タイプ`, `${name} SBTI`]
      : currentLocale === 'ko'
        ? [`${code} SBTI`, `${name} 유형`, `${name} SBTI`]
        : [`${code} SBTI`, `${name} personality type`, `${name} SBTI`, `${code} result`];

  return {
    title: titleMap[currentLocale],
    description: descriptionMap[currentLocale],
    keywords: dedupeKeywords([...localeKeywords, code, name, ...dynamicKeywords]),
  };
}
