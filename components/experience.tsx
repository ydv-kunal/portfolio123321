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
      location: "Delhi",
      role: "Software Development Intern",
      period: "June - August 2025",
      highlights: [
        "Designed and implemented interactive storefront components using React.js and Tailwind CSS, resulting in 25% faster seller onboarding and 18% increase in user engagement",
        "Engineered backend APIs for real-time ERP synchronization, improving data consistency by 40% and reducing manual errors by 28%",
        "Collaborated in team meetings and contributed to peer code reviews ensuring adherence to coding standards",
      ],
      skills: ["React.js", "Tailwind CSS", "Backend APIs", "Real-time Sync"],
    },
    {
      company: "Rajat Developers",
      location: "Delhi",
      role: "Associate Program Management Intern",
      period: "June - August 2024",
      highlights: [
        "Planned and organized 5+ events with 200+ attendees from across the globe",
        "Led a team of 3 to create social media content, achieving 300% increase in followers",
        "Improved HR decision-making by 25% through creation and management of internal database",
        "Increased feedback quantity by 40% and email responses by 70% during tenure",
      ],
      skills: ["Program Management", "Team Leadership", "Database Management", "Social Media"],
    },
  ]

  return (
    <section id="experience" ref={ref} className="py-20 px-4 bg-gradient-to-br from-emerald-50 via-green-50 to-lime-50">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-12 text-balance bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent"
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
              <Card className="p-8 hover:shadow-xl transition-shadow bg-white border-2 border-emerald-100">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-2xl font-semibold mb-1 text-emerald-900">{exp.role}</h3>
                    <p className="text-xl text-emerald-600 font-semibold">{exp.company}</p>
                    <p className="text-sm text-gray-600">{exp.location}</p>
                  </div>
                  <div className="text-sm text-gray-600 md:text-right font-medium">{exp.period}</div>
                </div>

                <div className="mb-6">
                  <ul
                    className={`space-y-3 overflow-hidden transition-all duration-300 ${expandedIndex === index ? "max-h-96" : "max-h-24"}`}
                  >
                    {exp.highlights.map((highlight, i) => (
                      <li key={i} className="flex gap-3 text-gray-700 leading-relaxed">
                        <span className="text-emerald-600 mt-1.5 font-bold">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                  {exp.highlights.length > 2 && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                      className="mt-2 text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50"
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
                    <Badge key={i} className="bg-emerald-100 text-emerald-700 hover:bg-emerald-200 border-emerald-200">
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
