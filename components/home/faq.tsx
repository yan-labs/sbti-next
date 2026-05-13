import {buildFAQPageSchema} from '@/lib/json-ld';
import {JsonLd} from '@/components/json-ld';

type Locale = 'zh' | 'en' | 'ja' | 'ko';

interface QA {
  q: string;
  a: string;
}

const COPY: Record<
  Locale,
  {
    kicker: string;
    rightA: string;
    rightB: string;
    headLead: string;
    headEm: string;
    headTail: string;
    faqs: QA[];
  }
> = {
  zh: {
    kicker: '06 · 常见问题',
    rightA: 'FAQ',
    rightB: '关于 SBTI',
    headLead: '关于 ',
    headEm: 'SBTI',
    headTail: '，一些被反复问到的',
    faqs: [
      {
        q: 'SBTI 是什么？和 MBTI 有什么区别？',
        a: 'SBTI 全称是 Satirical Behavior Type Indicator（讽刺行为类型指标）。MBTI 把人分成 16 种，SBTI 把人分成 27 种——多出来的 11 种，都是 MBTI 装作没看到的那些（送钱者、屌丝、伪人、吗喽……）。它不严肃，但有时候比正经测试更准。',
      },
      {
        q: '测试要花多少时间？',
        a: '31 道题，凭直觉戳过去就行，1–3 分钟。比刷 30 秒抖音的"再来一个"还快。',
      },
      {
        q: '27 种人格类型都有哪些？',
        a: 'CTRL 拿捏者、ATM-er 送钱者、Dior-s 屌丝、BOSS 领导者、THAN-K 感恩者、OH-NO 哦不人、GOGO 行者、SEXY 尤物、LOVE-R 多情者、MUM 妈妈、FAKE 伪人、OJBK 无所谓人、MALO 吗喽…… 完整 27 种可以在上面的"人格档案"区滑动查看。',
      },
      {
        q: '游戏专属测试是什么意思？',
        a: 'SBTI 主测试归类你这个人，游戏专属测试归类你在那款游戏里的玩家身份。比如英雄联盟版会测出你是"单杀型"还是"团战型"，不是 MBTI 的 16 型套到游戏里。每款游戏 8 种原型，独立设计。',
      },
      {
        q: '测试结果能分享到朋友圈吗？',
        a: '能。每个结果页都自带一张 1080×1920 的可保存图卡，包含你的人格码、六轴画像、克星原型和最佳队友。截屏 / 长按保存都行。',
      },
      {
        q: '测试结果会被保存或用作他用吗？',
        a: '不会。SBTI 不需要登录、不收集邮箱、不种 cookie。所有题目和结果只存在你的浏览器里，刷新页面就消失了。',
      },
    ],
  },
  en: {
    kicker: '06 · FAQ',
    rightA: 'FAQ',
    rightB: 'About SBTI',
    headLead: 'About ',
    headEm: 'SBTI',
    headTail: ', some questions we keep getting',
    faqs: [
      {
        q: 'What is SBTI? How is it different from MBTI?',
        a: 'SBTI stands for Satirical Behavior Type Indicator. MBTI sorts people into 16 types; SBTI sorts you into 27 — the extra 11 are the ones MBTI politely pretends do not exist (The Cash Dispenser, The Underdog, The Faker, The Primate...). Not serious, occasionally more accurate than the serious ones.',
      },
      {
        q: 'How long does the test take?',
        a: '31 questions, just trust your gut, 1–3 minutes. Faster than scrolling past three TikToks.',
      },
      {
        q: 'What are the 27 personality types?',
        a: 'CTRL · The Control Freak, ATM-er · The Cash Dispenser, Dior-s · The Underdog, BOSS, THAN-K · The Grateful, OH-NO, GOGO, SEXY, LOVE-R, MUM, FAKE, OJBK · The Whatever, MALO · The Primate... full list is in the personality file grid above.',
      },
      {
        q: 'What is a game-specific quiz?',
        a: 'The main SBTI tells you who you are as a person; the game-specific quiz tells you who you are as a player of that game. The LoL version sorts you as "solo carry" or "teamfight anchor", not "ENTJ in a Yasuo skin". Each game has its own 8 archetypes, designed from scratch.',
      },
      {
        q: 'Can I share results on social media?',
        a: 'Yes. Every result page ships with a 1080×1920 saveable image card — your type code, six-axis chart, rival archetype, and best squad. Screenshot or long-press-save, either works.',
      },
      {
        q: 'Do you store my results or personal data?',
        a: 'No. No login, no email, no cookie. Questions and results live only in your browser; close the tab and they are gone.',
      },
    ],
  },
  ja: {
    kicker: '06 · よくある質問',
    rightA: 'FAQ',
    rightB: 'SBTIについて',
    headLead: '',
    headEm: 'SBTI',
    headTail: 'について、よく聞かれること',
    faqs: [
      {
        q: 'SBTIって何？MBTIと何が違う？',
        a: 'SBTIはSatirical Behavior Type Indicator（風刺行動タイプ指標）の略。MBTIは人を16タイプに分けるけど、SBTIは27タイプ —— 増えた11個は、MBTIが見て見ぬふりしてるやつ（送金者、負け犬、偽人、サル…）。真面目じゃないけど、たまに真面目な診断より当たる。',
      },
      {
        q: '何分くらいかかる？',
        a: '31問、直感でポチポチで1〜3分。TikTokを3本見るより早い。',
      },
      {
        q: '27タイプって具体的に？',
        a: 'CTRL、ATM-er、Dior-s、BOSS、THAN-K、OH-NO、GOGO、SEXY、LOVE-R、MUM、FAKE、OJBK、MALO… 全27タイプは上の「人格ファイル」エリアで全部見られる。',
      },
      {
        q: 'ゲーム別診断って何？',
        a: 'SBTI本編は「あなたという人間」を分類、ゲーム別診断は「そのゲームでのあなた」を分類。LoL版なら「ソロキャリー型」か「集団戦アンカー型」みたいに出る。MBTIの16タイプをゲームに当てはめたものではない。各ゲーム8タイプ、独立設計。',
      },
      {
        q: '結果はSNSで共有できる？',
        a: 'できる。各結果ページに1080×1920の保存用カードが付いてくる。タイプコード・6軸チャート・天敵タイプ・最高の相棒つき。スクショでも長押し保存でもどっちでも。',
      },
      {
        q: 'データは保存される？',
        a: 'されない。ログイン不要、メール収集なし、cookieなし。問題と結果はブラウザ内だけ。タブを閉じれば消える。',
      },
    ],
  },
  ko: {
    kicker: '06 · 자주 묻는 질문',
    rightA: 'FAQ',
    rightB: 'SBTI에 대해',
    headLead: '',
    headEm: 'SBTI',
    headTail: '에 대해 자주 받는 질문들',
    faqs: [
      {
        q: 'SBTI가 뭔가요? MBTI랑 뭐가 다른가요?',
        a: 'SBTI는 Satirical Behavior Type Indicator(풍자 행동 유형 지표)의 약자다. MBTI는 16가지로 나누고, SBTI는 27가지로 나눈다 —— 추가된 11개는 MBTI가 모르는 척하는 유형들(돈 셔틀, 찌질이, 가식인, 원숭이…). 진지하진 않은데, 가끔 진지한 테스트보다 잘 맞는다.',
      },
      {
        q: '시간 얼마나 걸려요?',
        a: '31문항, 직감으로 누르면 1~3분. 틱톡 3개 보는 것보다 빠르다.',
      },
      {
        q: '27가지 유형이 뭐예요?',
        a: 'CTRL, ATM-er, Dior-s, BOSS, THAN-K, OH-NO, GOGO, SEXY, LOVE-R, MUM, FAKE, OJBK, MALO… 전체 27가지는 위의 "인격 파일" 영역에서 다 볼 수 있다.',
      },
      {
        q: '게임별 테스트는 뭔가요?',
        a: 'SBTI 본편은 "사람으로서의 너"를 분류하고, 게임별 테스트는 "그 게임에서의 너"를 분류한다. LoL판은 "솔로 캐리형"인지 "한타 앵커형"인지 알려준다. MBTI 16가지를 게임에 끼워맞춘 게 아니다. 게임마다 8가지 유형, 처음부터 따로 만든다.',
      },
      {
        q: '결과를 SNS에 공유할 수 있나요?',
        a: '가능하다. 결과 페이지마다 1080×1920 저장용 카드가 자동 생성된다. 유형 코드, 6축 차트, 천적 유형, 최고의 동료 정보 포함. 스크린샷이든 길게 눌러 저장이든 자유.',
      },
      {
        q: '데이터를 저장하나요?',
        a: '아니다. 로그인 안 하고, 이메일 안 받고, 쿠키 안 심는다. 문제와 결과는 브라우저 안에만 있다. 탭 닫으면 사라진다.',
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
    <section id="faq" className="border-b border-border py-24">
      <JsonLd data={schemaData} />
      <div className="container mx-auto max-w-[1240px] px-5 md:px-8">
        <header className="mb-12 grid items-baseline gap-6 md:grid-cols-[auto_1fr_auto]">
          <div className="mono-label md:col-span-2">{t.kicker}</div>
          <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground leading-7 md:row-start-1 md:row-span-2 md:col-start-3 md:text-right self-end">
            {t.rightA}
            <br />
            {t.rightB}
          </div>
          <h2
            className="font-heading text-foreground m-0 md:col-span-2"
            style={{
              fontVariationSettings: '"opsz" 144, "SOFT" 30, "wght" 700',
              fontSize: 'clamp(36px, 5vw, 64px)',
              lineHeight: 0.96,
              letterSpacing: '-0.02em',
              maxWidth: '18ch',
            }}
          >
            {t.headLead}
            <em
              className="not-italic"
              style={{
                fontStyle: 'italic',
                fontVariationSettings: '"opsz" 144, "SOFT" 90, "wght" 700',
                color: 'var(--vermillion)',
                letterSpacing: '-0.025em',
              }}
            >
              {t.headEm}
            </em>
            {t.headTail}
          </h2>
        </header>

        <div className="faq-list border-t border-border">
          {t.faqs.map((qa, i) => (
            <details key={i} className="faq-row border-b border-border py-6">
              <summary
                className="faq-summary text-foreground flex cursor-pointer list-none items-baseline justify-between gap-6"
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontVariationSettings: '"opsz" 144, "wght" 600',
                  fontSize: 'clamp(20px, 2.2vw, 26px)',
                  lineHeight: 1.25,
                  letterSpacing: '-0.012em',
                }}
              >
                <span>{qa.q}</span>
                <span
                  className="faq-marker font-heading shrink-0 transition-all duration-300"
                  aria-hidden
                  style={{
                    fontWeight: 300,
                    fontSize: 30,
                    lineHeight: 1,
                    color: 'var(--ink-muted)',
                  }}
                >
                  +
                </span>
              </summary>
              <p
                className="mt-4 max-w-[65ch] text-[16px] leading-relaxed"
                style={{color: 'var(--ink-soft)'}}
              >
                {qa.a}
              </p>
            </details>
          ))}
        </div>
      </div>
      <style>{`
        .faq-summary::-webkit-details-marker { display: none; }
        details[open] > .faq-summary > .faq-marker {
          transform: rotate(45deg);
          color: var(--vermillion);
        }
      `}</style>
    </section>
  );
}
