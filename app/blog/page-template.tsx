/**
 * This is a template file for blog posts
 * Replace [SLUG], [TITLE], [META_DESCRIPTION], [CONTENT], [KEYWORDS] with actual values
 * This file demonstrates the structure for all blog post pages
 */

import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, Clock, User, Calendar, TrendingUp, AlertTriangle, CheckCircle2 } from 'lucide-react'
import { InlineSignup } from '@/components/email/InlineSignup'
import { getArticleBySlug, getRelatedArticles } from '@/lib/blog/articles-manifest'

export const metadata = {
  title: '[TITLE]',
  description: '[META_DESCRIPTION]',
  keywords: '[KEYWORDS]',
  openGraph: {
    title: '[TITLE]',
    description: '[META_DESCRIPTION]',
    type: 'article',
  },
}

interface PageProps {
  params: {
    slug: string
  }
}

export default function BlogPost({ params }: PageProps) {
  const article = getArticleBySlug(params.slug)
  const relatedArticles = getRelatedArticles(params.slug)

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      {/* Back Button */}
      <Link href="/blog" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6">
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to Blog
      </Link>

      {/* Hero Section */}
      <div className="mb-12">
        {article && (
          <Badge className="mb-4" variant="secondary">
            {article.category.charAt(0).toUpperCase() + article.category.slice(1).replace('-', ' ')}
          </Badge>
        )}
        <h1 className="text-4xl md:text-5xl font-black mb-4">
          [TITLE]
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 mb-6">
          [SUBTITLE_OR_EXCERPT]
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
            <li><a href="#section1" className="text-blue-600 hover:underline">Section 1</a></li>
            <li><a href="#section2" className="text-blue-600 hover:underline">Section 2</a></li>
            <li><a href="#section3" className="text-blue-600 hover:underline">Section 3</a></li>
            <li><a href="#calculator-cta" className="text-blue-600 hover:underline">Use Our Calculator</a></li>
            <li><a href="#faq" className="text-blue-600 hover:underline">FAQ</a></li>
          </ul>
        </CardContent>
      </Card>

      {/* Main Content */}
      <div className="prose prose-slate dark:prose-invert max-w-none mb-12">
        <p className="text-lg leading-relaxed">
          [INTRODUCTION_PARAGRAPH]
        </p>
      </div>

      {/* Section 1 */}
      <section id="section1" className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Section 1 Title</h2>
        <div className="space-y-6">
          <p className="text-lg text-slate-700 dark:text-slate-300">
            [CONTENT]
          </p>
          <Card className="bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-800">
            <CardContent className="pt-6">
              <p className="text-sm font-semibold mb-2">Key Takeaway:</p>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                [KEY_POINT]
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Section 2 */}
      <section id="section2" className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Section 2 Title</h2>
        <div className="space-y-6">
          <p className="text-lg text-slate-700 dark:text-slate-300">
            [CONTENT]
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Point 1</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  [DETAIL]
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Point 2</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  [DETAIL]
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Calculator CTA */}
      <section id="calculator-cta" className="mb-16">
        <div className="my-12">
          <InlineSignup
            variant="featured"
            title="Calculate Your Dividend Returns"
            description="Use our free dividend calculator to model your investment scenarios and see how your portfolio could grow"
            buttonText="Open Calculator"
            source="blog_post"
          />
        </div>
      </section>

      {/* Section 3 */}
      <section id="section3" className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Section 3 Title</h2>
        <div className="space-y-6">
          <p className="text-lg text-slate-700 dark:text-slate-300">
            [CONTENT]
          </p>
          <Card className="border-l-4 border-l-yellow-500 bg-yellow-50 dark:bg-yellow-950">
            <CardHeader>
              <AlertTriangle className="h-8 w-8 text-yellow-600 mb-2" />
              <CardTitle>Important Consideration</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                [WARNING_OR_IMPORTANT_NOTE]
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Question 1?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                [ANSWER]
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Question 2?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                [ANSWER]
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Question 3?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                [ANSWER]
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Conclusion */}
      <section className="mb-16">
        <Card className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-950 dark:to-blue-950 border-2">
          <CardHeader>
            <CardTitle className="text-2xl">Ready to Implement This Strategy?</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-6 text-slate-700 dark:text-slate-300">
              [CONCLUSION]
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/calculators/drip">
                <Button variant="outline" className="w-full" size="lg">
                  Try DRIP Calculator →
                </Button>
              </Link>
              <Link href="/calculators/dividend-growth">
                <Button className="w-full" size="lg">
                  Dividend Growth Calculator →
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section>
          <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {relatedArticles.slice(0, 4).map((related) => (
              <Link key={related.slug} href={`/blog/${related.slug}`}>
                <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                  <CardHeader>
                    <CardTitle className="text-lg">{related.title}</CardTitle>
                    <CardDescription>{related.metaDescription.substring(0, 100)}...</CardDescription>
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
