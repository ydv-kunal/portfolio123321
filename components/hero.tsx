"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Phone } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import Image from "next/image"

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden bg-gradient-to-br from-violet-50 via-white to-purple-50 dark:from-slate-950 dark:via-slate-900 dark:to-purple-950/20">
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
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
                <div className="absolute inset-0 bg-gradient-to-tr from-violet-400 to-purple-400 rounded-full blur-2xl opacity-30 pointer-events-none" />
                <Image
                  src="/kunal-profile.png"
                  alt="Kunal Yadav"
                  width={200}
                  height={200}
                  className="relative rounded-full border-4 border-violet-200 dark:border-violet-800 shadow-2xl object-cover w-48 h-48"
                />
              </div>
            </motion.div>

            <div className="space-y-4">
              <motion.h1
                className="text-6xl md:text-7xl font-bold text-balance bg-gradient-to-r from-violet-600 to-purple-600 dark:from-violet-400 dark:to-purple-400 bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                Kunal Yadav
              </motion.h1>

              <motion.p
                className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 font-semibold"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                Software Engineering Student
              </motion.p>

              <motion.p
                className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                Specializing in Full-Stack Development and Applied Machine Learning. Strong problem-solving foundation with 450+ DSA problems solved, and hands-on expertise in backend architecture, API design, and system optimization.
              </motion.p>
            </div>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <Button size="lg" asChild className="bg-violet-600 hover:bg-violet-700 dark:bg-violet-500 dark:hover:bg-violet-600 text-white">
                <a href="#projects">View Projects</a>
              </Button>

              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-violet-600 text-violet-600 hover:bg-violet-50 bg-transparent dark:border-violet-400 dark:text-violet-400 dark:hover:bg-violet-950/40"
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
                href="https://github.com/ydv-kunal"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border-2 border-violet-200 hover:bg-violet-100 dark:border-violet-800 dark:hover:bg-violet-950/40 transition-colors"
              >
                <Github className="w-5 h-5 text-violet-600 dark:text-violet-400" />
                <span className="sr-only">GitHub</span>
              </a>

              <a
                href="https://www.linkedin.com/in/kunal-yadav-437774280/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border-2 border-violet-200 hover:bg-violet-100 dark:border-violet-800 dark:hover:bg-violet-950/40 transition-colors"
              >
                <Linkedin className="w-5 h-5 text-violet-600 dark:text-violet-400" />
                <span className="sr-only">LinkedIn</span>
              </a>

              <a
                href="https://leetcode.com/u/17osEsEXnQ/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border-2 border-violet-200 hover:bg-violet-100 dark:border-violet-800 dark:hover:bg-violet-950/40 transition-colors"
              >
                <svg className="w-5 h-5 text-violet-600 dark:text-violet-400 fill-current" viewBox="0 0 24 24">
                  <path d="M16.102 17.93l-2.697 2.607c-.466.45-1.211.45-1.677 0l-5.651-5.46a2.382 2.382 0 0 1 0-3.415l5.65-5.46c.468-.452 1.213-.452 1.68 0l2.697 2.606a1.185 1.185 0 0 1 0 1.707 1.226 1.226 0 0 1-1.708 0L12.58 8.79l-4.108 3.97a.595.595 0 0 0 0 .854l4.108 3.97 1.815-1.753a1.226 1.226 0 0 1 1.708 0c.471.455.471 1.25 0 1.707zm5.666-4.173H1.836C1.376 13.757 1 13.39 1 12.93v-1.856c0-.46.376-.827.836-.827H21.77c.46 0 .836.368.836.827v1.857c0 .46-.376.827-.836.827z"/>
                </svg>
                <span className="sr-only">LeetCode</span>
              </a>

              <a
                href="mailto:yadavkunal0008@gmail.com"
                className="p-3 rounded-full border-2 border-violet-200 hover:bg-violet-100 dark:border-violet-800 dark:hover:bg-violet-950/40 transition-colors"
              >
                <Mail className="w-5 h-5 text-violet-600 dark:text-violet-400" />
                <span className="sr-only">Email</span>
              </a>

              <a
                href="tel:+918076751564"
                className="p-3 rounded-full border-2 border-violet-200 hover:bg-violet-100 dark:border-violet-800 dark:hover:bg-violet-950/40 transition-colors"
              >
                <Phone className="w-5 h-5 text-violet-600 dark:text-violet-400" />
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
              <div className="absolute inset-0 bg-gradient-to-tr from-violet-400 to-purple-400 rounded-full blur-3xl opacity-30 pointer-events-none" />
              <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                <Image
                  src="/kunal-profile.png"
                  alt="Kunal Yadav"
                  width={400}
                  height={400}
                  className="relative rounded-full border-8 border-violet-200 dark:border-violet-800 shadow-2xl object-cover w-96 h-96"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
