import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin({
  experimental: {
    createMessagesDeclaration: './locales/en/translation.json',
  },
});

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    qualities: [75, 100],
  },
  redirects: async () => {
    return [
      {
        source: '/tiktok/callback/',
        destination: 'http://localhost:3000/tiktok/callback/',
        permanent: true,
      },
      {
        source: '/tiktok/callback',
        destination: 'http://localhost:3000/tiktok/callback/',
        permanent: true,
      },
    ];
  },
};

export default withNextIntl(nextConfig);
