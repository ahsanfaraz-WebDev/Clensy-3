"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Check, Calendar, ArrowRight, Star } from "lucide-react";
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

      {/* Hero Section - Updated with more stunning image */}
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
                  href="/pricing"
                  className="bg-white text-black hover:bg-white/90 px-8 py-3 rounded-full text-sm font-medium inline-flex items-center justify-center transition-all duration-300 w-48"
                >
                  <span className="text-center w-full">Book Now</span>
                </Link>

                <div className="flex items-center sm:mt-0 mt-4">
                  <div className="flex items-center text-white/90 mr-8">
                    <Check className="h-5 w-5 mr-2 text-[#28A745]" />
                    <span className="text-sm whitespace-nowrap">
                      Trusted Professionals
                    </span>
                  </div>

                  <div className="flex items-center text-white/90">
                    <Check className="h-5 w-5 mr-2 text-[#28A745]" />
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

        {/* Trending down indicator with slight animation */}
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

      {/* Service Details Section - Enhanced with better images */}
      <section className="py-20 bg-white">
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service Item 1 - Updated with better image */}
            <div className="bg-gray-50 rounded-2xl p-8 transition-all duration-300 hover:shadow-lg group">
              <div className="relative h-48 rounded-xl overflow-hidden mb-6">
                <Image
                  src="https://images.unsplash.com/photo-1565538810643-b5bdb714032a?q=80&w=500&auto=format&fit=crop"
                  alt="Luxurious kitchen cleaning"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <h3 className="text-xl font-semibold mb-3">Kitchen</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-2 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Clean countertops and backsplash</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-2 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Clean exterior of appliances</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-2 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Clean & sanitize sink</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-2 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Sweep and mop floors</span>
                </li>
              </ul>
            </div>

            {/* Service Item 2 - Updated with better image */}
            <div className="bg-gray-50 rounded-2xl p-8 transition-all duration-300 hover:shadow-lg group">
              <div className="relative h-48 rounded-xl overflow-hidden mb-6">
                <Image
                  src="https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&w=500&auto=format&fit=crop"
                  alt="Elegant bathroom cleaning"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <h3 className="text-xl font-semibold mb-3">Bathrooms</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-2 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Clean & sanitize toilets</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-2 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Clean & sanitize sinks & counters</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-2 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Clean mirrors & glass surfaces</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-2 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Clean shower & tub</span>
                </li>
              </ul>
            </div>

            {/* Service Item 3 - Updated with better image */}
            <div className="bg-gray-50 rounded-2xl p-8 transition-all duration-300 hover:shadow-lg group">
              <div className="relative h-48 rounded-xl overflow-hidden mb-6">
                <Image
                  src="https://images.unsplash.com/photo-1631679706909-1844bbd07221?q=80&w=500&auto=format&fit=crop"
                  alt="Modern living area cleaning"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <h3 className="text-xl font-semibold mb-3">Living Areas</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-2 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Dust all accessible surfaces</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-2 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Vacuum carpets and rugs</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-2 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Sweep and mop hard floors</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-2 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Empty trash bins</span>
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
                  src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=400&auto=format&fit=crop"
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

      {/* FAQ Section - Enhanced with better styling */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Find answers to common questions about our premium routine
              cleaning service.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h3 className="text-xl font-semibold mb-3">
                How often should I schedule routine cleaning?
              </h3>
              <p className="text-gray-600">
                For most homes, we recommend weekly or bi-weekly cleanings to
                maintain a consistently clean environment. However, the
                frequency can be adjusted based on your specific needs and
                lifestyle.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h3 className="text-xl font-semibold mb-3">
                Do I need to provide cleaning supplies?
              </h3>
              <p className="text-gray-600">
                No, our cleaning professionals bring all the necessary cleaning
                supplies and equipment. We use high-quality, eco-friendly
                products that are effective and safe for your home.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h3 className="text-xl font-semibold mb-3">
                How long does a routine cleaning take?
              </h3>
              <p className="text-gray-600">
                The duration depends on the size of your home and its condition.
                Typically, a routine cleaning for a 2-bedroom home takes 2-3
                hours with our professional team.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h3 className="text-xl font-semibold mb-3">
                Can I request special focus on certain areas?
              </h3>
              <p className="text-gray-600">
                Absolutely! You can communicate your preferences when booking or
                leave notes for your cleaning team. We're happy to pay extra
                attention to areas that matter most to you.
              </p>
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
