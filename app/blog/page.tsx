import { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { TrendingUp, Clock, BookOpen, User, Calendar, ArrowRight, Search, Filter, Tag, Star, Eye, MessageCircle, Share2, Bookmark, ChevronRight, Calculator, Shield, Target } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Dividend Investing Blog - Strategies, Analysis & Market Updates',
  description: 'Expert insights on dividend investing, DRIP strategies, stock analysis, and passive income. Updated daily with actionable investment advice.',
  keywords: [
    'dividend investing blog',
    'dividend stock analysis',
    'DRIP strategy',
    'passive income blog',
    'dividend growth investing',
    'dividend portfolio',
    'monthly dividend stocks',
    'dividend aristocrats analysis',
    'dividend investing for beginners',
    'dividend tax strategies'
  ],
  openGraph: {
    title: 'Dividend Investing Blog - Build Wealth Through Dividends',
    description: 'Join 50,000+ readers learning dividend investing strategies. Free guides, stock analysis, and portfolio tips.',
    images: ['/og-blog.png']
  }
}

// Mock blog data - in production, this would come from a CMS or database
const FEATURED_POST = {
  id: '1',
  title: '7 Dividend Stocks That Will Double Your Money by 2030',
  excerpt: 'Discover the high-growth dividend stocks that combine yield with explosive growth potential. Our analysis shows these picks could deliver 100%+ returns.',
  author: 'Michael Chen',
  authorRole: 'Senior Analyst',
  date: '2025-01-10',
  readTime: '12 min',
  category: 'Stock Analysis',
  image: '/blog/featured.jpg',
  views: 45234,
  comments: 89,
  likes: 1234,
  tags: ['Dividend Growth', 'Stock Picks', '2025 Outlook']
}

const RECENT_POSTS = [
  {
    id: '2',
    title: 'The Complete Guide to DRIP Investing in 2025',
    excerpt: 'Everything you need to know about dividend reinvestment plans, including tax implications and best practices.',
    author: 'Sarah Williams',
    date: '2025-01-09',
    readTime: '15 min',
    category: 'Education',
    views: 23456,
    comments: 45,
    trending: true
  },
  {
    id: '3',
    title: 'REITs vs Dividend Stocks: Which Pays More?',
    excerpt: 'Comprehensive comparison of real estate investment trusts and traditional dividend stocks for income investors.',
    author: 'David Park',
    date: '2025-01-08',
    readTime: '10 min',
    category: 'Comparison',
    views: 18923,
    comments: 67,
    trending: true
  },
  {
    id: '4',
    title: 'How I Built a $5,000/Month Dividend Portfolio',
    excerpt: 'Step-by-step case study of building a dividend portfolio from scratch to financial independence.',
    author: 'Jennifer Martinez',
    date: '2025-01-07',
    readTime: '20 min',
    category: 'Case Study',
    views: 34567,
    comments: 123,
    trending: false
  },
  {
    id: '5',
    title: 'Dividend Tax Optimization Strategies for 2025',
    excerpt: 'Legal strategies to minimize taxes on dividend income and maximize after-tax returns.',
    author: 'Robert Chen',
    date: '2025-01-06',
    readTime: '8 min',
    category: 'Tax Strategy',
    views: 12345,
    comments: 34
  },
  {
    id: '6',
    title: 'Top 10 Monthly Dividend Stocks for Passive Income',
    excerpt: 'Analysis of the best monthly dividend payers for consistent cash flow.',
    author: 'Michael Chen',
    date: '2025-01-05',
    readTime: '11 min',
    category: 'Stock Picks',
    views: 28901,
    comments: 78
  }
]

const CATEGORIES = [
  { name: 'All Posts', count: 324, icon: BookOpen },
  { name: 'Stock Analysis', count: 89, icon: TrendingUp },
  { name: 'Education', count: 67, icon: BookOpen },
  { name: 'Market News', count: 45, icon: Calendar },
  { name: 'Strategies', count: 56, icon: Target },
  { name: 'Tax & Legal', count: 23, icon: Shield },
  { name: 'Case Studies', count: 34, icon: User },
  { name: 'Tools & Resources', count: 10, icon: Calculator }
]

const POPULAR_TAGS = [
  'Dividend Aristocrats', 'DRIP', 'REITs', 'Monthly Dividends',
  'Tax Strategy', 'Retirement', 'Portfolio Building', 'Yield',
  'Growth Stocks', 'Value Investing', 'Passive Income', 'ETFs'
]

const TRENDING_TOPICS = [
  { topic: 'Fed Rate Decision Impact on Dividends', posts: 12, growth: '+234%' },
  { topic: 'AI Stock Dividend Potential', posts: 8, growth: '+189%' },
  { topic: 'Energy Sector Dividend Cuts', posts: 6, growth: '+156%' },
  { topic: '2025 Dividend Forecasts', posts: 15, growth: '+145%' },
  { topic: 'Inflation-Protected Dividends', posts: 9, growth: '+123%' }
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative container mx-auto px-4 py-24">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4 px-4 py-2">
              <Eye className="w-3 h-3 mr-1" />
              50,000+ Monthly Readers
            </Badge>
            <h1 className="text-5xl md:text-7xl font-black mb-6">
              Dividend Investing Insights
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Expert analysis, strategies, and market updates to help you build wealth through dividends
            </p>

            {/* Newsletter Signup */}
            <div className="max-w-md mx-auto bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <h3 className="text-lg font-bold mb-3">Get Weekly Dividend Picks</h3>
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 bg-white/20 border-white/30 text-white placeholder:text-white/70"
                />
                <Button variant="secondary">Subscribe</Button>
              </div>
              <p className="text-xs text-white/70 mt-2">
                Join 25,000+ subscribers • 100% free • Unsubscribe anytime
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trending Bar */}
      <section className="bg-yellow-50 dark:bg-yellow-950/20 border-y border-yellow-200 dark:border-yellow-800">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center gap-4 overflow-x-auto">
            <Badge variant="default" className="bg-yellow-500 whitespace-nowrap">
              🔥 Trending
            </Badge>
            {TRENDING_TOPICS.map((topic, index) => (
              <Link
                key={index}
                href={`/blog/topic/${topic.topic.toLowerCase().replace(/\s+/g, '-')}`}
                className="flex items-center gap-2 text-sm hover:text-blue-600 transition-colors whitespace-nowrap"
              >
                <span>{topic.topic}</span>
                <span className="text-green-600 font-bold text-xs">{topic.growth}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-8">
            {/* Featured Post */}
            <Card className="overflow-hidden border-2 border-blue-100 dark:border-blue-900/50">
              <div className="aspect-video bg-gradient-to-br from-blue-500 to-purple-600" />
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Badge>{FEATURED_POST.category}</Badge>
                  <span className="text-sm text-slate-600 dark:text-slate-400">
                    {FEATURED_POST.readTime} read
                  </span>
                  {FEATURED_POST.views > 10000 && (
                    <Badge variant="secondary" className="bg-orange-100 text-orange-700">
                      🔥 {(FEATURED_POST.views / 1000).toFixed(0)}K views
                    </Badge>
                  )}
                </div>

                <h2 className="text-3xl font-bold mb-3 hover:text-blue-600 transition-colors">
                  <Link href={`/blog/${FEATURED_POST.id}`}>
                    {FEATURED_POST.title}
                  </Link>
                </h2>

                <p className="text-lg text-slate-600 dark:text-slate-400 mb-4">
                  {FEATURED_POST.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />
                    <div>
                      <p className="font-semibold text-sm">{FEATURED_POST.author}</p>
                      <p className="text-xs text-slate-600 dark:text-slate-400">
                        {FEATURED_POST.authorRole} • {FEATURED_POST.date}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-sm text-slate-600">
                    <span className="flex items-center gap-1">
                      <MessageCircle className="w-4 h-4" />
                      {FEATURED_POST.comments}
                    </span>
                    <span className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      {FEATURED_POST.likes}
                    </span>
                    <Button variant="ghost" size="sm">
                      <Bookmark className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                <div className="flex gap-2 mt-4">
                  {FEATURED_POST.tags.map(tag => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Posts Grid */}
            <div>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Clock className="w-6 h-6 text-blue-600" />
                Recent Articles
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {RECENT_POSTS.map(post => (
                  <Card key={post.id} className="hover:shadow-xl transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="outline">{post.category}</Badge>
                        {post.trending && (
                          <Badge variant="default" className="bg-red-500">
                            Trending
                          </Badge>
                        )}
                      </div>
                      <CardTitle className="text-xl hover:text-blue-600 transition-colors">
                        <Link href={`/blog/${post.id}`}>
                          {post.title}
                        </Link>
                      </CardTitle>
                      <CardDescription className="line-clamp-2">
                        {post.excerpt}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between text-sm text-slate-600">
                        <div className="flex items-center gap-2">
                          <User className="w-4 h-4" />
                          <span>{post.author}</span>
                        </div>
                        <span>{post.readTime}</span>
                      </div>
                      <div className="flex items-center justify-between mt-3 pt-3 border-t">
                        <span className="text-xs text-slate-500">{post.date}</span>
                        <div className="flex items-center gap-3 text-xs">
                          <span className="flex items-center gap-1">
                            <Eye className="w-3 h-3" />
                            {(post.views / 1000).toFixed(0)}K
                          </span>
                          <span className="flex items-center gap-1">
                            <MessageCircle className="w-3 h-3" />
                            {post.comments}
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Load More */}
              <div className="text-center mt-8">
                <Button size="lg" variant="outline" className="gap-2">
                  Load More Articles
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Newsletter CTA */}
            <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div>
                    <h3 className="text-2xl font-bold mb-3">
                      Never Miss a Dividend Opportunity
                    </h3>
                    <p className="text-blue-100 mb-4">
                      Get our top dividend picks, market analysis, and exclusive strategies delivered weekly.
                    </p>
                    <div className="flex gap-2">
                      <Badge variant="secondary">📈 Stock Picks</Badge>
                      <Badge variant="secondary">💰 Income Ideas</Badge>
                      <Badge variant="secondary">📊 Analysis</Badge>
                    </div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      className="mb-3 bg-white/20 border-white/30 text-white placeholder:text-white/70"
                    />
                    <Button variant="secondary" className="w-full">
                      Subscribe Free →
                    </Button>
                    <p className="text-xs text-blue-100 mt-2 text-center">
                      25,000+ investors read this
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Search */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Search className="w-5 h-5" />
                  Search Articles
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <Input
                    placeholder="Search blog..."
                    className="pl-10"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Categories */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Filter className="w-5 h-5" />
                  Categories
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {CATEGORIES.map(category => (
                  <Link
                    key={category.name}
                    href={`/blog/category/${category.name.toLowerCase().replace(/\s+/g, '-')}`}
                    className="flex items-center justify-between p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
                  >
                    <span className="flex items-center gap-2 text-sm">
                      <category.icon className="w-4 h-4 text-slate-500" />
                      {category.name}
                    </span>
                    <Badge variant="secondary" className="text-xs">
                      {category.count}
                    </Badge>
                  </Link>
                ))}
              </CardContent>
            </Card>

            {/* Popular Tags */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Tag className="w-5 h-5" />
                  Popular Tags
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {POPULAR_TAGS.map(tag => (
                    <Link
                      key={tag}
                      href={`/blog/tag/${tag.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      <Badge variant="outline" className="hover:bg-blue-50 hover:border-blue-300 transition-colors">
                        {tag}
                      </Badge>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Most Popular */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <TrendingUp className="w-5 h-5" />
                  Most Popular
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {RECENT_POSTS.slice(0, 3).map((post, index) => (
                    <div key={post.id} className="flex gap-3">
                      <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <Link
                          href={`/blog/${post.id}`}
                          className="text-sm font-medium hover:text-blue-600 transition-colors line-clamp-2"
                        >
                          {post.title}
                        </Link>
                        <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                          {(post.views / 1000).toFixed(0)}K views
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Free Resource */}
            <Card className="border-2 border-green-200 dark:border-green-800 bg-green-50/50 dark:bg-green-950/20">
              <CardHeader>
                <CardTitle className="text-lg">📚 Free Guide</CardTitle>
              </CardHeader>
              <CardContent>
                <h4 className="font-semibold mb-2">
                  "10 Rules for Dividend Investing Success"
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                  Learn the proven strategies used by successful dividend investors.
                </p>
                <Button className="w-full" variant="default">
                  Download Free PDF
                </Button>
                <p className="text-xs text-slate-500 mt-2 text-center">
                  No email required • 5,234 downloads
                </p>
              </CardContent>
            </Card>

            {/* Social Follow */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Share2 className="w-5 h-5" />
                  Follow Us
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-2">
                  {['Twitter', 'LinkedIn', 'YouTube', 'Facebook'].map(platform => (
                    <Button key={platform} variant="outline" size="sm" className="w-full">
                      {platform}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <section className="bg-slate-100 dark:bg-slate-800/50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">
              Start Your Dividend Journey Today
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
              Use our free tools to analyze stocks, build portfolios, and calculate returns
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/#calculator">
                <Button size="lg" className="gap-2">
                  <Calculator className="w-5 h-5" />
                  Try DRIP Calculator
                </Button>
              </Link>
              <Link href="/resources">
                <Button size="lg" variant="outline" className="gap-2">
                  <BookOpen className="w-5 h-5" />
                  Browse Resources
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}