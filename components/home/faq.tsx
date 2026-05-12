import {buildFAQPageSchema} from '@/lib/json-ld';
import {JsonLd} from '@/components/json-ld';
import {Link} from '@/i18n/navigation';

type Locale = 'zh' | 'en' | 'ja' | 'ko';

interface QA {
  q: string;
  a: string;
}

const COPY: Record<Locale, {heading: string; cta: string; faqs: [QA, QA, QA, QA, QA]}> = {
  zh: {
    heading: '常见问题',
    cta: '开始测试',
    faqs: [
      {
        q: '测试要多久？',
        a: '30 道题，通常 3-5 分钟能答完。没有计时压力，选最直觉的就好。',
      },
      {
        q: '结果准不准？',
        a: '这是基于心理学行为科学的六维双极模型，67 种组合。准不准这个问题本身就很有意思——很多人说"被说中了"，也有人说"这哪是我"。这正是它好玩的地方。',
      },
      {
        q: '支持哪些语言？',
        a: '中文、英文、日文、韩文。每种语言的题目和原型描述都根据该地区玩家文化单独写的，不是直接机翻。',
      },
      {
        q: '结果怎么分享？',
        a: '测完后有原型卡可以截图，也可以复制结果链接。6 字母的玩家身份码可以直接发给朋友对比。',
      },
      {
        q: '会收集我的个人数据吗？',
        a: '不会。测试结果只存在你的浏览器本地，不上传服务器，也不需要注册账号。关浏览器后记得截图，答案不会自动保存。',
      },
    ],
  },
  en: {
    heading: 'Questions',
    cta: 'Start a quiz',
    faqs: [
      {
        q: 'How long does it take?',
        a: '30 questions, usually 3-5 minutes. No timer, no pressure — just pick whichever option feels most like you.',
      },
      {
        q: 'How accurate is it?',
        a: 'It\'s built on a six-axis bipolar model drawn from behavioral science, with 67 possible combinations. Whether it\'s "accurate" partly depends on whether you\'ve ever been told you need to chill out in chat. Most people say it\'s closer than expected.',
      },
      {
        q: 'Which languages are supported?',
        a: 'Chinese, English, Japanese, and Korean. Each version is written for that region\'s player community, not machine-translated from another language.',
      },
      {
        q: 'How do I share my result?',
        a: 'After finishing, you get an archetype card to screenshot, a link to copy, and a 6-letter player code to paste wherever. The card is designed to look good at screenshot size.',
      },
      {
        q: 'Does it collect personal data?',
        a: 'No. Results stay in your browser\'s local storage only. Nothing goes to a server, and there\'s no account to create. Screenshot your result before closing the tab — answers aren\'t saved automatically.',
      },
    ],
  },
  ja: {
    heading: 'よくある質問',
    cta: '診断を始める',
    faqs: [
      {
        q: '何分かかりますか？',
        a: '30問で、だいたい3〜5分。タイマーはないので、直感で一番近いものを選べばOK。',
      },
      {
        q: '精度はどうですか？',
        a: '行動科学に基づいた6軸双極モデルで、67種類の組み合わせがある。「当たってる」という人もいれば「これ私じゃない」という人もいる。そのリアクション自体が面白い部分でもある。',
      },
      {
        q: 'どの言語に対応していますか？',
        a: '中国語・英語・日本語・韓国語。各言語は、その地域のプレイヤーコミュニティ向けに個別に書かれています。機械翻訳ではありません。',
      },
      {
        q: '結果はどうやってシェアしますか？',
        a: '診断後にアーキタイプカードをスクリーンショットするか、結果リンクをコピーできます。6文字のプレイヤーコードを友達に送って比べることもできます。',
      },
      {
        q: '個人データは収集されますか？',
        a: 'されません。結果はブラウザのローカルストレージにのみ保存され、サーバーには送信されません。アカウント登録も不要。タブを閉じる前にスクリーンショットを忘れずに。',
      },
    ],
  },
  ko: {
    heading: '자주 묻는 질문',
    cta: '테스트 시작하기',
    faqs: [
      {
        q: '얼마나 걸리나요?',
        a: '30문항으로 보통 3~5분 걸린다. 타이머 없으니 느긋하게, 가장 나다운 선택지를 고르면 된다.',
      },
      {
        q: '얼마나 정확한가요?',
        a: '행동과학 기반의 6축 양극 모델, 67가지 조합으로 만들어졌다. "맞다"는 사람도 있고 "이게 나야?"하는 사람도 있다. 그 반응 자체가 이 테스트의 재미 포인트이기도 하다.',
      },
      {
        q: '어떤 언어를 지원하나요?',
        a: '중국어·영어·일본어·한국어. 각 언어는 해당 지역 플레이어 문화에 맞게 별도로 작성됐다. 기계 번역이 아니다.',
      },
      {
        q: '결과는 어떻게 공유하나요?',
        a: '테스트 완료 후 아키타입 카드를 스크린샷하거나 결과 링크를 복사할 수 있다. 6자리 플레이어 코드를 친구에게 보내 비교도 가능하다.',
      },
      {
        q: '개인 데이터를 수집하나요?',
        a: '아니다. 결과는 브라우저 로컬 스토리지에만 저장되고 서버로 전송되지 않는다. 계정 가입도 필요 없다. 탭을 닫기 전에 스크린샷해두자.',
      },
    ],
  },
};

interface FAQProps {
  locale: string;
}

export function FAQ({locale}: FAQProps) {
  const l = (locale as Locale) in COPY ? (locale as Locale) : 'en';
  const t = COPY[l];

  const schemaData = buildFAQPageSchema(
    t.faqs.map(({q, a}) => ({question: q, answer: a})),
  );

  return (
    <section className="py-16 md:py-20">
      <JsonLd data={schemaData} />
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="font-heading text-2xl font-bold text-center text-foreground mb-10 md:text-3xl">
          {t.heading}
        </h2>

        <div className="flex flex-col gap-2">
          {t.faqs.map(({q, a}, i) => (
            <details
              key={i}
              className="group rounded-xl border border-border bg-card shadow-sm"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-sm font-semibold text-foreground select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-xl">
                <span>{q}</span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden
                  className="shrink-0 transition-transform duration-200 group-open:rotate-180"
                >
                  <path d="M3 6l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </summary>
              <div className="px-5 pb-4 pt-1 text-sm leading-relaxed text-muted-foreground">
                {a}
              </div>
            </details>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="#game-wall"
            className="inline-flex h-11 items-center justify-center rounded-xl bg-primary px-8 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            {t.cta}
          </Link>
        </div>
      </div>
    </section>
  );
}
