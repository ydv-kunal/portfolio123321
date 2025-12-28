"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" ref={ref} className="py-20 px-4 bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-8 text-balance bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        <div className="space-y-6 text-lg leading-relaxed">
          <motion.p
            className="text-gray-700"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            I'm a BTech Software Engineering student at Delhi Technological University, passionate about building
            innovative solutions that make a difference. My journey in software development has been driven by curiosity
            and a relentless pursuit of excellence.
          </motion.p>

          <motion.p
            className="text-gray-700"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            With hands-on experience from internships at Craya and Rajat Developers, I've developed a strong foundation
            in full-stack development, from crafting responsive UIs with React.js and Tailwind CSS to engineering robust
            backend APIs. I thrive in collaborative environments and believe in writing clean, maintainable code.
          </motion.p>

          <motion.p
            className="text-gray-700"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Beyond coding, I'm actively involved in community service as an NSS Coordinator, leading social impact
            initiatives. I'm also passionate about sports, having represented my university as a team captain in
            multiple tournaments.
          </motion.p>
        </div>
      </div>
    </section>
  )
}
