import {ChapterMark} from '@/components/ui/chapter-mark';
import {buildGameHubFAQs} from '@/lib/data/games/faqs';
import type {GameQuizV2, SiteLocale} from '@/lib/data/games/types';

const COPY: Record<SiteLocale, {kicker: string; heading: string}> = {
  zh: {kicker: '常见问题', heading: '你可能想问的'},
  en: {kicker: 'FAQ', heading: 'Common questions'},
  ja: {kicker: 'よくある質問', heading: 'よく聞かれること'},
  ko: {kicker: 'FAQ', heading: '자주 묻는 것들'},
};

interface GameFAQProps {
  game: GameQuizV2;
  locale: SiteLocale;
}

export function GameFAQ({game, locale}: GameFAQProps) {
  const copy = COPY[locale];
  const faqs = buildGameHubFAQs(game, locale);

  return (
    <section className="bg-muted/30 py-16 md:py-20" id="faq">
      <div className="mx-auto max-w-3xl px-6">
        <div className="mb-10">
          <ChapterMark number="04" kicker={copy.kicker} className="mb-3" />
          <h2 className="font-heading text-3xl font-black text-foreground md:text-4xl">
            {copy.heading}
          </h2>
        </div>

        <div className="flex flex-col gap-2">
          {faqs.map(({question, answer}, i) => (
            <details
              key={i}
              className="group rounded-xl border border-border bg-card shadow-sm"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-sm font-semibold text-foreground select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-xl">
                <span>{question}</span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden
                  className="shrink-0 transition-transform duration-200 group-open:rotate-180"
                >
                  <path d="M3 6l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </summary>
              <div className="px-5 pb-4 pt-1 text-sm leading-relaxed text-muted-foreground">
                {answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
