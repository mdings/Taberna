/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return {
      beforeFiles: [
        { source: '/3-gangen-keuzemenu.pdf', destination: '/api/menu-document' },
        { source: '/typisch-taberna.pdf', destination: '/api/menu-document?menu=typisch-taberna' },
      ],
      afterFiles: [
        { source: '/robots.txt', destination: '/api/seo/robots' },
        { source: '/sitemap.xml', destination: '/api/seo/sitemap' },
        { source: "/llms.txt", destination: "/api/llms.txt" },
        { source: "/index.md", destination: "/api/index.md" },
        { source: "/typisch-taberna.md", destination: "/api/detail-markdown?slug=typisch-taberna" },
        { source: "/munttheater-diner.md", destination: "/api/detail-markdown?slug=munttheater-diner" },
      ],
    }
  },
  async headers() {
    const framePolicy = {
      key: 'Content-Security-Policy',
      value: "frame-ancestors 'self' https://app.contentful.com",
    }
    const describedBy = {
      key: 'Link',
      value: '</llms.txt>; rel="describedby"',
    }

    return [
      { source: '/', headers: [framePolicy, describedBy] },
      { source: '/munttheater-diner', headers: [framePolicy, describedBy] },
      { source: '/typisch-taberna', headers: [framePolicy, describedBy] },
      { source: '/api/contentful/:path*', headers: [framePolicy, { key: 'X-Robots-Tag', value: 'noindex, nofollow' }] },
      ...['/index.md', '/typisch-taberna.md', '/munttheater-diner.md', '/llms.txt', '/api/index.md', '/api/detail-markdown', '/api/llms.txt', '/api/hello', '/api/menu-document'].map((source) => ({
        source,
        headers: [{ key: 'X-Robots-Tag', value: 'noindex' }],
      })),
    ]
  },
}

module.exports = nextConfig
