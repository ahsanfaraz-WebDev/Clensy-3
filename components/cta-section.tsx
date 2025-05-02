"use client"

import { useEffect } from "react"
import Link from "next/link"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Phone, Calendar } from "lucide-react"

export default function CTASection() {
  const controls = useAnimation()
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section ref={ref} className="py-20 bg-black text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.h2 variants={itemVariants} className="text-3xl md:text-5xl font-bold mb-6">
            Home cleaning you can trust
          </motion.h2>
          <motion.p variants={itemVariants} className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Book our professional cleaning services today and experience the difference.
          </motion.p>

          <motion.div variants={containerVariants} className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2)" }}
              className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20"
            >
              <h3 className="text-xl font-bold mb-4">Order online</h3>
              <p className="text-white/80 mb-6">Our easy online pricing lets you set up a cleaning plan right now.</p>
              <Link
                href="/pricing"
                className="bg-white text-black hover:bg-white/90 px-6 py-3 rounded-full text-sm font-medium inline-flex items-center"
              >
                <Calendar className="h-4 w-4 mr-2" />
                See my price
              </Link>
            </motion.div>

            <motion.div
              variants={itemVariants}
              whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2)" }}
              className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20"
            >
              <h3 className="text-xl font-bold mb-4">Call us now</h3>
              <p className="text-white/80 mb-6">Need more information? Prefer a friendly voice over the phone?</p>
              <a
                href="tel:+1234567890"
                className="bg-white text-black hover:bg-white/90 px-6 py-3 rounded-full text-sm font-medium inline-flex items-center"
              >
                <Phone className="h-4 w-4 mr-2" />
                (123) 456-7890
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
