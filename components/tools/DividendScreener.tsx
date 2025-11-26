"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useMemo } from "react"
import { Search, Filter, TrendingUp, DollarSign, BarChart3, Star, ArrowUpRight, ArrowDownRight, Zap } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface DividendStock {
  symbol: string
  name: string
  price: number
  dividend: number
  yield: number
  payoutRatio: number
  growth5yr: number
  marketCap: number
  sector: string
  rating: number
  trending: boolean
  aristocrat: boolean
}

const mockStocks: DividendStock[] = [
  {
    symbol: "AAPL",
    name: "Apple Inc.",
    price: 189.43,
    dividend: 0.96,
    yield: 0.51,
    payoutRatio: 15.8,
    growth5yr: 4.8,
    marketCap: 2980000000000,
    sector: "Technology",
    rating: 4.5,
    trending: true,
    aristocrat: false
  },
  {
    symbol: "JNJ",
    name: "Johnson & Johnson",
    price: 156.23,
    dividend: 4.76,
    yield: 3.05,
    payoutRatio: 68.5,
    growth5yr: 5.2,
    marketCap: 415000000000,
    sector: "Healthcare",
    rating: 4.8,
    trending: false,
    aristocrat: true
  },
  {
    symbol: "KO",
    name: "The Coca-Cola Company",
    price: 58.47,
    dividend: 1.84,
    yield: 3.15,
    payoutRatio: 73.2,
    growth5yr: 3.1,
    marketCap: 253000000000,
    sector: "Consumer Staples",
    rating: 4.2,
    trending: true,
    aristocrat: true
  },
  {
    symbol: "MSFT",
    name: "Microsoft Corporation",
    price: 378.85,
    dividend: 3.00,
    yield: 0.79,
    payoutRatio: 24.8,
    growth5yr: 10.9,
    marketCap: 2810000000000,
    sector: "Technology",
    rating: 4.6,
    trending: true,
    aristocrat: false
  },
  {
    symbol: "PG",
    name: "Procter & Gamble",
    price: 155.67,
    dividend: 3.65,
    yield: 2.34,
    payoutRatio: 58.9,
    growth5yr: 2.8,
    marketCap: 372000000000,
    sector: "Consumer Staples",
    rating: 4.3,
    trending: false,
    aristocrat: true
  },
  {
    symbol: "REALTY",
    name: "Realty Income Corp",
    price: 52.83,
    dividend: 2.98,
    yield: 5.64,
    payoutRatio: 83.1,
    growth5yr: 4.2,
    marketCap: 33000000000,
    sector: "Real Estate",
    rating: 4.1,
    trending: true,
    aristocrat: false
  }
]

const sectors = ["All", "Technology", "Healthcare", "Consumer Staples", "Real Estate", "Financials"]

export function DividendScreener() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedSector, setSelectedSector] = useState("All")
  const [minYield, setMinYield] = useState(0)
  const [maxYield, setMaxYield] = useState(10)
  const [showAristocrats, setShowAristocrats] = useState(false)
  const [sortBy, setSortBy] = useState<'yield' | 'growth' | 'rating'>('yield')

  const filteredStocks = useMemo(() => {
    return mockStocks
      .filter(stock => {
        const matchesSearch = stock.symbol.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            stock.name.toLowerCase().includes(searchTerm.toLowerCase())
        const matchesSector = selectedSector === "All" || stock.sector === selectedSector
        const matchesYield = stock.yield >= minYield && stock.yield <= maxYield
        const matchesAristocrat = !showAristocrats || stock.aristocrat
        
        return matchesSearch && matchesSector && matchesYield && matchesAristocrat
      })
      .sort((a, b) => {
        switch (sortBy) {
          case 'yield':
            return b.yield - a.yield
          case 'growth':
            return b.growth5yr - a.growth5yr
          case 'rating':
            return b.rating - a.rating
          default:
            return 0
        }
      })
  }, [searchTerm, selectedSector, minYield, maxYield, showAristocrats, sortBy])

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-4"
      >
        <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full border border-blue-500/30">
          <Zap className="w-4 h-4 text-blue-400 mr-2" />
          <span className="text-blue-300 text-sm font-medium">AI-Powered Stock Screener</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
          Discover Premium Dividend Stocks
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Find the best dividend-paying stocks with our advanced screening tools. 
          Filter by yield, growth, sector, and aristocrat status.
        </p>
      </motion.div>

      {/* Filters */}
      <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700">
        <CardHeader>
          <CardTitle className="flex items-center text-white">
            <Filter className="w-5 h-5 mr-2" />
            Smart Filters
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Search */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">Search Stocks</label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input
                  placeholder="Symbol or company name"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-slate-700 border-slate-600 text-white"
                />
              </div>
            </div>

            {/* Sector Filter */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">Sector</label>
              <select
                value={selectedSector}
                onChange={(e) => setSelectedSector(e.target.value)}
                className="w-full p-2 bg-slate-700 border border-slate-600 rounded-md text-white"
              >
                {sectors.map(sector => (
                  <option key={sector} value={sector}>{sector}</option>
                ))}
              </select>
            </div>

            {/* Yield Range */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">Min Yield (%)</label>
              <Input
                type="number"
                step="0.1"
                min="0"
                max="10"
                value={minYield}
                onChange={(e) => setMinYield(Number(e.target.value))}
                className="bg-slate-700 border-slate-600 text-white"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">Max Yield (%)</label>
              <Input
                type="number"
                step="0.1"
                min="0"
                max="10"
                value={maxYield}
                onChange={(e) => setMaxYield(Number(e.target.value))}
                className="bg-slate-700 border-slate-600 text-white"
              />
            </div>
          </div>

          <div className="flex flex-wrap gap-4 items-center">
            <Button
              variant={showAristocrats ? "default" : "outline"}
              onClick={() => setShowAristocrats(!showAristocrats)}
              className={showAristocrats ? "bg-yellow-600 hover:bg-yellow-700" : "border-slate-600 text-gray-300 hover:bg-slate-700"}
            >
              <Star className="w-4 h-4 mr-2" />
              Dividend Aristocrats Only
            </Button>

            <div className="flex items-center space-x-2 text-gray-300">
              <span className="text-sm">Sort by:</span>
              <Tabs value={sortBy} onValueChange={(value) => setSortBy(value as any)}>
                <TabsList className="bg-slate-700">
                  <TabsTrigger value="yield" className="text-xs">Yield</TabsTrigger>
                  <TabsTrigger value="growth" className="text-xs">Growth</TabsTrigger>
                  <TabsTrigger value="rating" className="text-xs">Rating</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Results */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="space-y-4"
      >
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-semibold text-white">
            {filteredStocks.length} Stocks Found
          </h3>
          <div className="text-sm text-gray-400">
            Average Yield: {(filteredStocks.reduce((sum, stock) => sum + stock.yield, 0) / filteredStocks.length || 0).toFixed(2)}%
          </div>
        </div>

        <div className="grid gap-4">
          <AnimatePresence>
            {filteredStocks.map((stock, index) => (
              <motion.div
                key={stock.symbol}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.02 }}
                className="group"
              >
                <Card className="bg-gradient-to-r from-slate-800/80 to-slate-700/80 backdrop-blur-sm border-slate-600 hover:border-blue-500/50 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div>
                          <div className="flex items-center space-x-2">
                            <h4 className="text-xl font-bold text-white">{stock.symbol}</h4>
                            {stock.trending && (
                              <Badge className="bg-green-500 text-white">
                                <TrendingUp className="w-3 h-3 mr-1" />
                                Trending
                              </Badge>
                            )}
                            {stock.aristocrat && (
                              <Badge className="bg-yellow-500 text-white">
                                <Star className="w-3 h-3 mr-1" />
                                Aristocrat
                              </Badge>
                            )}
                          </div>
                          <p className="text-gray-400">{stock.name}</p>
                          <p className="text-xs text-gray-500">{stock.sector}</p>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-right">
                        <div>
                          <div className="text-sm text-gray-400">Price</div>
                          <div className="text-lg font-semibold text-white">
                            ${stock.price.toFixed(2)}
                          </div>
                        </div>

                        <div>
                          <div className="text-sm text-gray-400">Dividend Yield</div>
                          <div className="text-lg font-semibold text-green-400">
                            {stock.yield.toFixed(2)}%
                          </div>
                        </div>

                        <div>
                          <div className="text-sm text-gray-400">5Y Growth</div>
                          <div className={`text-lg font-semibold flex items-center justify-end ${
                            stock.growth5yr >= 0 ? 'text-green-400' : 'text-red-400'
                          }`}>
                            {stock.growth5yr >= 0 ? (
                              <ArrowUpRight className="w-4 h-4 mr-1" />
                            ) : (
                              <ArrowDownRight className="w-4 h-4 mr-1" />
                            )}
                            {stock.growth5yr.toFixed(1)}%
                          </div>
                        </div>

                        <div>
                          <div className="text-sm text-gray-400">Rating</div>
                          <div className="text-lg font-semibold text-yellow-400">
                            {"★".repeat(Math.floor(stock.rating))}{"☆".repeat(5 - Math.floor(stock.rating))}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 pt-4 border-t border-slate-600">
                      <div className="grid grid-cols-3 gap-4 text-sm text-gray-400">
                        <div>
                          <span>Annual Dividend: </span>
                          <span className="text-white">${stock.dividend.toFixed(2)}</span>
                        </div>
                        <div>
                          <span>Payout Ratio: </span>
                          <span className="text-white">{stock.payoutRatio.toFixed(1)}%</span>
                        </div>
                        <div>
                          <span>Market Cap: </span>
                          <span className="text-white">
                            ${(stock.marketCap / 1000000000).toFixed(0)}B
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  )
}