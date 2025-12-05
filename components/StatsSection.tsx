"use client"

import type React from "react"
import { useEffect, useState } from "react"

interface StatItemProps {
  number: string
  label: string
  icon: React.ReactNode
  index: number
}

function StatItem({ number, label, icon, index }: StatItemProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, index * 150)
    return () => clearTimeout(timer)
  }, [index])

  return (
    <div
      className={`group relative overflow-hidden rounded-2xl transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
    >
      <div className="relative p-8 md:p-10 bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-transparent border border-blue-200/30 dark:border-blue-800/30 rounded-2xl backdrop-blur-sm hover:border-blue-400/50 dark:hover:border-blue-600/50 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-blue-500/10 dark:group-hover:shadow-blue-500/20 min-h-80">
        {/* Animated gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-purple-600/0 to-pink-600/0 group-hover:from-blue-600/5 group-hover:via-purple-600/5 group-hover:to-pink-600/5 rounded-2xl transition-all duration-500 opacity-0 group-hover:opacity-100" />

        <div className="relative mb-6 inline-flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl blur-lg opacity-40 group-hover:opacity-60 transition-opacity duration-500 scale-100 group-hover:scale-110" />
          <div className="relative p-4 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-all duration-300 border border-blue-400/30 group-hover:border-blue-400/60">
            <div className="text-3xl md:text-4xl drop-shadow-lg group-hover:scale-110 transition-transform duration-300">
              {icon}
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="text-5xl md:text-6xl font-black bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent mb-3 tracking-tight group-hover:via-pink-600 transition-all duration-500 whitespace-nowrap overflow-visible max-w-full inline-block w-full">
            {number}
          </div>
          <div className="text-base md:text-lg font-semibold text-slate-600 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-slate-100 transition-colors duration-300">
            {label}
          </div>
        </div>

        <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 w-0 group-hover:w-full transition-all duration-700 rounded-full" />

        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -mr-10 -mt-10" />
      </div>
    </div>
  )
}

export default function StatsSection() {
  const stats = [
    {
      number: "50+",
      label: "Projects Completed",
      icon: "📊",
    },
    {
      number: "5",
      label: "Team Members",
      icon: "👥",
    },
    {
      number: "3+",
      label: "Years Experience",
      icon: "⏱️",
    },
    {
      number: "100%",
      label: "Client Satisfaction",
      icon: "⭐",
    },
  ]

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 -bg-gradient-to-b from-slate-50 dark:from-slate-950 to-slate-100 dark:to-slate-900 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 w-96 h-96 -bg-blue-500/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 -bg-purple-500/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-20 text-center">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 rounded-full bg-blue-500/10 dark:bg-blue-500/20 border border-blue-300/30 dark:border-blue-600/30 text-blue-700 dark:text-blue-300 text-sm font-semibold">
              Our Achievements
            </span>
          </div>
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-black bg-gradient-to-r from-slate-900 via-blue-700 to-slate-900 dark:from-slate-50 dark:via-blue-400 dark:to-slate-50 bg-clip-text text-transparent mb-6 tracking-tight">
            Proven Track Record
          </h2>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            We deliver exceptional results through expertise, dedication, and innovation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <StatItem key={index} number={stat.number} label={stat.label} icon={stat.icon} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
