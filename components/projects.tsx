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
      title: "CryptoArena – Real-Time Crypto Paper Trading Platform",
      description:
        "Built a risk-free paper trading website where users can learn and practice using virtual cash under real-market conditions. Developed the backend using a microservices architecture to cleanly separate user login logic from trading operations. Used WebSockets to stream live market prices and packaged the entire database, backend, and frontend using Docker Compose for easy setup.",
      tech: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Socket.IO",
        "Binance WebSocket API",
        "Docker",
        "AWS EC2",
        "Material UI",
        "Axios",
        "JWT",
        "Bcrypt",
      ],
      metrics: {
        architecture: "Microservices",
        setup: "Docker Compose",
        dataStream: "WebSockets",
      },
      github: "https://github.com/ydv-kunal/CryptoArena",
      live: null,
    },
    {
      title: "Narrative AI – AI-Powered Interactive Storyteller",
      description:
        "Engineered a full-stack AI storyteller with 9 saved stories per user, each with up to 6 dynamically generated chapters. Integrated 2 LLM engines with intelligent fallback handling, ensuring 100% story continuity in API failures and retries. Designed choice-driven narratives where each chapter generates 2 decision paths, influencing 3 real-time scores (morality, risk, emotion) that alter story progression to personalize user experience and improve engagement.",
      tech: [
        "React.js",
        "Node.js",
        "Express.js",
        "Tailwind CSS",
        "Context API",
        "MongoDB",
        "Firebase",
        "Gemini API",
        "Groq API",
      ],
      metrics: {
        savedStories: "9 per User",
        chapters: "Up to 6",
        llmEngines: "2 Engines",
      },
      github: "https://github.com/ydv-kunal/Narrative-AI",
      live: null,
    },
    {
      title: "VinoPredict – Wine Quality Classification",
      description:
        "Implemented a machine learning model on the UCI Wine Quality dataset (6,497 samples), achieving 91.1% accuracy. Applied feature engineering and binary classification (Good vs Not Good), validated with a confusion matrix (Precision: 0.81, Recall: 0.56, F1-score: 0.66) to address class imbalance and ensure robust evaluation.",
      tech: ["Python", "NumPy", "Pandas", "Random Forest", "XGBoost", "Machine Learning"],
      metrics: {
        accuracy: "91.1%",
        samples: "6,497",
        f1Score: "0.66",
      },
      github: "https://github.com/ydv-kunal/-Wine-Quality-Prediction-using-Machine-Learning",
      live: null,
    },
  ]

  return (
    <section
      id="projects"
      ref={ref}
      className="py-20 px-4 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 dark:from-slate-950 dark:via-slate-900 dark:to-amber-950/20"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-amber-600 dark:from-orange-400 dark:to-amber-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Featured Projects
        </motion.h2>

        <motion.p
          className="text-lg text-gray-700 dark:text-gray-300 mb-12 max-w-2xl"
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
              <Card className="p-6 flex flex-col bg-white dark:bg-slate-900/60 border-2 border-orange-100 dark:border-orange-950/40 hover:shadow-2xl transition-all">
                <h3 className="text-xl font-semibold mb-3 text-orange-900 dark:text-orange-300">
                  {project.title}
                </h3>

                <div className="mb-4">
                  <p
                    className={`text-gray-700 dark:text-gray-300 leading-relaxed overflow-hidden transition-all duration-300 ${
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
                    className="mt-1 text-orange-600 dark:text-orange-400 hover:text-orange-700 dark:hover:text-orange-300 hover:bg-orange-50 dark:hover:bg-orange-950/30 px-0"
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
                  <div className="grid grid-cols-2 gap-2 p-4 bg-orange-50 dark:bg-orange-950/20 rounded-lg">
                    {Object.entries(project.metrics).map(([k, v]) => (
                      <div key={k}>
                        <div className="text-xs text-gray-600 dark:text-gray-400 capitalize">
                          {k.replace(/([A-Z])/g, " $1").trim()}
                        </div>
                        <div className="font-semibold text-orange-700 dark:text-orange-400">
                          {v}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.slice(0, 3).map((tech, i) => (
                      <Badge
                        key={i}
                        className="text-xs bg-orange-100 dark:bg-orange-950/40 text-orange-700 dark:text-orange-300 border-orange-200 dark:border-orange-900/50"
                      >
                        {tech}
                      </Badge>
                    ))}
                    {project.tech.length > 3 && (
                      <Badge className="text-xs bg-orange-100 dark:bg-orange-950/40 text-orange-700 dark:text-orange-300 border-orange-200 dark:border-orange-900/50">
                        +{project.tech.length - 3}
                      </Badge>
                    )}
                  </div>

                  <div className="flex gap-2 pt-2">
                    {project.github && (
                      <Button asChild size="sm" variant="outline"
                        className="flex-1 border-orange-300 dark:border-orange-800 text-orange-700 dark:text-orange-300 hover:bg-orange-50 dark:hover:bg-orange-900/40"
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
