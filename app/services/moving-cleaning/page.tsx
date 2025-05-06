"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  CheckCircle,
  ArrowRight,
  Star,
  Package,
  Home,
  ArrowLeft,
  ArrowRight as ArrowRightIcon,
  Calendar,
  Clock,
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

      {/* Hero Banner - Horizontal layout */}
      <section className="relative bg-black">
        <div className="absolute inset-0 z-0">
          <div className="grid grid-cols-2 h-full">
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?q=80&w=1470&auto=format&fit=crop"
                alt="Move-out cleaning"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/30"></div>
            </div>
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1560185127-6ed189bf02f4?q=80&w=1470&auto=format&fit=crop"
                alt="Move-in cleaning"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/30"></div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-28">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="inline-block mb-6 px-4 py-1 bg-white/10 backdrop-blur-sm rounded-full">
                <span className="text-white text-sm font-medium">
                  Moving Cleaning Services
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 hero-text-shadow">
                Fresh Start, <span className="text-[#4CAF50]">Clean Slate</span>
              </h1>

              <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
                Specialized cleaning services for when you're moving out of your
                old place or into your new home.
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  href="#move-out"
                  onClick={() => setActiveTab("moveOut")}
                  className="bg-white text-black hover:bg-white/90 px-8 py-3 rounded-full text-sm font-medium inline-flex items-center justify-center transition-all duration-300"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  <span>Move-Out Cleaning</span>
                </Link>

                <Link
                  href="#move-in"
                  onClick={() => setActiveTab("moveIn")}
                  className="bg-[#4CAF50] text-white hover:bg-[#4CAF50]/90 px-8 py-3 rounded-full text-sm font-medium inline-flex items-center justify-center transition-all duration-300"
                >
                  <span>Move-In Cleaning</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tabs Navigation */}
      <section className="bg-white py-8 border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <div className="inline-flex border border-gray-200 rounded-full p-1 bg-gray-50">
              <button
                onClick={() => setActiveTab("moveOut")}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  activeTab === "moveOut"
                    ? "bg-black text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                Move-Out Cleaning
              </button>
              <button
                onClick={() => setActiveTab("moveIn")}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  activeTab === "moveIn"
                    ? "bg-[#4CAF50] text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                Move-In Cleaning
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Move-Out Section */}
      <div className={activeTab === "moveOut" ? "block" : "hidden"}>
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="inline-block bg-black/10 text-black px-4 py-1 rounded-full text-sm font-medium mb-6">
                  Move-Out Cleaning
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Leave Your Old Place Spotless & Secure Your Deposit
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Our comprehensive move-out cleaning service is designed to
                  help you leave your rental property in pristine condition,
                  maximizing your chances of getting your security deposit back
                  in full.
                </p>

                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 mr-3 text-black flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-lg">
                        Deep Clean All Rooms
                      </h3>
                      <p className="text-gray-600">
                        We thoroughly clean every room from top to bottom,
                        including hard-to-reach areas often missed.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 mr-3 text-black flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-lg">
                        Remove All Traces
                      </h3>
                      <p className="text-gray-600">
                        We eliminate all signs of wear and tear where possible,
                        including scuff marks, dust, and dirt buildup.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 mr-3 text-black flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-lg">
                        Landlord-Approved Cleaning
                      </h3>
                      <p className="text-gray-600">
                        Our cleaning checklist is designed to meet and exceed
                        typical landlord and property management expectations.
                      </p>
                    </div>
                  </li>
                </ul>

                <Link
                  href="/pricing"
                  className="bg-black text-white hover:bg-black/90 px-8 py-3 rounded-full text-sm font-medium inline-flex items-center justify-center transition-all duration-300"
                >
                  Schedule Move-Out Cleaning
                </Link>
              </div>

              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1470&auto=format&fit=crop"
                    alt="Move-out cleaning"
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
                  <div className="flex items-center">
                    <div className="bg-black/10 rounded-full p-3 mr-4">
                      <Calendar className="h-6 w-6 text-black" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Typical Duration</p>
                      <p className="font-semibold">4-6 hours</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Move-Out Checklist */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our Move-Out Cleaning Checklist
              </h2>
              <p className="text-lg text-gray-600">
                Our comprehensive move-out cleaning service covers all the
                essential areas that landlords and property managers inspect.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-50 rounded-2xl p-8 transition-all duration-300 hover:shadow-lg">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <Package className="h-5 w-5 mr-2 text-black" />
                  Kitchen Deep Clean
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 text-[#4CAF50] flex-shrink-0 mt-0.5" />
                    <span>Inside and outside of all appliances</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 text-[#4CAF50] flex-shrink-0 mt-0.5" />
                    <span>Inside cabinets and drawers</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 text-[#4CAF50] flex-shrink-0 mt-0.5" />
                    <span>Sink, countertops and backsplash</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 text-[#4CAF50] flex-shrink-0 mt-0.5" />
                    <span>Floor cleaning and disinfection</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8 transition-all duration-300 hover:shadow-lg">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <Package className="h-5 w-5 mr-2 text-black" />
                  Bathroom Sanitizing
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 text-[#4CAF50] flex-shrink-0 mt-0.5" />
                    <span>Deep cleaning of shower/tub</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 text-[#4CAF50] flex-shrink-0 mt-0.5" />
                    <span>Toilet sanitization</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 text-[#4CAF50] flex-shrink-0 mt-0.5" />
                    <span>Mirror and glass cleaning</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 text-[#4CAF50] flex-shrink-0 mt-0.5" />
                    <span>Tile grout cleaning</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8 transition-all duration-300 hover:shadow-lg">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <Package className="h-5 w-5 mr-2 text-black" />
                  General Areas
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 text-[#4CAF50] flex-shrink-0 mt-0.5" />
                    <span>Baseboards and crown molding</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 text-[#4CAF50] flex-shrink-0 mt-0.5" />
                    <span>Light fixtures and ceiling fans</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 text-[#4CAF50] flex-shrink-0 mt-0.5" />
                    <span>Window sills and tracks</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 text-[#4CAF50] flex-shrink-0 mt-0.5" />
                    <span>All floors vacuumed and mopped</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Move-In Section */}
      <div className={activeTab === "moveIn" ? "block" : "hidden"}>
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1 relative">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=1470&auto=format&fit=crop"
                    alt="Move-in cleaning"
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg">
                  <div className="flex items-center">
                    <div className="bg-[#4CAF50]/10 rounded-full p-3 mr-4">
                      <Clock className="h-6 w-6 text-[#4CAF50]" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Typical Duration</p>
                      <p className="font-semibold">4-8 hours</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <span className="inline-block bg-[#4CAF50]/10 text-[#4CAF50] px-4 py-1 rounded-full text-sm font-medium mb-6">
                  Move-In Cleaning
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Start Fresh in Your New Home
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Our move-in cleaning service ensures your new home is
                  thoroughly sanitized and ready for you to unpack and settle in
                  with complete peace of mind.
                </p>

                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 mr-3 text-[#4CAF50] flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-lg">
                        Sanitize Before You Settle
                      </h3>
                      <p className="text-gray-600">
                        We disinfect all surfaces to eliminate germs, bacteria,
                        and allergens left by previous occupants.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 mr-3 text-[#4CAF50] flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-lg">
                        Focus on Unpacking
                      </h3>
                      <p className="text-gray-600">
                        While we handle the cleaning, you can focus on unpacking
                        and organizing your belongings.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 mr-3 text-[#4CAF50] flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-lg">
                        Allergen Removal
                      </h3>
                      <p className="text-gray-600">
                        We pay special attention to removing dust, pet dander,
                        and other allergens that may affect your family's
                        health.
                      </p>
                    </div>
                  </li>
                </ul>

                <Link
                  href="/pricing"
                  className="bg-[#4CAF50] text-white hover:bg-[#4CAF50]/90 px-8 py-3 rounded-full text-sm font-medium inline-flex items-center justify-center transition-all duration-300"
                >
                  Schedule Move-In Cleaning
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Move-In Process */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our Move-In Cleaning Process
              </h2>
              <p className="text-lg text-gray-600">
                We recommend scheduling your move-in cleaning before your
                furniture and boxes arrive to ensure every corner gets proper
                attention.
              </p>
            </div>

            <div className="relative">
              <div className="absolute top-1/2 left-8 right-8 h-0.5 bg-gray-200 -translate-y-1/2 hidden md:block"></div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-gray-50 rounded-2xl p-8 transition-all duration-300 hover:shadow-lg relative">
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#4CAF50] text-white rounded-full flex items-center justify-center text-xl font-bold z-10">
                    1
                  </div>
                  <h3 className="text-xl font-semibold mb-4 mt-4">
                    Initial Assessment
                  </h3>
                  <p className="text-gray-600 mb-4">
                    We assess the condition of your new home and identify areas
                    requiring special attention, such as stains or heavy soil.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-2xl p-8 transition-all duration-300 hover:shadow-lg relative">
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#4CAF50] text-white rounded-full flex items-center justify-center text-xl font-bold z-10">
                    2
                  </div>
                  <h3 className="text-xl font-semibold mb-4 mt-4">
                    Deep Cleaning
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Our professional team performs a systematic deep cleaning of
                    every room, starting from the top (ceiling, fans, lights)
                    and working down to the floors.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-2xl p-8 transition-all duration-300 hover:shadow-lg relative">
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#4CAF50] text-white rounded-full flex items-center justify-center text-xl font-bold z-10">
                    3
                  </div>
                  <h3 className="text-xl font-semibold mb-4 mt-4">
                    Final Sanitization
                  </h3>
                  <p className="text-gray-600 mb-4">
                    We finish with a complete sanitization of high-touch
                    surfaces like doorknobs, light switches, and cabinet handles
                    to eliminate germs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

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

      {/* FAQ Section */}
      <section className="py-20 bg-white">
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
