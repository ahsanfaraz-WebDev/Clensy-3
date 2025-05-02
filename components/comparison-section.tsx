"use client"

import { useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Check } from "lucide-react"
import Link from "next/link"

export default function ComparisonSection() {
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
        staggerChildren: 0.1,
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

  const checkmarkVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 10,
      },
    },
  }

  const comparisonData = [
    { feature: "Locally Owned and Operated", clensy: true, others: true },
    { feature: "Over The Phone Estimates", clensy: true, others: false },
    { feature: "Bonded and Insured", clensy: true, others: false },
    { feature: "Environmentally Friendly", clensy: true, others: false },
    { feature: "Customized Cleans", clensy: true, others: true },
    { feature: "PRO Clean Promise", clensy: true, others: false },
    { feature: "Background Checks", clensy: true, others: false },
  ]

  return (
    <section ref={ref} className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <motion.div variants={itemVariants} initial="hidden" animate={controls} className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-2 text-[#0070f3]">The Clensy</h2>
          <h3 className="text-3xl font-bold mb-4">Difference</h3>
          <p className="text-gray-600 max-w-2xl mx-auto text-center">
            We're leading the cleaning industry in customer satisfaction and service quality. Try Clensy and see why
            cleaning is a big deal to us.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100"
          whileHover={{ boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
          transition={{ duration: 0.3 }}
        >
          {/* Header */}
          <div className="grid grid-cols-2">
            <motion.div
              className="bg-[#0070f3] text-white py-4 px-4 text-center font-medium"
              initial={{ backgroundColor: "#0070f3" }}
              whileHover={{ backgroundColor: "#0050d0" }}
              transition={{ duration: 0.3 }}
            >
              Clensy
            </motion.div>
            <div className="bg-gray-200 text-gray-700 py-4 px-4 text-center font-medium">Independent Cleaners</div>
          </div>

          {/* Comparison rows */}
          {comparisonData.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="grid grid-cols-2 border-b border-gray-100 last:border-b-0 hover:bg-gray-50 transition-colors duration-300"
            >
              <div className="py-4 px-6 flex justify-between items-center">
                <span className="text-sm md:text-base">{item.feature}</span>
                {item.clensy && (
                  <motion.div
                    variants={checkmarkVariants}
                    whileHover={{ scale: 1.2 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <Check className="h-6 w-6 text-[#0070f3] stroke-[3px]" />
                  </motion.div>
                )}
              </div>
              <div className="py-4 px-6 flex justify-end items-center bg-gray-50">
                {item.others ? (
                  <motion.div
                    variants={checkmarkVariants}
                    whileHover={{ scale: 1.2 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <Check className="h-6 w-6 text-gray-400 stroke-[3px]" />
                  </motion.div>
                ) : (
                  <div className="w-6 h-6"></div> // Empty space for alignment
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={controls}
          className="text-center mt-8"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <Link
            href="/pricing"
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#0070f3] hover:bg-[#0050d0] shadow-md hover:shadow-lg transition-all duration-300"
          >
            Book Your Cleaning
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
