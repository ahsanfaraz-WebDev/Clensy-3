"use client"

import { useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Star, ChevronRight } from "lucide-react"
import Image from "next/image"

export default function ReviewsSection() {
  const controls = useAnimation()
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })
  const accentColor = "#0070f3" // Blue color

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, type: "spring", stiffness: 100 },
    },
  }

  const reviews = [
    {
      name: "Sarah Johnson",
      text: "Monica was excellent. Went beyond in helping me. My sheets and comforter were not just washed but perfectly folded. Everything was spotless!",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
    {
      name: "Michael Chen",
      text: "Clensy does the best job taking care of our house. Bailey recently cleaned our home and did an amazing job. Very thorough and professional.",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
    {
      name: "Emily Rodriguez",
      text: "Arrived as planned! Great job! Everything polished. Baseboards done. Kitchen and bathroom spotless. Will definitely book again.",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
    {
      name: "David Thompson",
      text: "My house was cleaned by Clensy today. Susan did a great job. I asked them to pay special attention to the kitchen and they delivered.",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
    {
      name: "Jennifer Lee",
      text: "The team did a great job cleaning! They were professional, polite and very thorough. I'm so happy with the results!",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
    {
      name: "Robert Garcia",
      text: "Awesome job by Rashida! Consistently excellent work! Keep it up! My home has never looked better.",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
  ]

  return (
    <section ref={ref} className="py-20 bg-white relative overflow-hidden">
      {/* Wavy line graphic at the top */}
      <div className="absolute top-0 left-0 w-full overflow-hidden">
        <svg width="100%" height="20" className="fill-current" style={{ color: "rgba(0,0,0,0.03)" }}>
          <motion.path
            d="M0,0 C150,20 350,0 500,10 C650,20 850,0 1000,10 C1150,20 1350,0 1500,10 C1650,20 1850,0 2000,10 L2000,0 L0,0 Z"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            stroke={accentColor}
            strokeWidth="2"
            fill="none"
            strokeOpacity="0.1"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={itemVariants} initial="hidden" animate={controls} className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-montserrat">What Our Clients Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about our cleaning services.
          </p>
          <div className="w-20 h-1 mx-auto mt-6" style={{ backgroundColor: accentColor }}></div>
        </motion.div>

        {/* Reviews Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-lg p-6 shadow-lg border border-gray-100"
              whileHover={{
                y: -10,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                transition: { duration: 0.3 },
              }}
            >
              <div className="flex items-center mb-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4 border-2 border-[#0070f3]">
                  <Image src={review.image || "/placeholder.svg"} alt={review.name} fill className="object-cover" />
                </div>
                <div>
                  <p className="font-montserrat font-medium text-lg text-[#0070f3]">{review.name}</p>
                  <div className="flex mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 mr-1"
                        fill={i < review.rating ? accentColor : "none"}
                        stroke={i < review.rating ? accentColor : "#D1D5DB"}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <motion.p
                className="text-gray-700 font-montserrat font-normal text-base"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
              >
                "{review.text}"
              </motion.p>
            </motion.div>
          ))}
        </motion.div>

        {/* Load More Button */}
        <div className="text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 rounded-full font-medium transition-all duration-300 text-white bg-[#0070f3] hover:bg-[#0050d0]"
          >
            Load More Reviews
            <ChevronRight className="inline-block ml-2 h-4 w-4" />
          </motion.button>
        </div>
      </div>
    </section>
  )
}
