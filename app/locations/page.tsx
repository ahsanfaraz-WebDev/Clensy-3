"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, ArrowRight, Calendar } from "lucide-react";

export default function LocationsPage() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // County locations data
  const locations = [
    {
      county: "Bergen County",
      address: "600 Kinderkamack Road, Suite 200",
      city: "Oradell, NJ 07649",
      phone: "201-555-7890",
      image:
        "https://images.unsplash.com/photo-1611516491426-03025e6043c8?q=80&w=2069&auto=format&fit=crop",
      slug: "bergen",
    },
    {
      county: "Hudson County",
      address: "88 River Street, Suite 302",
      city: "Hoboken, NJ 07030",
      phone: "201-555-9876",
      image:
        "https://images.unsplash.com/photo-1626214022303-83c41ef92691?q=80&w=2070&auto=format&fit=crop",
      slug: "hudson",
    },
    {
      county: "Essex County",
      address: "280 South Harrison Street, Suite 1F",
      city: "East Orange, NJ 07018",
      phone: "973-555-1234",
      image:
        "https://images.unsplash.com/photo-1553697388-94e804e2f0f6?q=80&w=2070&auto=format&fit=crop",
      slug: "essex",
    },
    {
      county: "Passaic County",
      address: "1225 Clifton Avenue, Suite 3B",
      city: "Clifton, NJ 07013",
      phone: "973-555-4321",
      image:
        "https://images.unsplash.com/photo-1524055988636-436cfa46e59e?q=80&w=2070&auto=format&fit=crop",
      slug: "passaic",
    },
    {
      county: "Union County",
      address: "500 North Avenue East, Suite 400",
      city: "Westfield, NJ 07090",
      phone: "908-555-6789",
      image:
        "https://images.unsplash.com/photo-1554469384-e58fac937bb4?q=80&w=2070&auto=format&fit=crop",
      slug: "union",
    },
    {
      county: "Morris County",
      address: "10 DeHart Street, Suite 103",
      city: "Morristown, NJ 07960",
      phone: "973-555-2468",
      image:
        "https://images.unsplash.com/photo-1496889050590-4a52e9d3b1ce?q=80&w=2070&auto=format&fit=crop",
      slug: "morris",
    },
  ];

  return (
    <main className="overflow-x-hidden">
      {/* Hero Section styled like services page */}
      <section className="relative min-h-[85vh] bg-black pt-16">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/cleaning-hero.jpg"
            alt="Professional Cleaning Service"
            fill
            className="object-cover opacity-70"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>
      </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center min-h-[calc(85vh-64px)]">
            {/* Text content */}
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                Clensy Service Locations
              </h1>
              <p className="text-lg text-gray-200 mb-8 max-w-xl">
                Find a Clensy cleaning service location near you. We provide
                professional cleaning services throughout Northern New Jersey.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-block px-6 py-3 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-colors"
                >
                  Contact Us Today
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 bg-transparent border border-white text-white rounded-md font-medium hover:bg-white/10 transition-colors"
                >
                  <Calendar className="mr-2 h-5 w-5" /> Book Now
                </Link>
              </div>
            </div>

            {/* Right side - Empty space or image */}
            <div className="hidden md:block">
              <Image
                src="/images/cleaning-hero.jpg"
                alt="Professional Cleaning Service"
                width={500}
                height={300}
                className="rounded-md shadow-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Locations Grid */}
      <section className="relative py-16 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-12 pb-2 border-b border-blue-500 inline-block">
            Our Service Locations
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {locations.map((location) => (
              <motion.div
                key={location.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white/95 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all"
              >
                <div className="relative h-64">
                  <Image
                    src={location.image}
                    alt={`${location.county} office`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
                    <h3 className="text-2xl font-bold text-white p-6">
                      {location.county}
                    </h3>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-start mb-4">
                    <MapPin className="h-5 w-5 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                    <div>
                      <p className="text-gray-700">{location.address}</p>
                      <p className="text-gray-700">{location.city}</p>
                    </div>
                  </div>
                  <Link
                    href={`/locations/${location.slug}`}
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium mt-4 p-2 border border-blue-600 rounded-md hover:bg-blue-50 transition-all"
                  >
                    View Details <ArrowRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Service Area Overview */}
          <div className="mt-20 bg-white/95 p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b border-blue-500 inline-block">
              Our Service Area
            </h2>
            <p className="text-gray-700 mb-4">
              Clensy proudly serves Bergen County, Hudson County, Essex County,
              Passaic County, Union County, and Morris County with professional
              cleaning services. Our strategically located offices allow us to
              provide prompt and reliable service throughout Northern New
              Jersey.
            </p>
            <p className="text-gray-700 mb-6">
              Each of our locations is staffed with trained professionals who
              understand the unique cleaning needs of their local communities.
              Whether you're in a busy urban area or a quiet suburban
              neighborhood, we have the expertise to keep your space spotless.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/services"
                className="inline-block px-6 py-3 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-colors"
              >
                Our Services
              </Link>
              <Link
                href="/contact"
                className="inline-block px-6 py-3 border border-blue-600 text-blue-600 rounded-md font-medium hover:bg-blue-50 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
