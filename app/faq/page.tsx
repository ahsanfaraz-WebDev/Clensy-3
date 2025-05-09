"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ChevronDown,
  ChevronUp,
  Search,
  Star,
  Clock,
  Shield,
  Check,
} from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import CTASection from "@/components/cta-section";

export default function FAQPage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeCategory, setActiveCategory] = useState("general");
  const [searchQuery, setSearchQuery] = useState("");
  const [openFAQs, setOpenFAQs] = useState<Record<string, boolean>>({});

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const toggleFAQ = (id: string) => {
    setOpenFAQs((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // FAQ categories
  const categories = [
    { id: "general", name: "General Questions" },
    { id: "residential", name: "Residential Cleaning" },
    { id: "commercial", name: "Commercial Cleaning" },
    { id: "specialized", name: "Specialized Services" },
    { id: "booking", name: "Booking & Scheduling" },
    { id: "pricing", name: "Pricing & Payment" },
  ];

  // FAQ data
  const faqs = {
    general: [
      {
        id: "gen1",
        question: "What areas do you serve?",
        answer:
          "We provide cleaning services throughout Northern New Jersey, including Bergen, Essex, Hudson, Passaic, and Union counties. We serve all major cities and towns within these counties.",
      },
      {
        id: "gen2",
        question: "Are your cleaners background checked?",
        answer:
          "Yes, all of our cleaning professionals undergo thorough background checks before joining our team. We prioritize your safety and security, and only employ trustworthy individuals with verified credentials.",
      },
      {
        id: "gen3",
        question: "Are you insured and bonded?",
        answer:
          "Yes, we are fully insured and bonded. This provides protection for both our clients and our team in the rare event of an accident or damage during service.",
      },
      {
        id: "gen4",
        question: "What cleaning products do you use?",
        answer:
          "We use a combination of industry-grade professional cleaning products and eco-friendly options. If you have specific preferences or concerns about allergies, we're happy to accommodate your needs with alternative products.",
      },
      {
        id: "gen5",
        question: "Do I need to be home during the cleaning?",
        answer:
          "No, you don't need to be home during the cleaning service. Many of our clients provide a key or access instructions. We ensure secure handling of all property access methods and can arrange for secure key return or storage.",
      },
    ],
    residential: [
      {
        id: "res1",
        question: "What's included in a standard residential cleaning?",
        answer:
          "Our standard residential cleaning includes dusting all accessible surfaces, vacuuming carpets and floors, mopping hard floors, cleaning kitchen surfaces, appliance exteriors, bathroom fixtures, sanitizing toilets, sinks, tubs/showers, emptying trash, and general tidying. Check our 50-point checklist for a complete breakdown.",
      },
      {
        id: "res2",
        question: "How does deep cleaning differ from routine cleaning?",
        answer:
          "Deep cleaning is more thorough and includes areas not covered in routine cleaning. It involves cleaning behind and under furniture, inside appliances, detailed bathroom scrubbing, baseboards, vents, window sills, and removing scale, soap scum, and hard water stains. It's ideal for first-time cleanings or periodic refreshing.",
      },
      {
        id: "res3",
        question: "Do you clean inside refrigerators and ovens?",
        answer:
          "Interior appliance cleaning is not included in our standard services but can be added as an extra service. We offer specialized cleaning for refrigerators, ovens, and other appliances at an additional cost.",
      },
      {
        id: "res4",
        question: "How often should I schedule residential cleaning?",
        answer:
          "The frequency depends on your specific needs. Most clients choose weekly, bi-weekly, or monthly services. Homes with children, pets, or multiple residents often benefit from more frequent cleanings, while smaller households with fewer occupants might only need monthly maintenance.",
      },
      {
        id: "res5",
        question: "Do you clean windows?",
        answer:
          "Our standard services include cleaning the interior glass of windows that can be reached without a ladder. Exterior window cleaning or windows requiring special equipment can be arranged as an add-on service.",
      },
    ],
    commercial: [
      {
        id: "com1",
        question: "What types of commercial properties do you service?",
        answer:
          "We service a wide range of commercial properties including offices, retail spaces, medical facilities, gyms, schools, churches, and common areas in multi-unit buildings. Each industry has unique cleaning requirements, and we tailor our services accordingly.",
      },
      {
        id: "com2",
        question: "Can you clean outside of business hours?",
        answer:
          "Yes, we offer flexible scheduling for commercial clients and can arrange cleaning services during evenings, weekends, or early mornings to minimize disruption to your business operations.",
      },
      {
        id: "com3",
        question: "Do you provide cleaning supplies or should we provide them?",
        answer:
          "We bring all necessary cleaning supplies and equipment for our commercial services. However, if your facility requires specific products due to regulations or preferences, we can discuss using your supplied products.",
      },
      {
        id: "com4",
        question: "Can you accommodate special requests for our office?",
        answer:
          "Yes, we understand that each business has unique needs. We're happy to accommodate special requests and can develop a customized cleaning plan that addresses your specific requirements.",
      },
      {
        id: "com5",
        question: "Do you offer daily cleaning services for businesses?",
        answer:
          "Yes, we offer daily cleaning services for commercial clients who require consistent maintenance. We can create a schedule that ensures your business always appears professional and clean for your clients and employees.",
      },
    ],
    specialized: [
      {
        id: "spec1",
        question: "What does move-in/move-out cleaning include?",
        answer:
          "Our move-in/move-out cleaning is a comprehensive deep clean designed to prepare a property for new occupants or help you leave your current property in excellent condition. It includes detailed cleaning of all surfaces, appliances (inside and out), cabinets, drawers, closets, fixtures, baseboards, and more.",
      },
      {
        id: "spec2",
        question: "What is post-construction cleaning?",
        answer:
          "Post-construction cleaning addresses the unique challenges after renovation or construction. It includes removing dust from all surfaces, cleaning fixtures and windows, removing adhesive residues, paint splatters, and construction debris, and preparing the space for immediate use.",
      },
      {
        id: "spec3",
        question: "Do you offer carpet cleaning services?",
        answer:
          "Yes, we offer professional carpet cleaning services using hot water extraction methods to deep clean and refresh your carpets. This service is available for both residential and commercial clients.",
      },
      {
        id: "spec4",
        question: "What's included in AirBNB or vacation rental cleaning?",
        answer:
          "Our AirBNB cleaning service includes thorough cleaning of all living spaces, bathrooms, and kitchens, fresh linens and towels (if provided), restocking essential supplies, sanitizing high-touch surfaces, and ensuring the property is guest-ready with attention to detail that maintains your positive reviews.",
      },
      {
        id: "spec5",
        question: "Can you handle biohazard or specialized cleaning needs?",
        answer:
          "For certain specialized cleaning needs, we may partner with certified biohazard cleaning companies. Please contact us directly to discuss your specific requirements, and we'll determine the appropriate service solution.",
      },
    ],
    booking: [
      {
        id: "book1",
        question: "How do I schedule a cleaning service?",
        answer:
          "You can schedule a cleaning service through our website booking system, by calling our customer service team, or by emailing us. We'll collect details about your property and cleaning needs, then provide a quote and available time slots.",
      },
      {
        id: "book2",
        question: "Do I need to sign a contract for recurring services?",
        answer:
          "We offer flexible scheduling without requiring long-term contracts. You can set up recurring services and modify or cancel them with appropriate notice. Some commercial clients prefer contracts for consistent service guarantees, which we're happy to accommodate.",
      },
      {
        id: "book3",
        question: "How far in advance should I book?",
        answer:
          "For regular service, we recommend booking 1-2 weeks in advance to secure your preferred time slot. For special events or one-time deep cleanings, 2-3 weeks' notice is ideal, especially during busy seasons. Last-minute appointments may be available depending on our schedule.",
      },
      {
        id: "book4",
        question: "What if I need to reschedule my cleaning?",
        answer:
          "We understand that schedules change. Please provide at least 48 hours' notice for rescheduling to avoid any fees. Last-minute changes may incur a rescheduling fee, but we do our best to accommodate our clients' needs.",
      },
      {
        id: "book5",
        question: "Do you have a satisfaction guarantee?",
        answer:
          "Yes, we stand behind our work with a 100% satisfaction guarantee. If you're not completely satisfied with any aspect of our service, contact us within 24 hours and we'll return to address any overlooked areas at no additional cost.",
      },
    ],
    pricing: [
      {
        id: "price1",
        question: "How do you determine pricing for cleaning services?",
        answer:
          "Our pricing is based on several factors including the size of your property, type of service requested (standard, deep, or specialized), frequency of service, and specific requirements. We provide transparent, accurate quotes after understanding your unique needs.",
      },
      {
        id: "price2",
        question: "Do you offer discounts for regular cleaning schedules?",
        answer:
          "Yes, we offer discounted rates for recurring service schedules. The more frequently you schedule cleanings, the more you save per visit. Weekly services receive the highest discount, followed by bi-weekly and monthly options.",
      },
      {
        id: "price3",
        question: "Is there an extra charge for special cleaning requests?",
        answer:
          "Additional services beyond our standard cleaning are available at an extra charge. These include interior refrigerator/oven cleaning, carpet cleaning, window washing, and other specialized tasks. We'll clearly outline any additional costs before service begins.",
      },
      {
        id: "price4",
        question: "What payment methods do you accept?",
        answer:
          "We accept all major credit cards, electronic bank transfers, and digital payment services. Payment is typically processed after service completion for one-time bookings, while recurring services may be set up with automatic payments for convenience.",
      },
      {
        id: "price5",
        question: "Do I need to tip your cleaning professionals?",
        answer:
          "Tipping is not required but is always appreciated by our cleaning professionals. If you're particularly pleased with the service, you're welcome to show your appreciation, but we never expect or solicit tips.",
      },
    ],
  };

  const filteredFAQs = Object.entries(faqs).reduce(
    (acc, [category, questions]) => {
      if (searchQuery.trim() === "") {
        return { ...acc, [category]: questions };
      }

      const filtered = questions.filter(
        (faq) =>
          faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
          faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
      );

      return { ...acc, [category]: filtered };
    },
    {} as Record<string, (typeof faqs)[keyof typeof faqs]>
  );

  return (
    <main className="overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] bg-black pt-16">
        {/* Background image with overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=2070&auto=format&fit=crop"
            alt="Cleaning FAQ hero image"
            fill
            className="object-cover opacity-70"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col items-center justify-center min-h-[calc(60vh-64px)]">
            {/* Text content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-center max-w-3xl"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isLoaded ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-block mb-6 px-6 py-2 bg-blue-600 rounded-lg"
              >
                <span className="text-white font-semibold text-sm uppercase tracking-wider">
                  Answers to Your Questions
                </span>
              </motion.div>

              <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-6 hero-text-shadow">
                Frequently Asked{" "}
                <span className="text-blue-400">Questions</span>
              </h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="text-lg text-white/80 mb-8"
              >
                Find answers to common questions about our cleaning services,
                booking process, and pricing. Can't find what you're looking
                for? Contact us directly for personalized assistance.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            {/* Global Search Bar */}
            <div className="mb-12">
              <div className="relative max-w-lg mx-auto">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search all FAQs across services..."
                  className="block w-full pl-10 pr-3 py-4 border border-gray-300 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  >
                    <span className="text-gray-400 hover:text-gray-600">
                      Clear
                    </span>
                  </button>
                )}
              </div>
              {searchQuery && (
                <div className="mt-2 text-center text-sm text-gray-600">
                  Showing results for "{searchQuery}" across all FAQ categories
                </div>
              )}
            </div>

            {/* Category navigation - redesigned to be more visually appealing */}
            <div className="mb-16">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {categories.slice(0, 3).map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`px-6 py-4 rounded-xl text-sm font-medium transition-all flex items-center justify-center ${
                      activeCategory === category.id
                        ? "bg-blue-600 text-white shadow-md"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                {categories.slice(3).map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`px-6 py-4 rounded-xl text-sm font-medium transition-all flex items-center justify-center ${
                      activeCategory === category.id
                        ? "bg-blue-600 text-white shadow-md"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Display FAQs */}
            <div>
              {categories.map((category) => (
                <div
                  key={category.id}
                  className={
                    activeCategory === category.id ? "block" : "hidden"
                  }
                >
                  <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
                    {category.name}
                  </h2>

                  {filteredFAQs[category.id]?.length === 0 ? (
                    <div className="text-center py-10">
                      <p className="text-gray-500 text-lg">
                        No FAQs found matching your search "{searchQuery}".
                      </p>
                      <button
                        onClick={() => setSearchQuery("")}
                        className="mt-4 text-blue-600 font-medium"
                      >
                        Clear search
                      </button>
                    </div>
                  ) : (
                    <div className="space-y-6">
                      {filteredFAQs[category.id]?.map((faq) => (
                        <div
                          key={faq.id}
                          className="border border-gray-200 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-md"
                        >
                          <button
                            onClick={() => toggleFAQ(faq.id)}
                            className="w-full flex justify-between items-center p-6 text-left font-semibold text-lg focus:outline-none"
                          >
                            <span>{faq.question}</span>
                            {openFAQs[faq.id] ? (
                              <ChevronUp className="h-5 w-5 text-blue-600 flex-shrink-0" />
                            ) : (
                              <ChevronDown className="h-5 w-5 text-blue-600 flex-shrink-0" />
                            )}
                          </button>
                          <div
                            className={`px-6 transition-all duration-300 overflow-hidden ${
                              openFAQs[faq.id]
                                ? "max-h-96 pb-6"
                                : "max-h-0 opacity-0"
                            }`}
                          >
                            <p className="text-gray-600">{faq.answer}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Common Questions Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Still Have Questions?</h2>
            <p className="text-lg text-gray-600">
              Here are some other topics our customers frequently ask about.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-sm text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">First-Time Customers</h3>
              <p className="text-gray-600 mb-4">
                Learn what to expect during your first cleaning appointment and
                how to prepare your space.
              </p>
              <Link
                href="/contact"
                className="text-blue-600 font-medium hover:text-blue-700 transition-colors inline-flex items-center"
              >
                Get More Information
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

            <div className="bg-white p-8 rounded-2xl shadow-sm text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Pricing & Estimates</h3>
              <p className="text-gray-600 mb-4">
                Learn more about our transparent pricing structure and how to
                get an accurate estimate for your property.
              </p>
              <Link
                href="/pricing"
                className="text-blue-600 font-medium hover:text-blue-700 transition-colors inline-flex items-center"
              >
                View Pricing
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

            <div className="bg-white p-8 rounded-2xl shadow-sm text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Service Areas</h3>
              <p className="text-gray-600 mb-4">
                Find out if we service your area and learn about our coverage
                throughout Northern New Jersey.
              </p>
              <Link
                href="/locations/bergen"
                className="text-blue-600 font-medium hover:text-blue-700 transition-colors inline-flex items-center"
              >
                Check Service Areas
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

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto bg-gray-900 rounded-2xl overflow-hidden shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8 md:p-12 bg-gray-900 text-white">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">
                  Can't Find Your Answer?
                </h2>
                <p className="text-white/80 mb-8">
                  Our customer service team is ready to help with any questions
                  not addressed in our FAQ section. Contact us for personalized
                  assistance.
                </p>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-blue-600/20 p-3 rounded-lg mr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-blue-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Email Us</h3>
                      <p className="text-white/70">
                        Send us a message and we'll respond within 24 hours.
                      </p>
                      <a
                        href="mailto:info@clensy.com"
                        className="text-blue-400 hover:text-blue-300 transition-colors mt-1 inline-block"
                      >
                        info@clensy.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-blue-600/20 p-3 rounded-lg mr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-blue-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Call Us</h3>
                      <p className="text-white/70">
                        Speak with our customer service team directly.
                      </p>
                      <a
                        href="tel:+19735557890"
                        className="text-blue-400 hover:text-blue-300 transition-colors mt-1 inline-block"
                      >
                        (973) 555-7890
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mt-10">
                  <Link
                    href="/contact"
                    className="bg-blue-600 text-white hover:bg-blue-500 px-8 py-3 rounded-lg text-sm font-medium inline-flex items-center transition-all duration-300"
                  >
                    Contact Us
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </Link>
                </div>
              </div>

              <div className="hidden md:block relative">
                <Image
                  src="https://images.unsplash.com/photo-1579389083078-4e7018379f7e?q=80&w=870&auto=format&fit=crop"
                  alt="Customer service representative"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust indicators section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="text-4xl font-bold text-black mb-2">1000+</div>
              <p className="text-gray-600">Questions Answered</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-4xl font-bold text-black mb-2">24/7</div>
              <p className="text-gray-600">Online Support</p>
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
              <p className="text-gray-600">Customer Satisfaction</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-4xl font-bold text-black mb-2">15+</div>
              <p className="text-gray-600">Years of Experience</p>
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
