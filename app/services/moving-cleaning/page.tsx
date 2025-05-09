"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Check,
  ArrowRight,
  Star,
  Package,
  Home,
  ArrowLeft,
  ArrowRight as ArrowRightIcon,
  Calendar,
  Clock,
  Shield,
  Users,
} from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import CTASection from "@/components/cta-section";

export default function MovingCleaningPage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState("moveOut");

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <main className="overflow-x-hidden">
      <Navbar />

      {/* Split Hero Section - Matching deep cleaning layout */}
      <section className="relative min-h-[85vh] bg-black pt-16">
        {/* Background image with overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://thecleanstart.com/wp-content/uploads/2022/04/Move-In-Move-Out-Cleaning.jpg"
            alt="Moving cleaning service"
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
                className="inline-block mb-6 px-4 py-1 bg-white/10 backdrop-blur-sm rounded-full"
              >
                <span className="text-white/90 text-sm font-medium">
                  Moving Cleaning Services
                </span>
              </motion.div>

              <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-6 hero-text-shadow">
                Fresh Start, <br />
                <span className="text-[#4CAF50]">Clean Slate</span>
              </h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="text-lg text-white/80 mb-8 max-w-xl"
              >
                Specialized cleaning services for when you're moving out of your
                old place or into your new home. We ensure a smooth transition
                with professional, thorough cleaning.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <div className="bg-green-100 text-green-700 px-8 py-3 rounded-full text-sm font-medium inline-flex items-center justify-center w-48 cursor-default select-none">
                  Move-In Cleaning Experts
                </div>

                <div className="flex items-center sm:mt-0 mt-4">
                  <div className="flex items-center text-white/90 mr-8">
                    <Clock className="h-5 w-5 mr-2 text-[#4CAF50]" />
                    <span className="text-sm whitespace-nowrap">
                      5-8 Hour Service
                    </span>
                  </div>

                  <div className="flex items-center text-white/90">
                    <Shield className="h-5 w-5 mr-2 text-[#4CAF50]" />
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

      {/* What's Included Section with Zigzag Layout - Following deep cleaning pattern */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              What's Included in Our Moving Cleaning
            </h2>
            <p className="text-lg text-gray-600">
              Our comprehensive moving cleaning service ensures your old or new
              home receives thorough attention for a seamless transition.
            </p>
          </div>

          {/* Item 1 - Left image, right text - Move-Out Cleaning */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-lg order-2 lg:order-1">
              <Image
                src="https://5.imimg.com/data5/OE/NU/GLADMIN-71204126/move-in-move-out-cleaning.jpg"
                alt="Move-out cleaning"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="text-2xl font-bold mb-4">Move-Out Cleaning</h3>
              <p className="text-gray-600 mb-6">
                Our move-out cleaning service ensures you leave your rental
                property in pristine condition, maximizing the chances of
                getting your security deposit back in full.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-3 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>
                    Deep cleaning of all rooms, including hard-to-reach areas
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-3 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>
                    Wall cleaning and scuff/mark removal where possible
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-3 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Inside cabinet and drawer cleaning</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-3 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Appliance cleaning inside and out (if remaining)</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Item 2 - Right image, left text - Move-In Cleaning */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h3 className="text-2xl font-bold mb-4">Move-In Cleaning</h3>
              <p className="text-gray-600 mb-6">
                Start fresh in your new home with our comprehensive move-in
                cleaning service, ensuring every surface is sanitized and ready
                for your belongings.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-3 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>
                    Sanitization of all surfaces, especially high-touch areas
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-3 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Deep cleaning of bathrooms and kitchen</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-3 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>
                    Thorough dusting of all surfaces and light fixtures
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-3 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Window cleaning and floor treatments</span>
                </li>
              </ul>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="https://www.repairsmax.com/wp-content/uploads/2022/12/b6ec1672e296fba3ecba1e732512f4a0.jpg"
                alt="Move-in cleaning team"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Item 3 - Left image, right text - Post-Renovation Cleaning */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-lg order-2 lg:order-1">
              <Image
                src="https://biocleaning.ie/wp-content/uploads/2024/02/post-construction-cleaning-checklist.jpg.jpg"
                alt="Post-renovation cleaning"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="text-2xl font-bold mb-4">
                Post-Renovation Cleaning
              </h3>
              <p className="text-gray-600 mb-6">
                If your new home has undergone renovations, our specialized
                cleaning removes dust, debris, and construction residue before
                you move in.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-3 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Removal of construction dust from all surfaces</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-3 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Cleaning of vents and air ducts to remove debris</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-3 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Interior window and frame cleaning</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-3 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Final sanitization of all living spaces</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Before & After Section - Matching deep cleaning page */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              The Moving Cleaning Difference
            </h2>
            <p className="text-lg text-gray-600">
              See the dramatic transformation our moving cleaning services
              deliver for both move-in and move-out situations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Before & After 1 - Move-Out */}
            <div className="bg-gray-50 rounded-2xl p-6 shadow-sm">
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <div className="relative h-48 rounded-lg overflow-hidden">
                    <Image
                      src="https://mustang-moving.com/wp-content/uploads/2025/01/clean-empty-house-gettyimages-1031043754.webp"
                      alt="Before move-out cleaning - dirty kitchen"
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
                      src="https://whiteglovecleaner.com/wp-content/uploads/2020/08/Vacancy-Cleaning-Eurkea-1024x682-min.jpg"
                      alt="After move-out cleaning - spotless kitchen"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute bottom-0 left-0 bg-green-600/70 text-white px-3 py-1 text-sm">
                      After
                    </div>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Move-Out Transformation
              </h3>
              <p className="text-gray-600">
                Our thorough move-out cleaning helps secure your deposit by
                leaving the property in pristine condition for the next tenant.
              </p>
            </div>

            {/* Before & After 2 - Move-In */}
            <div className="bg-gray-50 rounded-2xl p-6 shadow-sm">
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <div className="relative h-48 rounded-lg overflow-hidden">
                    <Image
                      src="https://fantasticcleaners.com.au/blog/wp-content/uploads/2017/11/what-clean-before-moving-in.jpg"
                      alt="Before move-in cleaning - dirty bathroom"
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
                      src="https://www.houselogic.com/wp-content/uploads/2023/02/16-rules-how-keep-organized-home-clean-declutter-living-room.jpg"
                      alt="After move-in cleaning - sparkling bathroom"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute bottom-0 left-0 bg-green-600/70 text-white px-3 py-1 text-sm">
                      After
                    </div>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Move-In Revival</h3>
              <p className="text-gray-600">
                Our move-in cleaning ensures your new home is sanitized and
                ready for you to start fresh in a clean environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Moving Cleaning Benefits - Similar to deep cleaning's "When to Choose" section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Benefits of Professional Moving Cleaning
            </h2>
            <p className="text-lg text-white/80">
              Why investing in professional moving cleaning services is
              essential for a smooth transition.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
              <div className="bg-[#4CAF50]/20 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <Image
                  src="data:image/jpeg;base64,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"
                  alt="Deposit return"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Secure Your Deposit
              </h3>
              <p className="text-white/80">
                Our thorough move-out cleaning significantly increases your
                chances of receiving your full security deposit back from your
                landlord.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
              <div className="bg-[#4CAF50]/20 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <Image
                  src="data:image/jpeg;base64,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"
                  alt="Stress reduction"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Reduce Moving Stress
              </h3>
              <p className="text-white/80">
                Let professionals handle the cleaning while you focus on the
                many other aspects of your move, significantly reducing your
                stress.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
              <div className="bg-[#4CAF50]/20 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <Image
                  src="https://images.unsplash.com/photo-1583947581924-860bda6a26df?q=80&w=100&auto=format&fit=crop"
                  alt="Health protection"
                  width={40}
                  height={40}
                  className="rounded-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-3">Health Protection</h3>
              <p className="text-white/80">
                Our sanitization process eliminates allergens, bacteria, and
                germs from previous occupants, creating a healthier environment
                in your new home.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              What Our Clients Say
            </h2>
            <p className="text-lg text-white/80">
              Read testimonials from customers who have used our moving cleaning
              services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl relative">
              <div className="flex items-center mb-4">
                <Star className="h-5 w-5 text-yellow-400" fill="currentColor" />
                <Star className="h-5 w-5 text-yellow-400" fill="currentColor" />
                <Star className="h-5 w-5 text-yellow-400" fill="currentColor" />
                <Star className="h-5 w-5 text-yellow-400" fill="currentColor" />
                <Star className="h-5 w-5 text-yellow-400" fill="currentColor" />
              </div>
              <p className="text-white/80 mb-6 italic">
                "I was so stressed about getting my security deposit back from
                my old apartment. Clensy's move-out cleaning service was a
                lifesaver! They cleaned areas I didn't even think about, and I
                got my full deposit back. Worth every penny!"
              </p>
              <div className="flex items-center">
                <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image
                    src="https://images.unsplash.com/photo-1491349174775-aaafddd81942?q=80&w=100&auto=format&fit=crop"
                    alt="Customer"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold">Jessica Miller</p>
                  <p className="text-white/60 text-sm">
                    Move-Out Cleaning Customer
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl relative">
              <div className="flex items-center mb-4">
                <Star className="h-5 w-5 text-yellow-400" fill="currentColor" />
                <Star className="h-5 w-5 text-yellow-400" fill="currentColor" />
                <Star className="h-5 w-5 text-yellow-400" fill="currentColor" />
                <Star className="h-5 w-5 text-yellow-400" fill="currentColor" />
                <Star className="h-5 w-5 text-yellow-400" fill="currentColor" />
              </div>
              <p className="text-white/80 mb-6 italic">
                "Moving into our new home was chaotic enough without having to
                worry about cleaning. Clensy came in before we moved our
                furniture and made the place spotless. It was such a relief to
                move into a clean, fresh-smelling home!"
              </p>
              <div className="flex items-center">
                <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&auto=format&fit=crop"
                    alt="Customer"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold">Michael Chang</p>
                  <p className="text-white/60 text-sm">
                    Move-In Cleaning Customer
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Moving Stress Reduction - Unique to Moving Cleaning */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Reduce Your Moving Stress
            </h2>
            <p className="text-lg text-gray-600">
              Moving is consistently ranked as one of life's most stressful
              events. Let us handle the cleaning so you can focus on settling
              into your new home.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Image
                src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1770&auto=format&fit=crop"
                alt="Person relieved from moving stress"
                width={600}
                height={450}
                className="rounded-2xl shadow-lg"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-6">
                How Professional Moving Cleaning Helps
              </h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-black/5 rounded-full p-3 mr-4 flex-shrink-0">
                    <Clock className="h-6 w-6 text-black" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">
                      Save Valuable Time
                    </h4>
                    <p className="text-gray-600">
                      The average person spends 12-16 hours cleaning when moving
                      out. Our team can complete the job in 4-6 hours, giving
                      you back precious time during your move.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-black/5 rounded-full p-3 mr-4 flex-shrink-0">
                    <Shield className="h-6 w-6 text-black" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">
                      Avoid Deposit Disputes
                    </h4>
                    <p className="text-gray-600">
                      Security deposit disputes are common and stressful. Our
                      professional cleaning service provides documentation that
                      you've fulfilled your lease's cleaning requirements.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-black/5 rounded-full p-3 mr-4 flex-shrink-0">
                    <Users className="h-6 w-6 text-black" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">
                      Focus on Your Family's Transition
                    </h4>
                    <p className="text-gray-600">
                      Moving is especially challenging for families with
                      children. Our service lets you focus on helping your
                      family adjust to their new environment rather than
                      scrubbing your old one.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 text-center mb-12">
              Get answers to common questions about our moving cleaning
              services.
            </p>

            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-3">
                  How far in advance should I book a moving cleaning service?
                </h3>
                <p className="text-gray-600">
                  We recommend booking your move-out or move-in cleaning at
                  least 1-2 weeks in advance, especially during peak moving
                  seasons (summer months and end/beginning of months). For
                  last-minute requests, please contact us directly to check
                  availability.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-3">
                  Should I be present during the cleaning?
                </h3>
                <p className="text-gray-600">
                  You don't need to be present during the cleaning, but we do
                  need access to the property. For move-out cleaning, you can
                  leave keys with us or have a property manager present. For
                  move-in cleaning, arrangements should be made with the
                  previous owner or your real estate agent if you can't be
                  there.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-3">
                  Is your move-out cleaning service guaranteed to get my
                  security deposit back?
                </h3>
                <p className="text-gray-600">
                  While we can't guarantee your security deposit will be
                  returned in full (as this depends on your lease agreement and
                  factors beyond cleaning), our move-out cleaning service is
                  designed to meet or exceed standard cleaning requirements.
                  Most of our customers report receiving their full deposit back
                  after our service.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-3">
                  What's the difference between your regular deep cleaning and
                  move-in/out cleaning?
                </h3>
                <p className="text-gray-600">
                  Move-in/out cleaning is even more thorough than our standard
                  deep cleaning. It includes cleaning inside all cabinets,
                  drawers, appliances, and areas that are typically covered by
                  furniture. It's specifically designed to meet the expectations
                  of landlords and property managers for a complete cleaning of
                  an empty property.
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
