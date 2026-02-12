import { MetadataRoute } from 'next';
import { LocaleEnum, locales, sitemapPathnames } from '@/i18n/routing';

const baseUrl = process.env.NEXT_PUBLIC_URL;

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  locales.forEach((locale) => {
    Object.entries(sitemapPathnames).forEach(([_, paths]) => {
      const pathValue = typeof paths === 'string' ? paths : paths[locale];
      const localePrefix = locale === LocaleEnum.EN ? '' : `/${locale}`;
      const url = `${baseUrl}${localePrefix}${pathValue === '/' && localePrefix ? '' : pathValue}`;

      entries.push({
        url,
        lastModified: new Date().toISOString(),
      });
    });
  });

  return entries;
}
