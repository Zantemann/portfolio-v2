import { defineRouting } from 'next-intl/routing';

export enum LocaleEnum {
  EN = 'en',
  FI = 'fi',
}

export const locales = ['en', 'fi'] as const;
export const defaultLocale = 'en' as const;
export type Locale = (typeof locales)[number];

export const pathnames = {
  '/': '/',
};

// Static pathnames for sitemap (excludes dynamic routes)
export const sitemapPathnames = {
  '/': pathnames['/'],
};

export const routing = defineRouting({
  // A list of all locales that are supported
  locales,

  // Used when no locale matches
  defaultLocale,
  pathnames,
  localePrefix: 'as-needed',
});
