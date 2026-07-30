# PowerShell script to generate 50 blog post directories and page.tsx files
# This script creates all blog route directories and generates page.tsx with appropriate content

$blogBaseDir = "C:\projects\calc\app\blog"

# Function to create a blog post page
function Create-BlogPost {
    param(
        [string]$slug,
        [string]$title,
        [string]$excerpt,
        [string]$category
    )

    $postDir = Join-Path $blogBaseDir $slug

    # Create directory if it doesn't exist
    if (!(Test-Path $postDir)) {
        New-Item -ItemType Directory -Path $postDir -Force | Out-Null
        Write-Host "Created directory: $slug"
    }

    # Create page.tsx
    $pageContent = @"
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, Clock, User, TrendingUp, AlertTriangle, CheckCircle2 } from 'lucide-react'
import { InlineSignup } from '@/components/email/InlineSignup'
import { getArticleBySlug, getRelatedArticles } from '@/lib/blog/articles-manifest'

export const metadata = {
  title: '$title',
  description: '$excerpt',
  openGraph: {
    title: '$title',
    description: '$excerpt',
    type: 'article',
  },
}

export default function BlogPost() {
  const article = getArticleBySlug('$slug')
  const relatedArticles = getRelatedArticles('$slug')

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      {/* Back Button */}
      <Link href="/blog" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6">
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to Blog
      </Link>

      {/* Hero Section */}
      <div className="mb-12">
        <Badge className="mb-4" variant="secondary">
          {article?.category.charAt(0).toUpperCase()}{article?.category.slice(1).replace(/-/g, ' ')}
        </Badge>
        <h1 className="text-4xl md:text-5xl font-black mb-4">
          $title
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 mb-6">
          $excerpt
        </p>

        {/* Metadata */}
        <div className="flex flex-wrap gap-6 text-sm text-slate-600 dark:text-slate-400">
          {article && (
            <>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                {article.readTime} min read
              </div>
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                Dividend Experts
              </div>
            </>
          )}
        </div>
      </div>

      {/* Table of Contents */}
      <Card className="mb-8 bg-slate-50 dark:bg-slate-900">
        <CardHeader>
          <CardTitle className="text-lg">Quick Navigation</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 text-sm">
            <li><a href="#key-concepts" className="text-blue-600 hover:underline">Key Concepts</a></li>
            <li><a href="#analysis" className="text-blue-600 hover:underline">In-Depth Analysis</a></li>
            <li><a href="#strategies" className="text-blue-600 hover:underline">Practical Strategies</a></li>
            <li><a href="#calculator-section" className="text-blue-600 hover:underline">Use Our Tools</a></li>
            <li><a href="#faq" className="text-blue-600 hover:underline">FAQ</a></li>
          </ul>
        </CardContent>
      </Card>

      {/* Key Concepts Section */}
      <section id="key-concepts" className="mb-16">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <TrendingUp className="h-8 w-8 text-blue-600" />
          Key Concepts & Overview
        </h2>

        <div className="prose prose-slate dark:prose-invert max-w-none mb-8">
          <p className="text-lg leading-relaxed">
            This comprehensive guide covers the essential information you need to understand and implement strategies related to dividend investing.
            Whether you're a beginner just starting your investment journey or an experienced investor looking to optimize your portfolio,
            you'll find valuable insights and actionable strategies throughout this article.
          </p>
        </div>

        <Card className="bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-800 mb-6">
          <CardContent className="pt-6">
            <p className="text-sm font-semibold mb-2">💡 Key Point:</p>
            <p className="text-sm text-slate-700 dark:text-slate-300">
              Understanding the fundamentals of dividend investing, stock analysis, and portfolio management is crucial for long-term success.
              This article provides the knowledge you need to make informed investment decisions.
            </p>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CheckCircle2 className="h-10 w-10 text-green-600 mb-2" />
              <CardTitle>Foundation</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 dark:text-slate-400">
                Learn the basics and foundational concepts essential for success
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <TrendingUp className="h-10 w-10 text-blue-600 mb-2" />
              <CardTitle>Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 dark:text-slate-400">
                Deep dive into analytical methods and evaluation techniques
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CheckCircle2 className="h-10 w-10 text-green-600 mb-2" />
              <CardTitle>Implementation</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 dark:text-slate-400">
                Practical strategies you can implement in your portfolio today
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* In-Depth Analysis Section */}
      <section id="analysis" className="mb-16">
        <h2 className="text-3xl font-bold mb-6">In-Depth Analysis</h2>

        <div className="space-y-6">
          <Card className="border-l-4 border-l-blue-500">
            <CardHeader>
              <CardTitle className="text-xl">Understanding the Core Principles</CardTitle>
              <CardDescription>Essential knowledge for making better investment decisions</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-slate-700 dark:text-slate-300 mb-4">
                The foundation of successful investing relies on understanding core principles that have proven effective over decades.
                These principles guide decision-making and help investors avoid common pitfalls.
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-700 dark:text-slate-300">
                <li>Diversification reduces risk across your portfolio</li>
                <li>Long-term investing outperforms short-term trading</li>
                <li>Quality fundamentals matter more than price trends</li>
                <li>Consistent discipline trumps emotional decision-making</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-green-500">
            <CardHeader>
              <CardTitle className="text-xl">Performance Metrics & Evaluation</CardTitle>
              <CardDescription>How to measure success and identify quality investments</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-slate-700 dark:text-slate-300 mb-4">
                Proper evaluation requires understanding key metrics and how to interpret them. These metrics help distinguish between
                quality investments and potential value traps.
              </p>
              <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg font-mono text-sm">
                <p>• Yield: Annual dividend / Current price</p>
                <p>• Payout Ratio: Dividend per share / Earnings per share</p>
                <p>• Growth Rate: Year-over-year increase in dividends</p>
                <p>• Safety Ratio: Earnings / Dividend payments</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Practical Strategies Section */}
      <section id="strategies" className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Practical Implementation Strategies</h2>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Strategy 1: Conservative Approach</CardTitle>
              <CardDescription>Recommended for risk-averse investors</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-slate-700 dark:text-slate-300 mb-4">
                Focus on established companies with long track records of consistent dividends.
                Prioritize stability and reliability over high yields.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">Low Risk</Badge>
                <Badge variant="outline">Stable Income</Badge>
                <Badge variant="outline">Blue Chip</Badge>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Strategy 2: Balanced Approach</CardTitle>
              <CardDescription>Recommended for most investors</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-slate-700 dark:text-slate-300 mb-4">
                Mix established dividend payers with growth-oriented stocks. Balance yield with capital appreciation potential.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">Moderate Risk</Badge>
                <Badge variant="outline">Growth & Income</Badge>
                <Badge variant="outline">Diversified</Badge>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Strategy 3: Income-Focused Approach</CardTitle>
              <CardDescription>Recommended for investors needing regular income</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-slate-700 dark:text-slate-300 mb-4">
                Prioritize high-yield stocks and REITs for maximum current income. Suitable for retirees and income-focused portfolios.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">Higher Yield</Badge>
                <Badge variant="outline">Regular Income</Badge>
                <Badge variant="outline">Moderate-High Risk</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Calculator CTA */}
      <section id="calculator-section" className="mb-16">
        <div className="my-12">
          <InlineSignup
            variant="featured"
            title="Calculate Your Returns with Our Free Tools"
            description="Model your investment scenarios using our dividend calculators. See how your portfolio could grow with different strategies."
            buttonText="Open Calculator"
            source="blog_$slug"
          />
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">What is the best approach for beginners?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Start with blue-chip dividend payers from established companies. Focus on learning the fundamentals before moving to more complex strategies.
                Use our dividend calculator to model different scenarios and understand how your investments could grow.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">How much capital do I need to get started?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                You can start with as little as \$500-\$1,000 through most modern brokers that offer fractional share trading.
                The key is consistent investing over time rather than the initial amount. Use dollar-cost averaging to build your position gradually.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Should I reinvest dividends or take them as cash?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                If you're building wealth, reinvest through DRIP for compound growth. If you need regular income, take the cash.
                Many investors transition from reinvesting to taking cash as they approach retirement. Consider your time horizon and financial goals.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">What are the tax implications?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Qualified dividends are taxed at favorable capital gains rates (0%, 15%, or 20%). Ordinary dividends are taxed as regular income.
                Consider using tax-advantaged accounts like IRAs when possible. Consult a tax professional for your specific situation.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Conclusion */}
      <section className="mb-16">
        <Card className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-950 dark:to-blue-950 border-2">
          <CardHeader>
            <CardTitle className="text-2xl">Ready to Take Action?</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-6 text-slate-700 dark:text-slate-300">
              Start implementing these strategies today. Use our free dividend calculators to model your specific scenarios,
              research potential investments using the screening techniques we discussed, and begin building your wealth-generating portfolio.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <Link href="/calculators/drip">
                <Button variant="outline" className="w-full" size="lg">
                  DRIP Calculator →
                </Button>
              </Link>
              <Link href="/calculators/dividend-growth">
                <Button variant="outline" className="w-full" size="lg">
                  Growth Calculator →
                </Button>
              </Link>
              <Link href="/calculators/retirement-income">
                <Button className="w-full" size="lg">
                  Retirement Calculator →
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Related Articles */}
      {relatedArticles && relatedArticles.length > 0 && (
        <section>
          <h2 className="text-2xl font-bold mb-6">Related Articles You Might Like</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {relatedArticles.slice(0, 4).map((related) => (
              <Link key={related.slug} href={`/blog/{related.slug}`}>
                <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                  <CardHeader>
                    <CardTitle className="text-lg">{related.title}</CardTitle>
                    <CardDescription className="line-clamp-2">
                      {related.metaDescription}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
"@

    $pagePath = Join-Path $postDir "page.tsx"
    Set-Content -Path $pagePath -Value $pageContent -Force
    Write-Host "Created page.tsx for: $slug"
}

# BATCH 1: Stock Lists (10 articles)
$batch1 = @(
    @{slug='best-monthly-dividend-stocks-2026'; title='Best Monthly Dividend Stocks 2026: 12 Paychecks Per Year'; excerpt='Discover the top monthly dividend stocks that pay 12 times per year. Complete analysis of reliable monthly payers with yields up to 10%+'; category='stock-lists'},
    @{slug='top-dividend-etfs-passive-income'; title='Top 10 Dividend ETFs for Passive Income'; excerpt='Compare the best dividend ETFs for 2026. Find high-yield ETFs with low fees for passive income investing'; category='stock-lists'},
    @{slug='best-dividend-stocks-under-50'; title='Best Dividend Stocks Under $50'; excerpt='Find affordable dividend stocks under $50 that offer high yields and growth potential'; category='stock-lists'},
    @{slug='high-yield-reits-2026'; title='High-Yield REITs Worth Buying in 2026'; excerpt='Discover the best high-yield REITs for 2026 with 5-10%+ yields and strong fundamentals'; category='stock-lists'},
    @{slug='dividend-stocks-beginners'; title='Best Dividend Stocks for Beginners'; excerpt='Complete beginner guide to dividend stocks. Learn how to identify safe stocks and build your first portfolio'; category='stock-lists'},
    @{slug='top-canadian-dividend-stocks'; title='Top Canadian Dividend Stocks'; excerpt='Best Canadian dividend stocks including banks, energy, utilities and REITs'; category='stock-lists'},
    @{slug='best-dividend-growth-stocks-2026'; title='Best Dividend Growth Stocks 2026'; excerpt='Find dividend stocks with consistent history of increasing payments'; category='stock-lists'},
    @{slug='top-tech-dividend-stocks'; title='Top Technology Dividend Stocks'; excerpt='Tech companies that pay dividends with growth and income potential'; category='stock-lists'},
    @{slug='best-healthcare-dividend-stocks'; title='Best Healthcare Dividend Stocks'; excerpt='Pharma, biotech and medical REITs benefiting from aging demographics'; category='stock-lists'},
    @{slug='top-utility-dividend-stocks'; title='Top Utility Dividend Stocks'; excerpt='Stable, regulated utilities with predictable dividends and low volatility'; category='stock-lists'}
)

# BATCH 2: How-To Guides (10 articles)
$batch2 = @(
    @{slug='build-1000-month-dividend-portfolio'; title='How to Build a \$1,000/Month Dividend Portfolio'; excerpt='Step-by-step guide to building a dividend portfolio generating \$1,000 monthly income'; category='how-to'},
    @{slug='calculate-dividend-yield'; title='How to Calculate Dividend Yield Correctly'; excerpt='Learn how to calculate dividend yield, trailing yield, forward yield correctly'; category='how-to'},
    @{slug='find-dividend-stocks'; title='How to Find Dividend Stocks Before They Are Popular'; excerpt='Learn screening techniques to discover undervalued dividend stocks early'; category='how-to'},
    @{slug='analyze-dividend-safety'; title='How to Analyze Dividend Safety'; excerpt='Complete guide to evaluating dividend safety and sustainability'; category='how-to'},
    @{slug='ex-dividend-date-explained'; title='How to Time Dividend Purchases Using Ex-Dividend Dates'; excerpt='Understand when to buy dividend stocks to capture upcoming payments'; category='how-to'},
    @{slug='dividend-ladder-strategy'; title='How to Build a Dividend Ladder Strategy'; excerpt='Create a staggered dividend payment schedule for reliable income'; category='how-to'},
    @{slug='reinvest-dividends-maximum-growth'; title='How to Reinvest Dividends for Maximum Growth'; excerpt='Learn DRIP strategies to maximize compound growth'; category='how-to'},
    @{slug='track-dividend-portfolio'; title='How to Track Your Dividend Portfolio'; excerpt='Tools and methods for monitoring dividend stocks effectively'; category='how-to'},
    @{slug='screen-quality-dividend-stocks'; title='How to Screen for Quality Dividend Stocks'; excerpt='Step-by-step dividend stock screening using fundamental metrics'; category='how-to'},
    @{slug='read-dividend-payout-ratios'; title='How to Read Dividend Payout Ratios'; excerpt='Understand payout ratios and what they reveal about sustainability'; category='how-to'}
)

# BATCH 3: Advanced How-To & Strategy (10 articles)
$batch3 = @(
    @{slug='calculate-total-return-dividends'; title='How to Calculate Total Return with Dividends'; excerpt='Calculate total return including capital gains and reinvested dividends'; category='strategy'},
    @{slug='dividend-snowball-strategy'; title='How to Create a Dividend Snowball'; excerpt='Use the dividend snowball method for exponential growth'; category='strategy'},
    @{slug='diversify-dividend-portfolio'; title='How to Diversify a Dividend Portfolio'; excerpt='Build diversified portfolio across sectors and risk levels'; category='strategy'},
    @{slug='evaluate-dividend-cuts'; title='How to Evaluate Dividend Cuts and Suspensions'; excerpt='Understand dividend cuts and protect your portfolio'; category='strategy'},
    @{slug='covered-calls-dividend-stocks'; title='How to Use Covered Calls with Dividend Stocks'; excerpt='Generate additional income by selling covered calls'; category='strategy'},
    @{slug='dividend-investing-vs-index-funds'; title='Dividend Investing vs Index Funds'; excerpt='Compare dividend investing vs passive index fund strategy'; category='strategy'},
    @{slug='drip-vs-manual-reinvestment'; title='DRIP vs Manual Reinvestment'; excerpt='Compare automatic DRIP vs manual dividend reinvestment'; category='strategy'},
    @{slug='dividend-growth-vs-high-yield'; title='Dividend Growth vs High Yield: 30-Year Analysis'; excerpt='Compare dividend growth vs high-yield strategies over decades'; category='strategy'},
    @{slug='roth-ira-vs-taxable-dividends'; title='Roth IRA vs Taxable Accounts for Dividends'; excerpt='Compare account types for dividend investing'; category='strategy'},
    @{slug='qualified-vs-ordinary-dividends'; title='Qualified vs Ordinary Dividends'; excerpt='Understand tax implications of different dividend types'; category='strategy'}
)

# BATCH 4: Tax & Advanced (10 articles)
$batch4 = @(
    @{slug='dollar-cost-averaging-dividends'; title='Dollar-Cost Averaging for Dividends'; excerpt='Use dollar-cost averaging to build dividend portfolio systematically'; category='tax'},
    @{slug='value-vs-growth-dividend-stocks'; title='Value vs Growth Dividend Stocks'; excerpt='Compare value and growth dividend investing approaches'; category='tax'},
    @{slug='etfs-vs-individual-dividend-stocks'; title='ETFs vs Individual Dividend Stocks'; excerpt='Compare dividend ETFs vs picking individual stocks'; category='tax'},
    @{slug='dividend-strategy-by-age'; title='Dividend Strategy by Age'; excerpt='Tailor dividend strategy to your age and life stage'; category='tax'},
    @{slug='dividend-reinvestment-vs-cash'; title='Dividend Reinvestment vs Taking Cash'; excerpt='Decide whether to reinvest dividends or take cash'; category='tax'},
    @{slug='dividend-tax-guide-2026'; title='Complete Dividend Tax Guide 2026'; excerpt='Comprehensive tax guide for dividend investors'; category='tax'},
    @{slug='best-accounts-dividend-investing'; title='Best Accounts for Dividend Investing'; excerpt='Compare 401k, IRA, and taxable accounts for dividends'; category='tax'},
    @{slug='minimize-dividend-taxes'; title='How to Minimize Dividend Taxes Legally'; excerpt='Legal strategies to reduce dividend tax burden'; category='tax'},
    @{slug='foreign-dividend-tax-withholding'; title='Foreign Dividend Tax Withholding'; excerpt='Understand foreign dividend taxes and optimization'; category='tax'},
    @{slug='tax-loss-harvesting-dividends'; title='Tax-Loss Harvesting with Dividend Stocks'; excerpt='Use tax-loss harvesting to offset dividend income taxes'; category='tax'}
)

# BATCH 5: Advanced Topics (10 articles)
$batch5 = @(
    @{slug='dividend-capture-strategy'; title='Dividend Capture Strategy: Does It Work?'; excerpt='Evaluate dividend capture strategy effectiveness in 2026'; category='advanced'},
    @{slug='how-companies-decide-dividends'; title='How Companies Decide Dividend Amounts'; excerpt='Understand how boards decide dividends'; category='advanced'},
    @{slug='unsustainable-dividend-warning-signs'; title='Warning Signs of Unsustainable Dividends'; excerpt='Learn red flags that signal unsustainable dividends'; category='advanced'},
    @{slug='dividend-aristocrats-vs-kings'; title='Dividend Aristocrats vs Dividend Kings'; excerpt='Compare Aristocrats (25+ years) vs Kings (50+ years)'; category='advanced'},
    @{slug='build-dividend-portfolio-from-scratch'; title='Building a Dividend Portfolio from Scratch'; excerpt='Step-by-step roadmap to build dividend portfolio from zero'; category='advanced'},
    @{slug='dividend-stocks-for-women'; title='Dividend Investing for Women'; excerpt='Dividend strategies tailored for women investors'; category='advanced'},
    @{slug='dividend-stocks-small-accounts'; title='Best Dividend Stocks for Small Accounts'; excerpt='Dividend stocks perfect for investors with limited capital'; category='advanced'},
    @{slug='dividend-stocks-large-portfolios'; title='Dividend Strategies for Large Portfolios'; excerpt='Advanced strategies for substantial investment portfolios'; category='advanced'},
    @{slug='international-dividend-stocks'; title='International Dividend Stocks'; excerpt='Dividend stocks from developed and emerging markets'; category='advanced'},
    @{slug='recession-proof-dividend-stocks'; title='Recession-Proof Dividend Stocks'; excerpt='Find dividend stocks that survive economic downturns'; category='advanced'}
)

# Create all blog posts
Write-Host "Creating Batch 1: Stock Lists (10 articles)..." -ForegroundColor Cyan
$batch1 | ForEach-Object { Create-BlogPost -slug $_.slug -title $_.title -excerpt $_.excerpt -category $_.category }

Write-Host "`nCreating Batch 2: How-To Guides (10 articles)..." -ForegroundColor Cyan
$batch2 | ForEach-Object { Create-BlogPost -slug $_.slug -title $_.title -excerpt $_.excerpt -category $_.category }

Write-Host "`nCreating Batch 3: Advanced How-To & Strategy (10 articles)..." -ForegroundColor Cyan
$batch3 | ForEach-Object { Create-BlogPost -slug $_.slug -title $_.title -excerpt $_.excerpt -category $_.category }

Write-Host "`nCreating Batch 4: Tax & Advanced (10 articles)..." -ForegroundColor Cyan
$batch4 | ForEach-Object { Create-BlogPost -slug $_.slug -title $_.title -excerpt $_.excerpt -category $_.category }

Write-Host "`nCreating Batch 5: Advanced Topics (10 articles)..." -ForegroundColor Cyan
$batch5 | ForEach-Object { Create-BlogPost -slug $_.slug -title $_.title -excerpt $_.excerpt -category $_.category }

Write-Host "`n=====================================" -ForegroundColor Green
Write-Host "Blog Generation Complete!" -ForegroundColor Green
Write-Host "=====================================" -ForegroundColor Green
Write-Host "Total directories created: 50" -ForegroundColor Green
Write-Host "Total page.tsx files generated: 50" -ForegroundColor Green
