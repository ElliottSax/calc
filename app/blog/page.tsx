import { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { CalendarIcon, ClockIcon, UserIcon, TrendingUp } from 'lucide-react'
import { Header } from '@/components/layout/Header'
import { getBlogPosts, BlogPostSummary } from '@/lib/blog/blog-data'
import { StructuredData } from '@/components/seo/StructuredData'
import { generateArticleSchema } from '@/lib/seo/structured-data'

export const metadata: Metadata = {
  title: 'Dividend Investing Blog | Expert Analysis & Tips',
  description: 'Expert insights on dividend investing, stock analysis, and wealth building strategies. Learn about dividend aristocrats, DRIP investing, and more.',
  keywords: 'dividend investing blog, stock analysis, dividend aristocrats, DRIP investing, passive income',
  openGraph: {
    title: 'Dividend Investing Blog | Expert Analysis & Tips',
    description: 'Expert insights on dividend investing, stock analysis, and wealth building strategies.',
    type: 'website',
    url: 'https://dividendcalculatorhub.com/blog'
  },
  alternates: {
    canonical: 'https://dividendcalculatorhub.com/blog'
  }
}

export default function BlogPage() {
  const posts = getBlogPosts()
  const featuredPosts = posts.filter(post => post.featured)
  const recentPosts = posts.slice(0, 6)
  
  // Generate structured data for blog
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Dividend Calculator Hub Blog",
    "description": "Expert insights on dividend investing and wealth building",
    "url": "https://dividendcalculatorhub.com/blog",
    "publisher": {
      "@type": "Organization",
      "name": "Dividend Calculator Hub",
      "logo": {
        "@type": "ImageObject",
        "url": "https://dividendcalculatorhub.com/logo.png"
      }
    }
  }

  return (
    <>
      <StructuredData data={blogSchema} />
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <section className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">
              Dividend Investing Blog
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Expert insights, analysis, and strategies for building wealth through dividend investing
            </p>
          </section>

          {/* Featured Posts */}
          {featuredPosts.length > 0 && (
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <TrendingUp className="h-6 w-6 mr-2 text-blue-600" />
                Featured Articles
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {featuredPosts.map((post) => (
                  <FeaturedPostCard key={post.slug} post={post} />
                ))}
              </div>
            </section>
          )}

          {/* All Posts */}
          <section>
            <h2 className="text-2xl font-bold mb-6">Latest Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recentPosts.map((post) => (
                <BlogPostCard key={post.slug} post={post} />
              ))}
            </div>
          </section>

          {/* Newsletter Signup */}
          <section className="mt-16 bg-blue-50 dark:bg-blue-900/20 p-8 rounded-lg text-center">
            <h2 className="text-2xl font-bold mb-4">
              Stay Updated with Dividend Insights
            </h2>
            <p className="text-gray-600 mb-6">
              Get weekly dividend analysis and investment tips delivered to your inbox
            </p>
            <div className="flex max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-l border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Button className="rounded-l-none">
                Subscribe
              </Button>
            </div>
          </section>
        </div>
      </main>
    </>
  )
}

function FeaturedPostCard({ post }: { post: BlogPostSummary }) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <Card className="h-full hover:shadow-lg transition-all hover:scale-[1.02]">
        {post.image && (
          <div className="aspect-video bg-gray-200 rounded-t-lg relative">
            <Badge className="absolute top-3 left-3 bg-blue-600">
              Featured
            </Badge>
          </div>
        )}
        <CardHeader>
          <div className="flex flex-wrap gap-2 mb-2">
            {post.tags.map(tag => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
          <CardTitle className="line-clamp-2">{post.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 line-clamp-3 mb-4">
            {post.excerpt}
          </p>
          <PostMeta post={post} />
        </CardContent>
      </Card>
    </Link>
  )
}

function BlogPostCard({ post }: { post: BlogPostSummary }) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <Card className="h-full hover:shadow-lg transition-all hover:scale-[1.02]">
        {post.image && (
          <div className="aspect-video bg-gray-200 rounded-t-lg" />
        )}
        <CardHeader>
          <div className="flex flex-wrap gap-2 mb-2">
            {post.tags.slice(0, 2).map(tag => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
          <CardTitle className="line-clamp-2 text-lg">{post.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 line-clamp-3 mb-4">
            {post.excerpt}
          </p>
          <PostMeta post={post} />
        </CardContent>
      </Card>
    </Link>
  )
}

function PostMeta({ post }: { post: BlogPostSummary }) {
  return (
    <div className="flex items-center text-sm text-gray-500 space-x-4">
      <div className="flex items-center">
        <UserIcon className="h-4 w-4 mr-1" />
        {post.author}
      </div>
      <div className="flex items-center">
        <CalendarIcon className="h-4 w-4 mr-1" />
        {new Date(post.publishDate).toLocaleDateString()}
      </div>
      <div className="flex items-center">
        <ClockIcon className="h-4 w-4 mr-1" />
        {post.readTime} min read
      </div>
    </div>
  )
}