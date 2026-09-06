'use client'

import React, { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Trophy, Medal, Award, Star, Target, Zap, TrendingUp, TrendingDown, Gift, Crown, Shield, Gem, Heart, Flame, CheckCircle, Lock, ChevronRight, Share2, Users, BookOpen, Calculator } from 'lucide-react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog'

interface Achievement {
  id: string
  title: string
  description: string
  icon: React.ElementType
  category: 'learning' | 'usage' | 'social' | 'milestone'
  points: number
  rarity: 'common' | 'rare' | 'epic' | 'legendary'
  progress?: number
  maxProgress?: number
  unlocked: boolean
  unlockedAt?: Date
  reward?: string
}

interface LeaderboardEntry {
  rank: number
  name: string
  points: number
  level: number
  achievements: number
  avatar?: string
  trend: 'up' | 'down' | 'same'
}

const ACHIEVEMENTS: Achievement[] = [
  // Learning Achievements
  {
    id: 'first_calculation',
    title: 'First Steps',
    description: 'Complete your first DRIP calculation',
    icon: Star,
    category: 'learning',
    points: 10,
    rarity: 'common',
    unlocked: true,
    unlockedAt: new Date('2025-01-01')
  },
  {
    id: 'read_guide',
    title: 'Knowledge Seeker',
    description: 'Read 5 educational guides',
    icon: BookOpen,
    category: 'learning',
    points: 25,
    rarity: 'common',
    progress: 3,
    maxProgress: 5,
    unlocked: false
  },
  {
    id: 'complete_quiz',
    title: 'Quiz Master',
    description: 'Score 100% on the dividend investing quiz',
    icon: Trophy,
    category: 'learning',
    points: 50,
    rarity: 'rare',
    unlocked: false
  },

  // Usage Achievements
  {
    id: 'daily_streak_7',
    title: 'Week Warrior',
    description: 'Use the calculator 7 days in a row',
    icon: Flame,
    category: 'usage',
    points: 30,
    rarity: 'common',
    progress: 4,
    maxProgress: 7,
    unlocked: false
  },
  {
    id: 'portfolio_100k',
    title: 'Six Figure Club',
    description: 'Calculate a portfolio worth $100,000+',
    icon: Crown,
    category: 'usage',
    points: 100,
    rarity: 'epic',
    unlocked: true,
    unlockedAt: new Date('2025-01-05'),
    reward: 'Unlock premium portfolio features'
  },
  {
    id: 'calculator_pro',
    title: 'Calculator Pro',
    description: 'Use all 5 calculator types',
    icon: Calculator,
    category: 'usage',
    points: 40,
    rarity: 'rare',
    progress: 3,
    maxProgress: 5,
    unlocked: false
  },

  // Social Achievements
  {
    id: 'share_results',
    title: 'Social Investor',
    description: 'Share calculation results 3 times',
    icon: Share2,
    category: 'social',
    points: 20,
    rarity: 'common',
    progress: 1,
    maxProgress: 3,
    unlocked: false
  },
  {
    id: 'refer_friend',
    title: 'Referral Champion',
    description: 'Refer 5 friends to the platform',
    icon: Users,
    category: 'social',
    points: 75,
    rarity: 'rare',
    progress: 2,
    maxProgress: 5,
    unlocked: false,
    reward: 'Get 1 month premium access'
  },
  {
    id: 'community_helper',
    title: 'Community Helper',
    description: 'Answer 10 questions in the forum',
    icon: Heart,
    category: 'social',
    points: 60,
    rarity: 'rare',
    progress: 0,
    maxProgress: 10,
    unlocked: false
  },

  // Milestone Achievements
  {
    id: 'millionaire_calc',
    title: 'Millionaire Mindset',
    description: 'Calculate path to $1M portfolio',
    icon: Gem,
    category: 'milestone',
    points: 200,
    rarity: 'legendary',
    unlocked: false,
    reward: 'Exclusive millionaire calculator template'
  },
  {
    id: 'dividend_master',
    title: 'Dividend Master',
    description: 'Complete all dividend challenges',
    icon: Medal,
    category: 'milestone',
    points: 500,
    rarity: 'legendary',
    progress: 8,
    maxProgress: 10,
    unlocked: false,
    reward: 'Lifetime premium access'
  },
  {
    id: 'early_adopter',
    title: 'Early Adopter',
    description: 'Join within first month of launch',
    icon: Shield,
    category: 'milestone',
    points: 150,
    rarity: 'epic',
    unlocked: true,
    unlockedAt: new Date('2025-01-01'),
    reward: 'Exclusive early adopter badge'
  }
]

const LEADERBOARD: LeaderboardEntry[] = [
  { rank: 1, name: 'DividendKing92', points: 2840, level: 28, achievements: 45, trend: 'same' },
  { rank: 2, name: 'InvestorPro', points: 2650, level: 26, achievements: 42, trend: 'up' },
  { rank: 3, name: 'PassiveIncome', points: 2480, level: 24, achievements: 38, trend: 'down' },
  { rank: 4, name: 'WealthBuilder', points: 2320, level: 23, achievements: 36, trend: 'up' },
  { rank: 5, name: 'You', points: 2150, level: 21, achievements: 32, trend: 'up' },
  { rank: 6, name: 'DRIPMaster', points: 2100, level: 21, achievements: 31, trend: 'same' },
  { rank: 7, name: 'YieldHunter', points: 1980, level: 19, achievements: 28, trend: 'down' },
  { rank: 8, name: 'CompoundGrowth', points: 1850, level: 18, achievements: 25, trend: 'up' }
]

const RARITY_COLORS = {
  common: 'bg-slate-500',
  rare: 'bg-blue-500',
  epic: 'bg-purple-500',
  legendary: 'bg-orange-500'
}

export function AchievementSystem() {
  const [userPoints, setUserPoints] = useState(2150)
  const [userLevel, setUserLevel] = useState(21)
  const [selectedAchievement, setSelectedAchievement] = useState<Achievement | null>(null)
  const [showUnlockAnimation, setShowUnlockAnimation] = useState(false)
  const [dailyStreak, setDailyStreak] = useState(4)
  const [nextReward, setNextReward] = useState(250) // Points to next reward

  // Calculate statistics
  const totalAchievements = ACHIEVEMENTS.length
  const unlockedAchievements = ACHIEVEMENTS.filter(a => a.unlocked).length
  const totalPossiblePoints = ACHIEVEMENTS.reduce((sum, a) => sum + a.points, 0)
  const earnedPoints = ACHIEVEMENTS.filter(a => a.unlocked).reduce((sum, a) => sum + a.points, 0)
  const completionRate = (unlockedAchievements / totalAchievements) * 100

  // Group achievements by category
  const achievementsByCategory = {
    learning: ACHIEVEMENTS.filter(a => a.category === 'learning'),
    usage: ACHIEVEMENTS.filter(a => a.category === 'usage'),
    social: ACHIEVEMENTS.filter(a => a.category === 'social'),
    milestone: ACHIEVEMENTS.filter(a => a.category === 'milestone')
  }

  return (
    <div className="space-y-6">
      {/* User Progress Header */}
      <Card className="bg-gradient-to-r from-purple-600 to-pink-600 text-white border-0">
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div>
              <p className="text-purple-100 text-sm mb-1">Your Level</p>
              <div className="flex items-center gap-2">
                <Crown className="w-8 h-8" />
                <span className="text-3xl font-bold">Level {userLevel}</span>
              </div>
              <Progress value={(userPoints % 100)} className="mt-2 bg-purple-300" />
              <p className="text-xs text-purple-100 mt-1">{userPoints % 100}/100 to next level</p>
            </div>

            <div>
              <p className="text-purple-100 text-sm mb-1">Total Points</p>
              <div className="flex items-center gap-2">
                <Zap className="w-8 h-8" />
                <span className="text-3xl font-bold">{userPoints.toLocaleString()}</span>
              </div>
              <p className="text-xs text-purple-100 mt-1">Rank #5 globally</p>
            </div>

            <div>
              <p className="text-purple-100 text-sm mb-1">Achievements</p>
              <div className="flex items-center gap-2">
                <Trophy className="w-8 h-8" />
                <span className="text-3xl font-bold">{unlockedAchievements}/{totalAchievements}</span>
              </div>
              <Progress value={completionRate} className="mt-2 bg-purple-300" />
            </div>

            <div>
              <p className="text-purple-100 text-sm mb-1">Daily Streak</p>
              <div className="flex items-center gap-2">
                <Flame className="w-8 h-8" />
                <span className="text-3xl font-bold">{dailyStreak} days</span>
              </div>
              <p className="text-xs text-purple-100 mt-1">Keep it up! 🔥</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Main Content Tabs */}
      <Tabs defaultValue="achievements" className="space-y-6">
        <TabsList className="grid grid-cols-3 w-full lg:w-auto lg:inline-grid">
          <TabsTrigger value="achievements">Achievements</TabsTrigger>
          <TabsTrigger value="leaderboard">Leaderboard</TabsTrigger>
          <TabsTrigger value="rewards">Rewards</TabsTrigger>
        </TabsList>

        <TabsContent value="achievements" className="space-y-6">
          {/* Achievement Categories */}
          {Object.entries(achievementsByCategory).map(([category, achievements]) => (
            <Card key={category}>
              <CardHeader>
                <CardTitle className="capitalize flex items-center gap-2">
                  {category === 'learning' && <BookOpen className="w-5 h-5" />}
                  {category === 'usage' && <Target className="w-5 h-5" />}
                  {category === 'social' && <Users className="w-5 h-5" />}
                  {category === 'milestone' && <Award className="w-5 h-5" />}
                  {category} Achievements
                </CardTitle>
                <CardDescription>
                  {achievements.filter(a => a.unlocked).length}/{achievements.length} completed
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {achievements.map(achievement => (
                    <div
                      key={achievement.id}
                      className={`relative p-4 rounded-lg border-2 transition-all cursor-pointer ${
                        achievement.unlocked
                          ? 'border-green-500 bg-green-50 dark:bg-green-950/30'
                          : 'border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600'
                      }`}
                      onClick={() => setSelectedAchievement(achievement)}
                    >
                      {!achievement.unlocked && (
                        <div className="absolute inset-0 bg-slate-900/10 dark:bg-slate-900/30 rounded-lg flex items-center justify-center">
                          <Lock className="w-8 h-8 text-slate-400" />
                        </div>
                      )}

                      <div className="flex items-start gap-3">
                        <div className={`p-2 rounded-lg ${RARITY_COLORS[achievement.rarity]} text-white`}>
                          <achievement.icon className="w-6 h-6" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold">{achievement.title}</h4>
                          <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                            {achievement.description}
                          </p>

                          {achievement.progress !== undefined && achievement.maxProgress && !achievement.unlocked && (
                            <div className="mt-2">
                              <Progress value={(achievement.progress / achievement.maxProgress) * 100} className="h-2" />
                              <p className="text-xs text-slate-600 mt-1">
                                {achievement.progress}/{achievement.maxProgress}
                              </p>
                            </div>
                          )}

                          <div className="flex items-center justify-between mt-2">
                            <Badge variant="secondary" className="text-xs">
                              +{achievement.points} pts
                            </Badge>
                            {achievement.unlocked && achievement.unlockedAt && (
                              <span className="text-xs text-green-600">
                                ✓ {achievement.unlockedAt.toLocaleDateString()}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="leaderboard" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Global Leaderboard</CardTitle>
              <CardDescription>
                Compete with investors worldwide
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {LEADERBOARD.map(entry => (
                  <div
                    key={entry.rank}
                    className={`flex items-center justify-between p-4 rounded-lg ${
                      entry.name === 'You'
                        ? 'bg-blue-50 dark:bg-blue-950/30 border-2 border-blue-500'
                        : 'bg-slate-50 dark:bg-slate-800/50'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`text-2xl font-bold ${
                        entry.rank <= 3 ? 'text-yellow-500' : 'text-slate-600'
                      }`}>
                        {entry.rank === 1 && '🥇'}
                        {entry.rank === 2 && '🥈'}
                        {entry.rank === 3 && '🥉'}
                        {entry.rank > 3 && `#${entry.rank}`}
                      </div>
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500" />
                      <div>
                        <p className="font-semibold">{entry.name}</p>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          Level {entry.level} • {entry.achievements} achievements
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-xl font-bold">{entry.points.toLocaleString()}</p>
                      <div className="flex items-center gap-1 justify-end">
                        {entry.trend === 'up' && <TrendingUp className="w-4 h-4 text-green-600" />}
                        {entry.trend === 'down' && <TrendingDown className="w-4 h-4 text-red-600" />}
                        {entry.trend === 'same' && <span className="w-4 h-4 text-slate-400">-</span>}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="rewards" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Available Rewards */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Gift className="w-5 h-5 text-green-600" />
                  Available Rewards
                </CardTitle>
                <CardDescription>
                  Claim your earned rewards
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="p-4 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-800">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold">Premium Features Unlocked</h4>
                    <Badge variant="default" className="bg-green-600">Ready</Badge>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                    You've earned access to advanced portfolio analytics
                  </p>
                  <Button className="w-full" variant="default">
                    Claim Reward
                  </Button>
                </div>

                <div className="p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg border border-blue-200 dark:border-blue-800">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold">Exclusive Badge</h4>
                    <Badge variant="default" className="bg-blue-600">Ready</Badge>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                    Early Adopter badge for your profile
                  </p>
                  <Button className="w-full" variant="default">
                    Claim Badge
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Upcoming Rewards */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="w-5 h-5 text-purple-600" />
                  Upcoming Rewards
                </CardTitle>
                <CardDescription>
                  Keep earning to unlock these
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-lg opacity-75">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold">1 Month Premium</h4>
                    <Badge variant="outline">250 pts needed</Badge>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                    Full access to all premium features
                  </p>
                  <Progress value={0} className="h-2" />
                </div>

                <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-lg opacity-75">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold">Dividend Course</h4>
                    <Badge variant="outline">500 pts needed</Badge>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                    Complete dividend investing masterclass
                  </p>
                  <Progress value={0} className="h-2" />
                </div>

                <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-lg opacity-75">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold">Lifetime Access</h4>
                    <Badge variant="outline">1000 pts needed</Badge>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                    Never pay for premium again
                  </p>
                  <Progress value={0} className="h-2" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Challenges */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Flame className="w-5 h-5 text-orange-600" />
                Weekly Challenges
              </CardTitle>
              <CardDescription>
                Complete challenges for bonus points
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 bg-orange-50 dark:bg-orange-950/30 rounded-lg border border-orange-200 dark:border-orange-800">
                  <div className="flex items-center gap-2 mb-2">
                    <Calculator className="w-5 h-5 text-orange-600" />
                    <h4 className="font-semibold">Calculator Marathon</h4>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                    Use the calculator 20 times this week
                  </p>
                  <Progress value={65} className="mb-2" />
                  <div className="flex items-center justify-between text-sm">
                    <span>13/20 completed</span>
                    <Badge variant="secondary">+100 pts</Badge>
                  </div>
                </div>

                <div className="p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg border border-blue-200 dark:border-blue-800">
                  <div className="flex items-center gap-2 mb-2">
                    <Users className="w-5 h-5 text-blue-600" />
                    <h4 className="font-semibold">Social Week</h4>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                    Share 5 calculations with friends
                  </p>
                  <Progress value={40} className="mb-2" />
                  <div className="flex items-center justify-between text-sm">
                    <span>2/5 completed</span>
                    <Badge variant="secondary">+75 pts</Badge>
                  </div>
                </div>

                <div className="p-4 bg-purple-50 dark:bg-purple-950/30 rounded-lg border border-purple-200 dark:border-purple-800">
                  <div className="flex items-center gap-2 mb-2">
                    <BookOpen className="w-5 h-5 text-purple-600" />
                    <h4 className="font-semibold">Knowledge Quest</h4>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                    Read all new blog posts
                  </p>
                  <Progress value={25} className="mb-2" />
                  <div className="flex items-center justify-between text-sm">
                    <span>1/4 completed</span>
                    <Badge variant="secondary">+50 pts</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Achievement Detail Modal */}
      {selectedAchievement && (
        <Dialog open={!!selectedAchievement} onOpenChange={() => setSelectedAchievement(null)}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle className="flex items-center gap-3">
                <div className={`p-3 rounded-lg ${RARITY_COLORS[selectedAchievement.rarity]} text-white`}>
                  <selectedAchievement.icon className="w-8 h-8" />
                </div>
                <div>
                  <p className="text-xl">{selectedAchievement.title}</p>
                  <Badge variant="outline" className="mt-1">
                    {selectedAchievement.rarity.toUpperCase()}
                  </Badge>
                </div>
              </DialogTitle>
              <DialogDescription className="mt-4">
                {selectedAchievement.description}
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-4 mt-6">
              <div className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
                <span className="font-medium">Points</span>
                <span className="font-bold text-lg">+{selectedAchievement.points}</span>
              </div>

              {selectedAchievement.reward && (
                <div className="p-3 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-800">
                  <p className="font-medium text-green-800 dark:text-green-200 mb-1">Reward</p>
                  <p className="text-sm">{selectedAchievement.reward}</p>
                </div>
              )}

              {selectedAchievement.progress !== undefined && selectedAchievement.maxProgress && (
                <div>
                  <div className="flex items-center justify-between text-sm mb-2">
                    <span>Progress</span>
                    <span>{selectedAchievement.progress}/{selectedAchievement.maxProgress}</span>
                  </div>
                  <Progress value={(selectedAchievement.progress / selectedAchievement.maxProgress) * 100} />
                </div>
              )}

              {selectedAchievement.unlocked && (
                <div className="flex items-center gap-2 text-green-600">
                  <CheckCircle className="w-5 h-5" />
                  <span className="font-medium">
                    Unlocked on {selectedAchievement.unlockedAt?.toLocaleDateString()}
                  </span>
                </div>
              )}

              <div className="flex gap-2">
                <Button variant="outline" className="flex-1" onClick={() => setSelectedAchievement(null)}>
                  Close
                </Button>
                <Button className="flex-1 gap-2">
                  <Share2 className="w-4 h-4" />
                  Share Achievement
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  )
}