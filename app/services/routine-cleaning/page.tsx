"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Check, ArrowRight, Star, Clock, Shield } from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import CTASection from "@/components/cta-section";

export default function RoutineCleaningPage() {
  const [isLoaded, setIsLoaded] = useState(false);

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
            src="https://images.unsplash.com/photo-1599619351208-3e6c839d6828?q=80&w=2070&auto=format&fit=crop"
            alt="Pristine clean living room"
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
                  Premium Residential Services
                </span>
              </motion.div>

              <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-6 hero-text-shadow">
                Experience Pristine <br />
                <span className="text-white">Routine Cleaning</span>
              </h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="text-lg text-white/80 mb-8 max-w-xl"
              >
                Our signature routine cleaning service maintains your home in
                immaculate condition with expert attention to detail. Perfect
                for busy professionals and families seeking consistent
                cleanliness.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link
                  href="/contact"
                  className="bg-white text-black hover:bg-white/90 px-8 py-3 rounded-full text-sm font-medium inline-flex items-center justify-center transition-all duration-300 w-48"
                >
                  <span className="text-center w-full">Get a Free Quote</span>
                </Link>

                <div className="flex items-center sm:mt-0 mt-4">
                  <div className="flex items-center text-white/90 mr-8">
                    <Clock className="h-5 w-5 mr-2 text-[#28A745]" />
                    <span className="text-sm whitespace-nowrap">
                      2-3 Hour Service
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

      {/* Trust indicators section - New section */}
      <section className="py-10 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="text-4xl font-bold text-black mb-2">12K+</div>
              <p className="text-gray-600">Happy Customers</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-4xl font-bold text-black mb-2">24/7</div>
              <p className="text-gray-600">Customer Support</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-4xl font-bold text-black mb-2">4.9</div>
              <div className="flex items-center mb-2">
                <Star className="h-4 w-4 fill-current text-yellow-500" />
                <Star className="h-4 w-4 fill-current text-yellow-500" />
                <Star className="h-4 w-4 fill-current text-yellow-500" />
                <Star className="h-4 w-4 fill-current text-yellow-500" />
                <Star className="h-4 w-4 fill-current text-yellow-500" />
              </div>
              <p className="text-gray-600">Average Rating</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-4xl font-bold text-black mb-2">100%</div>
              <p className="text-gray-600">Satisfaction Guarantee</p>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included Section with Zigzag Layout - Following deep cleaning pattern */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              What's Included in Our Routine Cleaning
            </h2>
            <p className="text-lg text-gray-600">
              Our comprehensive routine cleaning service ensures every essential
              area of your home receives meticulous attention.
            </p>
          </div>

          {/* Item 1 - Left image, right text */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-lg order-2 lg:order-1">
              <Image
                src="https://images.unsplash.com/photo-1565538810643-b5bdb714032a?q=80&w=1470&auto=format&fit=crop"
                alt="Kitchen cleaning"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="text-2xl font-bold mb-4">Kitchen Excellence</h3>
              <p className="text-gray-600 mb-6">
                The heart of your home deserves special attention. Our routine
                kitchen cleaning ensures cooking spaces remain fresh and
                sanitized.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-3 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Clean and sanitize countertops and backsplash</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-3 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Clean exterior of appliances and cabinet fronts</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-3 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Thoroughly clean and sanitize sink and fixtures</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-3 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Vacuum and mop floors, removing all debris</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Item 2 - Right image, left text */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h3 className="text-2xl font-bold mb-4">Bathroom Refresh</h3>
              <p className="text-gray-600 mb-6">
                Our bathroom cleaning routines ensure these essential spaces
                remain hygienic and sparkling clean after every visit.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-3 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Clean and disinfect toilet, shower, tub and sink</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-3 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>
                    Clean mirrors and glass surfaces to a streak-free shine
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-3 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Wipe down bathroom fixtures and cabinet fronts</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-3 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Vacuum and mop floors, removing all debris</span>
                </li>
              </ul>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1470&auto=format&fit=crop"
                alt="Bathroom cleaning"
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
                alt="Living areas cleaning"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="text-2xl font-bold mb-4">
                Living Area Maintenance
              </h3>
              <p className="text-gray-600 mb-6">
                The spaces where you relax and entertain deserve special
                attention to maintain comfort and cleanliness.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-3 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Dust all accessible surfaces, including furniture</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-3 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Vacuum carpets, rugs, and upholstery</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-3 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Dust ceiling fans and light fixtures within reach</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-3 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Clean baseboards and remove cobwebs</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Image Section - New high-quality image section */}
      <section className="relative py-16">
        <div className="absolute inset-0 bg-gradient-to-r from-black to-gray-900 opacity-90"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Exceptional Cleaning Results, Every Time
              </h2>
              <p className="text-lg text-white/80 mb-8">
                Our professional cleaners follow a meticulous process to ensure
                your home receives the highest standard of cleaning on every
                visit.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-white/10 rounded-full p-2 mr-4 flex-shrink-0">
                    <Check className="h-5 w-5 text-green-400" />
                  </div>
                  <div>
                    <p className="text-white/90">
                      Consistently thorough cleaning with attention to detail
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-white/10 rounded-full p-2 mr-4 flex-shrink-0">
                    <Check className="h-5 w-5 text-green-400" />
                  </div>
                  <div>
                    <p className="text-white/90">
                      Eco-friendly cleaning products for a healthier home
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-white/10 rounded-full p-2 mr-4 flex-shrink-0">
                    <Check className="h-5 w-5 text-green-400" />
                  </div>
                  <div>
                    <p className="text-white/90">
                      Professionally trained and background-checked staff
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?q=80&w=1770&auto=format&fit=crop"
                alt="Professional home cleaning"
                fill
                className="object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section - Enhanced with better styling */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              How Our Routine Cleaning Works
            </h2>
            <p className="text-lg text-gray-600">
              Getting started with our premium routine cleaning service is
              seamless and convenient.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 - Enhanced */}
            <div className="bg-white rounded-2xl p-8 transition-all duration-300 hover:shadow-lg relative">
              <div className="absolute -top-4 -left-4 w-14 h-14 bg-black text-white rounded-full flex items-center justify-center text-xl font-bold">
                1
              </div>
              <div className="relative h-40 rounded-xl overflow-hidden mb-6 mt-2">
                <Image
                  src="https://images.unsplash.com/photo-1586282391129-76a6df230234?q=80&w=400&auto=format&fit=crop"
                  alt="Booking cleaning service online"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-4">Book Online</h3>
              <p className="text-gray-600 mb-4">
                Schedule your cleaning service online in minutes. Choose your
                preferred date and time that works for your schedule.
              </p>
              <Link
                href="/pricing"
                className="text-black font-medium flex items-center hover:underline"
              >
                Book Now <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            {/* Step 2 - Enhanced */}
            <div className="bg-white rounded-2xl p-8 transition-all duration-300 hover:shadow-lg relative">
              <div className="absolute -top-4 -left-4 w-14 h-14 bg-black text-white rounded-full flex items-center justify-center text-xl font-bold">
                2
              </div>
              <div className="relative h-40 rounded-xl overflow-hidden mb-6 mt-2">
                <Image
                  src="https://images.unsplash.com/photo-1581578731548-c2086d79f9d4?q=80&w=400&auto=format&fit=crop"
                  alt="Professional cleaning team"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-4">We Clean</h3>
              <p className="text-gray-600 mb-4">
                Our professional team arrives promptly at your scheduled time
                and meticulously cleans your home to exceed your expectations.
              </p>
              <Link
                href="/checklist"
                className="text-black font-medium flex items-center hover:underline"
              >
                See Our Checklist <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            {/* Step 3 - Enhanced */}
            <div className="bg-white rounded-2xl p-8 transition-all duration-300 hover:shadow-lg relative">
              <div className="absolute -top-4 -left-4 w-14 h-14 bg-black text-white rounded-full flex items-center justify-center text-xl font-bold">
                3
              </div>
              <div className="relative h-40 rounded-xl overflow-hidden mb-6 mt-2">
                <Image
                  src="https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=400&auto=format&fit=crop"
                  alt="Relaxing in clean home"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-4">Relax & Enjoy</h3>
              <p className="text-gray-600 mb-4">
                Return to a pristine, fresh home. Set up recurring cleanings to
                maintain your immaculate living space effortlessly.
              </p>
              <Link
                href="/pricing"
                className="text-black font-medium flex items-center hover:underline"
              >
                See Pricing <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section - Enhanced with better image */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why Choose Our Routine Cleaning Service
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our premium routine cleaning service offers exceptional benefits
                to maintain your home in pristine condition with minimal effort.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-gray-100 rounded-full p-2 mr-4 flex-shrink-0">
                    <Check className="h-5 w-5 text-green-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      Consistent Excellence
                    </h3>
                    <p className="text-gray-600">
                      Regular professional cleanings ensure your home maintains
                      a consistently pristine appearance and feel, preventing
                      the gradual accumulation of dirt and grime.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-gray-100 rounded-full p-2 mr-4 flex-shrink-0">
                    <Check className="h-5 w-5 text-green-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      Reclaimed Time & Energy
                    </h3>
                    <p className="text-gray-600">
                      Regain your valuable time and energy by entrusting your
                      cleaning needs to our professional team, allowing you to
                      focus on what matters most to you.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-gray-100 rounded-full p-2 mr-4 flex-shrink-0">
                    <Check className="h-5 w-5 text-green-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      Enhanced Well-being
                    </h3>
                    <p className="text-gray-600">
                      Regular professional cleaning significantly reduces
                      allergens, dust, and bacteria, creating a healthier living
                      environment that promotes overall well-being for you and
                      your family.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative h-[600px] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=1287&auto=format&fit=crop"
                alt="Clean luxurious home"
                fill
                className="object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section - New section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              What Our Clients Say
            </h2>
            <p className="text-lg text-white/80">
              Hear from our satisfied clients about their experience with our
              routine cleaning service.
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
                "The attention to detail was incredible. My home has never felt
                so clean and fresh. I've tried other services before, but
                Clensy's routine cleaning is in a league of its own."
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
                "I've been using Clensy's routine cleaning for six months now,
                and it's been a game-changer. The consistency and reliability of
                their service is outstanding. My home always looks immaculate."
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
                "As a busy professional, having Clensy's routine cleaning
                service has been life-changing. I come home to a spotless house
                every time, and their staff is always professional and
                thorough."
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

      {/* Cleaning Frequency Guide - Unique to Routine Cleaning */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              How Often Should You Schedule Cleaning?
            </h2>
            <p className="text-lg text-gray-600">
              Finding the right cleaning frequency depends on your household
              size, lifestyle, and preferences. Use our guide to determine what
              works best for you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Weekly Option */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100"
            >
              <div className="bg-green-600 p-6">
                <h3 className="text-xl font-bold text-white text-center">
                  Weekly
                </h3>
              </div>
              <div className="p-6">
                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-3">Perfect For:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 mr-2 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Busy families with children</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 mr-2 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Homes with pets</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 mr-2 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>High-traffic areas</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 mr-2 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Allergy sufferers</span>
                    </li>
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-3">Benefits:</h4>
                  <p className="text-gray-600">
                    Maintains a consistently clean home with no build-up of dust
                    or allergens. Best for families who want to enjoy a clean
                    home all week long.
                  </p>
                </div>

                <div className="text-center pt-4 border-t border-gray-100">
                  <span className="text-sm text-gray-500">
                    Most Popular Choice
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Bi-Weekly Option */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100"
            >
              <div className="bg-blue-600 p-6">
                <h3 className="text-xl font-bold text-white text-center">
                  Bi-Weekly
                </h3>
              </div>
              <div className="p-6">
                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-3">Perfect For:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 mr-2 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>Couples or small families</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 mr-2 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>Average-sized homes</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 mr-2 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>Those who tidy regularly</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 mr-2 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>Moderate use spaces</span>
                    </li>
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-3">Benefits:</h4>
                  <p className="text-gray-600">
                    Good balance between maintaining cleanliness and budget.
                    Most popular option for average households who can handle
                    light cleaning in between.
                  </p>
                </div>

                <div className="text-center pt-4 border-t border-gray-100">
                  <span className="text-sm text-gray-500">
                    Best Value Option
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Monthly Option */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100"
            >
              <div className="bg-purple-600 p-6">
                <h3 className="text-xl font-bold text-white text-center">
                  Monthly
                </h3>
              </div>
              <div className="p-6">
                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-3">Perfect For:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 mr-2 text-purple-600 flex-shrink-0 mt-0.5" />
                      <span>Singles or couples</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 mr-2 text-purple-600 flex-shrink-0 mt-0.5" />
                      <span>Smaller living spaces</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 mr-2 text-purple-600 flex-shrink-0 mt-0.5" />
                      <span>Those who clean regularly</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 mr-2 text-purple-600 flex-shrink-0 mt-0.5" />
                      <span>Limited use areas</span>
                    </li>
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-3">Benefits:</h4>
                  <p className="text-gray-600">
                    Good for getting a professional deep clean while handling
                    regular maintenance yourself. Ideal for those on a tighter
                    budget.
                  </p>
                </div>

                <div className="text-center pt-4 border-t border-gray-100">
                  <span className="text-sm text-gray-500">
                    Budget-Friendly Option
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="max-w-3xl mx-auto text-center mt-12">
            <p className="text-gray-600 italic">
              "Not sure what frequency is right for you? Contact us for a
              personalized recommendation based on your specific needs."
            </p>
          </div>
        </div>
      </section>

      {/* Unique Section for Routine Cleaning: Scheduling Options */}
      <section className="py-24 bg-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Flexible Cleaning Schedules
            </h2>
            <p className="text-lg text-gray-600">
              Choose the cleaning frequency that best suits your lifestyle and
              needs.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Weekly Cleaning */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                <div className="bg-blue-600 p-6 text-center">
                  <h3 className="text-2xl font-bold text-white">Weekly</h3>
                  <p className="text-blue-100 mt-2">Ideal for busy families</p>
                </div>
                <div className="p-8">
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 mr-3 text-blue-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-medium">
                          Consistent cleanliness
                        </span>
                        <p className="text-sm text-gray-500 mt-1">
                          Maintain a continuously clean home
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 mr-3 text-blue-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-medium">
                          Best for families with kids/pets
                        </span>
                        <p className="text-sm text-gray-500 mt-1">
                          Addresses high-traffic homes
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 mr-3 text-blue-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-medium">Highest value rate</span>
                        <p className="text-sm text-gray-500 mt-1">
                          Our most economical per-clean price
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </motion.div>

              {/* Bi-weekly Cleaning */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden ring-2 ring-blue-500"
              >
                <div className="bg-blue-700 p-6 text-center">
                  <h3 className="text-2xl font-bold text-white">Bi-Weekly</h3>
                  <p className="text-blue-100 mt-2">Our most popular option</p>
                </div>
                <div className="p-8">
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 mr-3 text-blue-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-medium">Perfect balance</span>
                        <p className="text-sm text-gray-500 mt-1">
                          Optimal frequency for most households
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 mr-3 text-blue-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-medium">
                          Manageable maintenance
                        </span>
                        <p className="text-sm text-gray-500 mt-1">
                          Prevents dirt buildup between cleanings
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 mr-3 text-blue-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-medium">Consistent team</span>
                        <p className="text-sm text-gray-500 mt-1">
                          Same trusted cleaners each visit
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </motion.div>

              {/* Monthly Cleaning */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                <div className="bg-blue-600 p-6 text-center">
                  <h3 className="text-2xl font-bold text-white">Monthly</h3>
                  <p className="text-blue-100 mt-2">For light use homes</p>
                </div>
                <div className="p-8">
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 mr-3 text-blue-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-medium">Regular refresh</span>
                        <p className="text-sm text-gray-500 mt-1">
                          Monthly deep maintenance
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 mr-3 text-blue-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-medium">Budget friendly</span>
                        <p className="text-sm text-gray-500 mt-1">
                          Professional cleaning on a budget
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 mr-3 text-blue-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-medium">
                          Ideal for singles/couples
                        </span>
                        <p className="text-sm text-gray-500 mt-1">
                          Perfect for low-traffic homes
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Reviews - Matching deep cleaning style */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Customer Experiences
            </h2>
            <p className="text-lg text-gray-600">
              See what our customers say about their routine cleaning
              experiences.
            </p>
          </div>

          <div className="relative px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-8 rounded-2xl shadow-sm relative">
                <div className="absolute -top-4 -left-4 text-6xl text-gray-200">
                  "
                </div>
                <div className="flex items-center mb-4">
                  <Star
                    className="h-5 w-5 text-yellow-400"
                    fill="currentColor"
                  />
                  <Star
                    className="h-5 w-5 text-yellow-400"
                    fill="currentColor"
                  />
                  <Star
                    className="h-5 w-5 text-yellow-400"
                    fill="currentColor"
                  />
                  <Star
                    className="h-5 w-5 text-yellow-400"
                    fill="currentColor"
                  />
                  <Star
                    className="h-5 w-5 text-yellow-400"
                    fill="currentColor"
                  />
                </div>
                <p className="text-gray-700 mb-6 z-10 relative">
                  "Having Clensy's team come bi-weekly has transformed our home
                  life. With two kids and a dog, keeping up with cleaning was
                  impossible. Now our home is consistently clean, and I have so
                  much more free time with my family."
                </p>
                <div className="flex items-center">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=100&auto=format&fit=crop"
                      alt="Customer"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold">Jennifer Miller</p>
                    <p className="text-gray-500 text-sm">
                      Weekly Cleaning Customer
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-8 rounded-2xl shadow-sm relative">
                <div className="absolute -top-4 -left-4 text-6xl text-gray-200">
                  "
                </div>
                <div className="flex items-center mb-4">
                  <Star
                    className="h-5 w-5 text-yellow-400"
                    fill="currentColor"
                  />
                  <Star
                    className="h-5 w-5 text-yellow-400"
                    fill="currentColor"
                  />
                  <Star
                    className="h-5 w-5 text-yellow-400"
                    fill="currentColor"
                  />
                  <Star
                    className="h-5 w-5 text-yellow-400"
                    fill="currentColor"
                  />
                  <Star
                    className="h-5 w-5 text-yellow-400"
                    fill="currentColor"
                  />
                </div>
                <p className="text-gray-700 mb-6 z-10 relative">
                  "I've tried several cleaning services, but Clensy's attention
                  to detail is unmatched. They clean areas other services miss,
                  and the same team comes each time, so they know exactly how I
                  like things done."
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
                    <p className="font-semibold">Michael Chen</p>
                    <p className="text-gray-500 text-sm">Bi-weekly Customer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - Matching deep cleaning style */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 text-center mb-12">
              Learn more about our routine cleaning service.
            </p>

            <div className="space-y-8">
              <div className="bg-white p-8 rounded-2xl shadow-sm border-l-4 border-blue-600">
                <h3 className="text-xl font-semibold mb-3">
                  Do I need to be home during the cleaning?
                </h3>
                <p className="text-gray-600">
                  No, you don't need to be home. Many of our clients provide a
                  key or access code so we can clean while they're at work. Our
                  cleaners are thoroughly vetted, background-checked, and fully
                  insured for your peace of mind.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm border-l-4 border-blue-600">
                <h3 className="text-xl font-semibold mb-3">
                  Can I change my cleaning schedule if needed?
                </h3>
                <p className="text-gray-600">
                  Absolutely! We understand schedules change. You can reschedule
                  cleanings with at least 48 hours notice without any fee. We
                  also offer the flexibility to occasionally add additional
                  cleanings when you need them.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm border-l-4 border-blue-600">
                <h3 className="text-xl font-semibold mb-3">
                  What cleaning products do you use?
                </h3>
                <p className="text-gray-600">
                  We use high-quality, eco-friendly cleaning products as our
                  standard. If you have specific product preferences or
                  sensitivities, we're happy to use products you provide or make
                  accommodations for allergies and preferences.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm border-l-4 border-blue-600">
                <h3 className="text-xl font-semibold mb-3">
                  What if I'm not satisfied with the cleaning?
                </h3>
                <p className="text-gray-600">
                  Your satisfaction is guaranteed. If you're not completely
                  satisfied with any area we've cleaned, contact us within 24
                  hours and we'll return to reclean that area at no additional
                  cost to you.
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
