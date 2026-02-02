import { Metadata } from 'next'
import { DividendStockScreener } from '@/components/tools/DividendStockScreener'
import { PortfolioAnalyzer } from '@/components/tools/PortfolioAnalyzer'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Search, PieChart, Calculator, BookOpen, TrendingUp, Download, Calendar, BarChart3, Target, Shield, Award, Zap, Users, Star } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Free Financial Tools & Resources | Stock Screener, Portfolio Analyzer',
  description: 'Access professional dividend investing tools FREE. Stock screener with 50+ filters, portfolio analyzer, DRIP calculators, educational guides, and downloadable resources.',
  keywords: [
    'dividend stock screener',
    'portfolio analyzer',
    'free financial tools',
    'investment calculator',
    'dividend tracker',
    'stock research tools',
    'portfolio management',
    'dividend calendar',
    'investment resources',
    'financial planning tools'
  ],
  openGraph: {
    title: 'Free Dividend Investing Tools & Resources - Screen, Analyze, Track',
    description: 'Professional-grade investment tools used by 10,000+ investors. Screen dividend stocks, analyze portfolios, track income. 100% FREE.',
    images: ['/og-resources.png']
  }
}

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-blue-950/20 dark:via-purple-950/20 dark:to-pink-950/20" />

        <div className="relative container mx-auto px-4 py-24">
          <div className="text-center max-w-4xl mx-auto">
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 dark:bg-green-900/30 border border-green-300 dark:border-green-700 mb-6">
              <Users className="w-4 h-4 text-green-600 dark:text-green-400" />
              <span className="text-sm font-semibold text-green-700 dark:text-green-300">
                Used by 10,000+ investors monthly
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black mb-6">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Free Investment Tools
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-8">
              Professional-grade tools to screen stocks, analyze portfolios, and maximize dividend income
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-3 justify-center mb-12">
              <Badge variant="secondary" className="px-4 py-2 text-sm">
                <Search className="w-3 h-3 mr-1" />
                50+ Stock Filters
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-sm">
                <PieChart className="w-3 h-3 mr-1" />
                Portfolio Analysis
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-sm">
                <Calculator className="w-3 h-3 mr-1" />
                5 Calculators
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-sm">
                <Download className="w-3 h-3 mr-1" />
                Export Tools
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-sm">
                <Shield className="w-3 h-3 mr-1" />
                100% Free
              </Badge>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
              <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-xl p-4 border border-slate-200 dark:border-slate-700">
                <p className="text-3xl font-bold text-blue-600">500+</p>
                <p className="text-sm text-slate-600 dark:text-slate-400">Stocks Tracked</p>
              </div>
              <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-xl p-4 border border-slate-200 dark:border-slate-700">
                <p className="text-3xl font-bold text-green-600">$2.5M</p>
                <p className="text-sm text-slate-600 dark:text-slate-400">Analyzed Daily</p>
              </div>
              <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-xl p-4 border border-slate-200 dark:border-slate-700">
                <p className="text-3xl font-bold text-purple-600">10K+</p>
                <p className="text-sm text-slate-600 dark:text-slate-400">Active Users</p>
              </div>
              <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-xl p-4 border border-slate-200 dark:border-slate-700">
                <p className="text-3xl font-bold text-orange-600">4.9★</p>
                <p className="text-sm text-slate-600 dark:text-slate-400">User Rating</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Tools Section */}
      <section className="container mx-auto px-4 py-16">
        <Tabs defaultValue="screener" className="space-y-8">
          <TabsList className="grid grid-cols-2 md:grid-cols-5 w-full">
            <TabsTrigger value="screener" className="gap-2">
              <Search className="w-4 h-4" />
              <span className="hidden sm:inline">Stock Screener</span>
            </TabsTrigger>
            <TabsTrigger value="portfolio" className="gap-2">
              <PieChart className="w-4 h-4" />
              <span className="hidden sm:inline">Portfolio Analyzer</span>
            </TabsTrigger>
            <TabsTrigger value="calculators" className="gap-2">
              <Calculator className="w-4 h-4" />
              <span className="hidden sm:inline">Calculators</span>
            </TabsTrigger>
            <TabsTrigger value="guides" className="gap-2">
              <BookOpen className="w-4 h-4" />
              <span className="hidden sm:inline">Guides</span>
            </TabsTrigger>
            <TabsTrigger value="downloads" className="gap-2">
              <Download className="w-4 h-4" />
              <span className="hidden sm:inline">Downloads</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="screener">
            <DividendStockScreener />
          </TabsContent>

          <TabsContent value="portfolio">
            <PortfolioAnalyzer />
          </TabsContent>

          <TabsContent value="calculators" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="hover:shadow-xl transition-all duration-300 border-2 hover:border-blue-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calculator className="w-5 h-5 text-blue-600" />
                    DRIP Calculator
                  </CardTitle>
                  <CardDescription>
                    Calculate compound returns from dividend reinvestment
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-600">Average Returns</span>
                      <span className="font-bold text-green-600">247% over 10 years</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-600">Most Popular</span>
                      <div className="flex">
                        {[1,2,3,4,5].map(i => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                    <Link href="/#calculator">
                      <Button className="w-full">Open Calculator</Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl transition-all duration-300 border-2 hover:border-green-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-green-600" />
                    Yield Calculator
                  </CardTitle>
                  <CardDescription>
                    Calculate dividend yield and income projections
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-600">Typical Yield Range</span>
                      <span className="font-bold text-blue-600">2-6% annually</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-600">User Rating</span>
                      <div className="flex">
                        {[1,2,3,4,5].map(i => (
                          <Star key={i} className={`w-4 h-4 ${i <= 4 ? 'fill-yellow-400 text-yellow-400' : 'text-slate-300'}`} />
                        ))}
                      </div>
                    </div>
                    <Link href="/#calculator">
                      <Button className="w-full" variant="outline">Open Calculator</Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl transition-all duration-300 border-2 hover:border-purple-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="w-5 h-5 text-purple-600" />
                    Growth Calculator
                  </CardTitle>
                  <CardDescription>
                    Project dividend growth over time
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-600">Avg Growth Rate</span>
                      <span className="font-bold text-purple-600">5-7% yearly</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-600">Time Horizon</span>
                      <span className="font-medium">Up to 30 years</span>
                    </div>
                    <Link href="/#calculator">
                      <Button className="w-full" variant="outline">Open Calculator</Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl transition-all duration-300 border-2 hover:border-orange-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="w-5 h-5 text-orange-600" />
                    Retirement Planner
                  </CardTitle>
                  <CardDescription>
                    Plan your retirement income from dividends
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-600">Target Income</span>
                      <span className="font-bold text-orange-600">$5K/month</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-600">Success Rate</span>
                      <span className="font-medium">87% achieve goals</span>
                    </div>
                    <Link href="/#calculator">
                      <Button className="w-full" variant="outline">Open Calculator</Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="guides" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: 'Dividend Investing 101',
                  description: 'Complete beginner\'s guide to dividend investing',
                  readTime: '15 min',
                  level: 'Beginner',
                  icon: BookOpen,
                  color: 'blue'
                },
                {
                  title: 'DRIP Strategy Guide',
                  description: 'Master dividend reinvestment for compound growth',
                  readTime: '20 min',
                  level: 'Intermediate',
                  icon: TrendingUp,
                  color: 'green'
                },
                {
                  title: 'Dividend Aristocrats',
                  description: 'Investing in companies with 25+ years of increases',
                  readTime: '12 min',
                  level: 'Intermediate',
                  icon: Award,
                  color: 'purple'
                },
                {
                  title: 'Tax Optimization',
                  description: 'Minimize taxes on dividend income',
                  readTime: '18 min',
                  level: 'Advanced',
                  icon: Shield,
                  color: 'orange'
                },
                {
                  title: 'REIT Investing',
                  description: 'High-yield real estate investment trusts',
                  readTime: '15 min',
                  level: 'Intermediate',
                  icon: Calendar,
                  color: 'pink'
                },
                {
                  title: 'Portfolio Building',
                  description: 'Construct a balanced dividend portfolio',
                  readTime: '25 min',
                  level: 'Advanced',
                  icon: PieChart,
                  color: 'indigo'
                }
              ].map((guide, index) => (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 cursor-pointer">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <guide.icon className={`w-8 h-8 text-${guide.color}-600`} />
                      <Badge variant={guide.level === 'Beginner' ? 'secondary' : guide.level === 'Intermediate' ? 'default' : 'outline'}>
                        {guide.level}
                      </Badge>
                    </div>
                    <CardTitle className="mt-4">{guide.title}</CardTitle>
                    <CardDescription>{guide.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-600">📚 {guide.readTime} read</span>
                      <Button variant="ghost" size="sm">
                        Read Guide →
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="downloads" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-2 border-blue-100 dark:border-blue-900/50">
                <CardHeader className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30">
                  <CardTitle className="flex items-center gap-2">
                    <Download className="w-5 h-5 text-blue-600" />
                    Free Resources
                  </CardTitle>
                  <CardDescription>
                    Download spreadsheets, templates, and checklists
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6 space-y-4">
                  <div className="space-y-3">
                    {[
                      { name: 'Dividend Tracker Spreadsheet', format: 'Excel', size: '245 KB', downloads: '5,234' },
                      { name: 'Portfolio Rebalancing Template', format: 'Excel', size: '189 KB', downloads: '3,456' },
                      { name: 'Tax Loss Harvesting Guide', format: 'PDF', size: '1.2 MB', downloads: '2,890' },
                      { name: 'Dividend Stock Checklist', format: 'PDF', size: '456 KB', downloads: '4,123' },
                      { name: 'DRIP Calculator Template', format: 'Excel', size: '312 KB', downloads: '3,789' }
                    ].map((resource, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-800/50 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                            <Download className="w-5 h-5 text-blue-600" />
                          </div>
                          <div>
                            <p className="font-medium text-slate-900 dark:text-white">{resource.name}</p>
                            <p className="text-xs text-slate-600 dark:text-slate-400">
                              {resource.format} • {resource.size} • {resource.downloads} downloads
                            </p>
                          </div>
                        </div>
                        <Button size="sm" variant="ghost">
                          Download
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-green-100 dark:border-green-900/50">
                <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30">
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="w-5 h-5 text-green-600" />
                    Premium Resources
                  </CardTitle>
                  <CardDescription>
                    Get instant access with email signup
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6 space-y-4">
                  <div className="space-y-3">
                    {[
                      { name: 'Advanced Portfolio Optimizer', value: '$97', badge: 'Most Popular' },
                      { name: '50 Dividend Aristocrats Analysis', value: '$67', badge: 'Updated 2025' },
                      { name: 'Tax Strategy Masterclass', value: '$127', badge: 'Save $1000s' },
                      { name: 'REIT Investment Blueprint', value: '$87', badge: 'High Yield' },
                      { name: 'Complete Dividend Course', value: '$297', badge: 'Best Value' }
                    ].map((resource, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 rounded-lg border border-green-200 dark:border-green-800">
                        <div className="flex items-center gap-3">
                          <div>
                            <p className="font-medium text-slate-900 dark:text-white">{resource.name}</p>
                            <div className="flex items-center gap-2 mt-1">
                              <Badge variant="secondary" className="text-xs">
                                {resource.badge}
                              </Badge>
                              <span className="text-sm text-slate-600 dark:text-slate-400 line-through">
                                {resource.value}
                              </span>
                              <span className="text-sm font-bold text-green-600">
                                FREE
                              </span>
                            </div>
                          </div>
                        </div>
                        <Button size="sm" variant="default" className="bg-green-600 hover:bg-green-700">
                          Get Free
                        </Button>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 p-4 bg-yellow-50 dark:bg-yellow-950/20 rounded-lg border border-yellow-200 dark:border-yellow-800">
                    <p className="text-sm font-medium text-yellow-800 dark:text-yellow-200">
                      🎁 Limited Time: Get all premium resources FREE with email signup
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {/* Trust Section */}
      <section className="bg-slate-50 dark:bg-slate-900/50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Trusted by Thousands of Investors</h2>
            <p className="text-slate-600 dark:text-slate-400">
              Join our community of successful dividend investors
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: 'Michael R.',
                role: 'Retired Engineer',
                content: 'The portfolio analyzer helped me optimize my holdings and increase my dividend income by 35% in just 6 months.',
                rating: 5
              },
              {
                name: 'Sarah L.',
                role: 'Financial Advisor',
                content: 'I recommend these tools to all my clients. The stock screener is as good as paid alternatives costing $100+/month.',
                rating: 5
              },
              {
                name: 'David K.',
                role: 'Small Business Owner',
                content: 'Built my entire retirement portfolio using these calculators. Now generating $8K/month in passive income!',
                rating: 5
              }
            ].map((testimonial, index) => (
              <Card key={index} className="bg-white dark:bg-slate-800">
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[1,2,3,4,5].map(i => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 mb-4">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-slate-600 dark:text-slate-400">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Start Building Wealth Today
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Get instant access to all tools and resources. No credit card required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              Start Free Now
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent text-white border-white hover:bg-white/10">
              View Demo
            </Button>
          </div>
          <p className="text-sm text-blue-200 mt-6">
            Join 10,000+ investors • 100% Free • No spam
          </p>
        </div>
      </section>
    </div>
  )
}