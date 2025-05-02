"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Check } from "lucide-react"

export default function ChecklistSection() {
  const [activeRoom, setActiveRoom] = useState("living")
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

  const rooms = {
    living: [
      "Dust all surfaces",
      "Vacuum carpets/rugs",
      "Mop hard floors",
      "Clean mirrors",
      "Dust electronics",
      "Fluff & straighten pillows",
      "Dust ceiling fans",
      "Clean window sills",
    ],
    kitchen: [
      "Clean & disinfect sink",
      "Clean & disinfect countertops",
      "Clean exterior of appliances",
      "Clean stovetop",
      "Clean microwave inside & out",
      "Wipe cabinet exteriors",
      "Sweep & mop floors",
      "Empty trash",
    ],
    bathroom: [
      "Clean & disinfect toilet",
      "Clean & disinfect shower/tub",
      "Clean & disinfect sink & counters",
      "Clean mirrors",
      "Sweep & mop floors",
      "Empty trash",
      "Wipe cabinet exteriors",
      "Restock toilet paper",
    ],
    bedroom: [
      "Dust all surfaces",
      "Make beds",
      "Vacuum carpets",
      "Mop hard floors",
      "Clean mirrors",
      "Empty trash",
      "Dust ceiling fans",
      "Clean window sills",
    ],
  }

  // Interactive house floor plan
  const renderHouseFloorPlan = () => {
    return (
      <div className="relative h-[400px] w-full bg-[#1A2526] rounded-lg overflow-hidden">
        <svg width="100%" height="100%" viewBox="0 0 500 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Outer walls */}
          <rect x="50" y="50" width="400" height="300" stroke="white" strokeWidth="2" />

          {/* Kitchen - Top left */}
          <g onClick={() => setActiveRoom("kitchen")} className="cursor-pointer">
            <rect
              x="50"
              y="50"
              width="150"
              height="120"
              fill={activeRoom === "kitchen" ? "rgba(0, 112, 243, 0.3)" : "transparent"}
              stroke="white"
              strokeWidth="2"
            />
            {/* Kitchen fixtures */}
            <rect x="80" y="50" width="60" height="20" fill="#555" stroke="white" strokeWidth="1" />
            <rect x="160" y="80" width="40" height="40" fill="#666" stroke="white" strokeWidth="1" />
            <text x="100" y="110" fill="white" fontSize="14" textAnchor="middle" fontFamily="Montserrat">
              Kitchen
            </text>
          </g>

          {/* Bathroom - Top right */}
          <g onClick={() => setActiveRoom("bathroom")} className="cursor-pointer">
            <rect
              x="300"
              y="50"
              width="150"
              height="120"
              fill={activeRoom === "bathroom" ? "rgba(0, 112, 243, 0.3)" : "transparent"}
              stroke="white"
              strokeWidth="2"
            />
            {/* Bathroom fixtures */}
            <circle cx="350" cy="100" r="20" fill="#555" stroke="white" strokeWidth="1" />
            <rect x="380" y="70" width="50" height="30" fill="#666" stroke="white" strokeWidth="1" />
            <text x="375" y="110" fill="white" fontSize="14" textAnchor="middle" fontFamily="Montserrat">
              Bathroom
            </text>
          </g>

          {/* Bedroom - Bottom right */}
          <g onClick={() => setActiveRoom("bedroom")} className="cursor-pointer">
            <rect
              x="300"
              y="230"
              width="150"
              height="120"
              fill={activeRoom === "bedroom" ? "rgba(0, 112, 243, 0.3)" : "transparent"}
              stroke="white"
              strokeWidth="2"
            />
            {/* Bedroom fixtures */}
            <rect x="320" y="260" width="80" height="50" fill="#555" stroke="white" strokeWidth="1" />
            <text x="375" y="290" fill="white" fontSize="14" textAnchor="middle" fontFamily="Montserrat">
              Bedroom
            </text>
          </g>

          {/* Living Room - Bottom left */}
          <g onClick={() => setActiveRoom("living")} className="cursor-pointer">
            <rect
              x="50"
              y="230"
              width="150"
              height="120"
              fill={activeRoom === "living" ? "rgba(0, 112, 243, 0.3)" : "transparent"}
              stroke="white"
              strokeWidth="2"
            />
            {/* Living room fixtures */}
            <rect x="80" y="260" width="90" height="40" fill="#555" stroke="white" strokeWidth="1" />
            <text x="125" y="290" fill="white" fontSize="14" textAnchor="middle" fontFamily="Montserrat">
              Living Room
            </text>
          </g>

          {/* Hallway */}
          <rect
            x="200"
            y="50"
            width="100"
            height="300"
            fill="rgba(255, 255, 255, 0.05)"
            stroke="white"
            strokeWidth="2"
          />

          {/* Doors */}
          <line x1="200" y1="100" x2="220" y2="100" stroke="white" strokeWidth="2" />
          <line x1="300" y1="100" x2="280" y2="100" stroke="white" strokeWidth="2" />
          <line x1="200" y1="280" x2="220" y2="280" stroke="white" strokeWidth="2" />
          <line x1="300" y1="280" x2="280" y2="280" stroke="white" strokeWidth="2" />
        </svg>

        {/* Interactive elements */}
        <motion.div
          className={`absolute top-1/4 left-1/4 w-8 h-8 rounded-full bg-[#0070f3] flex items-center justify-center text-white text-xs font-bold ${activeRoom === "kitchen" ? "opacity-100" : "opacity-0"}`}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
        >
          K
        </motion.div>

        <motion.div
          className={`absolute top-1/4 right-1/4 w-8 h-8 rounded-full bg-[#0070f3] flex items-center justify-center text-white text-xs font-bold ${activeRoom === "bathroom" ? "opacity-100" : "opacity-0"}`}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2, delay: 0.5 }}
        >
          B
        </motion.div>

        <motion.div
          className={`absolute bottom-1/4 right-1/4 w-8 h-8 rounded-full bg-[#0070f3] flex items-center justify-center text-white text-xs font-bold ${activeRoom === "bedroom" ? "opacity-100" : "opacity-0"}`}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2, delay: 1 }}
        >
          BR
        </motion.div>

        <motion.div
          className={`absolute bottom-1/4 left-1/4 w-8 h-8 rounded-full bg-[#0070f3] flex items-center justify-center text-white text-xs font-bold ${activeRoom === "living" ? "opacity-100" : "opacity-0"}`}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2, delay: 1.5 }}
        >
          L
        </motion.div>
      </div>
    )
  }

  return (
    <section ref={ref} className="py-16 bg-[#1A2526] text-white relative overflow-hidden">
      {/* Animated wavy lines */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <svg width="100%" height="100%" className="absolute top-0 left-0 opacity-10">
          <motion.path
            d="M0,100 C150,200 350,0 500,100 C650,200 850,0 1000,100 C1150,200 1350,0 1500,100 C1650,200 1850,0 2000,100"
            stroke="#0070f3"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
          <motion.path
            d="M0,300 C150,400 350,200 500,300 C650,400 850,200 1000,300 C1150,400 1350,200 1500,300 C1650,400 1850,200 2000,300"
            stroke="#0070f3"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.1 }}
            transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div variants={itemVariants} initial="hidden" animate={controls} className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-montserrat">The 50-Point Checklist</h2>
          <p className="text-white/80 max-w-2xl mx-auto font-montserrat font-normal">
            No one knows your home better than you, and no one knows more about cleaning than we do. That's why before
            we start cleaning, we reference our 50-Point Checklist.
          </p>
          <div className="w-20 h-1 bg-[#0070f3] mx-auto mt-6"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid md:grid-cols-5 gap-8 items-start"
        >
          {/* Interactive House Floor Plan (60% width on desktop) */}
          <motion.div variants={itemVariants} className="md:col-span-3 relative">
            {renderHouseFloorPlan()}
          </motion.div>

          {/* Checklist (40% width on desktop) */}
          <motion.div variants={itemVariants} className="md:col-span-2">
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 mb-6 border border-white/10">
              <h3 className="text-xl font-bold mb-6 capitalize flex items-center font-montserrat">
                <div className="w-3 h-3 rounded-full bg-[#0070f3] mr-2"></div>
                {activeRoom} Room Checklist
              </h3>
              <ul className="space-y-4">
                {rooms[activeRoom as keyof typeof rooms].map((item, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <motion.div
                      className="flex-shrink-0 mt-0.5 w-5 h-5 rounded-full flex items-center justify-center bg-[#0070f3]"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: index * 0.1 + 0.3, type: "spring" }}
                    >
                      <Check className="h-3 w-3 text-white" />
                    </motion.div>
                    <span className="text-white/90 font-montserrat">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className="mt-4">
              <Link
                href="/checklist"
                className="text-white border border-[#0070f3] hover:bg-[#0070f3]/10 px-6 py-2 rounded-full text-sm font-medium inline-flex items-center transition-all duration-300"
              >
                View Full 50-Point Checklist
                <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </motion.div>
        </motion.div>

        {/* Room selection buttons */}
        <div className="flex justify-center mt-8 space-x-2 overflow-x-auto pb-2">
          {Object.keys(rooms).map((room) => (
            <button
              key={room}
              onClick={() => setActiveRoom(room)}
              className={`px-6 py-2 rounded-full text-sm transition-all duration-300 font-montserrat font-medium ${
                activeRoom === room
                  ? "text-white bg-[#0070f3]"
                  : "text-white/70 hover:text-white bg-transparent border border-white/20"
              }`}
            >
              {room.charAt(0).toUpperCase() + room.slice(1)}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
