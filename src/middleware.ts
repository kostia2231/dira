import createMiddleware from 'next-intl/middleware'


export default createMiddleware({
  locales: ['de', 'ru', 'ua'],
  defaultLocale: 'de'
});

export const config = {
  matcher: ['/', '/(de|ru|ua)/:path*']
};
