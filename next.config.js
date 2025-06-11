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
  // Ensure static files are served correctly
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: '/static/:path*',
          destination: '/static/:path*',
        },
      ],
    }
  },
}

module.exports = nextConfig 