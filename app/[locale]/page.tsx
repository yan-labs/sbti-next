import {setRequestLocale} from 'next-intl/server';
import {getTranslations} from 'next-intl/server';
import {SBTIApp} from '@/components/sbti-app';

export async function generateMetadata({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: 'meta'});
  const baseUrl = 'https://sbti.support';
  const keywordsMap: Record<string, string[]> = {
    zh: ['SBTI', 'SBTI测试', 'SBTI人格测试', '性格测试', '免费人格测试', 'MBTI替代', '搞笑性格测试', '27种人格'],
    en: ['SBTI', 'SBTI test', 'SBTI personality test', 'personality quiz', 'free personality test', 'MBTI alternative', 'funny personality test', '27 types'],
    ja: ['SBTI', 'SBTIテスト', 'SBTI性格テスト', '性格診断', '無料性格テスト', 'MBTI代替', '面白い性格テスト'],
    ko: ['SBTI', 'SBTI테스트', 'SBTI성격테스트', '성격테스트', '무료성격테스트', 'MBTI대안', '재미있는성격테스트'],
  };
  return {
    title: t('title'),
    description: t('description'),
    keywords: keywordsMap[locale] || keywordsMap.en,
    alternates: {
      canonical: locale === 'zh' ? baseUrl : `${baseUrl}/${locale}`,
      languages: {
        'zh': baseUrl,
        'en': `${baseUrl}/en`,
        'ja': `${baseUrl}/ja`,
        'ko': `${baseUrl}/ko`,
      },
    },
    openGraph: {
      title: t('title'),
      description: t('description'),
      url: `${baseUrl}/${locale}`,
      siteName: 'SBTI',
      type: 'website',
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function Home({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  setRequestLocale(locale);

  return <SBTIApp />;
}
