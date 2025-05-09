"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Check, ArrowRight, Star, Clock, Shield } from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import CTASection from "@/components/cta-section";

export default function DeepCleaningPage() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <main className="overflow-x-hidden">
      <Navbar />

      {/* Split Hero Section - Different from routine cleaning page */}
      <section className="relative min-h-[85vh] bg-black pt-16">
        {/* Background image with overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=2070&auto=format&fit=crop"
            alt="Clean modern home interior"
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
                  Premium Deep Cleaning
                </span>
              </motion.div>

              <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-6 hero-text-shadow">
                Revitalize Your Space <br />
                <span className="text-white">With Deep Cleaning</span>
              </h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="text-lg text-white/80 mb-8 max-w-xl"
              >
                Our comprehensive deep cleaning service targets built-up dirt,
                grime, and allergens to transform your home with an intensive
                cleaning experience beyond the surface.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <div className="bg-blue-100 text-blue-700 px-8 py-3 rounded-full text-sm font-medium inline-flex items-center justify-center w-48 cursor-default select-none">
                  Deep Cleaning Experts
                </div>

                <div className="flex items-center sm:mt-0 mt-4">
                  <div className="flex items-center text-white/90 mr-8">
                    <Clock className="h-5 w-5 mr-2 text-[#28A745]" />
                    <span className="text-sm whitespace-nowrap">
                      4-6 Hour Service
                    </span>
                  </div>

                  <div className="flex items-center text-white/90">
                    <Shield className="h-5 w-5 mr-2 text-[#28A745]" />
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

      {/* What's Included Section with Zigzag Layout - Different from routine cleaning */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              What's Included in Our Deep Cleaning
            </h2>
            <p className="text-lg text-gray-600">
              Our deep cleaning service goes beyond standard cleaning to address
              areas that require special attention.
            </p>
          </div>

          {/* Item 1 - Left image, right text */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-lg order-2 lg:order-1">
              <Image
                src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1470&auto=format&fit=crop"
                alt="Bathroom deep cleaning"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="text-2xl font-bold mb-4">
                Bathroom Transformation
              </h3>
              <p className="text-gray-600 mb-6">
                Our deep cleaning service gives your bathrooms a complete
                refresh, targeting built-up soap scum, water stains, and hidden
                dirt in overlooked areas.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-3 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Deep clean tile grout and remove mold/mildew</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-3 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Descale shower heads and faucets</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-3 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Deep clean behind toilet and under sink</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-3 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>
                    Sanitize all surfaces, including light switches and door
                    knobs
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Item 2 - Right image, left text */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h3 className="text-2xl font-bold mb-4">Kitchen Deep Clean</h3>
              <p className="text-gray-600 mb-6">
                Our kitchen deep cleaning targets grease build-up, appliance
                interiors, and hidden dirt in cabinets and drawers for a truly
                fresh kitchen.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-3 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Clean inside oven, microwave, and refrigerator</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-3 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Degrease range hood, stovetop, and backsplash</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-3 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Clean and sanitize inside cabinets and drawers</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-3 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>
                    Move appliances to clean behind and underneath when possible
                  </span>
                </li>
              </ul>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?q=80&w=1470&auto=format&fit=crop"
                alt="Kitchen deep cleaning"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Item 3 - Left image, right text */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-lg order-2 lg:order-1">
              <Image
                src="https://images.unsplash.com/photo-1613545325278-f24b0cae1224?q=80&w=1470&auto=format&fit=crop"
                alt="Living areas deep cleaning"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="text-2xl font-bold mb-4">
                Living Area Rejuvenation
              </h3>
              <p className="text-gray-600 mb-6">
                We revitalize living areas by addressing dust build-up in
                hard-to-reach places, deep cleaning upholstery, and freshening
                forgotten surfaces.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-3 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Deep vacuum all upholstery, carpets, and rugs</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-3 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Dust ceiling fans, light fixtures, and vents</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-3 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Move furniture to clean underneath and behind</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-3 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Clean baseboards, crown molding, and door frames</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Before & After Section - Unique to deep cleaning page */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              The Deep Cleaning Difference
            </h2>
            <p className="text-lg text-gray-600">
              See the dramatic transformation our deep cleaning service
              delivers. These before and after comparisons showcase our thorough
              approach.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Before & After 1 - Kitchen Transformation */}
            <div className="bg-gray-50 rounded-2xl p-6 shadow-sm">
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <div className="relative h-48 rounded-lg overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1578177154072-bbbd429d496f?q=80&w=1930&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="Before deep cleaning - dirty kitchen"
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
                      src="https://images.unsplash.com/photo-1567767326925-e2047bf469d0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="After deep cleaning - clean kitchen"
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
                Kitchen Transformation
              </h3>
              <p className="text-gray-600">
                Our deep cleaning removes built-up grease and grime from kitchen
                surfaces, leaving them spotless and sanitized.
              </p>
            </div>

            {/* Before & After 2 - Bathroom Revival */}
            <div className="bg-gray-50 rounded-2xl p-6 shadow-sm">
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <div className="relative h-48 rounded-lg overflow-hidden">
                    <Image
                      src="https://media.asiaone.com/sites/default/files/styles/article_top_image/public/original_images/Apr2021/20210412_bathroom_unsplash%20%281%29.jpg?itok=uy8qjWPn"
                      alt="Before deep cleaning bathroom - dirty"
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
                      src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=500&auto=format&fit=crop"
                      alt="After deep cleaning bathroom - spotless"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute bottom-0 left-0 bg-green-600/70 text-white px-3 py-1 text-sm">
                      After
                    </div>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Bathroom Revival</h3>
              <p className="text-gray-600">
                Deep cleaning removes stubborn stains, soap scum, and sanitizes
                all surfaces for a like-new bathroom.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* When to Choose Deep Cleaning - Unique section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              When to Choose Deep Cleaning
            </h2>
            <p className="text-lg text-white/80">
              Our deep cleaning service is ideal for specific situations when
              standard cleaning isn't enough.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
              <div className="bg-blue-600/20 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <Image
                  src="https://images.unsplash.com/photo-1560185127-6ed189bf02f4?q=80&w=100&auto=format&fit=crop"
                  alt="Moving in"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
              </div>
              <h3 className="text-xl font-semibold mb-3">Moving In or Out</h3>
              <p className="text-white/80">
                Start fresh in your new home or ensure you leave your old one in
                perfect condition for the next residents. Deep cleaning
                addresses years of accumulated dirt.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
              <div className="bg-blue-600/20 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <Image
                  src="https://images.unsplash.com/photo-1511988617509-a57c8a288659?q=80&w=100&auto=format&fit=crop"
                  alt="Seasonal cleaning"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
              </div>
              <h3 className="text-xl font-semibold mb-3">Seasonal Refresh</h3>
              <p className="text-white/80">
                Ideal for spring cleaning or seasonal refreshes when homes need
                extra attention after prolonged indoor time during winter
                months.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
              <div className="bg-blue-600/20 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <Image
                  src="https://images.unsplash.com/photo-1513151233558-d860c5398176?q=80&w=100&auto=format&fit=crop"
                  alt="Special occasions"
                  width={40}
                  height={40}
                  className="rounded-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-3">Special Occasions</h3>
              <p className="text-white/80">
                Preparing for holidays, important guests, or events? Deep
                cleaning ensures your home is immaculate for those special
                moments that matter.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Reviews - Updated to match routine cleaning page style */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              What Our Clients Say
            </h2>
            <p className="text-lg text-white/80">
              Hear from our satisfied clients about their experience with our
              deep cleaning service.
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
                "I couldn't believe the difference after Clensy's deep cleaning
                service. Areas I didn't even notice were dirty are now spotless.
                The attention to detail was incredible and it feels like we have
                a brand new home!"
              </p>
              <div className="flex items-center">
                <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop"
                    alt="Client"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold">Rebecca Thompson</p>
                  <p className="text-white/60 text-sm">Montclair, NJ</p>
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
                "We had Clensy do a deep clean before moving into our new home.
                The previous owners had pets, and there was dust everywhere.
                After the deep cleaning, it felt like a completely different
                house - fresh, clean, and ready for our family."
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
                  <p className="font-semibold">Daniel Morgan</p>
                  <p className="text-white/60 text-sm">Jersey City, NJ</p>
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
                "I scheduled a deep cleaning after renovating my kitchen and
                bathroom. The construction dust was everywhere! Clensy's team
                removed every trace of dust and grime. Their deep cleaning
                service is worth every penny for the results they deliver."
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
                  <p className="text-white/60 text-sm">Hoboken, NJ</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deep vs Regular Cleaning Comparison - Unique to Deep Cleaning */}
      <section className="py-24 bg-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Deep Cleaning vs. Regular Cleaning
            </h2>
            <p className="text-lg text-gray-600">
              Understanding the difference between our deep cleaning and regular
              cleaning services helps you choose the right option for your
              needs.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Regular Cleaning Column */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                <div className="bg-gray-100 p-6 text-center">
                  <h3 className="text-2xl font-bold text-gray-800">
                    Regular Cleaning
                  </h3>
                  <p className="text-gray-600 mt-2">
                    Maintenance cleaning for already-clean homes
                  </p>
                </div>
                <div className="p-8">
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 mr-3 text-gray-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-medium">Surface dusting</span>
                        <p className="text-sm text-gray-500 mt-1">
                          Dust visible surfaces and areas
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 mr-3 text-gray-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-medium">Bathroom basics</span>
                        <p className="text-sm text-gray-500 mt-1">
                          Clean toilets, sinks, and shower surfaces
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 mr-3 text-gray-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-medium">Kitchen cleaning</span>
                        <p className="text-sm text-gray-500 mt-1">
                          Wipe countertops and appliance exteriors
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 mr-3 text-gray-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-medium">Floor maintenance</span>
                        <p className="text-sm text-gray-500 mt-1">
                          Vacuum carpets and mop hard floors
                        </p>
                      </div>
                    </li>
                  </ul>
                  <div className="mt-8 pt-6 border-t border-gray-100 text-center">
                    <p className="text-gray-500">
                      Recommended frequency: <br />
                      <span className="font-semibold text-gray-700">
                        Weekly or bi-weekly
                      </span>
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Deep Cleaning Column */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden ring-2 ring-blue-500"
              >
                <div className="bg-blue-600 p-6 text-center">
                  <h3 className="text-2xl font-bold text-white">
                    Deep Cleaning
                  </h3>
                  <p className="text-blue-100 mt-2">
                    Intensive cleaning for neglected or heavily used areas
                  </p>
                </div>
                <div className="p-8">
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 mr-3 text-blue-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-medium">
                          Comprehensive dusting
                        </span>
                        <p className="text-sm text-gray-500 mt-1">
                          Dust all surfaces including baseboards, door frames,
                          and ceiling fans
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 mr-3 text-blue-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-medium">
                          Deep bathroom sanitizing
                        </span>
                        <p className="text-sm text-gray-500 mt-1">
                          Descale shower heads, clean grout, sanitize behind
                          toilets
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 mr-3 text-blue-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-medium">
                          Inside appliance cleaning
                        </span>
                        <p className="text-sm text-gray-500 mt-1">
                          Clean inside ovens, refrigerators, and cabinet
                          interiors
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 mr-3 text-blue-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-medium">Detailed floor care</span>
                        <p className="text-sm text-gray-500 mt-1">
                          Edge vacuuming, move furniture, clean under rugs
                        </p>
                      </div>
                    </li>
                  </ul>
                  <div className="mt-8 pt-6 border-t border-gray-100 text-center">
                    <p className="text-gray-500">
                      Recommended frequency: <br />
                      <span className="font-semibold text-blue-600">
                        Quarterly or seasonally
                      </span>
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - Different styling */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 text-center mb-12">
              Learn more about our premium deep cleaning service.
            </p>

            <div className="space-y-8">
              <div className="bg-white p-8 rounded-2xl shadow-sm border-l-4 border-blue-600">
                <h3 className="text-xl font-semibold mb-3">
                  How often should I get a deep cleaning?
                </h3>
                <p className="text-gray-600">
                  For most homes, we recommend a deep cleaning 2-4 times per
                  year, depending on your lifestyle and needs. Many customers
                  opt for seasonal deep cleanings, while maintaining regular
                  routine cleanings in between.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm border-l-4 border-blue-600">
                <h3 className="text-xl font-semibold mb-3">
                  How long does deep cleaning take?
                </h3>
                <p className="text-gray-600">
                  A deep cleaning typically takes 4-6 hours depending on the
                  size of your home and its condition. For larger homes or homes
                  requiring extensive deep cleaning, we may recommend a team of
                  cleaners or multiple sessions.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm border-l-4 border-blue-600">
                <h3 className="text-xl font-semibold mb-3">
                  What's the difference between routine and deep cleaning?
                </h3>
                <p className="text-gray-600">
                  Routine cleaning focuses on maintaining everyday cleanliness,
                  while deep cleaning addresses built-up dirt, grime, and
                  hard-to-reach areas. Deep cleaning includes tasks like
                  cleaning inside appliances, behind furniture, tackling grout,
                  and addressing areas that aren't part of regular maintenance.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm border-l-4 border-blue-600">
                <h3 className="text-xl font-semibold mb-3">
                  Should I prepare my home before a deep cleaning?
                </h3>
                <p className="text-gray-600">
                  For the most effective deep cleaning, we recommend removing
                  clutter from surfaces and floors. This allows our team to
                  focus on the detailed cleaning tasks rather than organizing
                  items. If you'd like us to clean inside cabinets or specific
                  storage areas, please empty these beforehand.
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
