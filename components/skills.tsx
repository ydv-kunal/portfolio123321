"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const skillCategories = [
    {
      category: "Programming Languages",
      skills: ["C/C++", "Python", "Javascript", "Typescript", "SQL"],
      color: "from-pink-600 to-rose-600 dark:from-pink-400 dark:to-rose-400",
      bgColor: "bg-white/70 dark:bg-slate-900/50",
      hoverBorder: "hover:border-pink-500/30 dark:hover:border-pink-500/30",
      badgeColor: "bg-pink-50 dark:bg-pink-950/40 text-pink-700 dark:text-pink-300 hover:bg-pink-100 dark:hover:bg-pink-900/40 border border-pink-200/60 dark:border-pink-900/40",
    },
    {
      category: "Relevant Coursework",
      skills: [
        "DSA",
        "OOP",
        "OS",
        "CN",
        "DBMS",
        "ML",
        "Generative AI",
        "Microservices Architecture",
      ],
      color: "from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400",
      bgColor: "bg-white/70 dark:bg-slate-900/50",
      hoverBorder: "hover:border-blue-500/30 dark:hover:border-blue-500/30",
      badgeColor: "bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 hover:bg-blue-100 dark:hover:bg-blue-900/40 border border-blue-200/60 dark:border-blue-900/40",
    },
    {
      category: "Tools & Frameworks",
      skills: ["Git", "Visual Studio", "Colab", "Postman", "Thunder Client", "Kafka"],
      color: "from-orange-600 to-amber-600 dark:from-orange-400 dark:to-amber-400",
      bgColor: "bg-white/70 dark:bg-slate-900/50",
      hoverBorder: "hover:border-orange-500/30 dark:hover:border-orange-500/30",
      badgeColor: "bg-orange-50 dark:bg-orange-950/40 text-orange-700 dark:text-orange-300 hover:bg-orange-100 dark:hover:bg-orange-900/40 border border-orange-200/60 dark:border-orange-900/40",
    },
    {
      category: "Frontend",
      skills: ["HTML5", "CSS3", "React.js", "Redux Toolkit", "TailwindCSS"],
      color: "from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400",
      bgColor: "bg-white/70 dark:bg-slate-900/50",
      hoverBorder: "hover:border-purple-500/30 dark:hover:border-purple-500/30",
      badgeColor: "bg-purple-50 dark:bg-purple-950/40 text-purple-700 dark:text-purple-300 hover:bg-purple-100 dark:hover:bg-purple-900/40 border border-purple-200/60 dark:border-purple-900/40",
    },
    {
      category: "Backend & Databases",
      skills: [
        "Node.js",
        "Express.js",
        "REST APIs",
        "JWT Authentication",
        "MongoDB",
        "MySQL",
        "Firebase",
      ],
      color: "from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-400",
      bgColor: "bg-white/70 dark:bg-slate-900/50",
      hoverBorder: "hover:border-emerald-500/30 dark:hover:border-emerald-500/30",
      badgeColor: "bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 hover:bg-emerald-100 dark:hover:bg-emerald-900/40 border border-emerald-200/60 dark:border-emerald-900/40",
    },
    {
      category: "Deployment",
      skills: ["Docker", "AWS", "Vercel", "Render"],
      color: "from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-400",
      bgColor: "bg-white/70 dark:bg-slate-900/50",
      hoverBorder: "hover:border-cyan-500/30 dark:hover:border-cyan-500/30",
      badgeColor: "bg-cyan-50 dark:bg-cyan-950/40 text-cyan-700 dark:text-cyan-300 hover:bg-cyan-100 dark:hover:bg-cyan-900/40 border border-cyan-200/60 dark:border-cyan-900/40",
    },
  ]

  return (
    <section id="skills" ref={ref} className="py-20 px-4 bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 dark:from-slate-950 dark:via-slate-900 dark:to-purple-950/20">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-4 text-balance bg-gradient-to-r from-pink-600 to-purple-600 dark:from-pink-400 dark:to-purple-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          Skills & Expertise
        </motion.h2>
        <motion.p
          className="text-lg text-gray-700 dark:text-gray-300 mb-12 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          A comprehensive toolkit built through academic learning, hands-on projects, and real-world experience.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
            >
              <Card className={`p-6 ${category.bgColor} border border-slate-200/50 dark:border-slate-800/80 ${category.hoverBorder} hover:shadow-xl backdrop-blur-md transition-all h-full`}>
                <h3
                  className={`text-xl font-semibold mb-4 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}
                >
                  {category.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.3, delay: index * 0.1 + i * 0.05 }}
                      whileHover={{ scale: 1.1 }}
                    >
                      <Badge className={`text-sm py-1.5 px-3 ${category.badgeColor}`}>{skill}</Badge>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
