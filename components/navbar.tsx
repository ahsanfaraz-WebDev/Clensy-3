"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { User, Calendar } from "lucide-react";

export default function Navbar() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setScrollPosition(currentScrollPos);
      setVisible(true); // Always visible, Apple-style
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate background opacity based on scroll position
  const bgOpacity = Math.min(scrollPosition / 200, 0.9);
  const textColor = scrollPosition > 100 ? "text-black" : "text-white";
  const logoFilter = scrollPosition > 100 ? "" : "brightness(0) invert(1)";
  const buttonBg =
    scrollPosition > 100 ? "bg-black text-white" : "bg-white text-black";

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: `rgba(255, 255, 255, ${bgOpacity})`,
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        borderBottom:
          scrollPosition > 50 ? "1px solid rgba(0, 0, 0, 0.1)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center h-full py-2">
            <Link href="/" className="flex items-center h-full">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/clensy-3YxRqAp8bxVkkiFlQmcTlgTeLxuJ4t.png"
                alt="Clensy Logo"
                width={70}
                height={25}
                style={{
                  filter: logoFilter,
                  objectFit: "contain",
                  maxHeight: "100%",
                }}
                className="transition-all duration-300 h-full w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {/* Services Dropdown */}
            <div className="relative dropdown group">
              <button
                className={`flex items-center ${textColor} hover:opacity-80 transition-opacity`}
              >
                <span className="text-sm font-medium">Services</span>
              </button>

              <div className="dropdown-content apple-dropdown-content absolute left-1/2 transform -translate-x-1/2 mt-2 w-[500px] z-50 grid grid-cols-2 gap-6">
                <div>
                  <h4 className="apple-dropdown-title">Residential</h4>
                  <ul className="space-y-2">
                    <li>
                      <Link
                        href="/services/routine-cleaning"
                        className="apple-dropdown-link block"
                      >
                        Routine Cleaning
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/services/deep-cleaning"
                        className="apple-dropdown-link block"
                      >
                        Deep Cleaning
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/services/moving-cleaning"
                        className="apple-dropdown-link block"
                      >
                        Moving Cleaning
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/services/post-construction-cleaning"
                        className="apple-dropdown-link block"
                      >
                        Post Construction
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/services/airbnb-cleaning"
                        className="apple-dropdown-link block"
                      >
                        AirBNB Cleaning
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/services/extras"
                        className="apple-dropdown-link block"
                      >
                        Extras
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="apple-dropdown-title">Commercial</h4>
                  <ul className="space-y-2">
                    <li>
                      <Link
                        href="/services/office-cleaning"
                        className="apple-dropdown-link block"
                      >
                        Offices & Corporate Buildings
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/services/medical-cleaning"
                        className="apple-dropdown-link block"
                      >
                        Medical & Healthcare Facilities
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/services/retail-cleaning"
                        className="apple-dropdown-link block"
                      >
                        Retail Stores
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/services/gym-cleaning"
                        className="apple-dropdown-link block"
                      >
                        Gyms & Fitness Centers
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/services/school-cleaning"
                        className="apple-dropdown-link block"
                      >
                        Schools & Childcare Facilities
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/services/property-cleaning"
                        className="apple-dropdown-link block"
                      >
                        Property & Building Common Areas
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/services/other-commercial"
                        className="apple-dropdown-link block"
                      >
                        Other Commercial Spaces
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Company Dropdown */}
            <div className="relative dropdown group">
              <button
                className={`flex items-center ${textColor} hover:opacity-80 transition-opacity`}
              >
                <span className="text-sm font-medium">Company</span>
              </button>

              <div className="dropdown-content apple-dropdown-content absolute left-1/2 transform -translate-x-1/2 mt-2 w-[300px] z-50">
                <div>
                  <h4 className="apple-dropdown-title">Company</h4>
                  <ul className="space-y-2">
                    <li>
                      <Link
                        href="/checklist"
                        className="apple-dropdown-link block"
                      >
                        50-Point Checklist
                      </Link>
                    </li>
                    <li>
                      <Link href="/about" className="apple-dropdown-link block">
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/careers"
                        className="apple-dropdown-link block"
                      >
                        Join The Team
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Locations Dropdown */}
            <div className="relative dropdown group">
              <button
                className={`flex items-center ${textColor} hover:opacity-80 transition-opacity`}
              >
                <span className="text-sm font-medium">Locations</span>
              </button>

              <div className="dropdown-content apple-dropdown-content absolute left-1/2 transform -translate-x-1/2 mt-2 w-[300px] z-50">
                <div>
                  <h4 className="apple-dropdown-title">Service Areas</h4>
                  <ul className="space-y-2 grid grid-cols-2">
                    <li>
                      <Link
                        href="/locations/bergen"
                        className="apple-dropdown-link block"
                      >
                        Bergen County
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/locations/essex"
                        className="apple-dropdown-link block"
                      >
                        Essex County
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/locations/hudson"
                        className="apple-dropdown-link block"
                      >
                        Hudson County
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/locations/passaic"
                        className="apple-dropdown-link block"
                      >
                        Passaic County
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/locations/union"
                        className="apple-dropdown-link block"
                      >
                        Union County
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <Link
              href="/faq"
              className={`text-sm font-medium ${textColor} hover:opacity-80 transition-opacity`}
            >
              FAQ
            </Link>

            <Link
              href="/contact"
              className={`text-sm font-medium ${textColor} hover:opacity-80 transition-opacity`}
            >
              Contact Us
            </Link>

            <Link
              href="/gift-cards"
              className={`text-sm font-medium ${textColor} hover:opacity-80 transition-opacity`}
            >
              Gift Cards
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="https://clensy.maidcentral.com"
              className={`text-sm font-medium ${textColor} hover:opacity-80 transition-opacity flex items-center`}
            >
              <User className="h-4 w-4 mr-1" />
              Login
            </Link>

            <Link
              href="/pricing"
              className={`text-sm font-medium ${buttonBg} hover:opacity-90 px-5 py-2 rounded-full transition-colors flex items-center`}
            >
              <Calendar className="h-4 w-4 mr-1" />
              Book Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              className={`p-2 rounded-md ${textColor} hover:bg-gray-100/10 focus:outline-none`}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
