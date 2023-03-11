/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["avatars.githubusercontent.com"],
  },
  reactStrictMode: true,
  env: {
    GIT_API_URL: process.env.GIT_API_URL,
    BEARER_TOKEN: process.env.BEARER_TOKEN,
    REDIS_URL: process.env.REDIS_URL,
    REDIS_PORT: process.env.REDIS_PORT,
  },
};

module.exports = nextConfig;
