"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Calendar,
  ChevronRight,
  Clock,
  Mail,
  Building,
} from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function UnionCountyPage() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Service areas in Union County
  const serviceAreas = [
    "Berkeley Heights",
    "Clark",
    "Cranford",
    "Elizabeth",
    "Fanwood",
    "Garwood",
    "Hillside",
    "Kenilworth",
    "Linden",
    "Mountainside",
    "New Providence",
    "Plainfield",
    "Rahway",
    "Roselle",
    "Roselle Park",
    "Scotch Plains",
    "Springfield",
    "Summit",
    "Union",
    "Westfield",
    "Winfield",
  ];

  return (
    <main className="bg-gradient-to-b from-gray-900 to-black min-h-screen">
      {/* Navbar with fixed position */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-gray-900 to-black shadow-xl">
        <Navbar />
      </div>

      {/* Hero Section with Full-Width Image */}
      <div className="relative h-[50vh] w-full mt-[80px]">
        <Image
          src="https://images.unsplash.com/photo-1554469384-e58fac937bb4?q=80&w=2070&auto=format&fit=crop"
          alt="Union County Skyline"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>

        {/* Hero Content */}
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-2 tracking-tight">
              Union County
            </h1>
            <div className="flex items-center text-gray-300 mb-6">
              <MapPin className="h-5 w-5 text-blue-400 mr-2" />
              <p>500 North Avenue East, Suite 400, Westfield, NJ 07090</p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link
                href="https://maps.google.com/?q=500+North+Avenue+East+Westfield+NJ+07090"
                target="_blank"
                className="inline-block px-8 py-3 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-colors"
              >
                GET DIRECTIONS
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-md font-medium hover:bg-white/20 transition-colors"
              >
                <Calendar className="mr-2 h-5 w-5" /> BOOK NOW
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Breadcrumb Navigation */}
      <div className="bg-gradient-to-r from-gray-900 to-black py-4 border-y border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center text-sm text-gray-400">
            <Link
              href="/locations"
              className="hover:text-blue-400 transition-colors"
            >
              All Locations
            </Link>
            <ChevronRight className="h-4 w-4 mx-2" />
            <span className="text-white font-medium">Union County</span>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Contact Info and Hours */}
          <div className="lg:col-span-1 space-y-8">
            {/* Contact Information Card */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl shadow-xl overflow-hidden">
              <div className="p-6 border-b border-gray-700">
                <h2 className="text-xl font-bold text-white">
                  Contact Information
                </h2>
              </div>
              <div className="p-6 space-y-6">
                <div className="flex items-start">
                  <Building className="h-5 w-5 text-blue-400 mr-3 mt-1" />
                  <div>
                    <h3 className="text-gray-300 font-medium mb-1">Address</h3>
                    <p className="text-white">
                      500 North Avenue East, Suite 400
                    </p>
                    <p className="text-white">Westfield, NJ 07090</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="h-5 w-5 text-blue-400 mr-3 mt-1" />
                  <div>
                    <h3 className="text-gray-300 font-medium mb-1">Phone</h3>
                    <a
                      href="tel:908-555-6789"
                      className="text-white hover:text-blue-400 transition-colors"
                    >
                      908-555-6789
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="h-5 w-5 text-blue-400 mr-3 mt-1" />
                  <div>
                    <h3 className="text-gray-300 font-medium mb-1">Email</h3>
                    <a
                      href="mailto:union@clensy.com"
                      className="text-white hover:text-blue-400 transition-colors"
                    >
                      union@clensy.com
                    </a>
                  </div>
                </div>

                <div className="pt-4">
                  <Link
                    href="/contact"
                    className="inline-block w-full py-3 bg-blue-600 text-white rounded-md text-center font-medium hover:bg-blue-700 transition-colors"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>

            {/* Hours Card */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl shadow-xl overflow-hidden">
              <div className="p-6 border-b border-gray-700">
                <h2 className="text-xl font-bold text-white flex items-center">
                  <Clock className="h-5 w-5 text-blue-400 mr-2" />
                  Hours of Operation
                </h2>
              </div>
              <div className="p-6">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300 font-medium">Monday</span>
                    <span className="text-white">8:00 am - 6:00 pm</span>
                  </div>
                  <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>

                  <div className="flex justify-between items-center">
                    <span className="text-gray-300 font-medium">Tuesday</span>
                    <span className="text-white">8:00 am - 6:00 pm</span>
                  </div>
                  <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>

                  <div className="flex justify-between items-center">
                    <span className="text-gray-300 font-medium">Wednesday</span>
                    <span className="text-white">8:00 am - 6:00 pm</span>
                  </div>
                  <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>

                  <div className="flex justify-between items-center">
                    <span className="text-gray-300 font-medium">Thursday</span>
                    <span className="text-white">8:00 am - 6:00 pm</span>
                  </div>
                  <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>

                  <div className="flex justify-between items-center">
                    <span className="text-gray-300 font-medium">Friday</span>
                    <span className="text-white">8:00 am - 6:00 pm</span>
                  </div>
                  <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>

                  <div className="flex justify-between items-center">
                    <span className="text-gray-300 font-medium">Saturday</span>
                    <span className="text-white">9:00 am - 2:00 pm</span>
                  </div>
                  <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>

                  <div className="flex justify-between items-center">
                    <span className="text-gray-300 font-medium">Sunday</span>
                    <span className="text-white">Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Map and Description */}
          <div className="lg:col-span-2 space-y-8">
            {/* Interactive Map */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl shadow-xl overflow-hidden">
              <div className="p-6 border-b border-gray-700">
                <h2 className="text-xl font-bold text-white">Our Location</h2>
              </div>
              <div className="relative h-[400px] w-full">
                <Image
                  src="https://images.unsplash.com/photo-1544985361-b420d7a77043?q=80&w=2070&auto=format&fit=crop"
                  alt="Union County Map"
                  fill
                  className="object-cover z-10"
                />

                {/* Map Overlay with Pin */}
                <div className="absolute inset-0 bg-blue-900/20 z-20"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30">
                  <div className="relative">
                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center shadow-xl animate-pulse">
                      <MapPin className="h-8 w-8 text-white" />
                    </div>
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 translate-y-full bg-white px-4 py-2 rounded-full shadow-lg whitespace-nowrap">
                      <span className="font-semibold text-gray-800">
                        Westfield, NJ
                      </span>
                    </div>
                  </div>
                </div>

                {/* Get Directions Button */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-blue-600 to-blue-800 text-white py-4 px-6 flex justify-center z-30">
                  <Link
                    href="https://maps.google.com/?q=500+North+Avenue+East+Westfield+NJ+07090"
                    target="_blank"
                    className="flex items-center font-medium hover:text-blue-200 transition-colors"
                  >
                    <MapPin className="h-5 w-5 mr-2" /> GET DIRECTIONS
                  </Link>
                </div>
              </div>
            </div>

            {/* About This Location */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl shadow-xl overflow-hidden">
              <div className="p-6 border-b border-gray-700">
                <h2 className="text-xl font-bold text-white">
                  About Our Union County Cleaning Services
                </h2>
              </div>
              <div className="p-6">
                <p className="text-gray-300 mb-4 leading-relaxed">
                  Our Union County office provides comprehensive cleaning
                  services to Westfield, Elizabeth, Plainfield, and all
                  surrounding communities. We pride ourselves on delivering
                  meticulous attention to detail and exceptional customer
                  service.
                </p>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Whether you need residential cleaning for your home or
                  commercial cleaning for your business, our dedicated team uses
                  eco-friendly products and proven techniques to achieve
                  outstanding results. Schedule a consultation today to learn
                  how we can help maintain a pristine environment for your
                  space.
                </p>
                <div>
                  <Link
                    href="/contact"
                    className="inline-block px-8 py-3 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-colors"
                  >
                    Contact Us Today
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Service Areas Section */}
        <div className="mt-12">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl shadow-xl overflow-hidden">
            <div className="p-6 border-b border-gray-700">
              <h2 className="text-xl font-bold text-white">
                Service Areas in Union County
              </h2>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {serviceAreas.map((area) => (
                  <div
                    key={area}
                    className="flex items-center py-3 px-4 bg-gray-700/50 border border-gray-700 rounded-lg hover:bg-blue-900/20 hover:border-blue-500/50 transition-all"
                  >
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                    <span className="text-white">{area}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
