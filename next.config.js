/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['cdn.sanity.io'],
  },
  async headers() {
    return [
      {
        source: '/admin/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "frame-ancestors 'self' https://*.sanity.studio",
          },
        ],
      },
    ]
  },
  webpack: (config) => {
    config.resolve.fallback = { fs: false, path: false }
    return config
  },
  // Serve Sanity Studio static files
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: '/admin',
          destination: '/studio/dist/index.html',
        },
        {
          source: '/admin/:path*',
          destination: '/studio/dist/:path*',
        },
      ],
    }
  },
}

module.exports = nextConfig 