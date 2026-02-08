/**
 * Database types for Supabase integration
 * These types should match your Supabase database schema
 */

export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      users: {
        Row: {
          id: string
          email: string
          created_at: string
          updated_at: string
          full_name: string | null
          avatar_url: string | null
        }
        Insert: {
          id?: string
          email: string
          created_at?: string
          updated_at?: string
          full_name?: string | null
          avatar_url?: string | null
        }
        Update: {
          id?: string
          email?: string
          created_at?: string
          updated_at?: string
          full_name?: string | null
          avatar_url?: string | null
        }
      }
      saved_calculations: {
        Row: {
          id: string
          user_id: string
          name: string
          type: 'drip' | 'yield' | 'growth'
          inputs: Json
          results: Json
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          name: string
          type: 'drip' | 'yield' | 'growth'
          inputs: Json
          results: Json
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          name?: string
          type?: 'drip' | 'yield' | 'growth'
          inputs?: Json
          results?: Json
          created_at?: string
          updated_at?: string
        }
      }
      watchlist: {
        Row: {
          id: string
          user_id: string
          symbol: string
          name: string
          added_at: string
          notes: string | null
          target_yield: number | null
          target_price: number | null
        }
        Insert: {
          id?: string
          user_id: string
          symbol: string
          name: string
          added_at?: string
          notes?: string | null
          target_yield?: number | null
          target_price?: number | null
        }
        Update: {
          id?: string
          user_id?: string
          symbol?: string
          name?: string
          added_at?: string
          notes?: string | null
          target_yield?: number | null
          target_price?: number | null
        }
      }
      user_profiles: {
        Row: {
          id: string
          user_id: string
          subscription_plan: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          subscription_plan?: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          subscription_plan?: string
          created_at?: string
          updated_at?: string
        }
      }
      calculation_history: {
        Row: {
          id: string
          user_id: string
          calculator_type: string
          inputs: Json
          results: Json
          name: string | null
          notes: string | null
          created_at: string
        }
        Insert: {
          id?: string
          user_id: string
          calculator_type: string
          inputs: Json
          results: Json
          name?: string | null
          notes?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          calculator_type?: string
          inputs?: Json
          results?: Json
          name?: string | null
          notes?: string | null
          created_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      calculation_type: 'drip' | 'yield' | 'growth'
    }
  }
}