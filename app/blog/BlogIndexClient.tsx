'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { BookOpen, Search } from 'lucide-react'
import { BLOG_INDEX } from '@/lib/blog/blog-index.generated'
import { EmailCaptureForm } from '@/components/forms/EmailCaptureForm'

const CATEGORIES = Array.from(
  new Set(BLOG_INDEX.map((p) => p.category).filter(Boolean))
).sort()

const PAGE_SIZE = 24

export function BlogIndexClient() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState<string | null>(null)
  const [visible, setVisible] = useState(PAGE_SIZE)

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return BLOG_INDEX.filter((post) => {
      if (category && post.category !== category) return false
      if (!q) return true
      return (
        post.title.toLowerCase().includes(q) ||
        post.tags.some((t) => t.toLowerCase().includes(q))
      )
    })
  }, [query, category])

  const shown = filtered.slice(0, visible)

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative container mx-auto px-4 py-24">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4 px-4 py-2">
              <BookOpen className="w-3 h-3 mr-1" />
              {BLOG_INDEX.length} Free Dividend Investing Guides
            </Badge>
            <h1 className="text-5xl md:text-7xl font-black mb-6">
              Dividend Investing Insights
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Guides, calculators, and analysis to help you build wealth through dividends
            </p>

            <div className="max-w-md mx-auto">
              <EmailCaptureForm variant="inline" />
            </div>
          </div>
        </div>
      </section>

      {/* Search + category filter */}
      <section className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              value={query}
              onChange={(e) => {
                setQuery(e.target.value)
                setVisible(PAGE_SIZE)
              }}
              placeholder="Search posts by title or tag..."
              className="pl-9"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => {
                setCategory(null)
                setVisible(PAGE_SIZE)
              }}
              className={`px-3 py-1.5 rounded-full text-sm border transition-colors ${
                category === null
                  ? 'bg-primary text-primary-foreground border-primary'
                  : 'border-border hover:bg-muted'
              }`}
            >
              All ({BLOG_INDEX.length})
            </button>
            {CATEGORIES.map((c) => {
              const count = BLOG_INDEX.filter((p) => p.category === c).length
              return (
                <button
                  key={c}
                  onClick={() => {
                    setCategory(c)
                    setVisible(PAGE_SIZE)
                  }}
                  className={`px-3 py-1.5 rounded-full text-sm border transition-colors ${
                    category === c
                      ? 'bg-primary text-primary-foreground border-primary'
                      : 'border-border hover:bg-muted'
                  }`}
                >
                  {c} ({count})
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* Post grid */}
      <section className="container mx-auto px-4 pb-24">
        {shown.length === 0 ? (
          <p className="text-center text-muted-foreground py-16">
            No posts match &ldquo;{query}&rdquo;.
          </p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {shown.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    {post.category && (
                      <Badge variant="outline" className="w-fit mb-2">
                        {post.category}
                      </Badge>
                    )}
                    <CardTitle className="text-lg leading-snug">{post.title}</CardTitle>
                  </CardHeader>
                  {post.tags.length > 0 && (
                    <CardContent className="pt-0 flex flex-wrap gap-1.5">
                      {post.tags.slice(0, 4).map((t) => (
                        <span
                          key={t}
                          className="text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground"
                        >
                          {t}
                        </span>
                      ))}
                    </CardContent>
                  )}
                </Card>
              </Link>
            ))}
          </div>
        )}

        {visible < filtered.length && (
          <div className="text-center mt-10">
            <button
              onClick={() => setVisible((v) => v + PAGE_SIZE)}
              className="px-6 py-2.5 rounded-lg border border-border hover:bg-muted transition-colors font-medium"
            >
              Load more ({filtered.length - visible} remaining)
            </button>
          </div>
        )}
      </section>
    </div>
  )
}
