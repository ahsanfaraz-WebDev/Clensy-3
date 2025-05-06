"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Check,
  ArrowRight,
  Star,
  Clock,
  Shield,
  Sparkles,
  Calendar,
  Plus,
  DollarSign,
  Timer,
} from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import CTASection from "@/components/cta-section";

export default function ExtrasPage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeExtra, setActiveExtra] = useState("windows");

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

  const extras = [
    {
      id: "windows",
      name: "Window Cleaning",
      description: "Crystal clear windows inside and out",
      icon: <Sparkles className="h-5 w-5" />,
      image:
        "https://images.unsplash.com/photo-1605604578744-fe0ee35c3c81?q=80&w=1470&auto=format&fit=crop",
      features: [
        "Interior and exterior window cleaning",
        "Screen cleaning and frame wiping",
        "Streak-free finish",
        "Sill and track cleaning",
      ],
    },
    {
      id: "fridge",
      name: "Refrigerator Cleaning",
      description: "Thorough cleaning and sanitizing of refrigerators",
      icon: <Plus className="h-5 w-5" />,
      image:
        "https://images.unsplash.com/photo-1580713860186-c5fde8179670?q=80&w=1424&auto=format&fit=crop",
      features: [
        "Empty and clean all shelves and drawers",
        "Sanitize interior surfaces",
        "Clean exterior and handles",
        "Clean under and behind refrigerator when accessible",
      ],
    },
    {
      id: "oven",
      name: "Oven Cleaning",
      description: "Deep cleaning for ovens and ranges",
      icon: <Plus className="h-5 w-5" />,
      image:
        "https://images.unsplash.com/photo-1557310307-0caa23fca3e2?q=80&w=1470&auto=format&fit=crop",
      features: [
        "Removal of built-up grease and carbon",
        "Cleaning of racks, trays, and knobs",
        "Hood and filter cleaning",
        "Full sanitization of interior and exterior",
      ],
    },
    {
      id: "cabinets",
      name: "Cabinet Cleaning",
      description: "Interior and exterior cabinet cleaning",
      icon: <Plus className="h-5 w-5" />,
      image:
        "https://images.unsplash.com/photo-1616486701797-0f33f61038ec?q=80&w=1374&auto=format&fit=crop",
      features: [
        "Empty and clean interior shelves",
        "Degrease and polish exteriors",
        "Clean handles and hardware",
        "Reorganize contents as desired",
      ],
    },
  ];

  return (
    <main className="overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-[85vh] bg-black pt-16">
        {/* Background image with overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1626436819821-df38d9eda0b9?q=80&w=1470&auto=format&fit=crop"
            alt="A clean home with extras services"
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
                  Premium Add-On Services
                </span>
              </motion.div>

              <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-6 hero-text-shadow">
                Extra Cleaning <br />
                <span className="text-blue-500">Services</span> On Demand
              </h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="text-lg text-white/80 mb-8 max-w-xl"
              >
                Enhance your regular cleaning experience with our specialized
                add-on services. From window cleaning to oven scrubbing,
                customize your cleaning package to address your specific needs.
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
                    <Clock className="h-5 w-5 mr-2 text-blue-300" />
                    <span className="text-sm whitespace-nowrap">
                      Customizable Services
                    </span>
                  </div>

                  <div className="flex items-center text-white/90">
                    <Shield className="h-5 w-5 mr-2 text-blue-300" />
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

      {/* Trust indicators section */}
      <section className="py-10 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="text-4xl font-bold text-black mb-2">10+</div>
              <p className="text-gray-600">Extra Services</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-4xl font-bold text-black mb-2">100%</div>
              <p className="text-gray-600">Customizable</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-4xl font-bold text-black mb-2">5.0</div>
              <div className="flex items-center mb-2">
                <Star className="h-4 w-4 fill-current text-yellow-500" />
                <Star className="h-4 w-4 fill-current text-yellow-500" />
                <Star className="h-4 w-4 fill-current text-yellow-500" />
                <Star className="h-4 w-4 fill-current text-yellow-500" />
                <Star className="h-4 w-4 fill-current text-yellow-500" />
              </div>
              <p className="text-gray-600">Satisfaction Rating</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-4xl font-bold text-black mb-2">1000+</div>
              <p className="text-gray-600">Extra Services Completed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Extras Section - UNIQUE SECTION */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our Premium Extra Services
            </h2>
            <p className="text-lg text-gray-600">
              Customize your cleaning experience with these specialized add-on
              services, designed to address specific cleaning needs beyond our
              standard service packages.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-10">
            {extras.map((extra) => (
              <motion.div
                key={extra.id}
                whileHover={{ y: -5 }}
                className={`rounded-lg p-4 cursor-pointer transition-all duration-300 ${
                  activeExtra === extra.id
                    ? "bg-blue-100 border-l-4 border-blue-600"
                    : "bg-gray-50 hover:bg-gray-100"
                }`}
                onClick={() => setActiveExtra(extra.id)}
              >
                <div className="flex items-center">
                  <div
                    className={`p-2 rounded-full ${
                      activeExtra === extra.id
                        ? "bg-blue-600 text-white"
                        : "bg-gray-200"
                    } mr-3`}
                  >
                    {extra.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold">{extra.name}</h3>
                    <p className="text-sm text-gray-500">{extra.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Dynamic content based on selection */}
          {extras.map((extra) => (
            <div
              key={extra.id}
              className={`${activeExtra === extra.id ? "block" : "hidden"}`}
            >
              <div className="bg-gray-50 rounded-2xl overflow-hidden shadow-md">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  <div className="relative h-[400px]">
                    <Image
                      src={extra.image}
                      alt={extra.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-8 flex flex-col justify-center">
                    <h3 className="text-2xl font-bold mb-4">{extra.name}</h3>
                    <p className="text-gray-600 mb-6">{extra.description}</p>
                    <ul className="space-y-3">
                      {extra.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <Check className="h-5 w-5 mr-3 text-blue-600 flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-8">
                      <Link
                        href="/contact"
                        className="bg-blue-600 text-white hover:bg-blue-500 px-6 py-2 rounded-lg text-sm font-medium inline-flex items-center transition-all duration-300"
                      >
                        Add This Service <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              How To Add Extra Services
            </h2>
            <p className="text-lg text-gray-600">
              Adding extra services to your cleaning package is simple and
              flexible.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="bg-white rounded-2xl p-8 transition-all duration-300 hover:shadow-lg relative">
              <div className="absolute -top-4 -left-4 w-14 h-14 bg-black text-white rounded-full flex items-center justify-center text-xl font-bold">
                1
              </div>
              <div className="relative h-40 rounded-xl overflow-hidden mb-6 mt-2">
                <Image
                  src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=400&auto=format&fit=crop"
                  alt="Browse available extras online"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-4">Select Your Extras</h3>
              <p className="text-gray-600 mb-4">
                Browse our menu of extra services and select the ones that match
                your needs. You can add them to any cleaning service.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white rounded-2xl p-8 transition-all duration-300 hover:shadow-lg relative">
              <div className="absolute -top-4 -left-4 w-14 h-14 bg-black text-white rounded-full flex items-center justify-center text-xl font-bold">
                2
              </div>
              <div className="relative h-40 rounded-xl overflow-hidden mb-6 mt-2">
                <Image
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=400&auto=format&fit=crop"
                  alt="Schedule service with extras"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-4">Schedule Service</h3>
              <p className="text-gray-600 mb-4">
                Add your selected extras during the booking process, or contact
                us to add them to an existing appointment.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white rounded-2xl p-8 transition-all duration-300 hover:shadow-lg relative">
              <div className="absolute -top-4 -left-4 w-14 h-14 bg-black text-white rounded-full flex items-center justify-center text-xl font-bold">
                3
              </div>
              <div className="relative h-40 rounded-xl overflow-hidden mb-6 mt-2">
                <Image
                  src="https://images.unsplash.com/photo-1620912189865-1e8a33da4c5e?q=80&w=400&auto=format&fit=crop"
                  alt="Enjoy premium extras service"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-4">
                Enjoy Premium Results
              </h3>
              <p className="text-gray-600 mb-4">
                Our specialized team will ensure your extra services are
                completed to the highest standard along with your regular
                cleaning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Card Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Extras Pricing
            </h2>
            <p className="text-lg text-gray-600">
              Transparent pricing for our most popular extra services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Small Home Package */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-md border border-gray-100"
            >
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                  <Sparkles className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Interior Windows</h3>
                </div>
              </div>
              <div className="flex items-center mb-6">
                <DollarSign className="h-5 w-5 text-gray-400" />
                <span className="text-3xl font-bold">$5</span>
                <span className="text-gray-500 ml-2">per window</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-2 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Interior glass and frame</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-2 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Window sill cleaning</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-2 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Streak-free finish</span>
                </li>
              </ul>
              <Link
                href="/contact"
                className="bg-blue-600 text-white hover:bg-blue-500 px-6 py-2 rounded-lg text-sm font-medium flex items-center justify-center transition-all duration-300 w-full"
              >
                Add To Booking
              </Link>
            </motion.div>

            {/* Medium Home Package */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-md border border-gray-100"
            >
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                  <Plus className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Inside Refrigerator</h3>
                </div>
              </div>
              <div className="flex items-center mb-6">
                <DollarSign className="h-5 w-5 text-gray-400" />
                <span className="text-3xl font-bold">$35</span>
                <span className="text-gray-500 ml-2">per service</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-2 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Complete emptying and organizing</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-2 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Shelf and drawer cleaning</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-2 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Interior and exterior wiping</span>
                </li>
              </ul>
              <Link
                href="/contact"
                className="bg-blue-600 text-white hover:bg-blue-500 px-6 py-2 rounded-lg text-sm font-medium flex items-center justify-center transition-all duration-300 w-full"
              >
                Add To Booking
              </Link>
            </motion.div>

            {/* Large Home Package */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-md border border-gray-100"
            >
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                  <Plus className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Oven Cleaning</h3>
                </div>
              </div>
              <div className="flex items-center mb-6">
                <DollarSign className="h-5 w-5 text-gray-400" />
                <span className="text-3xl font-bold">$50</span>
                <span className="text-gray-500 ml-2">per service</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-2 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Deep cleaning of interior</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-2 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Rack and tray cleaning</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-2 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Door and glass cleaning</span>
                </li>
              </ul>
              <Link
                href="/contact"
                className="bg-blue-600 text-white hover:bg-blue-500 px-6 py-2 rounded-lg text-sm font-medium flex items-center justify-center transition-all duration-300 w-full"
              >
                Add To Booking
              </Link>
            </motion.div>
          </div>

          <div className="max-w-3xl mx-auto text-center mt-12">
            <p className="text-gray-600 mb-6">
              All extra services can be added to any regular cleaning
              appointment. Custom pricing available for multiple services.
            </p>
            <Link
              href="/pricing"
              className="bg-black text-white hover:bg-gray-800 px-6 py-3 rounded-lg text-sm font-medium inline-flex items-center transition-all duration-300"
            >
              See Full Pricing <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              What Our Clients Say
            </h2>
            <p className="text-lg text-white/80">
              Hear from clients who have enhanced their cleaning experience with
              our extra services.
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
                "I added window cleaning to my regular service and the
                difference is incredible. The natural light in my home is so
                much better with crystal clear windows!"
              </p>
              <div className="flex items-center">
                <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100&auto=format&fit=crop"
                    alt="Client"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold">Amanda Peterson</p>
                  <p className="text-white/60 text-sm">
                    Window Cleaning Client
                  </p>
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
                "The oven cleaning service is worth every penny. My oven looked
                brand new after years of built-up grease. I didn't even know it
                could look that clean again!"
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
                  <p className="font-semibold">David Richards</p>
                  <p className="text-white/60 text-sm">Oven Cleaning Client</p>
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
                "Having my refrigerator completely emptied, cleaned, and
                reorganized was amazing. It's so much more efficient now and I
                can find everything!"
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
                  <p className="font-semibold">Jennifer Liu</p>
                  <p className="text-white/60 text-sm">
                    Refrigerator Cleaning Client
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 text-center mb-12">
              Common questions about our extra cleaning services.
            </p>

            <div className="space-y-8">
              <div className="bg-white p-8 rounded-2xl shadow-sm border-l-4 border-blue-600">
                <h3 className="text-xl font-semibold mb-3">
                  Can I add extra services to an existing booking?
                </h3>
                <p className="text-gray-600">
                  Yes, you can add any of our extra services to an existing
                  booking up to 48 hours before your scheduled appointment.
                  Simply contact us and let us know which extras you'd like to
                  add.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm border-l-4 border-blue-600">
                <h3 className="text-xl font-semibold mb-3">
                  How much time do extra services add to my cleaning?
                </h3>
                <p className="text-gray-600">
                  The additional time varies depending on the service. Window
                  cleaning might add 30 minutes to 2 hours depending on the
                  number of windows. Oven cleaning typically adds 1 hour, and
                  refrigerator cleaning adds about 45 minutes to your service.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm border-l-4 border-blue-600">
                <h3 className="text-xl font-semibold mb-3">
                  Do I need to prepare anything for extra services?
                </h3>
                <p className="text-gray-600">
                  For refrigerator cleaning, we recommend removing any food
                  items that might be expired beforehand. For other services
                  like oven cleaning or window cleaning, no special preparation
                  is needed. We'll take care of everything.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm border-l-4 border-blue-600">
                <h3 className="text-xl font-semibold mb-3">
                  Are there any extras that require special scheduling?
                </h3>
                <p className="text-gray-600">
                  Yes, some services like interior cabinet cleaning or garage
                  organization may require additional time and might need to be
                  scheduled separately from your regular cleaning. Contact us
                  for custom scheduling for these specialized services.
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
