import { MetadataRoute } from 'next';
import { defaultLocale, locales, sitemapPathnames, type Locale } from '@/i18n/routing';

const baseUrl = (process.env.NEXT_PUBLIC_URL || 'http://localhost:3000').replace(/\/$/, '');

const buildUrl = (locale: Locale, pathValue: string) => {
  const localePrefix = locale === defaultLocale ? '' : `/${locale}`;
  return `${baseUrl}${localePrefix}${pathValue === '/' && localePrefix ? '' : pathValue}`;
};

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return (Object.values(sitemapPathnames) as Array<string | Record<Locale, string>>).map(
    (paths) => {
      const pathValue = typeof paths === 'string' ? paths : paths[defaultLocale];
      const alternates = {
        languages: Object.fromEntries(
          locales.map((locale) => {
            const localizedPath = typeof paths === 'string' ? paths : paths[locale];
            return [locale, buildUrl(locale, localizedPath)];
          }),
        ),
      };
      return {
        url: buildUrl(defaultLocale, pathValue),
        alternates,
        lastModified: now,
        changeFrequency: 'weekly',
        priority: pathValue === '/' ? 1 : 0.8,
      } satisfies MetadataRoute.Sitemap[number];
    },
  );
}
