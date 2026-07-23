import Link from 'next/link'
import type { Metadata } from 'next'
import { courses } from '@/lib/data/courses'

export const metadata: Metadata = {
  title: 'Free Dividend Investing Courses | Dividend Engines',
  description:
    'Free, self-paced courses on dividend investing — how dividends work, yield vs. growth, DRIP compounding, portfolio building, and dividend taxes. No signup required.',
  alternates: { canonical: 'https://dividendengines.com/courses' },
}

export default function CoursesPage() {
  return (
    <main className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-3 text-gray-900 dark:text-white">Free Courses</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-10">
          Self-paced dividend investing courses. Free, no signup, no email required — just read them.
        </p>

        <div className="grid gap-6">
          {courses.map((course) => (
            <Link
              key={course.slug}
              href={`/courses/${course.slug}`}
              className="block rounded-lg border border-gray-200 dark:border-gray-700 p-6 hover:border-blue-500 hover:shadow-md transition-all"
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xs font-medium uppercase tracking-wide text-blue-600 dark:text-blue-400">
                  {course.level}
                </span>
                <span className="text-xs text-gray-500">{course.estimatedTime}</span>
                <span className="text-xs text-gray-500">{course.lessons.length} lessons</span>
              </div>
              <h2 className="text-2xl font-semibold mb-2 text-gray-900 dark:text-white">{course.title}</h2>
              <p className="text-gray-600 dark:text-gray-300">{course.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}
