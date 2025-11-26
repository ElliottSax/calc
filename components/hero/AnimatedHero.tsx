"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useState, useEffect } from "react"
import { TrendingUp, DollarSign, Target, Zap, Award, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const AnimatedCounter = ({ value, duration = 2000 }: { value: number; duration?: number }) => {
  const [count, setCount] = useState(0)
  const { ref, inView } = useInView({ threshold: 0.3 })

  useEffect(() => {
    if (inView) {
      let start = 0
      const end = value
      const increment = end / (duration / 16)
      
      const timer = setInterval(() => {
        start += increment
        if (start >= end) {
          setCount(end)
          clearInterval(timer)
        } else {
          setCount(Math.floor(start))
        }
      }, 16)

      return () => clearInterval(timer)
    }
  }, [inView, value, duration])

  return <span ref={ref}>{count.toLocaleString()}</span>
}

const FloatingParticle = ({ delay, x, y }: { delay: number; x: number; y: number }) => (
  <motion.div
    className="absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-70"
    initial={{ x, y, scale: 0 }}
    animate={{
      x: x + Math.random() * 200 - 100,
      y: y + Math.random() * 200 - 100,
      scale: [0, 1, 0],
    }}
    transition={{
      duration: 3,
      delay,
      repeat: Infinity,
      repeatType: "loop",
    }}
  />
)

export function AnimatedHero({ onStartCalculating }: { onStartCalculating: () => void }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated Background Particles */}
      {Array.from({ length: 20 }).map((_, i) => (
        <FloatingParticle
          key={i}
          delay={i * 0.2}
          x={Math.random() * window.innerWidth}
          y={Math.random() * window.innerHeight}
        />
      ))}

      {/* Grid Background */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />

      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Column - Hero Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full border border-blue-500/30"
            >
              <Zap className="w-4 h-4 text-blue-400 mr-2" />
              <span className="text-blue-300 text-sm font-medium">Next-Gen Dividend Calculator</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight"
            >
              <span className="bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
                Master Your
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Dividend Empire
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-xl text-gray-300 max-w-2xl leading-relaxed"
            >
              Transform your investment strategy with our AI-powered dividend calculator. 
              Visualize compound growth, compare scenarios, and build wealth systematically.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                onClick={onStartCalculating}
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-2xl shadow-blue-500/25 transition-all duration-300 hover:scale-105"
              >
                Start Building Wealth
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-white/20 text-white hover:bg-white/10 px-8 py-4 text-lg rounded-xl backdrop-blur-sm"
              >
                Watch Demo
              </Button>
            </motion.div>

            {/* Stats Row */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="grid grid-cols-3 gap-8 pt-8 border-t border-white/10"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-white">
                  $<AnimatedCounter value={2400000} />
                </div>
                <div className="text-gray-400 text-sm">Portfolio Value Calculated</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">
                  <AnimatedCounter value={45000} />+
                </div>
                <div className="text-gray-400 text-sm">Happy Investors</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">
                  <AnimatedCounter value={98} />%
                </div>
                <div className="text-gray-400 text-sm">Success Rate</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Interactive 3D Card */}
          <motion.div
            initial={{ opacity: 0, x: 50, rotateY: 15 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative"
          >
            <motion.div
              whileHover={{ scale: 1.05, rotateY: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl"
              style={{ perspective: "1000px" }}
            >
              {/* Floating Icons */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center"
              >
                <TrendingUp className="w-6 h-6 text-white" />
              </motion.div>

              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -left-4 w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center"
              >
                <DollarSign className="w-5 h-5 text-white" />
              </motion.div>

              {/* Card Content */}
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold text-white">Live Preview</h3>
                  <Award className="w-6 h-6 text-yellow-400" />
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-white/5 rounded-xl">
                    <span className="text-gray-300">Initial Investment</span>
                    <span className="text-white font-semibold">$10,000</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-white/5 rounded-xl">
                    <span className="text-gray-300">Monthly Contribution</span>
                    <span className="text-white font-semibold">$500</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-xl border border-green-500/30">
                    <span className="text-gray-200">Portfolio Value (20Y)</span>
                    <motion.span
                      initial={{ scale: 1 }}
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="text-green-400 font-bold text-lg"
                    >
                      $<AnimatedCounter value={284567} />
                    </motion.span>
                  </div>
                </div>

                {/* Mini Chart Visualization */}
                <div className="h-20 bg-white/5 rounded-xl p-4 relative overflow-hidden">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20"
                    animate={{ x: [-100, window.innerWidth] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  />
                  <div className="relative z-10 flex items-end justify-between h-full">
                    {Array.from({ length: 10 }).map((_, i) => (
                      <motion.div
                        key={i}
                        className="bg-gradient-to-t from-blue-500 to-purple-500 rounded-sm"
                        style={{ width: '6px' }}
                        initial={{ height: 0 }}
                        animate={{ height: `${Math.random() * 100}%` }}
                        transition={{ delay: i * 0.1, duration: 0.5 }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="text-center text-white/60"
        >
          <div className="text-sm mb-2">Scroll to explore features</div>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full mx-auto relative">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 h-3 bg-white/60 rounded-full absolute left-1/2 top-2 transform -translate-x-1/2"
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}