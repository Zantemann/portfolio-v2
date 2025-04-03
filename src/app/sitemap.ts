import { MetadataRoute } from 'next';

const baseUrl = process.env.NEXT_PUBLIC_URL;
const paths = ['/'];

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date().toISOString(),
  }));
}
