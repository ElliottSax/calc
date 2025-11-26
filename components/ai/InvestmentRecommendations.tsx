"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Brain, Sparkles, TrendingUp, Shield, Target, Zap, Star, AlertTriangle, CheckCircle, ArrowRight, BarChart3 } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

interface InvestmentProfile {
  riskTolerance: 'conservative' | 'moderate' | 'aggressive'
  investmentGoal: 'income' | 'growth' | 'balanced'
  timeHorizon: number // years
  currentAge: number
  monthlyInvestment: number
  experience: 'beginner' | 'intermediate' | 'advanced'
}

interface AIRecommendation {
  id: string
  title: string
  description: string
  strategy: string
  expectedReturn: number
  riskLevel: number
  timeframe: string
  pros: string[]
  cons: string[]
  confidence: number
  stockPicks: Array<{
    symbol: string
    name: string
    allocation: number
    reason: string
    yield: number
    risk: 'low' | 'medium' | 'high'
  }>
}

interface InvestmentRecommendationsProps {
  profile?: Partial<InvestmentProfile>
  currentPortfolioValue?: number
  className?: string
}

export function InvestmentRecommendations({ 
  profile = {}, 
  currentPortfolioValue = 0,
  className 
}: InvestmentRecommendationsProps) {
  const [recommendations, setRecommendations] = useState<AIRecommendation[]>([])
  const [loading, setLoading] = useState(false)
  const [selectedRec, setSelectedRec] = useState<string | null>(null)
  const [analysisComplete, setAnalysisComplete] = useState(false)

  // Mock AI analysis
  useEffect(() => {
    generateRecommendations()
  }, [profile, currentPortfolioValue])

  const generateRecommendations = async () => {
    setLoading(true)
    
    // Simulate AI processing time
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    const mockRecommendations = getMockRecommendations(profile as InvestmentProfile)
    setRecommendations(mockRecommendations)
    setAnalysisComplete(true)
    setLoading(false)
  }

  const getMockRecommendations = (userProfile: InvestmentProfile): AIRecommendation[] => {
    const baseRecommendations: AIRecommendation[] = [
      {
        id: 'dividend_aristocrats',
        title: 'Dividend Aristocrats Strategy',
        description: 'Focus on S&P 500 companies with 25+ years of consecutive dividend increases',
        strategy: 'Buy and hold blue-chip dividend-paying stocks with proven track records',
        expectedReturn: 8.5,
        riskLevel: 3,
        timeframe: '10+ years',
        pros: [
          'Proven dividend growth track record',
          'Lower volatility than growth stocks',
          'Inflation protection through growing dividends',
          'Quality companies with strong fundamentals'
        ],
        cons: [
          'May lag in bull markets',
          'Sector concentration risk',
          'Interest rate sensitivity'
        ],
        confidence: 92,
        stockPicks: [
          {
            symbol: 'JNJ',
            name: 'Johnson & Johnson',
            allocation: 20,
            reason: 'Healthcare defensive play with 61 years of dividend increases',
            yield: 3.05,
            risk: 'low'
          },
          {
            symbol: 'KO',
            name: 'Coca-Cola',
            allocation: 15,
            reason: 'Consumer staple with global brand moat',
            yield: 3.15,
            risk: 'low'
          },
          {
            symbol: 'PG',
            name: 'Procter & Gamble',
            allocation: 15,
            reason: 'Essential consumer products with pricing power',
            yield: 2.34,
            risk: 'low'
          }
        ]
      },
      {
        id: 'high_yield_dividend',
        title: 'High-Yield Income Strategy',
        description: 'Target REITs, utilities, and high-dividend stocks for maximum income',
        strategy: 'Focus on current income with yields above 5%',
        expectedReturn: 9.2,
        riskLevel: 5,
        timeframe: '5-10 years',
        pros: [
          'High current income',
          'Monthly/quarterly cash flow',
          'Inflation hedge through real assets',
          'Diversified across sectors'
        ],
        cons: [
          'Higher volatility',
          'Interest rate risk',
          'Potential dividend cuts during recessions',
          'Tax implications on high income'
        ],
        confidence: 78,
        stockPicks: [
          {
            symbol: 'REALTY',
            name: 'Realty Income Corp',
            allocation: 25,
            reason: 'Monthly dividend REIT with strong tenant base',
            yield: 5.64,
            risk: 'medium'
          },
          {
            symbol: 'T',
            name: 'AT&T Inc.',
            allocation: 20,
            reason: 'Telecommunications utility with high yield',
            yield: 7.1,
            risk: 'high'
          }
        ]
      },
      {
        id: 'growth_dividend',
        title: 'Dividend Growth Strategy',
        description: 'Blend of dividend growth and capital appreciation potential',
        strategy: 'Target companies with strong dividend growth rates and business expansion',
        expectedReturn: 11.8,
        riskLevel: 6,
        timeframe: '15+ years',
        pros: [
          'Higher total return potential',
          'Growing income stream',
          'Exposure to innovative companies',
          'Long-term wealth building'
        ],
        cons: [
          'Higher volatility',
          'Lower starting yield',
          'Requires patience',
          'Market timing risk'
        ],
        confidence: 85,
        stockPicks: [
          {
            symbol: 'MSFT',
            name: 'Microsoft Corporation',
            allocation: 30,
            reason: 'Technology leader with growing dividend and strong moat',
            yield: 0.79,
            risk: 'medium'
          },
          {
            symbol: 'AAPL',
            name: 'Apple Inc.',
            allocation: 25,
            reason: 'Capital return program with share buybacks and dividends',
            yield: 0.51,
            risk: 'medium'
          }
        ]
      }
    ]

    // Filter and customize based on user profile
    return baseRecommendations.map(rec => ({
      ...rec,
      confidence: rec.confidence * (0.8 + Math.random() * 0.4) // Add some variance
    })).sort((a, b) => b.confidence - a.confidence)
  }

  const getRiskColor = (level: number): string => {
    if (level <= 3) return 'text-green-400'
    if (level <= 6) return 'text-yellow-400'
    return 'text-red-400'
  }

  const getRiskLabel = (level: number): string => {
    if (level <= 3) return 'Low Risk'
    if (level <= 6) return 'Medium Risk'
    return 'High Risk'
  }

  return (
    <div className={`space-y-6 ${className}`}>
      {/* AI Analysis Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-4"
      >
        <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full border border-purple-500/30">
          <Brain className="w-4 h-4 text-purple-400 mr-2" />
          <span className="text-purple-300 text-sm font-medium">AI-Powered Analysis</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-purple-100 bg-clip-text text-transparent">
          Personalized Investment Strategies
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Our AI analyzes market conditions, your risk profile, and historical data to recommend 
          optimal dividend investment strategies tailored specifically for you.
        </p>
      </motion.div>

      {/* Loading State */}
      <AnimatePresence>
        {loading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-center py-12"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center"
            >
              <Brain className="w-8 h-8 text-white" />
            </motion.div>
            <h3 className="text-xl font-semibold text-white mb-2">AI Analysis in Progress</h3>
            <p className="text-gray-400">Analyzing market data and generating personalized recommendations...</p>
            <div className="mt-6 max-w-md mx-auto space-y-2">
              <div className="text-sm text-gray-400">Processing your investment profile...</div>
              <Progress value={33} className="h-2" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Recommendations */}
      <AnimatePresence>
        {analysisComplete && recommendations.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            {/* AI Insights Summary */}
            <Card className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 border-purple-500/30 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-purple-400" />
                  AI Insights Summary
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                  <div className="p-4 bg-white/10 rounded-lg">
                    <div className="text-2xl font-bold text-purple-400">{recommendations.length}</div>
                    <div className="text-gray-300 text-sm">Strategies Analyzed</div>
                  </div>
                  <div className="p-4 bg-white/10 rounded-lg">
                    <div className="text-2xl font-bold text-blue-400">
                      {Math.max(...recommendations.map(r => r.confidence)).toFixed(0)}%
                    </div>
                    <div className="text-gray-300 text-sm">Max Confidence</div>
                  </div>
                  <div className="p-4 bg-white/10 rounded-lg">
                    <div className="text-2xl font-bold text-green-400">
                      {(recommendations.reduce((sum, r) => sum + r.expectedReturn, 0) / recommendations.length).toFixed(1)}%
                    </div>
                    <div className="text-gray-300 text-sm">Avg Expected Return</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Strategy Recommendations */}
            <div className="space-y-4">
              {recommendations.map((rec, index) => (
                <motion.div
                  key={rec.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className={`bg-slate-800/50 backdrop-blur-sm border-slate-600 transition-all duration-300 hover:border-purple-500/50 cursor-pointer ${
                    selectedRec === rec.id ? 'border-purple-500 bg-purple-500/10' : ''
                  }`}>
                    <CardHeader
                      onClick={() => setSelectedRec(selectedRec === rec.id ? null : rec.id)}
                      className="cursor-pointer"
                    >
                      <div className="flex justify-between items-start">
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <CardTitle className="text-xl text-white">{rec.title}</CardTitle>
                            <Badge className="bg-purple-500 text-white">
                              AI Recommended
                            </Badge>
                          </div>
                          <p className="text-gray-300">{rec.description}</p>
                        </div>
                        <div className="text-right space-y-2">
                          <div className="text-2xl font-bold text-green-400">
                            {rec.expectedReturn.toFixed(1)}%
                          </div>
                          <div className="text-sm text-gray-400">Expected Return</div>
                          <div className={`text-sm font-medium ${getRiskColor(rec.riskLevel)}`}>
                            {getRiskLabel(rec.riskLevel)}
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between pt-4">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-2">
                            <Star className="w-4 h-4 text-yellow-400" />
                            <span className="text-white font-medium">{rec.confidence}% Confidence</span>
                          </div>
                          <div className="text-gray-400">
                            {rec.timeframe}
                          </div>
                        </div>
                        <Button variant="outline" size="sm" className="border-slate-600 text-gray-300">
                          {selectedRec === rec.id ? 'Hide Details' : 'View Details'}
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </div>
                    </CardHeader>

                    <AnimatePresence>
                      {selectedRec === rec.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                        >
                          <CardContent className="border-t border-slate-600 pt-6 space-y-6">
                            {/* Strategy Details */}
                            <div className="grid md:grid-cols-2 gap-6">
                              <div>
                                <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                                  <CheckCircle className="w-5 h-5 text-green-400" />
                                  Advantages
                                </h4>
                                <ul className="space-y-2">
                                  {rec.pros.map((pro, idx) => (
                                    <li key={idx} className="flex items-start gap-2 text-gray-300">
                                      <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 flex-shrink-0" />
                                      <span className="text-sm">{pro}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              
                              <div>
                                <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                                  <AlertTriangle className="w-5 h-5 text-yellow-400" />
                                  Considerations
                                </h4>
                                <ul className="space-y-2">
                                  {rec.cons.map((con, idx) => (
                                    <li key={idx} className="flex items-start gap-2 text-gray-300">
                                      <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full mt-2 flex-shrink-0" />
                                      <span className="text-sm">{con}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>

                            {/* Stock Picks */}
                            <div>
                              <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                                <Target className="w-5 h-5 text-blue-400" />
                                AI-Selected Holdings
                              </h4>
                              <div className="grid gap-4">
                                {rec.stockPicks.map((pick, idx) => (
                                  <motion.div
                                    key={pick.symbol}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="p-4 bg-slate-700/50 rounded-lg"
                                  >
                                    <div className="flex justify-between items-start mb-2">
                                      <div>
                                        <h5 className="font-semibold text-white">{pick.symbol}</h5>
                                        <p className="text-sm text-gray-300">{pick.name}</p>
                                      </div>
                                      <div className="text-right">
                                        <div className="text-lg font-bold text-green-400">{pick.allocation}%</div>
                                        <div className="text-sm text-gray-400">Allocation</div>
                                      </div>
                                    </div>
                                    <p className="text-sm text-gray-300 mb-2">{pick.reason}</p>
                                    <div className="flex justify-between items-center text-sm">
                                      <span className="text-blue-400">Yield: {pick.yield.toFixed(2)}%</span>
                                      <Badge 
                                        variant="outline"
                                        className={`${
                                          pick.risk === 'low' ? 'border-green-500 text-green-400' :
                                          pick.risk === 'medium' ? 'border-yellow-500 text-yellow-400' :
                                          'border-red-500 text-red-400'
                                        }`}
                                      >
                                        {pick.risk.toUpperCase()} RISK
                                      </Badge>
                                    </div>
                                  </motion.div>
                                ))}
                              </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex gap-3 pt-4 border-t border-slate-600">
                              <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white">
                                <Zap className="w-4 h-4 mr-2" />
                                Apply This Strategy
                              </Button>
                              <Button variant="outline" className="border-slate-600 text-gray-300">
                                <BarChart3 className="w-4 h-4 mr-2" />
                                Backtest Performance
                              </Button>
                            </div>
                          </CardContent>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}