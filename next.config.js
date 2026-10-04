const rankedRedirects = require('./lib/redirects/ranked-404-redirects.json')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Image optimization
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'financialmodelingprep.com',
      },
    ],
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
      // Generator notes that were served as blog posts until 2026-10-04 (thin-content
      // stage 1): the files are deleted; send their URLs to the blog index.
      { source: '/blog/README', destination: '/blog', permanent: true },
      { source: '/blog/GENERATION_SUMMARY', destination: '/blog', permanent: true },
      { source: '/blog/dividend-etf-articles-summary', destination: '/blog', permanent: true },
      {
        source: '/calculator',
        destination: '/',
        permanent: true,
      },
      // Consolidate the DRIP calculator: /calculators/drip is the canonical,
      // internally-linked URL (header nav, homepage, every other calculator's
      // cross-link, the sitemap). These two were separate routes rendering the
      // same <DripCalculator/> behind different marketing copy -- duplicate
      // content that split ranking signal and duplicated fabricated stats.
      {
        source: '/calculators/drip-calculator',
        destination: '/calculators/drip',
        permanent: true,
      },
      {
        source: '/calculators/drip-calculator-landing',
        destination: '/calculators/drip',
        permanent: true,
      },
      // Keyword-cannibalization fixes: numbered batch pages duplicated the
      // clean-slug money pages and split the ranking signal (two pages ~#10 for
      // "best dividend stocks for beginners" = neither cracks page 1). Consolidate
      // each duplicate onto its canonical so the combined signal can rank.
      {
        source: '/blog/05-best-dividend-stocks-for-beginners',
        destination: '/blog/best-dividend-stocks-for-beginners',
        permanent: true,
      },
      {
        source: '/blog/04-best-reit-dividend-stocks-by-property-type',
        destination: '/blog/best-reit-dividend-stocks',
        permanent: true,
      },
      {
        source: '/blog/06-best-reit-dividend-stocks-passive-income',
        destination: '/blog/best-reit-dividend-stocks',
        permanent: true,
      },
      // Pages that ranked in Search Console (positions ~6-30) but were deleted by the 2026-03-16
      // auto-publish commit 38af51a, which dropped 63 static blog pages. Each now permanently
      // redirects to its closest live successor. See lib/redirects/ranked-404-redirects.json
      // and __tests__/content/ranked-redirects.test.ts (every target must resolve).
      ...rankedRedirects.map(({ source, destination }) => ({ source, destination, permanent: true })),
      // Redirect old numeric blog IDs to new slug-based URLs (SEO 301 redirects)
      // Note: Handled by dynamic route handler in app/blog/[id]/route.ts
    ]
  },

  // Performance optimizations
  poweredByHeader: false,
  compress: true,

  // TypeScript configuration
  typescript: {
    ignoreBuildErrors: true,
  },

  // ESLint configuration
  eslint: {
    ignoreDuringBuilds: true,
  },

  // Server external packages (moved from experimental in Next.js 15)
  serverExternalPackages: ['pino', 'pino-pretty'],

  // Ship the markdown source with the dynamic blog route so fs reads resolve at
  // runtime on Vercel (the route reads content/blog/<slug>.md on demand).
  outputFileTracingIncludes: {
    '/blog/[id]': ['./content/blog/**/*'],
    // The sitemap reads content/blog to list every article URL.
    '/sitemap.xml': ['./content/blog/**/*'],
  },

  // Performance and optimization features
  experimental: {
    optimizePackageImports: [
      'recharts',
      'lucide-react',
      '@radix-ui/react-icons',
      'framer-motion',
      'date-fns'
    ],
    // Single-worker static generation, opt-in via CF_BUILD=1. This build
    // statically renders ~2,470 blog posts (see app/blog/[id]/page.tsx --
    // generateStaticParams was added for Cloudflare/OpenNext compatibility,
    // since that runtime has no filesystem access to content/blog at request
    // time). Next's default worker-pool concurrency for that many pages needs
    // more headroom than this dev machine reliably has free; capping to one
    // worker traded build speed for not OOM-crashing mid-build. Not set for
    // the normal Vercel build path, which has its own dedicated build memory.
    ...(process.env.CF_BUILD ? { cpus: 1 } : {}),
  },
}

module.exports = nextConfig