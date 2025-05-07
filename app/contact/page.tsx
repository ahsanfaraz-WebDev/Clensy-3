"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  CheckCircle,
  Calendar,
  ArrowRight,
  Send,
  Star,
} from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function ContactPage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [formStatus, setFormStatus] = useState<null | "success" | "error">(
    null
  );
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setFormStatus("success");
      // Reset form after submission
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
    }, 1000);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <main className="overflow-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen bg-black pt-16 overflow-hidden">
        {/* Background gradient and decorative elements */}
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-gray-950 via-black to-gray-900"></div>

        {/* Decorative elements */}
        <div className="absolute right-0 top-1/4 h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-[120px] -z-10"></div>
        <div className="absolute left-0 bottom-1/4 h-[300px] w-[300px] rounded-full bg-indigo-600/10 blur-[100px] -z-10"></div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div>

        {/* Accent lines */}
        <div className="absolute top-20 right-0 left-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
        <div className="absolute bottom-20 right-0 left-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-64px)]">
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
                className="inline-block mb-6 px-4 py-1 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full"
              >
                <span className="text-white/90 text-sm font-medium">
                  We'd Love To Hear From You
                </span>
              </motion.div>

              <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-6 hero-text-shadow">
                Let's Start A <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
                  Conversation
                </span>
              </h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="text-lg text-white/80 mb-8 max-w-xl"
              >
                Have questions or need a personalized cleaning solution? Our
                team is ready to provide the support you need for all your
                requirements.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link
                  href="#form"
                  className="bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700 px-8 py-3 rounded-full text-sm font-medium inline-flex items-center justify-center transition-all duration-300 shadow-[0_0_20px_rgba(59,130,246,0.3)]"
                >
                  <span className="text-center w-full">Send a Message</span>
                </Link>

                <div className="flex items-center sm:mt-0 mt-4">
                  <div className="flex items-center text-white/90 mr-8">
                    <Phone className="h-5 w-5 mr-2 text-blue-400" />
                    <span className="text-sm whitespace-nowrap">
                      24/7 Support
                    </span>
                  </div>

                  <div className="flex items-center text-white/90">
                    <Clock className="h-5 w-5 mr-2 text-blue-400" />
                    <span className="text-sm whitespace-nowrap">
                      Quick Response
                    </span>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right side - Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isLoaded ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="hidden lg:block"
            >
              <div className="relative h-[550px] w-full rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.3)] border border-white/10">
                {/* Multiple layered images for depth effect */}
                <div className="absolute inset-0 z-10">
                  <Image
                    src="https://images.unsplash.com/photo-1590856029826-c7a73142bbf1?q=80&w=2073&auto=format&fit=crop"
                    alt="Professional cleaning staff"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                  <div className="absolute inset-0 bg-gradient-to-l from-blue-900/30 via-transparent to-transparent"></div>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-0 right-0 h-72 w-72 bg-blue-600 rounded-full filter blur-3xl opacity-20 -translate-y-1/2 translate-x-1/3 z-0"></div>
                <div className="absolute bottom-0 left-0 h-40 w-40 bg-blue-400 rounded-full filter blur-3xl opacity-20 translate-y-1/2 -translate-x-1/3 z-0"></div>

                {/* Foreground content */}
                <div className="absolute bottom-8 left-8 right-8 z-20">
                  <div className="bg-black/40 backdrop-blur-md p-6 rounded-xl border border-white/10">
                    <div className="flex items-center mb-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 mr-3">
                        <CheckCircle className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold text-lg">
                          Trusted by 5,000+ Customers
                        </h3>
                        <p className="text-white/70 text-sm">
                          Professional cleaning for every need
                        </p>
                      </div>
                    </div>
                    <div className="flex space-x-2 mt-2">
                      <span className="inline-flex items-center rounded-full bg-blue-600/20 px-3 py-1 text-xs text-white">
                        Residential
                      </span>
                      <span className="inline-flex items-center rounded-full bg-blue-600/20 px-3 py-1 text-xs text-white">
                        Commercial
                      </span>
                      <span className="inline-flex items-center rounded-full bg-blue-600/20 px-3 py-1 text-xs text-white">
                        Specialized
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <svg
            className="w-6 h-6 text-blue-400"
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
              <div className="text-4xl font-bold text-black mb-2">24/7</div>
              <p className="text-gray-600">Customer Support</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-4xl font-bold text-black mb-2">1h</div>
              <p className="text-gray-600">Response Time</p>
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

      {/* Contact Form and Information Section */}
      <section className="py-24 bg-gray-50" id="form">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Form Column */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="bg-white p-8 rounded-2xl shadow-lg relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-2 bg-blue-600"></div>
                <h2 className="text-2xl font-bold mb-6 text-gray-900">
                  Send Us a Message
                </h2>

                {formStatus === "success" ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-green-50 border border-green-200 rounded-xl p-8 text-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 200,
                        damping: 15,
                      }}
                      className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6"
                    >
                      <CheckCircle className="h-10 w-10 text-green-600" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      Message Sent Successfully!
                    </h3>
                    <p className="text-gray-600 mb-6 text-lg">
                      Thank you for reaching out. Our team will get back to you
                      within 24 hours.
                    </p>
                    <button
                      onClick={() => setFormStatus(null)}
                      className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-lg text-sm font-medium transition-colors"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <motion.div variants={itemVariants}>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Full Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                          placeholder="Your name"
                        />
                      </motion.div>
                      <motion.div variants={itemVariants}>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                          placeholder="Your email"
                        />
                      </motion.div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <motion.div variants={itemVariants}>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                          placeholder="Your phone number"
                        />
                      </motion.div>
                      <motion.div variants={itemVariants}>
                        <label
                          htmlFor="service"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Service Interested In
                        </label>
                        <select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        >
                          <option value="">Select a service</option>
                          <option value="Residential Cleaning">
                            Residential Cleaning
                          </option>
                          <option value="Office Cleaning">
                            Office Cleaning
                          </option>
                          <option value="Medical Cleaning">
                            Medical Cleaning
                          </option>
                          <option value="Retail Cleaning">
                            Retail Cleaning
                          </option>
                          <option value="Gym Cleaning">Gym Cleaning</option>
                          <option value="School Cleaning">
                            School Cleaning
                          </option>
                          <option value="Property Cleaning">
                            Property Cleaning
                          </option>
                          <option value="Other Commercial">
                            Other Commercial Cleaning
                          </option>
                        </select>
                      </motion.div>
                    </div>

                    <motion.div variants={itemVariants}>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Your Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={5}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="Tell us about your cleaning needs..."
                      ></textarea>
                    </motion.div>

                    <motion.button
                      variants={itemVariants}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 shadow-lg hover:shadow-xl"
                    >
                      Send Message
                    </motion.button>
                  </motion.form>
                )}
              </motion.div>

              {/* Information Column */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                <motion.h2
                  variants={itemVariants}
                  className="text-2xl font-bold mb-8 text-gray-900"
                >
                  Contact Information
                </motion.h2>

                <div className="space-y-6">
                  {/* Contact Cards */}
                  <motion.div
                    variants={itemVariants}
                    whileHover={{
                      y: -5,
                      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                    }}
                    className="bg-white p-6 rounded-xl shadow-md flex items-start transition-all duration-300"
                  >
                    <div className="bg-blue-100 p-3 rounded-lg mr-4">
                      <Phone className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">
                        Phone
                      </h3>
                      <p className="text-gray-600 mb-2">
                        Speak directly with our customer service team
                      </p>
                      <a
                        href="tel:+1234567890"
                        className="text-blue-600 font-medium hover:text-blue-700 transition-colors"
                      >
                        (123) 456-7890
                      </a>
                    </div>
                  </motion.div>

                  <motion.div
                    variants={itemVariants}
                    whileHover={{
                      y: -5,
                      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                    }}
                    className="bg-white p-6 rounded-xl shadow-md flex items-start transition-all duration-300"
                  >
                    <div className="bg-blue-100 p-3 rounded-lg mr-4">
                      <Mail className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">
                        Email
                      </h3>
                      <p className="text-gray-600 mb-2">
                        Get a response within 24 hours
                      </p>
                      <a
                        href="mailto:info@clensy.com"
                        className="text-blue-600 font-medium hover:text-blue-700 transition-colors"
                      >
                        info@clensy.com
                      </a>
                    </div>
                  </motion.div>

                  <motion.div
                    variants={itemVariants}
                    whileHover={{
                      y: -5,
                      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                    }}
                    className="bg-white p-6 rounded-xl shadow-md flex items-start transition-all duration-300"
                  >
                    <div className="bg-blue-100 p-3 rounded-lg mr-4">
                      <MapPin className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">
                        Office Location
                      </h3>
                      <p className="text-gray-600 mb-2">Our headquarters</p>
                      <address className="not-italic text-gray-700">
                        123 Cleaning Street
                        <br />
                        Suite 456
                        <br />
                        Jersey City, NJ 07302
                      </address>
                    </div>
                  </motion.div>

                  <motion.div
                    variants={itemVariants}
                    whileHover={{
                      y: -5,
                      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                    }}
                    className="bg-white p-6 rounded-xl shadow-md flex items-start transition-all duration-300"
                  >
                    <div className="bg-blue-100 p-3 rounded-lg mr-4">
                      <Clock className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">
                        Business Hours
                      </h3>
                      <p className="text-gray-600 mb-2">
                        When you can reach us
                      </p>
                      <ul className="space-y-1 text-gray-700">
                        <li>Monday - Friday: 8:00 AM - 6:00 PM</li>
                        <li>Saturday: 9:00 AM - 3:00 PM</li>
                        <li>Sunday: Closed</li>
                      </ul>
                    </div>
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="mt-10 bg-gradient-to-r from-blue-500 to-blue-700 rounded-xl p-6 text-white shadow-xl"
                >
                  <h3 className="font-bold text-xl mb-3">
                    Need Immediate Assistance?
                  </h3>
                  <p className="text-white/90 mb-4">
                    Our customer support team is available during business hours
                    to help you with any questions.
                  </p>
                  <Link
                    href="tel:+1234567890"
                    className="inline-flex items-center bg-white text-blue-600 px-5 py-2 rounded-lg font-medium hover:bg-blue-50 transition-colors"
                  >
                    <Phone className="h-4 w-4 mr-2" />
                    Call Us Now
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule a Consultation Section */}
      <section className="py-24 bg-[#1a2542] text-white relative overflow-hidden">
        {/* Add a subtle pattern overlay */}
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%">
            <pattern
              id="grid-pattern"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M0 0 L40 0 L40 40 L0 40 Z"
                fill="none"
                stroke="white"
                strokeWidth="0.5"
              />
            </pattern>
            <rect width="100%" height="100%" fill="url(#grid-pattern)" />
          </svg>
        </div>

        {/* Glowing orb effect */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-blue-600/20 filter blur-[100px]"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="inline-flex items-center justify-center w-20 h-20 rounded-full mb-10 relative"
            >
              <div className="absolute inset-0 rounded-full bg-blue-600 opacity-80 blur-md"></div>
              <div className="relative bg-blue-600 p-5 rounded-full">
                <Calendar className="h-10 w-10 text-white" />
              </div>
            </motion.div>

            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-5xl font-bold mb-6"
            >
              Need a Personalized Cleaning Solution?
            </motion.h2>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed"
            >
              Schedule a consultation with our cleaning experts to discuss your
              unique requirements and get a customized cleaning plan tailored to
              your specific needs.
            </motion.p>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="#form"
                className="inline-block bg-white text-blue-600 hover:bg-blue-50 px-10 py-4 rounded-lg text-lg font-medium transition-all shadow-xl hover:shadow-2xl"
              >
                Schedule a Consultation
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
