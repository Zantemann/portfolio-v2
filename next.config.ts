import type { NextConfig } from 'next';

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

export default nextConfig;
