"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { Moon, Sun, Palette } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const themes = [
  {
    name: 'Dark Pro',
    id: 'dark',
    primary: 'from-slate-900 to-slate-800',
    accent: 'from-blue-600 to-purple-600',
    preview: 'bg-slate-900'
  },
  {
    name: 'Light',
    id: 'light', 
    primary: 'from-white to-gray-50',
    accent: 'from-blue-500 to-indigo-500',
    preview: 'bg-white'
  },
  {
    name: 'Midnight',
    id: 'midnight',
    primary: 'from-gray-900 to-black',
    accent: 'from-cyan-500 to-blue-500',
    preview: 'bg-black'
  },
  {
    name: 'Ocean',
    id: 'ocean',
    primary: 'from-blue-900 to-indigo-900',
    accent: 'from-teal-400 to-blue-400',
    preview: 'bg-blue-900'
  },
  {
    name: 'Forest',
    id: 'forest',
    primary: 'from-green-900 to-emerald-900',
    accent: 'from-green-400 to-emerald-400',
    preview: 'bg-green-900'
  },
  {
    name: 'Sunset',
    id: 'sunset',
    primary: 'from-orange-900 to-red-900',
    accent: 'from-yellow-400 to-orange-400',
    preview: 'bg-orange-900'
  }
]

export function ThemeToggle({ className }: { className?: string }) {
  const [currentTheme, setCurrentTheme] = useState('dark')
  const [showThemePicker, setShowThemePicker] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Get saved theme from localStorage
    const saved = localStorage.getItem('theme') || 'dark'
    setCurrentTheme(saved)
    applyTheme(saved)
  }, [])

  const applyTheme = (themeId: string) => {
    const root = document.documentElement
    const theme = themes.find(t => t.id === themeId)
    
    if (!theme) return

    // Apply theme-specific CSS custom properties
    switch (themeId) {
      case 'light':
        root.style.setProperty('--background', '255 255 255')
        root.style.setProperty('--foreground', '0 0 0')
        root.style.setProperty('--card', '255 255 255')
        root.style.setProperty('--card-foreground', '0 0 0')
        root.style.setProperty('--primary', '59 130 246')
        root.style.setProperty('--primary-foreground', '255 255 255')
        break
      case 'midnight':
        root.style.setProperty('--background', '0 0 0')
        root.style.setProperty('--foreground', '255 255 255')
        root.style.setProperty('--card', '17 24 39')
        root.style.setProperty('--card-foreground', '255 255 255')
        root.style.setProperty('--primary', '6 182 212')
        root.style.setProperty('--primary-foreground', '0 0 0')
        break
      case 'ocean':
        root.style.setProperty('--background', '30 58 138')
        root.style.setProperty('--foreground', '255 255 255')
        root.style.setProperty('--card', '30 58 138')
        root.style.setProperty('--card-foreground', '255 255 255')
        root.style.setProperty('--primary', '20 184 166')
        root.style.setProperty('--primary-foreground', '255 255 255')
        break
      case 'forest':
        root.style.setProperty('--background', '20 83 45')
        root.style.setProperty('--foreground', '255 255 255')
        root.style.setProperty('--card', '20 83 45')
        root.style.setProperty('--card-foreground', '255 255 255')
        root.style.setProperty('--primary', '34 197 94')
        root.style.setProperty('--primary-foreground', '255 255 255')
        break
      case 'sunset':
        root.style.setProperty('--background', '154 52 18')
        root.style.setProperty('--foreground', '255 255 255')
        root.style.setProperty('--card', '154 52 18')
        root.style.setProperty('--card-foreground', '255 255 255')
        root.style.setProperty('--primary', '251 146 60')
        root.style.setProperty('--primary-foreground', '255 255 255')
        break
      default: // dark
        root.style.setProperty('--background', '15 23 42')
        root.style.setProperty('--foreground', '255 255 255')
        root.style.setProperty('--card', '30 41 59')
        root.style.setProperty('--card-foreground', '255 255 255')
        root.style.setProperty('--primary', '59 130 246')
        root.style.setProperty('--primary-foreground', '255 255 255')
        break
    }
  }

  const handleThemeChange = (themeId: string) => {
    setCurrentTheme(themeId)
    applyTheme(themeId)
    localStorage.setItem('theme', themeId)
  }

  if (!mounted) return null

  const currentThemeData = themes.find(t => t.id === currentTheme)

  return (
    <div className={`relative ${className}`}>
      <motion.div whileTap={{ scale: 0.95 }}>
        <Button
          variant="outline"
          size="sm"
          onClick={() => setShowThemePicker(!showThemePicker)}
          className="border-slate-600 text-gray-300 hover:bg-slate-700 backdrop-blur-sm"
        >
          <Palette className="w-4 h-4 mr-2" />
          {currentThemeData?.name}
        </Button>
      </motion.div>

      {showThemePicker && (
        <motion.div
          initial={{ opacity: 0, y: 10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 10, scale: 0.95 }}
          className="absolute top-full mt-2 right-0 z-50"
        >
          <Card className="bg-slate-800/95 backdrop-blur-sm border-slate-600 shadow-2xl min-w-[280px]">
            <CardContent className="p-4">
              <h3 className="text-white font-semibold mb-3 flex items-center">
                <Palette className="w-4 h-4 mr-2" />
                Choose Your Vibe
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {themes.map((theme) => (
                  <motion.button
                    key={theme.id}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      handleThemeChange(theme.id)
                      setShowThemePicker(false)
                    }}
                    className={`p-3 rounded-lg border-2 transition-all duration-200 ${
                      currentTheme === theme.id 
                        ? 'border-blue-500 bg-blue-500/20' 
                        : 'border-slate-600 hover:border-slate-500 bg-slate-700/50'
                    }`}
                  >
                    <div className="space-y-2">
                      <div 
                        className={`w-full h-8 rounded ${theme.preview} border border-slate-600`}
                      />
                      <div className="text-xs font-medium text-white">{theme.name}</div>
                      <div className={`h-2 rounded bg-gradient-to-r ${theme.accent}`} />
                    </div>
                  </motion.button>
                ))}
              </div>
              
              <div className="mt-4 pt-3 border-t border-slate-600">
                <p className="text-xs text-gray-400 text-center">
                  ✨ Premium themes unlock with Pro subscription
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      )}
    </div>
  )
}