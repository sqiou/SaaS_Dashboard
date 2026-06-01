/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['@saas/ui', '@saas/api', '@saas/types'],
};

module.exports = nextConfig;
