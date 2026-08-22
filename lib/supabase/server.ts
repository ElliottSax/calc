import { createServerClient, type CookieOptions } from '@supabase/ssr'
import { cookies } from 'next/headers'
import type { Database } from '@/types/database'

export async function createServerSupabaseClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!supabaseUrl || !supabaseKey || supabaseUrl.includes('placeholder')) {
    console.warn('Supabase credentials missing or invalid on server - using placeholder client')
    return createServerClient<Database>(
      'https://placeholder.supabase.co',
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBsYWNlaG9sZGVyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDUxOTI4MDAsImV4cCI6MTk2MDc2ODgwMH0.placeholder',
      {
        cookies: {
          get() { return undefined },
          set() {},
          remove() {},
        },
      }
    )
  }

  // Next.js 15 made cookies() async (it used to return the store directly) --
  // await it once here, before building the get/set/remove closures below,
  // so they close over the already-resolved store rather than each calling
  // .get()/.set() on a Promise (which has no such methods and would throw at
  // runtime the moment @supabase/ssr's client actually invoked one of them).
  const cookieStore = await cookies()

  return createServerClient<Database>(
    supabaseUrl,
    supabaseKey,
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value
        },
        set(name: string, value: string, options: CookieOptions) {
          try {
            cookieStore.set({ name, value, ...options })
          } catch {
            // Cookie setting errors in Server Components can be ignored
          }
        },
        remove(name: string, options: CookieOptions) {
          try {
            cookieStore.set({ name, value: '', ...options })
          } catch {
            // Cookie removal errors in Server Components can be ignored
          }
        },
      },
    }
  )
}
