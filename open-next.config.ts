import { defineCloudflareConfig } from "@opennextjs/cloudflare";
import staticAssetsIncrementalCache from "@opennextjs/cloudflare/overrides/incremental-cache/static-assets-incremental-cache";

// No revalidation anywhere on this site (see app/blog/[id]/page.tsx and
// app/sitemap.ts): the ~2,470 blog posts and the sitemap are fully static,
// pre-rendered at build time via generateStaticParams, and the autopublish
// job that adds new posts triggers its own full rebuild rather than relying
// on runtime revalidation. That means no R2/KV/D1/Queue bindings are needed
// for ISR -- OpenNext's read-only Workers Static Assets incremental cache is
// the documented minimal setup for a static site and is enough to serve the
// prerendered routes from the `assets` binding already in wrangler.jsonc.
export default defineCloudflareConfig({
  incrementalCache: staticAssetsIncrementalCache,
  enableCacheInterception: true,
});
