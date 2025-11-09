import { Header } from '@/components/layout/Header'
import { DripCalculator } from '@/components/calculators/DripCalculator'
import { BrokerComparisonTable } from '@/components/affiliate/BrokerComparisonTable'
import { RecommendedTools } from '@/components/affiliate/RecommendedTools'
import { BehaviorTriggeredPopup } from '@/components/lead-generation/BehaviorTriggeredPopup'
import { HeaderAd, SidebarAd, BelowCalculatorAd } from '@/components/ads/AdManager'
import { EmailCaptureForm } from '@/components/forms/EmailCaptureForm'
import { Card } from '@/components/ui/card'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Header Ad */}
      <HeaderAd testMode={true} />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Dividend Reinvestment Calculator
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Calculate the power of dividend reinvestment and compound growth
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3 space-y-8">
              <Card className="p-6">
                <DripCalculator />
              </Card>
              
              {/* Below Calculator Ad */}
              <BelowCalculatorAd testMode={true} />
              
              {/* Broker Comparison Table */}
              <BrokerComparisonTable />
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Sidebar Ad */}
              <SidebarAd testMode={true} />
              
              {/* Email Capture */}
              <EmailCaptureForm />
              
              {/* Recommended Tools */}
              <RecommendedTools />
            </div>
          </div>

          {/* SEO Content Section */}
          <section className="mt-12 prose prose-lg max-w-none dark:prose-invert">
            <h2>Master Your Dividend Investing Strategy</h2>
            <p>
              Our dividend reinvestment calculator helps you visualize the long-term power of
              compounding returns through dividend reinvestment plans (DRIPs). Whether you&apos;re
              planning for retirement or building passive income, understanding how dividends
              compound over time is crucial for successful investing.
            </p>
            
            <h3>How Dividend Reinvestment Works</h3>
            <p>
              Dividend reinvestment is the practice of using dividend payments to purchase 
              additional shares of the same stock, rather than taking the dividends as cash. 
              This strategy can significantly accelerate wealth building through the power of 
              compound growth.
            </p>
            
            <h3>Key Benefits of DRIP Investing</h3>
            <ul>
              <li><strong>Compound Growth:</strong> Your dividends buy more shares, which generate more dividends</li>
              <li><strong>Dollar-Cost Averaging:</strong> Regular purchases smooth out market volatility</li>
              <li><strong>No Commission Fees:</strong> Most DRIPs allow commission-free reinvestment</li>
              <li><strong>Fractional Shares:</strong> Every dollar of dividends is put to work</li>
              <li><strong>Passive Investing:</strong> Set it and forget it approach to wealth building</li>
            </ul>
          </section>
        </div>
      </main>

      {/* Behavior-triggered popup */}
      <BehaviorTriggeredPopup />
    </div>
  )
}