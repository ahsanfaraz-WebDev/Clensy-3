"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  CheckSquare,
  Trash2,
  Sparkles,
  HardHat,
  Brush,
  Clock,
  Calendar,
  Star,
  Shield,
  Check,
} from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import CTASection from "@/components/cta-section";

export default function PostConstructionCleaningPage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeStep, setActiveStep] = useState(1);

  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <main className="overflow-x-hidden">
      <Navbar />

      {/* Split Hero Section - Following Deep Cleaning layout */}
      <section className="relative min-h-[85vh] bg-black pt-16">
        {/* Background image with overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://progressivecleaningcorp.com/wp-content/uploads/2023/08/Post-Construction-Cleaning-Alexandria-VA.jpg"
            alt="Post-construction site"
            fill
            className="object-cover opacity-70"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center min-h-[calc(85vh-64px)]">
            {/* Text content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isLoaded ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-block mb-6 px-6 py-2 bg-yellow-500 rounded-lg"
              >
                <span className="text-black font-semibold text-sm uppercase tracking-wider">
                  Post-Construction Cleaning Experts
                </span>
              </motion.div>

              <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-6 hero-text-shadow">
                From <span className="text-yellow-500">Construction Zone</span>{" "}
                <br />
                to Move-In Ready
              </h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="text-lg text-white/80 mb-8 max-w-xl"
              >
                Specialized cleanup services to remove construction debris,
                dust, and residue, making your newly constructed or renovated
                space pristine and ready for use.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <div className="bg-yellow-100 text-yellow-700 px-8 py-3 rounded-lg text-sm font-medium inline-flex items-center justify-center w-48 cursor-default select-none">
                  Free On-Site Estimates
                </div>

                <div className="flex items-center sm:mt-0 mt-4">
                  <div className="flex items-center text-white/90 mr-8">
                    <Clock className="h-5 w-5 mr-2 text-yellow-500" />
                    <span className="text-sm whitespace-nowrap">
                      Thorough Service
                    </span>
                  </div>

                  <div className="flex items-center text-white/90">
                    <Shield className="h-5 w-5 mr-2 text-yellow-500" />
                    <span className="text-sm whitespace-nowrap">
                      100% Satisfaction
                    </span>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right side - Empty space for better balance */}
            <div className="hidden md:block"></div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </section>

      {/* What's Included Section with Zigzag Layout */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Complete Post-Construction Cleanup Solution
            </h2>
            <p className="text-lg text-gray-600">
              Our specialized teams are equipped to tackle the unique challenges
              of construction cleanup, from removing fine dust to eliminating
              paint splatter and construction adhesives.
            </p>
          </div>

          {/* Item 1 - Left image, right text */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-lg order-2 lg:order-1">
              <Image
                src="https://luxurycleaningny.com/wp-content/uploads/2021/07/post-construction-cleaning-services-1080x675.jpg"
                alt="Debris removal team"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="text-2xl font-bold mb-4">Debris Removal</h3>
              <p className="text-gray-600 mb-6">
                We remove all construction debris, nails, screws, and other
                potentially hazardous materials that may have been left behind.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-3 text-yellow-500 flex-shrink-0 mt-0.5" />
                  <span>Complete removal of all construction waste</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-3 text-yellow-500 flex-shrink-0 mt-0.5" />
                  <span>
                    Detailed cleanup of small particles and leftover materials
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-3 text-yellow-500 flex-shrink-0 mt-0.5" />
                  <span>Safe disposal of hazardous materials</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-3 text-yellow-500 flex-shrink-0 mt-0.5" />
                  <span>
                    Thorough inspection for hidden construction debris
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Item 2 - Right image, left text */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h3 className="text-2xl font-bold mb-4">Dust Elimination</h3>
              <p className="text-gray-600 mb-6">
                We tackle the fine construction dust that settles everywhere,
                using specialized equipment and techniques to ensure a clean,
                breathable environment.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-3 text-yellow-500 flex-shrink-0 mt-0.5" />
                  <span>HEPA filtered vacuums for fine dust particles</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-3 text-yellow-500 flex-shrink-0 mt-0.5" />
                  <span>Comprehensive dusting of all surfaces</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-3 text-yellow-500 flex-shrink-0 mt-0.5" />
                  <span>Air filter cleaning or replacement</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-3 text-yellow-500 flex-shrink-0 mt-0.5" />
                  <span>Air vent and duct cleaning</span>
                </li>
              </ul>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="https://s1.kaercher-media.com/media/image/selection/127074/d0/bauendreinigung-header.webp"
                alt="Dust elimination process"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Item 3 - Left image, right text */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-lg order-2 lg:order-1">
              <Image
                src="https://fmccompanies.com/wp-content/uploads/2021/08/floorvac-1024x637.jpeg"
                alt="Surface finishing"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="text-2xl font-bold mb-4">Surface Finishing</h3>
              <p className="text-gray-600 mb-6">
                We clean and polish all surfaces, from windows to fixtures,
                removing any construction residue to reveal the beauty of your
                new space.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-3 text-yellow-500 flex-shrink-0 mt-0.5" />
                  <span>Removal of paint splatter and adhesives</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-3 text-yellow-500 flex-shrink-0 mt-0.5" />
                  <span>Streak-free window and glass cleaning</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-3 text-yellow-500 flex-shrink-0 mt-0.5" />
                  <span>Fixture polishing and detail work</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-3 text-yellow-500 flex-shrink-0 mt-0.5" />
                  <span>Final touch-ups for a perfect finish</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Before & After Section - Following Deep Cleaning layout */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              The Transformation
            </h2>
            <p className="text-lg text-gray-600">
              See the dramatic difference our post-construction cleaning makes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Before & After 1 */}
            <div className="bg-gray-50 rounded-2xl p-6 shadow-sm">
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <div className="relative h-48 rounded-lg overflow-hidden">
                    <Image
                      src="https://mycleaningangel.com/wp-content/uploads/2024/03/process-of-post-construction-cleaning-1080x675.jpg"
                      alt="Before cleaning - construction debris"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute bottom-0 left-0 bg-black/70 text-white px-3 py-1 text-sm">
                      Before
                    </div>
                  </div>
                </div>
                <div>
                  <div className="relative h-48 rounded-lg overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=500&auto=format&fit=crop"
                      alt="After cleaning - pristine room"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute bottom-0 left-0 bg-yellow-500/70 text-black px-3 py-1 text-sm">
                      After
                    </div>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Living Space Transformation
              </h3>
              <p className="text-gray-600">
                From construction dust and debris to a sparkling clean, move-in
                ready living room.
              </p>
            </div>

            {/* Before & After 2 */}
            <div className="bg-gray-50 rounded-2xl p-6 shadow-sm">
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <div className="relative h-48 rounded-lg overflow-hidden">
                    <Image
                      src="https://www.cleannationco.com/wp-content/uploads/2023/03/Post-Construction-Cleaning-scaled-1-1080x675.jpeg"
                      alt="Before cleaning - construction kitchen"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute bottom-0 left-0 bg-black/70 text-white px-3 py-1 text-sm">
                      Before
                    </div>
                  </div>
                </div>
                <div>
                  <div className="relative h-48 rounded-lg overflow-hidden">
                    <Image
                      src="https://luxurycleaningny.com/wp-content/uploads/2023/02/Post-Construction-Cleaning-Checklist-by-Luxury-Cleaning-NY.jpg"
                      alt="After cleaning - pristine kitchen"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute bottom-0 left-0 bg-yellow-500/70 text-black px-3 py-1 text-sm">
                      After
                    </div>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Kitchen Renewal</h3>
              <p className="text-gray-600">
                From unfinished construction to a gleaming, spotless kitchen
                ready for use.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps Section - Similar to Deep Cleaning's "When to Choose" section */}
      <section id="services" className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our Post-Construction Cleaning Process
            </h2>
            <p className="text-lg text-white/80">
              Our systematic approach ensures no detail is overlooked.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
              <div className="bg-yellow-500/20 rounded-full w-14 h-14 flex items-center justify-center mb-6 text-yellow-500 font-bold text-xl">
                1
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Initial Assessment & Debris Removal
              </h3>
              <p className="text-white/80">
                We begin by assessing the site and removing all large debris,
                construction materials, and trash. Our team carefully inspects
                for nails, screws, and other potentially hazardous items.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
              <div className="bg-yellow-500/20 rounded-full w-14 h-14 flex items-center justify-center mb-6 text-yellow-500 font-bold text-xl">
                2
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Dust Elimination & Surface Cleaning
              </h3>
              <p className="text-white/80">
                We use HEPA filter vacuums to remove construction dust from all
                surfaces, including hard-to-reach areas. Our team wipes down all
                surfaces to remove dust and debris.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
              <div className="bg-yellow-500/20 rounded-full w-14 h-14 flex items-center justify-center mb-6 text-yellow-500 font-bold text-xl">
                3
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Floor & Surface Detailing
              </h3>
              <p className="text-white/80">
                We deep clean all flooring surfaces, from hardwood to carpet,
                removing construction residue, paint drips, and adhesives.
                Baseboards, trim, and door frames are carefully wiped down.
              </p>
            </div>

            {/* Step 4 */}
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
              <div className="bg-yellow-500/20 rounded-full w-14 h-14 flex items-center justify-center mb-6 text-yellow-500 font-bold text-xl">
                4
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Final Detailing & Inspection
              </h3>
              <p className="text-white/80">
                We add the finishing touches with detailed cleaning of fixtures,
                windows, and glass. A thorough inspection ensures all areas meet
                our high standards and your requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Reviews - Following Deep Cleaning layout */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              What Our Clients Say
            </h2>
            <p className="text-lg text-white/80">
              Hear from our satisfied clients about their experience with our
              post-construction cleaning service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl">
              <div className="flex items-center mb-4">
                <Star className="h-5 w-5 text-yellow-400" fill="currentColor" />
                <Star className="h-5 w-5 text-yellow-400" fill="currentColor" />
                <Star className="h-5 w-5 text-yellow-400" fill="currentColor" />
                <Star className="h-5 w-5 text-yellow-400" fill="currentColor" />
                <Star className="h-5 w-5 text-yellow-400" fill="currentColor" />
              </div>
              <p className="text-white/80 mb-6">
                "The attention to detail was incredible. My construction site
                has never felt so clean and fresh. I've tried other services
                before, but Clensy's post-construction cleaning is in a league
                of its own."
              </p>
              <div className="flex items-center">
                <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop"
                    alt="Client"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold">Sarah Johnson</p>
                  <p className="text-white/60 text-sm">New York, NY</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl">
              <div className="flex items-center mb-4">
                <Star className="h-5 w-5 text-yellow-400" fill="currentColor" />
                <Star className="h-5 w-5 text-yellow-400" fill="currentColor" />
                <Star className="h-5 w-5 text-yellow-400" fill="currentColor" />
                <Star className="h-5 w-5 text-yellow-400" fill="currentColor" />
                <Star className="h-5 w-5 text-yellow-400" fill="currentColor" />
              </div>
              <p className="text-white/80 mb-6">
                "I've been using Clensy for multiple construction projects now,
                and it's been a game-changer. The consistency and reliability of
                their service is outstanding. My sites always look immaculate."
              </p>
              <div className="flex items-center">
                <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop"
                    alt="Client"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold">Michael Rodriguez</p>
                  <p className="text-white/60 text-sm">Chicago, IL</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl">
              <div className="flex items-center mb-4">
                <Star className="h-5 w-5 text-yellow-400" fill="currentColor" />
                <Star className="h-5 w-5 text-yellow-400" fill="currentColor" />
                <Star className="h-5 w-5 text-yellow-400" fill="currentColor" />
                <Star className="h-5 w-5 text-yellow-400" fill="currentColor" />
                <Star className="h-5 w-5 text-yellow-400" fill="currentColor" />
              </div>
              <p className="text-white/80 mb-6">
                "As a busy contractor, having Clensy's post-construction
                cleaning service has been life-changing. I hand over spotless
                properties every time, and their staff is always professional
                and thorough."
              </p>
              <div className="flex items-center">
                <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image
                    src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=100&auto=format&fit=crop"
                    alt="Client"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold">Jennifer Park</p>
                  <p className="text-white/60 text-sm">Boston, MA</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Standards Section - Unique to Post Construction */}
      <section className="py-20 bg-yellow-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our Construction Clean-up Safety Standards
            </h2>
            <p className="text-lg text-gray-600">
              We take safety seriously when handling post-construction cleanup.
              Our team follows strict protocols to protect both our staff and
              your property.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 shadow-md"
            >
              <div className="flex items-start mb-6">
                <div className="bg-yellow-100 p-3 rounded-lg mr-4">
                  <HardHat className="h-8 w-8 text-yellow-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">
                    Personal Protective Equipment
                  </h3>
                  <p className="text-gray-600">
                    Our technicians are equipped with comprehensive PPE
                    including respiratory protection for dust, safety glasses,
                    gloves, and appropriate footwear to handle post-construction
                    environments safely.
                  </p>
                </div>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckSquare className="h-5 w-5 mr-2 text-yellow-600 flex-shrink-0" />
                  <span>OSHA-compliant safety equipment for all staff</span>
                </li>
                <li className="flex items-start">
                  <CheckSquare className="h-5 w-5 mr-2 text-yellow-600 flex-shrink-0" />
                  <span>
                    Regular safety training for construction site hazards
                  </span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 shadow-md"
            >
              <div className="flex items-start mb-6">
                <div className="bg-yellow-100 p-3 rounded-lg mr-4">
                  <Shield className="h-8 w-8 text-yellow-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">
                    Hazardous Material Handling
                  </h3>
                  <p className="text-gray-600">
                    Construction sites often contain hazardous materials. Our
                    team is trained to identify, safely handle, and properly
                    dispose of materials like paints, solvents, adhesives, and
                    sharp objects.
                  </p>
                </div>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckSquare className="h-5 w-5 mr-2 text-yellow-600 flex-shrink-0" />
                  <span>
                    Proper disposal procedures for construction chemicals
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckSquare className="h-5 w-5 mr-2 text-yellow-600 flex-shrink-0" />
                  <span>Eco-friendly disposal methods when possible</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section - Following Deep Cleaning Layout */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 text-center mb-12">
              Common questions about our post-construction cleaning services.
            </p>

            <div className="space-y-8">
              <div className="bg-white p-8 rounded-2xl shadow-sm border-l-4 border-yellow-500">
                <h3 className="text-xl font-semibold mb-3">
                  How soon after construction is completed can you start
                  cleaning?
                </h3>
                <p className="text-gray-600">
                  We can typically begin cleaning as soon as all construction
                  work is completed. Ideally, all contractors should be finished
                  with their work before we start our post-construction cleanup.
                  This ensures we can access all areas and provide a thorough
                  cleaning.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm border-l-4 border-yellow-500">
                <h3 className="text-xl font-semibold mb-3">
                  How long does post-construction cleaning take?
                </h3>
                <p className="text-gray-600">
                  The duration depends on the size of the property and the
                  extent of the construction work. For an average-sized home,
                  our complete post-construction cleaning typically takes 1-2
                  days. Larger properties or extensive renovations may require
                  additional time.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm border-l-4 border-yellow-500">
                <h3 className="text-xl font-semibold mb-3">
                  Do I need to provide cleaning supplies?
                </h3>
                <p className="text-gray-600">
                  No, our cleaning professionals bring all the necessary
                  cleaning supplies and equipment. We use high-quality,
                  specialized products that are effective for removing
                  construction dust, adhesives, paint splatter, and other
                  construction residues.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm border-l-4 border-yellow-500">
                <h3 className="text-xl font-semibold mb-3">
                  Is post-construction cleaning more expensive than regular
                  cleaning?
                </h3>
                <p className="text-gray-600">
                  Yes, post-construction cleaning is typically more
                  labor-intensive and time-consuming than regular cleaning. It
                  requires specialized equipment and techniques to address
                  construction dust and debris. We provide detailed quotes based
                  on the scope of work required.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <CTASection />

      <Footer />
    </main>
  );
}
