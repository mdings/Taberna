/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async headers() {
    const framePolicy = {
      key: 'Content-Security-Policy',
      value: "frame-ancestors 'self' https://app.contentful.com",
    }

    return [
      { source: '/', headers: [framePolicy] },
      { source: '/api/contentful/:path*', headers: [framePolicy] },
    ]
  },
}

module.exports = nextConfig
