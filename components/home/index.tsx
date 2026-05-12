export {Hero} from './hero';
export {HowItWorks} from './how-it-works';
export {GameWall} from './game-wall';
export {GamePosterCard} from './game-poster-card';
export {FeaturedResult} from './featured-result';
export {FlagshipSBTI} from './flagship-sbti';
export {WhyDifferent} from './why-different';
export {FAQ} from './faq';

import {Hero} from './hero';
import {HowItWorks} from './how-it-works';
import {GameWall} from './game-wall';
import {FeaturedResult} from './featured-result';
import {FlagshipSBTI} from './flagship-sbti';
import {WhyDifferent} from './why-different';
import {FAQ} from './faq';

interface HomePageProps {
  locale: string;
}

export default function HomePage({locale}: HomePageProps) {
  return (
    <>
      <Hero locale={locale} />
      <HowItWorks locale={locale} />
      <GameWall locale={locale} />
      <FeaturedResult locale={locale} />
      <FlagshipSBTI locale={locale} />
      <WhyDifferent locale={locale} />
      <FAQ locale={locale} />
    </>
  );
}
