/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // 1. TURBOPACK CONFIG (Next.js 16+ uses this)
  turbopack: {
    rules: {
      '*.svg': {
        loaders: ['@svgr/webpack'],
        as: '*.js',
      },
    },
  },

  // 2. WEBPACK CONFIG (Still needed for builds/fallback)
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      use: ['@svgr/webpack'],
    });
    return config;
  },
};

export default nextConfig;