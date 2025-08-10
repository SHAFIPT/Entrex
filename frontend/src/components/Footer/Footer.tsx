"use client";
import Image from "next/image";
import { FaTwitter, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";
import logo from '../../assets/logo.png'

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-[74px]">
        
        {/* Logo + Description */}
        <div className="sm:col-span-2 lg:col-span-1">
          <Image
            src={logo}
            alt="Entrex Logo"
            width={180}
            height={32}
            className="mb-4 sm:mb-6 w-auto h-8 sm:h-10 lg:h-auto lg:w-[220px]"
          />
          <p className="text-gray-600 text-sm sm:text-base lg:text-[20px] leading-relaxed max-w-md lg:max-w-none">
            We are one of the leading Travel operators in South India with our
            registered office at Madipakkam, Chennai. We serve leading corporate
            clients in Chennai and Bangalore regions.
          </p>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="font-semibold text-gray-900 text-lg sm:text-xl lg:text-[23px] mb-3 sm:mb-4">Company</h3>
          <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base lg:text-[20px] text-gray-600">
            <li><a href="#" className="hover:text-gray-900 transition-colors">Home</a></li>
            <li><a href="#" className="hover:text-gray-900 transition-colors">About</a></li>
            <li><a href="#" className="hover:text-gray-900 transition-colors">Services</a></li>
            <li><a href="#" className="hover:text-gray-900 transition-colors">Contact</a></li>
            <li><a href="#" className="hover:text-gray-900 transition-colors">Compliance Control</a></li>
            <li><a href="#" className="hover:text-gray-900 transition-colors">Security Control</a></li>
          </ul>
        </div>

        {/* Tours Links */}
        <div>
          <h3 className="font-semibold text-gray-900 text-lg sm:text-xl lg:text-[23px] mb-3 sm:mb-4">Tours</h3>
          <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base lg:text-[20px] text-gray-600">
            <li><a href="#" className="hover:text-gray-900 transition-colors">Sales software</a></li>
            <li><a href="#" className="hover:text-gray-900 transition-colors">Features</a></li>
            <li><a href="#" className="hover:text-gray-900 transition-colors">Privacy and security</a></li>
            <li><a href="#" className="hover:text-gray-900 transition-colors">Marketplace</a></li>
            <li><a href="#" className="hover:text-gray-900 transition-colors">Status</a></li>
            <li><a href="#" className="hover:text-gray-900 transition-colors">API</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="sm:col-span-2 lg:col-span-1">
          <h3 className="font-semibold text-gray-900 text-lg sm:text-xl lg:text-[23px] mb-3 sm:mb-4">Contact</h3>
          <p className="text-sm sm:text-base lg:text-[20px] text-gray-600 leading-relaxed mb-4">
            ASK Towers 1st floor, 183-184, 3rd Main Rd, Sri Sai Nagar, Thoraipakkam,
            Tamil Nadu 600096
          </p>
          <div className="space-y-2 sm:space-y-3">
            <div className="flex items-center gap-3 text-sm sm:text-base lg:text-[20px] text-gray-600">
              <MdEmail className="text-lg sm:text-xl flex-shrink-0" />
              <span className="break-all">bookings@entrex.in</span>
            </div>
            <div className="flex items-center gap-3 text-sm sm:text-base lg:text-[20px] text-gray-600">
              <MdPhone className="text-lg sm:text-xl flex-shrink-0" />
              <span>+91 44 4953 0055</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          
          {/* Mobile Layout */}
          <div className="flex flex-col space-y-4 md:hidden">
            {/* Social Icons */}
            <div className="flex justify-center space-x-4">
              <a href="#" className="bg-gray-100 p-3 rounded-full hover:bg-gray-200 transition-colors">
                <FaTwitter className="text-sky-500 text-lg" />
              </a>
              <a href="#" className="bg-gray-100 p-3 rounded-full hover:bg-gray-200 transition-colors">
                <FaFacebookF className="text-blue-600 text-lg" />
              </a>
              <a href="#" className="bg-gray-100 p-3 rounded-full hover:bg-gray-200 transition-colors">
                <FaLinkedinIn className="text-sky-700 text-lg" />
              </a>
            </div>
            
            {/* Links */}
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-sm text-gray-500">
              <a href="#" className="hover:text-gray-700 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-gray-700 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-gray-700 transition-colors">Cookies</a>
            </div>
            
            {/* Copyright */}
            <p className="text-sm text-gray-500 text-center">
              Copyright © 2025 Entrex. All Rights Reserved.
            </p>
          </div>

          {/* Desktop Layout */}
          <div className="hidden md:flex flex-row justify-between items-center gap-4">
            
            {/* Left */}
            <p className="text-sm text-gray-500">
              Copyright © 2025 Entrex. All Rights Reserved.
            </p>

            {/* Middle Links */}
            <div className="flex space-x-6 text-sm text-gray-500">
              <a href="#" className="hover:text-gray-700 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-gray-700 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-gray-700 transition-colors">Cookies</a>
            </div>

            {/* Social Icons */}
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-100 p-2 rounded-full hover:bg-gray-200 transition-colors">
                <FaTwitter className="text-sky-500" />
              </a>
              <a href="#" className="bg-gray-100 p-2 rounded-full hover:bg-gray-200 transition-colors">
                <FaFacebookF className="text-blue-600" />
              </a>
              <a href="#" className="bg-gray-100 p-2 rounded-full hover:bg-gray-200 transition-colors">
                <FaLinkedinIn className="text-sky-700" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}