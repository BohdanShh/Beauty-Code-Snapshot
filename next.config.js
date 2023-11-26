/** @type {import('next').NextConfig} */

const repo = 'Beauty-Code-Snapshot';
const assetPrefix = `/${repo}/`;
const basePath = `/${repo}`;

const nextConfig = {
  output: 'export',
  distDir: 'dist',
  basePath,
  assetPrefix,
};

module.exports = nextConfig;
