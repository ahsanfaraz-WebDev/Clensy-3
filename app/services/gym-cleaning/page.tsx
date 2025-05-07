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
  Dumbbell,
  Heart,
  Sparkles,
} from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import CTASection from "@/components/cta-section";

export default function GymCleaningPage() {
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
            src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=2070&auto=format&fit=crop"
            alt="Modern fitness center interior"
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
                  Premium Fitness Facility Services
                </span>
              </motion.div>

              <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-6 hero-text-shadow">
                Gym & Fitness Center <br />
                <span className="text-white">Cleaning Services</span>
              </h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="text-lg text-white/80 mb-8 max-w-xl"
              >
                Specialized cleaning and sanitization services designed for
                fitness environments, ensuring a healthy, hygienic space for
                members and staff alike.
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
                    <Dumbbell className="h-5 w-5 mr-2 text-[#007BFF]" />
                    <span className="text-sm whitespace-nowrap">
                      Fitness Specialists
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
              <div className="text-4xl font-bold text-black mb-2">300+</div>
              <p className="text-gray-600">Fitness Clients</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-4xl font-bold text-black mb-2">24/7</div>
              <p className="text-gray-600">Facility Support</p>
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
              <p className="text-gray-600">Hygiene Guarantee</p>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included Section with Zigzag Layout */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our Fitness Facility Cleaning Services
            </h2>
            <p className="text-lg text-gray-600">
              We provide comprehensive cleaning solutions tailored to meet the
              unique demands of gyms and fitness centers.
            </p>
          </div>

          {/* Item 1 - Left image, right text */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-lg order-2 lg:order-1">
              <Image
                src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=1975&auto=format&fit=crop"
                alt="Gym equipment cleaning"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="text-2xl font-bold mb-4">
                Equipment & Workout Areas
              </h3>
              <p className="text-gray-600 mb-6">
                Proper cleaning and sanitization of fitness equipment is
                essential for member health and safety. Our specialized
                protocols ensure every machine and surface is thoroughly
                disinfected.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-3 text-[#007BFF] flex-shrink-0 mt-0.5" />
                  <span>
                    Disinfection of all equipment touchpoints and surfaces
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-3 text-[#007BFF] flex-shrink-0 mt-0.5" />
                  <span>
                    Cleaning of weight benches, racks, and free weight areas
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-3 text-[#007BFF] flex-shrink-0 mt-0.5" />
                  <span>Sanitization of cardio machines and electronics</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-3 text-[#007BFF] flex-shrink-0 mt-0.5" />
                  <span>
                    Floor care specifically designed for workout areas
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Item 2 - Right image, left text */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                Locker Rooms & Shower Facilities
              </h3>
              <p className="text-gray-600 mb-6">
                Locker rooms and showers require meticulous attention to prevent
                the spread of bacteria and fungi. Our deep cleaning protocols
                ensure these high-risk areas stay hygienic.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-3 text-[#007BFF] flex-shrink-0 mt-0.5" />
                  <span>
                    Deep cleaning of shower stalls and bathroom fixtures
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-3 text-[#007BFF] flex-shrink-0 mt-0.5" />
                  <span>
                    Sanitization of benches, lockers, and changing areas
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-3 text-[#007BFF] flex-shrink-0 mt-0.5" />
                  <span>
                    Treatment of floors with anti-fungal and anti-bacterial
                    solutions
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-3 text-[#007BFF] flex-shrink-0 mt-0.5" />
                  <span>Regular replenishment of soap and paper products</span>
                </li>
              </ul>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1622547748225-3fc4abd2cca0?q=80&w=1932&auto=format&fit=crop"
                alt="Gym locker room cleaning"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Item 3 - Left image, right text */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-lg order-2 lg:order-1">
              <Image
                src="https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1770&auto=format&fit=crop"
                alt="Gym studio cleaning"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="text-2xl font-bold mb-4">Studio & Class Spaces</h3>
              <p className="text-gray-600 mb-6">
                Group exercise areas need special attention between classes to
                maintain hygiene and create a welcoming environment for the next
                session.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-3 text-[#007BFF] flex-shrink-0 mt-0.5" />
                  <span>
                    Cleaning and disinfection of studio floors and mirrors
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-3 text-[#007BFF] flex-shrink-0 mt-0.5" />
                  <span>
                    Sanitization of yoga mats, blocks, and other equipment
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-3 text-[#007BFF] flex-shrink-0 mt-0.5" />
                  <span>
                    Air purification and ventilation system maintenance
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-3 text-[#007BFF] flex-shrink-0 mt-0.5" />
                  <span>
                    Specialized floor treatments for dance and exercise rooms
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
              Why Choose Clensy for Your Fitness Facility
            </h2>
            <p className="text-lg text-gray-600">
              We understand the unique cleaning requirements of gym environments
              and deliver specialized solutions that promote health and hygiene.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-50 rounded-full mb-6">
                <Shield className="h-8 w-8 text-[#007BFF]" />
              </div>
              <h3 className="text-xl font-bold mb-3">
                Specialized Sanitization
              </h3>
              <p className="text-gray-600">
                We use hospital-grade disinfectants and antimicrobial treatments
                specifically designed to eliminate bacteria, viruses, and fungi
                common in fitness environments.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-50 rounded-full mb-6">
                <Clock className="h-8 w-8 text-[#007BFF]" />
              </div>
              <h3 className="text-xl font-bold mb-3">24/7 Flexibility</h3>
              <p className="text-gray-600">
                We adapt to your facility's schedule, offering cleaning during
                off-peak hours, overnight, or during temporary closures to
                minimize disruption to your members.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-50 rounded-full mb-6">
                <Heart className="h-8 w-8 text-[#007BFF]" />
              </div>
              <h3 className="text-xl font-bold mb-3">
                Health-Focused Approach
              </h3>
              <p className="text-gray-600">
                Our cleaning protocols are designed with member health in mind,
                targeting high-touch surfaces and using eco-friendly products
                that are effective yet safe.
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
              What Our Fitness Clients Say
            </h2>
            <p className="text-lg text-gray-600">
              Discover why fitness facilities trust us for their specialized
              cleaning needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="mr-4">
                  <div className="w-12 h-12 rounded-full bg-[#007BFF] flex items-center justify-center text-white font-bold">
                    J
                  </div>
                </div>
                <div>
                  <h4 className="font-bold">Jason Reynolds</h4>
                  <p className="text-sm text-gray-500">
                    Owner, Elite Fitness Center
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
                "Since partnering with Clensy, our member satisfaction scores
                regarding facility cleanliness have skyrocketed. Their attention
                to detail in our locker rooms and their specialized approach to
                fitness equipment cleaning has made a noticeable difference."
              </p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="mr-4">
                  <div className="w-12 h-12 rounded-full bg-[#007BFF] flex items-center justify-center text-white font-bold">
                    A
                  </div>
                </div>
                <div>
                  <h4 className="font-bold">Amanda Torres</h4>
                  <p className="text-sm text-gray-500">
                    Operations Manager, FitLife Studios
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
                "Clensy understands the importance of health and hygiene in a
                fitness setting. Their flexible scheduling works perfectly with
                our 24-hour facility, and their staff is trained to handle the
                specific challenges of a high-traffic gym environment. We
                couldn't be happier with their service."
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
              Common questions about our fitness facility cleaning services.
            </p>
          </div>

          <div className="max-w-3xl mx-auto divide-y divide-gray-200">
            {/* Question 1 */}
            <div className="py-6">
              <h3 className="text-lg font-bold mb-2">
                How do you clean and sanitize fitness equipment?
              </h3>
              <p className="text-gray-600">
                We use a combination of specialized equipment-safe disinfectants
                and microfiber technology to thoroughly clean and sanitize all
                equipment surfaces. Our process includes paying special
                attention to high-touch areas like handles, seats, and
                electronic displays, while ensuring that cleaning solutions
                don't damage or degrade equipment materials.
              </p>
            </div>

            {/* Question 2 */}
            <div className="py-6">
              <h3 className="text-lg font-bold mb-2">
                How often should a gym be professionally cleaned?
              </h3>
              <p className="text-gray-600">
                Most fitness facilities benefit from daily maintenance cleaning
                with more comprehensive deep cleaning 2-3 times per week.
                High-traffic areas like locker rooms and shower facilities often
                require daily thorough cleaning, while specialized treatments
                for floors and equipment may be scheduled weekly. We'll work
                with you to create a customized schedule based on your
                facility's specific needs.
              </p>
            </div>

            {/* Question 3 */}
            <div className="py-6">
              <h3 className="text-lg font-bold mb-2">
                What measures do you take to prevent cross-contamination?
              </h3>
              <p className="text-gray-600">
                We implement strict color-coding systems for cleaning tools and
                materials to prevent cross-contamination between different areas
                (e.g., bathroom tools are never used in workout areas). Our
                staff follows detailed protocols for moving between zones,
                changing cleaning materials, and using appropriate disinfectants
                for each space and surface.
              </p>
            </div>

            {/* Question 4 */}
            <div className="py-6">
              <h3 className="text-lg font-bold mb-2">
                Can you clean during our facility's operating hours?
              </h3>
              <p className="text-gray-600">
                Yes, we offer both visible maintenance cleaning during operating
                hours and more thorough cleaning during off-peak or closed
                hours. Many clients prefer a combination: our day porters
                maintain cleanliness throughout busy periods, while more
                intensive cleaning happens during lower-traffic times. Our staff
                is trained to work efficiently without disrupting your members'
                workouts.
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
