import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { courses, getCourse } from '@/lib/data/courses'

export function generateStaticParams() {
  return courses.map((c) => ({ courseSlug: c.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ courseSlug: string }>
}): Promise<Metadata> {
  const { courseSlug } = await params
  const course = getCourse(courseSlug)
  if (!course) return { title: 'Course Not Found | Dividend Engines' }
  return {
    title: `${course.title} — Free Course | Dividend Engines`,
    description: course.description,
    alternates: { canonical: `https://dividendengines.com/courses/${course.slug}` },
  }
}

const md = {
  h2: ({ node, ...p }: any) => <h2 className="text-2xl font-bold mt-8 mb-3 text-gray-900 dark:text-white" {...p} />,
  h3: ({ node, ...p }: any) => <h3 className="text-lg font-semibold mt-6 mb-2 text-gray-900 dark:text-white" {...p} />,
  p: ({ node, ...p }: any) => <p className="mb-4 leading-7 text-gray-700 dark:text-gray-300" {...p} />,
  ul: ({ node, ...p }: any) => <ul className="list-disc pl-6 mb-4 space-y-1" {...p} />,
  ol: ({ node, ...p }: any) => <ol className="list-decimal pl-6 mb-4 space-y-1" {...p} />,
  li: ({ node, ...p }: any) => <li className="leading-7 text-gray-700 dark:text-gray-300" {...p} />,
  strong: ({ node, ...p }: any) => <strong className="font-semibold text-gray-900 dark:text-white" {...p} />,
  a: ({ node, ...p }: any) => <a className="text-blue-600 hover:underline" {...p} />,
}

export default async function CoursePage({ params }: { params: Promise<{ courseSlug: string }> }) {
  const { courseSlug } = await params
  const course = getCourse(courseSlug)
  if (!course) notFound()

  return (
    <main className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/courses" className="hover:text-gray-900 dark:hover:text-white">
            Free Courses
          </Link>
          {' / '}
          <span className="text-gray-900 dark:text-white">{course.title}</span>
        </nav>

        <h1 className="text-4xl font-bold mb-3 text-gray-900 dark:text-white">{course.title}</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">{course.description}</p>
        <p className="text-sm text-gray-500 mb-10">
          {course.lessons.length} lessons · {course.estimatedTime} · free, no signup
        </p>

        {/* Contents */}
        <div className="rounded-lg border border-gray-200 dark:border-gray-700 p-5 mb-12">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-gray-500 mb-3">Contents</h2>
          <ol className="list-decimal pl-5 space-y-1">
            {course.lessons.map((l) => (
              <li key={l.slug}>
                <a href={`#${l.slug}`} className="text-blue-600 hover:underline">
                  {l.title}
                </a>
                <span className="text-gray-500 text-sm"> · {l.readTime}</span>
              </li>
            ))}
          </ol>
        </div>

        {/* Lessons */}
        {course.lessons.map((lesson, i) => (
          <section key={lesson.slug} id={lesson.slug} className="mb-14 scroll-mt-20">
            <p className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-1">
              Lesson {i + 1} of {course.lessons.length} · {lesson.readTime}
            </p>
            <h2 className="text-3xl font-bold mb-2 text-gray-900 dark:text-white">{lesson.title}</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">{lesson.description}</p>

            <div className="prose-none">
              <ReactMarkdown remarkPlugins={[remarkGfm]} components={md}>
                {lesson.content}
              </ReactMarkdown>
            </div>

            {lesson.tryIt && (
              <div className="mt-6 rounded-lg border border-blue-200 dark:border-blue-900 bg-blue-50 dark:bg-blue-950/30 p-5">
                <h3 className="font-semibold mb-1 text-gray-900 dark:text-white">{lesson.tryIt.title}</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-3">{lesson.tryIt.description}</p>
                <Link
                  href={lesson.tryIt.href}
                  className="inline-block rounded-md bg-blue-600 px-4 py-2 text-white font-medium hover:bg-blue-700"
                >
                  {lesson.tryIt.label}
                </Link>
              </div>
            )}
          </section>
        ))}

        <div className="border-t border-gray-200 dark:border-gray-700 pt-8">
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            That&apos;s the course. The fastest way to make it concrete is to run your own numbers.
          </p>
          <Link
            href="/calculators/drip"
            className="inline-block rounded-md bg-blue-600 px-5 py-2.5 text-white font-medium hover:bg-blue-700"
          >
            Open the DRIP Calculator
          </Link>
        </div>
      </div>
    </main>
  )
}
