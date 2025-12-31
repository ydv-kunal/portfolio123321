"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Phone } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import Image from "next/image"

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden bg-gradient-to-br from-violet-50 via-white to-purple-50">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />

      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="lg:hidden flex justify-center mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-violet-400 to-purple-400 rounded-full blur-2xl opacity-30" />
                <Image
                  src="/kunal-profile.png"
                  alt="Kunal Yadav"
                  width={200}
                  height={200}
                  className="relative rounded-full border-4 border-violet-200 shadow-2xl object-cover w-48 h-48"
                />
              </div>
            </motion.div>

            <div className="space-y-4">
              <motion.h1
                className="text-6xl md:text-7xl font-bold text-balance bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                Kunal Yadav
              </motion.h1>

              <motion.p
                className="text-2xl md:text-3xl text-gray-700 font-semibold"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                Software Engineer
              </motion.p>

              <motion.p
                className="text-lg text-gray-600 leading-relaxed max-w-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                Building pixel-perfect digital experiences with modern web technologies. Passionate about full-stack
                development, machine learning, and creating impactful solutions.
              </motion.p>
            </div>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <Button size="lg" asChild className="bg-violet-600 hover:bg-violet-700">
                <a href="#projects">View Projects</a>
              </Button>

              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-violet-600 text-violet-600 hover:bg-violet-50 bg-transparent"
              >
                <a href="#contact">Get in Touch</a>
              </Button>
            </motion.div>

            {/* SOCIAL ICONS */}
            <motion.div
              className="flex gap-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <a
                href="https://github.com/kunalyadav"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border-2 border-violet-200 hover:bg-violet-100 transition-colors"
              >
                <Github className="w-5 h-5 text-violet-600" />
                <span className="sr-only">GitHub</span>
              </a>

              <a
                href="https://linkedin.com/in/kunalyadav"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border-2 border-violet-200 hover:bg-violet-100 transition-colors"
              >
                <Linkedin className="w-5 h-5 text-violet-600" />
                <span className="sr-only">LinkedIn</span>
              </a>

              <a
                href="mailto:yadavkunal0008@gmail.com"
                className="p-3 rounded-full border-2 border-violet-200 hover:bg-violet-100 transition-colors"
              >
                <Mail className="w-5 h-5 text-violet-600" />
                <span className="sr-only">Email</span>
              </a>

              <a
                href="tel:+918076751564"
                className="p-3 rounded-full border-2 border-violet-200 hover:bg-violet-100 transition-colors"
              >
                <Phone className="w-5 h-5 text-violet-600" />
                <span className="sr-only">Phone</span>
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            className="hidden lg:flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-violet-400 to-purple-400 rounded-full blur-3xl opacity-30" />
              <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                <Image
                  src="/kunal-profile.png"
                  alt="Kunal Yadav"
                  width={400}
                  height={400}
                  className="relative rounded-full border-8 border-violet-200 shadow-2xl object-cover w-96 h-96"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
