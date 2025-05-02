"use client";

import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Check,
  X,
  ShieldCheck,
  Clock,
  Leaf,
  Users,
  BadgeCheck,
  HeartHandshake,
  Medal,
} from "lucide-react";

export default function ComparisonSection() {
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

  const comparisonData = [
    {
      id: 1,
      feature: "Locally Owned and Operated",
      clensy: true,
      others: true,
      icon: <Users className="w-5 h-5 text-[#007AFF]" />,
    },
    {
      id: 2,
      feature: "Over The Phone Estimates",
      clensy: true,
      others: false,
      icon: <Clock className="w-5 h-5 text-[#007AFF]" />,
    },
    {
      id: 3,
      feature: "Bonded and Insured",
      clensy: true,
      others: false,
      icon: <ShieldCheck className="w-5 h-5 text-[#007AFF]" />,
    },
    {
      id: 4,
      feature: "Environmentally Friendly",
      clensy: true,
      others: false,
      icon: <Leaf className="w-5 h-5 text-[#007AFF]" />,
    },
    {
      id: 5,
      feature: "Customized Cleans",
      clensy: true,
      others: true,
      icon: <HeartHandshake className="w-5 h-5 text-[#007AFF]" />,
    },
    {
      id: 6,
      feature: "PRO Clean Promise",
      clensy: true,
      others: false,
      icon: <Medal className="w-5 h-5 text-[#007AFF]" />,
    },
    {
      id: 7,
      feature: "Background Checks",
      clensy: true,
      others: false,
      icon: <BadgeCheck className="w-5 h-5 text-[#007AFF]" />,
    },
  ];

  return (
    <section ref={ref} className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={controls}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#007AFF]">
            The Clensy <span className="text-gray-800">Difference</span>
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto mt-4 text-center">
            We're leading the cleaning industry in customer satisfaction and
            service quality. Try Clensy and see why cleaning is a big deal to
            us.
          </p>
          <div className="w-24 h-1 bg-[#007AFF] mx-auto mt-6"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="relative z-10"
        >
          {/* Header Row */}
          <div className="grid grid-cols-12 gap-6 mb-6">
            {/* Features Header - Centered */}
            <div className="col-span-5 flex justify-center items-center">
              <h3 className="text-xl font-semibold text-gray-800">Features</h3>
            </div>

            {/* Comparison Headers */}
            <div className="col-span-7">
              <div className="grid grid-cols-2">
                <div className="bg-[#007AFF] text-white py-4 text-center font-semibold">
                  Clensy
                </div>
                <div className="bg-[#444b54] text-white py-4 text-center font-semibold">
                  Independent Maids
                </div>
              </div>
            </div>
          </div>

          {/* Comparison table */}
          <div className="bg-white rounded-md shadow-md overflow-hidden">
            {comparisonData.map((item, index) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                className={`grid grid-cols-12 ${
                  index !== comparisonData.length - 1
                    ? "border-b border-gray-100"
                    : ""
                }`}
                custom={index}
              >
                {/* Feature Label */}
                <div className="col-span-5 py-5 pl-8 flex items-center">
                  <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center mr-4">
                    {item.icon}
                  </div>
                  <span className="text-gray-700 font-medium">
                    {item.feature}
                  </span>
                </div>

                {/* Checkmarks */}
                <div className="col-span-7 grid grid-cols-2">
                  {/* Clensy checkmark */}
                  <div className="py-5 flex justify-center items-center">
                    <div className="w-8 h-8 bg-[#007AFF] rounded-full flex items-center justify-center">
                      <Check className="h-5 w-5 text-white" />
                    </div>
                  </div>

                  {/* Independent maids checkmark or X */}
                  <div className="py-5 flex justify-center items-center">
                    {item.others ? (
                      <div className="w-8 h-8 bg-[#444b54] rounded-full flex items-center justify-center">
                        <Check className="h-5 w-5 text-white" />
                      </div>
                    ) : (
                      <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                        <X className="h-5 w-5 text-gray-500" />
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={controls}
          className="text-center mt-10"
        >
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: "#0050d0" }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="px-8 py-3 bg-[#007AFF] text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Experience the Clensy Difference
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
