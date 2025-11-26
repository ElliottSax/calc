import { Metadata } from 'next'
import { Header } from '@/components/layout/Header'
import { CoffeeToRetirement } from '@/components/viral/CoffeeToRetirement'
import { SocialShare } from '@/components/social/SocialShare'
import { EmailCaptureForm } from '@/components/forms/EmailCaptureForm'

export const metadata: Metadata = {
  title: 'The $1 Million Coffee - Daily Spending Opportunity Cost Calculator',
  description: 'See how your daily $5 coffee habit could cost you over $1 million in retirement. Calculate the shocking opportunity cost of small daily expenses.',
  keywords: ['opportunity cost calculator', 'daily spending', 'coffee calculator', 'retirement planning', 'compound interest', 'financial independence'],
  openGraph: {
    title: 'The $1 Million Coffee - Your Daily Habit Could Cost You a Fortune',
    description: 'Calculate how much your daily coffee (or any habit) could be costing you in retirement wealth. The results will shock you!',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The $1 Million Coffee - Shocking Opportunity Cost Calculator',
    description: 'See how $5/day could become $1M+ in retirement if invested instead',
  }
}

export default function CoffeeMillionairePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-white to-orange-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <Header />

      <main className="container mx-auto px-4 py-12">
        <CoffeeToRetirement />

        {/* Social Sharing */}
        <div className="max-w-4xl mx-auto mt-12 text-center">
          <SocialShare
            title="The $1 Million Coffee - See What Your Daily Habits Really Cost"
            description="I just calculated how much my daily coffee could cost me in retirement. You won't believe the number!"
            hashtags={['OpportunityCost', 'FinancialFreedom', 'Investing']}
            className="justify-center"
          />
        </div>

        {/* Email Capture */}
        <div className="max-w-2xl mx-auto mt-12">
          <EmailCaptureForm />
        </div>

        {/* SEO Content */}
        <section className="max-w-4xl mx-auto mt-16 prose prose-lg dark:prose-invert">
          <h2>The Hidden Cost of Daily Habits</h2>
          <p>
            We've all heard the advice to "skip the daily latte" to save money, but have you ever
            calculated the <strong>real opportunity cost</strong> of that habit? When you factor
            in compound interest and investment returns, the numbers become truly staggering.
          </p>

          <h3>The Power of Small Changes</h3>
          <p>
            A $5 daily coffee habit costs $1,825 per year. That alone might not seem life-changing.
            But invest that same amount in dividend-paying stocks earning 8% annually, and after
            30 years, you could have over <strong>$200,000</strong> - potentially enough to generate
            $6,000-8,000 per year in passive dividend income for the rest of your life.
          </p>

          <h3>It's Not Just About Coffee</h3>
          <p>
            This calculator works for any recurring expense:
          </p>
          <ul>
            <li><strong>Subscription services</strong> you don't use ($10-50/month)</li>
            <li><strong>Impulse purchases</strong> and convenience spending</li>
            <li><strong>Dining out</strong> when you could cook at home</li>
            <li><strong>Premium upgrades</strong> you don't really need</li>
            <li><strong>Unnecessary convenience fees</strong></li>
          </ul>

          <h3>The Opportunity Cost Mindset</h3>
          <p>
            Understanding opportunity cost doesn't mean you should never enjoy a coffee or treat
            yourself. It's about making <em>informed decisions</em> about where your money goes.
            When you realize that $5 today could be $50 in retirement (thanks to compound growth),
            you might naturally make different choices.
          </p>

          <h3>Start Your Wealth Building Journey</h3>
          <p>
            Use our full <a href="/">Dividend Reinvestment Calculator</a> to create a complete
            financial plan. See exactly how regular investments can grow through dividend
            reinvestment and compound returns.
          </p>

          <h3>The Math Behind the Magic</h3>
          <p>
            Our calculator uses the <strong>future value of an annuity</strong> formula to show
            what happens when you invest regular amounts over time:
          </p>
          <pre className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg overflow-x-auto">
            FV = PMT × [(1 + r)^n - 1] / r
          </pre>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Where PMT is your monthly contribution, r is the monthly return rate, and n is the
            number of months. The results might surprise you!
          </p>

          <h3>Take Action Today</h3>
          <p>
            The best time to start investing was yesterday. The second best time is today. Even
            small amounts invested consistently can build substantial wealth over time thanks to
            the magic of compound returns.
          </p>

          <div className="not-prose bg-blue-50 dark:bg-blue-950 border-l-4 border-blue-600 p-6 rounded-r-lg my-8">
            <p className="text-lg font-semibold mb-2">Ready to build real wealth?</p>
            <p className="mb-4">
              Calculate your complete dividend investment plan with our advanced DRIP calculator.
            </p>
            <a
              href="/"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              Calculate My Dividend Plan →
            </a>
          </div>
        </section>
      </main>
    </div>
  )
}
