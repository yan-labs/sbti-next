import {setRequestLocale} from 'next-intl/server';
import {buildAlternates, buildTwitter, getPageSeo, getLocaleUrl, getOgLocale, getAlternateOgLocales, DEFAULT_OG_IMAGE} from '@/lib/metadata';
import {buildWebSiteSchema, buildOrganizationSchema, buildWebPageSchema, buildFAQPageSchema} from '@/lib/json-ld';
import {JsonLd} from '@/components/json-ld';
import {ALL_GAMES_V2} from '@/lib/data/games';
import HomePage from '@/components/home';

type Locale = 'zh' | 'en' | 'ja' | 'ko';

const FAQ_DATA: Record<Locale, {question: string; answer: string}[]> = {
  zh: [
    {question: '测试要多久？', answer: '30 道题，通常 3-5 分钟能答完。没有计时压力，选最直觉的就好。'},
    {question: '结果准不准？', answer: '基于心理学行为科学的六维双极模型，67 种组合。很多人说"被说中了"，也有人说"这哪是我"。这正是它好玩的地方。'},
    {question: '支持哪些语言？', answer: '中文、英文、日文、韩文。每种语言的题目和原型描述都根据该地区玩家文化单独写的，不是直接机翻。'},
    {question: '结果怎么分享？', answer: '测完后有原型卡可以截图，也可以复制结果链接。6 字母的玩家身份码可以直接发给朋友对比。'},
    {question: '会收集我的个人数据吗？', answer: '不会。测试结果只存在你的浏览器本地，不上传服务器，也不需要注册账号。'},
  ],
  en: [
    {question: 'How long does it take?', answer: '30 questions, usually 3-5 minutes. No timer, no pressure — just pick whichever option feels most like you.'},
    {question: 'How accurate is it?', answer: 'Built on a six-axis bipolar model drawn from behavioral science, with 67 possible combinations. Most people say it\'s closer than expected.'},
    {question: 'Which languages are supported?', answer: 'Chinese, English, Japanese, and Korean. Each version is written for that region\'s player community, not machine-translated.'},
    {question: 'How do I share my result?', answer: 'After finishing, you get an archetype card to screenshot, a link to copy, and a 6-letter player code to paste anywhere.'},
    {question: 'Does it collect personal data?', answer: 'No. Results stay in your browser\'s local storage only. Nothing goes to a server, and there\'s no account to create.'},
  ],
  ja: [
    {question: '何分かかりますか？', answer: '30問で、だいたい3〜5分。タイマーはないので、直感で一番近いものを選べばOK。'},
    {question: '精度はどうですか？', answer: '行動科学に基づいた6軸双極モデルで、67種類の組み合わせがある。「当たってる」という人もいれば「これ私じゃない」という人もいる。'},
    {question: 'どの言語に対応していますか？', answer: '中国語・英語・日本語・韓国語。各言語はその地域のプレイヤーコミュニティ向けに個別に書かれています。'},
    {question: '結果はどうやってシェアしますか？', answer: '診断後にアーキタイプカードをスクリーンショットするか、結果リンクをコピーできます。6文字コードを友達に送ることも。'},
    {question: '個人データは収集されますか？', answer: 'されません。結果はブラウザのローカルストレージにのみ保存され、サーバーには送信されません。'},
  ],
  ko: [
    {question: '얼마나 걸리나요?', answer: '30문항으로 보통 3~5분 걸린다. 타이머 없으니 가장 나다운 선택지를 고르면 된다.'},
    {question: '얼마나 정확한가요?', answer: '행동과학 기반의 6축 양극 모델, 67가지 조합. 대부분의 사람들이 예상보다 맞는다고 한다.'},
    {question: '어떤 언어를 지원하나요?', answer: '중국어·영어·일본어·한국어. 각 언어는 해당 지역 플레이어 문화에 맞게 별도로 작성됐다.'},
    {question: '결과는 어떻게 공유하나요?', answer: '테스트 완료 후 아키타입 카드를 스크린샷하거나 결과 링크를 복사할 수 있다. 6자리 코드를 친구에게 보내 비교도 가능.'},
    {question: '개인 데이터를 수집하나요?', answer: '아니다. 결과는 브라우저 로컬 스토리지에만 저장되고 서버로 전송되지 않는다.'},
  ],
};

function getLocaleFAQ(locale: string) {
  return FAQ_DATA[(locale as Locale) in FAQ_DATA ? (locale as Locale) : 'en'];
}

export async function generateMetadata({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  const seo = getPageSeo(locale, 'home');
  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    alternates: buildAlternates(locale),
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: getLocaleUrl(locale),
      siteName: 'SBTI',
      type: 'website',
      images: [DEFAULT_OG_IMAGE],
      locale: getOgLocale(locale),
      alternateLocale: getAlternateOgLocales(locale),
    },
    twitter: buildTwitter(seo.title, seo.description),
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function Home({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  setRequestLocale(locale);
  const seo = getPageSeo(locale, 'home');

  return (
    <>
      <JsonLd data={buildWebSiteSchema(locale)} />
      <JsonLd data={buildOrganizationSchema()} />
      <JsonLd
        data={buildWebPageSchema(locale, seo.title, seo.description, getLocaleUrl(locale), {
          mainEntity: {
            '@type': 'ItemList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'SBTI Personality Test',
                url: getLocaleUrl(locale, '/test'),
              },
              ...ALL_GAMES_V2.map((game, index) => ({
                '@type': 'ListItem',
                position: index + 2,
                name: game.title[locale as Locale] ?? game.title.en,
                url: getLocaleUrl(locale, `/games/${game.slug}`),
              })),
            ],
          },
        })}
      />
      <JsonLd data={buildFAQPageSchema(getLocaleFAQ(locale))} />
      <HomePage locale={locale} />
    </>
  );
}
