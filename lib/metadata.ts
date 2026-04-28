export const BASE_URL = 'https://sbti.support';

const LOCALES = ['zh', 'en', 'ja', 'ko'] as const;
const DEFAULT_LOCALE = 'en' as const;

export const TWITTER_HANDLE = '@yan_ai_labs';

export const DEFAULT_OG_IMAGE = {url: `${BASE_URL}/og-default.png`, width: 1200, height: 630};

type Locale = (typeof LOCALES)[number];
type StaticSeoPage = 'home' | 'about' | 'faq' | 'types' | 'blog';

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
  blog: {
    zh: ['SBTI博客', 'SBTI文章', 'SBTI测试攻略', '人格测试科普', 'SBTI深度解析'],
    en: ['SBTI blog', 'SBTI articles', 'personality test guides', 'SBTI deep dives'],
    ja: ['SBTI ブログ', 'SBTI 記事', '性格テスト 解説', 'SBTI 深掘り'],
    ko: ['SBTI 블로그', 'SBTI 기사', '성격 테스트 가이드', 'SBTI 심층 분석'],
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
  blog: {
    zh: {
      title: 'SBTI 博客 | 人格测试深度解析与攻略',
      description:
        '阅读 SBTI 博客：SBTI 和 MBTI 的区别、27 种人格类型图鉴、五大维度解析，帮你更好地理解这个爆火的搞笑人格测试。',
    },
    en: {
      title: 'SBTI Blog | Personality Test Deep Dives & Guides',
      description:
        'Read the SBTI blog: how SBTI compares to MBTI, a guide to all 27 personality types, and the five dimensions behind the viral satirical personality test.',
    },
    ja: {
      title: 'SBTI ブログ | 性格テストの詳細解説とガイド',
      description:
        'SBTIブログ：SBTIとMBTIの違い、27タイプ図鑑、5次元モデル解説など、話題の性格テストを深掘りします。',
    },
    ko: {
      title: 'SBTI 블로그 | 성격 테스트 심층 분석과 가이드',
      description:
        'SBTI 블로그: SBTI와 MBTI 비교, 27가지 유형 도감, 5차원 모델 해설 등 화제의 성격 테스트를 깊이 알아봅니다.',
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

const OG_LOCALE_MAP: Record<Locale, string> = {
  zh: 'zh_CN',
  en: 'en_US',
  ja: 'ja_JP',
  ko: 'ko_KR',
};

export function getOgLocale(locale: string) {
  return OG_LOCALE_MAP[getLocale(locale)];
}

export function getAlternateOgLocales(locale: string) {
  const current = getLocale(locale);
  return LOCALES.filter(l => l !== current).map(l => OG_LOCALE_MAP[l]);
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

const BLOG_SEO: Record<string, Record<Locale, {title: string; description: string; keywords: string[]}>> = {
  'sbti-vs-mbti': {
    zh: {
      title: 'SBTI 和 MBTI 到底有什么区别？| SBTI 博客',
      description: 'SBTI 和 MBTI 从维度模型、类型数量到测试目的都不一样。这篇文章拆开讲讲两者的核心差异，以及为什么 SBTI 能在社交媒体上病毒式传播。',
      keywords: ['SBTI vs MBTI', 'SBTI MBTI 区别', 'SBTI MBTI 对比', 'SBTI和MBTI有什么区别', 'MBTI恶搞版'],
    },
    en: {
      title: 'SBTI vs MBTI: What Are the Differences? | SBTI Blog',
      description: 'SBTI and MBTI differ in dimensions, type count, and purpose. This post breaks down the core differences and why SBTI went viral on social media.',
      keywords: ['SBTI vs MBTI', 'SBTI MBTI differences', 'SBTI MBTI comparison', 'MBTI parody', 'SBTI explained'],
    },
    ja: {
      title: 'SBTIとMBTIの違いとは？ | SBTI ブログ',
      description: 'SBTIとMBTIは次元モデル、タイプ数、テストの目的が異なります。この記事で両者の違いとSBTIがバズった理由を解説します。',
      keywords: ['SBTI MBTI 違い', 'SBTI MBTI 比較', 'MBTI パロディ', 'SBTI 解説'],
    },
    ko: {
      title: 'SBTI와 MBTI의 차이점은? | SBTI 블로그',
      description: 'SBTI와 MBTI는 차원 모델, 유형 수, 테스트 목적이 다릅니다. 이 글에서 핵심 차이점과 SBTI가 바이럴된 이유를 설명합니다.',
      keywords: ['SBTI MBTI 차이', 'SBTI MBTI 비교', 'MBTI 패러디', 'SBTI 설명'],
    },
  },
  '27-personality-types': {
    zh: {
      title: 'SBTI 27 种人格类型完全图鉴 | SBTI 博客',
      description: '从拿捏者 CTRL 到死者 DEAD，一篇看完 SBTI 全部 27 种人格类型的名字、代号和性格特征，找到你的测试结果。',
      keywords: ['SBTI 27种人格', 'SBTI 人格类型', 'SBTI 全部类型', 'SBTI 图鉴', 'SBTI 类型大全', '吗喽', '死者', '拿捏者'],
    },
    en: {
      title: 'All 27 SBTI Personality Types Explained | SBTI Blog',
      description: 'From CTRL the Controller to DEAD the Deadpan — a complete guide to all 27 SBTI personality types with names, codes, and key traits.',
      keywords: ['SBTI 27 types', 'SBTI personality types', 'all SBTI types', 'SBTI type guide', 'SBTI type list'],
    },
    ja: {
      title: 'SBTI 全27タイプ完全図鑑 | SBTI ブログ',
      description: 'CTRLからDEADまで、SBTIの全27タイプの名前、コード、性格特徴を一覧で紹介します。',
      keywords: ['SBTI 27タイプ', 'SBTI タイプ一覧', 'SBTI 全タイプ', 'SBTI 図鑑'],
    },
    ko: {
      title: 'SBTI 27가지 유형 완전 도감 | SBTI 블로그',
      description: 'CTRL부터 DEAD까지, SBTI의 27가지 유형 이름, 코드, 성격 특징을 한눈에 정리했습니다.',
      keywords: ['SBTI 27 유형', 'SBTI 유형 목록', 'SBTI 전체 유형', 'SBTI 도감'],
    },
  },
  'five-dimensions': {
    zh: {
      title: 'SBTI 五大维度模型：测试背后的逻辑 | SBTI 博客',
      description: '自我、情感、态度、行动、社交——SBTI 用 5 个切面 15 个维度给你画像。这篇文章拆解每个维度的含义和高低分代表什么。',
      keywords: ['SBTI 维度', 'SBTI 五大维度', 'SBTI 测试原理', 'SBTI 五大模型', 'SBTI 15维度', 'SBTI 算法'],
    },
    en: {
      title: 'The 5 Dimensions Behind SBTI | SBTI Blog',
      description: 'Self, Emotion, Attitude, Action, Social — SBTI profiles you across 5 facets and 15 dimensions. This post explains what each dimension means and what high vs low scores look like.',
      keywords: ['SBTI dimensions', 'SBTI five dimensions', 'SBTI how it works', 'SBTI model', 'SBTI 15 dimensions'],
    },
    ja: {
      title: 'SBTI 5次元モデル：テストの仕組み | SBTI ブログ',
      description: '自己、感情、態度、行動、社交——SBTIは5つの切面と15の次元であなたをプロファイリングします。各次元の意味と高低スコアを解説。',
      keywords: ['SBTI 次元', 'SBTI 5次元', 'SBTI 仕組み', 'SBTI モデル', 'SBTI 15次元'],
    },
    ko: {
      title: 'SBTI 5차원 모델: 테스트의 원리 | SBTI 블로그',
      description: '자아, 감정, 태도, 행동, 사회성 — SBTI는 5개 면과 15개 차원으로 프로파일링합니다. 각 차원의 의미와 점수 해석을 설명합니다.',
      keywords: ['SBTI 차원', 'SBTI 5차원', 'SBTI 원리', 'SBTI 모델', 'SBTI 15차원'],
    },
  },
};

export function getBlogSeo(locale: string, slug: string) {
  const currentLocale = getLocale(locale);
  const blogData = BLOG_SEO[slug];
  if (!blogData) return null;
  return blogData[currentLocale];
}
