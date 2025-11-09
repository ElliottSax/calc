import { createBrowserClient } from '@supabase/ssr'
import type { Database } from '@/types/database'

/**
 * Create a Supabase browser client with safety checks
 * Returns a client even if credentials are missing (graceful degradation)
 */
export function createClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  // Check if credentials are valid (not empty, not placeholder)
  const hasValidCredentials =
    supabaseUrl &&
    supabaseKey &&
    !supabaseUrl.includes('placeholder') &&
    !supabaseKey.includes('placeholder') &&
    supabaseUrl.startsWith('https://')

  if (!hasValidCredentials) {
    console.warn('Supabase credentials missing or invalid - using mock client')
    // Return a mock client that won't crash the app
    return createBrowserClient<Database>(
      'https://placeholder.supabase.co',
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBsYWNlaG9sZGVyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDUxOTI4MDAsImV4cCI6MTk2MDc2ODgwMH0.placeholder'
    )
  }

  return createBrowserClient<Database>(
    supabaseUrl,
    supabaseKey
  )
}