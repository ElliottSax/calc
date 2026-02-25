'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Checkbox } from '@/components/ui/checkbox'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { CheckCircle2, XCircle, Star, TrendingUp, DollarSign, Users } from 'lucide-react'

interface Broker {
  id: string
  name: string
  logo: string
  rating: number
  commission: string
  drip: boolean
  fractional: boolean
  autoRebalance: boolean
  research: 'excellent' | 'good' | 'basic'
  support: string
  minDeposit: number
  bonus: number
  bestFor: string[]
  pros: string[]
  cons: string[]
  link: string
}

const brokers: Broker[] = [
  {
    id: 'm1',
    name: 'M1 Finance',
    logo: '🎯',
    rating: 4.8,
    commission: '$0',
    drip: true,
    fractional: true,
    autoRebalance: true,
    research: 'basic',
    support: 'Email only',
    minDeposit: 100,
    bonus: 150,
    bestFor: ['DRIP Investors', 'Auto-Rebalancing', 'Portfolio Pies'],
    pros: ['Free DRIP', 'Auto-rebalancing', 'Intelligent portfolio management'],
    cons: ['Limited trading windows', 'No options', 'Basic research'],
    link: '/brokers/m1-finance'
  },
  {
    id: 'fidelity',
    name: 'Fidelity',
    logo: '🏆',
    rating: 4.9,
    commission: '$0',
    drip: true,
    fractional: true,
    autoRebalance: false,
    research: 'excellent',
    support: '24/7 Phone',
    minDeposit: 0,
    bonus: 100,
    bestFor: ['Research', '24/7 Support', 'All-Around Best'],
    pros: ['Best research tools', '24/7 support', 'Complete product suite'],
    cons: ['No auto-rebalancing', 'Interface feels dated'],
    link: '/brokers/fidelity'
  },
  {
    id: 'wealthfront',
    name: 'Wealthfront',
    logo: '🤖',
    rating: 4.7,
    commission: '0.25% fee',
    drip: true,
    fractional: true,
    autoRebalance: true,
    research: 'good',
    support: 'Email/Chat',
    minDeposit: 500,
    bonus: 200,
    bestFor: ['Robo-Advisor', 'Tax-Loss Harvesting', 'Hands-Off'],
    pros: ['Automated management', 'Tax-loss harvesting', '5.00% cash account'],
    cons: ['0.25% management fee', '$500 minimum'],
    link: '/brokers/wealthfront'
  },
  {
    id: 'schwab',
    name: 'Charles Schwab',
    logo: '🏛️',
    rating: 4.8,
    commission: '$0',
    drip: true,
    fractional: true,
    autoRebalance: false,
    research: 'excellent',
    support: '24/7 + Branches',
    minDeposit: 0,
    bonus: 100,
    bestFor: ['Full-Service', 'Banking Integration', 'Local Branches'],
    pros: ['300+ branches', 'Integrated banking', 'Free robo-advisor'],
    cons: ['Complex platform for beginners'],
    link: '/brokers/charles-schwab'
  },
  {
    id: 'robinhood',
    name: 'Robinhood',
    logo: '📱',
    rating: 4.2,
    commission: '$0',
    drip: false,
    fractional: true,
    autoRebalance: false,
    research: 'basic',
    support: 'Email only',
    minDeposit: 0,
    bonus: 50,
    bestFor: ['Beginners', 'Mobile-First', 'Simple Interface'],
    pros: ['Easiest to use', '$0 minimum', 'Instant deposits'],
    cons: ['No DRIP', 'Limited research', 'Basic support'],
    link: '/brokers/robinhood'
  }
]

export function BrokerComparisonTool() {
  const [selectedBrokers, setSelectedBrokers] = useState<string[]>(['m1', 'fidelity', 'schwab'])
  const [investorType, setInvestorType] = useState<string>('all')
  const [recommendedBroker, setRecommendedBroker] = useState<Broker | null>(null)

  const toggleBroker = (brokerId: string) => {
    setSelectedBrokers(prev =>
      prev.includes(brokerId)
        ? prev.filter(id => id !== brokerId)
        : prev.length < 5
        ? [...prev, brokerId]
        : prev
    )
  }

  const getRecommendation = () => {
    let recommended: Broker = brokers[0]

    if (investorType === 'drip') recommended = brokers.find(b => b.id === 'm1')!
    else if (investorType === 'beginner') recommended = brokers.find(b => b.id === 'robinhood')!
    else if (investorType === 'research') recommended = brokers.find(b => b.id === 'fidelity')!
    else if (investorType === 'passive') recommended = brokers.find(b => b.id === 'wealthfront')!
    else if (investorType === 'fullservice') recommended = brokers.find(b => b.id === 'schwab')!

    setRecommendedBroker(recommended)
  }

  const selectedBrokerData = brokers.filter(b => selectedBrokers.includes(b.id))

  return (
    <div className="space-y-8">
      {/* Broker Selection */}
      <Card>
        <CardHeader>
          <CardTitle>Select Brokers to Compare (up to 5)</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {brokers.map(broker => (
              <div
                key={broker.id}
                onClick={() => toggleBroker(broker.id)}
                className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                  selectedBrokers.includes(broker.id)
                    ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="text-center">
                  <div className="text-4xl mb-2">{broker.logo}</div>
                  <div className="font-semibold text-sm">{broker.name}</div>
                  <div className="flex items-center justify-center gap-1 text-xs mt-1">
                    <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                    <span>{broker.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Get Recommendation */}
      <Card>
        <CardHeader>
          <CardTitle>Get Personalized Recommendation</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-4 items-end">
            <div className="flex-1">
              <label className="block text-sm font-medium mb-2">What type of investor are you?</label>
              <Select value={investorType} onValueChange={setInvestorType}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Not sure / Show me all</SelectItem>
                  <SelectItem value="drip">DRIP & Dividend Investor</SelectItem>
                  <SelectItem value="beginner">Complete Beginner</SelectItem>
                  <SelectItem value="research">Research-Focused Trader</SelectItem>
                  <SelectItem value="passive">Hands-Off / Robo-Advisor</SelectItem>
                  <SelectItem value="fullservice">Full-Service Banking + Investing</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button onClick={getRecommendation} size="lg">
              Get My Recommendation
            </Button>
          </div>

          {recommendedBroker && (
            <div className="mt-6 p-6 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-lg">
              <div className="flex items-center gap-4 mb-4">
                <div className="text-6xl">{recommendedBroker.logo}</div>
                <div>
                  <Badge className="mb-2 bg-green-600">RECOMMENDED FOR YOU</Badge>
                  <h3 className="text-2xl font-bold">{recommendedBroker.name}</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Perfect for: {recommendedBroker.bestFor.join(', ')}
                  </p>
                </div>
              </div>
              <Button asChild size="lg" className="w-full">
                <a href={recommendedBroker.link}>
                  Open {recommendedBroker.name} Account - ${recommendedBroker.bonus} Bonus →
                </a>
              </Button>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Comparison Table */}
      <Card>
        <CardHeader>
          <CardTitle>Side-by-Side Comparison</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead className="bg-gray-100 dark:bg-gray-800">
                <tr>
                  <th className="p-3 text-left sticky left-0 bg-gray-100 dark:bg-gray-800">Feature</th>
                  {selectedBrokerData.map(broker => (
                    <th key={broker.id} className="p-3 text-center min-w-[150px]">
                      <div className="text-2xl mb-1">{broker.logo}</div>
                      <div className="font-bold">{broker.name}</div>
                      <div className="flex items-center justify-center gap-1 text-xs">
                        <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                        {broker.rating}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3 font-medium sticky left-0 bg-white dark:bg-gray-900">Commission</td>
                  {selectedBrokerData.map(broker => (
                    <td key={broker.id} className="p-3 text-center">{broker.commission}</td>
                  ))}
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-medium sticky left-0 bg-white dark:bg-gray-900">Signup Bonus</td>
                  {selectedBrokerData.map(broker => (
                    <td key={broker.id} className="p-3 text-center text-green-600 font-bold">${broker.bonus}</td>
                  ))}
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-medium sticky left-0 bg-white dark:bg-gray-900">Auto DRIP</td>
                  {selectedBrokerData.map(broker => (
                    <td key={broker.id} className="p-3 text-center">
                      {broker.drip ? <CheckCircle2 className="h-5 w-5 text-green-600 mx-auto" /> : <XCircle className="h-5 w-5 text-red-600 mx-auto" />}
                    </td>
                  ))}
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-medium sticky left-0 bg-white dark:bg-gray-900">Fractional Shares</td>
                  {selectedBrokerData.map(broker => (
                    <td key={broker.id} className="p-3 text-center">
                      {broker.fractional ? <CheckCircle2 className="h-5 w-5 text-green-600 mx-auto" /> : <XCircle className="h-5 w-5 text-red-600 mx-auto" />}
                    </td>
                  ))}
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-medium sticky left-0 bg-white dark:bg-gray-900">Auto-Rebalancing</td>
                  {selectedBrokerData.map(broker => (
                    <td key={broker.id} className="p-3 text-center">
                      {broker.autoRebalance ? <CheckCircle2 className="h-5 w-5 text-green-600 mx-auto" /> : <XCircle className="h-5 w-5 text-red-600 mx-auto" />}
                    </td>
                  ))}
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-medium sticky left-0 bg-white dark:bg-gray-900">Research Tools</td>
                  {selectedBrokerData.map(broker => (
                    <td key={broker.id} className="p-3 text-center capitalize">{broker.research}</td>
                  ))}
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-medium sticky left-0 bg-white dark:bg-gray-900">Customer Support</td>
                  {selectedBrokerData.map(broker => (
                    <td key={broker.id} className="p-3 text-center text-sm">{broker.support}</td>
                  ))}
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-medium sticky left-0 bg-white dark:bg-gray-900">Minimum Deposit</td>
                  {selectedBrokerData.map(broker => (
                    <td key={broker.id} className="p-3 text-center">${broker.minDeposit}</td>
                  ))}
                </tr>
                <tr>
                  <td className="p-3 font-medium sticky left-0 bg-white dark:bg-gray-900">Best For</td>
                  {selectedBrokerData.map(broker => (
                    <td key={broker.id} className="p-3 text-center">
                      <div className="flex flex-col gap-1">
                        {broker.bestFor.map((item, i) => (
                          <Badge key={i} variant="secondary" className="text-xs">{item}</Badge>
                        ))}
                      </div>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-6 flex flex-wrap justify-center gap-4">
            {selectedBrokerData.map(broker => (
              <Button key={broker.id} asChild variant="outline">
                <a href={broker.link}>
                  View {broker.name} Details →
                </a>
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
