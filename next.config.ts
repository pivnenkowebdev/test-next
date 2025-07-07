import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  basePath: "test-next",
  images: {
    unoptimized: true
  }
};

export default nextConfig;
