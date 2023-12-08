/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: { unoptimized: true},
  webpack: (config, { buildId, dev }) => {
    config.resolve.symlinks = false
    return config
  }
}

module.exports = nextConfig
