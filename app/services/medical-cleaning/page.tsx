"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Check,
  ArrowRight,
  Star,
  Clock,
  Shield,
  Heart,
  Stethoscope,
  Activity,
} from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import CTASection from "@/components/cta-section";

export default function MedicalCleaningPage() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <main className="overflow-x-hidden">
      <Navbar />

      {/* Split Hero Section */}
      <section className="relative min-h-[85vh] bg-black pt-16">
        {/* Background image with overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1974&auto=format&fit=crop"
            alt="Clean medical facility hallway"
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
                  Premium Healthcare Services
                </span>
              </motion.div>

              <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-6 hero-text-shadow">
                Medical & Healthcare <br />
                <span className="text-white">Facility Cleaning</span>
              </h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="text-lg text-white/80 mb-8 max-w-xl"
              >
                Specialized cleaning and sanitization services designed to meet
                the stringent requirements of healthcare environments, ensuring
                safety for patients and staff.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link
                  href="/contact"
                  className="bg-white text-black hover:bg-white/90 px-8 py-3 rounded-full text-sm font-medium inline-flex items-center justify-center transition-all duration-300 w-48"
                >
                  <span className="text-center w-full">Get a Free Quote</span>
                </Link>

                <div className="flex items-center sm:mt-0 mt-4">
                  <div className="flex items-center text-white/90 mr-8">
                    <Stethoscope className="h-5 w-5 mr-2 text-[#007BFF]" />
                    <span className="text-sm whitespace-nowrap">
                      Healthcare Compliant
                    </span>
                  </div>

                  <div className="flex items-center text-white/90">
                    <Shield className="h-5 w-5 mr-2 text-[#007BFF]" />
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
              <div className="text-4xl font-bold text-black mb-2">350+</div>
              <p className="text-gray-600">Healthcare Clients</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-4xl font-bold text-black mb-2">24/7</div>
              <p className="text-gray-600">Healthcare Support</p>
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
              <p className="text-gray-600">Industry Rating</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-4xl font-bold text-black mb-2">100%</div>
              <p className="text-gray-600">Compliance Guarantee</p>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included Section with Zigzag Layout */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our Healthcare Cleaning Services
            </h2>
            <p className="text-lg text-gray-600">
              Specialized cleaning solutions tailored to the unique demands and
              strict requirements of healthcare environments.
            </p>
          </div>

          {/* Item 1 - Left image, right text */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-lg order-2 lg:order-1">
              <Image
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop"
                alt="Medical reception and waiting areas"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="text-2xl font-bold mb-4">
                Reception & Waiting Areas
              </h3>
              <p className="text-gray-600 mb-6">
                Create a reassuring first impression for patients with
                meticulously cleaned reception and waiting areas that inspire
                confidence.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-3 text-[#007BFF] flex-shrink-0 mt-0.5" />
                  <span>Thorough disinfection of all seating and surfaces</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-3 text-[#007BFF] flex-shrink-0 mt-0.5" />
                  <span>
                    Sanitization of high-touch areas like check-in kiosks
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-3 text-[#007BFF] flex-shrink-0 mt-0.5" />
                  <span>
                    Specialized cleaning of magazine racks and displays
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-3 text-[#007BFF] flex-shrink-0 mt-0.5" />
                  <span>
                    HEPA-filtered vacuuming of all floors and upholstery
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Item 2 - Right image, left text */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                Examination & Treatment Rooms
              </h3>
              <p className="text-gray-600 mb-6">
                Our specialized cleaning protocols ensure examination and
                treatment rooms meet the highest standards of hygiene and
                infection control.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-3 text-[#007BFF] flex-shrink-0 mt-0.5" />
                  <span>Terminal cleaning between patient visits</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-3 text-[#007BFF] flex-shrink-0 mt-0.5" />
                  <span>Disinfection of examination tables and equipment</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-3 text-[#007BFF] flex-shrink-0 mt-0.5" />
                  <span>Proper disposal of medical waste</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-3 text-[#007BFF] flex-shrink-0 mt-0.5" />
                  <span>Application of hospital-grade disinfectants</span>
                </li>
              </ul>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2070&auto=format&fit=crop"
                alt="Medical examination room"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Item 3 - Left image, right text */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-lg order-2 lg:order-1">
              <Image
                src="https://images.unsplash.com/photo-1527613426441-4da17471b66d?q=80&w=2052&auto=format&fit=crop"
                alt="Medical laboratory cleaning"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="text-2xl font-bold mb-4">
                Laboratories & Specialized Areas
              </h3>
              <p className="text-gray-600 mb-6">
                Customized cleaning protocols for sensitive laboratory
                environments that require precision cleaning and sanitization.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-3 text-[#007BFF] flex-shrink-0 mt-0.5" />
                  <span>
                    Specialized cleaning of laboratory surfaces and equipment
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-3 text-[#007BFF] flex-shrink-0 mt-0.5" />
                  <span>
                    Adherence to strict contamination prevention protocols
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-3 text-[#007BFF] flex-shrink-0 mt-0.5" />
                  <span>
                    Careful handling of sensitive instruments and technology
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-3 text-[#007BFF] flex-shrink-0 mt-0.5" />
                  <span>Compliance with laboratory-specific regulations</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Item 4 - Right image, left text */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                Restrooms & Common Areas
              </h3>
              <p className="text-gray-600 mb-6">
                Enhanced cleaning and disinfection protocols for healthcare
                facility restrooms and common areas to minimize
                cross-contamination.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-3 text-[#007BFF] flex-shrink-0 mt-0.5" />
                  <span>
                    Rigorous sanitization of all fixtures and surfaces
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-3 text-[#007BFF] flex-shrink-0 mt-0.5" />
                  <span>
                    Use of EPA-approved disinfectants effective against
                    pathogens
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-3 text-[#007BFF] flex-shrink-0 mt-0.5" />
                  <span>
                    Regular replenishment of soap, sanitizer, and paper products
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-3 text-[#007BFF] flex-shrink-0 mt-0.5" />
                  <span>
                    Cleaning log maintenance for compliance verification
                  </span>
                </li>
              </ul>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1568484601142-8cbe882ca900?q=80&w=1974&auto=format&fit=crop"
                alt="Medical facility restroom"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why Choose Clensy for Healthcare Cleaning
            </h2>
            <p className="text-lg text-gray-600">
              Our specialized expertise and commitment to healthcare-specific
              protocols set us apart in medical facility cleaning.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-50 rounded-full mb-6">
                <Shield className="h-8 w-8 text-[#007BFF]" />
              </div>
              <h3 className="text-xl font-bold mb-3">Healthcare Compliance</h3>
              <p className="text-gray-600">
                We adhere to all healthcare cleaning regulations, including CDC
                guidelines, OSHA requirements, and Joint Commission standards.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-50 rounded-full mb-6">
                <Heart className="h-8 w-8 text-[#007BFF]" />
              </div>
              <h3 className="text-xl font-bold mb-3">Specialized Training</h3>
              <p className="text-gray-600">
                Our cleaning professionals undergo rigorous healthcare-specific
                training in infection control, bloodborne pathogens, and medical
                waste handling.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-50 rounded-full mb-6">
                <Activity className="h-8 w-8 text-[#007BFF]" />
              </div>
              <h3 className="text-xl font-bold mb-3">Advanced Technology</h3>
              <p className="text-gray-600">
                We employ state-of-the-art equipment including electrostatic
                sprayers, UV-C disinfection, and microfiber systems for superior
                results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              What Our Healthcare Clients Say
            </h2>
            <p className="text-lg text-gray-600">
              Discover why healthcare facilities trust us with their specialized
              cleaning needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="mr-4">
                  <div className="w-12 h-12 rounded-full bg-[#007BFF] flex items-center justify-center text-white font-bold">
                    D
                  </div>
                </div>
                <div>
                  <h4 className="font-bold">Dr. Michael Chen</h4>
                  <p className="text-sm text-gray-500">
                    Medical Director, Northside Medical Center
                  </p>
                </div>
              </div>
              <div className="flex mb-4">
                <Star className="h-5 w-5 text-yellow-500 fill-current" />
                <Star className="h-5 w-5 text-yellow-500 fill-current" />
                <Star className="h-5 w-5 text-yellow-500 fill-current" />
                <Star className="h-5 w-5 text-yellow-500 fill-current" />
                <Star className="h-5 w-5 text-yellow-500 fill-current" />
              </div>
              <p className="text-gray-600">
                "Clensy's understanding of healthcare facility cleaning is
                unmatched. They consistently maintain our clinic to the highest
                standards, giving our staff and patients confidence in our
                infection control practices."
              </p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="mr-4">
                  <div className="w-12 h-12 rounded-full bg-[#007BFF] flex items-center justify-center text-white font-bold">
                    S
                  </div>
                </div>
                <div>
                  <h4 className="font-bold">Sarah Johnson, RN</h4>
                  <p className="text-sm text-gray-500">
                    Facility Manager, Eastside Dental Group
                  </p>
                </div>
              </div>
              <div className="flex mb-4">
                <Star className="h-5 w-5 text-yellow-500 fill-current" />
                <Star className="h-5 w-5 text-yellow-500 fill-current" />
                <Star className="h-5 w-5 text-yellow-500 fill-current" />
                <Star className="h-5 w-5 text-yellow-500 fill-current" />
                <Star className="h-5 w-5 text-yellow-500 fill-current" />
              </div>
              <p className="text-gray-600">
                "Since partnering with Clensy, our infection control metrics
                have improved significantly. Their attention to detail in our
                operatories and sterilization areas has been exceptional. I
                appreciate their documentation and adherence to our protocols."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Common questions about our healthcare facility cleaning services.
            </p>
          </div>

          <div className="max-w-3xl mx-auto divide-y divide-gray-200">
            {/* Question 1 */}
            <div className="py-6">
              <h3 className="text-lg font-bold mb-2">
                What healthcare-specific certifications do your cleaners have?
              </h3>
              <p className="text-gray-600">
                Our medical facility cleaning teams are certified in Bloodborne
                Pathogen Safety (BBP), Healthcare Cleaning and Disinfection, and
                Environmental Services in Healthcare Facilities. We also
                maintain certifications from GBAC (Global Biorisk Advisory
                Council) and follow CDC and OSHA guidelines.
              </p>
            </div>

            {/* Question 2 */}
            <div className="py-6">
              <h3 className="text-lg font-bold mb-2">
                How do you handle different areas with varying risk levels in
                healthcare facilities?
              </h3>
              <p className="text-gray-600">
                We implement zone-based cleaning protocols that categorize areas
                by risk level (high, medium, and low). Each zone has specific
                cleaning frequencies, disinfection products, and verification
                procedures appropriate to the level of patient care and
                contamination risk in that area.
              </p>
            </div>

            {/* Question 3 */}
            <div className="py-6">
              <h3 className="text-lg font-bold mb-2">
                What infection control measures do you implement?
              </h3>
              <p className="text-gray-600">
                Our comprehensive infection control program includes color-coded
                microfiber systems to prevent cross-contamination, use of
                EPA-registered hospital-grade disinfectants with appropriate
                dwell times, electrostatic spraying for comprehensive surface
                coverage, and detailed documentation of all cleaning and
                disinfection activities.
              </p>
            </div>

            {/* Question 4 */}
            <div className="py-6">
              <h3 className="text-lg font-bold mb-2">
                Can you work around our patient schedules and facility
                operations?
              </h3>
              <p className="text-gray-600">
                Absolutely. We understand the unique operational requirements of
                healthcare facilities. Our teams can work during off-hours,
                overnight, or on rotating schedules to minimize disruption. We
                also have rapid-response protocols for immediate cleaning needs
                between patient visits or procedures.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />

      <Footer />
    </main>
  );
}
