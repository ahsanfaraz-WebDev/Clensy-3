"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Calendar, MessageSquare, Clock, Bell, Smartphone, MapPin, Check } from "lucide-react"

export default function HowItWorks() {
  const controls = useAnimation()
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true })
  const [activeTab, setActiveTab] = useState("booking")

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
        staggerChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">It's easy to get started</h2>
          <div className="w-16 h-1 bg-black mx-auto"></div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Left side - Steps */}
          <div className="space-y-8">
            <motion.div variants={itemVariants} className="step-indicator">
              <div className="step-number">1</div>
              <div>
                <h3 className="text-xl font-medium mb-2">Order online</h3>
                <p className="text-gray-600 mb-4">
                  Our easy online pricing lets you set up a cleaning plan right now. See your price and get scheduled
                  today.
                </p>
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <div className="flex items-center text-sm text-gray-600">
                    <Clock className="h-4 w-4 text-[#0070f3] mr-2" />
                    <span>Takes less than 30 seconds</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="step-indicator">
              <div className="step-number">2</div>
              <div>
                <h3 className="text-xl font-medium mb-2">We clean your home</h3>
                <p className="text-gray-600 mb-4">
                  Our professional team arrives on time and cleans your home according to our 50-point checklist.
                </p>
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <div className="flex items-center text-sm text-gray-600">
                    <Check className="h-4 w-4 text-[#0070f3] mr-2" />
                    <span>Trained and background-checked professionals</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="step-indicator">
              <div className="step-number">3</div>
              <div>
                <h3 className="text-xl font-medium mb-2">Enjoy your clean home</h3>
                <p className="text-gray-600 mb-4">
                  Relax in your freshly cleaned space. We'll be back on your schedule - weekly, bi-weekly, or monthly.
                </p>
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <div className="flex items-center text-sm text-gray-600">
                    <Calendar className="h-4 w-4 text-[#0070f3] mr-2" />
                    <span>Flexible scheduling to fit your lifestyle</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="pt-4">
              <Link
                href="/pricing"
                className="bg-[#0070f3] text-white hover:bg-[#0050d0] px-8 py-3 rounded-full text-sm font-medium inline-flex items-center justify-center transition-all duration-300"
              >
                Book Now
              </Link>
            </motion.div>
          </div>

          {/* Right side - Interactive features */}
          <motion.div variants={itemVariants} className="relative">
            {/* Tabs for Customer Portal Features */}
            <div className="mb-6 flex space-x-2">
              <button
                onClick={() => setActiveTab("booking")}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-all ${
                  activeTab === "booking" ? "bg-[#0070f3] text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                <Calendar className="h-4 w-4 inline mr-2" />
                Booking
              </button>
              <button
                onClick={() => setActiveTab("tracking")}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-all ${
                  activeTab === "tracking" ? "bg-[#0070f3] text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                <MapPin className="h-4 w-4 inline mr-2" />
                Tracking
              </button>
              <button
                onClick={() => setActiveTab("notifications")}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-all ${
                  activeTab === "notifications"
                    ? "bg-[#0070f3] text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                <Bell className="h-4 w-4 inline mr-2" />
                Notifications
              </button>
            </div>

            {/* Phone mockup with different screens */}
            <div className="device-mockup phone mx-auto">
              <div className="screen">
                {/* Header */}
                <div className="bg-[#0070f3] text-white p-4">
                  <h4 className="text-center font-medium">Clensy Customer Portal</h4>
                </div>

                {/* Content based on active tab */}
                {activeTab === "booking" && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="p-4"
                  >
                    <h5 className="font-medium mb-4">Book Your Cleaning</h5>
                    <div className="space-y-4">
                      <div className="bg-gray-100 p-3 rounded-lg">
                        <div className="text-xs text-gray-500">Service Type</div>
                        <div className="font-medium">Standard Cleaning</div>
                      </div>
                      <div className="bg-gray-100 p-3 rounded-lg">
                        <div className="text-xs text-gray-500">Date & Time</div>
                        <div className="font-medium">May 15, 2023 • 10:00 AM</div>
                      </div>
                      <div className="bg-gray-100 p-3 rounded-lg">
                        <div className="text-xs text-gray-500">Duration</div>
                        <div className="font-medium">3 Hours</div>
                      </div>
                      <div className="bg-gray-100 p-3 rounded-lg">
                        <div className="text-xs text-gray-500">Frequency</div>
                        <div className="font-medium">Bi-weekly</div>
                      </div>
                      <button className="w-full bg-[#0070f3] text-white py-2 rounded-lg">Confirm Booking</button>
                    </div>
                  </motion.div>
                )}

                {activeTab === "tracking" && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="p-4"
                  >
                    <h5 className="font-medium mb-4">Track Your Cleaner</h5>
                    <div className="bg-gray-100 p-3 rounded-lg mb-4">
                      <div className="text-xs text-gray-500">Cleaner</div>
                      <div className="font-medium">Sarah Johnson</div>
                      <div className="text-xs text-[#0070f3] mt-1">Arriving in 20 minutes</div>
                    </div>
                    <div className="bg-gray-200 h-40 rounded-lg mb-4 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-8 h-8 bg-[#0070f3] rounded-full mx-auto mb-2 flex items-center justify-center">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                        <div className="text-xs">Your cleaner is on the way</div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-[#0070f3] rounded-full mr-2"></div>
                        <div className="text-xs">Cleaner left office</div>
                        <div className="text-xs text-gray-500 ml-auto">9:30 AM</div>
                      </div>
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-[#0070f3] rounded-full mr-2"></div>
                        <div className="text-xs">On the way to your home</div>
                        <div className="text-xs text-gray-500 ml-auto">9:45 AM</div>
                      </div>
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-gray-300 rounded-full mr-2"></div>
                        <div className="text-xs text-gray-400">Arrived at your home</div>
                        <div className="text-xs text-gray-400 ml-auto">--:--</div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeTab === "notifications" && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="p-4"
                  >
                    <h5 className="font-medium mb-4">Notifications</h5>
                    <div className="space-y-3">
                      <div className="device-notification">
                        <div className="flex items-start">
                          <Bell className="h-5 w-5 mr-2 text-[#0070f3] flex-shrink-0" />
                          <div>
                            <div className="device-notification-title">Cleaning reminder</div>
                            <div className="device-notification-text">
                              Your cleaning is scheduled for tomorrow at 10:00 AM
                            </div>
                            <div className="text-xs text-gray-400 mt-1">1 hour ago</div>
                          </div>
                        </div>
                      </div>
                      <div className="device-notification">
                        <div className="flex items-start">
                          <MessageSquare className="h-5 w-5 mr-2 text-[#0070f3] flex-shrink-0" />
                          <div>
                            <div className="device-notification-title">Message from Sarah</div>
                            <div className="device-notification-text">
                              Hi! I'll be your cleaner tomorrow. Looking forward to helping you!
                            </div>
                            <div className="text-xs text-gray-400 mt-1">3 hours ago</div>
                          </div>
                        </div>
                      </div>
                      <div className="device-notification">
                        <div className="flex items-start">
                          <Calendar className="h-5 w-5 mr-2 text-[#0070f3] flex-shrink-0" />
                          <div>
                            <div className="device-notification-title">Booking confirmed</div>
                            <div className="device-notification-text">Your bi-weekly cleaning has been scheduled</div>
                            <div className="text-xs text-gray-400 mt-1">1 day ago</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>

            <motion.div
              className="absolute -bottom-6 -right-6 bg-white rounded-lg shadow-lg p-6 max-w-xs"
              variants={itemVariants}
              whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="text-sm text-gray-500">Customer Portal</div>
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
              </div>
              <h4 className="text-lg font-medium mb-2">Stay updated</h4>
              <p className="text-sm text-gray-600">
                Track your cleaning team, manage appointments, and communicate directly through our customer portal.
              </p>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <div className="flex items-center text-[#0070f3] text-sm">
                  <Smartphone className="h-4 w-4 mr-2" />
                  <span>Available on iOS & Android</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
