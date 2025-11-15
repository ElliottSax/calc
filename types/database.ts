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
        }
        Insert: {
          id?: string
          user_id: string
          symbol: string
          name: string
          added_at?: string
          notes?: string | null
        }
        Update: {
          id?: string
          user_id?: string
          symbol?: string
          name?: string
          added_at?: string
          notes?: string | null
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