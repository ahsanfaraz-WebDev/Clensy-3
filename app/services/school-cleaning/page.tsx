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
  BookOpen,
  Pencil,
  Sparkles,
} from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import CTASection from "@/components/cta-section";

export default function SchoolCleaningPage() {
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
            src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=2032&auto=format&fit=crop"
            alt="Clean school hallway"
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
                  Premium Educational Facility Services
                </span>
              </motion.div>

              <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-6 hero-text-shadow">
                School & Childcare <br />
                <span className="text-white">Cleaning Services</span>
              </h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="text-lg text-white/80 mb-8 max-w-xl"
              >
                Specialized cleaning and sanitization services designed for
                educational environments, ensuring a healthy, safe space for
                students, teachers, and staff.
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
                    <BookOpen className="h-5 w-5 mr-2 text-[#007BFF]" />
                    <span className="text-sm whitespace-nowrap">
                      Education Specialists
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
              <div className="text-4xl font-bold text-black mb-2">450+</div>
              <p className="text-gray-600">Educational Facilities</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-4xl font-bold text-black mb-2">24/7</div>
              <p className="text-gray-600">School Support</p>
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
              <p className="text-gray-600">Safety Guarantee</p>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included Section with Zigzag Layout */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our Educational Facility Cleaning Services
            </h2>
            <p className="text-lg text-gray-600">
              We provide comprehensive cleaning solutions tailored to meet the
              unique demands of schools, daycares, and educational environments.
            </p>
          </div>

          {/* Item 1 - Left image, right text */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-lg order-2 lg:order-1">
              <Image
                src="https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=2072&auto=format&fit=crop"
                alt="School classroom cleaning"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="text-2xl font-bold mb-4">
                Classrooms & Learning Spaces
              </h3>
              <p className="text-gray-600 mb-6">
                Create an optimal learning environment with thoroughly sanitized
                classrooms, desks, and educational equipment.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-3 text-[#007BFF] flex-shrink-0 mt-0.5" />
                  <span>
                    Disinfection of desks, tables, and classroom furniture
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-3 text-[#007BFF] flex-shrink-0 mt-0.5" />
                  <span>
                    Cleaning of whiteboards, smartboards, and teaching surfaces
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-3 text-[#007BFF] flex-shrink-0 mt-0.5" />
                  <span>
                    Sanitization of shared supplies and educational materials
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-3 text-[#007BFF] flex-shrink-0 mt-0.5" />
                  <span>Thorough vacuuming and floor cleaning</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Item 2 - Right image, left text */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                Restrooms & Handwashing Areas
              </h3>
              <p className="text-gray-600 mb-6">
                We provide meticulous cleaning and disinfection of all restroom
                facilities, focusing on hygiene and germ prevention.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-3 text-[#007BFF] flex-shrink-0 mt-0.5" />
                  <span>Deep cleaning of all toilet and sink fixtures</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-3 text-[#007BFF] flex-shrink-0 mt-0.5" />
                  <span>
                    Sanitization of all touchpoints, handles, and surfaces
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-3 text-[#007BFF] flex-shrink-0 mt-0.5" />
                  <span>
                    Regular replenishment of soap, paper towels, and toilet
                    paper
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-3 text-[#007BFF] flex-shrink-0 mt-0.5" />
                  <span>Floor disinfection and sanitization</span>
                </li>
              </ul>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070&auto=format&fit=crop"
                alt="School restroom cleaning"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Item 3 - Left image, right text */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-lg order-2 lg:order-1">
              <Image
                src="https://images.unsplash.com/photo-1564429097439-eac9b1eb5eac?q=80&w=2071&auto=format&fit=crop"
                alt="School playground cleaning"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="text-2xl font-bold mb-4">
                Play Areas & Recreational Spaces
              </h3>
              <p className="text-gray-600 mb-6">
                Keep play equipment, gyms, and recreational areas clean and safe
                for children of all ages.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-3 text-[#007BFF] flex-shrink-0 mt-0.5" />
                  <span>
                    Cleaning and sanitization of playground equipment and toys
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-3 text-[#007BFF] flex-shrink-0 mt-0.5" />
                  <span>
                    Disinfection of gym equipment and sports facilities
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-3 text-[#007BFF] flex-shrink-0 mt-0.5" />
                  <span>
                    Proper cleaning of play mats, carpets, and soft surfaces
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-3 text-[#007BFF] flex-shrink-0 mt-0.5" />
                  <span>
                    Special care for recreational areas used by younger children
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why Choose Clensy for Your Educational Facility
            </h2>
            <p className="text-lg text-gray-600">
              We understand the unique cleaning requirements of educational
              environments and deliver specialized solutions that promote
              health, safety, and learning.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-50 rounded-full mb-6">
                <Shield className="h-8 w-8 text-[#007BFF]" />
              </div>
              <h3 className="text-xl font-bold mb-3">Child-Safe Products</h3>
              <p className="text-gray-600">
                We use environmentally friendly, non-toxic cleaning products
                that are effective against germs yet safe for children and
                educational environments.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-50 rounded-full mb-6">
                <Clock className="h-8 w-8 text-[#007BFF]" />
              </div>
              <h3 className="text-xl font-bold mb-3">Flexible Scheduling</h3>
              <p className="text-gray-600">
                We adapt to your school's schedule, offering cleaning services
                after hours, during weekends, or during holiday breaks to
                minimize disruption to educational activities.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-50 rounded-full mb-6">
                <Pencil className="h-8 w-8 text-[#007BFF]" />
              </div>
              <h3 className="text-xl font-bold mb-3">Education Experience</h3>
              <p className="text-gray-600">
                Our cleaning staff is specially trained in the unique
                requirements of educational facilities, understanding the
                importance of both cleanliness and safety.
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
              What Our Educational Clients Say
            </h2>
            <p className="text-lg text-gray-600">
              Discover why schools and childcare centers trust us for their
              specialized cleaning needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="mr-4">
                  <div className="w-12 h-12 rounded-full bg-[#007BFF] flex items-center justify-center text-white font-bold">
                    P
                  </div>
                </div>
                <div>
                  <h4 className="font-bold">Patricia Morgan</h4>
                  <p className="text-sm text-gray-500">
                    Principal, Lincoln Elementary School
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
                "Clensy has been instrumental in maintaining the cleanliness and
                health standards at our school. Their attention to detail,
                especially in high-touch areas during cold and flu season, has
                helped reduce absenteeism among both students and staff."
              </p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="mr-4">
                  <div className="w-12 h-12 rounded-full bg-[#007BFF] flex items-center justify-center text-white font-bold">
                    D
                  </div>
                </div>
                <div>
                  <h4 className="font-bold">David Chen</h4>
                  <p className="text-sm text-gray-500">
                    Director, Bright Horizons Daycare
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
                "As a childcare facility, we have stringent cleanliness
                requirements. Clensy doesn't just meet them—they exceed them.
                Their team understands the unique needs of working with young
                children, using safe products and paying special attention to
                toys and play areas. Parents regularly comment on how clean our
                facility looks and smells."
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
              Common questions about our educational facility cleaning services.
            </p>
          </div>

          <div className="max-w-3xl mx-auto divide-y divide-gray-200">
            {/* Question 1 */}
            <div className="py-6">
              <h3 className="text-lg font-bold mb-2">
                Are your cleaning products safe for children?
              </h3>
              <p className="text-gray-600">
                Yes, we exclusively use child-safe, environmentally friendly
                cleaning products in educational settings. Our disinfectants are
                EPA-approved for use in schools and childcare facilities,
                effectively eliminating germs while being non-toxic and safe for
                daily use around children of all ages.
              </p>
            </div>

            {/* Question 2 */}
            <div className="py-6">
              <h3 className="text-lg font-bold mb-2">
                How do you accommodate school schedules?
              </h3>
              <p className="text-gray-600">
                We understand that educational facilities have unique scheduling
                requirements. We offer flexible cleaning times, including
                after-hours, weekend, holiday break, and summer vacation deep
                cleaning. For daycares and facilities that operate year-round,
                we can establish cleaning rotations that work around your
                schedule to minimize disruption.
              </p>
            </div>

            {/* Question 3 */}
            <div className="py-6">
              <h3 className="text-lg font-bold mb-2">
                What measures do you take to prevent the spread of illness?
              </h3>
              <p className="text-gray-600">
                Our illness prevention protocol includes frequent disinfection
                of high-touch surfaces, specialized cleaning during outbreak
                situations, use of EPA-registered disinfectants effective
                against common school pathogens, and implementation of
                color-coded microfiber systems to prevent cross-contamination
                between different areas of your facility.
              </p>
            </div>

            {/* Question 4 */}
            <div className="py-6">
              <h3 className="text-lg font-bold mb-2">
                Do you offer special cleaning during seasonal breaks?
              </h3>
              <p className="text-gray-600">
                Yes, we offer comprehensive deep cleaning services during summer
                breaks, winter holidays, and spring vacations. These periodic
                deep cleans include floor refinishing, carpet extraction,
                detailed surface cleaning, air duct maintenance, and other
                intensive tasks that are difficult to perform during regular
                school operation.
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
