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
  ShoppingBag,
  Smile,
  Sparkles,
} from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import CTASection from "@/components/cta-section";

export default function RetailCleaningPage() {
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
            src="https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?q=80&w=2070&auto=format&fit=crop"
            alt="Modern retail store interior"
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
                  Premium Retail Services
                </span>
              </motion.div>

              <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-6 hero-text-shadow">
                Retail Store & <br />
                <span className="text-white">Shop Cleaning</span>
              </h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="text-lg text-white/80 mb-8 max-w-xl"
              >
                Create an impeccable shopping environment that enhances customer
                experience and protects your merchandise with our specialized
                retail cleaning services.
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
                    <ShoppingBag className="h-5 w-5 mr-2 text-[#007BFF]" />
                    <span className="text-sm whitespace-nowrap">
                      Retail Specialists
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
              <div className="text-4xl font-bold text-black mb-2">400+</div>
              <p className="text-gray-600">Retail Clients</p>
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
              <p className="text-gray-600">Customer Rating</p>
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
              Our Retail Cleaning Services
            </h2>
            <p className="text-lg text-gray-600">
              We provide comprehensive cleaning solutions tailored to meet the
              unique needs of retail environments and shopping spaces.
            </p>
          </div>

          {/* Item 1 - Left image, right text */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-lg order-2 lg:order-1">
              <Image
                src="https://images.unsplash.com/photo-1604176424472-47c7a57441a2?q=80&w=1974&auto=format&fit=crop"
                alt="Retail entrance cleaning"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="text-2xl font-bold mb-4">
                Entrances & Display Areas
              </h3>
              <p className="text-gray-600 mb-6">
                First impressions matter. We ensure your store entrance and
                display areas shine to create a welcoming environment that
                attracts customers.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-3 text-[#007BFF] flex-shrink-0 mt-0.5" />
                  <span>
                    Glass door and window cleaning for crystal clear visibility
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-3 text-[#007BFF] flex-shrink-0 mt-0.5" />
                  <span>
                    Dusting and cleaning of display shelves and fixtures
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-3 text-[#007BFF] flex-shrink-0 mt-0.5" />
                  <span>
                    Floor cleaning and polishing for high-traffic entryways
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-3 text-[#007BFF] flex-shrink-0 mt-0.5" />
                  <span>Sanitizing of doorknobs, handles, and railings</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Item 2 - Right image, left text */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                Sales Floor & Merchandise Areas
              </h3>
              <p className="text-gray-600 mb-6">
                Create an inviting shopping environment with meticulously
                cleaned sales floors that showcase your merchandise in the best
                light.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-3 text-[#007BFF] flex-shrink-0 mt-0.5" />
                  <span>
                    Thorough floor care tailored to your flooring type
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-3 text-[#007BFF] flex-shrink-0 mt-0.5" />
                  <span>
                    Gentle dusting of merchandise shelves and product displays
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-3 text-[#007BFF] flex-shrink-0 mt-0.5" />
                  <span>
                    Sanitizing of high-touch surfaces throughout your store
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-3 text-[#007BFF] flex-shrink-0 mt-0.5" />
                  <span>
                    Cleaning and polishing of display cases and counters
                  </span>
                </li>
              </ul>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1581677353556-8695e1a11acf?q=80&w=1974&auto=format&fit=crop"
                alt="Retail sales floor cleaning"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Item 3 - Left image, right text */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-lg order-2 lg:order-1">
              <Image
                src="https://images.unsplash.com/photo-1606170033648-5d55a3edf39f?q=80&w=2070&auto=format&fit=crop"
                alt="Retail changing room cleaning"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="text-2xl font-bold mb-4">
                Fitting Rooms & Customer Areas
              </h3>
              <p className="text-gray-600 mb-6">
                Keep your fitting rooms and customer service areas pristine to
                enhance the shopping experience and encourage purchases.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-3 text-[#007BFF] flex-shrink-0 mt-0.5" />
                  <span>Disinfection of fitting room surfaces and seating</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-3 text-[#007BFF] flex-shrink-0 mt-0.5" />
                  <span>Mirror cleaning for smudge-free reflections</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-3 text-[#007BFF] flex-shrink-0 mt-0.5" />
                  <span>
                    Sanitization of customer service counters and points of sale
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-3 text-[#007BFF] flex-shrink-0 mt-0.5" />
                  <span>
                    Regular emptying and cleaning of fitting room waste
                    receptacles
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
              Why Choose Clensy for Your Retail Cleaning
            </h2>
            <p className="text-lg text-gray-600">
              We understand the unique cleaning requirements of retail
              environments and deliver reliable, consistent service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-50 rounded-full mb-6">
                <Clock className="h-8 w-8 text-[#007BFF]" />
              </div>
              <h3 className="text-xl font-bold mb-3">Flexible Scheduling</h3>
              <p className="text-gray-600">
                We work around your store hours, providing after-hours, early
                morning, or specialized scheduling to ensure cleaning never
                disrupts your business operations.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-50 rounded-full mb-6">
                <Smile className="h-8 w-8 text-[#007BFF]" />
              </div>
              <h3 className="text-xl font-bold mb-3">Retail Experience</h3>
              <p className="text-gray-600">
                Our cleaning teams have specific experience with retail
                environments, understanding how to clean merchandise displays,
                fitting rooms, and customer areas with care.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-50 rounded-full mb-6">
                <Sparkles className="h-8 w-8 text-[#007BFF]" />
              </div>
              <h3 className="text-xl font-bold mb-3">Safe, Gentle Products</h3>
              <p className="text-gray-600">
                We use retail-friendly cleaning products that effectively clean
                without damaging merchandise, displays, or sensitive surfaces in
                your store.
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
              What Our Retail Clients Say
            </h2>
            <p className="text-lg text-gray-600">
              Discover why retail businesses trust us for their professional
              cleaning needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="mr-4">
                  <div className="w-12 h-12 rounded-full bg-[#007BFF] flex items-center justify-center text-white font-bold">
                    R
                  </div>
                </div>
                <div>
                  <h4 className="font-bold">Rebecca Martin</h4>
                  <p className="text-sm text-gray-500">
                    Store Manager, Urban Fashion Boutique
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
                "Clensy has transformed our boutique's appearance. Their
                attention to detail is remarkable - from polishing our glass
                display cases to keeping our fitting rooms pristine. Our
                customers frequently comment on how clean and inviting our store
                feels."
              </p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="mr-4">
                  <div className="w-12 h-12 rounded-full bg-[#007BFF] flex items-center justify-center text-white font-bold">
                    M
                  </div>
                </div>
                <div>
                  <h4 className="font-bold">Marcus Johnson</h4>
                  <p className="text-sm text-gray-500">
                    Owner, Luxury Home Goods
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
                "What sets Clensy apart is their understanding of retail spaces.
                They know how to clean around delicate merchandise and fixtures
                without causing damage. Their flexible scheduling means they
                work around our store hours, and we never have to worry about
                cleaning disrupting our business."
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
              Common questions about our retail cleaning services.
            </p>
          </div>

          <div className="max-w-3xl mx-auto divide-y divide-gray-200">
            {/* Question 1 */}
            <div className="py-6">
              <h3 className="text-lg font-bold mb-2">
                How often should retail stores be professionally cleaned?
              </h3>
              <p className="text-gray-600">
                Most retail stores benefit from daily light cleaning for
                customer areas and entryways, with more thorough deep cleaning
                1-3 times per week depending on foot traffic. High-volume
                retailers may require daily comprehensive cleaning. We can
                create a custom schedule based on your specific needs and
                customer volume.
              </p>
            </div>

            {/* Question 2 */}
            <div className="py-6">
              <h3 className="text-lg font-bold mb-2">
                Do you clean outside of store hours?
              </h3>
              <p className="text-gray-600">
                Yes, we understand that cleaning during business hours can
                disrupt your customers' shopping experience. Most of our retail
                clients prefer after-hours cleaning, and we're happy to
                accommodate evening, early morning, or off-hours schedules to
                ensure your store is spotless when customers arrive.
              </p>
            </div>

            {/* Question 3 */}
            <div className="py-6">
              <h3 className="text-lg font-bold mb-2">
                How do you handle cleaning around merchandise and displays?
              </h3>
              <p className="text-gray-600">
                Our cleaning professionals are trained specifically in retail
                environments. We use gentle techniques and appropriate products
                that effectively clean without risking damage to merchandise,
                displays, or special fixtures. Our team follows strict protocols
                for cleaning around valuable or delicate items.
              </p>
            </div>

            {/* Question 4 */}
            <div className="py-6">
              <h3 className="text-lg font-bold mb-2">
                Can you accommodate seasonal or special event cleaning needs?
              </h3>
              <p className="text-gray-600">
                Absolutely. We understand retail businesses often have seasonal
                peaks or special events that require additional cleaning. We
                offer flexible arrangements for holiday rush periods, special
                sales events, store remodels, or seasonal display changes. Just
                let us know your needs, and we'll adjust our services
                accordingly.
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
