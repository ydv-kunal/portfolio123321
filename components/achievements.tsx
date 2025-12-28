"use client"

import { Card } from "@/components/ui/card"
import { Trophy, Code, Award, BookOpen, Zap, Medal } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export function Achievements() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const achievements = [
    {
      icon: Trophy,
      title: "Semi-Finalist - Fintechstico'25 Hackathon",
      description: "Developed a Blockchain + AI-powered microfinance platform enabling transparent micro-loans",
      year: "2025",
      highlight: true,
    },
    {
      icon: Code,
      title: "Leetcode Peak Rating 1620",
      description: "Solved 400+ problems on LeetCode and GFG, demonstrating strong DSA skills",
      year: "2025",
      highlight: true,
    },
    {
      icon: BookOpen,
      title: "Full Stack Web Development Bootcamp",
      description: "Certificate of Completion from Udemy, covering front-end, back-end, databases, and deployment",
      year: "Aug 2025",
    },
    {
      icon: Award,
      title: "Top 1% - NPTEL IoT Course",
      description: "Introduction to Internet of Things, IIT Kharagpur",
      year: "Jan-Apr 2025",
    },
    {
      icon: Zap,
      title: "JEE Mains AIR 61,244",
      description: "Achieved rank among 1,026,800 candidates through self-study without formal coaching",
      year: "2022",
    },
    {
      icon: Medal,
      title: "Gold Medalist - Football",
      description: "Arena Annual Sports Fest, Delhi Technological University",
      year: "2023",
    },
  ]

  return (
    <section id="achievements" ref={ref} className="py-20 px-4 bg-gradient-to-br from-red-50 via-rose-50 to-pink-50">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-4 text-balance bg-gradient-to-r from-red-600 to-rose-600 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          Achievements & Awards
        </motion.h2>
        <motion.p
          className="text-lg text-gray-700 mb-12 max-w-2xl"
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
                  className={`p-6 h-full ${achievement.highlight ? "border-2 border-red-300 bg-gradient-to-br from-red-50 to-rose-50 shadow-lg" : "bg-white border-2 border-rose-100"}`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`p-3 rounded-lg ${achievement.highlight ? "bg-red-600 text-white" : "bg-rose-100 text-rose-600"}`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs text-gray-600 mb-1 font-medium">{achievement.year}</div>
                      <h3 className="font-semibold mb-2 text-balance leading-tight text-gray-900">
                        {achievement.title}
                      </h3>
                      <p className="text-sm text-gray-700 leading-relaxed">{achievement.description}</p>
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
