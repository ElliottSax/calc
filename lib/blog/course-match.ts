// Topic matching between courses/lessons and blog posts, used to render real
// contextual links in both directions (app/blog/layout.tsx and
// app/courses/[courseSlug]/page.tsx) instead of leaving them unlinked.
import { BLOG_INDEX, type BlogIndexEntry } from './blog-index.generated'
import { courses, type Course, type Lesson } from '@/lib/data/courses'

const STOPWORDS = new Set([
  'the', 'a', 'an', 'and', 'or', 'to', 'of', 'in', 'on', 'for', 'is', 'are',
  'your', 'you', 'what', 'how', 'why', 'that', 'this', 'with', 'from', 'it',
  'actually', 'really', 'complete', 'guide', 'free', 'course', 'lesson',
])

function significantWords(title: string): Set<string> {
  return new Set(
    title
      .toLowerCase()
      .replace(/[^a-z0-9\s]/g, ' ')
      .split(/\s+/)
      .filter((w) => w.length >= 4 && !STOPWORDS.has(w))
  )
}

function overlapCount(a: Set<string>, b: Set<string>): number {
  let n = 0
  for (const w of a) if (b.has(w)) n++
  return n
}

/** Real blog posts whose title shares >=2 significant words with the given title. Caps at 3. */
export function relatedPostsForTitle(title: string): BlogIndexEntry[] {
  const target = significantWords(title)
  if (target.size === 0) return []
  return BLOG_INDEX
    .map((post) => ({ post, score: overlapCount(target, significantWords(post.title)) }))
    .filter((r) => r.score >= 2)
    .sort((a, b) => b.score - a.score)
    .slice(0, 3)
    .map((r) => r.post)
}

/** For a blog post title, the single best-matching course or lesson link, if any real match clears the bar. */
export function relatedLessonForPostTitle(
  postTitle: string
): { href: string; label: string } | null {
  const target = significantWords(postTitle)
  if (target.size === 0) return null

  let best: { href: string; label: string; score: number } | null = null
  for (const course of courses as Course[]) {
    const courseScore = overlapCount(target, significantWords(course.title))
    if (courseScore >= 2 && (!best || courseScore > best.score)) {
      best = { href: `/courses/${course.slug}`, label: course.title, score: courseScore }
    }
    for (const lesson of course.lessons as Lesson[]) {
      const lessonScore = overlapCount(target, significantWords(lesson.title))
      if (lessonScore >= 2 && (!best || lessonScore > best.score)) {
        best = {
          href: `/courses/${course.slug}#${lesson.slug}`,
          label: lesson.title,
          score: lessonScore,
        }
      }
    }
  }
  return best ? { href: best.href, label: best.label } : null
}
