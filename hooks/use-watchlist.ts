"use client"

import { useState, useEffect } from 'react'
import { useToast } from '@/hooks/use-toast'
import { createClient } from '@/lib/supabase/client'
import type { WatchlistItem } from '@/types/aristocrats'

export function useWatchlist() {
  const [watchlist, setWatchlist] = useState<WatchlistItem[]>([])
  const [loading, setLoading] = useState(true)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const { toast } = useToast()
  const supabase = createClient()

  // Check authentication status
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const { data: { user } } = await supabase.auth.getUser()
        setIsAuthenticated(!!user)

        if (user) {
          fetchWatchlist()
        } else {
          setLoading(false)
        }
      } catch (error) {
        console.warn('Supabase auth check failed - authentication disabled', error)
        setIsAuthenticated(false)
        setLoading(false)
      }
    }

    checkAuth()

    // Subscribe to auth changes
    try {
      const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
        setIsAuthenticated(!!session)
        if (session) {
          fetchWatchlist()
        } else {
          setWatchlist([])
        }
      })

      return () => subscription.unsubscribe()
    } catch (error) {
      console.warn('Supabase auth subscription failed', error)
      return () => {} // No-op cleanup
    }
  }, [])

  const fetchWatchlist = async () => {
    try {
      const response = await fetch('/api/watchlist')
      if (response.ok) {
        const { data } = await response.json()
        setWatchlist(data || [])
      }
    } catch (error) {
      console.error('Failed to fetch watchlist:', error)
    } finally {
      setLoading(false)
    }
  }

  const addToWatchlist = async (symbol: string, name: string) => {
    if (!isAuthenticated) {
      toast({
        title: "Sign in required",
        description: "Please sign in to add stocks to your watchlist.",
        variant: "destructive"
      })
      return false
    }

    try {
      const response = await fetch('/api/watchlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ symbol, name })
      })

      if (response.ok) {
        const { data } = await response.json()
        setWatchlist(prev => [data, ...prev])
        return true
      } else if (response.status === 409) {
        toast({
          title: "Already in watchlist",
          description: `${symbol} is already in your watchlist.`
        })
        return false
      } else {
        throw new Error('Failed to add to watchlist')
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to add stock to watchlist.",
        variant: "destructive"
      })
      return false
    }
  }

  const removeFromWatchlist = async (symbol: string) => {
    try {
      const response = await fetch(`/api/watchlist?symbol=${symbol}`, {
        method: 'DELETE'
      })

      if (response.ok) {
        setWatchlist(prev => prev.filter(item => item.symbol !== symbol))
        return true
      } else {
        throw new Error('Failed to remove from watchlist')
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to remove stock from watchlist.",
        variant: "destructive"
      })
      return false
    }
  }

  const isInWatchlist = (symbol: string) => {
    return watchlist.some(item => item.symbol === symbol)
  }

  return {
    watchlist,
    loading,
    isAuthenticated,
    addToWatchlist,
    removeFromWatchlist,
    isInWatchlist,
    refetch: fetchWatchlist
  }
}