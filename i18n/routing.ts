import {defineRouting} from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['zh', 'en', 'ja', 'ko'],
  defaultLocale: 'en',
  localePrefix: 'as-needed',
});
