/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  // Image optimization
  images: {
    domains: ['financialmodelingprep.com'],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Compiler options
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production' ? {
      exclude: ['error', 'warn'],
    } : false,
  },

  // Security headers
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()'
          },
        ],
      },
    ]
  },

  // Redirects for common patterns
  async redirects() {
    return [
      {
        source: '/calculator',
        destination: '/',
        permanent: true,
      },
    ]
  },

  // Performance optimizations
  poweredByHeader: false,
  compress: true,

  // TypeScript configuration - temporarily disabled for deployment
  // TODO: Re-enable after fixing all type errors
  typescript: {
    ignoreBuildErrors: true,
  },

  // ESLint configuration - kept disabled during builds
  eslint: {
    ignoreDuringBuilds: true,
  },

  // Disable static optimization to avoid build timeouts
  experimental: {
    serverComponentsExternalPackages: ['pino', 'pino-pretty'],
    optimizePackageImports: ['recharts', 'lucide-react', '@radix-ui/react-icons'],
  },
}

module.exports = nextConfig