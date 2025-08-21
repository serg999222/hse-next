import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // ⚡ При build ESLint не буде блокувати збірку
    ignoreDuringBuilds: true,
  },
  /* інші config options тут */
};

export default nextConfig;

