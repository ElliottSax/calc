'use client'

import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { motion, AnimatePresence } from 'framer-motion'
import { Calendar, Bell, DollarSign, TrendingUp, AlertCircle, ChevronLeft, ChevronRight, Star, Clock } from 'lucide-react'
import { Alert, AlertDescription } from '@/components/ui/alert'

interface DividendEvent {
  id: string
  date: Date
  company: string
  ticker: string
  amount: number
  type: 'ex-dividend' | 'payment' | 'announcement'
  frequency: 'quarterly' | 'monthly' | 'annual'
  yield: number
  owned: boolean
}

const MOCK_EVENTS: DividendEvent[] = [
  { id: '1', date: new Date(2024, 11, 5), company: 'Johnson & Johnson', ticker: 'JNJ', amount: 1.19, type: 'ex-dividend', frequency: 'quarterly', yield: 3.2, owned: true },
  { id: '2', date: new Date(2024, 11, 10), company: 'Coca-Cola', ticker: 'KO', amount: 0.485, type: 'payment', frequency: 'quarterly', yield: 3.1, owned: true },
  { id: '3', date: new Date(2024, 11, 12), company: 'Microsoft', ticker: 'MSFT', amount: 0.75, type: 'ex-dividend', frequency: 'quarterly', yield: 0.8, owned: false },
  { id: '4', date: new Date(2024, 11, 15), company: 'Procter & Gamble', ticker: 'PG', amount: 1.0065, type: 'announcement', frequency: 'quarterly', yield: 2.4, owned: true },
  { id: '5', date: new Date(2024, 11, 18), company: 'Apple', ticker: 'AAPL', amount: 0.25, type: 'payment', frequency: 'quarterly', yield: 0.4, owned: false },
  { id: '6', date: new Date(2024, 11, 20), company: 'Realty Income', ticker: 'O', amount: 0.257, type: 'ex-dividend', frequency: 'monthly', yield: 5.8, owned: true },
  { id: '7', date: new Date(2024, 11, 22), company: 'AT&T', ticker: 'T', amount: 0.2775, type: 'payment', frequency: 'quarterly', yield: 6.5, owned: true },
  { id: '8', date: new Date(2024, 11, 25), company: 'Verizon', ticker: 'VZ', amount: 0.665, type: 'ex-dividend', frequency: 'quarterly', yield: 6.2, owned: false },
  { id: '9', date: new Date(2025, 0, 2), company: 'PepsiCo', ticker: 'PEP', amount: 1.355, type: 'announcement', frequency: 'quarterly', yield: 2.9, owned: true },
  { id: '10', date: new Date(2025, 0, 5), company: 'McDonald\'s', ticker: 'MCD', amount: 1.67, type: 'ex-dividend', frequency: 'quarterly', yield: 2.3, owned: false }
]

export function DividendCalendar() {
  const [currentDate, setCurrentDate] = useState(new Date(2024, 11, 1)) // December 2024
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [filter, setFilter] = useState<'all' | 'owned' | 'watchlist'>('all')
  const [notifications, setNotifications] = useState(true)

  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
  }

  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay()
  }

  const getEventsForDate = (date: Date) => {
    return MOCK_EVENTS.filter(event => 
      event.date.getDate() === date.getDate() &&
      event.date.getMonth() === date.getMonth() &&
      event.date.getFullYear() === date.getFullYear() &&
      (filter === 'all' || (filter === 'owned' && event.owned) || (filter === 'watchlist' && !event.owned))
    )
  }

  const getEventsForMonth = () => {
    return MOCK_EVENTS.filter(event => 
      event.date.getMonth() === currentDate.getMonth() &&
      event.date.getFullYear() === currentDate.getFullYear() &&
      (filter === 'all' || (filter === 'owned' && event.owned) || (filter === 'watchlist' && !event.owned))
    )
  }

  const monthEvents = getEventsForMonth()
  const upcomingEvents = MOCK_EVENTS
    .filter(event => event.date >= new Date() && (filter === 'all' || (filter === 'owned' && event.owned) || (filter === 'watchlist' && !event.owned)))
    .sort((a, b) => a.date.getTime() - b.date.getTime())
    .slice(0, 5)

  const totalMonthlyDividends = monthEvents
    .filter(e => e.type === 'payment' && e.owned)
    .reduce((sum, e) => sum + e.amount, 0)

  const renderCalendar = () => {
    const daysInMonth = getDaysInMonth(currentDate)
    const firstDay = getFirstDayOfMonth(currentDate)
    const days = []

    // Empty cells for days before month starts
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="h-24" />)
    }

    // Days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), day)
      const events = getEventsForDate(date)
      const isToday = 
        date.getDate() === new Date().getDate() &&
        date.getMonth() === new Date().getMonth() &&
        date.getFullYear() === new Date().getFullYear()

      days.push(
        <motion.div
          key={day}
          whileHover={{ scale: 1.02 }}
          className={`h-24 border rounded-lg p-2 cursor-pointer transition-all ${
            isToday ? 'bg-primary/10 border-primary' : 'hover:shadow-md'
          } ${selectedDate?.getDate() === day ? 'ring-2 ring-primary' : ''}`}
          onClick={() => setSelectedDate(date)}
        >
          <div className="flex justify-between items-start mb-1">
            <span className={`text-sm font-medium ${isToday ? 'text-primary' : ''}`}>{day}</span>
            {events.length > 0 && (
              <Badge variant="secondary" className="text-xs px-1">
                {events.length}
              </Badge>
            )}
          </div>
          <div className="space-y-1">
            {events.slice(0, 2).map(event => (
              <div key={event.id} className="text-xs truncate">
                <span className={`inline-block w-2 h-2 rounded-full mr-1 ${
                  event.type === 'ex-dividend' ? 'bg-yellow-500' :
                  event.type === 'payment' ? 'bg-green-500' :
                  'bg-blue-500'
                }`} />
                {event.ticker}
              </div>
            ))}
            {events.length > 2 && (
              <span className="text-xs text-muted-foreground">+{events.length - 2} more</span>
            )}
          </div>
        </motion.div>
      )
    }

    return days
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-blue-500" />
              Dividend Calendar
            </CardTitle>
            <div className="flex items-center gap-2">
              <Button
                variant={notifications ? 'default' : 'outline'}
                size="sm"
                onClick={() => setNotifications(!notifications)}
                className="flex items-center gap-2"
              >
                <Bell className={`h-4 w-4 ${notifications ? 'animate-pulse' : ''}`} />
                {notifications ? 'Notifications On' : 'Notifications Off'}
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Filter Tabs */}
          <div className="flex gap-2">
            <Button
              variant={filter === 'all' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setFilter('all')}
            >
              All Stocks
            </Button>
            <Button
              variant={filter === 'owned' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setFilter('owned')}
            >
              My Portfolio
            </Button>
            <Button
              variant={filter === 'watchlist' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setFilter('watchlist')}
            >
              Watchlist
            </Button>
          </div>

          {/* Month Navigation */}
          <div className="flex items-center justify-between">
            <Button
              variant="outline"
              size="icon"
              onClick={() => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1))}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <h2 className="text-xl font-semibold">
              {currentDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
            </h2>
            <Button
              variant="outline"
              size="icon"
              onClick={() => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1))}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          {/* Calendar Grid */}
          <div className="grid grid-cols-7 gap-2">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
              <div key={day} className="text-center text-sm font-medium text-muted-foreground py-2">
                {day}
              </div>
            ))}
            {renderCalendar()}
          </div>

          {/* Legend */}
          <div className="flex gap-4 text-sm">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-yellow-500 rounded-full" />
              <span>Ex-Dividend</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-green-500 rounded-full" />
              <span>Payment Date</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-blue-500 rounded-full" />
              <span>Announcement</span>
            </div>
          </div>

          {/* Monthly Summary */}
          <Card className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-950/20 dark:to-blue-950/20">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Expected This Month</p>
                  <p className="text-2xl font-bold">${totalMonthlyDividends.toFixed(2)}</p>
                </div>
                <DollarSign className="h-8 w-8 text-green-500" />
              </div>
            </CardContent>
          </Card>

          {/* Selected Date Details */}
          {selectedDate && (
            <AnimatePresence>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">
                      {selectedDate.toLocaleDateString('en-US', { 
                        weekday: 'long',
                        month: 'long', 
                        day: 'numeric', 
                        year: 'numeric' 
                      })}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {getEventsForDate(selectedDate).length > 0 ? (
                      getEventsForDate(selectedDate).map(event => (
                        <div key={event.id} className="flex items-center justify-between p-3 rounded-lg border">
                          <div className="flex items-center gap-3">
                            <div className={`p-2 rounded-full ${
                              event.type === 'ex-dividend' ? 'bg-yellow-100' :
                              event.type === 'payment' ? 'bg-green-100' :
                              'bg-blue-100'
                            }`}>
                              {event.type === 'payment' ? (
                                <DollarSign className="h-4 w-4" />
                              ) : (
                                <AlertCircle className="h-4 w-4" />
                              )}
                            </div>
                            <div>
                              <p className="font-medium">{event.company} ({event.ticker})</p>
                              <p className="text-sm text-muted-foreground">
                                ${event.amount} per share • {event.yield}% yield
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            {event.owned && <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />}
                            <Badge variant={
                              event.type === 'ex-dividend' ? 'default' :
                              event.type === 'payment' ? 'secondary' :
                              'outline'
                            }>
                              {event.type}
                            </Badge>
                          </div>
                        </div>
                      ))
                    ) : (
                      <p className="text-muted-foreground text-center py-4">No dividend events on this date</p>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>
          )}

          {/* Upcoming Events */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                Upcoming Dividend Events
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {upcomingEvents.map(event => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="flex items-center justify-between p-3 rounded-lg border hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center gap-3">
                    <div className="text-center">
                      <p className="text-xs text-muted-foreground">
                        {event.date.toLocaleDateString('en-US', { month: 'short' })}
                      </p>
                      <p className="text-lg font-bold">
                        {event.date.getDate()}
                      </p>
                    </div>
                    <div>
                      <p className="font-medium">{event.company}</p>
                      <p className="text-sm text-muted-foreground">
                        {event.ticker} • ${event.amount} • {event.frequency}
                      </p>
                    </div>
                  </div>
                  <Badge variant={event.owned ? 'default' : 'outline'}>
                    {event.owned ? 'Portfolio' : 'Watchlist'}
                  </Badge>
                </motion.div>
              ))}
            </CardContent>
          </Card>

          {/* Notification Settings */}
          {notifications && (
            <Alert>
              <Bell className="h-4 w-4" />
              <AlertDescription>
                You'll receive notifications 24 hours before ex-dividend dates for stocks in your portfolio.
              </AlertDescription>
            </Alert>
          )}
        </CardContent>
      </Card>
    </div>
  )
}