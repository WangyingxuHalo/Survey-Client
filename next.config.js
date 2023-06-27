/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
  reactStrictMode: true,
  basePath: isProd ? '/question' : '',
  assetPrefix: isProd ? 'https://mysurvey.wwwyxxx.uk/question' : '',
};

module.exports = nextConfig;
