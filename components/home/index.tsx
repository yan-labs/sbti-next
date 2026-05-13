export {Hero} from './hero';
export {TestLauncher} from './test-launcher';
export {TypesWall} from './types-wall';
export {GameCatalog} from './game-catalog';
export {FeaturedResult} from './featured-result';
export {WhyDifferent} from './why-different';
export {FAQ} from './faq';

import {Hero} from './hero';
import {TestLauncher} from './test-launcher';
import {TypesWall} from './types-wall';
import {GameCatalog} from './game-catalog';
import {FeaturedResult} from './featured-result';
import {WhyDifferent} from './why-different';
import {FAQ} from './faq';

interface HomePageProps {
  locale: string;
}

export default function HomePage({locale}: HomePageProps) {
  return (
    <>
      {/* ── Hero + Test Launcher (first fold) ─────────────────────────── */}
      <section
        id="tests"
        className="relative border-b border-border py-10 md:pt-10 md:pb-14"
      >
        <div className="container mx-auto max-w-[1240px] px-5 md:px-8">
          <Hero locale={locale} />
          <TestLauncher locale={locale} />
        </div>
      </section>

      <TypesWall locale={locale} />
      <GameCatalog locale={locale} />
      <FeaturedResult locale={locale} />
      <WhyDifferent locale={locale} />
      <FAQ locale={locale} />
    </>
  );
}
