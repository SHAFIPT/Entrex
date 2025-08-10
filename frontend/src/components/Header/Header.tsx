"use client";
import Image from "next/image";
import headerImg from "../../assets/homeImg.jpg";
import logo from "../../assets/logo.png";
import carGif from "../../assets/car.gif";
import headerPhonesize from "../../assets/phonesize2.jpg";
import { BackendError, submitForm } from "@/services/formService";
import toast from "react-hot-toast";
import { useState } from "react";

export default function Header() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    time: "",
    adults: "",
    children: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const convertTo24Hour = (time12h: string): string => {
    if (!time12h) return "";

    const [time, modifier] = time12h.split(" ");
    let [hours] = time.split(":");
    const [, minutes] = time.split(":");

    if (hours === "12") {
      hours = "00";
    }

    if (modifier === "PM") {
      hours = (parseInt(hours, 10) + 12).toString();
    }

    return `${hours.padStart(2, "0")}:${minutes}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      // Convert time format before sending to backend
      const formDataToSend = {
        ...formData,
        time: convertTo24Hour(formData.time),
      };

      const result = await submitForm(formDataToSend);
      toast.success("Form submitted successfully!");
      console.log("Form submitted:", result);

      // Reset form after successful submission
      setFormData({
        name: "",
        phone: "",
        email: "",
        date: "",
        time: "",
        adults: "",
        children: "",
        message: "",
      });
    } catch (err) {
      console.log("This is the error:", err);
      const error = err as BackendError;

      if (error?.errors?.length) {
        error.errors.forEach((e) => {
          toast.error(`${e.field}: ${e.message}`);
        });
      } else if (error?.message) {
        toast.error(error.message);
      } else {
        toast.error("Something went wrong, please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <header className="relative bg-cover bg-center min-h-screen">
      {/* Background Image - Different for mobile and desktop */}
      <div
        className="absolute inset-0 hidden md:block scale-x-[-1]"
        style={{
          backgroundImage: `url(${headerImg.src})`,
          backgroundSize: "104%",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Mobile Background */}
      <div
        className="absolute inset-0 md:hidden"
        style={{
          backgroundImage: `url(${headerPhonesize.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>

      {/* Mobile Navigation (up to md) */}
      <div className="md:hidden absolute top-4 left-0 right-0 px-4 z-20">
        <div className="flex justify-between items-center">
          <Image
            src={logo}
            alt="Entrex Logo"
            width={120}
            height={26}
            className="sm:w-[140px] sm:h-[31px]"
            priority
          />
          <button className="text-white">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
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

      {/* Desktop Navigation (md and above) */}
      <div className="hidden md:flex absolute top-4 left-0 right-0 px-6 lg:px-8 xl:px-12 2xl:px-16 justify-between items-center z-10">
        <div className="lg:pl-8 xl:pl-12 2xl:pl-14">
          <Image
            src={logo}
            alt="Entrex Logo"
            width={180}
            height={140}
            className="h-auto"
            priority
          />
        </div>

        <nav className="flex space-x-4 lg:space-x-6 xl:space-x-8 2xl:space-x-10 text-white text-base lg:text-lg xl:text-[18px] 2xl:text-[20px] font-normal lg:pr-8 xl:pr-12 2xl:pr-14">
          <a href="#" className="hover:underline whitespace-nowrap">
            About Us
          </a>
          <a href="#" className="hover:underline">
            Services
          </a>
          <a href="#" className="hover:underline whitespace-nowrap">
            Tour Packages
          </a>
          <a href="#" className="hover:underline whitespace-nowrap">
            Luxury Car Rentals
          </a>
          <a href="#" className="hover:underline">
            Clients
          </a>
          <a href="#" className="hover:underline whitespace-nowrap">
            Contact Us
          </a>
        </nav>
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Mobile Layout (up to md) */}
        <div className="md:hidden flex-1 flex flex-col justify-center px-4 pt-20 pb-24 space-y-6">
          {/* Car GIF */}
          <div className="flex justify-center">
            <div className="relative w-[234px] h-[234px] sm:w-28 sm:h-28">
              <Image
                src={carGif}
                alt="Car gif"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
          </div>

          {/* Heading */}
          <div className="text-center text-white space-y-1 sm:-mt-8">
            <h1 className="text-2xl sm:text-3xl font-medium leading-tight">
              Premium Chauffeur
            </h1>
            <h1 className="text-2xl sm:text-3xl font-medium leading-tight">
              Services for Every Journey
            </h1>
          </div>

          {/* Description */}
          <p className="text-center text-white text-sm sm:text-base font-light leading-relaxed max-w-xs sm:max-w-sm mx-auto">
            From corporate travel to airport transfers, ENTREX ensures a safe,
            punctual, and comfortable ride—every time.
          </p>

          {/* Stats row - Mobile */}
          <div className="flex justify-center space-x-6 sm:space-x-8 text-white text-center">
            <div>
              <p className="text-xl sm:text-2xl font-semibold">Verified</p>
              <p className="text-xs sm:text-sm font-light">Chauffeurs</p>
            </div>
            <div>
              <p className="text-xl sm:text-2xl font-semibold">Real-time</p>
              <p className="text-xs sm:text-sm font-light">Tracking</p>
            </div>
            <div>
              <p className="text-xl sm:text-2xl font-semibold">24×7</p>
              <p className="text-xs sm:text-sm font-light">Support</p>
            </div>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 px-2">
            <button className="flex-1 bg-gradient-to-r from-red-500 to-orange-400 text-white rounded-full px-4 py-2.5 text-sm sm:text-base font-semibold shadow-lg hover:opacity-90 transition">
              Call Us Now
            </button>
            <button className="flex-1 border-2 border-white text-white rounded-full px-4 py-2.5 text-sm sm:text-base font-semibold hover:bg-white hover:text-black transition">
              Book Now
            </button>
          </div>
        </div>

        {/* Tablet Layout (md to lg) */}
        <div className="hidden md:flex lg:hidden absolute inset-0 pt-24 pb-8">
          <div className="flex flex-col justify-center items-center w-full px-8 space-y-8 text-white text-center">
            {/* Car GIF */}
            <div className="relative w-32 h-32">
              <Image
                src={carGif}
                alt="Car gif"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>

            {/* Heading */}
            <div className="space-y-2">
              <h1 className="text-4xl font-medium leading-tight">
                Premium Chauffeur
              </h1>
              <h1 className="text-4xl font-medium leading-tight">
                Services for Every Journey
              </h1>
            </div>

            {/* Description */}
            <p className="text-lg font-light leading-relaxed max-w-2xl">
              From corporate travel to airport transfers, ENTREX ensures a safe,
              punctual, and comfortable ride—every time.
            </p>

            {/* Stats row */}
            <div className="flex justify-center space-x-12 pt-4">
              <div>
                <p className="text-3xl font-semibold leading-none">Verified</p>
                <p className="text-base font-light">Chauffeurs</p>
              </div>
              <div>
                <p className="text-3xl font-semibold leading-none">Real-time</p>
                <p className="text-base font-light">Tracking</p>
              </div>
              <div>
                <p className="text-3xl font-semibold leading-none">24×7</p>
                <p className="text-base font-light">Support</p>
              </div>
            </div>

            {/* Call to Action Buttons */}
            <div className="flex gap-6 pt-4">
              <button className="bg-gradient-to-r from-red-500 to-orange-400 text-white rounded-full px-8 py-3 text-lg font-semibold shadow-lg hover:opacity-90 transition">
                Call Us Now
              </button>
              <button className="border-2 border-white text-white rounded-full px-8 py-3 text-lg font-semibold hover:bg-white hover:text-black transition">
                Book Now
              </button>
            </div>
          </div>
        </div>

        {/* Desktop Layout (lg and above) - 1024px+ */}
        <div className="hidden lg:flex absolute inset-0 justify-between items-end pb-32 xl:pb-36 2xl:pb-40 px-6 lg:px-8 xl:px-12 2xl:px-16 text-white">
          {/* Left Text Content */}
          <div className="lg:w-1/2 xl:w-[55%] 2xl:w-1/2 space-y-4 lg:space-y-5 xl:space-y-6 lg:pl-8 xl:pl-12 2xl:pl-14">
            {/* Car GIF above text */}
            <div className="relative w-[100px] h-[100px] lg:w-[120px] lg:h-[120px] xl:w-[140px] xl:h-[140px] -mb-6 lg:-mb-7 xl:-mb-8">
              <Image
                src={carGif}
                alt="Car gif"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>

            {/* Heading - Responsive font sizes for different desktop breakpoints */}
            <div>
              <h1 className="text-3xl lg:text-4xl xl:text-5xl 2xl:text-[63px] font-medium leading-tight">
                Premium Chauffeur
              </h1>
              <h1 className="text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-medium leading-tight">
                Services for Every Journey
              </h1>
            </div>

            {/* Description */}
            <p className="max-w-md lg:max-w-lg xl:max-w-xl text-base lg:text-lg xl:text-xl font-light leading-relaxed">
              From corporate travel to airport transfers, ENTREX ensures a safe,
              punctual, and comfortable ride—every time.
            </p>

            {/* Call Us Now button */}
            <button className="bg-gradient-to-r from-red-500 to-orange-400 text-white rounded-full px-6 py-2.5 lg:px-7 lg:py-3 xl:px-8 xl:py-3 text-base lg:text-lg xl:text-xl font-semibold shadow-lg hover:opacity-90 transition">
              Call Us Now
            </button>

            {/* Stats row - Responsive spacing and sizing */}
            <div className="flex space-x-8 lg:space-x-12 xl:space-x-16 pt-6 lg:pt-8 xl:pt-9">
              <div>
                <p className="text-2xl lg:text-3xl xl:text-4xl font-semibold leading-none">
                  Verified
                </p>
                <p className="text-sm lg:text-base font-light">Chauffeurs</p>
              </div>
              <div>
                <p className="text-2xl lg:text-3xl xl:text-4xl font-semibold leading-none">
                  Real-time
                </p>
                <p className="text-sm lg:text-base font-light">Tracking</p>
              </div>
              <div>
                <p className="text-2xl lg:text-3xl xl:text-4xl font-semibold leading-none">
                  24×7
                </p>
                <p className="text-sm lg:text-base font-light">Support</p>
              </div>
            </div>
          </div>

          {/* Right Form Content - Responsive form sizing */}
          <div className="relative bg-gradient-to-r from-red-500/90 to-orange-400/90 p-6 lg:p-7 xl:p-8 rounded-2xl lg:rounded-3xl w-full max-w-sm lg:max-w-md xl:max-w-lg text-white shadow-lg text-center transform lg:-translate-x-8 xl:-translate-x-16 2xl:-translate-x-10">
            <h2 className="text-xl lg:text-2xl xl:text-2xl font-medium mb-4 lg:mb-5 xl:mb-6">
              Book Your Ride Instantly
            </h2>
            <form onSubmit={handleSubmit} className="space-y-3 lg:space-y-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="p-2.5 lg:p-3 rounded w-full bg-white/20 placeholder-white text-white text-sm lg:text-base focus:outline-none focus:ring-2 focus:ring-white"
                />
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="p-2.5 lg:p-3 rounded w-full bg-white/20 placeholder-white text-white text-sm lg:text-base focus:outline-none focus:ring-2 focus:ring-white"
                />
              </div>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="p-2.5 lg:p-3 rounded w-full bg-white/20 placeholder-white text-white text-sm lg:text-base focus:outline-none focus:ring-2 focus:ring-white"
              />
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-4">
                <select
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="p-2.5 lg:p-3 rounded w-full bg-white/20 text-white text-sm lg:text-base focus:outline-none focus:ring-2 focus:ring-white appearance-none cursor-pointer"
                  style={{
                    backgroundImage:
                      "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%23ffffff' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e\")",
                    backgroundPosition: "right 0.5rem center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "1.5em 1.5em",
                  }}
                >
                  <option
                    value=""
                    style={{ backgroundColor: "#ffffff", color: "#000000" }}
                  >
                    Select Date
                  </option>
                  <option
                    value="2025-08-12"
                    style={{ backgroundColor: "#ffffff", color: "#000000" }}
                  >
                    12 Aug 2025
                  </option>
                  <option
                    value="2025-08-13"
                    style={{ backgroundColor: "#ffffff", color: "#000000" }}
                  >
                    13 Aug 2025
                  </option>
                  <option
                    value="2025-08-14"
                    style={{ backgroundColor: "#ffffff", color: "#000000" }}
                  >
                    14 Aug 2025
                  </option>
                </select>
                <select
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  className="p-2.5 lg:p-3 rounded w-full bg-white/20 text-white text-sm lg:text-base focus:outline-none focus:ring-2 focus:ring-white appearance-none cursor-pointer"
                  style={{
                    backgroundImage:
                      "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%23ffffff' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e\")",
                    backgroundPosition: "right 0.5rem center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "1.5em 1.5em",
                  }}
                >
                  <option
                    value=""
                    style={{ backgroundColor: "#ffffff", color: "#000000" }}
                  >
                    Select Time
                  </option>
                  <option
                    value="10:00 AM"
                    style={{ backgroundColor: "#ffffff", color: "#000000" }}
                  >
                    10:00 AM
                  </option>
                  <option
                    value="12:00 PM"
                    style={{ backgroundColor: "#ffffff", color: "#000000" }}
                  >
                    12:00 PM
                  </option>
                  <option
                    value="03:00 PM"
                    style={{ backgroundColor: "#ffffff", color: "#000000" }}
                  >
                    03:00 PM
                  </option>
                </select>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-4">
                <select
                  name="adults"
                  value={formData.adults}
                  onChange={handleChange}
                  className="p-2.5 lg:p-3 rounded w-full bg-white/20 text-white text-sm lg:text-base focus:outline-none focus:ring-2 focus:ring-white appearance-none cursor-pointer"
                  style={{
                    backgroundImage:
                      "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%23ffffff' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e\")",
                    backgroundPosition: "right 0.5rem center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "1.5em 1.5em",
                  }}
                >
                  <option
                    value=""
                    style={{ backgroundColor: "#ffffff", color: "#000000" }}
                  >
                    Adults
                  </option>
                  <option
                    value="1"
                    style={{ backgroundColor: "#ffffff", color: "#000000" }}
                  >
                    1 Adult
                  </option>
                  <option
                    value="2"
                    style={{ backgroundColor: "#ffffff", color: "#000000" }}
                  >
                    2 Adults
                  </option>
                  <option
                    value="3"
                    style={{ backgroundColor: "#ffffff", color: "#000000" }}
                  >
                    3 Adults
                  </option>
                </select>
                <select
                  name="children"
                  value={formData.children}
                  onChange={handleChange}
                  className="p-2.5 lg:p-3 rounded w-full bg-white/20 text-white text-sm lg:text-base focus:outline-none focus:ring-2 focus:ring-white appearance-none cursor-pointer"
                  style={{
                    backgroundImage:
                      "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%23ffffff' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e\")",
                    backgroundPosition: "right 0.5rem center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "1.5em 1.5em",
                  }}
                >
                  <option
                    value=""
                    style={{ backgroundColor: "#ffffff", color: "#000000" }}
                  >
                    Children
                  </option>
                  <option
                    value="0"
                    style={{ backgroundColor: "#ffffff", color: "#000000" }}
                  >
                    0 Children
                  </option>
                  <option
                    value="1"
                    style={{ backgroundColor: "#ffffff", color: "#000000" }}
                  >
                    1 Child
                  </option>
                  <option
                    value="2"
                    style={{ backgroundColor: "#ffffff", color: "#000000" }}
                  >
                    2 Children
                  </option>
                </select>
              </div>
              <textarea
                name="message"
                placeholder="Message"
                rows={3}
                value={formData.message}
                onChange={handleChange}
                className="p-2.5 lg:p-3 rounded w-full bg-white/20 placeholder-white text-white text-sm lg:text-base focus:outline-none focus:ring-2 focus:ring-white"
              ></textarea>

              <div className="flex justify-between gap-3 lg:gap-4">
                <button
                  type="button"
                  onClick={() =>
                    setFormData({
                      name: "",
                      phone: "",
                      email: "",
                      date: "",
                      time: "",
                      adults: "",
                      children: "",
                      message: "",
                    })
                  }
                  className="flex-1 border border-white rounded-full py-2 lg:py-2.5 text-sm lg:text-base hover:bg-white hover:text-black transition"
                >
                  RESET
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="flex-1 bg-white text-black font-semibold rounded-full py-2 lg:py-2.5 text-sm lg:text-base hover:bg-gray-200 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {loading && (
                    <svg
                      className="animate-spin h-5 w-5 mr-2 text-black"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                      ></path>
                    </svg>
                  )}
                  {loading ? "Submitting..." : "LET'S BOOK NOW"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </header>
  );
}
