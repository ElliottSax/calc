/**
 * Dynamic route handler for numeric blog IDs
 * Implements 301 redirects from /blog/[id] to /blog/[slug]
 * Critical for SEO - preserves ranking signals and prevents 404 errors
 */

import { NextRequest, NextResponse } from 'next/server'
import { getSlugForId, isValidBlogId } from '@/lib/blog/slug-mapping'

/**
 * Redirect numeric blog IDs to slug-based URLs
 * This preserves SEO value through 301 permanent redirects
 */
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = params.id

  // Validate ID format (numeric only)
  if (!/^\d+$/.test(id)) {
    return NextResponse.json(
      { error: 'Invalid blog ID format' },
      { status: 400 }
    )
  }

  // Check if ID exists in mapping
  if (!isValidBlogId(id)) {
    return NextResponse.json(
      { error: 'Blog post not found', id },
      { status: 404 }
    )
  }

  // Get corresponding slug
  const slug = getSlugForId(id)
  if (!slug) {
    return NextResponse.json(
      { error: 'Blog post not found', id },
      { status: 404 }
    )
  }

  // Return 301 redirect to new slug-based URL
  // This preserves all PageRank and ranking signals
  return NextResponse.redirect(
    `${request.nextUrl.origin}/blog/${slug}`,
    {
      status: 301,
      headers: {
        'Cache-Control': 'public, max-age=31536000, immutable', // Cache permanently
      },
    }
  )
}

/**
 * Optional: Handle other HTTP methods
 */
export async function HEAD(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  return GET(request, { params })
}
