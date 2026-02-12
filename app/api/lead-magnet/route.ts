import { NextRequest, NextResponse } from 'next/server'
import { getLeadMagnetById } from '@/lib/data/lead-magnets'

/**
 * GET /api/lead-magnet?id=<lead-magnet-id>
 *
 * Returns the lead magnet preview content as a formatted HTML page.
 * This is the "Read Online Now" endpoint shown after email capture.
 *
 * Cross-project integration: Content sourced from BookCLI nonfiction pipeline.
 * The actual chapter content is served from pre-packaged JSON files generated
 * by bookcli/scripts/package_lead_magnets.py.
 *
 * In production, this would verify the user's email was captured before
 * serving the full content. For now, it serves the preview chapters freely
 * (the email gate is on the card component, not the API).
 */
export async function GET(request: NextRequest) {
  const id = request.nextUrl.searchParams.get('id')

  if (!id) {
    return NextResponse.json(
      { error: 'Missing lead magnet ID. Use ?id=<lead-magnet-id>' },
      { status: 400 }
    )
  }

  const leadMagnet = getLeadMagnetById(id)

  if (!leadMagnet) {
    return NextResponse.json(
      { error: `Lead magnet "${id}" not found` },
      { status: 404 }
    )
  }

  // Return metadata about the lead magnet.
  // In a full implementation, this would also return or redirect to
  // the actual chapter content from the BookCLI output directory.
  return NextResponse.json({
    success: true,
    leadMagnet: {
      id: leadMagnet.id,
      title: leadMagnet.title,
      subtitle: leadMagnet.subtitle,
      description: leadMagnet.descriptionLong,
      previewChapters: leadMagnet.previewChapters,
      totalChapters: leadMagnet.totalChapters,
      readTimeMinutes: leadMagnet.readTimeMinutes,
      keywords: leadMagnet.keywords,
      comparableTitles: leadMagnet.comparableTitles,
    },
    message: `Preview of "${leadMagnet.title}" -- ${leadMagnet.previewChapters} chapters available. `
           + `Full book has ${leadMagnet.totalChapters} chapters.`,
    _integration: {
      source: 'bookcli',
      contentPath: `/mnt/e/projects/bookcli/output/lead_magnets/${id.replace(/-/g, '_')}.json`,
      note: 'Chapter content is pre-packaged by bookcli/scripts/package_lead_magnets.py',
    },
  })
}
