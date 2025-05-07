"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Check } from "lucide-react";
import Image from "next/image";

export default function ChecklistSection() {
  const [activeRoom, setActiveRoom] = useState("living");
  const [cleaningType, setCleaningType] = useState("routine");
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  // Updated checklist items organized by cleaning type and room
  const checklistItems = {
    routine: {
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
    },
    deep: {
      living: [
        "All routine cleaning tasks",
        "Clean inside cabinets & drawers",
        "Clean behind & under furniture",
        "Vacuum furniture & upholstery",
        "Clean baseboards & moldings",
        "Spot clean walls",
        "Clean light fixtures",
        "Dust blinds & window treatments",
      ],
      kitchen: [
        "All routine cleaning tasks",
        "Clean inside of oven",
        "Clean inside of refrigerator",
        "Deep clean microwave",
        "Clean inside cabinets & drawers",
        "Clean backsplash & behind appliances",
        "Deep clean sink & faucet",
        "Clean baseboards & moldings",
      ],
      bathroom: [
        "All routine cleaning tasks",
        "Deep clean grout",
        "Deep clean shower doors/curtains",
        "Clean inside cabinets & drawers",
        "Descale faucets & showerheads",
        "Clean exhaust fan",
        "Clean baseboards & moldings",
        "Disinfect high-touch surfaces",
      ],
      bedroom: [
        "All routine cleaning tasks",
        "Clean under bed & furniture",
        "Dust light fixtures & ceiling fans",
        "Clean baseboards & moldings",
        "Clean inside nightstands & dressers",
        "Spot clean walls",
        "Vacuum mattress",
        "Clean windows & sills",
      ],
    },
    moving: {
      living: [
        "All deep cleaning tasks",
        "Clean inside all cabinets & shelves",
        "Clean all window tracks & frames",
        "Clean all vents & returns",
        "Clean all light fixtures thoroughly",
        "Clean all switches & outlets",
        "Clean all doors & door frames",
        "Clean inside fireplace (if applicable)",
      ],
      kitchen: [
        "All deep cleaning tasks",
        "Clean inside & behind all appliances",
        "Clean all cabinet interiors thoroughly",
        "Clean range hood filters",
        "Clean all drawer tracks",
        "Clean all toe kicks & baseboards",
        "Degrease all surfaces",
        "Clean pantry shelving",
      ],
      bathroom: [
        "All deep cleaning tasks",
        "Sanitize all surfaces thoroughly",
        "Clean all plumbing fixtures thoroughly",
        "Deep clean all tile & grout",
        "Clean all cabinetry inside & out",
        "Deep clean toilet inside, outside & behind",
        "Clean all vents & fans",
        "Clean all windows & mirrors",
      ],
      bedroom: [
        "All deep cleaning tasks",
        "Clean all closet shelving & rods",
        "Clean all window tracks & frames",
        "Clean all light fixtures & fans thoroughly",
        "Clean all baseboards & crown molding",
        "Clean all vents & returns",
        "Clean all door frames & doors",
        "Clean inside all built-in furniture",
      ],
    },
  };

  // Interactive house floor plan
  const renderHouseFloorPlan = () => {
    return (
      <div className="relative h-[500px] w-full rounded-lg overflow-hidden">
        {/* Main floor plan container without black background */}
        <div className="absolute inset-0">
          {/* Background image */}
          <div className="w-full h-full relative">
            <Image
              src="/images/house.png"
              alt="The 50-Point Checklist"
              fill
              className="object-contain"
              priority
            />

            {/* Interactive points */}
            <div
              className="points-wrapper absolute inset-0"
              data-animation="inview-fade-up"
              data-inview="true"
            >
              {/* Living Room Point */}
              <button
                className={`point absolute ${
                  activeRoom === "living" ? "active" : ""
                }`}
                style={{ left: "24.12%", top: "37.95%" }}
                onClick={() => setActiveRoom("living")}
              >
                <span className="point-label icon-house">
                  <div
                    className={`point-icon ${
                      activeRoom === "living" ? "bg-[#007BFF]" : "bg-white/80"
                    } p-2 rounded-md shadow-lg mb-1`}
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
                        stroke={activeRoom === "living" ? "white" : "#007BFF"}
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                  <div className="text-center text-white font-bold text-sm bg-[#007BFF] py-1 px-3 rounded-md">
                    LIVING ROOM
                  </div>
                </span>
              </button>

              {/* Kitchen Point */}
              <button
                className={`point absolute ${
                  activeRoom === "kitchen" ? "active" : ""
                }`}
                style={{ left: "47%", top: "30%" }}
                onClick={() => setActiveRoom("kitchen")}
              >
                <span className="point-label icon-plate-set">
                  <div
                    className={`point-icon ${
                      activeRoom === "kitchen" ? "bg-[#007BFF]" : "bg-white/80"
                    } p-2 rounded-md shadow-lg mb-1`}
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="4"
                        y="4"
                        width="16"
                        height="16"
                        stroke={activeRoom === "kitchen" ? "white" : "#007BFF"}
                        strokeWidth="2"
                      />
                      <path
                        d="M4 8H20"
                        stroke={activeRoom === "kitchen" ? "white" : "#007BFF"}
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                  <div className="text-center text-white font-bold text-sm bg-[#007BFF] py-1 px-3 rounded-md">
                    KITCHEN
                  </div>
                </span>
              </button>

              {/* Bedroom Point */}
              <button
                className={`point absolute ${
                  activeRoom === "bedroom" ? "active" : ""
                }`}
                style={{ left: "79.28%", top: "40.06%" }}
                onClick={() => setActiveRoom("bedroom")}
              >
                <span className="point-label icon-bed">
                  <div
                    className={`point-icon ${
                      activeRoom === "bedroom" ? "bg-[#007BFF]" : "bg-white/80"
                    } p-2 rounded-md shadow-lg mb-1`}
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4 18V12C4 11.4477 4.44772 11 5 11H19C19.5523 11 20 11.4477 20 12V18"
                        stroke={activeRoom === "bedroom" ? "white" : "#007BFF"}
                        strokeWidth="2"
                      />
                      <path
                        d="M2 18H22"
                        stroke={activeRoom === "bedroom" ? "white" : "#007BFF"}
                        strokeWidth="2"
                      />
                      <path
                        d="M6 11V8C6 7.44772 6.44772 7 7 7H17C17.5523 7 18 7.44772 18 8V11"
                        stroke={activeRoom === "bedroom" ? "white" : "#007BFF"}
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                  <div className="text-center text-white font-bold text-sm bg-[#007BFF] py-1 px-3 rounded-md">
                    BEDROOMS
                  </div>
                </span>
              </button>

              {/* Bathroom Point */}
              <button
                className={`point absolute ${
                  activeRoom === "bathroom" ? "active" : ""
                }`}
                style={{ left: "40%", top: "70%" }}
                onClick={() => setActiveRoom("bathroom")}
              >
                <span className="point-label icon-vanity">
                  <div
                    className={`point-icon ${
                      activeRoom === "bathroom" ? "bg-[#007BFF]" : "bg-white/80"
                    } p-2 rounded-md shadow-lg mb-1`}
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4 8H20"
                        stroke={activeRoom === "bathroom" ? "white" : "#007BFF"}
                        strokeWidth="2"
                      />
                      <path
                        d="M8 8V20"
                        stroke={activeRoom === "bathroom" ? "white" : "#007BFF"}
                        strokeWidth="2"
                      />
                      <path
                        d="M16 8V20"
                        stroke={activeRoom === "bathroom" ? "white" : "#007BFF"}
                        strokeWidth="2"
                      />
                      <path
                        d="M4 12H20"
                        stroke={activeRoom === "bathroom" ? "white" : "#007BFF"}
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                  <div className="text-center text-white font-bold text-sm bg-[#007BFF] py-1 px-3 rounded-md">
                    BATHROOMS
                  </div>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Our 50-Point Cleaning Checklist
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-600 max-w-3xl mx-auto"
          >
            We don&apos;t miss a spot. Here&apos;s our comprehensive cleaning
            checklist for every room in your home.
          </motion.p>
        </div>

        {/* Cleaning Type buttons (moved to top) */}
        <div className="flex justify-center mb-8 space-x-2 overflow-x-auto pb-2">
          {["routine", "deep", "moving"].map((type) => (
            <button
              key={type}
              onClick={() => setCleaningType(type)}
              className={`px-6 py-2 rounded-full text-sm transition-all duration-300 font-montserrat font-medium ${
                cleaningType === type
                  ? "text-white bg-[#007BFF]"
                  : "text-gray-700 hover:text-gray-900 bg-gray-100 hover:bg-gray-200 border border-gray-200"
              }`}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          ))}
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid md:grid-cols-5 gap-8 items-start"
        >
          {/* Interactive House Floor Plan (60% width on desktop) */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-3 relative"
          >
            {renderHouseFloorPlan()}
          </motion.div>

          {/* Checklist (40% width on desktop) */}
          <motion.div variants={itemVariants} className="md:col-span-2">
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 mb-6 border border-white/10">
              <h3 className="text-xl font-bold mb-6 capitalize flex items-center font-montserrat">
                <div className="w-3 h-3 rounded-full bg-[#007BFF] mr-2"></div>
                {activeRoom} Room -{" "}
                {cleaningType.charAt(0).toUpperCase() + cleaningType.slice(1)}{" "}
                Cleaning
              </h3>
              <ul className="space-y-4">
                {checklistItems[cleaningType as keyof typeof checklistItems][
                  activeRoom as keyof typeof checklistItems.routine
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <motion.div
                      className="flex-shrink-0 mt-0.5 w-5 h-5 rounded-full flex items-center justify-center bg-[#007BFF]"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: index * 0.1 + 0.3, type: "spring" }}
                    >
                      <Check className="h-3 w-3 text-white" />
                    </motion.div>
                    <span className="text-gray-900 font-montserrat">
                      {item}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className="mt-4">
              <Link
                href="/checklist"
                className="text-[#007BFF] border border-[#007BFF] hover:bg-[#007BFF]/10 px-6 py-2 rounded-full text-sm font-medium inline-flex items-center transition-all duration-300"
              >
                View Full 50-Point Checklist
                <svg
                  className="ml-2 h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
