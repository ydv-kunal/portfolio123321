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
      skills: ["C/C++", "Python", "JavaScript", "HTML", "CSS", "SQL"],
      color: "from-pink-600 to-rose-600",
      bgColor: "bg-pink-50",
      badgeColor: "bg-pink-100 text-pink-700 hover:bg-pink-200 border-pink-200",
    },
    {
      category: "Frameworks & Libraries",
      skills: ["React.js", "Next.js", "Tailwind CSS", "Bootstrap", "Firebase"],
      color: "from-purple-600 to-pink-600",
      bgColor: "bg-purple-50",
      badgeColor: "bg-purple-100 text-purple-700 hover:bg-purple-200 border-purple-200",
    },
    {
      category: "Tools & Technologies",
      skills: ["Git", "Visual Studio", "Colab", "Cursor", "REST APIs"],
      color: "from-indigo-600 to-purple-600",
      bgColor: "bg-indigo-50",
      badgeColor: "bg-indigo-100 text-indigo-700 hover:bg-indigo-200 border-indigo-200",
    },
    {
      category: "Concepts",
      skills: [
        "DSA",
        "OOP",
        "Operating Systems",
        "Software Engineering",
        "Computer Networks",
        "DBMS",
        "Machine Learning",
        "Full-Stack Development",
      ],
      color: "from-blue-600 to-indigo-600",
      bgColor: "bg-blue-50",
      badgeColor: "bg-blue-100 text-blue-700 hover:bg-blue-200 border-blue-200",
    },
    {
      category: "Soft Skills",
      skills: ["Leadership", "Collaboration", "Strategic Problem-Solving", "Communication", "Team Management"],
      color: "from-cyan-600 to-blue-600",
      bgColor: "bg-cyan-50",
      badgeColor: "bg-cyan-100 text-cyan-700 hover:bg-cyan-200 border-cyan-200",
    },
  ]

  return (
    <section id="skills" ref={ref} className="py-20 px-4 bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-4 text-balance bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          Skills & Expertise
        </motion.h2>
        <motion.p
          className="text-lg text-gray-700 mb-12 max-w-2xl"
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
              <Card className={`p-6 ${category.bgColor} border-2 hover:shadow-xl transition-all`}>
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
