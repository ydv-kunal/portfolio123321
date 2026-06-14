"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" ref={ref} className="py-20 px-4 bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 dark:from-slate-950 dark:via-slate-900 dark:to-cyan-950/20">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-8 text-balance bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        <div className="space-y-6 text-lg leading-relaxed">
          <motion.p
            className="text-gray-700 dark:text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            I'm a BTech Software Engineering student at Delhi Technological University, passionate about building
            innovative solutions that make a difference. My journey in software development has been driven by curiosity
            and a relentless pursuit of excellence.
          </motion.p>

          <motion.p
            className="text-gray-700 dark:text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            With hands-on experience from an internship at Craya, I've developed a strong foundation
            in full-stack development, from crafting responsive UIs with React.js and Tailwind CSS to engineering robust
            backend APIs. I thrive in collaborative environments and believe in writing clean, maintainable code.
          </motion.p>

          <motion.p
            className="text-gray-700 dark:text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Beyond coding, I'm actively involved in community service as an NSS Coordinator, leading social impact
            initiatives. I'm also passionate about sports, having represented my university as a team captain in
            multiple tournaments.
          </motion.p>
        </div>

        {/* Education Section */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-blue-900 dark:text-blue-300">Education</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-white/70 dark:bg-slate-900/60 backdrop-blur-md rounded-2xl border border-blue-100 dark:border-blue-950/40 shadow-lg hover:shadow-xl transition-shadow">
              <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 block mb-2">2022 - 2026</span>
              <h4 className="text-xl font-bold text-gray-900 dark:text-white">Delhi Technological University</h4>
              <p className="text-gray-700 dark:text-gray-300 font-medium">BTech – Software Engineering</p>
              <p className="text-gray-500 dark:text-gray-400 text-sm mt-2">New Delhi</p>
            </div>
            <div className="p-6 bg-white/70 dark:bg-slate-900/60 backdrop-blur-md rounded-2xl border border-blue-100 dark:border-blue-950/40 shadow-lg hover:shadow-xl transition-shadow">
              <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 block mb-2">2022</span>
              <h4 className="text-xl font-bold text-gray-900 dark:text-white">St. Martin's Diocesan School</h4>
              <p className="text-gray-700 dark:text-gray-300 font-medium">Senior Secondary – PCM, CS</p>
              <p className="text-gray-500 dark:text-gray-400 text-sm mt-2">Delhi Cantt</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
