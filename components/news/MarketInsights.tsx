"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  Newspaper, TrendingUp, TrendingDown, AlertCircle, Zap, 
  Calendar, Clock, BarChart3, DollarSign, Globe, 
  Sparkles, ArrowRight, Bell, Filter, Bookmark
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"

interface NewsItem {
  id: string
  headline: string
  summary: string
  source: string
  timestamp: Date
  category: 'earnings' | 'dividends' | 'market' | 'analysis' | 'economic'
  sentiment: 'positive' | 'neutral' | 'negative'
  tickers: string[]
  importance: 'high' | 'medium' | 'low'
  imageUrl?: string
  readTime: number
}

interface MarketMetric {
  name: string
  value: number
  change: number
  changePercent: number
  icon: React.ElementType
  color: string
}

interface DividendAlert {
  symbol: string
  company: string
  exDate: Date
  amount: number
  yield: number
  frequency: string
  daysUntil: number
}

const mockNews: NewsItem[] = [
  {
    id: '1',
    headline: 'Apple Increases Dividend by 4%, Announces $90B Buyback Program',
    summary: 'Tech giant continues shareholder returns with increased quarterly dividend and massive share repurchase authorization...',
    source: 'MarketWatch',
    timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000),
    category: 'dividends',
    sentiment: 'positive',
    tickers: ['AAPL'],
    importance: 'high',
    readTime: 3
  },
  {
    id: '2',
    headline: 'Fed Minutes Suggest Rates May Stay Higher for Longer',
    summary: 'Federal Reserve officials express concerns about persistent inflation, impacting dividend stock valuations...',
    source: 'Reuters',
    timestamp: new Date(Date.now() - 4 * 60 * 60 * 1000),
    category: 'economic',
    sentiment: 'negative',
    tickers: [],
    importance: 'high',
    readTime: 5
  },
  {
    id: '3',
    headline: 'Johnson & Johnson Maintains 61-Year Dividend Growth Streak',
    summary: 'Healthcare conglomerate announces quarterly dividend, extending aristocrat status with consistent payout growth...',
    source: 'Bloomberg',
    timestamp: new Date(Date.now() - 6 * 60 * 60 * 1000),
    category: 'dividends',
    sentiment: 'positive',
    tickers: ['JNJ'],
    importance: 'medium',
    readTime: 2
  },
  {
    id: '4',
    headline: 'REITs Surge as Interest Rate Peak Speculation Grows',
    summary: 'Real estate investment trusts see renewed investor interest as market prices in potential rate cuts for 2024...',
    source: 'Yahoo Finance',
    timestamp: new Date(Date.now() - 8 * 60 * 60 * 1000),
    category: 'market',
    sentiment: 'positive',
    tickers: ['VNQ', 'REALTY', 'SPG'],
    importance: 'medium',
    readTime: 4
  },
  {
    id: '5',
    headline: 'Dividend ETF Inflows Hit Record $8.2B in Q4',
    summary: 'Investors pile into dividend-focused funds seeking income and stability amid market volatility...',
    source: 'WSJ',
    timestamp: new Date(Date.now() - 12 * 60 * 60 * 1000),
    category: 'analysis',
    sentiment: 'positive',
    tickers: ['VIG', 'DVY', 'SCHD'],
    importance: 'high',
    readTime: 6
  }
]

const marketMetrics: MarketMetric[] = [
  { name: 'S&P 500', value: 4783.45, change: 32.14, changePercent: 0.67, icon: BarChart3, color: 'text-blue-400' },
  { name: 'Dow Jones', value: 37863.80, change: -15.27, changePercent: -0.04, icon: TrendingDown, color: 'text-red-400' },
  { name: 'NASDAQ', value: 15310.97, change: 128.41, changePercent: 0.85, icon: TrendingUp, color: 'text-green-400' },
  { name: 'VIX', value: 13.27, change: -0.82, changePercent: -5.82, icon: AlertCircle, color: 'text-yellow-400' },
  { name: '10Y Treasury', value: 4.126, change: -0.045, changePercent: -1.08, icon: DollarSign, color: 'text-purple-400' }
]

const upcomingDividends: DividendAlert[] = [
  { symbol: 'MSFT', company: 'Microsoft', exDate: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000), amount: 0.75, yield: 0.79, frequency: 'Quarterly', daysUntil: 2 },
  { symbol: 'KO', company: 'Coca-Cola', exDate: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000), amount: 0.46, yield: 3.15, frequency: 'Quarterly', daysUntil: 5 },
  { symbol: 'PG', company: 'Procter & Gamble', exDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), amount: 0.91, yield: 2.34, frequency: 'Quarterly', daysUntil: 7 },
  { symbol: 'JNJ', company: 'Johnson & Johnson', exDate: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000), amount: 1.19, yield: 3.05, frequency: 'Quarterly', daysUntil: 10 }
]

export function MarketInsights() {
  const [selectedCategory, setSelectedCategory] = useState<'all' | NewsItem['category']>('all')
  const [bookmarkedNews, setBookmarkedNews] = useState<Set<string>>(new Set())
  const [expandedNews, setExpandedNews] = useState<string | null>(null)
  const [liveUpdatesEnabled, setLiveUpdatesEnabled] = useState(true)
  const [lastUpdate, setLastUpdate] = useState(new Date())

  // Simulate live updates
  useEffect(() => {
    if (!liveUpdatesEnabled) return
    
    const interval = setInterval(() => {
      setLastUpdate(new Date())
    }, 30000) // Update every 30 seconds

    return () => clearInterval(interval)
  }, [liveUpdatesEnabled])

  const filteredNews = mockNews.filter(item => 
    selectedCategory === 'all' || item.category === selectedCategory
  )

  const getSentimentColor = (sentiment: NewsItem['sentiment']) => {
    switch (sentiment) {
      case 'positive': return 'text-green-400 bg-green-500/20 border-green-500/30'
      case 'negative': return 'text-red-400 bg-red-500/20 border-red-500/30'
      default: return 'text-gray-400 bg-gray-500/20 border-gray-500/30'
    }
  }

  const getCategoryIcon = (category: NewsItem['category']) => {
    switch (category) {
      case 'earnings': return BarChart3
      case 'dividends': return DollarSign
      case 'market': return TrendingUp
      case 'analysis': return Sparkles
      case 'economic': return Globe
      default: return Newspaper
    }
  }

  const getTimeAgo = (date: Date) => {
    const seconds = Math.floor((Date.now() - date.getTime()) / 1000)
    if (seconds < 60) return `${seconds}s ago`
    const minutes = Math.floor(seconds / 60)
    if (minutes < 60) return `${minutes}m ago`
    const hours = Math.floor(minutes / 60)
    if (hours < 24) return `${hours}h ago`
    return `${Math.floor(hours / 24)}d ago`
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-4"
      >
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-3xl font-bold text-white flex items-center gap-3">
              <Newspaper className="w-8 h-8 text-blue-400" />
              Market Insights & News
            </h2>
            <p className="text-gray-400 mt-2">Real-time dividend news, market analysis, and investment insights</p>
          </div>
          <div className="flex items-center gap-3">
            <Button
              variant={liveUpdatesEnabled ? "default" : "outline"}
              size="sm"
              onClick={() => setLiveUpdatesEnabled(!liveUpdatesEnabled)}
              className={liveUpdatesEnabled 
                ? "bg-green-600 hover:bg-green-700 text-white" 
                : "border-slate-600 text-gray-300"
              }
            >
              {liveUpdatesEnabled && (
                <motion.div
                  animate={{ opacity: [1, 0.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-2 h-2 bg-white rounded-full mr-2"
                />
              )}
              Live Updates {liveUpdatesEnabled ? 'On' : 'Off'}
            </Button>
            <div className="text-sm text-gray-400">
              Last updated: {lastUpdate.toLocaleTimeString()}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Market Overview */}
      <Card className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 backdrop-blur-sm border-slate-600">
        <CardHeader>
          <CardTitle className="text-white flex items-center justify-between">
            <span className="flex items-center gap-2">
              <BarChart3 className="w-5 h-5" />
              Market Overview
            </span>
            <Badge className="bg-green-500 text-white">Markets Open</Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {marketMetrics.map((metric, index) => (
              <motion.div
                key={metric.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-4 bg-slate-700/50 rounded-lg"
              >
                <div className="flex items-center justify-between mb-2">
                  <metric.icon className={`w-4 h-4 ${metric.color}`} />
                  <span className={`text-xs font-medium ${
                    metric.change >= 0 ? 'text-green-400' : 'text-red-400'
                  }`}>
                    {metric.change >= 0 ? '+' : ''}{metric.changePercent.toFixed(2)}%
                  </span>
                </div>
                <div className="text-lg font-bold text-white">
                  {metric.name === '10Y Treasury' 
                    ? `${metric.value.toFixed(3)}%`
                    : metric.value.toLocaleString()
                  }
                </div>
                <div className="text-xs text-gray-400">{metric.name}</div>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* News Feed */}
        <div className="lg:col-span-2 space-y-4">
          <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700">
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle className="text-white">Latest News</CardTitle>
                <Tabs value={selectedCategory} onValueChange={(v) => setSelectedCategory(v as any)}>
                  <TabsList className="bg-slate-700">
                    <TabsTrigger value="all" className="text-xs">All</TabsTrigger>
                    <TabsTrigger value="dividends" className="text-xs">Dividends</TabsTrigger>
                    <TabsTrigger value="market" className="text-xs">Market</TabsTrigger>
                    <TabsTrigger value="analysis" className="text-xs">Analysis</TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <AnimatePresence mode="wait">
                {filteredNews.map((news, index) => {
                  const CategoryIcon = getCategoryIcon(news.category)
                  const isExpanded = expandedNews === news.id
                  
                  return (
                    <motion.div
                      key={news.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      transition={{ delay: index * 0.1 }}
                      className="group"
                    >
                      <Card 
                        className="bg-slate-700/30 border-slate-600 hover:bg-slate-700/50 transition-all duration-300 cursor-pointer"
                        onClick={() => setExpandedNews(isExpanded ? null : news.id)}
                      >
                        <CardContent className="p-4">
                          <div className="flex justify-between items-start mb-3">
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-2">
                                <CategoryIcon className="w-4 h-4 text-blue-400" />
                                <Badge variant="outline" className="text-xs border-slate-500 text-gray-300">
                                  {news.category}
                                </Badge>
                                <Badge className={`text-xs ${getSentimentColor(news.sentiment)}`}>
                                  {news.sentiment}
                                </Badge>
                                {news.importance === 'high' && (
                                  <Badge className="bg-yellow-500 text-black text-xs">
                                    <Zap className="w-3 h-3 mr-1" />
                                    Breaking
                                  </Badge>
                                )}
                              </div>
                              
                              <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-blue-400 transition-colors">
                                {news.headline}
                              </h3>
                              
                              <AnimatePresence>
                                {isExpanded && (
                                  <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    exit={{ opacity: 0, height: 0 }}
                                  >
                                    <p className="text-gray-300 text-sm mb-3 leading-relaxed">
                                      {news.summary}
                                    </p>
                                    
                                    {news.tickers.length > 0 && (
                                      <div className="flex flex-wrap gap-2 mb-3">
                                        {news.tickers.map(ticker => (
                                          <Badge 
                                            key={ticker}
                                            className="bg-blue-500/20 text-blue-400 border-blue-500/30"
                                          >
                                            ${ticker}
                                          </Badge>
                                        ))}
                                      </div>
                                    )}
                                    
                                    <div className="flex gap-2">
                                      <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
                                        Read Full Article
                                        <ArrowRight className="w-3 h-3 ml-1" />
                                      </Button>
                                      <Button 
                                        size="sm" 
                                        variant="outline"
                                        className="border-slate-600 text-gray-300"
                                        onClick={(e) => {
                                          e.stopPropagation()
                                          setBookmarkedNews(prev => {
                                            const newSet = new Set(prev)
                                            if (newSet.has(news.id)) {
                                              newSet.delete(news.id)
                                            } else {
                                              newSet.add(news.id)
                                            }
                                            return newSet
                                          })
                                        }}
                                      >
                                        <Bookmark className={`w-3 h-3 ${
                                          bookmarkedNews.has(news.id) ? 'fill-current' : ''
                                        }`} />
                                      </Button>
                                    </div>
                                  </motion.div>
                                )}
                              </AnimatePresence>
                              
                              <div className="flex items-center gap-4 text-xs text-gray-400 mt-3">
                                <span>{news.source}</span>
                                <span>•</span>
                                <span className="flex items-center gap-1">
                                  <Clock className="w-3 h-3" />
                                  {getTimeAgo(news.timestamp)}
                                </span>
                                <span>•</span>
                                <span>{news.readTime} min read</span>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  )
                })}
              </AnimatePresence>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-4">
          {/* Dividend Calendar */}
          <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Calendar className="w-5 h-5 text-green-400" />
                Upcoming Dividends
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {upcomingDividends.map((dividend, index) => (
                <motion.div
                  key={dividend.symbol}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-3 bg-green-500/10 rounded-lg border border-green-500/20"
                >
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <div className="font-semibold text-white">{dividend.symbol}</div>
                      <div className="text-xs text-gray-400">{dividend.company}</div>
                    </div>
                    <Badge className="bg-green-500 text-white text-xs">
                      {dividend.daysUntil}d
                    </Badge>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div>
                      <span className="text-gray-400">Amount:</span>
                      <span className="text-green-400 ml-1">${dividend.amount}</span>
                    </div>
                    <div>
                      <span className="text-gray-400">Yield:</span>
                      <span className="text-blue-400 ml-1">{dividend.yield}%</span>
                    </div>
                  </div>
                  <div className="text-xs text-gray-400 mt-2">
                    Ex-Date: {dividend.exDate.toLocaleDateString()}
                  </div>
                </motion.div>
              ))}
              
              <Button 
                className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white"
              >
                <Bell className="w-4 h-4 mr-2" />
                Set Dividend Alerts
              </Button>
            </CardContent>
          </Card>

          {/* Market Sentiment */}
          <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-purple-400" />
                Market Sentiment
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">72</div>
                <div className="text-sm text-gray-400">Sentiment Score</div>
                <Progress value={72} className="h-3 mt-2" />
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-300">Bullish News</span>
                  <span className="text-green-400">68%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-300">Neutral News</span>
                  <span className="text-gray-400">24%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-300">Bearish News</span>
                  <span className="text-red-400">8%</span>
                </div>
              </div>
              
              <div className="pt-3 border-t border-slate-600">
                <div className="text-xs text-center text-gray-400">
                  Based on analysis of {mockNews.length * 10}+ articles
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Top Movers */}
          <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-orange-400" />
                Top Dividend Movers
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {[
                { symbol: 'ABBV', change: 8.2, price: 156.78 },
                { symbol: 'CVX', change: 5.4, price: 147.23 },
                { symbol: 'XOM', change: 4.1, price: 104.56 },
                { symbol: 'T', change: -3.2, price: 15.89 },
                { symbol: 'VZ', change: -2.8, price: 37.45 }
              ].map((stock, index) => (
                <motion.div
                  key={stock.symbol}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="flex justify-between items-center p-2 rounded hover:bg-slate-700/50 transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${
                      stock.change >= 0 ? 'bg-green-400' : 'bg-red-400'
                    }`} />
                    <span className="font-medium text-white">{stock.symbol}</span>
                  </div>
                  <div className="text-right">
                    <div className="text-white">${stock.price.toFixed(2)}</div>
                    <div className={`text-xs ${
                      stock.change >= 0 ? 'text-green-400' : 'text-red-400'
                    }`}>
                      {stock.change >= 0 ? '+' : ''}{stock.change}%
                    </div>
                  </div>
                </motion.div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}