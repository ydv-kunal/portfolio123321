"use client"

import { Card } from "@/components/ui/card"
import { BookOpen, Calendar, Users, Award } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Badge } from "@/components/ui/badge"

export function Publications() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const publications = [
    {
      title: "Lightweight Machine Learning Framework for Non-Human Identity Threat Detection Using Structured Social Media Metadata",
      authors: "Kunal Yadav et al.",
      venue: "NGNDAI 2026",
      status: "Accepted & Forthcoming",
      description: "Proposed a high-efficiency framework leveraging lightweight machine learning models for detecting non-human entity threats on social networks, utilizing rich structured metadata features for real-time analysis.",
    }
  ]

  return (
    <section
      id="publications"
      ref={ref}
      className="py-20 px-4 bg-gradient-to-br from-violet-50 via-indigo-50 to-blue-50 dark:from-slate-950 dark:via-slate-900 dark:to-indigo-950/20"
    >
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-violet-600 dark:from-indigo-400 dark:to-violet-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Publications & Research
        </motion.h2>

        <motion.p
          className="text-lg text-gray-700 dark:text-gray-300 mb-12 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Contributing to the scientific community through research in Machine Learning and Cybersecurity.
        </motion.p>

        <div className="space-y-6">
          {publications.map((pub, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
            >
              <Card className="p-8 bg-white/80 dark:bg-slate-900/60 backdrop-blur-md border-2 border-indigo-100 dark:border-indigo-950/40 hover:shadow-2xl transition-all">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                  <div className="space-y-2">
                    <Badge className="bg-indigo-100 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-300 border-indigo-200 dark:border-indigo-900/50 hover:bg-indigo-200 dark:hover:bg-indigo-900/50 mb-2">
                      {pub.status}
                    </Badge>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white leading-tight">
                      {pub.title}
                    </h3>
                  </div>
                </div>

                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  {pub.description}
                </p>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 border-t border-indigo-50 dark:border-indigo-950/40 pt-6">
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <Users className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                    <span>{pub.authors}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <Award className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                    <span className="font-semibold text-indigo-900 dark:text-indigo-300">{pub.venue}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <Calendar className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                    <span>Forthcoming 2026</span>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
