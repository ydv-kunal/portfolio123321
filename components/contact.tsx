"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "yadavkunal0008@gmail.com",
      href: "mailto:yadavkunal0008@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 8076751564",
      href: "tel:+918076751564",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Delhi, India",
      href: null,
    },
  ]

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/kunalyadav",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/kunalyadav",
    },
  ]

  return (
    <section id="contact" ref={ref} className="py-20 px-4 bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-4 text-balance bg-gradient-to-r from-slate-700 to-gray-700 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
          >
            Let's Connect
          </motion.h2>
          <motion.p
            className="text-lg text-gray-700 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about
            technology.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="p-8 bg-white border-2 border-slate-200 shadow-xl">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h3 className="text-xl font-semibold mb-4 text-slate-900">Contact Information</h3>

                {contactInfo.map((info, index) => {
                  const Icon = info.icon
                  const content = (
                    <motion.div
                      key={index}
                      className="flex items-center gap-4 p-4 rounded-lg bg-slate-50"
                      whileHover={{ scale: 1.05, backgroundColor: "rgb(241 245 249)" }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="p-2 rounded-lg bg-white">
                        <Icon className="w-5 h-5 text-slate-700" />
                      </div>
                      <div>
                        <div className="text-xs text-gray-600">{info.label}</div>
                        <div className="font-medium text-slate-900">{info.value}</div>
                      </div>
                    </motion.div>
                  )

                  return info.href ? (
                    <Link key={index} href={info.href} className="block hover:opacity-80 transition-opacity">
                      {content}
                    </Link>
                  ) : (
                    <div key={index}>{content}</div>
                  )
                })}
              </div>

              <div className="space-y-6">
                <h3 className="text-xl font-semibold mb-4 text-slate-900">Social Media</h3>

                <div className="space-y-4">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon
                    return (
                      <motion.div key={index} whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
                        <Button
                          variant="outline"
                          className="w-full justify-start border-2 border-slate-200 hover:bg-slate-50 bg-transparent"
                          size="lg"
                          asChild
                        >
                          <Link href={social.href} target="_blank">
                            <Icon className="w-5 h-5 mr-3 text-slate-700" />
                            <span className="text-slate-900">{social.label}</span>
                          </Link>
                        </Button>
                      </motion.div>
                    )
                  })}
                </div>

                <div className="pt-6">
                  <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
                    <Button size="lg" className="w-full bg-slate-800 hover:bg-slate-900" asChild>
                      <a href="mailto:yadavkunal0008@gmail.com">Send me an email</a>
                    </Button>
                  </motion.div>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        <motion.div
          className="text-center mt-12 text-sm text-gray-600"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p>Delhi Technological University • BTech Software Engineering • 2022-2026</p>
          <p className="mt-2">Student ID: 2K22/SE/097</p>
        </motion.div>
      </div>
    </section>
  )
}
