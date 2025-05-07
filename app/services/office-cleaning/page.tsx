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
  Building,
  Users,
  Sparkles,
} from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import CTASection from "@/components/cta-section";

export default function OfficeCleaningPage() {
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
            src="https://images.unsplash.com/photo-1497215842964-222b430dc094?q=80&w=2070&auto=format&fit=crop"
            alt="Modern clean office space"
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
                  Premium Commercial Services
                </span>
              </motion.div>

              <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-6 hero-text-shadow">
                Professional Office & <br />
                <span className="text-white">Corporate Cleaning</span>
              </h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="text-lg text-white/80 mb-8 max-w-xl"
              >
                Create a pristine work environment that boosts productivity and
                makes a lasting impression on clients and employees alike with
                our professional office cleaning services.
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
                    <Building className="h-5 w-5 mr-2 text-[#007BFF]" />
                    <span className="text-sm whitespace-nowrap">
                      Tailored for Businesses
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
              <div className="text-4xl font-bold text-black mb-2">500+</div>
              <p className="text-gray-600">Corporate Clients</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-4xl font-bold text-black mb-2">24/7</div>
              <p className="text-gray-600">Business Support</p>
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
              <p className="text-gray-600">Business Rating</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-4xl font-bold text-black mb-2">100%</div>
              <p className="text-gray-600">Satisfaction Guarantee</p>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included Section with Zigzag Layout */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our Office Cleaning Services
            </h2>
            <p className="text-lg text-gray-600">
              We provide comprehensive cleaning solutions tailored to meet the
              unique needs of offices and corporate environments.
            </p>
          </div>

          {/* Item 1 - Left image, right text */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-lg order-2 lg:order-1">
              <Image
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1932&auto=format&fit=crop"
                alt="Office reception area cleaning"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="text-2xl font-bold mb-4">
                Reception & Common Areas
              </h3>
              <p className="text-gray-600 mb-6">
                First impressions matter. Our team ensures your reception areas
                and common spaces are immaculate, creating a welcoming
                environment for clients and staff.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-3 text-[#007BFF] flex-shrink-0 mt-0.5" />
                  <span>
                    Dusting and polishing of reception desks and furniture
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-3 text-[#007BFF] flex-shrink-0 mt-0.5" />
                  <span>Vacuuming and spot cleaning of carpets and mats</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-3 text-[#007BFF] flex-shrink-0 mt-0.5" />
                  <span>Glass cleaning of entrance doors and partitions</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-3 text-[#007BFF] flex-shrink-0 mt-0.5" />
                  <span>Sanitizing of high-touch surfaces and fixtures</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Item 2 - Right image, left text */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                Workstations & Office Areas
              </h3>
              <p className="text-gray-600 mb-6">
                Create a productive environment with meticulously cleaned
                workspaces that boost employee morale and efficiency.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-3 text-[#007BFF] flex-shrink-0 mt-0.5" />
                  <span>
                    Dusting and wiping of desks, monitors, and equipment
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-3 text-[#007BFF] flex-shrink-0 mt-0.5" />
                  <span>
                    Sanitizing of phones, keyboards, and office supplies
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-3 text-[#007BFF] flex-shrink-0 mt-0.5" />
                  <span>Emptying and cleaning of waste receptacles</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-3 text-[#007BFF] flex-shrink-0 mt-0.5" />
                  <span>Detailed cleaning of desk chairs and furniture</span>
                </li>
              </ul>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1604328698692-f76ea9498e76?q=80&w=1470&auto=format&fit=crop"
                alt="Office workspace cleaning"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Item 3 - Left image, right text */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-lg order-2 lg:order-1">
              <Image
                src="https://images.unsplash.com/photo-1544476915-ed1370594142?q=80&w=1974&auto=format&fit=crop"
                alt="Meeting room cleaning"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="text-2xl font-bold mb-4">
                Meeting & Conference Rooms
              </h3>
              <p className="text-gray-600 mb-6">
                Ensure your meeting spaces are always presentation-ready with
                our detailed cleaning services designed for collaborative areas.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-3 text-[#007BFF] flex-shrink-0 mt-0.5" />
                  <span>
                    Cleaning and polishing of conference tables and furniture
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-3 text-[#007BFF] flex-shrink-0 mt-0.5" />
                  <span>Dusting of projectors, screens, and AV equipment</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-3 text-[#007BFF] flex-shrink-0 mt-0.5" />
                  <span>
                    Sanitizing of whiteboards and shared meeting tools
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-3 text-[#007BFF] flex-shrink-0 mt-0.5" />
                  <span>
                    Vacuuming and spot treatment of carpets and flooring
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Item 4 - Right image, left text */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                Restrooms & Break Areas
              </h3>
              <p className="text-gray-600 mb-6">
                Maintain impeccable hygiene in employee facilities with our
                thorough cleaning and sanitization services.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-3 text-[#007BFF] flex-shrink-0 mt-0.5" />
                  <span>
                    Deep cleaning and sanitizing of all restroom fixtures
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-3 text-[#007BFF] flex-shrink-0 mt-0.5" />
                  <span>Disinfection of kitchen counters and appliances</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-3 text-[#007BFF] flex-shrink-0 mt-0.5" />
                  <span>
                    Restocking of soap, paper towels, and toilet paper
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-3 text-[#007BFF] flex-shrink-0 mt-0.5" />
                  <span>Cleaning of sinks, microwaves, and refrigerators</span>
                </li>
              </ul>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1623194416248-50d49995c1b9?q=80&w=1974&auto=format&fit=crop"
                alt="Office break room cleaning"
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
              Why Choose Clensy for Your Office Cleaning
            </h2>
            <p className="text-lg text-gray-600">
              We understand the unique cleaning requirements of professional
              work environments and deliver reliable, consistent service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-50 rounded-full mb-6">
                <Users className="h-8 w-8 text-[#007BFF]" />
              </div>
              <h3 className="text-xl font-bold mb-3">Trained Professionals</h3>
              <p className="text-gray-600">
                Our cleaning team consists of vetted, background-checked
                professionals with specific training in commercial cleaning
                protocols.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-50 rounded-full mb-6">
                <Clock className="h-8 w-8 text-[#007BFF]" />
              </div>
              <h3 className="text-xl font-bold mb-3">Flexible Scheduling</h3>
              <p className="text-gray-600">
                We work around your business hours, providing after-hours, early
                morning, or weekend services to minimize disruption to your
                operations.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-50 rounded-full mb-6">
                <Sparkles className="h-8 w-8 text-[#007BFF]" />
              </div>
              <h3 className="text-xl font-bold mb-3">Eco-Friendly Practices</h3>
              <p className="text-gray-600">
                We use environmentally responsible cleaning products and
                practices that are safe for your employees and better for the
                planet.
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
              What Our Corporate Clients Say
            </h2>
            <p className="text-lg text-gray-600">
              Discover why businesses trust us for their professional cleaning
              needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="mr-4">
                  <div className="w-12 h-12 rounded-full bg-[#007BFF] flex items-center justify-center text-white font-bold">
                    T
                  </div>
                </div>
                <div>
                  <h4 className="font-bold">Thomas Wilson</h4>
                  <p className="text-sm text-gray-500">
                    Office Manager, TechCorp Inc.
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
                "Clensy has transformed our office space. Their attention to
                detail and consistent quality have made a significant difference
                in our workplace environment. Our employees and clients
                regularly comment on how clean our offices look."
              </p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="mr-4">
                  <div className="w-12 h-12 rounded-full bg-[#007BFF] flex items-center justify-center text-white font-bold">
                    J
                  </div>
                </div>
                <div>
                  <h4 className="font-bold">Jennifer Rodriguez</h4>
                  <p className="text-sm text-gray-500">
                    Operations Director, Atlas Financial
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
                "We've tried several commercial cleaning companies over the
                years, but Clensy stands out for their reliability and
                professionalism. Their team is thorough, punctual, and
                accommodating to our specific needs. A truly outstanding
                service!"
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
              Common questions about our office cleaning services.
            </p>
          </div>

          <div className="max-w-3xl mx-auto divide-y divide-gray-200">
            {/* Question 1 */}
            <div className="py-6">
              <h3 className="text-lg font-bold mb-2">
                How often do you recommend cleaning for office spaces?
              </h3>
              <p className="text-gray-600">
                Most offices benefit from daily or every-other-day cleaning for
                high-traffic areas like reception, restrooms, and break rooms.
                For workstations and meeting rooms, 2-3 times per week is
                typically sufficient. We can create a custom schedule based on
                your specific needs and budget.
              </p>
            </div>

            {/* Question 2 */}
            <div className="py-6">
              <h3 className="text-lg font-bold mb-2">
                Do your cleaning professionals work after business hours?
              </h3>
              <p className="text-gray-600">
                Yes, we understand that cleaning during business hours can
                disrupt your operations. Most of our corporate clients prefer
                after-hours cleaning, and we're happy to accommodate evening,
                early morning, or weekend schedules to minimize disruption to
                your business.
              </p>
            </div>

            {/* Question 3 */}
            <div className="py-6">
              <h3 className="text-lg font-bold mb-2">
                Are your cleaning products safe for office environments?
              </h3>
              <p className="text-gray-600">
                We use commercial-grade, eco-friendly cleaning products that are
                effective yet safe for office environments. Our cleaning
                solutions are low-odor and quick-drying, ensuring your office is
                fresh and ready for use without lingering chemical smells.
              </p>
            </div>

            {/* Question 4 */}
            <div className="py-6">
              <h3 className="text-lg font-bold mb-2">
                Can you accommodate specialized cleaning needs for our office?
              </h3>
              <p className="text-gray-600">
                Absolutely. We understand that every office has unique
                requirements. Whether you need specialized cleaning for
                sensitive electronic equipment, high-security areas, or have
                specific protocols for cleaning certain spaces, we can tailor
                our services to meet your exact specifications.
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
