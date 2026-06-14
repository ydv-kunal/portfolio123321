"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  const experiences = [
    {
      company: "Craya",
      location: "New Delhi",
      role: "Software Development Intern",
      period: "June – July 2025",
      highlights: [
        "Developed scalable interactive video storefront components using React.js and Tailwind CSS, improving seller onboarding speed by 25% and increasing user engagement by 20%",
        "Integrated frontend components with backend APIs to display dynamic product data and improve user interaction",
        "Contributed to code reviews and collaborated with cross-functional teams to maintain scalable and clean code architecture",
      ],
      skills: ["React.js", "Tailwind CSS", "Backend APIs", "Code Reviews"],
    },
  ]

  return (
    <section id="experience" ref={ref} className="py-20 px-4 bg-gradient-to-br from-emerald-50 via-green-50 to-lime-50 dark:from-slate-950 dark:via-slate-900 dark:to-emerald-950/20">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-12 text-balance bg-gradient-to-r from-emerald-600 to-green-600 dark:from-emerald-400 dark:to-green-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          Experience
        </motion.h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="p-8 hover:shadow-xl transition-shadow bg-white dark:bg-slate-900/60 border-2 border-emerald-100 dark:border-emerald-950/40">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-2xl font-semibold mb-1 text-emerald-900 dark:text-emerald-300">{exp.role}</h3>
                    <p className="text-xl text-emerald-600 dark:text-emerald-400 font-semibold">{exp.company}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{exp.location}</p>
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 md:text-right font-medium">{exp.period}</div>
                </div>

                <div className="mb-6">
                  <ul
                    className={`space-y-3 overflow-hidden transition-all duration-300 ${expandedIndex === index ? "max-h-96" : "max-h-24"}`}
                  >
                    {exp.highlights.map((highlight, i) => (
                      <li key={i} className="flex gap-3 text-gray-700 dark:text-gray-300 leading-relaxed">
                        <span className="text-emerald-600 dark:text-emerald-400 mt-1.5 font-bold">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                  {exp.highlights.length > 2 && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                      className="mt-2 text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 hover:bg-emerald-50 dark:hover:bg-emerald-950/30"
                    >
                      {expandedIndex === index ? (
                        <>
                          <ChevronUp className="w-4 h-4 mr-1" />
                          Show Less
                        </>
                      ) : (
                        <>
                          <ChevronDown className="w-4 h-4 mr-1" />
                          Show More
                        </>
                      )}
                    </Button>
                  )}
                </div>

                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, i) => (
                    <Badge key={i} className="bg-emerald-100 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 hover:bg-emerald-200 dark:hover:bg-emerald-900/40 border-emerald-200 dark:border-emerald-900/50">
                      {skill}
                    </Badge>
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
