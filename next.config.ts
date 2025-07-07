import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['images.pexels.com', "mantrasmb-assets.s3.amazonaws.com"],
     
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'Cache-Control',
            value: 's-maxage=1, stale-while-revalidate' },
        ],
      },
    ];
  },
};

export default nextConfig;
