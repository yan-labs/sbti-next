export const BASE_URL = 'https://sbti.support';

const LOCALES = ['zh', 'en', 'ja', 'ko'] as const;

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
