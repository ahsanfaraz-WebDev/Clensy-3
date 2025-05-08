"use client";

import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Image from "next/image";
import Link from "next/link";
import { Users, Award, Shield, Target, CheckCircle2 } from "lucide-react";

export default function AboutPage() {
  // Animation control for sections
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <main className="overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative w-full h-[60vh] flex items-center justify-center bg-gradient-to-r from-black to-[#0a0a0a] text-white overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/60"></div>
          <div
            className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-90"
            style={{
              backgroundImage: "url('/images/about-bg.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              mixBlendMode: "overlay",
            }}
          ></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl font-extrabold mb-4 text-white"
          >
            About Clensy
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-3xl mx-auto text-lg text-gray-100 mb-8"
          >
            At Clensy, we believe everyone deserves to come home to a spotless,
            fresh space without having to lift a finger. That's why we've built
            a cleaning service that delivers excellence, every time.
          </motion.p>
        </div>
      </motion.section>

      {/* Our Story Section */}
      <section ref={ref} className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-4">
                Founded in 2018, Clensy began with a simple observation:
                traditional cleaning services were falling short of customer
                expectations. Inconsistent quality, missed appointments, and
                poor communication were frustrating homeowners and businesses
                alike.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                We set out to reimagine what a cleaning service could be by
                focusing on three core principles: exceptional cleaning quality,
                reliable service, and transparent communication.
              </p>
              <p className="text-lg text-gray-600">
                Today, we're proud to serve thousands of satisfied customers
                across multiple counties, bringing our signature 50-point
                cleaning process to homes and businesses throughout the region.
              </p>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="relative h-[400px] w-full rounded-lg overflow-hidden shadow-xl"
            >
              <Image
                src="/images/our-story.jpg"
                alt="The Clensy Story"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-white text-lg font-bold">
                  From small beginnings to industry leaders
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Our Core Values
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-gray-600 max-w-3xl mx-auto"
            >
              These principles guide everything we do, from hiring to training
              to service delivery.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Award className="w-8 h-8 text-[#007BFF]" />,
                title: "Excellence",
                description:
                  "We hold ourselves to the highest standards in everything we do, from the thoroughness of our cleaning to our customer service.",
              },
              {
                icon: <Shield className="w-8 h-8 text-[#007BFF]" />,
                title: "Trust",
                description:
                  "We earn your trust through reliability, transparency, and consistent quality that you can count on every time.",
              },
              {
                icon: <Target className="w-8 h-8 text-[#007BFF]" />,
                title: "Attention to Detail",
                description:
                  "Our 50-point checklist ensures we don't miss a thing. We believe the smallest details make the biggest difference.",
              },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="bg-white p-8 rounded-lg shadow-sm border border-gray-100"
              >
                <div className="mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Meet Our Leadership
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-gray-600 max-w-3xl mx-auto"
            >
              The team behind Clensy's success combines industry expertise with
              a passion for customer satisfaction.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Founder & CEO",
                bio: "With over 15 years in the service industry, Sarah founded Clensy to bring a higher standard to home cleaning.",
                image: "/images/team-1.jpg",
              },
              {
                name: "Michael Chen",
                role: "Operations Director",
                bio: "Michael ensures our service delivery is flawless, overseeing our team of cleaning professionals and quality control processes.",
                image: "/images/team-2.jpg",
              },
              {
                name: "Jennifer Williams",
                role: "Customer Experience Manager",
                bio: "Jennifer works tirelessly to make sure every customer interaction with Clensy exceeds expectations.",
                image: "/images/team-3.jpg",
              },
            ].map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="rounded-lg overflow-hidden shadow-sm border border-gray-100"
              >
                <div className="relative h-64 w-full">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 bg-white">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-[#007BFF] font-medium mb-4">
                    {member.role}
                  </p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Why Choose Clensy?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-gray-300 max-w-3xl mx-auto"
            >
              What makes us different from other cleaning services?
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Our 50-Point Checklist",
                description:
                  "Our comprehensive cleaning system ensures nothing is overlooked, delivering a consistently thorough clean.",
                icon: <CheckCircle2 className="w-6 h-6 text-[#007BFF]" />,
              },
              {
                title: "Trained & Vetted Team",
                description:
                  "Every cleaner is thoroughly background checked and professionally trained in our cleaning methodologies.",
                icon: <Users className="w-6 h-6 text-[#007BFF]" />,
              },
              {
                title: "100% Satisfaction Guarantee",
                description:
                  "If you're not completely satisfied, we'll come back and re-clean any areas that don't meet your expectations.",
                icon: <Award className="w-6 h-6 text-[#007BFF]" />,
              },
              {
                title: "Eco-Friendly Options",
                description:
                  "We offer green cleaning solutions that are safe for your family, pets, and the environment.",
                icon: <Shield className="w-6 h-6 text-[#007BFF]" />,
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="flex gap-4 p-6 rounded-lg bg-white/5 backdrop-blur-sm"
              >
                <div className="flex-shrink-0 mt-1">{item.icon}</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-300">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#007BFF] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              Ready to Experience the Clensy Difference?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-white/90 mb-8"
            >
              Join thousands of satisfied customers who've discovered what a
              truly exceptional cleaning service feels like.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center bg-white text-[#007BFF] hover:bg-gray-100 px-8 py-3 rounded-full font-medium transition-all duration-300"
              >
                Book Your Cleaning
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-transparent hover:bg-white/10 text-white border border-white px-8 py-3 rounded-full font-medium transition-all duration-300"
              >
                Contact Us
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
