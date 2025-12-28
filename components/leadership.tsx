"use client"

import { Card } from "@/components/ui/card"
import { Users, Heart, GraduationCap, Trophy, ChevronDown, ChevronUp } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Button } from "@/components/ui/button"

export function Leadership() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  const positions = [
    {
      icon: Heart,
      title: "NSS (DTU) Coordinator",
      period: "2024-25",
      description: "Leading community outreach and social impact initiatives",
      highlights: [
        "Led 50+ volunteers in community programs",
        "Organized blood donation camps and health awareness drives",
        "Coordinated 5+ social impact campaigns including plantation drives",
        "Conducted education sessions for underprivileged children",
      ],
    },
    {
      icon: Users,
      title: "Co-Head, Engifest (DTU)",
      period: "2024",
      description: "Co-led organization of North India's largest cultural fest",
      highlights: [
        "Coordinated 100+ volunteers",
        "Managed 1,00,000+ attendees",
        "Oversaw event planning and execution",
        "Led cross-functional teams",
      ],
    },
    {
      icon: GraduationCap,
      title: "Student Mentor, Desh Ke Mentor",
      period: "2023",
      description: "Govt. of NCT Delhi initiative",
      highlights: [
        "Guided government school students (classes 8-10)",
        "Provided career pathway counseling",
        "Conducted mentorship sessions",
        "Helped shape future career decisions",
      ],
    },
    {
      icon: Trophy,
      title: "Sports Captain",
      period: "2022-23",
      description: "Represented DTU Software Department",
      highlights: [
        "Captain for Kabaddi and Cricket in Arena",
        "Represented school 5 times in zonal tournaments",
        "Competed in Badminton, Volleyball, and Kho-Kho",
        "Demonstrated leadership and sportsmanship",
      ],
    },
  ]

  return (
    <section
      id="leadership"
      ref={ref}
      className="py-20 px-4 bg-gradient-to-br from-fuchsia-50 via-purple-50 to-violet-50"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-4 text-balance bg-gradient-to-r from-fuchsia-600 to-purple-600 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          Leadership & Impact
        </motion.h2>
        <motion.p
          className="text-lg text-gray-700 mb-12 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Contributing to communities, leading teams, and making a positive impact beyond code.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-6">
          {positions.map((position, index) => {
            const Icon = position.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
              >
                <Card className="p-6 bg-white border-2 border-fuchsia-100 hover:shadow-xl transition-all h-full">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 rounded-lg bg-fuchsia-600 text-white">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-1 text-fuchsia-900">{position.title}</h3>
                      <p className="text-sm text-gray-600 font-medium">{position.period}</p>
                      <p className="text-sm text-gray-600 mt-1">{position.description}</p>
                    </div>
                  </div>

                  <div>
                    <ul
                      className={`space-y-2 overflow-hidden transition-all duration-300 ${expandedIndex === index ? "max-h-96" : "max-h-20"}`}
                    >
                      {position.highlights.map((highlight, i) => (
                        <li key={i} className="flex gap-3 text-sm text-gray-700">
                          <span className="text-fuchsia-600 mt-0.5 font-bold">•</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                    {position.highlights.length > 2 && (
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                        className="mt-2 text-fuchsia-600 hover:text-fuchsia-700 hover:bg-fuchsia-50"
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
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
