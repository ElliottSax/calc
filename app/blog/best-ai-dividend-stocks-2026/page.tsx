import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { AlertTriangle, ArrowRight, Award, BarChart3, CheckCircle2, Color, DollarSign, LineChart, Percent, Star, Target, TrendingUp, Zap } from 'lucide-react'
import { InlineSignup } from '@/components/email/InlineSignup'

export const metadata = {
  title: 'Best AI Dividend Stocks: Tech Companies That Pay Dividends (2026)',
  description: 'The best AI dividend stocks combining artificial intelligence growth with dividend income. Microsoft, Broadcom, Texas Instruments, Intel, and IBM analysis.',
  keywords: ['AI dividend stocks', 'artificial intelligence dividend stocks', 'tech dividend stocks', 'best AI stocks that pay dividends', 'dividend paying AI companies', 'technology dividend stocks 2026'],
}

const aiDividendStocks = [
  {
    symbol: 'MSFT',
    name: 'Microsoft',
    yield: '0.8%',
    growth5yr: '10.2%',
    yearsGrowth: 21,
    payoutRatio: '25%',
    price: '$415',
    aiExposure: 'Very High',
    aiExposureColor: 'green',
    aiRevenue: '$28B+ (Azure AI + Copilot + OpenAI partnership)',
    description: 'Microsoft is the undisputed leader in enterprise AI. Azure AI services grew 60%+ in 2025, GitHub Copilot has 4M+ paying subscribers, and the multi-billion dollar OpenAI partnership gives Microsoft exclusive cloud rights for the most advanced AI models. Every major enterprise is deploying Microsoft AI tools.',
    aiHighlight: 'Copilot AI assistant is being integrated into Office 365 (400M+ users), creating a massive new revenue stream. Azure AI cloud revenue already exceeds $28 billion annually.',
    dividendOutlook: 'With only 25% of earnings paid as dividends, Microsoft could triple its dividend without stress. Expect 10%+ annual increases for the next decade as AI revenue accelerates earnings growth.'
  },
  {
    symbol: 'AVGO',
    name: 'Broadcom',
    yield: '1.8%',
    growth5yr: '18.5%',
    yearsGrowth: 14,
    payoutRatio: '48%',
    price: '$185',
    aiExposure: 'Very High',
    aiExposureColor: 'green',
    aiRevenue: '$12B+ (custom AI chips + networking)',
    description: 'Broadcom designs custom AI accelerator chips for hyperscale cloud providers (Google TPUs, Meta). Its networking silicon connects AI clusters with high-bandwidth switches. The VMware acquisition adds $14B in recurring software revenue. Broadcom is the picks-and-shovels play for AI infrastructure.',
    aiHighlight: 'Custom AI chip (XPU) revenue tripled in 2025. Broadcom is the primary alternative to NVIDIA for companies wanting custom AI silicon. Networking revenue grows as AI data centers expand.',
    dividendOutlook: 'The fastest dividend grower in tech at 18.5% annually. The dividend has 6x-ed over the past decade. Even after the VMware acquisition debt, the payout ratio remains a comfortable 48%.'
  },
  {
    symbol: 'TXN',
    name: 'Texas Instruments',
    yield: '2.9%',
    growth5yr: '12.0%',
    yearsGrowth: 20,
    payoutRatio: '60%',
    price: '$175',
    aiExposure: 'Moderate',
    aiExposureColor: 'yellow',
    aiRevenue: '$3-4B (analog chips in AI edge devices)',
    description: 'Texas Instruments does not build AI processors, but its analog and embedded chips are essential in every AI-enabled device. Self-driving cars use 300+ TXN chips each. Industrial robots, smart sensors, and edge AI devices all require TXN\'s analog components. AI cannot exist without analog.',
    aiHighlight: 'Every AI application at the edge requires analog signal processing. As AI moves from cloud to devices (smartphones, cars, factories), demand for TXN analog chips accelerates. TXN has the best margins in the analog chip industry at 60%+.',
    dividendOutlook: 'The ideal blend of yield (2.9%) and growth (12%). At 20 consecutive years of increases, TXN is approaching Aristocrat status. Massive new fab investments in Texas will drive earnings growth through 2030.'
  },
  {
    symbol: 'INTC',
    name: 'Intel',
    yield: '1.6%',
    growth5yr: '-15%',
    yearsGrowth: 1,
    payoutRatio: '80%',
    price: '$24',
    aiExposure: 'Moderate',
    aiExposureColor: 'yellow',
    aiRevenue: '$2-3B (Gaudi AI accelerators + AI PC chips)',
    description: 'Intel is the turnaround story of AI dividends. After cutting its dividend 66% in 2023, the company is rebuilding with AI PC processors (Core Ultra with NPU) and Gaudi 3 AI accelerators for data centers. The stock is deeply discounted but carries significant execution risk.',
    aiHighlight: 'Intel\'s AI PC chips with built-in neural processing units (NPUs) ship in every new PC from Dell, HP, and Lenovo. Gaudi 3 accelerators offer 40% better price-performance vs. NVIDIA H100 for inference workloads.',
    dividendOutlook: 'WARNING: Intel cut its dividend from $0.365 to $0.125 per quarter in 2023. The current yield reflects the reduced payout. Dividend growth will depend entirely on the turnaround succeeding. This is a speculative recovery play, not a reliable income stock.'
  },
  {
    symbol: 'IBM',
    name: 'IBM',
    yield: '3.8%',
    growth5yr: '1.2%',
    yearsGrowth: 28,
    payoutRatio: '65%',
    price: '$175',
    aiExposure: 'High',
    aiExposureColor: 'green',
    aiRevenue: '$6-8B (watsonx AI platform + consulting)',
    description: 'IBM has repositioned itself as an enterprise AI and hybrid cloud company. The watsonx platform lets enterprises build and deploy AI models with governance and compliance. IBM Consulting has trained 100,000+ consultants in AI, making it the largest AI advisory practice in the world.',
    aiHighlight: 'Enterprise AI consulting is IBM\'s killer advantage. Companies need help implementing AI safely, and IBM\'s $20B+ consulting arm is the largest in the industry. The watsonx platform targets the $500B+ enterprise AI market.',
    dividendOutlook: '28 consecutive years of dividend increases, the longest streak in tech. Growth has been slow (1.2%) but consistent. As AI consulting revenue accelerates, expect dividend growth to improve to 3-5% annually.'
  },
  {
    symbol: 'CSCO',
    name: 'Cisco Systems',
    yield: '2.9%',
    growth5yr: '3.0%',
    yearsGrowth: 13,
    payoutRatio: '55%',
    price: '$53',
    aiExposure: 'Moderate',
    aiExposureColor: 'yellow',
    aiRevenue: '$3-5B (AI networking infrastructure)',
    description: 'Cisco builds the networking infrastructure that AI data centers require. Every AI training cluster needs high-speed switches, routers, and security. The Splunk acquisition adds AI-powered observability and security analytics. Cisco is the networking backbone of the AI revolution.',
    aiHighlight: 'AI data center networking is a $15B+ market growing 25% annually. Cisco and Broadcom dominate this space. The Splunk acquisition brings AI-powered security and observability to enterprise customers.',
    dividendOutlook: 'Solid 2.9% yield with a sustainable 55% payout ratio. Growth has been modest at 3% but the AI networking tailwind could accelerate increases. Cisco generates $12B+ in annual free cash flow, providing ample dividend coverage.'
  },
  {
    symbol: 'QCOM',
    name: 'Qualcomm',
    yield: '2.1%',
    growth5yr: '6.5%',
    yearsGrowth: 21,
    payoutRatio: '33%',
    price: '$165',
    aiExposure: 'High',
    aiExposureColor: 'green',
    aiRevenue: '$5-7B (on-device AI for smartphones and PCs)',
    description: 'Qualcomm\'s Snapdragon processors power AI on billions of smartphones and increasingly in PCs and vehicles. The Snapdragon X Elite chip brings AI processing to Windows laptops, competing with Apple Silicon. Qualcomm earns royalties on every 5G phone sold globally.',
    aiHighlight: 'On-device AI is Qualcomm\'s sweet spot. Running AI locally on phones and PCs (vs. cloud) improves privacy and speed. Qualcomm\'s Snapdragon 8 Gen 4 supports 30B+ parameter AI models running entirely on your phone.',
    dividendOutlook: 'With 21 consecutive years of increases and a low 33% payout ratio, Qualcomm has substantial room for dividend growth. AI revenue acceleration should drive faster increases than the historical 6.5% rate.'
  },
  {
    symbol: 'ORCL',
    name: 'Oracle',
    yield: '1.2%',
    growth5yr: '12.5%',
    yearsGrowth: 15,
    payoutRatio: '35%',
    price: '$135',
    aiExposure: 'High',
    aiExposureColor: 'green',
    aiRevenue: '$8-10B (OCI AI cloud + database AI)',
    description: 'Oracle Cloud Infrastructure (OCI) is the fastest-growing cloud platform, favored for AI training due to lower costs than AWS. Oracle Database 23c has built-in AI features. The company signed multi-billion dollar AI cloud deals with major enterprises throughout 2025.',
    aiHighlight: 'OCI is winning massive AI workloads because of 30-50% cost advantages over AWS and Azure for GPU training. Oracle signed $12B+ in cloud contracts in a single quarter. The database business adds AI vector search and machine learning capabilities.',
    dividendOutlook: 'Oracle has raised dividends 12.5% annually with a low 35% payout ratio. As OCI cloud revenue scales, earnings growth should accelerate, supporting continued double-digit dividend increases.'
  },
]

export default function BestAiDividendStocks2026() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      {/* Hero */}
      <div className="mb-12">
        <Badge className="mb-4 bg-cyan-100 text-cyan-800">
          <Zap className="h-3 w-3 mr-1" />
          AI + Income
        </Badge>
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4">
          Best AI Dividend Stocks: Tech Companies That Pay Dividends (2026)
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 mb-6">
          You do not have to choose between AI growth and dividend income. These 8 technology companies are leading
          the artificial intelligence revolution AND paying growing dividends. Get AI exposure with cash in your pocket.
        </p>
        <div className="flex items-center gap-4 text-sm text-slate-500 flex-wrap">
          <span>Updated: February 2026</span>
          <span>|</span>
          <span>12 min read</span>
          <span>|</span>
          <span className="flex items-center gap-1">
            <Zap className="h-4 w-4" />
            8 AI dividend stocks
          </span>
        </div>
      </div>

      {/* Why AI + Dividends */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <Target className="h-7 w-7 text-blue-600" />
          Why Combine AI Exposure with Dividends?
        </h2>

        <Card className="bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-950 dark:to-blue-950 border-2 border-cyan-200 mb-6">
          <CardContent className="pt-6">
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
              Most AI hype stocks (NVIDIA, AMD, Palantir) pay no dividends. You are 100% dependent on stock price
              appreciation. If the AI bubble deflates, you are left with nothing. AI dividend stocks give you:
            </p>
            <div className="grid md:grid-cols-2 gap-3 text-sm">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span><strong>AI growth exposure</strong> -- participate in the biggest tech trend since the internet</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span><strong>Cash income regardless of stock price</strong> -- dividends keep flowing even in bear markets</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span><strong>Established businesses</strong> -- these companies earn billions from non-AI revenue too</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span><strong>Lower volatility</strong> -- dividend stocks tend to drop less during market selloffs</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <h3 className="font-bold mb-3">The AI Revenue Landscape (2026)</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
              The global AI market is projected at $500B+ in 2026. Here is how revenue breaks down by layer:
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between p-2 bg-slate-50 dark:bg-slate-800 rounded">
                <span>AI Cloud Infrastructure (Azure, OCI, AWS)</span>
                <span className="font-bold">$180B</span>
              </div>
              <div className="flex justify-between p-2 bg-slate-50 dark:bg-slate-800 rounded">
                <span>AI Chips & Hardware (GPUs, custom silicon)</span>
                <span className="font-bold">$130B</span>
              </div>
              <div className="flex justify-between p-2 bg-slate-50 dark:bg-slate-800 rounded">
                <span>AI Software & Applications (Copilot, watsonx)</span>
                <span className="font-bold">$95B</span>
              </div>
              <div className="flex justify-between p-2 bg-slate-50 dark:bg-slate-800 rounded">
                <span>AI Networking & Infrastructure</span>
                <span className="font-bold">$55B</span>
              </div>
              <div className="flex justify-between p-2 bg-slate-50 dark:bg-slate-800 rounded">
                <span>AI Consulting & Services</span>
                <span className="font-bold">$40B</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Stock Picks */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <Star className="h-7 w-7 text-yellow-500" />
          8 Best AI Dividend Stocks for 2026
        </h2>

        <div className="space-y-8">
          {aiDividendStocks.map((stock, idx) => (
            <Card key={stock.symbol} className="border-l-4 border-l-cyan-500">
              <CardContent className="pt-6">
                <div className="flex items-start justify-between mb-3 flex-wrap gap-2">
                  <div>
                    <h3 className="text-xl font-bold">{idx + 1}. {stock.name} ({stock.symbol})</h3>
                    <p className="text-sm text-slate-500">{stock.price}</p>
                  </div>
                  <div className="flex gap-2 flex-wrap">
                    <Badge className="bg-green-600">{stock.yield} Yield</Badge>
                    <Badge className={stock.aiExposureColor === 'green' ? 'bg-cyan-600' : 'bg-yellow-600'}>
                      {stock.aiExposure} AI Exposure
                    </Badge>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4 text-sm">
                  <div className="bg-slate-50 dark:bg-slate-800 p-2 rounded">
                    <p className="text-slate-500 text-xs">Dividend Yield</p>
                    <p className="font-bold">{stock.yield}</p>
                  </div>
                  <div className="bg-slate-50 dark:bg-slate-800 p-2 rounded">
                    <p className="text-slate-500 text-xs">5yr Div Growth</p>
                    <p className="font-bold text-green-600">{stock.growth5yr}</p>
                  </div>
                  <div className="bg-slate-50 dark:bg-slate-800 p-2 rounded">
                    <p className="text-slate-500 text-xs">Payout Ratio</p>
                    <p className="font-bold">{stock.payoutRatio}</p>
                  </div>
                  <div className="bg-slate-50 dark:bg-slate-800 p-2 rounded">
                    <p className="text-slate-500 text-xs">AI Revenue</p>
                    <p className="font-bold text-cyan-600">{stock.aiRevenue}</p>
                  </div>
                </div>

                <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">{stock.description}</p>

                <div className="bg-cyan-50 dark:bg-cyan-950 p-3 rounded mb-3">
                  <p className="text-sm"><strong className="text-cyan-700">AI Angle:</strong> {stock.aiHighlight}</p>
                </div>

                <div className="bg-green-50 dark:bg-green-950 p-3 rounded">
                  <p className="text-sm"><strong className="text-green-700">Dividend Outlook:</strong> {stock.dividendOutlook}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Email Signup */}
      <section className="mb-16">
        <InlineSignup />
      </section>

      {/* Notable Mention: NVIDIA */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <AlertTriangle className="h-7 w-7 text-yellow-600" />
          What About NVIDIA?
        </h2>
        <Card className="border-yellow-200 bg-yellow-50 dark:bg-yellow-950">
          <CardContent className="pt-6">
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
              NVIDIA is the dominant AI chip company, but its dividend yield is only 0.03% (three cents per hundred
              dollars invested). On a $10,000 investment, you would earn $3 per year in dividends. While NVIDIA does
              technically pay a dividend, it is essentially a rounding error.
            </p>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              If you want AI chip exposure with meaningful income, Broadcom (1.8% yield, 18.5% growth) is the better
              choice. For pure AI exposure without needing income, NVIDIA remains the gold standard -- but it does not
              belong on a dividend-focused list.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <Card>
            <CardContent className="pt-6">
              <h3 className="font-bold mb-2">Is the AI trend sustainable or a bubble?</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                AI enterprise spending is real and growing. Microsoft, Oracle, and IBM are all reporting double-digit
                revenue growth from AI products that companies are paying for. Unlike the dot-com bubble where revenue
                was speculative, today's AI leaders are generating billions in actual revenue. The stocks on this list
                have profitable AI businesses, not just promises.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <h3 className="font-bold mb-2">Can AI stocks really be good dividend investments?</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Yes, but with realistic expectations. Tech dividend yields (0.8-3.8%) are lower than traditional
                sectors like utilities (4%) or REITs (5%). The advantage is much faster dividend GROWTH. Broadcom
                at 18.5% annual growth will yield more on your original cost basis than a REIT within 5-7 years,
                and dramatically more within 10-15 years.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <h3 className="font-bold mb-2">Should I invest in Intel given the dividend cut history?</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Only if you are comfortable with turnaround risk. Intel cut its dividend 66% in 2023 and the
                recovery depends on successfully competing with TSMC in chip manufacturing and NVIDIA in AI
                accelerators. The risk/reward is high. For conservative dividend investors, stick with Microsoft,
                Broadcom, and IBM. Intel is only for those willing to bet on the comeback.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <h3 className="font-bold mb-2">How much of my portfolio should be in AI dividend stocks?</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Technology stocks (including AI) should be 20-30% of a diversified dividend portfolio. Within that
                allocation, 3-5 AI dividend stocks provides adequate exposure. Do not overconcentrate in tech even
                if the AI story is compelling -- sector diversification protects you when tech inevitably corrects.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Calculator CTA */}
      <section className="mb-16">
        <Card className="bg-gradient-to-br from-cyan-600 to-blue-700 text-white">
          <CardContent className="pt-8 pb-8">
            <h3 className="text-2xl font-bold mb-4 text-white">Model Your AI Dividend Portfolio Growth</h3>
            <p className="mb-6 text-cyan-100">
              See how AI dividend stocks with 10-18% growth rates compound your income over the next decade.
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
              <Link href="/calculators/investment-return">
                <Button size="lg" variant="secondary" className="gap-2">
                  <LineChart className="h-5 w-5" />
                  Investment Return Calculator
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Related Articles */}
      <Card className="bg-slate-50 dark:bg-slate-900">
        <CardContent className="pt-6">
          <h3 className="font-bold text-lg mb-4">Related Articles</h3>
          <div className="grid gap-3">
            <Link href="/blog/best-technology-dividend-stocks" className="text-blue-600 hover:underline flex items-center gap-2">
              <ArrowRight className="h-4 w-4" />
              Best Technology Dividend Stocks
            </Link>
            <Link href="/blog/best-dividend-growth-stocks-2026" className="text-blue-600 hover:underline flex items-center gap-2">
              <ArrowRight className="h-4 w-4" />
              Best Dividend Growth Stocks 2026
            </Link>
            <Link href="/blog/best-dividend-stocks-for-young-investors" className="text-blue-600 hover:underline flex items-center gap-2">
              <ArrowRight className="h-4 w-4" />
              Best Dividend Stocks for Young Investors in Their 20s
            </Link>
            <Link href="/blog/highest-paying-dividend-stocks" className="text-blue-600 hover:underline flex items-center gap-2">
              <ArrowRight className="h-4 w-4" />
              Highest Paying Dividend Stocks: Top 20 Yields
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
