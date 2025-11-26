"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import { Trophy, Target, Zap, Crown, Star, TrendingUp, DollarSign, Award } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import Confetti from "react-confetti"

interface Achievement {
  id: string
  title: string
  description: string
  icon: React.ElementType
  progress: number
  maxProgress: number
  unlocked: boolean
  rarity: 'common' | 'rare' | 'epic' | 'legendary'
  reward: string
}

const achievements: Achievement[] = [
  {
    id: 'first_calculation',
    title: 'First Steps',
    description: 'Complete your first DRIP calculation',
    icon: Target,
    progress: 1,
    maxProgress: 1,
    unlocked: true,
    rarity: 'common',
    reward: 'Beginner Badge'
  },
  {
    id: 'portfolio_milestone',
    title: 'Six Figure Vision',
    description: 'Calculate a portfolio worth $100,000+',
    icon: DollarSign,
    progress: 1,
    maxProgress: 1,
    unlocked: true,
    rarity: 'rare',
    reward: 'Wealth Builder Badge'
  },
  {
    id: 'time_horizon',
    title: 'Long-term Thinker',
    description: 'Plan for 20+ years',
    icon: TrendingUp,
    progress: 1,
    maxProgress: 1,
    unlocked: true,
    rarity: 'epic',
    reward: 'Patience Badge'
  },
  {
    id: 'millionaire_club',
    title: 'Millionaire Mindset',
    description: 'Calculate a million-dollar portfolio',
    icon: Crown,
    progress: 0,
    maxProgress: 1,
    unlocked: false,
    rarity: 'legendary',
    reward: 'Millionaire Badge'
  },
  {
    id: 'calculation_streak',
    title: 'Calculation Master',
    description: 'Perform 10 calculations in one session',
    icon: Zap,
    progress: 3,
    maxProgress: 10,
    unlocked: false,
    rarity: 'rare',
    reward: 'Analysis Pro Badge'
  },
  {
    id: 'yield_optimizer',
    title: 'Yield Optimizer',
    description: 'Compare 5 different dividend scenarios',
    icon: Star,
    progress: 2,
    maxProgress: 5,
    unlocked: false,
    rarity: 'epic',
    reward: 'Optimizer Badge'
  }
]

const rarityColors = {
  common: 'from-gray-500 to-gray-600',
  rare: 'from-blue-500 to-blue-600',
  epic: 'from-purple-500 to-purple-600',
  legendary: 'from-yellow-400 to-orange-500'
}

const rarityBorders = {
  common: 'border-gray-500/30',
  rare: 'border-blue-500/30',
  epic: 'border-purple-500/30',
  legendary: 'border-yellow-500/30'
}

export function AchievementSystem() {
  const [showConfetti, setShowConfetti] = useState(false)
  const [newlyUnlocked, setNewlyUnlocked] = useState<Achievement | null>(null)
  const [userLevel, setUserLevel] = useState(5)
  const [userXP, setUserXP] = useState(2750)
  const [nextLevelXP] = useState(3000)

  const unlockedAchievements = achievements.filter(a => a.unlocked)
  const totalAchievements = achievements.length

  const triggerAchievement = (achievement: Achievement) => {
    setNewlyUnlocked(achievement)
    setShowConfetti(true)
    
    setTimeout(() => {
      setShowConfetti(false)
      setNewlyUnlocked(null)
    }, 5000)
  }

  return (
    <div className="space-y-6">
      {/* Achievement Notification */}
      <AnimatePresence>
        {newlyUnlocked && (
          <motion.div
            initial={{ x: 400, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 400, opacity: 0 }}
            className="fixed top-4 right-4 z-50 bg-gradient-to-r from-yellow-500 to-orange-500 p-4 rounded-lg shadow-2xl text-white"
          >
            <div className="flex items-center space-x-3">
              <Trophy className="w-8 h-8" />
              <div>
                <div className="font-bold">Achievement Unlocked!</div>
                <div className="text-sm opacity-90">{newlyUnlocked.title}</div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {showConfetti && (
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          recycle={false}
          numberOfPieces={200}
        />
      )}

      {/* User Progress Header */}
      <Card className="bg-gradient-to-br from-slate-900 to-slate-800 border-slate-700 text-white">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center"
              >
                <Crown className="w-6 h-6 text-white" />
              </motion.div>
              <div>
                <CardTitle className="text-2xl">Dividend Master Level {userLevel}</CardTitle>
                <p className="text-gray-300">
                  {unlockedAchievements.length}/{totalAchievements} Achievements Unlocked
                </p>
              </div>
            </div>
            <Badge variant="outline" className="border-yellow-500/50 text-yellow-400">
              {((unlockedAchievements.length / totalAchievements) * 100).toFixed(0)}% Complete
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Experience</span>
              <span>{userXP.toLocaleString()} / {nextLevelXP.toLocaleString()} XP</span>
            </div>
            <Progress 
              value={(userXP / nextLevelXP) * 100} 
              className="h-3 bg-slate-700"
            />
          </div>
        </CardContent>
      </Card>

      {/* Achievements Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {achievements.map((achievement, index) => {
          const Icon = achievement.icon
          const progressPercentage = (achievement.progress / achievement.maxProgress) * 100

          return (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="group"
            >
              <Card className={`relative overflow-hidden transition-all duration-300 ${
                achievement.unlocked 
                  ? `bg-gradient-to-br ${rarityColors[achievement.rarity]} border-2 ${rarityBorders[achievement.rarity]}`
                  : 'bg-slate-800 border-slate-600 opacity-75'
              }`}>
                {achievement.unlocked && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                    animate={{ x: [-100, 300] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                  />
                )}

                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <motion.div
                        animate={achievement.unlocked ? { rotate: [0, 360] } : {}}
                        transition={{ duration: 1 }}
                        className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                          achievement.unlocked 
                            ? 'bg-white/20 text-white' 
                            : 'bg-slate-700 text-slate-400'
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                      </motion.div>
                      <div>
                        <CardTitle className={`text-lg ${
                          achievement.unlocked ? 'text-white' : 'text-slate-300'
                        }`}>
                          {achievement.title}
                        </CardTitle>
                        <Badge 
                          variant="outline" 
                          className={`mt-1 text-xs ${
                            achievement.unlocked 
                              ? 'border-white/30 text-white/80'
                              : 'border-slate-500 text-slate-400'
                          }`}
                        >
                          {achievement.rarity}
                        </Badge>
                      </div>
                    </div>
                    {achievement.unlocked && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center"
                      >
                        <Trophy className="w-3 h-3 text-white" />
                      </motion.div>
                    )}
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className={`text-sm ${
                    achievement.unlocked ? 'text-white/80' : 'text-slate-400'
                  }`}>
                    {achievement.description}
                  </p>

                  {!achievement.unlocked && (
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs text-slate-400">
                        <span>Progress</span>
                        <span>{achievement.progress}/{achievement.maxProgress}</span>
                      </div>
                      <Progress 
                        value={progressPercentage} 
                        className="h-2 bg-slate-700"
                      />
                    </div>
                  )}

                  <div className={`text-xs ${
                    achievement.unlocked ? 'text-yellow-300' : 'text-slate-500'
                  }`}>
                    🎁 {achievement.reward}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )
        })}
      </div>

      {/* Quick Actions to Trigger Achievements */}
      <Card className="bg-slate-800 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white">Boost Your Progress</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => {
              const lockedAchievement = achievements.find(a => !a.unlocked)
              if (lockedAchievement) {
                triggerAchievement({ ...lockedAchievement, unlocked: true })
              }
            }}
            className="w-full p-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
          >
            🎯 Simulate Achievement Unlock
          </motion.button>
        </CardContent>
      </Card>
    </div>
  )
}