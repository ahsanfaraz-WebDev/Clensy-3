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

export default function MorrisCountyPage() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Service areas in Morris County
  const serviceAreas = [
    "Morristown",
    "Parsippany",
    "Troy Hills",
    "Rockaway",
    "Mount Olive",
    "Roxbury",
    "Randolph",
    "Chatham",
    "Denville",
    "Florham Park",
    "Hanover",
    "East Hanover",
    "Madison",
    "Boonton",
    "Butler",
    "Kinnelon",
    "Lincoln Park",
    "Morris Plains",
    "Mountain Lakes",
    "Chester",
    "Long Hill",
    "Mendham",
    "Mount Arlington",
    "Pequannock",
    "Riverdale",
  ];

  return (
    <main className="overflow-x-hidden">
      {/* Hero Section styled like services page */}
      <section className="relative min-h-[85vh] bg-black pt-16">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1496889050590-4a52e9d3b1ce?q=80&w=2070&auto=format&fit=crop"
            alt="Morris County Skyline"
            fill
            className="object-cover brightness-50"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 gap-8 items-center min-h-[calc(85vh-64px)]">
            <div className="flex flex-col justify-end h-full pb-16">
              <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 tracking-tight">
                Morris County
              </h1>
              <div className="flex items-center text-gray-300 mb-6">
                <MapPin className="h-5 w-5 text-blue-400 mr-2" />
                <p>10 DeHart Street, Suite 103, Morristown, NJ 07960</p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="https://maps.google.com/?q=10+DeHart+Street+Morristown+NJ+07960"
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
      </section>

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
            <span className="text-white font-medium">Morris County</span>
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
                    <p className="text-white">10 DeHart Street, Suite 103</p>
                    <p className="text-white">Morristown, NJ 07960</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="h-5 w-5 text-blue-400 mr-3 mt-1" />
                  <div>
                    <h3 className="text-gray-300 font-medium mb-1">Phone</h3>
                    <a
                      href="tel:973-555-2468"
                      className="text-white hover:text-blue-400 transition-colors"
                    >
                      973-555-2468
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="h-5 w-5 text-blue-400 mr-3 mt-1" />
                  <div>
                    <h3 className="text-gray-300 font-medium mb-1">Email</h3>
                    <a
                      href="mailto:morris@clensy.com"
                      className="text-white hover:text-blue-400 transition-colors"
                    >
                      morris@clensy.com
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
                    <span className="text-white">10:00 am - 2:00 pm</span>
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
                  src="https://images.unsplash.com/photo-1558767489-dac14eb26d1c?q=80&w=1876&auto=format&fit=crop"
                  alt="Morris County Map"
                  fill
                  className="object-cover z-10"
                />

                {/* Map Overlay with Pin */}
                <div className="absolute inset-0 bg-blue-900/20 z-20"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30">
                  <div className="flex flex-col items-center">
                    <div className="relative">
                      <div className="absolute -top-1 -left-1 w-10 h-10 bg-blue-500/50 rounded-full animate-ping"></div>
                      <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center relative z-10">
                        <MapPin className="h-5 w-5 text-white" />
                      </div>
                    </div>
                    <div className="w-1 h-6 bg-blue-600 mt-1"></div>
                    <div className="bg-white px-4 py-2 rounded-lg shadow-lg mt-2">
                      <h3 className="font-medium text-gray-900">
                        Clensy Morris County
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* About This Location */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl shadow-xl overflow-hidden">
              <div className="p-6 border-b border-gray-700">
                <h2 className="text-xl font-bold text-white">
                  About Our Morris County Location
                </h2>
              </div>
              <div className="p-6">
                <p className="text-gray-300 mb-4">
                  Our Morris County location is centrally positioned in historic
                  Morristown, making it convenient for clients throughout the
                  region. From this location, we provide our full range of
                  cleaning services to homes and businesses in Morristown,
                  Parsippany, Rockaway, and surrounding areas.
                </p>
                <p className="text-gray-300 mb-4">
                  The Morris County team consists of experienced cleaning
                  professionals who are familiar with the unique needs of local
                  homes and businesses. Whether you live in a historic property
                  in Morristown or a modern home in Parsippany, our team has the
                  expertise to provide exceptional cleaning services.
                </p>
                <p className="text-gray-300">
                  We take pride in serving the Morris County community and look
                  forward to helping you maintain a clean, healthy environment
                  in your home or business.
                </p>
              </div>
            </div>

            {/* Services Offered */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl shadow-xl overflow-hidden">
              <div className="p-6 border-b border-gray-700">
                <h2 className="text-xl font-bold text-white">
                  Services Offered
                </h2>
              </div>
              <div className="p-6">
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-300">
                  <li className="flex items-center">
                    <div className="h-2 w-2 bg-blue-400 rounded-full mr-2"></div>
                    Residential Cleaning
                  </li>
                  <li className="flex items-center">
                    <div className="h-2 w-2 bg-blue-400 rounded-full mr-2"></div>
                    Deep Cleaning
                  </li>
                  <li className="flex items-center">
                    <div className="h-2 w-2 bg-blue-400 rounded-full mr-2"></div>
                    Move In/Out Cleaning
                  </li>
                  <li className="flex items-center">
                    <div className="h-2 w-2 bg-blue-400 rounded-full mr-2"></div>
                    Post-Construction Cleaning
                  </li>
                  <li className="flex items-center">
                    <div className="h-2 w-2 bg-blue-400 rounded-full mr-2"></div>
                    Office Cleaning
                  </li>
                  <li className="flex items-center">
                    <div className="h-2 w-2 bg-blue-400 rounded-full mr-2"></div>
                    Commercial Cleaning
                  </li>
                  <li className="flex items-center">
                    <div className="h-2 w-2 bg-blue-400 rounded-full mr-2"></div>
                    Airbnb & Rental Cleaning
                  </li>
                  <li className="flex items-center">
                    <div className="h-2 w-2 bg-blue-400 rounded-full mr-2"></div>
                    Customized Cleaning Plans
                  </li>
                </ul>
                <div className="mt-6">
                  <Link
                    href="/services"
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium"
                  >
                    View All Services
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Service Areas Grid */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-white mb-8">
            Areas We Serve in Morris County
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {serviceAreas.map((area, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-4 text-center hover:shadow-lg hover:from-gray-700 transition-all"
              >
                <p className="text-white">{area}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-br from-blue-900 to-blue-800 rounded-xl p-8 shadow-xl">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white mb-4">
              Ready to Schedule Your Cleaning?
            </h2>
            <p className="text-blue-100 mb-6 max-w-3xl mx-auto">
              Contact our Morris County office today to discuss your cleaning
              needs and schedule service. We offer flexible appointments and
              customized cleaning plans.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="px-8 py-3 bg-white text-blue-900 rounded-md font-medium hover:bg-blue-50 transition-colors"
              >
                Contact Us
              </Link>
              <Link
                href="/pricing"
                className="px-8 py-3 bg-transparent border border-white text-white rounded-md font-medium hover:bg-white/10 transition-colors"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
