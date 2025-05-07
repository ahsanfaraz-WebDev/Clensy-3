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
            src="https://images.unsplash.com/photo-1560185127-6ed189bf02f4?q=80&w=2070&auto=format&fit=crop"
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
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1470&auto=format&fit=crop"
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
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop"
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
                src="https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=1470&auto=format&fit=crop"
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
                      src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=500&auto=format&fit=crop"
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
                      src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=500&auto=format&fit=crop"
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
                      src="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=500&auto=format&fit=crop"
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
                      src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=500&auto=format&fit=crop"
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
                  src="https://images.unsplash.com/photo-1621274147744-cfb5753ccbb3?q=80&w=100&auto=format&fit=crop"
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
                  src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=100&auto=format&fit=crop"
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
