/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['localhost', '127.0.0.1'],
    formats: ['image/avif', 'image/webp'],
  },
  async rewrites() {
    return [
      {
        source: '/@/:path*',
        destination: '/author/:path*',
      },
    ]
  },

}

module.exports = nextConfig
