# Dormant: legacy parallel blog system

**Moved here:** 2026-09-06, during a dead-code sweep.

`blog-sitemap.ts`, `blog-data.ts`, and `blog-content.ts` are a self-contained
chain (`blog-sitemap.ts` -> `blog-data.ts` -> `blog-content.ts`) with zero
outside importers. `articles-manifest.ts` is a separate, unrelated 764-line
metadata table for the same abandoned "50 SEO articles" generator, moved in
here alongside them since they're all dormant pieces of the same never-
launched blog pipeline; its only consumer,
`app/blog/_dormant-page-template/page-template.tsx`, moved alongside it too
(see that directory's DORMANT.md).

All four files collide directly with the live blog system in this same
folder: `app/sitemap.ts`, `lib/blog/slug-mapping.ts`, `lib/blog/
blog-index.generated.ts`, and `lib/blog/course-match.ts` (all left in place,
unaffected). `blog-content.ts` in particular carries a verbatim copy of the
`SLUG_TO_FILE` map that `app/blog/[id]/page.tsx` maintains live — a future
edit to one would silently miss the other, which is exactly the risk this
move is meant to surface.

**Decision needed:** delete this whole cluster (the live blog system already
covers slug resolution and sitemap generation) unless the manifest content
represents article topics genuinely worth writing. Given the site's active
scaled-content penalty and the standing "don't write more content" guidance
in this repo's CLAUDE.md, deletion is the more defensible default here. Until
decided, leave dormant.
