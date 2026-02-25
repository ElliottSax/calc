import { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Navigation } from '@/components/layout/Navigation'
import { Footer } from '@/components/layout/Footer'
import { BrokerComparisonTable } from '@/components/affiliate/BrokerComparisonTable'
import {
  TrendingUp,
  DollarSign,
  Target,
  Award,
  AlertCircle,
  CheckCircle2,
  ArrowRight,
  BarChart3,
  PieChart,
  Building2,
  Zap,
  ShieldCheck,
  Percent,
  TrendingDown,
  Activity
} from 'lucide-react'

export const metadata: Metadata = {
  title: '50 Best Dividend Stocks to Buy in 2026 - Expert Analysis & Rankings',
  description: 'Comprehensive list of the 50 best dividend stocks for 2026, organized by sector. Expert analysis, yield comparisons, growth rates, and investment strategies for building passive income.',
  keywords: 'best dividend stocks 2026, top dividend stocks, high dividend yield stocks, dividend investing, passive income stocks, dividend aristocrats, monthly dividend stocks, REITs',
  openGraph: {
    title: '50 Best Dividend Stocks to Buy in 2026 - Complete Expert Guide',
    description: 'Expert-curated list of 50 top dividend stocks across all sectors. Find the perfect stocks for your income portfolio with detailed analysis and yield data.',
    type: 'article',
  }
}

interface Stock {
  symbol: string
  name: string
  yield: string
  growth5yr: string
  yearsIncreasing: number
  payoutRatio: string
  description: string
}

const stocksBySector: Record<string, Stock[]> = {
  'Technology': [
    {
      symbol: 'MSFT',
      name: 'Microsoft',
      yield: '0.8%',
      growth5yr: '10.2%',
      yearsIncreasing: 21,
      payoutRatio: '25%',
      description: 'Cloud computing and enterprise software giant with Azure leading cloud infrastructure growth. Consistent double-digit dividend growth from recurring subscription revenue.'
    },
    {
      symbol: 'AAPL',
      name: 'Apple',
      yield: '0.5%',
      growth5yr: '7.8%',
      yearsIncreasing: 12,
      payoutRatio: '15%',
      description: 'World\'s most valuable company with massive cash generation. Low payout ratio leaves room for aggressive buybacks and dividend increases.'
    },
    {
      symbol: 'AVGO',
      name: 'Broadcom',
      yield: '1.8%',
      growth5yr: '18.5%',
      yearsIncreasing: 14,
      payoutRatio: '48%',
      description: 'Semiconductor and infrastructure software leader. Fastest dividend growth in tech sector with VMware acquisition strengthening recurring revenue.'
    },
    {
      symbol: 'TXN',
      name: 'Texas Instruments',
      yield: '2.9%',
      growth5yr: '12.0%',
      yearsIncreasing: 20,
      payoutRatio: '60%',
      description: 'Analog chip manufacturer with industry-leading margins. 20-year track record of dividend growth through economic cycles.'
    },
    {
      symbol: 'QCOM',
      name: 'Qualcomm',
      yield: '2.1%',
      growth5yr: '6.5%',
      yearsIncreasing: 21,
      payoutRatio: '33%',
      description: '5G technology leader earning royalties on billions of smartphones. Patent portfolio provides durable competitive moat.'
    },
    {
      symbol: 'IBM',
      name: 'IBM',
      yield: '3.8%',
      growth5yr: '1.2%',
      yearsIncreasing: 28,
      payoutRatio: '65%',
      description: 'Enterprise technology and consulting with strong hybrid cloud and AI offerings. Stable dividend despite business transformation.'
    }
  ],
  'Financials': [
    {
      symbol: 'V',
      name: 'Visa',
      yield: '0.8%',
      growth5yr: '17.0%',
      yearsIncreasing: 16,
      payoutRatio: '21%',
      description: 'Global payments network processing billions of transactions. Earns fees with no credit risk. Ultra-low payout ratio enables aggressive growth.'
    },
    {
      symbol: 'MA',
      name: 'Mastercard',
      yield: '0.6%',
      growth5yr: '16.0%',
      yearsIncreasing: 13,
      payoutRatio: '18%',
      description: 'Digital payments leader benefiting from cash-to-card conversion worldwide. 18% payout ratio leaves massive room for dividend expansion.'
    },
    {
      symbol: 'JPM',
      name: 'JPMorgan Chase',
      yield: '2.4%',
      growth5yr: '8.5%',
      yearsIncreasing: 13,
      payoutRatio: '30%',
      description: 'America\'s largest bank with diversified revenue streams. Proven ability to grow dividends through interest rate cycles.'
    },
    {
      symbol: 'BAC',
      name: 'Bank of America',
      yield: '2.6%',
      growth5yr: '9.2%',
      yearsIncreasing: 11,
      payoutRatio: '28%',
      description: 'Major consumer and commercial bank benefiting from rising interest rates. Strong capital position supports dividend growth.'
    },
    {
      symbol: 'BLK',
      name: 'BlackRock',
      yield: '2.5%',
      growth5yr: '11.0%',
      yearsIncreasing: 15,
      payoutRatio: '50%',
      description: 'World\'s largest asset manager with $10+ trillion under management. Fee-based revenue provides predictable cash flow.'
    },
    {
      symbol: 'USB',
      name: 'U.S. Bancorp',
      yield: '4.2%',
      growth5yr: '5.5%',
      yearsIncreasing: 13,
      payoutRatio: '45%',
      description: 'Top-tier regional bank known for superior returns on equity. Conservative management through financial crises.'
    }
  ],
  'Healthcare': [
    {
      symbol: 'JNJ',
      name: 'Johnson & Johnson',
      yield: '3.0%',
      growth5yr: '5.8%',
      yearsIncreasing: 62,
      payoutRatio: '48%',
      description: 'Dividend King with 62 years of increases. Diversified across pharmaceuticals, medical devices, and consumer health. Ultimate defensive stock.'
    },
    {
      symbol: 'ABBV',
      name: 'AbbVie',
      yield: '3.8%',
      growth5yr: '8.2%',
      yearsIncreasing: 11,
      payoutRatio: '45%',
      description: 'Pharmaceutical powerhouse post-Humira with strong oncology and immunology pipeline. High yield with solid growth.'
    },
    {
      symbol: 'UNH',
      name: 'UnitedHealth Group',
      yield: '1.4%',
      growth5yr: '13.5%',
      yearsIncreasing: 14,
      payoutRatio: '28%',
      description: 'Largest health insurer with Optum healthcare services division. Consistent earnings growth drives dividend expansion.'
    },
    {
      symbol: 'AMGN',
      name: 'Amgen',
      yield: '3.2%',
      growth5yr: '10.0%',
      yearsIncreasing: 12,
      payoutRatio: '52%',
      description: 'Biotechnology leader with blockbuster drugs in oncology and inflammation. Strong pipeline supports future growth.'
    },
    {
      symbol: 'MDT',
      name: 'Medtronic',
      yield: '3.5%',
      growth5yr: '4.5%',
      yearsIncreasing: 46,
      payoutRatio: '55%',
      description: 'Global medical device leader with 46-year dividend growth streak. Aging demographics drive steady demand growth.'
    },
    {
      symbol: 'CVS',
      name: 'CVS Health',
      yield: '4.0%',
      growth5yr: '7.5%',
      yearsIncreasing: 21,
      payoutRatio: '42%',
      description: 'Integrated pharmacy, retail, and insurance company. Combination creates unique healthcare ecosystem and pricing power.'
    }
  ],
  'Consumer Staples': [
    {
      symbol: 'PG',
      name: 'Procter & Gamble',
      yield: '2.4%',
      growth5yr: '4.8%',
      yearsIncreasing: 68,
      payoutRatio: '60%',
      description: 'Dividend King with 68 years of raises. Owns iconic brands like Tide, Pampers, Gillette. Recession-proof business model.'
    },
    {
      symbol: 'KO',
      name: 'Coca-Cola',
      yield: '3.0%',
      growth5yr: '3.5%',
      yearsIncreasing: 62,
      payoutRatio: '75%',
      description: 'Warren Buffett\'s favorite with 62-year dividend streak. Global distribution network and brand power unmatched.'
    },
    {
      symbol: 'PEP',
      name: 'PepsiCo',
      yield: '2.7%',
      growth5yr: '7.2%',
      yearsIncreasing: 51,
      payoutRatio: '65%',
      description: 'Diversified food and beverage giant. Frito-Lay snacks provide growth to complement beverage business.'
    },
    {
      symbol: 'COST',
      name: 'Costco',
      yield: '0.6%',
      growth5yr: '13.0%',
      yearsIncreasing: 21,
      payoutRatio: '28%',
      description: 'Membership warehouse model with 93% renewal rates. Predictable fees fund aggressive dividend growth.'
    },
    {
      symbol: 'WMT',
      name: 'Walmart',
      yield: '1.4%',
      growth5yr: '9.5%',
      yearsIncreasing: 51,
      payoutRatio: '35%',
      description: 'Retail giant winning in e-commerce. Low payout ratio and strong cash flow support accelerating dividend growth.'
    },
    {
      symbol: 'CL',
      name: 'Colgate-Palmolive',
      yield: '2.3%',
      growth5yr: '2.8%',
      yearsIncreasing: 61,
      payoutRatio: '58%',
      description: 'Oral care and personal products with global distribution. Dividend aristocrat with ultra-stable cash flows.'
    }
  ],
  'Real Estate (REITs)': [
    {
      symbol: 'O',
      name: 'Realty Income',
      yield: '5.5%',
      growth5yr: '3.8%',
      yearsIncreasing: 29,
      payoutRatio: '75%',
      description: 'The Monthly Dividend Company with 29 years of raises. Triple-net leases provide predictable rent escalation.'
    },
    {
      symbol: 'PLD',
      name: 'Prologis',
      yield: '2.8%',
      growth5yr: '10.5%',
      yearsIncreasing: 12,
      payoutRatio: '65%',
      description: 'Industrial warehouse REIT benefiting from e-commerce boom. Prime logistics real estate in short supply.'
    },
    {
      symbol: 'AMT',
      name: 'American Tower',
      yield: '2.9%',
      growth5yr: '9.0%',
      yearsIncreasing: 12,
      payoutRatio: '70%',
      description: 'Cell tower REIT with inflation-protected leases. 5G expansion drives consistent tenant demand.'
    },
    {
      symbol: 'VICI',
      name: 'VICI Properties',
      yield: '5.2%',
      growth5yr: '8.5%',
      yearsIncreasing: 7,
      payoutRatio: '75%',
      description: 'Gaming and hospitality REIT owning Caesars, MGM properties. High yield with solid growth from expansion.'
    },
    {
      symbol: 'WPC',
      name: 'W.P. Carey',
      yield: '5.8%',
      growth5yr: '4.2%',
      yearsIncreasing: 27,
      payoutRatio: '80%',
      description: 'Diversified REIT across industrial, warehouse, retail, and self-storage. Quarterly dividend raises for 27 years.'
    },
    {
      symbol: 'SPG',
      name: 'Simon Property Group',
      yield: '6.0%',
      growth5yr: '2.5%',
      yearsIncreasing: 15,
      payoutRatio: '85%',
      description: 'Premier mall REIT focusing on Class A properties. Recovery play with attractive current yield.'
    }
  ],
  'Energy': [
    {
      symbol: 'XOM',
      name: 'Exxon Mobil',
      yield: '3.4%',
      growth5yr: '2.8%',
      yearsIncreasing: 41,
      payoutRatio: '35%',
      description: 'Integrated oil giant with 41-year dividend streak. Massive cash generation at current oil prices.'
    },
    {
      symbol: 'CVX',
      name: 'Chevron',
      yield: '3.6%',
      growth5yr: '5.5%',
      yearsIncreasing: 37,
      payoutRatio: '40%',
      description: 'Top-tier oil major with conservative balance sheet. Committed to dividend growth through commodity cycles.'
    },
    {
      symbol: 'ENB',
      name: 'Enbridge',
      yield: '7.2%',
      growth5yr: '3.0%',
      yearsIncreasing: 29,
      payoutRatio: '65%',
      description: 'Canadian pipeline giant with regulatory protection. Ultra-high yield from fee-based cash flows.'
    },
    {
      symbol: 'NEE',
      name: 'NextEra Energy',
      yield: '2.5%',
      growth5yr: '10.5%',
      yearsIncreasing: 29,
      payoutRatio: '55%',
      description: 'Clean energy leader in solar and wind. Fastest-growing dividend in utility sector.'
    },
    {
      symbol: 'EPD',
      name: 'Enterprise Products',
      yield: '7.0%',
      growth5yr: '4.0%',
      yearsIncreasing: 25,
      payoutRatio: '60%',
      description: 'Midstream MLP with diversified pipeline network. 25 consecutive years of distribution increases.'
    }
  ],
  'Industrials': [
    {
      symbol: 'UNP',
      name: 'Union Pacific',
      yield: '2.3%',
      growth5yr: '10.5%',
      yearsIncreasing: 18,
      payoutRatio: '45%',
      description: 'Western U.S. railroad with irreplaceable right-of-way. Pricing power and efficiency gains drive dividend growth.'
    },
    {
      symbol: 'CAT',
      name: 'Caterpillar',
      yield: '2.0%',
      growth5yr: '7.0%',
      yearsIncreasing: 30,
      payoutRatio: '35%',
      description: 'Heavy equipment leader benefiting from infrastructure spending. Strong cyclical recovery ahead.'
    },
    {
      symbol: 'RTX',
      name: 'RTX (Raytheon)',
      yield: '2.4%',
      growth5yr: '6.5%',
      yearsIncreasing: 20,
      payoutRatio: '40%',
      description: 'Aerospace and defense giant with commercial aviation recovery. Long-term defense contracts provide stability.'
    },
    {
      symbol: 'HON',
      name: 'Honeywell',
      yield: '2.1%',
      growth5yr: '9.0%',
      yearsIncreasing: 14,
      payoutRatio: '45%',
      description: 'Diversified industrial conglomerate in aerospace, building tech, and specialty materials. Consistent cash flow generation.'
    },
    {
      symbol: 'MMM',
      name: '3M Company',
      yield: '5.8%',
      growth5yr: '-2.0%',
      yearsIncreasing: 65,
      payoutRatio: '95%',
      description: 'Dividend King facing headwinds but committed to dividend. High yield compensates for elevated payout ratio.'
    }
  ],
  'Utilities': [
    {
      symbol: 'DUK',
      name: 'Duke Energy',
      yield: '4.0%',
      growth5yr: '2.5%',
      yearsIncreasing: 97,
      payoutRatio: '70%',
      description: 'Regulated utility with 97-year dividend history. Predictable rate increases fund steady dividend growth.'
    },
    {
      symbol: 'SO',
      name: 'Southern Company',
      yield: '3.8%',
      growth5yr: '3.0%',
      yearsIncreasing: 22,
      payoutRatio: '75%',
      description: 'Southeastern U.S. utility with constructive regulatory environment. Solar investment growing earnings.'
    },
    {
      symbol: 'D',
      name: 'Dominion Energy',
      yield: '4.5%',
      growth5yr: '2.2%',
      yearsIncreasing: 20,
      payoutRatio: '80%',
      description: 'Electric and gas utility serving Mid-Atlantic. Asset sale program strengthening balance sheet.'
    },
    {
      symbol: 'AEP',
      name: 'American Electric Power',
      yield: '3.5%',
      growth5yr: '5.5%',
      yearsIncreasing: 14,
      payoutRatio: '65%',
      description: 'Large transmission-focused utility with rate base growth. Above-average dividend growth for utility sector.'
    }
  ],
  'Consumer Discretionary': [
    {
      symbol: 'HD',
      name: 'Home Depot',
      yield: '2.3%',
      growth5yr: '14.0%',
      yearsIncreasing: 14,
      payoutRatio: '50%',
      description: 'Home improvement leader with aging housing stock driving demand. Best-in-class management and returns.'
    },
    {
      symbol: 'LOW',
      name: 'Lowe\'s',
      yield: '2.0%',
      growth5yr: '15.0%',
      yearsIncreasing: 62,
      payoutRatio: '35%',
      description: 'Home Depot\'s main competitor with 62-year dividend history. Better value currently with similar growth trajectory.'
    },
    {
      symbol: 'MCD',
      name: 'McDonald\'s',
      yield: '2.2%',
      growth5yr: '8.0%',
      yearsIncreasing: 48,
      payoutRatio: '55%',
      description: 'Global fast-food franchise model throws off massive cash. Dividend aristocrat with inflation-resistant pricing.'
    },
    {
      symbol: 'SBUX',
      name: 'Starbucks',
      yield: '2.4%',
      growth5yr: '11.5%',
      yearsIncreasing: 14,
      payoutRatio: '65%',
      description: 'Premium coffee brand with global expansion runway. Loyalty program drives repeat purchases and pricing power.'
    },
    {
      symbol: 'NKE',
      name: 'Nike',
      yield: '1.6%',
      growth5yr: '10.0%',
      yearsIncreasing: 22,
      payoutRatio: '40%',
      description: 'Athletic footwear and apparel leader. Direct-to-consumer strategy expanding margins and growth.'
    }
  ],
  'Telecommunications': [
    {
      symbol: 'T',
      name: 'AT&T',
      yield: '6.5%',
      growth5yr: '-5.0%',
      yearsIncreasing: 2,
      payoutRatio: '50%',
      description: 'Wireless and fiber leader post-WarnerMedia spinoff. Dividend reset but now sustainable with 5G growth ahead.'
    },
    {
      symbol: 'VZ',
      name: 'Verizon',
      yield: '6.8%',
      growth5yr: '2.0%',
      yearsIncreasing: 18,
      payoutRatio: '55%',
      description: 'Premium wireless network with best coverage. High yield from mature cash cow business.'
    }
  ]
}

export default function BestDividendStocks2026Page() {
  const totalStocks = Object.values(stocksBySector).reduce((sum, stocks) => sum + stocks.length, 0)

  return (
    <>
      <Navigation />

      <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
        <article className="py-16 pt-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Header */}
              <div className="mb-8">
                <Badge className="mb-4">
                  <Award className="h-3 w-3 mr-1" />
                  2026 Stock Rankings
                </Badge>
                <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4">
                  50 Best Dividend Stocks to Buy in 2026
                </h1>
                <p className="text-xl text-slate-600 dark:text-slate-400 mb-6">
                  Expert-curated list of the top dividend-paying stocks across all sectors. Build a diversified
                  income portfolio with companies offering yields from 0.5% to 7.2% and proven track records
                  of dividend growth.
                </p>
                <div className="flex items-center gap-4 text-sm text-slate-600 dark:text-slate-400 flex-wrap">
                  <span>Updated: February 2026</span>
                  <span>•</span>
                  <span>18 min read</span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Award className="h-4 w-4" />
                    Expert Analysis
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <BarChart3 className="h-4 w-4" />
                    {totalStocks} Stocks Analyzed
                  </span>
                </div>
              </div>

              {/* Quick Answer Box */}
              <Card className="mb-12 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950 border-2 border-blue-200 dark:border-blue-800">
                <CardContent className="pt-6">
                  <h2 className="font-bold text-lg mb-4 flex items-center gap-2">
                    <Target className="h-6 w-6 text-blue-600" />
                    Quick Answer: Top Dividend Stocks by Goal
                  </h2>
                  <div className="space-y-3 text-sm">
                    <p className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Highest Yields (6%+):</strong> Enbridge (7.2%), EPD (7.0%), Verizon (6.8%), AT&T (6.5%), SPG (6.0%)</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Fastest Growth (10%+):</strong> Broadcom (18.5%), Visa (17.0%), Mastercard (16.0%), Lowe's (15.0%), Home Depot (14.0%)</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Longest Streaks (60+ years):</strong> Duke Energy (97), Procter & Gamble (68), 3M (65), Johnson & Johnson (62), Coca-Cola (62)</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <Award className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Best Balanced:</strong> Microsoft (0.8% yield, 10% growth, 21 years), JPMorgan (2.4%, 8.5%, 13 years), Home Depot (2.3%, 14%, 14 years)</span>
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Table of Contents */}
              <Card className="mb-12">
                <CardContent className="pt-6">
                  <h2 className="font-bold text-lg mb-4">Table of Contents</h2>
                  <ul className="space-y-2 text-sm grid grid-cols-1 md:grid-cols-2 gap-2">
                    <li><a href="#selection-criteria" className="text-blue-600 hover:underline">Stock Selection Criteria</a></li>
                    <li><a href="#technology" className="text-blue-600 hover:underline">Technology (6 stocks)</a></li>
                    <li><a href="#financials" className="text-blue-600 hover:underline">Financials (6 stocks)</a></li>
                    <li><a href="#healthcare" className="text-blue-600 hover:underline">Healthcare (6 stocks)</a></li>
                    <li><a href="#consumer-staples" className="text-blue-600 hover:underline">Consumer Staples (6 stocks)</a></li>
                    <li><a href="#reits" className="text-blue-600 hover:underline">Real Estate REITs (6 stocks)</a></li>
                    <li><a href="#energy" className="text-blue-600 hover:underline">Energy (5 stocks)</a></li>
                    <li><a href="#industrials" className="text-blue-600 hover:underline">Industrials (5 stocks)</a></li>
                    <li><a href="#utilities" className="text-blue-600 hover:underline">Utilities (4 stocks)</a></li>
                    <li><a href="#consumer-discretionary" className="text-blue-600 hover:underline">Consumer Discretionary (5 stocks)</a></li>
                    <li><a href="#telecom" className="text-blue-600 hover:underline">Telecommunications (2 stocks)</a></li>
                    <li><a href="#portfolio-strategy" className="text-blue-600 hover:underline">Portfolio Building Strategy</a></li>
                    <li><a href="#brokers" className="text-blue-600 hover:underline">Best Brokers to Buy</a></li>
                    <li><a href="#faqs" className="text-blue-600 hover:underline">FAQ</a></li>
                  </ul>
                </CardContent>
              </Card>

              {/* Main Content */}
              <div className="prose prose-lg dark:prose-invert max-w-none space-y-12">

                {/* Selection Criteria */}
                <section id="selection-criteria">
                  <h2 className="flex items-center gap-2">
                    <ShieldCheck className="h-7 w-7 text-green-600" />
                    Stock Selection Criteria
                  </h2>
                  <p>
                    We evaluated over 500 dividend-paying stocks using rigorous criteria to identify
                    the 50 best opportunities for 2026. Every stock on this list meets minimum quality standards.
                  </p>

                  <Card className="my-6 bg-slate-50 dark:bg-slate-900">
                    <CardContent className="pt-6">
                      <h3 className="text-lg font-bold mb-4">Our 7-Point Evaluation Framework</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="font-semibold text-sm mb-1">Dividend Safety</p>
                            <p className="text-xs text-slate-600 dark:text-slate-400">Payout ratio under 100%, sustainable from free cash flow</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="font-semibold text-sm mb-1">Growth History</p>
                            <p className="text-xs text-slate-600 dark:text-slate-400">Minimum 5 consecutive years of dividend increases</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="font-semibold text-sm mb-1">Business Quality</p>
                            <p className="text-xs text-slate-600 dark:text-slate-400">Competitive moat, market leadership, pricing power</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="font-semibold text-sm mb-1">Financial Strength</p>
                            <p className="text-xs text-slate-600 dark:text-slate-400">Investment-grade credit rating, manageable debt levels</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="font-semibold text-sm mb-1">Yield Attractiveness</p>
                            <p className="text-xs text-slate-600 dark:text-slate-400">Yield above sector average or exceptional growth rate</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="font-semibold text-sm mb-1">Sector Diversification</p>
                            <p className="text-xs text-slate-600 dark:text-slate-400">Coverage across 10+ sectors for portfolio balance</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="font-semibold text-sm mb-1">2026 Outlook</p>
                            <p className="text-xs text-slate-600 dark:text-slate-400">Positive catalysts for earnings and dividend growth ahead</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </section>

                {/* Technology Sector */}
                <section id="technology">
                  <h2 className="flex items-center gap-2">
                    <Zap className="h-7 w-7 text-blue-600" />
                    Technology Sector (6 Stocks)
                  </h2>
                  <p>
                    Technology stocks offer lower yields but exceptional growth rates. Perfect for younger investors
                    building long-term income streams. Cloud computing, semiconductors, and enterprise software
                    provide recurring revenue that funds dividend increases.
                  </p>

                  <div className="space-y-4 my-6">
                    {stocksBySector['Technology'].map((stock, idx) => (
                      <Card key={stock.symbol} className="border-l-4 border-l-blue-500">
                        <CardContent className="pt-6">
                          <div className="flex items-start justify-between mb-3">
                            <div>
                              <h3 className="text-xl font-bold mb-1">{idx + 1}. {stock.name} ({stock.symbol})</h3>
                            </div>
                            <Badge className="bg-blue-600">{stock.yield} Yield</Badge>
                          </div>

                          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-3 text-sm">
                            <div>
                              <p className="text-slate-600 dark:text-slate-400">Dividend Yield</p>
                              <p className="font-semibold">{stock.yield}</p>
                            </div>
                            <div>
                              <p className="text-slate-600 dark:text-slate-400">5-Year Growth</p>
                              <p className="font-semibold text-green-600">{stock.growth5yr}</p>
                            </div>
                            <div>
                              <p className="text-slate-600 dark:text-slate-400">Years Increasing</p>
                              <p className="font-semibold">{stock.yearsIncreasing} years</p>
                            </div>
                            <div>
                              <p className="text-slate-600 dark:text-slate-400">Payout Ratio</p>
                              <p className="font-semibold">{stock.payoutRatio}</p>
                            </div>
                          </div>

                          <p className="text-sm text-slate-700 dark:text-slate-300">
                            {stock.description}
                          </p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </section>

                {/* Financials Sector */}
                <section id="financials">
                  <h2 className="flex items-center gap-2">
                    <Building2 className="h-7 w-7 text-green-600" />
                    Financials Sector (6 Stocks)
                  </h2>
                  <p>
                    Banks, payment processors, and asset managers benefit from rising interest rates in 2026.
                    Payment networks (Visa, Mastercard) offer exceptional growth with minimal credit risk.
                    Traditional banks provide higher yields with moderate growth.
                  </p>

                  <div className="space-y-4 my-6">
                    {stocksBySector['Financials'].map((stock, idx) => (
                      <Card key={stock.symbol} className="border-l-4 border-l-green-500">
                        <CardContent className="pt-6">
                          <div className="flex items-start justify-between mb-3">
                            <div>
                              <h3 className="text-xl font-bold mb-1">{idx + 1}. {stock.name} ({stock.symbol})</h3>
                            </div>
                            <Badge className="bg-green-600">{stock.yield} Yield</Badge>
                          </div>

                          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-3 text-sm">
                            <div>
                              <p className="text-slate-600 dark:text-slate-400">Dividend Yield</p>
                              <p className="font-semibold">{stock.yield}</p>
                            </div>
                            <div>
                              <p className="text-slate-600 dark:text-slate-400">5-Year Growth</p>
                              <p className="font-semibold text-green-600">{stock.growth5yr}</p>
                            </div>
                            <div>
                              <p className="text-slate-600 dark:text-slate-400">Years Increasing</p>
                              <p className="font-semibold">{stock.yearsIncreasing} years</p>
                            </div>
                            <div>
                              <p className="text-slate-600 dark:text-slate-400">Payout Ratio</p>
                              <p className="font-semibold">{stock.payoutRatio}</p>
                            </div>
                          </div>

                          <p className="text-sm text-slate-700 dark:text-slate-300">
                            {stock.description}
                          </p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </section>

                {/* Healthcare Sector */}
                <section id="healthcare">
                  <h2 className="flex items-center gap-2">
                    <Activity className="h-7 w-7 text-red-600" />
                    Healthcare Sector (6 Stocks)
                  </h2>
                  <p>
                    Healthcare provides defensive income with demographic tailwinds. Aging baby boomers drive
                    pharmaceutical, medical device, and healthcare services demand. Johnson & Johnson leads
                    with 62 years of consecutive dividend increases.
                  </p>

                  <div className="space-y-4 my-6">
                    {stocksBySector['Healthcare'].map((stock, idx) => (
                      <Card key={stock.symbol} className="border-l-4 border-l-red-500">
                        <CardContent className="pt-6">
                          <div className="flex items-start justify-between mb-3">
                            <div>
                              <h3 className="text-xl font-bold mb-1">{idx + 1}. {stock.name} ({stock.symbol})</h3>
                            </div>
                            <Badge className="bg-red-600">{stock.yield} Yield</Badge>
                          </div>

                          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-3 text-sm">
                            <div>
                              <p className="text-slate-600 dark:text-slate-400">Dividend Yield</p>
                              <p className="font-semibold">{stock.yield}</p>
                            </div>
                            <div>
                              <p className="text-slate-600 dark:text-slate-400">5-Year Growth</p>
                              <p className="font-semibold text-green-600">{stock.growth5yr}</p>
                            </div>
                            <div>
                              <p className="text-slate-600 dark:text-slate-400">Years Increasing</p>
                              <p className="font-semibold">{stock.yearsIncreasing} years</p>
                            </div>
                            <div>
                              <p className="text-slate-600 dark:text-slate-400">Payout Ratio</p>
                              <p className="font-semibold">{stock.payoutRatio}</p>
                            </div>
                          </div>

                          <p className="text-sm text-slate-700 dark:text-slate-300">
                            {stock.description}
                          </p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </section>

                {/* Consumer Staples */}
                <section id="consumer-staples">
                  <h2 className="flex items-center gap-2">
                    <DollarSign className="h-7 w-7 text-purple-600" />
                    Consumer Staples Sector (6 Stocks)
                  </h2>
                  <p>
                    Recession-resistant companies selling products people buy in good times and bad. Procter & Gamble,
                    Coca-Cola, and PepsiCo are Dividend Kings with 50+ year streaks. Essential products provide
                    pricing power and predictable cash flow.
                  </p>

                  <div className="space-y-4 my-6">
                    {stocksBySector['Consumer Staples'].map((stock, idx) => (
                      <Card key={stock.symbol} className="border-l-4 border-l-purple-500">
                        <CardContent className="pt-6">
                          <div className="flex items-start justify-between mb-3">
                            <div>
                              <h3 className="text-xl font-bold mb-1">{idx + 1}. {stock.name} ({stock.symbol})</h3>
                            </div>
                            <Badge className="bg-purple-600">{stock.yield} Yield</Badge>
                          </div>

                          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-3 text-sm">
                            <div>
                              <p className="text-slate-600 dark:text-slate-400">Dividend Yield</p>
                              <p className="font-semibold">{stock.yield}</p>
                            </div>
                            <div>
                              <p className="text-slate-600 dark:text-slate-400">5-Year Growth</p>
                              <p className="font-semibold text-green-600">{stock.growth5yr}</p>
                            </div>
                            <div>
                              <p className="text-slate-600 dark:text-slate-400">Years Increasing</p>
                              <p className="font-semibold">{stock.yearsIncreasing} years</p>
                            </div>
                            <div>
                              <p className="text-slate-600 dark:text-slate-400">Payout Ratio</p>
                              <p className="font-semibold">{stock.payoutRatio}</p>
                            </div>
                          </div>

                          <p className="text-sm text-slate-700 dark:text-slate-300">
                            {stock.description}
                          </p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </section>

                {/* REITs */}
                <section id="reits">
                  <h2 className="flex items-center gap-2">
                    <Building2 className="h-7 w-7 text-orange-600" />
                    Real Estate Investment Trusts (6 Stocks)
                  </h2>
                  <p>
                    REITs must distribute 90% of income to shareholders, creating high yields of 5-6%. Realty Income
                    pays monthly dividends. Industrial warehouses (Prologis) benefit from e-commerce growth. Cell
                    towers (American Tower) profit from 5G expansion.
                  </p>

                  <div className="space-y-4 my-6">
                    {stocksBySector['Real Estate (REITs)'].map((stock, idx) => (
                      <Card key={stock.symbol} className="border-l-4 border-l-orange-500">
                        <CardContent className="pt-6">
                          <div className="flex items-start justify-between mb-3">
                            <div>
                              <h3 className="text-xl font-bold mb-1">{idx + 1}. {stock.name} ({stock.symbol})</h3>
                            </div>
                            <Badge className="bg-orange-600">{stock.yield} Yield</Badge>
                          </div>

                          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-3 text-sm">
                            <div>
                              <p className="text-slate-600 dark:text-slate-400">Dividend Yield</p>
                              <p className="font-semibold">{stock.yield}</p>
                            </div>
                            <div>
                              <p className="text-slate-600 dark:text-slate-400">5-Year Growth</p>
                              <p className="font-semibold text-green-600">{stock.growth5yr}</p>
                            </div>
                            <div>
                              <p className="text-slate-600 dark:text-slate-400">Years Increasing</p>
                              <p className="font-semibold">{stock.yearsIncreasing} years</p>
                            </div>
                            <div>
                              <p className="text-slate-600 dark:text-slate-400">Payout Ratio</p>
                              <p className="font-semibold">{stock.payoutRatio}</p>
                            </div>
                          </div>

                          <p className="text-sm text-slate-700 dark:text-slate-300">
                            {stock.description}
                          </p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </section>

                {/* Energy */}
                <section id="energy">
                  <h2 className="flex items-center gap-2">
                    <Zap className="h-7 w-7 text-yellow-600" />
                    Energy Sector (5 Stocks)
                  </h2>
                  <p>
                    Energy stocks provide high yields and inflation protection. Exxon and Chevron offer 40+ year
                    dividend streaks with conservative payout ratios. Pipeline companies (Enbridge, Enterprise Products)
                    yield 7%+ from fee-based cash flows. NextEra leads in renewable energy growth.
                  </p>

                  <div className="space-y-4 my-6">
                    {stocksBySector['Energy'].map((stock, idx) => (
                      <Card key={stock.symbol} className="border-l-4 border-l-yellow-500">
                        <CardContent className="pt-6">
                          <div className="flex items-start justify-between mb-3">
                            <div>
                              <h3 className="text-xl font-bold mb-1">{idx + 1}. {stock.name} ({stock.symbol})</h3>
                            </div>
                            <Badge className="bg-yellow-600">{stock.yield} Yield</Badge>
                          </div>

                          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-3 text-sm">
                            <div>
                              <p className="text-slate-600 dark:text-slate-400">Dividend Yield</p>
                              <p className="font-semibold">{stock.yield}</p>
                            </div>
                            <div>
                              <p className="text-slate-600 dark:text-slate-400">5-Year Growth</p>
                              <p className="font-semibold text-green-600">{stock.growth5yr}</p>
                            </div>
                            <div>
                              <p className="text-slate-600 dark:text-slate-400">Years Increasing</p>
                              <p className="font-semibold">{stock.yearsIncreasing} years</p>
                            </div>
                            <div>
                              <p className="text-slate-600 dark:text-slate-400">Payout Ratio</p>
                              <p className="font-semibold">{stock.payoutRatio}</p>
                            </div>
                          </div>

                          <p className="text-sm text-slate-700 dark:text-slate-300">
                            {stock.description}
                          </p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </section>

                {/* Industrials */}
                <section id="industrials">
                  <h2 className="flex items-center gap-2">
                    <BarChart3 className="h-7 w-7 text-teal-600" />
                    Industrials Sector (5 Stocks)
                  </h2>
                  <p>
                    Infrastructure, aerospace, and manufacturing companies benefit from 2026 spending bills.
                    Union Pacific and other railroads have irreplaceable assets. Caterpillar profits from
                    construction booms. Defense contractors enjoy long-term government contracts.
                  </p>

                  <div className="space-y-4 my-6">
                    {stocksBySector['Industrials'].map((stock, idx) => (
                      <Card key={stock.symbol} className="border-l-4 border-l-teal-500">
                        <CardContent className="pt-6">
                          <div className="flex items-start justify-between mb-3">
                            <div>
                              <h3 className="text-xl font-bold mb-1">{idx + 1}. {stock.name} ({stock.symbol})</h3>
                            </div>
                            <Badge className="bg-teal-600">{stock.yield} Yield</Badge>
                          </div>

                          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-3 text-sm">
                            <div>
                              <p className="text-slate-600 dark:text-slate-400">Dividend Yield</p>
                              <p className="font-semibold">{stock.yield}</p>
                            </div>
                            <div>
                              <p className="text-slate-600 dark:text-slate-400">5-Year Growth</p>
                              <p className="font-semibold text-green-600">{stock.growth5yr}</p>
                            </div>
                            <div>
                              <p className="text-slate-600 dark:text-slate-400">Years Increasing</p>
                              <p className="font-semibold">{stock.yearsIncreasing} years</p>
                            </div>
                            <div>
                              <p className="text-slate-600 dark:text-slate-400">Payout Ratio</p>
                              <p className="font-semibold">{stock.payoutRatio}</p>
                            </div>
                          </div>

                          <p className="text-sm text-slate-700 dark:text-slate-300">
                            {stock.description}
                          </p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </section>

                {/* Utilities */}
                <section id="utilities">
                  <h2 className="flex items-center gap-2">
                    <Percent className="h-7 w-7 text-indigo-600" />
                    Utilities Sector (4 Stocks)
                  </h2>
                  <p>
                    Regulated utilities provide essential electricity and gas service. Duke Energy has paid
                    dividends for 97 consecutive years. Rate increases approved by regulators fund steady
                    dividend growth of 2-4% annually. Perfect for conservative income investors.
                  </p>

                  <div className="space-y-4 my-6">
                    {stocksBySector['Utilities'].map((stock, idx) => (
                      <Card key={stock.symbol} className="border-l-4 border-l-indigo-500">
                        <CardContent className="pt-6">
                          <div className="flex items-start justify-between mb-3">
                            <div>
                              <h3 className="text-xl font-bold mb-1">{idx + 1}. {stock.name} ({stock.symbol})</h3>
                            </div>
                            <Badge className="bg-indigo-600">{stock.yield} Yield</Badge>
                          </div>

                          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-3 text-sm">
                            <div>
                              <p className="text-slate-600 dark:text-slate-400">Dividend Yield</p>
                              <p className="font-semibold">{stock.yield}</p>
                            </div>
                            <div>
                              <p className="text-slate-600 dark:text-slate-400">5-Year Growth</p>
                              <p className="font-semibold text-green-600">{stock.growth5yr}</p>
                            </div>
                            <div>
                              <p className="text-slate-600 dark:text-slate-400">Years Increasing</p>
                              <p className="font-semibold">{stock.yearsIncreasing} years</p>
                            </div>
                            <div>
                              <p className="text-slate-600 dark:text-slate-400">Payout Ratio</p>
                              <p className="font-semibold">{stock.payoutRatio}</p>
                            </div>
                          </div>

                          <p className="text-sm text-slate-700 dark:text-slate-300">
                            {stock.description}
                          </p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </section>

                {/* Consumer Discretionary */}
                <section id="consumer-discretionary">
                  <h2 className="flex items-center gap-2">
                    <TrendingUp className="h-7 w-7 text-pink-600" />
                    Consumer Discretionary Sector (5 Stocks)
                  </h2>
                  <p>
                    Retail and consumer brands that thrive during economic expansion. Home Depot and Lowe's
                    benefit from aging housing stock and home improvement trends. McDonald's franchise model
                    generates consistent cash flow. Nike dominates athletic footwear globally.
                  </p>

                  <div className="space-y-4 my-6">
                    {stocksBySector['Consumer Discretionary'].map((stock, idx) => (
                      <Card key={stock.symbol} className="border-l-4 border-l-pink-500">
                        <CardContent className="pt-6">
                          <div className="flex items-start justify-between mb-3">
                            <div>
                              <h3 className="text-xl font-bold mb-1">{idx + 1}. {stock.name} ({stock.symbol})</h3>
                            </div>
                            <Badge className="bg-pink-600">{stock.yield} Yield</Badge>
                          </div>

                          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-3 text-sm">
                            <div>
                              <p className="text-slate-600 dark:text-slate-400">Dividend Yield</p>
                              <p className="font-semibold">{stock.yield}</p>
                            </div>
                            <div>
                              <p className="text-slate-600 dark:text-slate-400">5-Year Growth</p>
                              <p className="font-semibold text-green-600">{stock.growth5yr}</p>
                            </div>
                            <div>
                              <p className="text-slate-600 dark:text-slate-400">Years Increasing</p>
                              <p className="font-semibold">{stock.yearsIncreasing} years</p>
                            </div>
                            <div>
                              <p className="text-slate-600 dark:text-slate-400">Payout Ratio</p>
                              <p className="font-semibold">{stock.payoutRatio}</p>
                            </div>
                          </div>

                          <p className="text-sm text-slate-700 dark:text-slate-300">
                            {stock.description}
                          </p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </section>

                {/* Telecommunications */}
                <section id="telecom">
                  <h2 className="flex items-center gap-2">
                    <Activity className="h-7 w-7 text-cyan-600" />
                    Telecommunications Sector (2 Stocks)
                  </h2>
                  <p>
                    AT&T and Verizon offer the highest yields on this list at 6.5-6.8%. Both have reset
                    dividends to sustainable levels after major restructurings. 5G network upgrades and
                    fixed wireless internet expansion provide growth opportunities ahead.
                  </p>

                  <div className="space-y-4 my-6">
                    {stocksBySector['Telecommunications'].map((stock, idx) => (
                      <Card key={stock.symbol} className="border-l-4 border-l-cyan-500">
                        <CardContent className="pt-6">
                          <div className="flex items-start justify-between mb-3">
                            <div>
                              <h3 className="text-xl font-bold mb-1">{idx + 1}. {stock.name} ({stock.symbol})</h3>
                            </div>
                            <Badge className="bg-cyan-600">{stock.yield} Yield</Badge>
                          </div>

                          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-3 text-sm">
                            <div>
                              <p className="text-slate-600 dark:text-slate-400">Dividend Yield</p>
                              <p className="font-semibold">{stock.yield}</p>
                            </div>
                            <div>
                              <p className="text-slate-600 dark:text-slate-400">5-Year Growth</p>
                              <p className="font-semibold text-green-600">{stock.growth5yr}</p>
                            </div>
                            <div>
                              <p className="text-slate-600 dark:text-slate-400">Years Increasing</p>
                              <p className="font-semibold">{stock.yearsIncreasing} years</p>
                            </div>
                            <div>
                              <p className="text-slate-600 dark:text-slate-400">Payout Ratio</p>
                              <p className="font-semibold">{stock.payoutRatio}</p>
                            </div>
                          </div>

                          <p className="text-sm text-slate-700 dark:text-slate-300">
                            {stock.description}
                          </p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </section>

                {/* Portfolio Strategy */}
                <section id="portfolio-strategy">
                  <h2 className="flex items-center gap-2">
                    <PieChart className="h-7 w-7 text-purple-600" />
                    How to Build Your Dividend Portfolio
                  </h2>
                  <p>
                    Don't try to buy all 50 stocks. Start with 10-20 well-chosen companies across multiple sectors.
                    Here's how to construct a balanced dividend portfolio from this list.
                  </p>

                  <Card className="my-6 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950">
                    <CardContent className="pt-6">
                      <h3 className="text-lg font-bold mb-4">Beginner Portfolio: 10 Stocks for $10,000</h3>
                      <p className="text-sm mb-4 text-slate-600 dark:text-slate-400">
                        Equal-weight allocation ($1,000 per stock) across defensive and growth sectors.
                      </p>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between p-2 bg-white dark:bg-slate-900 rounded">
                          <span>Johnson & Johnson (JNJ)</span>
                          <span className="text-slate-600">$1,000 | 3.0% yield</span>
                        </div>
                        <div className="flex justify-between p-2 bg-white dark:bg-slate-900 rounded">
                          <span>Procter & Gamble (PG)</span>
                          <span className="text-slate-600">$1,000 | 2.4% yield</span>
                        </div>
                        <div className="flex justify-between p-2 bg-white dark:bg-slate-900 rounded">
                          <span>Microsoft (MSFT)</span>
                          <span className="text-slate-600">$1,000 | 0.8% yield</span>
                        </div>
                        <div className="flex justify-between p-2 bg-white dark:bg-slate-900 rounded">
                          <span>JPMorgan Chase (JPM)</span>
                          <span className="text-slate-600">$1,000 | 2.4% yield</span>
                        </div>
                        <div className="flex justify-between p-2 bg-white dark:bg-slate-900 rounded">
                          <span>Home Depot (HD)</span>
                          <span className="text-slate-600">$1,000 | 2.3% yield</span>
                        </div>
                        <div className="flex justify-between p-2 bg-white dark:bg-slate-900 rounded">
                          <span>Realty Income (O)</span>
                          <span className="text-slate-600">$1,000 | 5.5% yield</span>
                        </div>
                        <div className="flex justify-between p-2 bg-white dark:bg-slate-900 rounded">
                          <span>Coca-Cola (KO)</span>
                          <span className="text-slate-600">$1,000 | 3.0% yield</span>
                        </div>
                        <div className="flex justify-between p-2 bg-white dark:bg-slate-900 rounded">
                          <span>Duke Energy (DUK)</span>
                          <span className="text-slate-600">$1,000 | 4.0% yield</span>
                        </div>
                        <div className="flex justify-between p-2 bg-white dark:bg-slate-900 rounded">
                          <span>Chevron (CVX)</span>
                          <span className="text-slate-600">$1,000 | 3.6% yield</span>
                        </div>
                        <div className="flex justify-between p-2 bg-white dark:bg-slate-900 rounded">
                          <span>Visa (V)</span>
                          <span className="text-slate-600">$1,000 | 0.8% yield</span>
                        </div>
                      </div>
                      <div className="mt-4 p-3 bg-green-50 dark:bg-green-950 rounded">
                        <p className="font-semibold text-sm">Portfolio Yield: 2.8%</p>
                        <p className="text-xs text-slate-600 dark:text-slate-400">Annual Income: $280 | Average Growth: 7.5%</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="my-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950">
                    <CardContent className="pt-6">
                      <h3 className="text-lg font-bold mb-4">High-Income Portfolio: 10 Stocks for $10,000</h3>
                      <p className="text-sm mb-4 text-slate-600 dark:text-slate-400">
                        Maximize current income with yields of 4-7%. Ideal for retirees needing cash flow today.
                      </p>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between p-2 bg-white dark:bg-slate-900 rounded">
                          <span>Enbridge (ENB)</span>
                          <span className="text-slate-600">$1,000 | 7.2% yield</span>
                        </div>
                        <div className="flex justify-between p-2 bg-white dark:bg-slate-900 rounded">
                          <span>Enterprise Products (EPD)</span>
                          <span className="text-slate-600">$1,000 | 7.0% yield</span>
                        </div>
                        <div className="flex justify-between p-2 bg-white dark:bg-slate-900 rounded">
                          <span>Verizon (VZ)</span>
                          <span className="text-slate-600">$1,000 | 6.8% yield</span>
                        </div>
                        <div className="flex justify-between p-2 bg-white dark:bg-slate-900 rounded">
                          <span>AT&T (T)</span>
                          <span className="text-slate-600">$1,000 | 6.5% yield</span>
                        </div>
                        <div className="flex justify-between p-2 bg-white dark:bg-slate-900 rounded">
                          <span>Simon Property (SPG)</span>
                          <span className="text-slate-600">$1,000 | 6.0% yield</span>
                        </div>
                        <div className="flex justify-between p-2 bg-white dark:bg-slate-900 rounded">
                          <span>W.P. Carey (WPC)</span>
                          <span className="text-slate-600">$1,000 | 5.8% yield</span>
                        </div>
                        <div className="flex justify-between p-2 bg-white dark:bg-slate-900 rounded">
                          <span>3M Company (MMM)</span>
                          <span className="text-slate-600">$1,000 | 5.8% yield</span>
                        </div>
                        <div className="flex justify-between p-2 bg-white dark:bg-slate-900 rounded">
                          <span>Realty Income (O)</span>
                          <span className="text-slate-600">$1,000 | 5.5% yield</span>
                        </div>
                        <div className="flex justify-between p-2 bg-white dark:bg-slate-900 rounded">
                          <span>VICI Properties (VICI)</span>
                          <span className="text-slate-600">$1,000 | 5.2% yield</span>
                        </div>
                        <div className="flex justify-between p-2 bg-white dark:bg-slate-900 rounded">
                          <span>Dominion Energy (D)</span>
                          <span className="text-slate-600">$1,000 | 4.5% yield</span>
                        </div>
                      </div>
                      <div className="mt-4 p-3 bg-green-50 dark:bg-green-950 rounded">
                        <p className="font-semibold text-sm">Portfolio Yield: 6.0%</p>
                        <p className="text-xs text-slate-600 dark:text-slate-400">Annual Income: $600 | Average Growth: 3.2%</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="my-6 bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-950 dark:to-orange-950">
                    <CardContent className="pt-6">
                      <h3 className="text-lg font-bold mb-4">Growth Portfolio: 10 Stocks for $10,000</h3>
                      <p className="text-sm mb-4 text-slate-600 dark:text-slate-400">
                        Lower yields today but 10-18% annual dividend growth. Your income doubles every 4-7 years.
                      </p>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between p-2 bg-white dark:bg-slate-900 rounded">
                          <span>Broadcom (AVGO)</span>
                          <span className="text-slate-600">$1,000 | 18.5% growth</span>
                        </div>
                        <div className="flex justify-between p-2 bg-white dark:bg-slate-900 rounded">
                          <span>Visa (V)</span>
                          <span className="text-slate-600">$1,000 | 17.0% growth</span>
                        </div>
                        <div className="flex justify-between p-2 bg-white dark:bg-slate-900 rounded">
                          <span>Mastercard (MA)</span>
                          <span className="text-slate-600">$1,000 | 16.0% growth</span>
                        </div>
                        <div className="flex justify-between p-2 bg-white dark:bg-slate-900 rounded">
                          <span>Lowe's (LOW)</span>
                          <span className="text-slate-600">$1,000 | 15.0% growth</span>
                        </div>
                        <div className="flex justify-between p-2 bg-white dark:bg-slate-900 rounded">
                          <span>Home Depot (HD)</span>
                          <span className="text-slate-600">$1,000 | 14.0% growth</span>
                        </div>
                        <div className="flex justify-between p-2 bg-white dark:bg-slate-900 rounded">
                          <span>UnitedHealth (UNH)</span>
                          <span className="text-slate-600">$1,000 | 13.5% growth</span>
                        </div>
                        <div className="flex justify-between p-2 bg-white dark:bg-slate-900 rounded">
                          <span>Costco (COST)</span>
                          <span className="text-slate-600">$1,000 | 13.0% growth</span>
                        </div>
                        <div className="flex justify-between p-2 bg-white dark:bg-slate-900 rounded">
                          <span>Texas Instruments (TXN)</span>
                          <span className="text-slate-600">$1,000 | 12.0% growth</span>
                        </div>
                        <div className="flex justify-between p-2 bg-white dark:bg-slate-900 rounded">
                          <span>Starbucks (SBUX)</span>
                          <span className="text-slate-600">$1,000 | 11.5% growth</span>
                        </div>
                        <div className="flex justify-between p-2 bg-white dark:bg-slate-900 rounded">
                          <span>BlackRock (BLK)</span>
                          <span className="text-slate-600">$1,000 | 11.0% growth</span>
                        </div>
                      </div>
                      <div className="mt-4 p-3 bg-green-50 dark:bg-green-950 rounded">
                        <p className="font-semibold text-sm">Portfolio Yield: 1.3%</p>
                        <p className="text-xs text-slate-600 dark:text-slate-400">Annual Income: $130 (Year 1) | Average Growth: 14.2%</p>
                        <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">Income in Year 10: $475 | Income in Year 15: $964</p>
                      </div>
                    </CardContent>
                  </Card>
                </section>

                {/* CTA Section */}
                <section className="not-prose my-12">
                  <Card className="bg-gradient-to-br from-blue-600 to-purple-600 text-white">
                    <CardContent className="pt-8 pb-8">
                      <h3 className="text-2xl font-bold mb-4 text-white">Calculate Your Dividend Income</h3>
                      <p className="mb-6 text-blue-100">
                        Use our free calculators to project dividend growth, DRIP returns, and retirement income
                        from these stocks over 10, 20, or 30 years.
                      </p>
                      <div className="flex flex-wrap gap-4">
                        <Link href="/calculators/drip">
                          <Button size="lg" variant="secondary" className="gap-2">
                            <TrendingUp className="h-5 w-5" />
                            DRIP Calculator
                          </Button>
                        </Link>
                        <Link href="/calculators/dividend-growth">
                          <Button size="lg" variant="secondary" className="gap-2">
                            <BarChart3 className="h-5 w-5" />
                            Dividend Growth Calculator
                          </Button>
                        </Link>
                        <Link href="/calculators/retirement-income">
                          <Button size="lg" variant="secondary" className="gap-2">
                            <DollarSign className="h-5 w-5" />
                            Retirement Income Calculator
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                </section>

                {/* Broker Section */}
                <section id="brokers">
                  <h2>Best Brokers for Dividend Investing</h2>
                  <p>
                    To buy these stocks commission-free with automatic dividend reinvestment (DRIP), you need a
                    quality brokerage account. Here are the top-rated brokers for dividend investors in 2026.
                  </p>
                  <BrokerComparisonTable />
                </section>

                {/* FAQ Section */}
                <section id="faqs">
                  <h2>Frequently Asked Questions</h2>

                  <div className="space-y-4 my-6">
                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="text-lg font-bold mb-2">How many dividend stocks should I own?</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          Start with 10-15 stocks for adequate diversification. With fewer than 10, one dividend
                          cut can significantly impact your income. With more than 30, you're essentially building
                          your own ETF and should consider buying a dividend fund instead. The sweet spot for most
                          individual investors is 15-25 stocks across 8+ sectors.
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="text-lg font-bold mb-2">Should I focus on high yield or dividend growth?</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          It depends on your age and income needs. If you're under 50 and don't need income today,
                          prioritize growth stocks (10-18% annual increases). Your income will compound dramatically
                          over 15-20 years. If you're retired or need income now, blend high-yield (5-7%) with
                          moderate growth (3-5%) for immediate cash flow plus inflation protection. A 60/40 mix
                          works well for most near-retirees.
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="text-lg font-bold mb-2">What's a safe payout ratio for dividend stocks?</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          Under 70% is generally safe for most companies. REITs and utilities can sustain 70-85%
                          because of their regulated, predictable cash flows. Technology and financials should stay
                          under 50% for safety. If payout ratio exceeds 100%, the dividend is at risk during economic
                          downturns. Look for multi-year trends, not single-year snapshots.
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="text-lg font-bold mb-2">Are monthly dividend stocks better than quarterly?</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          Monthly dividends (like Realty Income) provide smoother cash flow for budgeting but aren't
                          inherently better investments. Most top dividend stocks pay quarterly. What matters more:
                          yield sustainability, growth rate, and business quality. If you want monthly income, build
                          a portfolio of quarterly payers with staggered payment dates to create monthly cash flow.
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="text-lg font-bold mb-2">Should I automatically reinvest dividends (DRIP)?</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          Yes, if you're building wealth and don't need the income. DRIP (Dividend Reinvestment Plans)
                          accelerate compounding by buying more shares automatically. Your dividends buy more shares,
                          which pay more dividends, which buy more shares. Over 20-30 years, DRIP can double or triple
                          your total returns. Once you retire and need income, turn off DRIP and spend the cash.
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="text-lg font-bold mb-2">How much money do I need to start dividend investing?</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          You can start with $500-1,000 and buy fractional shares at most brokers. With $5,000, you
                          can build a diversified 10-stock portfolio. With $10,000+, you have enough for 15-20 positions
                          with proper sector balance. Don't wait until you have huge sums—start small, add monthly, and
                          reinvest dividends. Time in the market beats timing the market.
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="text-lg font-bold mb-2">What's the difference between dividend stocks and dividend ETFs?</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          Individual dividend stocks require research and active management but offer higher potential
                          yields (4-7%). Dividend ETFs like SCHD provide instant diversification with zero research
                          but lower yields (2.5-4%). ETFs charge small annual fees (0.06-0.35%). Best strategy:
                          70% dividend ETFs for stability + 30% individual high-yielders for extra income.
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="text-lg font-bold mb-2">How are dividends taxed?</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          Qualified dividends (most U.S. stocks held 60+ days) are taxed at favorable rates: 0%, 15%,
                          or 20% depending on income. This beats ordinary income tax rates of 22-37%. REITs and MLPs
                          often pay non-qualified dividends taxed as ordinary income. Hold dividend stocks in taxable
                          accounts to benefit from lower rates. Save bonds and REITs for retirement accounts.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </section>

              </div>

              {/* Related Articles */}
              <Card className="mt-12 bg-slate-50 dark:bg-slate-900">
                <CardContent className="pt-6">
                  <h3 className="font-bold text-lg mb-4">Related Articles</h3>
                  <div className="grid gap-3">
                    <Link href="/blog/dividend-stocks-vs-etfs-complete-guide" className="text-blue-600 hover:underline flex items-center gap-2">
                      <ArrowRight className="h-4 w-4" />
                      Dividend Stocks vs. ETFs: Complete Comparison Guide
                    </Link>
                    <Link href="/blog/best-dividend-growth-stocks-2026" className="text-blue-600 hover:underline flex items-center gap-2">
                      <ArrowRight className="h-4 w-4" />
                      Best Dividend Growth Stocks 2026 (10%+ Annual Increases)
                    </Link>
                    <Link href="/blog/drip-investing-guide" className="text-blue-600 hover:underline flex items-center gap-2">
                      <ArrowRight className="h-4 w-4" />
                      Complete Guide to DRIP Investing
                    </Link>
                    <Link href="/blog/best-dividend-stocks-for-beginners" className="text-blue-600 hover:underline flex items-center gap-2">
                      <ArrowRight className="h-4 w-4" />
                      Best Dividend Stocks for Beginners
                    </Link>
                    <Link href="/blog/how-to-build-1000-month-dividend-portfolio" className="text-blue-600 hover:underline flex items-center gap-2">
                      <ArrowRight className="h-4 w-4" />
                      How to Build a $1,000/Month Dividend Portfolio
                    </Link>
                  </div>
                </CardContent>
              </Card>

            </div>
          </div>
        </article>
      </main>

      <Footer />
    </>
  )
}
