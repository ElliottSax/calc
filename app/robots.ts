import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const raw = (process.env.NEXT_PUBLIC_APP_URL || '').trim().replace(/\/+$/, '')
  const baseUrl = raw && !raw.includes('localhost') && !raw.includes('vercel.app') ? raw : 'https://dividendengines.com'
  
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/admin/',
          '/dashboard/',
          '/_next/',
          '/static/',
          '/*.json$',
          '/*?*', // Temporarily block URLs with query parameters
          '/auth/',
        ],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        crawlDelay: 0,
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        crawlDelay: 1,
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}