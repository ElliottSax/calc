import { MetadataRoute } from 'next'
import { TOP_DIVIDEND_STOCKS } from '@/lib/seo/stock-data'
import { BLOG_POSTS } from '@/lib/blog/blog-data'
import { COURSES, LEARNING_PATHS } from '@/lib/learn/learning-data'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://dividendcalculatorhub.com'
  
  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/aristocrats`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/learn`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/calculators/drip`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/calculators/yield`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/calculators/growth`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
  ]
  
  // Stock profile pages
  const stockPages = TOP_DIVIDEND_STOCKS.map((stock) => ({
    url: `${baseUrl}/stocks/${stock.symbol.toLowerCase()}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: 0.7,
  }))
  
  // Blog posts
  const blogPosts = BLOG_POSTS.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.updatedDate || post.publishDate),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))
  
  // Learning paths
  const learningPathPages = LEARNING_PATHS.map((path) => ({
    url: `${baseUrl}/learn/paths/${path.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))
  
  // Learning courses
  const coursePages = COURSES.map((course) => ({
    url: `${baseUrl}/learn/courses/${course.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))
  
  return [...staticPages, ...stockPages, ...blogPosts, ...learningPathPages, ...coursePages]
}

