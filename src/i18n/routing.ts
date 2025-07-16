import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['de', 'ru', 'ua'],
  defaultLocale: 'de'
});
