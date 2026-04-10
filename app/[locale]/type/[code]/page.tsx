import {setRequestLocale} from 'next-intl/server';
import {getTranslations} from 'next-intl/server';
import {routing} from '@/i18n/routing';
import {NORMAL_TYPES, TYPE_IMAGES} from '@/lib/data/personalities';
import {TypeDetailPage} from '@/components/type-detail-page';

const ALL_CODES = [...NORMAL_TYPES.map(t => t.code), 'HHHH', 'DRUNK'];

export function generateStaticParams() {
  return routing.locales.flatMap(locale =>
    ALL_CODES.map(code => ({locale, code}))
  );
}

export async function generateMetadata({params}: {params: Promise<{locale: string; code: string}>}) {
  const {locale, code} = await params;
  const t = await getTranslations({locale, namespace: 'personalities'});
  const tm = await getTranslations({locale, namespace: 'meta'});
  const baseUrl = 'https://sbti.support';

  let name: string, intro: string;
  try {
    name = t(`${code}.name`);
    intro = t(`${code}.intro`);
  } catch {
    name = code;
    intro = '';
  }

  // Locale-specific title suffix and CTA
  const ctaMap: Record<string, string> = {
    zh: '免费测试你的SBTI人格类型',
    en: 'Take the free SBTI test',
    ja: '無料SBTIテストを受けよう',
    ko: '무료 SBTI 테스트 받기',
  };
  const cta = ctaMap[locale] || ctaMap.en;

  return {
    title: `${code}（${name}）— SBTI | sbti.support`,
    description: `${intro} ${cta}`,
    alternates: {
      canonical: `${baseUrl}/${locale}/type/${code}`,
      languages: Object.fromEntries(
        ['zh','en','ja','ko'].map(l => [l, `${baseUrl}/${l}/type/${code}`])
      ),
    },
    openGraph: {
      title: `${code} — ${name}`,
      description: intro,
      url: `${baseUrl}/${locale}/type/${code}`,
      siteName: 'SBTI',
      type: 'article',
      images: [{url: `${baseUrl}/types/${code.replace(/[^a-zA-Z0-9-]/g, '_')}.png`}],
    },
    robots: {index: true, follow: true},
  };
}

export default async function TypePage({params}: {params: Promise<{locale: string; code: string}>}) {
  const {locale, code} = await params;
  setRequestLocale(locale);
  return <TypeDetailPage code={code} />;
}
