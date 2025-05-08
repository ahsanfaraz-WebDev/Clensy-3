"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Check, X, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ChecklistPage() {
  const [activeRoom, setActiveRoom] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState({ title: "", items: [] });

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Complete checklist items by room
  const fullChecklist = {
    kitchen: {
      title: "Kitchen",
      items: [
        "Appliance exteriors cleaned (interiors upon request)",
        "Microwave exterior/interior cleaned",
        "Tables and chairs cleaned",
        "Countertops and backsplash disinfected (all items removed and replaced)",
        "Cabinet fronts cleaned",
        "Sinks scrubbed and disinfected (dishes upon request)",
        "Floor vacuumed and/or washed",
        "Baseboards dusted",
        "Fingerprints removed from all woodwork, doorframes and switch plates",
        "Trash emptied",
        "Windowsills cleaned (blinds dusted upon request)",
      ],
      image: "/images/kitchen-clean.jpg",
    },
    bathroom: {
      title: "Bathrooms",
      items: [
        "Tub and shower tiles scrubbed, disinfected and rinsed",
        "Toilets disinfected inside and out",
        "Chrome fixtures cleaned and shined",
        "Towels neatly hung and folded",
        "Countertops disinfected (all items removed and replaced)",
        "Cabinet front cleaned",
        "Sinks scrubbed and disinfected",
        "Mirrors cleaned",
        "Floors vacuumed and/or washed",
        "Baseboards dusted",
        "Trash emptied",
        "Fingerprints removed from all woodwork, doorframes and switch plates",
      ],
      image: "/images/bathroom-clean.jpg",
    },
    bedroom: {
      title: "Bedrooms",
      items: [
        "Beds made (linens changed upon request)",
        "Lamps cleaned and lampshades dusted",
        "Picture frames dusted",
        "Furniture dusted - top, front and underneath",
        "Floors vacuumed and/or washed (under bed if accessible)",
        "Windowsills cleaned (blinds dusted upon request)",
        "Baseboards dusted",
        "Fingerprints removed from all woodwork, doorframes and switch plates",
        "Trash emptied",
        "Mirrors cleaned",
      ],
      image: "/images/bedroom-clean.jpg",
    },
    living: {
      title: "Living Areas",
      items: [
        "Upholstered furniture vacuumed",
        "Cushions and pillows fluffed and straightened",
        "Ceiling fans dusted (height restrictions apply)",
        "Lamps cleaned and lampshades dusted",
        "Picture frames dusted",
        "Furniture dusted - on top, on front and underneath",
        "Floors vacuumed and/or washed",
        "Baseboards dusted",
        "Windowsills cleaned (blinds dusted upon request)",
        "Fingerprints removed from all woodwork, doorframes and switch plates",
        "Trash emptied",
        "Mirrors cleaned",
      ],
      image: "/images/living-clean.jpg",
    },
  };

  const handleRoomClick = (room) => {
    setActiveRoom(room);
    setModalData(fullChecklist[room]);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setTimeout(() => {
      setModalData({ title: "", items: [] });
    }, 300);
  };

  return (
    <main className="overflow-x-hidden">
      <Navbar />

      {/* Hero Image Section */}
      <section className="relative w-full h-[70vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/cleaning-hero.jpg"
            alt="Professional Cleaning Service"
            fill
            className="object-cover brightness-75"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-transparent"></div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl font-extrabold mb-6 text-white"
          >
            Our 50-Point Cleaning Checklist
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-3xl mx-auto text-lg text-gray-100 mb-10"
          >
            Discover how we ensure your home receives a thorough clean, every
            time
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center bg-[#007BFF] hover:bg-[#0056B3] text-white px-8 py-3 rounded-full font-medium transition-all duration-300"
            >
              Book Your Cleaning
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 3D Floor Plan Section */}
      <section className="py-20 relative overflow-hidden">
        {/* Background with energetic blue linear gradient - matching the checklist section */}
        <div className="absolute inset-0 bg-[#007BFF]/90 z-0"></div>
        <div className="absolute inset-0 bg-[url('/images/cleaning-pattern.jpg')] bg-repeat opacity-30 z-0"></div>
        <div className="absolute inset-0 [background-size:40px_40px] [background-image:linear-gradient(to_right,#f8fafc33_1px,transparent_1px),linear-gradient(to_bottom,#f8fafc33_1px,transparent_1px)] opacity-20 z-0"></div>

        {/* Glowing orb effect behind icon */}
        <div className="absolute top-32 left-1/2 transform -translate-x-1/2 w-[140px] h-[140px] rounded-full bg-blue-300/50 filter blur-[30px] z-0"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Home Icon */}
          <div className="flex justify-center mb-16">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={isLoaded ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 0.7 }}
              className="w-24 h-24 rounded-full bg-blue-400 shadow-lg shadow-blue-500/30 flex items-center justify-center relative"
            >
              <div className="absolute inset-0 rounded-full bg-blue-300 opacity-80 blur-sm"></div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-white relative z-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
            </motion.div>
          </div>

          <div className="mb-16 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-5xl font-bold mb-4 text-white"
            >
              Interactive Room Cleaning Guide
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-white/80 max-w-3xl mx-auto mb-12"
            >
              Click on any room to see our detailed cleaning checklist
            </motion.p>
          </div>

          {/* 3D House Model */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="w-full max-w-4xl mx-auto relative rounded-xl overflow-hidden mb-16"
          >
            <div className="relative aspect-video">
              <Image
                src="/images/house.png"
                alt="3D House Floor Plan"
                fill
                className="object-contain"
                priority
              />

              {/* Room Labels */}
              <div className="absolute inset-0">
                {/* Kitchen Button */}
                <motion.button
                  onClick={() => handleRoomClick("kitchen")}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`absolute top-[30%] left-[42%] transition-transform ${
                    activeRoom === "kitchen" ? "scale-110" : "scale-100"
                  }`}
                >
                  <div className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-lg flex items-center font-bold">
                    <svg
                      viewBox="0 0 24 24"
                      className="w-5 h-5 mr-2 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M8 5h2v14H8zm6 0h2v14h-2z" />
                      <path d="M4 9h16v2H4zm0 4h16v2H4z" />
                    </svg>
                    KITCHEN
                  </div>
                </motion.button>

                {/* Living Room Button */}
                <motion.button
                  onClick={() => handleRoomClick("living")}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`absolute top-[38%] left-[22%] transition-transform ${
                    activeRoom === "living" ? "scale-110" : "scale-100"
                  }`}
                >
                  <div className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-lg flex items-center font-bold">
                    <svg
                      viewBox="0 0 24 24"
                      className="w-5 h-5 mr-2 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M3 13h1v7c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-7h1a1 1 0 001-1V8a1 1 0 00-1-1H3a1 1 0 00-1 1v4a1 1 0 001 1zm4-2h10a1 1 0 011 1v8H6v-8a1 1 0 011-1z" />
                    </svg>
                    LIVING ROOM
                  </div>
                </motion.button>

                {/* Bedroom Button */}
                <motion.button
                  onClick={() => handleRoomClick("bedroom")}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`absolute top-[35%] left-[76%] transition-transform ${
                    activeRoom === "bedroom" ? "scale-110" : "scale-100"
                  }`}
                >
                  <div className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-lg flex items-center font-bold">
                    <svg
                      viewBox="0 0 24 24"
                      className="w-5 h-5 mr-2 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M20 12c0-1.1-.9-2-2-2V7c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v3c-1.1 0-2 .9-2 2v5h1.33L6 19h1l.67-2h8.67l.66 2h1l.67-2H20v-5zm-4-2H8V7h8v3z" />
                    </svg>
                    BEDROOMS
                  </div>
                </motion.button>

                {/* Bathroom Button */}
                <motion.button
                  onClick={() => handleRoomClick("bathroom")}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`absolute top-[65%] left-[46%] transition-transform ${
                    activeRoom === "bathroom" ? "scale-110" : "scale-100"
                  }`}
                >
                  <div className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-lg flex items-center font-bold">
                    <svg
                      viewBox="0 0 24 24"
                      className="w-5 h-5 mr-2 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M7 7a2 2 0 100-4 2 2 0 000 4zm7 13v-6h-1v-2c0-1.1-.9-2-2-2H7c-1.1 0-2 .9-2 2v2H4v6h2v-1h12v1h2z" />
                    </svg>
                    BATHROOMS
                  </div>
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main 50-Point Checklist Section - Blue Background */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/cleaning-pattern.jpg"
            alt="Cleaning Pattern"
            fill
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-[#007BFF]/90"></div>
        </div>
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="mb-12 text-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="inline-flex items-center justify-center w-20 h-20 rounded-full mb-6 relative"
            >
              <div className="absolute inset-0 rounded-full bg-blue-300 opacity-80 blur-md"></div>
              <div className="relative bg-blue-400 p-5 rounded-full">
                <Check className="h-10 w-10 text-white" />
              </div>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-5xl font-bold mb-4"
            >
              Our 50-Point Checklist includes:
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl max-w-2xl mx-auto mb-10 text-white/80 leading-relaxed"
            >
              We've developed a comprehensive cleaning system that ensures
              nothing is overlooked
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
            {/* Kitchen Section */}
            <div>
              <div className="flex items-center mb-6">
                <div className="text-[150px] font-bold text-[#B8EED0] opacity-30 leading-none mr-4">
                  K
                </div>
                <h3 className="text-3xl font-bold">Kitchen</h3>
              </div>
              <ul className="space-y-4">
                {fullChecklist.kitchen.items.map((item, index) => (
                  <motion.li
                    key={`kitchen-${index}`}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="flex items-start gap-3"
                  >
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.2,
                        delay: 0.1 + index * 0.05,
                        type: "spring",
                      }}
                      className="flex-shrink-0 mt-1 w-5 h-5 rounded-full bg-white flex items-center justify-center"
                    >
                      <Check className="h-3 w-3 text-[#007BFF]" />
                    </motion.div>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Bathroom Section */}
            <div>
              <div className="flex items-center mb-6">
                <div className="text-[150px] font-bold text-[#B8EED0] opacity-30 leading-none mr-4">
                  B
                </div>
                <h3 className="text-3xl font-bold">Bathrooms</h3>
              </div>
              <ul className="space-y-4">
                {fullChecklist.bathroom.items.map((item, index) => (
                  <motion.li
                    key={`bathroom-${index}`}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="flex items-start gap-3"
                  >
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.2,
                        delay: 0.1 + index * 0.05,
                        type: "spring",
                      }}
                      className="flex-shrink-0 mt-1 w-5 h-5 rounded-full bg-white flex items-center justify-center"
                    >
                      <Check className="h-3 w-3 text-[#007BFF]" />
                    </motion.div>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Bedrooms Section */}
            <div>
              <div className="flex items-center mb-6">
                <div className="text-[150px] font-bold text-[#B8EED0] opacity-30 leading-none mr-4">
                  B
                </div>
                <h3 className="text-3xl font-bold">Bedrooms</h3>
              </div>
              <ul className="space-y-4">
                {fullChecklist.bedroom.items.map((item, index) => (
                  <motion.li
                    key={`bedroom-${index}`}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="flex items-start gap-3"
                  >
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.2,
                        delay: 0.1 + index * 0.05,
                        type: "spring",
                      }}
                      className="flex-shrink-0 mt-1 w-5 h-5 rounded-full bg-white flex items-center justify-center"
                    >
                      <Check className="h-3 w-3 text-[#007BFF]" />
                    </motion.div>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Living Areas Section */}
            <div>
              <div className="flex items-center mb-6">
                <div className="text-[150px] font-bold text-[#B8EED0] opacity-30 leading-none mr-4">
                  L
                </div>
                <h3 className="text-3xl font-bold">Other Living Areas</h3>
              </div>
              <ul className="space-y-4">
                {fullChecklist.living.items.map((item, index) => (
                  <motion.li
                    key={`living-${index}`}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="flex items-start gap-3"
                  >
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.2,
                        delay: 0.1 + index * 0.05,
                        type: "spring",
                      }}
                      className="flex-shrink-0 mt-1 w-5 h-5 rounded-full bg-white flex items-center justify-center"
                    >
                      <Check className="h-3 w-3 text-[#007BFF]" />
                    </motion.div>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/clean-kitchen.jpg"
            alt="Clean Kitchen"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/80"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              Ready for the Clensy Difference?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-gray-300 mb-8"
            >
              Experience our 50-point checklist in action. Book your cleaning
              today and see the difference a thorough clean makes.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center bg-[#007BFF] hover:bg-[#0056B3] text-white px-8 py-3 rounded-full font-medium transition-all duration-300"
              >
                Book Your Cleaning
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Modal for Room Details */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center px-4 backdrop-blur-sm bg-black/50"
          >
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              className="relative w-full max-w-4xl bg-gradient-to-br from-[#007BFF] to-blue-700 shadow-2xl rounded-xl overflow-hidden"
            >
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 text-white/70 hover:text-white p-2 bg-blue-500/30 backdrop-blur-sm rounded-full shadow-md"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="grid md:grid-cols-2">
                {/* Image Side */}
                <div className="relative h-64 md:h-auto">
                  <Image
                    src={modalData.image || "/images/room-placeholder.jpg"}
                    alt={modalData.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-blue-900/30"></div>
                  <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-blue-900/80 to-transparent">
                    <h3 className="text-2xl font-bold text-white">
                      {modalData.title}
                    </h3>
                  </div>
                </div>

                {/* Content Side */}
                <div className="p-8 bg-gradient-to-br from-[#007BFF]/90 to-blue-700 text-white">
                  <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                    <div className="w-8 h-8 rounded-full bg-blue-400 flex items-center justify-center mr-3">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    Cleaning Checklist
                  </h3>

                  <ul className="space-y-3 max-h-[300px] overflow-y-auto pr-2">
                    {modalData.items &&
                      modalData.items.map((item, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                          className="flex items-start gap-2"
                        >
                          <div className="flex-shrink-0 mt-1 w-5 h-5 rounded-full bg-white flex items-center justify-center">
                            <Check className="h-3 w-3 text-[#007BFF]" />
                          </div>
                          <span className="text-white/90">{item}</span>
                        </motion.li>
                      ))}
                  </ul>

                  <div className="mt-8">
                    <Link
                      href="/pricing"
                      className="inline-flex items-center text-[#007BFF] bg-white hover:bg-blue-50 px-6 py-2 rounded-md font-medium transition-all duration-300 shadow-lg"
                    >
                      Book a cleaning
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </main>
  );
}
