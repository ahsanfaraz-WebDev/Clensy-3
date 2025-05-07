"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Check, MapPin, Phone, Clock, Calendar, Star } from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import CTASection from "@/components/cta-section";

export default function BergenCountyPage() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Towns in Bergen County
  const towns = [
    "Allendale",
    "Alpine",
    "Bergenfield",
    "Bogota",
    "Carlstadt",
    "Cliffside Park",
    "Closter",
    "Cresskill",
    "Demarest",
    "Dumont",
    "East Rutherford",
    "Edgewater",
    "Elmwood Park",
    "Emerson",
    "Englewood",
    "Englewood Cliffs",
    "Fair Lawn",
    "Fairview",
    "Fort Lee",
    "Franklin Lakes",
    "Garfield",
    "Glen Rock",
    "Hackensack",
    "Harrington Park",
    "Hasbrouck Heights",
    "Haworth",
    "Hillsdale",
    "Ho-Ho-Kus",
    "Leonia",
    "Little Ferry",
    "Lodi",
    "Lyndhurst",
    "Mahwah",
    "Maywood",
    "Midland Park",
  ];

  return (
    <main className="overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[85vh] bg-black pt-16">
        {/* Background image with overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1569336415962-a4bd9f69c07b?q=80&w=2069&auto=format&fit=crop"
            alt="Bergen County New Jersey"
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
                className="inline-block mb-6 px-6 py-2 bg-blue-600 rounded-lg"
              >
                <span className="text-white font-semibold text-sm uppercase tracking-wider">
                  Serving Bergen County, NJ
                </span>
              </motion.div>

              <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-6 hero-text-shadow">
                Premium Cleaning Services <br />
                in <span className="text-blue-400">Bergen County</span>
              </h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="text-lg text-white/80 mb-8 max-w-xl"
              >
                Providing exceptional cleaning services to homes and businesses
                throughout Bergen County. From Hackensack to Mahwah, our
                professional cleaners deliver spotless results with every visit.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link
                  href="/contact"
                  className="bg-blue-600 text-white hover:bg-blue-500 px-8 py-3 rounded-lg text-sm font-medium inline-flex items-center justify-center transition-all duration-300 w-48"
                >
                  <span className="text-center w-full">Get a Free Quote</span>
                </Link>

                <div className="flex items-center sm:mt-0 mt-4">
                  <div className="flex items-center text-white/90 mr-8">
                    <Clock className="h-5 w-5 mr-2 text-blue-400" />
                    <span className="text-sm whitespace-nowrap">
                      Fast Response
                    </span>
                  </div>

                  <div className="flex items-center text-white/90">
                    <Star className="h-5 w-5 mr-2 text-blue-400" />
                    <span className="text-sm whitespace-nowrap">
                      5-Star Service
                    </span>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right side - Empty space for better balance */}
            <div className="hidden md:block"></div>
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Areas We Serve in Bergen County
            </h2>
            <p className="text-lg text-gray-600">
              Our professional cleaning teams provide exceptional service to
              homes and businesses throughout Bergen County, New Jersey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="flex items-start mb-6">
                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                  <MapPin className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Eastern Bergen</h3>
                  <p className="text-gray-600">
                    Including Fort Lee, Englewood, Hackensack, Teaneck, and
                    surrounding communities.
                  </p>
                </div>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-2 text-blue-600 flex-shrink-0" />
                  <span>Same-day service available</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-2 text-blue-600 flex-shrink-0" />
                  <span>Regular weekly schedules</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="flex items-start mb-6">
                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                  <MapPin className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Northern Bergen</h3>
                  <p className="text-gray-600">
                    Including Mahwah, Ramsey, Allendale, Wyckoff, and
                    surrounding communities.
                  </p>
                </div>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-2 text-blue-600 flex-shrink-0" />
                  <span>Flexible scheduling options</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-2 text-blue-600 flex-shrink-0" />
                  <span>Specialized services for larger homes</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="flex items-start mb-6">
                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                  <MapPin className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Southern Bergen</h3>
                  <p className="text-gray-600">
                    Including Rutherford, Lyndhurst, North Arlington, and
                    surrounding communities.
                  </p>
                </div>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-2 text-blue-600 flex-shrink-0" />
                  <span>Commercial and residential services</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-2 text-blue-600 flex-shrink-0" />
                  <span>Move-in/move-out cleaning specialists</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-16">
            <h3 className="text-2xl font-bold mb-6 text-center">
              Communities We Serve
            </h3>
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                {towns.map((town, index) => (
                  <div key={index} className="flex items-center">
                    <Check className="h-4 w-4 mr-2 text-blue-600 flex-shrink-0" />
                    <span className="text-sm">{town}</span>
                  </div>
                ))}
                <div className="flex items-center">
                  <span className="text-sm text-blue-600 font-medium">
                    And many more...
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our Services in Bergen County
            </h2>
            <p className="text-lg text-gray-600">
              From regular maintenance to specialized cleaning, we offer
              comprehensive solutions for homes and businesses throughout Bergen
              County.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-2xl transition-all duration-300 hover:shadow-md">
              <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-7 w-7 text-blue-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Residential Cleaning</h3>
              <p className="text-gray-600 mb-4">
                Keep your Bergen County home spotless with our comprehensive
                residential cleaning services, customized to your specific
                needs.
              </p>
              <Link
                href="/services/routine-cleaning"
                className="text-blue-600 font-medium hover:text-blue-700 transition-colors flex items-center"
              >
                Learn More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl transition-all duration-300 hover:shadow-md">
              <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-7 w-7 text-blue-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Commercial Cleaning</h3>
              <p className="text-gray-600 mb-4">
                Maintain a professional environment in your Bergen County
                business with our reliable commercial cleaning services.
              </p>
              <Link
                href="/services/office-cleaning"
                className="text-blue-600 font-medium hover:text-blue-700 transition-colors flex items-center"
              >
                Learn More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl transition-all duration-300 hover:shadow-md">
              <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-7 w-7 text-blue-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Specialized Cleaning</h3>
              <p className="text-gray-600 mb-4">
                From post-construction cleanup to deep cleaning services, we
                offer specialized solutions for unique cleaning needs throughout
                Bergen County.
              </p>
              <Link
                href="/services/deep-cleaning"
                className="text-blue-600 font-medium hover:text-blue-700 transition-colors flex items-center"
              >
                Learn More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why Bergen County Residents Choose Us
            </h2>
            <p className="text-lg text-white/80">
              Discover why we're the trusted cleaning service for homes and
              businesses throughout Bergen County.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
              <div className="bg-blue-600/20 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <Star className="h-6 w-6 text-blue-300" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Bergen County's Best
              </h3>
              <p className="text-white/80">
                We're proud to be highly rated by homeowners and businesses
                throughout Bergen County, with a reputation for excellence and
                reliability.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
              <div className="bg-blue-600/20 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <Clock className="h-6 w-6 text-blue-300" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Prompt & Reliable</h3>
              <p className="text-white/80">
                We understand Bergen County's busy lifestyle. Our punctual,
                dependable service means you can focus on what matters most to
                you.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
              <div className="bg-blue-600/20 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <Phone className="h-6 w-6 text-blue-300" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Local Expertise</h3>
              <p className="text-white/80">
                As a local company serving Bergen County, we understand the
                specific needs of homes and businesses in the area, from
                historic properties to modern apartments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              What Bergen County Says About Us
            </h2>
            <p className="text-lg text-gray-600">
              Hear from our satisfied customers throughout Bergen County.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-8 rounded-2xl shadow-sm relative">
              <div className="absolute -top-4 -left-4 text-6xl text-gray-200">
                "
              </div>
              <div className="flex items-center mb-4">
                <Star className="h-5 w-5 text-yellow-400" fill="currentColor" />
                <Star className="h-5 w-5 text-yellow-400" fill="currentColor" />
                <Star className="h-5 w-5 text-yellow-400" fill="currentColor" />
                <Star className="h-5 w-5 text-yellow-400" fill="currentColor" />
                <Star className="h-5 w-5 text-yellow-400" fill="currentColor" />
              </div>
              <p className="text-gray-700 mb-6 z-10 relative">
                "I've tried several cleaning services in Hackensack, but none
                compare to Clensy. Their attention to detail is remarkable, and
                my home always looks and smells amazing after they've been here.
                Highly recommend!"
              </p>
              <div className="flex items-center">
                <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4 bg-blue-100 flex items-center justify-center">
                  <span className="text-blue-600 font-bold text-lg">JM</span>
                </div>
                <div>
                  <p className="font-semibold">Jennifer M.</p>
                  <p className="text-gray-500 text-sm">Hackensack, NJ</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl shadow-sm relative">
              <div className="absolute -top-4 -left-4 text-6xl text-gray-200">
                "
              </div>
              <div className="flex items-center mb-4">
                <Star className="h-5 w-5 text-yellow-400" fill="currentColor" />
                <Star className="h-5 w-5 text-yellow-400" fill="currentColor" />
                <Star className="h-5 w-5 text-yellow-400" fill="currentColor" />
                <Star className="h-5 w-5 text-yellow-400" fill="currentColor" />
                <Star className="h-5 w-5 text-yellow-400" fill="currentColor" />
              </div>
              <p className="text-gray-700 mb-6 z-10 relative">
                "As a business owner in Fort Lee, I need reliable cleaning
                services I can count on. Clensy has been cleaning our office for
                over a year, and they're consistently excellent. Our workspace
                is always pristine when we arrive in the morning."
              </p>
              <div className="flex items-center">
                <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4 bg-blue-100 flex items-center justify-center">
                  <span className="text-blue-600 font-bold text-lg">RL</span>
                </div>
                <div>
                  <p className="font-semibold">Robert L.</p>
                  <p className="text-gray-500 text-sm">Fort Lee, NJ</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready for a Cleaner Bergen County Home or Business?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Contact us today to schedule your cleaning service or get a free
              quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-blue-600 text-white hover:bg-blue-700 px-8 py-3 rounded-lg text-sm font-medium inline-flex items-center justify-center transition-all duration-300"
              >
                Get a Free Quote
              </Link>
              <Link
                href="/pricing"
                className="bg-gray-900 text-white hover:bg-gray-800 px-8 py-3 rounded-lg text-sm font-medium inline-flex items-center justify-center transition-all duration-300"
              >
                See Our Pricing
              </Link>
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
