/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  assetPrefix: undefined,
  output: 'export',
  distDir: 'dist'
}

module.exports = nextConfig