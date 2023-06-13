/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: "standalone",
  experimental: {
    urlImports: ["https://cake.cdn.kolon.me"],
  },
  images: {
    domains: ["https://cake.cdn.kolon.me", "cake.cdn.kolon.me"],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
};

module.exports = nextConfig;

const intercept = require("intercept-stdout");

const interceptStdout = (text) => {
  return text.includes("Duplicate atom key") ? "" : text;
};

intercept(interceptStdout);
