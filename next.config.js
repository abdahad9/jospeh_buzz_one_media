/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        port: '',
        pathname: '/**',
      },
    ],
  },
  async headers() {
    return [
      {
        source: '/admin/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-eval' 'unsafe-inline' https://*.sanity-cdn.com",
              "style-src 'self' 'unsafe-inline'",
              "img-src 'self' data: https:",
              "font-src 'self' data: https://*.sanity-cdn.com",
              "connect-src 'self' https://*.sanity.io https://*.sanity-cdn.com",
              "frame-src 'self' https://*.sanity.studio",
            ].join('; '),
          },
        ],
      },
    ]
  },
  webpack: (config) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      net: false,
      tls: false,
    }
    return config
  },
  // Serve Sanity Studio static files
  async rewrites() {
    return [
      {
        source: '/admin',
        destination: '/studio/dist/index.html',
      },
      {
        source: '/admin/:path*',
        destination: '/studio/dist/:path*',
      },
      {
        source: '/static/:path*',
        destination: '/studio/dist/static/:path*',
      },
    ]
  },
}

module.exports = nextConfig 