"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Search, TrendingUp, TrendingDown, DollarSign, BarChart3, Calendar, Target, Zap, Clock, ArrowUpRight, ArrowDownRight } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useDebounce } from "@/hooks/useDebounce"
import { stockAPI, type StockQuote, type DividendInfo } from "@/lib/services/stockApi"

interface StockLookupProps {
  onStockSelect?: (quote: StockQuote, dividendInfo: DividendInfo) => void
  className?: string
}

export function StockLookup({ onStockSelect, className }: StockLookupProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResults, setSearchResults] = useState<Array<{ symbol: string; name: string; type: string }>>([])
  const [selectedStock, setSelectedStock] = useState<StockQuote | null>(null)
  const [dividendInfo, setDividendInfo] = useState<DividendInfo | null>(null)
  const [loading, setLoading] = useState(false)
  const [showResults, setShowResults] = useState(false)
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null)

  const debouncedQuery = useDebounce(searchQuery, 300)

  // Search for stocks
  useEffect(() => {
    const searchStocks = async () => {
      if (debouncedQuery.length < 2) {
        setSearchResults([])
        setShowResults(false)
        return
      }

      try {
        const results = await stockAPI.searchStocks(debouncedQuery)
        setSearchResults(results.slice(0, 10)) // Limit to 10 results
        setShowResults(true)
      } catch (error) {
        console.error('Search error:', error)
        setSearchResults([])
      }
    }

    searchStocks()
  }, [debouncedQuery])

  const handleStockSelect = useCallback(async (symbol: string) => {
    setLoading(true)
    setShowResults(false)
    
    try {
      const [quote, dividend] = await Promise.all([
        stockAPI.getStockQuote(symbol),
        stockAPI.getDividendInfo(symbol)
      ])
      
      setSelectedStock(quote)
      setDividendInfo(dividend)
      setLastUpdated(new Date())
      setSearchQuery(symbol)
      
      // Call parent callback if provided
      if (onStockSelect) {
        onStockSelect(quote, dividend)
      }
    } catch (error) {
      console.error('Stock fetch error:', error)
    } finally {
      setLoading(false)
    }
  }, [onStockSelect])

  const refreshData = useCallback(() => {
    if (selectedStock) {
      handleStockSelect(selectedStock.symbol)
    }
  }, [selectedStock, handleStockSelect])

  return (
    <div className={`space-y-4 ${className}`}>
      {/* Search Input */}
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
        <Input
          type="text"
          placeholder="Search stocks (e.g., AAPL, Microsoft, Dividend ETF)"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10 pr-4 py-3 bg-slate-700 border-slate-600 text-white placeholder:text-gray-400 focus:border-blue-500 transition-colors"
        />
        
        {loading && (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              className="w-5 h-5 border-2 border-blue-500 border-t-transparent rounded-full"
            />
          </div>
        )}
      </div>

      {/* Search Results Dropdown */}
      <AnimatePresence>
        {showResults && searchResults.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="relative z-50"
          >
            <Card className="absolute w-full bg-slate-800 border-slate-600 shadow-2xl">
              <CardContent className="p-2">
                <div className="space-y-1">
                  {searchResults.map((result, index) => (
                    <motion.button
                      key={result.symbol}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      onClick={() => handleStockSelect(result.symbol)}
                      className="w-full text-left p-3 rounded-lg hover:bg-slate-700 transition-colors group"
                    >
                      <div className="flex justify-between items-center">
                        <div>
                          <div className="font-semibold text-white group-hover:text-blue-400 transition-colors">
                            {result.symbol}
                          </div>
                          <div className="text-sm text-gray-400 truncate max-w-[250px]">
                            {result.name}
                          </div>
                        </div>
                        <Badge 
                          variant="outline" 
                          className="text-xs border-slate-500 text-gray-400"
                        >
                          {result.type}
                        </Badge>
                      </div>
                    </motion.button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Selected Stock Information */}
      <AnimatePresence>
        {selectedStock && dividendInfo && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            {/* Stock Quote Card */}
            <Card className="bg-gradient-to-br from-slate-800/90 to-slate-700/90 backdrop-blur-sm border-slate-600">
              <CardHeader className="pb-4">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-2xl text-white flex items-center gap-2">
                      {selectedStock.symbol}
                      <Badge className={`${selectedStock.change >= 0 ? 'bg-green-500' : 'bg-red-500'} text-white`}>
                        Live
                      </Badge>
                    </CardTitle>
                    <p className="text-gray-300">{selectedStock.name}</p>
                  </div>
                  <div className="text-right">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={refreshData}
                      className="border-slate-600 text-gray-300 hover:bg-slate-700"
                    >
                      <Clock className="w-4 h-4 mr-2" />
                      Refresh
                    </Button>
                    {lastUpdated && (
                      <p className="text-xs text-gray-400 mt-1">
                        Updated: {lastUpdated.toLocaleTimeString()}
                      </p>
                    )}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Price Information */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                  <motion.div 
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                    className="text-center p-4 bg-white/5 rounded-lg"
                  >
                    <div className="text-3xl font-bold text-white">
                      ${selectedStock.price.toFixed(2)}
                    </div>
                    <div className="text-gray-400 text-sm">Current Price</div>
                  </motion.div>
                  
                  <div className="text-center p-4 bg-white/5 rounded-lg">
                    <div className={`text-xl font-semibold flex items-center justify-center gap-1 ${
                      selectedStock.change >= 0 ? 'text-green-400' : 'text-red-400'
                    }`}>
                      {selectedStock.change >= 0 ? (
                        <ArrowUpRight className="w-4 h-4" />
                      ) : (
                        <ArrowDownRight className="w-4 h-4" />
                      )}
                      ${Math.abs(selectedStock.change).toFixed(2)}
                    </div>
                    <div className="text-gray-400 text-sm">Change</div>
                  </div>
                  
                  <div className="text-center p-4 bg-white/5 rounded-lg">
                    <div className={`text-xl font-semibold ${
                      selectedStock.changePercent >= 0 ? 'text-green-400' : 'text-red-400'
                    }`}>
                      {selectedStock.changePercent >= 0 ? '+' : ''}{selectedStock.changePercent.toFixed(2)}%
                    </div>
                    <div className="text-gray-400 text-sm">Change %</div>
                  </div>
                  
                  <div className="text-center p-4 bg-white/5 rounded-lg">
                    <div className="text-xl font-semibold text-blue-400">
                      {selectedStock.volume.toLocaleString()}
                    </div>
                    <div className="text-gray-400 text-sm">Volume</div>
                  </div>
                </div>

                {/* Dividend Information */}
                <div className="border-t border-slate-600 pt-6">
                  <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                    <DollarSign className="w-5 h-5 text-green-400" />
                    Dividend Information
                  </h4>
                  
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="p-4 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-lg border border-green-500/30">
                      <div className="text-2xl font-bold text-green-400">
                        {dividendInfo.dividendYield.toFixed(2)}%
                      </div>
                      <div className="text-gray-300 text-sm">Dividend Yield</div>
                    </div>
                    
                    <div className="p-4 bg-white/5 rounded-lg">
                      <div className="text-xl font-semibold text-white">
                        ${dividendInfo.dividendAmount.toFixed(2)}
                      </div>
                      <div className="text-gray-400 text-sm">Annual Dividend</div>
                    </div>
                    
                    <div className="p-4 bg-white/5 rounded-lg">
                      <div className="text-xl font-semibold text-white">
                        {dividendInfo.payoutRatio.toFixed(1)}%
                      </div>
                      <div className="text-gray-400 text-sm">Payout Ratio</div>
                    </div>
                    
                    <div className="p-4 bg-white/5 rounded-lg">
                      <div className="text-xl font-semibold text-white">
                        {dividendInfo.consecutiveYears}
                      </div>
                      <div className="text-gray-400 text-sm">Years Paying</div>
                    </div>
                  </div>
                  
                  <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-300">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-blue-400" />
                      <span>Next Ex-Div: {new Date(dividendInfo.exDividendDate).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <BarChart3 className="w-4 h-4 text-purple-400" />
                      <span>5Y Growth: {dividendInfo.dividendGrowth5Y.toFixed(1)}%</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Target className="w-4 h-4 text-orange-400" />
                      <span>Frequency: {dividendInfo.frequency}</span>
                    </div>
                  </div>
                </div>

                {/* Quick Action Button */}
                {onStockSelect && (
                  <div className="text-center pt-4 border-t border-slate-600">
                    <Button
                      onClick={() => onStockSelect(selectedStock, dividendInfo)}
                      className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                    >
                      <Zap className="w-4 h-4 mr-2" />
                      Use This Stock in Calculator
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}