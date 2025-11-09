import { NextRequest, NextResponse } from 'next/server'
import { createServerSupabaseClient } from '@/lib/supabase/server'
import { logger } from '@/lib/logger'
import type { CalculationHistory } from '@/types/monetization'

/**
 * GET /api/calculations - Get user's calculation history
 */
export async function GET(request: NextRequest) {
  try {
    const supabase = await createServerSupabaseClient()
    
    // Get authenticated user
    const { data: { user }, error: authError } = await supabase.auth.getUser()
    
    if (authError || !user) {
      return NextResponse.json(
        { error: 'Unauthorized - Sign in to view calculation history' },
        { status: 401 }
      )
    }
    
    // Fetch calculation history
    const { searchParams } = new URL(request.url)
    const calculatorType = searchParams.get('type')
    const limit = parseInt(searchParams.get('limit') || '10')
    
    let query = supabase
      .from('calculation_history')
      .select('*')
      .eq('user_id', user.id)
      .order('created_at', { ascending: false })
      .limit(limit)
    
    if (calculatorType) {
      query = query.eq('calculator_type', calculatorType)
    }
    
    const { data: calculations, error } = await query
    
    if (error) {
      logger.error({ error, userId: user.id }, 'Failed to fetch calculations')
      throw error
    }
    
    return NextResponse.json({ 
      data: calculations,
      count: calculations?.length || 0
    })
    
  } catch (error) {
    logger.error({ error }, 'Calculations GET error')
    return NextResponse.json(
      { error: 'Failed to fetch calculation history' },
      { status: 500 }
    )
  }
}

/**
 * POST /api/calculations - Save a calculation
 */
export async function POST(request: NextRequest) {
  try {
    const supabase = await createServerSupabaseClient()
    const body = await request.json()
    
    const { calculatorType, inputs, results, name, notes } = body
    
    if (!calculatorType || !inputs || !results) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }
    
    // Get authenticated user
    const { data: { user }, error: authError } = await supabase.auth.getUser()
    
    if (authError || !user) {
      return NextResponse.json(
        { 
          error: 'Sign in required', 
          message: 'Create a free account to save your calculations'
        },
        { status: 401 }
      )
    }
    
    // Check user's plan for limits
    const { data: profile } = await supabase
      .from('user_profiles')
      .select('subscription_plan')
      .eq('user_id', user.id)
      .single()
    
    // Free users limited to 10 saved calculations
    if (profile?.subscription_plan === 'free') {
      const { count } = await supabase
        .from('calculation_history')
        .select('id', { count: 'exact' })
        .eq('user_id', user.id)
      
      if ((count || 0) >= 10) {
        return NextResponse.json(
          { 
            error: 'Calculation limit reached',
            message: 'Free accounts are limited to 10 saved calculations. Upgrade to Premium for unlimited saves.',
            requiresPremium: true
          },
          { status: 403 }
        )
      }
    }
    
    // Save calculation
    const calculation: Partial<CalculationHistory> = {
      userId: user.id,
      calculatorType: calculatorType,
      inputs,
      results,
      name: name || `${calculatorType} calculation`,
      notes
    }
    
    const { data, error } = await supabase
      .from('calculation_history')
      .insert(calculation)
      .select()
      .single()
    
    if (error) {
      logger.error({ error, userId: user.id }, 'Failed to save calculation')
      throw error
    }
    
    logger.info({ userId: user.id, calculatorType }, 'Calculation saved')
    
    return NextResponse.json({ data })
    
  } catch (error) {
    logger.error({ error }, 'Calculations POST error')
    return NextResponse.json(
      { error: 'Failed to save calculation' },
      { status: 500 }
    )
  }
}

/**
 * DELETE /api/calculations/[id] - Delete a calculation
 */
export async function DELETE(request: NextRequest) {
  try {
    const supabase = await createServerSupabaseClient()
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')
    
    if (!id) {
      return NextResponse.json(
        { error: 'Calculation ID required' },
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
    
    // Delete calculation (RLS ensures user owns it)
    const { error } = await supabase
      .from('calculation_history')
      .delete()
      .eq('id', id)
      .eq('user_id', user.id)
    
    if (error) {
      logger.error({ error, userId: user.id, calculationId: id }, 'Failed to delete calculation')
      throw error
    }
    
    logger.info({ userId: user.id, calculationId: id }, 'Calculation deleted')
    
    return NextResponse.json({ success: true })
    
  } catch (error) {
    logger.error({ error }, 'Calculations DELETE error')
    return NextResponse.json(
      { error: 'Failed to delete calculation' },
      { status: 500 }
    )
  }
}