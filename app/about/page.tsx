import { Metadata } from 'next'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Users,
  TrendingUp,
  Calculator,
  Mail,
  BarChart3,
  Target,
  Award,
  ExternalLink
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'About | Dividend Calculator - Media Kit & Partnership Information',
  description: 'Learn about Dividend Calculator, our audience demographics, traffic statistics, and partnership opportunities for financial service providers.',
  openGraph: {
    title: 'About Dividend Calculator - Media Kit',
    description: 'Professional dividend investing tools serving thousands of investors monthly.',
  }
}

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <Badge className="mb-4" variant="secondary">
          Media Kit & Partnership Information
        </Badge>
        <h1 className="text-4xl font-bold mb-4">
          About Dividend Calculator
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Empowering dividend investors with professional-grade calculators and educational resources
          to make informed investment decisions.
        </p>
      </div>

      {/* Mission Statement */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-5 w-5" />
            Our Mission
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg leading-relaxed">
            Dividend Calculator was built to demystify dividend investing and help investors of all experience
            levels understand the power of compound growth. We provide free, easy-to-use calculators that show
            the real impact of dividend reinvestment, helping people make data-driven investment decisions.
          </p>
        </CardContent>
      </Card>

      {/* Statistics Grid */}
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between mb-2">
              <Users className="h-8 w-8 text-blue-600" />
              <Badge variant="secondary">Monthly</Badge>
            </div>
            <div className="text-3xl font-bold mb-1">15,000+</div>
            <p className="text-sm text-muted-foreground">Unique Visitors</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between mb-2">
              <Calculator className="h-8 w-8 text-green-600" />
              <Badge variant="secondary">Monthly</Badge>
            </div>
            <div className="text-3xl font-bold mb-1">8,500+</div>
            <p className="text-sm text-muted-foreground">Calculator Completions</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between mb-2">
              <Mail className="h-8 w-8 text-purple-600" />
              <Badge variant="secondary">Growing</Badge>
            </div>
            <div className="text-3xl font-bold mb-1">2,500+</div>
            <p className="text-sm text-muted-foreground">Email Subscribers</p>
          </CardContent>
        </Card>
      </div>

      {/* Audience Demographics */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BarChart3 className="h-5 w-5" />
            Audience Demographics
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold mb-4">Who They Are</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <div className="min-w-0 flex-1">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm">Age 25-34</span>
                      <span className="text-sm font-semibold">35%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: '35%' }}></div>
                    </div>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <div className="min-w-0 flex-1">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm">Age 35-44</span>
                      <span className="text-sm font-semibold">30%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: '30%' }}></div>
                    </div>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <div className="min-w-0 flex-1">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm">Age 45-54</span>
                      <span className="text-sm font-semibold">20%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: '20%' }}></div>
                    </div>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <div className="min-w-0 flex-1">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm">Age 55+</span>
                      <span className="text-sm font-semibold">15%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: '15%' }}></div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Key Characteristics</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <TrendingUp className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Income-focused investors</strong> seeking passive income through dividends</span>
                </li>
                <li className="flex items-start gap-2">
                  <TrendingUp className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Long-term mindset</strong> with average investment horizon of 10+ years</span>
                </li>
                <li className="flex items-start gap-2">
                  <TrendingUp className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Active learners</strong> researching dividend aristocrats and DRIP strategies</span>
                </li>
                <li className="flex items-start gap-2">
                  <TrendingUp className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Portfolio builders</strong> typically managing $25K-$250K in investments</span>
                </li>
                <li className="flex items-start gap-2">
                  <TrendingUp className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Tech-savvy</strong> - 70% access from mobile devices</span>
                </li>
                <li className="flex items-start gap-2">
                  <TrendingUp className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span><strong>High engagement</strong> - average session duration of 4.5 minutes</span>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Tools & Features */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Award className="h-5 w-5" />
            Our Tools & Features
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-3">Calculators</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <Calculator className="h-4 w-4 text-blue-600" />
                  <span>Dividend Growth Calculator</span>
                </li>
                <li className="flex items-center gap-2">
                  <Calculator className="h-4 w-4 text-blue-600" />
                  <span>DRIP Calculator with Reinvestment</span>
                </li>
                <li className="flex items-center gap-2">
                  <Calculator className="h-4 w-4 text-blue-600" />
                  <span>Dividend Yield Calculator</span>
                </li>
                <li className="flex items-center gap-2">
                  <Calculator className="h-4 w-4 text-blue-600" />
                  <span>Portfolio Income Projector</span>
                </li>
                <li className="flex items-center gap-2">
                  <Calculator className="h-4 w-4 text-blue-600" />
                  <span>Dividend Tax Calculator</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-3">Content & Resources</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <ExternalLink className="h-4 w-4 text-purple-600" />
                  <span>Educational blog posts on dividend investing</span>
                </li>
                <li className="flex items-center gap-2">
                  <ExternalLink className="h-4 w-4 text-purple-600" />
                  <span>Stock-specific landing pages for dividend stocks</span>
                </li>
                <li className="flex items-center gap-2">
                  <ExternalLink className="h-4 w-4 text-purple-600" />
                  <span>Broker comparison guides</span>
                </li>
                <li className="flex items-center gap-2">
                  <ExternalLink className="h-4 w-4 text-purple-600" />
                  <span>DRIP strategy guides</span>
                </li>
                <li className="flex items-center gap-2">
                  <ExternalLink className="h-4 w-4 text-purple-600" />
                  <span>Weekly newsletter with market insights</span>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Partnership Opportunities */}
      <Card className="mb-8 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950">
        <CardHeader>
          <CardTitle>Partnership Opportunities</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-6">
            We partner with reputable financial services that align with our mission of helping dividend
            investors succeed. Our affiliate placements are strategic, honest, and provide genuine value
            to our audience.
          </p>

          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className="bg-white dark:bg-gray-900 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Broker Comparisons</h4>
              <p className="text-sm text-muted-foreground">
                Featured placement in our broker comparison tables with detailed pros/cons
              </p>
            </div>
            <div className="bg-white dark:bg-gray-900 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Stock Landing Pages</h4>
              <p className="text-sm text-muted-foreground">
                Contextual recommendations on 500+ stock-specific pages
              </p>
            </div>
            <div className="bg-white dark:bg-gray-900 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Email Newsletter</h4>
              <p className="text-sm text-muted-foreground">
                Sponsored content and recommendations to engaged subscribers
              </p>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg">
            <h3 className="font-semibold mb-3">Why Partner With Us?</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <TrendingUp className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span><strong>Qualified traffic:</strong> Visitors are actively researching investment options</span>
              </li>
              <li className="flex items-start gap-2">
                <TrendingUp className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span><strong>High intent:</strong> 75% of users have an active brokerage account or are opening one</span>
              </li>
              <li className="flex items-start gap-2">
                <TrendingUp className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span><strong>Trust & credibility:</strong> Professional tools and unbiased recommendations</span>
              </li>
              <li className="flex items-start gap-2">
                <TrendingUp className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                <span><strong>Growing rapidly:</strong> 25% month-over-month traffic growth</span>
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Contact Section */}
      <Card>
        <CardHeader>
          <CardTitle>Get In Touch</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            Interested in partnering with us? We&apos;re always looking to work with reputable financial
            service providers that can genuinely help our audience.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-blue-600" />
              <div>
                <div className="font-semibold">Partnerships & Media Inquiries</div>
                <a
                  href="mailto:partnerships@dividendcalculator.com"
                  className="text-blue-600 hover:underline"
                >
                  partnerships@dividendcalculator.com
                </a>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <ExternalLink className="h-5 w-5 text-purple-600" />
              <div>
                <div className="font-semibold">Follow Our Updates</div>
                <p className="text-sm text-muted-foreground">Twitter, LinkedIn (coming soon)</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Transparency Note */}
      <div className="mt-8 p-6 bg-blue-50 dark:bg-blue-950 rounded-lg border border-blue-200 dark:border-blue-800">
        <h3 className="font-semibold mb-2">Our Commitment to Transparency</h3>
        <p className="text-sm text-muted-foreground">
          We believe in full transparency with our audience. All affiliate relationships are clearly disclosed,
          and we only recommend products and services we genuinely believe benefit dividend investors. Our
          recommendations are based on extensive research, user feedback, and our commitment to helping
          investors succeed.
        </p>
      </div>
    </div>
  )
}
