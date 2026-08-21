'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { BLOG_INDEX } from '@/lib/blog/blog-index.generated'
import { relatedLessonForPostTitle } from '@/lib/blog/course-match'

function CourseCrossLink() {
  const pathname = usePathname()
  const slug = pathname?.split('/').filter(Boolean).pop()
  const post = BLOG_INDEX.find((p) => p.slug === slug)
  if (!post) return null

  const match = relatedLessonForPostTitle(post.title)
  if (!match) return null

  return (
    <div className="container mx-auto px-4">
      <div className="max-w-3xl mx-auto mb-8 rounded-lg border border-blue-200 dark:border-blue-900 bg-blue-50 dark:bg-blue-950/30 p-4 text-sm">
        <span className="text-gray-700 dark:text-gray-300">Related free lesson: </span>
        <Link href={match.href} className="text-blue-600 dark:text-blue-400 font-medium hover:underline">
          {match.label} →
        </Link>
      </div>
    </div>
  )
}

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CourseCrossLink />
      {children}
    </>
  )
}
