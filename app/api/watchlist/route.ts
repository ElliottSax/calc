import { NextRequest, NextResponse } from 'next/server'
import { createServerSupabaseClient } from '@/lib/supabase/server'
import { logger } from '@/lib/logger'

/**
 * GET /api/watchlist - Get user's watchlist
 */
export async function GET(request: NextRequest) {
  try {
    const supabase = await createServerSupabaseClient()
    
    // Get authenticated user
    const { data: { user }, error: authError } = await supabase.auth.getUser()
    
    if (authError || !user) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }
    
    // Fetch user's watchlist
    const { data: watchlist, error } = await supabase
      .from('watchlist')
      .select('*')
      .eq('user_id', user.id)
      .order('added_at', { ascending: false })
    
    if (error) {
      logger.error({ error, userId: user.id }, 'Failed to fetch watchlist')
      throw error
    }
    
    return NextResponse.json({ data: watchlist })
    
  } catch (error) {
    logger.error({ error }, 'Watchlist GET error')
    return NextResponse.json(
      { error: 'Failed to fetch watchlist' },
      { status: 500 }
    )
  }
}

/**
 * POST /api/watchlist - Add stock to watchlist
 */
export async function POST(request: NextRequest) {
  try {
    const supabase = await createServerSupabaseClient()
    const body = await request.json()
    
    const { symbol, name, notes, targetYield, targetPrice } = body
    
    if (!symbol || !name) {
      return NextResponse.json(
        { error: 'Symbol and name are required' },
        { status: 400 }
      )
    }
    
    // Get authenticated user
    const { data: { user }, error: authError } = await supabase.auth.getUser()
    
    if (authError || !user) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }
    
    // Check if already in watchlist
    const { data: existing } = await supabase
      .from('watchlist')
      .select('id')
      .eq('user_id', user.id)
      .eq('symbol', symbol)
      .single()
    
    if (existing) {
      return NextResponse.json(
        { error: 'Stock already in watchlist' },
        { status: 409 }
      )
    }
    
    // Add to watchlist
    const { data, error } = await (supabase
      .from('watchlist') as any)
      .insert({
        user_id: user.id,
        symbol,
        name,
        notes,
        target_yield: targetYield,
        target_price: targetPrice
      })
      .select()
      .single()
    
    if (error) {
      logger.error({ error, userId: user.id, symbol }, 'Failed to add to watchlist')
      throw error
    }
    
    logger.info({ userId: user.id, symbol }, 'Added stock to watchlist')
    
    return NextResponse.json({ data })
    
  } catch (error) {
    logger.error({ error }, 'Watchlist POST error')
    return NextResponse.json(
      { error: 'Failed to add to watchlist' },
      { status: 500 }
    )
  }
}

/**
 * DELETE /api/watchlist - Remove stock from watchlist
 */
export async function DELETE(request: NextRequest) {
  try {
    const supabase = await createServerSupabaseClient()
    const { searchParams } = new URL(request.url)
    const symbol = searchParams.get('symbol')
    
    if (!symbol) {
      return NextResponse.json(
        { error: 'Symbol is required' },
        { status: 400 }
      )
    }
    
    // Get authenticated user
    const { data: { user }, error: authError } = await supabase.auth.getUser()
    
    if (authError || !user) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }
    
    // Remove from watchlist
    const { error } = await supabase
      .from('watchlist')
      .delete()
      .eq('user_id', user.id)
      .eq('symbol', symbol)
    
    if (error) {
      logger.error({ error, userId: user.id, symbol }, 'Failed to remove from watchlist')
      throw error
    }
    
    logger.info({ userId: user.id, symbol }, 'Removed stock from watchlist')
    
    return NextResponse.json({ success: true })
    
  } catch (error) {
    logger.error({ error }, 'Watchlist DELETE error')
    return NextResponse.json(
      { error: 'Failed to remove from watchlist' },
      { status: 500 }
    )
  }
}