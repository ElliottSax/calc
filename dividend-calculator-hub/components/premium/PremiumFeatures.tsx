"use client"

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useToast } from '@/hooks/use-toast'
import { 
  Save, 
  Download, 
  FileSpreadsheet, 
  History, 
  TrendingUp,
  Lock,
  Crown,
  Check
} from 'lucide-react'
import { createClient } from '@/lib/supabase/client'
import { trackFeatureUse, trackPremiumConversion } from '@/lib/analytics/tracking'
import { exportToPDF } from '@/lib/export/pdf'
import { exportToExcel } from '@/lib/export/excel'
import type { DripCalculationResult, DripSummary } from '@/types/calculator'

interface PremiumFeaturesProps {
  calculatorType: 'drip' | 'yield' | 'growth'
  calculationResults: DripCalculationResult[] | null
  calculationSummary: DripSummary | null
  calculationInputs: any
}

export function PremiumFeatures({
  calculatorType,
  calculationResults,
  calculationSummary,
  calculationInputs
}: PremiumFeaturesProps) {
  const [saving, setSaving] = useState(false)
  const [calcName, setCalcName] = useState('')
  const [calcNotes, setCalcNotes] = useState('')
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [userPlan, setUserPlan] = useState<'free' | 'premium'>('free')
  const { toast } = useToast()
  const supabase = createClient()

  // Check authentication on mount
  useState(() => {
    const checkAuth = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      setIsAuthenticated(!!user)
      
      if (user) {
        // Check user's plan
        const { data: profile } = await supabase
          .from('user_profiles')
          .select('subscription_plan')
          .eq('user_id', user.id)
          .single()
        
        setUserPlan(profile?.subscription_plan || 'free')
      }
    }
    checkAuth()
  })

  const saveCalculation = async () => {
    if (!calculationResults || !isAuthenticated) {
      toast({
        title: "Sign in required",
        description: "Create a free account to save your calculations",
        action: (
          <Button variant="default" size="sm" onClick={() => window.location.href = '/auth/signup'}>
            Sign Up
          </Button>
        )
      })
      return
    }

    setSaving(true)
    
    try {
      const response = await fetch('/api/calculations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          calculatorType,
          inputs: calculationInputs,
          results: {
            summary: calculationSummary,
            yearlyData: calculationResults
          },
          name: calcName || undefined,
          notes: calcNotes || undefined
        })
      })

      const data = await response.json()

      if (!response.ok) {
        if (data.requiresPremium) {
          toast({
            title: "Upgrade Required",
            description: data.message,
            action: (
              <Button variant="default" size="sm" onClick={() => showUpgradeModal()}>
                Upgrade to Premium
              </Button>
            )
          })
        } else {
          throw new Error(data.error)
        }
        return
      }

      trackFeatureUse({
        feature: 'save_calculation',
        requiresPremium: false
      })

      toast({
        title: "Calculation saved!",
        description: "You can view it in your calculation history"
      })

      setCalcName('')
      setCalcNotes('')
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to save calculation",
        variant: "destructive"
      })
    } finally {
      setSaving(false)
    }
  }

  const exportPDF = async () => {
    if (!calculationResults) return

    if (!isAuthenticated || userPlan !== 'premium') {
      toast({
        title: "Premium feature",
        description: "PDF export requires a Premium account",
        action: (
          <Button variant="default" size="sm" onClick={() => showUpgradeModal()}>
            Upgrade to Premium
          </Button>
        )
      })
      return
    }

    trackFeatureUse({
      feature: 'export_pdf',
      requiresPremium: true
    })

    await exportToPDF({
      type: calculatorType,
      results: calculationResults,
      summary: calculationSummary,
      inputs: calculationInputs
    })
  }

  const exportExcel = async () => {
    if (!calculationResults) return

    if (!isAuthenticated || userPlan !== 'premium') {
      toast({
        title: "Premium feature",
        description: "Excel export requires a Premium account",
        action: (
          <Button variant="default" size="sm" onClick={() => showUpgradeModal()}>
            Upgrade to Premium
          </Button>
        )
      })
      return
    }

    trackFeatureUse({
      feature: 'export_excel',
      requiresPremium: true
    })

    await exportToExcel({
      type: calculatorType,
      results: calculationResults,
      summary: calculationSummary,
      inputs: calculationInputs
    })
  }

  const showUpgradeModal = () => {
    // In production, this would show a proper upgrade modal
    window.location.href = '/pricing'
  }

  const viewHistory = () => {
    trackFeatureUse({
      feature: 'view_history',
      requiresPremium: false
    })
    window.location.href = '/dashboard/calculations'
  }

  if (!calculationResults) return null

  return (
    <div className="space-y-6">
      {/* Save Calculation */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span className="flex items-center gap-2">
              <Save className="h-5 w-5" />
              Save Calculation
            </span>
            {!isAuthenticated && (
              <Badge variant="secondary">Sign in required</Badge>
            )}
          </CardTitle>
          <CardDescription>
            Save this calculation to your account for future reference
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Input
            placeholder="Calculation name (optional)"
            value={calcName}
            onChange={(e) => setCalcName(e.target.value)}
            disabled={!isAuthenticated}
          />
          <Textarea
            placeholder="Notes (optional)"
            value={calcNotes}
            onChange={(e) => setCalcNotes(e.target.value)}
            disabled={!isAuthenticated}
            rows={3}
          />
          <div className="flex gap-2">
            <Button 
              onClick={saveCalculation}
              disabled={!isAuthenticated || saving}
              className="flex-1"
            >
              {saving ? 'Saving...' : 'Save Calculation'}
            </Button>
            <Button
              variant="outline"
              onClick={viewHistory}
              disabled={!isAuthenticated}
            >
              <History className="mr-2 h-4 w-4" />
              View History
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Export Options */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span className="flex items-center gap-2">
              <Download className="h-5 w-5" />
              Export Options
            </span>
            {userPlan !== 'premium' && (
              <Badge variant="default" className="flex items-center gap-1">
                <Crown className="h-3 w-3" />
                Premium
              </Badge>
            )}
          </CardTitle>
          <CardDescription>
            Download your calculation results in various formats
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <button
              onClick={exportPDF}
              disabled={userPlan !== 'premium'}
              className={`p-4 border rounded-lg hover:shadow-md transition-shadow ${
                userPlan !== 'premium' ? 'opacity-60 cursor-not-allowed' : 'cursor-pointer'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <Download className="h-8 w-8 text-red-600" />
                {userPlan !== 'premium' && <Lock className="h-4 w-4 text-gray-400" />}
              </div>
              <h4 className="font-medium text-left">Export as PDF</h4>
              <p className="text-sm text-gray-600 text-left">
                Professional report with charts
              </p>
            </button>

            <button
              onClick={exportExcel}
              disabled={userPlan !== 'premium'}
              className={`p-4 border rounded-lg hover:shadow-md transition-shadow ${
                userPlan !== 'premium' ? 'opacity-60 cursor-not-allowed' : 'cursor-pointer'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <FileSpreadsheet className="h-8 w-8 text-green-600" />
                {userPlan !== 'premium' && <Lock className="h-4 w-4 text-gray-400" />}
              </div>
              <h4 className="font-medium text-left">Export to Excel</h4>
              <p className="text-sm text-gray-600 text-left">
                Full data with formulas
              </p>
            </button>
          </div>
        </CardContent>
      </Card>

      {/* Premium Upsell for Free Users */}
      {userPlan === 'free' && (
        <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Crown className="h-5 w-5 text-yellow-600" />
              Upgrade to Premium
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 mb-4">
              {[
                'Unlimited calculation saves',
                'Export to PDF and Excel',
                'Advanced portfolio tracking',
                'Priority support',
                'Ad-free experience'
              ].map((feature) => (
                <div key={feature} className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-600" />
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>
            <Button 
              className="w-full"
              onClick={() => {
                trackPremiumConversion({
                  plan: 'premium',
                  price: 9.99,
                  billingCycle: 'monthly',
                  userId: 'anonymous'
                })
                showUpgradeModal()
              }}
            >
              Upgrade for $9.99/month
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  )
}