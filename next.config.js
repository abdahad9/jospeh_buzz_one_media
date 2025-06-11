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
  // Copy Sanity Studio static files to public directory
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: '/static/:path*',
          destination: '/studio/static/:path*',
        },
      ],
    }
  },
}

module.exports = nextConfig 