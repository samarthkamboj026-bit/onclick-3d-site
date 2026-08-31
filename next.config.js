/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
  experimental: {
    cpus: 1,
  },
  productionBrowserSourceMaps: false,
};

module.exports = nextConfig;
