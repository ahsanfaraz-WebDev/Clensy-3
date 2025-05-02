"use client";

import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Star } from "lucide-react";
import Image from "next/image";

export default function ReviewsSection() {
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

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const reviews = [
    {
      name: "Sarah Johnson",
      title: "1 day ago",
      text: "Monica was excellent. Went beyond in helping me. My sheets and comforter were not just washed but perfectly folded. Everything was spotless!",
      rating: 5,
      initial: "S",
      initialColor: "#9C27B0", // Purple
    },
    {
      name: "Michael Chen",
      title: "3 days ago",
      text: "Clensy does the best job taking care of our house. Bailey recently cleaned our home and did an amazing job. Very thorough and professional.",
      rating: 5,
      initial: "M",
      initialColor: "#4CAF50", // Green
    },
    {
      name: "Emily Rodriguez",
      title: "1 week ago",
      text: "Arrived as planned! Great job! Everything polished. Baseboards done. Kitchen and bathroom spotless. Will definitely book again.",
      rating: 5,
      initial: "E",
      initialColor: "#E91E63", // Pink
    },
    {
      name: "David Thompson",
      title: "2 weeks ago",
      text: "My house was cleaned by Clensy today. Susan did a great job. I asked them to pay special attention to the kitchen and they delivered.",
      rating: 5,
      initial: "D",
      initialColor: "#FF5722", // Deep Orange
    },
    {
      name: "Jennifer Lee",
      title: "1 month ago",
      text: "The team did a great job cleaning! They were professional, polite and very thorough. I'm so happy with the results!",
      rating: 5,
      initial: "J",
      initialColor: "#2196F3", // Blue
    },
    {
      name: "Robert Garcia",
      title: "2 months ago",
      text: "Awesome job by Rashida! Consistently excellent work! Keep it up! My home has never looked better.",
      rating: 5,
      initial: "R",
      initialColor: "#673AB7", // Deep Purple
    },
    {
      name: "Maxine Patel",
      title: "3 months ago",
      text: "Maxine was terrific! Worked fast and accurate. Looking forward to her again!!!",
      rating: 5,
      initial: "P",
      initialColor: "#3F51B5", // Indigo
    },
    {
      name: "Brandon Smith",
      title: "4 months ago",
      text: "Techs are so friendly and very efficient. You will not regret one single second!",
      rating: 5,
      initial: "B",
      initialColor: "#4CAF50", // Green
    },
  ];

  return (
    <section
      ref={ref}
      className="py-16 bg-gradient-to-b from-white to-blue-50 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
        <motion.div
          variants={titleVariants}
          initial="hidden"
          animate={controls}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            What People Are{" "}
            <span className="text-[#007AFF]">Saying About Us</span>
          </h2>
        </motion.div>

        {/* Reviews Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="bg-white rounded-xl p-6 shadow-sm transition-all duration-300 hover:shadow-md flex flex-col h-full"
              whileHover={{
                y: -5,
                transition: { duration: 0.2, ease: "easeOut" },
              }}
            >
              <div className="flex items-center mb-4">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg mr-3"
                  style={{ backgroundColor: review.initialColor }}
                >
                  {review.initial}
                </div>
                <div>
                  <p className="font-semibold text-gray-800">{review.name}</p>
                  <p className="text-gray-500 text-sm">{review.title}</p>
                </div>
              </div>

              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 text-yellow-400"
                    fill="#FBBC05"
                    stroke="none"
                  />
                ))}
              </div>

              <p className="text-gray-700 text-sm flex-grow mb-4">
                {review.text}
              </p>

              <div className="mt-auto">
                <div className="inline-flex items-center">
                  <img
                    src="/google-icon.svg"
                    alt="Google"
                    className="h-4 w-4 mr-1"
                  />
                  <span className="text-xs text-gray-500">Review</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Load More Button */}
        <motion.div
          variants={titleVariants}
          initial="hidden"
          animate={controls}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{
              scale: 1.03,
              boxShadow: "0 4px 12px rgba(0, 122, 255, 0.2)",
              transition: { duration: 0.2, ease: "easeOut" },
            }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-3 rounded-full font-medium text-white bg-[#007AFF] hover:bg-[#0069D9] shadow-sm transition-all duration-200"
          >
            Load More
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
