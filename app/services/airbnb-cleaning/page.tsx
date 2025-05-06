"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
  Star,
  Clock,
  Calendar,
  Sparkles,
  Heart,
  Users,
  CheckCircle,
  ArrowRight,
  MessageCircle,
  ThumbsUp,
  Check,
  Shield,
} from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import CTASection from "@/components/cta-section";

export default function AirbnbCleaningPage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [reviewIndex, setReviewIndex] = useState(0);

  const featuresRef = useRef(null);
  const isInView = useInView(featuresRef, { once: true, margin: "-100px" });

  // Reviews data
  const reviews = [
    {
      name: "Emma Thompson",
      role: "Airbnb Superhost",
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop",
      text: "Since using Clensy for my Airbnb cleaning, my 5-star cleanliness ratings increased by 30%. They're thorough, reliable, and guests constantly comment on how immaculate the space is.",
      rating: 5,
    },
    {
      name: "James Wilson",
      role: "Property Manager",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=100&auto=format&fit=crop",
      text: "Managing multiple listings became so much easier with Clensy's Airbnb cleaning service. Their turnover cleaning is quick, thorough, and they always leave special touches that delight our guests.",
      rating: 5,
    },
    {
      name: "Olivia Parker",
      role: "Vacation Rental Owner",
      avatar:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=100&auto=format&fit=crop",
      text: "The attention to detail is remarkable. From perfectly folded towels to spotless kitchens, Clensy's team knows exactly what vacation rental guests expect. Worth every penny!",
      rating: 5,
    },
  ];

  // Service features
  const serviceFeatures = [
    {
      title: "Quick Turnovers",
      description:
        "Fast, efficient cleaning between guest stays to maximize your booking potential",
      icon: Clock,
    },
    {
      title: "Pristine Standards",
      description:
        "Meticulous attention to detail ensures 5-star cleanliness ratings",
      icon: Star,
    },
    {
      title: "Flexible Scheduling",
      description:
        "Adaptable to your booking calendar with last-minute availability",
      icon: Calendar,
    },
    {
      title: "Guest-Ready Touches",
      description:
        "Special amenity arrangement and presentation to delight your guests",
      icon: Heart,
    },
  ];

  useEffect(() => {
    setIsLoaded(true);

    // Auto-rotate reviews
    const interval = setInterval(() => {
      setReviewIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="overflow-x-hidden">
      <Navbar />

      {/* Split Hero Section - Following Deep Cleaning layout */}
      <section className="relative min-h-[85vh] bg-black pt-16">
        {/* Background image with overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=1939&auto=format&fit=crop"
            alt="Pristine Airbnb living room"
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
                  Specialized Airbnb & Vacation Rental Cleaning
                </span>
              </motion.div>

              <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-6 hero-text-shadow">
                Boost Your <span className="text-blue-300">Ratings</span> <br />
                with Professional Cleaning
              </h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="text-lg text-white/80 mb-8 max-w-xl"
              >
                Specialized cleaning services designed for Airbnb, VRBO, and
                vacation rental properties that ensure 5-star cleanliness
                reviews and quick turnovers.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link
                  href="/contact"
                  className="bg-white text-blue-900 hover:bg-white/90 px-8 py-3 rounded-full text-sm font-medium inline-flex items-center justify-center transition-all duration-300 w-48"
                >
                  <span className="text-center w-full">Schedule Cleaning</span>
                </Link>

                <div className="flex items-center sm:mt-0 mt-4">
                  <div className="flex items-center text-white/90 mr-8">
                    <Clock className="h-5 w-5 mr-2 text-blue-300" />
                    <span className="text-sm whitespace-nowrap">
                      Quick Turnovers
                    </span>
                  </div>

                  <div className="flex items-center text-white/90">
                    <Shield className="h-5 w-5 mr-2 text-blue-300" />
                    <span className="text-sm whitespace-nowrap">
                      5-Star Results
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
              What's Included in Our Airbnb Cleaning
            </h2>
            <p className="text-lg text-gray-600">
              Our specialized Airbnb cleaning service goes beyond standard
              cleaning to ensure your guests have a 5-star experience.
            </p>
          </div>

          {/* Item 1 - Left image, right text */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-lg order-2 lg:order-1">
              <Image
                src="https://images.unsplash.com/photo-1592928302636-c83cf1e1c887?q=80&w=1470&auto=format&fit=crop"
                alt="Guest-ready bedroom"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="text-2xl font-bold mb-4">Guest-Ready Bedrooms</h3>
              <p className="text-gray-600 mb-6">
                We prepare bedrooms to hotel standards, ensuring your guests
                enjoy a pristine and welcoming environment for a perfect night's
                sleep.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-3 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Fresh linens perfectly changed and presented</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-3 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Dust-free surfaces and furniture</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-3 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Vacuumed floors and rugs</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-3 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Sanitized light switches and door handles</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Item 2 - Right image, left text */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h3 className="text-2xl font-bold mb-4">Spotless Bathrooms</h3>
              <p className="text-gray-600 mb-6">
                Our bathroom cleaning service ensures every inch is immaculate,
                as bathrooms are one of the most scrutinized areas by guests.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-3 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Deep cleaned showers, tubs, and toilets</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-3 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Streak-free mirrors and glass surfaces</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-3 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Fresh, neatly folded towels and bath mats</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-3 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Replenished toiletries and amenities</span>
                </li>
              </ul>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1562184552-997c461abbe6?q=80&w=1470&auto=format&fit=crop"
                alt="Pristine bathroom"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Item 3 - Left image, right text */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-lg order-2 lg:order-1">
              <Image
                src="https://images.unsplash.com/photo-1556912173-46c336c7fd55?q=80&w=1471&auto=format&fit=crop"
                alt="Modern kitchen"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="text-2xl font-bold mb-4">Kitchen Excellence</h3>
              <p className="text-gray-600 mb-6">
                We ensure your kitchen is ready for guests who want to cook,
                with every surface sanitized and all appliances cleaned inside
                and out.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-3 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Sanitized countertops and backsplash</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-3 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Cleaned appliances, inside and out</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-3 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Spotless sink and fixtures</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-3 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Clean and organized utensils and dishware</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Before & After Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              The Airbnb Cleaning Difference
            </h2>
            <p className="text-lg text-gray-600">
              See how our specialized Airbnb cleaning transforms spaces for the
              perfect guest experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Before & After 1 */}
            <div className="bg-gray-50 rounded-2xl p-6 shadow-sm">
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <div className="relative h-48 rounded-lg overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=500&auto=format&fit=crop"
                      alt="Before cleaning - messy bedroom"
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
                      src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=500&auto=format&fit=crop"
                      alt="After cleaning - pristine bedroom"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute bottom-0 left-0 bg-blue-600/70 text-white px-3 py-1 text-sm">
                      After
                    </div>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Bedroom Transformation
              </h3>
              <p className="text-gray-600">
                From a lived-in bedroom to a hotel-quality sleeping space that
                will delight your guests.
              </p>
            </div>

            {/* Before & After 2 */}
            <div className="bg-gray-50 rounded-2xl p-6 shadow-sm">
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <div className="relative h-48 rounded-lg overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1584622781564-1d987f7333c1?q=80&w=500&auto=format&fit=crop"
                      alt="Before cleaning - messy kitchen"
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
                      src="https://images.unsplash.com/photo-1565538810643-b5bdb714032a?q=80&w=500&auto=format&fit=crop"
                      alt="After cleaning - spotless kitchen"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute bottom-0 left-0 bg-blue-600/70 text-white px-3 py-1 text-sm">
                      After
                    </div>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Kitchen Revival</h3>
              <p className="text-gray-600">
                Our detailed kitchen cleaning transforms a used space into one
                that looks brand new for each guest.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits Section - Following Deep Cleaning layout */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why Choose Our Airbnb Cleaning
            </h2>
            <p className="text-lg text-white/80">
              See how our specialized service benefits hosts and property
              managers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
              <div className="bg-blue-600/20 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <Star className="h-6 w-6 text-blue-300" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Higher Ratings</h3>
              <p className="text-white/80">
                Professional Airbnb cleaning consistently leads to higher
                cleanliness ratings, which significantly impacts your overall
                property rating and visibility.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
              <div className="bg-blue-600/20 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <Clock className="h-6 w-6 text-blue-300" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Efficient Turnovers
              </h3>
              <p className="text-white/80">
                Our quick and thorough turnover cleaning allows you to maximize
                bookings with minimal time between guests, increasing your
                revenue potential.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
              <div className="bg-blue-600/20 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <Heart className="h-6 w-6 text-blue-300" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Delighted Guests</h3>
              <p className="text-white/80">
                Our attention to detail and special touches create an
                exceptional first impression that leads to positive reviews and
                repeat bookings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              What Hosts Say
            </h2>
            <p className="text-lg text-gray-600">
              Hear from Airbnb hosts who have transformed their rental business
              with our cleaning services.
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
                  "Since using Clensy for my Airbnb cleaning, my 5-star
                  cleanliness ratings increased by 30%. They're thorough,
                  reliable, and guests constantly comment on how immaculate the
                  space is."
                </p>
                <div className="flex items-center">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop"
                      alt="Customer"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold">Emma Thompson</p>
                    <p className="text-gray-500 text-sm">Airbnb Superhost</p>
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
                  "Managing multiple listings became so much easier with
                  Clensy's Airbnb cleaning service. Their turnover cleaning is
                  quick, thorough, and they always leave special touches that
                  delight our guests."
                </p>
                <div className="flex items-center">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=100&auto=format&fit=crop"
                      alt="Customer"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold">James Wilson</p>
                    <p className="text-gray-500 text-sm">Property Manager</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Host Success Stories - Unique to Airbnb */}
      <section className="py-24 bg-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Host Success Stories
            </h2>
            <p className="text-lg text-gray-600">
              See how our specialized Airbnb cleaning services have transformed
              hosting experiences and helped boost ratings.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Success Story 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 shadow-md"
            >
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 text-yellow-400"
                    fill="currentColor"
                  />
                ))}
                <span className="ml-2 text-sm font-medium">
                  Rating increased by 1.2 stars
                </span>
              </div>
              <h3 className="text-xl font-bold mb-2">Downtown Loft</h3>
              <p className="text-gray-600 mb-4">
                "After switching to Clensy, my cleanliness ratings went from 4.2
                to 4.9. Guests now regularly mention how spotless the apartment
                is."
              </p>
              <div className="flex items-center pt-4 border-t border-gray-100">
                <div className="relative w-10 h-10 rounded-full overflow-hidden mr-3">
                  <Image
                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=70&auto=format&fit=crop"
                    alt="Host"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-sm font-medium">
                  Rachel, Superhost since 2019
                </p>
              </div>
            </motion.div>

            {/* Success Story 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 shadow-md"
            >
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 text-yellow-400"
                    fill="currentColor"
                  />
                ))}
                <span className="ml-2 text-sm font-medium">
                  Bookings up 40%
                </span>
              </div>
              <h3 className="text-xl font-bold mb-2">Beachfront Villa</h3>
              <p className="text-gray-600 mb-4">
                "Clensy's reliability means I can accept more last-minute
                bookings. Their quick turnovers and attention to detail have
                helped me become a Superhost."
              </p>
              <div className="flex items-center pt-4 border-t border-gray-100">
                <div className="relative w-10 h-10 rounded-full overflow-hidden mr-3">
                  <Image
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=70&auto=format&fit=crop"
                    alt="Host"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-sm font-medium">David, Property Manager</p>
              </div>
            </motion.div>

            {/* Success Story 3 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 shadow-md"
            >
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 text-yellow-400"
                    fill="currentColor"
                  />
                ))}
                <span className="ml-2 text-sm font-medium">
                  Revenue increased by 25%
                </span>
              </div>
              <h3 className="text-xl font-bold mb-2">Mountain Retreat</h3>
              <p className="text-gray-600 mb-4">
                "With Clensy handling the cleaning, I've been able to raise my
                nightly rates. The quality of cleaning justifies the premium
                price, and guests are happy to pay it."
              </p>
              <div className="flex items-center pt-4 border-t border-gray-100">
                <div className="relative w-10 h-10 rounded-full overflow-hidden mr-3">
                  <Image
                    src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=70&auto=format&fit=crop"
                    alt="Host"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-sm font-medium">Sarah, Host since 2017</p>
              </div>
            </motion.div>
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
              Common questions about our Airbnb cleaning services.
            </p>

            <div className="space-y-8">
              <div className="bg-white p-8 rounded-2xl shadow-sm border-l-4 border-blue-600">
                <h3 className="text-xl font-semibold mb-3">
                  How far in advance should I book a turnover cleaning?
                </h3>
                <p className="text-gray-600">
                  We recommend booking at least 48 hours in advance for turnover
                  cleanings. However, we understand the unpredictable nature of
                  vacation rentals and can often accommodate last-minute
                  requests. We offer priority booking for regular clients.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm border-l-4 border-blue-600">
                <h3 className="text-xl font-semibold mb-3">
                  Do you provide linens and towels or just change them?
                </h3>
                <p className="text-gray-600">
                  Our standard service includes changing and making beds with
                  your provided linens. However, we do offer linen and towel
                  rental services for an additional fee, which many hosts find
                  convenient for streamlining their operations.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm border-l-4 border-blue-600">
                <h3 className="text-xl font-semibold mb-3">
                  Can you restock amenities and supplies?
                </h3>
                <p className="text-gray-600">
                  Yes, we offer restocking services for an additional fee. You
                  can provide us with supplies or we can purchase and replenish
                  items like coffee, tea, toiletries, and other essentials,
                  adding the cost to your invoice.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm border-l-4 border-blue-600">
                <h3 className="text-xl font-semibold mb-3">
                  What happens if guests leave excessive mess?
                </h3>
                <p className="text-gray-600">
                  Our standard turnover cleaning covers normal use. If we
                  encounter excessive mess or damage requiring additional time
                  and resources, we'll document it with photos and contact you
                  for approval before proceeding with extra cleaning at an
                  additional charge.
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
