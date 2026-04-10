export const BASE_URL = 'https://sbti.support';

const LOCALES = ['zh', 'en', 'ja', 'ko'] as const;

export const TWITTER_HANDLE = '@yan_ai_labs';

export const DEFAULT_OG_IMAGE = {url: `${BASE_URL}/og-default.png`, width: 1200, height: 630};

export function buildTwitter(title: string, description: string, image?: {url: string; width?: number; height?: number}) {
  return {
    card: 'summary_large_image' as const,
    site: TWITTER_HANDLE,
    title,
    description,
    images: image ? [image] : [DEFAULT_OG_IMAGE],
  };
}

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
