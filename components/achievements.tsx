"use client"

import { Card } from "@/components/ui/card"
import { Trophy, Code, Award, BookOpen, Zap, Medal, Users } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export function Achievements() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const achievements = [
    {
      icon: Medal,
      title: "Silver Medalist - Kabaddi",
      description: "Arena Annual Sports Fest, Delhi Technological University",
      year: "Nov 2025",
      highlight: true,
    },
    {
      icon: Code,
      title: "Solved 450+ DSA Problems",
      description: "Solved across LeetCode, GFG, and HackerRank. Peak rating of 1620 on LeetCode",
      year: "Oct 2025",
      highlight: true,
    },
    {
      icon: Trophy,
      title: "Semi-Finalist - Fintechstico '25",
      description: "Hackathon at NSUT – developed a Blockchain and AI-powered microfinance platform",
      year: "Sept 2025",
      highlight: true,
    },
    {
      icon: BookOpen,
      title: "Full Stack Web Development Bootcamp",
      description: "Udemy course covering front-end, back-end, databases, and deployment",
      year: "Aug 2025",
    },
    {
      icon: Users,
      title: "Sports Captain",
      description: "Represented Software Branch in Kabaddi & Cricket; led the school team 5 times in zonal-level tournaments",
      year: "2023",
    },
  ]

  return (
    <section id="achievements" ref={ref} className="py-20 px-4 bg-gradient-to-br from-red-50 via-rose-50 to-pink-50 dark:from-slate-950 dark:via-slate-900 dark:to-rose-950/20">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-4 text-balance bg-gradient-to-r from-red-600 to-rose-600 dark:from-red-400 dark:to-rose-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          Achievements & Awards
        </motion.h2>
        <motion.p
          className="text-lg text-gray-700 dark:text-gray-300 mb-12 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Recognition for technical excellence, academic performance, and sports achievements.
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, rotateY: -15 }}
                animate={isInView ? { opacity: 1, y: 0, rotateY: 0 } : { opacity: 0, y: 30, rotateY: -15 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, rotateY: 5, transition: { duration: 0.2 } }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <Card
                  className={`p-6 h-full backdrop-blur-md transition-all ${
                    achievement.highlight
                      ? "border-2 border-red-500/30 dark:border-red-500/30 bg-gradient-to-br from-red-50/70 to-rose-50/70 dark:from-red-950/20 dark:to-rose-950/10 shadow-lg hover:shadow-xl hover:border-red-500/50 dark:hover:border-red-500/50"
                      : "bg-white/70 dark:bg-slate-900/50 border border-slate-200/50 dark:border-slate-800/80 hover:border-rose-500/30 dark:hover:border-rose-500/30 hover:shadow-xl"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`p-3 rounded-lg ${
                        achievement.highlight
                          ? "bg-red-600 dark:bg-red-500 text-white shadow-md shadow-red-500/20"
                          : "bg-rose-50 dark:bg-rose-950/40 text-rose-600 dark:text-rose-400 border border-rose-100/60 dark:border-rose-900/30"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs text-rose-600 dark:text-rose-400 mb-1 font-semibold">{achievement.year}</div>
                      <h3 className="font-bold mb-2 text-balance leading-tight text-gray-900 dark:text-white text-lg">
                        {achievement.title}
                      </h3>
                      <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{achievement.description}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
