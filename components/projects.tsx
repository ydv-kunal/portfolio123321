"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, ChevronDown, ChevronUp } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"

export function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  const projects = [
    {
      title: "VinoPredict: Wine Quality Classification",
      description:
        "Machine learning model using Random Forest & XGBoost achieving 91.1% prediction accuracy on UCI Wine Quality dataset (6,497 samples). Implemented feature engineering and binary classification with comprehensive performance validation.",
      tech: ["Python", "Random Forest", "XGBoost", "Machine Learning", "Feature Engineering"],
      metrics: {
        accuracy: "91.1%",
        precision: "0.81",
        recall: "0.56",
        f1Score: "0.66",
      },
      github: "https://github.com/ydv-kunal/-Wine-Quality-Prediction-using-Machine-Learning",
      live: null,
    },
    {
      title: "ClimaSmart: AI-Powered Weather App",
      description:
        "Responsive weather application with AI Chatbot & Dynamic UI delivering real-time forecasts for 200,000+ cities worldwide. Integrated Google Gemini chatbot for personalized activity and health recommendations with weather-based animations.",
      tech: ["JavaScript", "HTML", "CSS", "Tailwind", "OpenWeatherMap API", "Google Gemini"],
      metrics: {
        cities: "200,000+",
        uptime: "99%",
        features: "AI Chatbot",
      },
      github: "https://github.com/ydv-kunal/ai-weather-app",
      live: "https://ydv-kunal.github.io/ai-weather-app/",
    },
    {
      title: "CryptoVerse: Real-Time Crypto Tracker",
      description:
        "Responsive web platform delivering live analytics for top 100 cryptocurrencies including price, market cap, and 24h trends. Features Google & Email authentication with personalized wishlist system and interactive charts.",
      tech: ["React.js", "Tailwind CSS", "Firebase", "CoinGecko API", "Authentication"],
      metrics: {
        cryptos: "100+",
        loading: "<1s",
        uptime: "99%",
      },
      github: null,
      live: "https://cryptoverse-steel.vercel.app/",
    },
  ]

  return (
    <section
      id="projects"
      ref={ref}
      className="py-20 px-4 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Featured Projects
        </motion.h2>

        <motion.p
          className="text-lg text-gray-700 mb-12 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Showcasing my best work in full-stack development, machine learning, and real-time applications.
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
            >
              <Card className="p-6 flex flex-col bg-white border-2 border-orange-100 hover:shadow-2xl transition-all">
                <h3 className="text-xl font-semibold mb-3 text-orange-900">
                  {project.title}
                </h3>

                <div className="mb-4">
                  <p
                    className={`text-gray-700 leading-relaxed overflow-hidden transition-all duration-300 ${
                      expandedIndex === index ? "max-h-96" : "max-h-20"
                    }`}
                  >
                    {project.description}
                  </p>

                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() =>
                      setExpandedIndex(expandedIndex === index ? null : index)
                    }
                    className="mt-1 text-orange-600 hover:text-orange-700 hover:bg-orange-50 px-0"
                  >
                    {expandedIndex === index ? (
                      <>
                        <ChevronUp className="w-4 h-4 mr-1" />
                        Less
                      </>
                    ) : (
                      <>
                        <ChevronDown className="w-4 h-4 mr-1" />
                        More
                      </>
                    )}
                  </Button>
                </div>

                <div className="space-y-4 mt-auto">
                  <div className="grid grid-cols-2 gap-2 p-4 bg-orange-50 rounded-lg">
                    {Object.entries(project.metrics).map(([k, v]) => (
                      <div key={k}>
                        <div className="text-xs text-gray-600 capitalize">
                          {k.replace(/([A-Z])/g, " $1").trim()}
                        </div>
                        <div className="font-semibold text-orange-700">
                          {v}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.slice(0, 3).map((tech, i) => (
                      <Badge
                        key={i}
                        className="text-xs bg-orange-100 text-orange-700 border-orange-200"
                      >
                        {tech}
                      </Badge>
                    ))}
                    {project.tech.length > 3 && (
                      <Badge className="text-xs bg-orange-100 text-orange-700 border-orange-200">
                        +{project.tech.length - 3}
                      </Badge>
                    )}
                  </div>

                  <div className="flex gap-2 pt-2">
                    {project.github && (
                      <Button asChild size="sm" variant="outline"
                        className="flex-1 border-orange-300 text-orange-700 hover:bg-orange-50"
                      >
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </a>
                      </Button>
                    )}

                    {project.live && (
                      <Button asChild size="sm" className="flex-1 bg-orange-600 hover:bg-orange-700">
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Demo
                        </a>
                      </Button>
                    )}
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
