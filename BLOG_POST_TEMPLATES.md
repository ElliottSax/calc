# Blog Post Templates

Use these templates to create blog posts faster. Each template includes the full structure with placeholders for content.

---

## Template 1: Stock List Post (e.g., "Best [Sector] Dividend Stocks")

Use this for posts listing top dividend stocks in a category.

```tsx
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { [ICON_NAME] } from 'lucide-react'
import { InlineSignup } from '@/components/email/InlineSignup'

export const metadata = {
  title: 'Best [CATEGORY] Dividend Stocks 2026: [VALUE_PROP]',
  description: '[150-160 char description with keywords and benefits]',
}

export default function [ComponentName]() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      {/* Hero Section */}
      <div className="mb-12 text-center">
        <Badge className="mb-4" variant="secondary">
          <[ICON_NAME] className="h-3 w-3 mr-1" />
          [Category Label]
        </Badge>
        <h1 className="text-4xl md:text-5xl font-black mb-4">
          Best [Category] Dividend Stocks 2026
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 mb-6">
          [Compelling subtitle explaining value proposition - 1-2 sentences]
        </p>
      </div>

      {/* Main Content Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Top [NUMBER] [Category] Dividend Stocks</h2>

        {/* Stock #1 - Featured (Green border) */}
        <Card className="border-l-4 border-l-green-500 mb-6">
          <CardHeader>
            <div className="flex items-start justify-between">
              <div>
                <CardTitle className="text-2xl">1. [Company Name] ([TICKER])</CardTitle>
                <CardDescription>[Brief tagline | Key differentiator]</CardDescription>
              </div>
              <Badge className="bg-green-600">[X.X%] Yield</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-3 mb-4 text-sm">
              <div>
                <p className="text-slate-600 dark:text-slate-400">Market Cap</p>
                <p className="font-semibold">$[XXX]B</p>
              </div>
              <div>
                <p className="text-slate-600 dark:text-slate-400">[Metric 2]</p>
                <p className="font-semibold">[Value]</p>
              </div>
              <div>
                <p className="text-slate-600 dark:text-slate-400">[Metric 3]</p>
                <p className="font-semibold">[Value]</p>
              </div>
              <div>
                <p className="text-slate-600 dark:text-slate-400">[Metric 4]</p>
                <p className="font-semibold text-green-600">[Value]</p>
              </div>
            </div>

            <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
              [3-5 sentences describing the company, its business model, dividend history,
              competitive advantages, and why it's a good dividend investment. Include specific
              data points and recent performance metrics.]
            </p>

            <Link href="/stocks/[ticker]">
              <Button variant="outline" size="sm">Calculate [TICKER] Returns →</Button>
            </Link>
          </CardContent>
        </Card>

        {/* Stock #2 - Blue border */}
        <Card className="border-l-4 border-l-blue-500 mb-6">
          <CardHeader>
            <div className="flex items-start justify-between">
              <div>
                <CardTitle className="text-2xl">2. [Company Name] ([TICKER])</CardTitle>
                <CardDescription>[Brief tagline]</CardDescription>
              </div>
              <Badge className="bg-blue-600">[X.X%] Yield</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-700 dark:text-slate-300">
              [Description - can be shorter than #1 if needed]
            </p>
          </CardContent>
        </Card>

        {/* Stock #3 - Purple border */}
        <Card className="border-l-4 border-l-purple-500 mb-6">
          <CardHeader>
            <div className="flex items-start justify-between">
              <div>
                <CardTitle className="text-2xl">3. [Company Name] ([TICKER])</CardTitle>
                <CardDescription>[Brief tagline]</CardDescription>
              </div>
              <Badge className="bg-purple-600">[X.X%] Yield</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-700 dark:text-slate-300">
              [Description]
            </p>
          </CardContent>
        </Card>

        {/* Quick Reference Table */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Quick Reference: Top [Category] Dividend Stocks</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-2">Stock</th>
                    <th className="text-right p-2">Yield</th>
                    <th className="text-left p-2">[Column 3]</th>
                    <th className="text-left p-2">[Column 4]</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b"><td className="p-2">[Company] ([TICKER])</td><td className="p-2 text-right">[X.X%]</td><td className="p-2">[Value]</td><td className="p-2">[Value]</td></tr>
                  {/* Add 7-10 more rows */}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Email Signup CTA */}
      <div className="my-16">
        <InlineSignup
          variant="featured"
          title="[Lead Magnet Title]"
          description="[Value proposition - what they'll get]"
          buttonText="[CTA Button Text]"
          source="[post_slug]_blog"
        />
      </div>

      {/* Why This Category Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Why [Category] for Dividend Income?</h2>

        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>[Benefit #1]</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                [Explanation of benefit - 2-3 sentences]
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>[Benefit #2]</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                [Explanation]
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>[Benefit #3]</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                [Explanation]
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Sample Portfolio Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Sample [Category] Portfolio</h2>

        <Card>
          <CardHeader>
            <CardTitle>[Portfolio Name]</CardTitle>
            <CardDescription>$[XX]K investment | [X.X%] average yield</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 mb-6">
              <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-900 rounded">
                <div>
                  <span className="font-semibold block">[Stock 1] ([TICKER])</span>
                  <span className="text-xs text-slate-600 dark:text-slate-400">[Reason]</span>
                </div>
                <span>$[X,XXX] | [XX%]</span>
              </div>
              {/* Add 4-5 more positions */}
            </div>

            <div className="p-4 bg-green-50 dark:bg-green-950 rounded-lg">
              <p className="font-bold mb-2">Portfolio Stats:</p>
              <div className="grid grid-cols-3 gap-4 text-sm">
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Annual Income</p>
                  <p className="font-semibold">$[X,XXX]</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">Avg Yield</p>
                  <p className="font-semibold">[X.X%]</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">[Other Metric]</p>
                  <p className="font-semibold">[Value]</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Final CTA Section */}
      <section className="mb-16">
        <Card className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 border-2">
          <CardHeader>
            <CardTitle className="text-2xl">[Final CTA Headline]</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-6 text-slate-700 dark:text-slate-300">
              [Summary paragraph reinforcing key points and call to action]
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/stocks/[ticker]">
                <Button className="w-full" size="lg">Calculate Returns →</Button>
              </Link>
              <Link href="/tools/compare">
                <Button variant="outline" className="w-full" size="lg">Compare Stocks →</Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Related Articles */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Related Articles</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <Link href="/blog/[related-post-1]">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="text-lg">[Related Post Title]</CardTitle>
                <CardDescription>[Brief description]</CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link href="/blog/[related-post-2]">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="text-lg">[Related Post Title]</CardTitle>
                <CardDescription>[Brief description]</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        </div>
      </section>
    </div>
  )
}
```

---

## Template 2: How-To Guide Post

Use this for educational/tutorial content.

```tsx
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { [ICON], CheckCircle, AlertCircle } from 'lucide-react'

export const metadata = {
  title: 'How to [ACTION]: [BENEFIT] [2026 Guide]',
  description: '[150-160 char guide to achieving specific outcome]',
}

export default function [ComponentName]() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      {/* Hero Section */}
      <div className="mb-12 text-center">
        <Badge className="mb-4" variant="secondary">
          <[ICON] className="h-3 w-3 mr-1" />
          [Category]
        </Badge>
        <h1 className="text-4xl md:text-5xl font-black mb-4">
          How to [Action/Goal]
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 mb-6">
          [Brief explanation of what they'll learn and the outcome]
        </p>
      </div>

      {/* Quick Summary Box */}
      <Card className="mb-16 border-l-4 border-l-blue-500">
        <CardHeader>
          <CardTitle>What You'll Learn</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
              <span>[Key Learning Point 1]</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
              <span>[Key Learning Point 2]</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
              <span>[Key Learning Point 3]</span>
            </li>
          </ul>
        </CardContent>
      </Card>

      {/* Step-by-Step Instructions */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Step-by-Step Guide</h2>

        {/* Step 1 */}
        <Card className="mb-6">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Badge className="bg-blue-600 text-lg px-3 py-1">1</Badge>
              <CardTitle className="text-2xl">Step 1: [Action]</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-slate-700 dark:text-slate-300">
              [Detailed explanation of step 1 - 2-4 sentences]
            </p>

            <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg">
              <p className="font-semibold mb-2">Example:</p>
              <p className="text-sm">[Concrete example showing how to do this step]</p>
            </div>
          </CardContent>
        </Card>

        {/* Step 2 */}
        <Card className="mb-6">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Badge className="bg-blue-600 text-lg px-3 py-1">2</Badge>
              <CardTitle className="text-2xl">Step 2: [Action]</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-slate-700 dark:text-slate-300">
              [Explanation]
            </p>
          </CardContent>
        </Card>

        {/* Add more steps as needed */}
      </section>

      {/* Common Mistakes Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Common Mistakes to Avoid</h2>

        <div className="space-y-4">
          <Card className="border-l-4 border-l-red-500">
            <CardHeader>
              <div className="flex items-start gap-3">
                <AlertCircle className="h-6 w-6 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <CardTitle>[Mistake #1]</CardTitle>
                  <CardDescription>[Why this is a problem]</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
                <strong>Instead:</strong> [What to do correctly]
              </p>
            </CardContent>
          </Card>

          {/* Add 2-3 more common mistakes */}
        </div>
      </section>

      {/* Real Example Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Real Example: [Specific Case]</h2>

        <Card>
          <CardHeader>
            <CardTitle>[Example Scenario Title]</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-slate-700 dark:text-slate-300">
              [Setup the example scenario - who, what, when, where]
            </p>

            <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-lg mb-4">
              <p className="font-semibold mb-2">The Numbers:</p>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div>
                  <p className="text-slate-600 dark:text-slate-400">[Metric 1]</p>
                  <p className="font-semibold">[Value]</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">[Metric 2]</p>
                  <p className="font-semibold">[Value]</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-400">[Metric 3]</p>
                  <p className="font-semibold">[Value]</p>
                </div>
              </div>
            </div>

            <p className="text-sm text-slate-700 dark:text-slate-300">
              <strong>Result:</strong> [What happened in the end - the outcome]
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Tools & Resources */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Helpful Tools & Resources</h2>

        <div className="grid md:grid-cols-2 gap-4">
          <Card>
            <CardHeader>
              <CardTitle>[Tool/Resource Name]</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                [What this tool does and why it's helpful]
              </p>
              <Link href="[/path/to/tool]">
                <Button variant="outline" className="w-full">Use [Tool] →</Button>
              </Link>
            </CardContent>
          </Card>

          {/* Add 2-3 more tools/resources */}
        </div>
      </section>

      {/* Final CTA */}
      <section className="mb-16">
        <Card className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 border-2">
          <CardHeader>
            <CardTitle className="text-2xl">[Action-Oriented Headline]</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-6 text-slate-700 dark:text-slate-300">
              [Motivational closing paragraph summarizing the benefit]
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/tools/[relevant-tool]">
                <Button className="w-full" size="lg">[Primary CTA] →</Button>
              </Link>
              <Link href="/blog/[related-guide]">
                <Button variant="outline" className="w-full" size="lg">[Secondary CTA] →</Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Related Articles */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Related Guides</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <Link href="/blog/[related-1]">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="text-lg">[Related Title]</CardTitle>
                <CardDescription>[Description]</CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link href="/blog/[related-2]">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="text-lg">[Related Title]</CardTitle>
                <CardDescription>[Description]</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        </div>
      </section>
    </div>
  )
}
```

---

## Template 3: Comparison/Strategy Post

Use this for comparing two approaches or explaining strategic decisions.

```tsx
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { [ICON], Check, X } from 'lucide-react'

export const metadata = {
  title: '[Option A] vs [Option B]: Which is Better for [Goal]?',
  description: '[Compare A and B - which wins for your situation]',
}

export default function [ComponentName]() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      {/* Hero Section */}
      <div className="mb-12 text-center">
        <Badge className="mb-4" variant="secondary">
          <[ICON] className="h-3 w-3 mr-1" />
          [Category]
        </Badge>
        <h1 className="text-4xl md:text-5xl font-black mb-4">
          [Option A] vs [Option B]
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 mb-6">
          [Brief explanation of what's being compared and why it matters]
        </p>
      </div>

      {/* Quick Verdict Box */}
      <Card className="mb-16 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-950 dark:to-blue-950 border-2">
        <CardHeader>
          <CardTitle className="text-2xl">The Verdict</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg mb-4">
            <strong>For [Scenario 1]:</strong> [Option A/B wins - brief reason]
          </p>
          <p className="text-lg">
            <strong>For [Scenario 2]:</strong> [Option A/B wins - brief reason]
          </p>
        </CardContent>
      </Card>

      {/* Side-by-Side Comparison */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Head-to-Head Comparison</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Option A */}
          <Card className="border-l-4 border-l-green-500">
            <CardHeader>
              <CardTitle className="text-2xl">[Option A]</CardTitle>
              <CardDescription>[Brief tagline]</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 mb-4">
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">[Pro #1]</span>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">[Pro #2]</span>
                </div>
                <div className="flex items-start">
                  <X className="h-5 w-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">[Con #1]</span>
                </div>
              </div>

              <div className="p-3 bg-green-50 dark:bg-green-950 rounded">
                <p className="text-sm font-semibold mb-1">Best For:</p>
                <p className="text-sm">[Who should choose option A]</p>
              </div>
            </CardContent>
          </Card>

          {/* Option B */}
          <Card className="border-l-4 border-l-blue-500">
            <CardHeader>
              <CardTitle className="text-2xl">[Option B]</CardTitle>
              <CardDescription>[Brief tagline]</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 mb-4">
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">[Pro #1]</span>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">[Pro #2]</span>
                </div>
                <div className="flex items-start">
                  <X className="h-5 w-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">[Con #1]</span>
                </div>
              </div>

              <div className="p-3 bg-blue-50 dark:bg-blue-950 rounded">
                <p className="text-sm font-semibold mb-1">Best For:</p>
                <p className="text-sm">[Who should choose option B]</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Detailed Comparison Table */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Detailed Comparison</h2>

        <Card>
          <CardContent className="pt-6">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-3">Factor</th>
                    <th className="text-center p-3">[Option A]</th>
                    <th className="text-center p-3">[Option B]</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-3 font-semibold">[Factor 1]</td>
                    <td className="p-3 text-center">[Value/Rating]</td>
                    <td className="p-3 text-center">[Value/Rating]</td>
                  </tr>
                  {/* Add 5-8 more comparison rows */}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Real-World Scenarios */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Which Should You Choose?</h2>

        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Scenario 1: [Specific Situation]</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                [Description of scenario and relevant factors]
              </p>
              <div className="p-3 bg-green-50 dark:bg-green-950 rounded">
                <p className="font-semibold text-green-700 dark:text-green-400">
                  ✓ Choose [Option]: [Reason why]
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Add 2-3 more scenarios */}
        </div>
      </section>

      {/* Related Articles */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Related Articles</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <Link href="/blog/[related-1]">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="text-lg">[Title]</CardTitle>
                <CardDescription>[Description]</CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link href="/blog/[related-2]">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="text-lg">[Title]</CardTitle>
                <CardDescription>[Description]</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        </div>
      </section>
    </div>
  )
}
```

---

## Quick Tips for All Templates

### Content Guidelines
- **Word count**: Aim for 2,500-3,500 words for stock lists, 2,000-3,000 for how-tos
- **Tone**: Professional but accessible. Explain jargon. Use "you" and "your"
- **Examples**: Always include specific stock tickers, actual numbers, real scenarios
- **Data**: Use current 2026 data. Verify dividend yields and company info

### SEO Reminders
- Target keyword in: title, first paragraph, 2-3 H2 headings
- Natural keyword density (1-2%) - don't force it
- 3-5 internal links per post
- Meta description must be 150-160 characters

### Component Usage
- **Badges**: Use for categories, highlights, safety ratings
- **Border colors**: Green = best/featured, Blue = second, Purple = third, Red = warning
- **Icons**: Import from lucide-react, keep consistent with post theme
- **InlineSignup**: Place after delivering value, before final CTA

### Common Placeholders to Replace
- `[TICKER]` - Stock ticker symbol (uppercase)
- `[Company Name]` - Full company name
- `[X.X%]` - Dividend yield percentage
- `[Category]` - Sector or category name
- `[ICON_NAME]` - Lucide React icon name
- `[ComponentName]` - PascalCase component name matching slug

---

## Batch Creation Workflow

1. **Choose template** based on post type
2. **Copy template** to new file at `app/blog/[slug]/page.tsx`
3. **Find & replace** all placeholders with actual content
4. **Write custom content** for each section (don't just fill in blanks - add value!)
5. **Add internal links** to relevant stock pages, tools, other posts
6. **Verify data accuracy** - check current dividend yields, company info
7. **Test locally** - run `npm run dev` and visit `/blog/[slug]`
8. **Run through checklist** - use BLOG_POST_TESTING_CHECKLIST.md

### Time-Saving Tricks
- Keep a list of common stocks with their current yields handy
- Reuse table structures across similar posts (just change data)
- Create content outlines before writing to stay focused
- Write in batches of 5 to maintain consistency
- Use AI to help research but always verify facts and add unique insights
