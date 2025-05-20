import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  images: {
    domains: ['webcreation.pauldecalf.fr'],
  },
};

export default nextConfig;
