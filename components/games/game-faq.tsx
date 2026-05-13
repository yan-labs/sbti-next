import {buildGameHubFAQs} from '@/lib/data/games/faqs';
import type {GameQuizV2, SiteLocale} from '@/lib/data/games/types';

const COPY: Record<SiteLocale, {kicker: string; headingLead: string; headingItalic: string}> = {
  zh: {kicker: '04 · 常见问题', headingLead: '你可能想问的 ', headingItalic: '几个问题'},
  en: {kicker: '04 · FAQ', headingLead: 'A few ', headingItalic: 'questions worth asking'},
  ja: {kicker: '04 · よくある質問', headingLead: 'よく聞かれる ', headingItalic: 'いくつかの質問'},
  ko: {kicker: '04 · FAQ', headingLead: '자주 묻는 ', headingItalic: '몇 가지'},
};

interface GameFAQProps {
  game: GameQuizV2;
  locale: SiteLocale;
}

/** Editorial `<details>` accordion matching the design proposal `.faq` pattern. */
export function GameFAQ({game, locale}: GameFAQProps) {
  const copy = COPY[locale];
  const faqs = buildGameHubFAQs(game, locale);

  return (
    <section className="border-b border-border bg-[var(--paper-soft)] py-16 md:py-20" id="faq">
      <div className="mx-auto max-w-[860px] px-5 md:px-8">
        <header className="mb-10 grid grid-cols-1 items-baseline gap-3 md:grid-cols-[auto_1fr]">
          <div className="mono-label md:col-start-1">{copy.kicker}</div>
          <h2 className="editorial-h2 md:col-span-2">
            {copy.headingLead}
            <em>{copy.headingItalic}</em>
          </h2>
        </header>

        <div className="editorial-faq">
          {faqs.map(({question, answer}, i) => (
            <details key={i}>
              <summary>{question}</summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
