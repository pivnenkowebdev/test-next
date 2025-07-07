import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/test-next',
  assetPrefix: '/test-next/',
  images: { unoptimized: true },
};

export default nextConfig;
