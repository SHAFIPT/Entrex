"use client";
import Image from "next/image";
import google from "../../assets/google.png";
import creative from "../../assets/creative.png";
import airbin from "../../assets/airbin.png";
import shopify from "../../assets/shopify.png";
import amazon from "../../assets/amazon.png";
import Dropbox from "../../assets/Dropbox.png";
import spotify from "../../assets/spotify.png";
import asana from "../../assets/asana.png";
import delivero from "../../assets/delivero.png";
import nizzan from "../../assets/nizzan.png";
import goldWreath from "../../assets/gold-wreath.png"; // Your olive/wreath PNG
import cert1 from "../../assets/cert1.png"; // Replace with your real certificate images
import cert2 from "../../assets/cert2.png";

export default function KeyHighlightsSection() {
  const items = [
    {
      text: "Multilingual ",
      highlight: "Chauffeurs",
      color: "text-orange-500",
    },
    {
      text: "Entrex ",
      highlight: "Client Kit",
      color: "text-orange-500",
      suffix: " for every trip",
    },
    {
      text: "100% Statutory ",
      highlight: "Compliance ensured",
      color: "text-orange-500",
    },
    {
      highlight: "Luxury",
      color: "text-orange-500",
      suffix: " and Well maintained vehicles",
    },
    {
      text: "Vehicles with average age of ",
      highlight: "less than 3 years",
      color: "text-orange-500",
    },
    {
      highlight: "Best Pricing",
      color: "text-red-500",
      suffix: " among the Premium segment service providers",
    },
    {
      highlight: "ZERO Payment",
      color: "text-red-500",
      suffix: " commitment in case of any flaw in the trip service",
    },
    {
      highlight: "Safety & Security",
      color: "text-red-500",
      suffix:
        " ensured through high-end GPS based solution and Remote vehicle control",
    },
    {
      text: "Packaged Solutioning covering Accommodation, Food, Sight-seeing, Tourist Guide etc for ",
      highlight: "Expat / Executive Tourism",
      color: "text-orange-500",
    },
    {
      text: "For long stay Clients, ",
      highlight: "dedicated Chauffeur & Vehicle",
      color: "text-red-500",
      suffix: " for undisturbed service",
    },
  ];

  const brands = [
    { name: "Google", src: google },
    { name: "Creative Market", src: creative },
    { name: "Airbin", src: airbin },
    { name: "Shopify", src: shopify },
    { name: "Amazon", src: amazon },
    { name: "Dropbox", src: Dropbox },
    { name: "Spotify", src: spotify },
    { name: "Asana", src: asana },
    { name: "Deliveroo", src: delivero },
    { name: "Nissan", src: nizzan },
  ];

  return (
    <section className="bg-[#f2f2f2] py-12 sm:py-16 lg:py-20">
      {/* Tags Section */}
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 lg:gap-6 max-w-7xl mx-auto">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="border border-dashed border-gray-300 rounded-lg sm:rounded-xl px-3 sm:px-4 lg:px-6 py-2 sm:py-3 lg:py-4 text-sm sm:text-base lg:text-lg text-gray-900 shadow-sm hover:shadow-md transition-shadow duration-200 bg-white/50"
            >
              {item.text && <span>{item.text}</span>}
              <span className={`${item.color} font-semibold`}>
                {item.highlight}
              </span>
              {item.suffix && <span>{item.suffix}</span>}
            </div>
          ))}
        </div>
      </div>

      {/* Trusted Section */}
      <div className="text-center mt-12 sm:mt-16 lg:mt-24 px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold leading-tight">
          Trusted by{" "}
          <span className="font-extrabold block sm:inline">1500+ popular companies</span>
        </h2>
        <p className="mt-4 sm:mt-6 text-gray-500 text-base sm:text-lg lg:text-xl max-w-6xl mx-auto px-2">
          Every ENTREX ride comes with thoughtful in-car provisions to ensure
          your comfort, safety, and satisfaction.
        </p>

        {/* Brand Logos */}
        <div className="mt-8 sm:mt-12 lg:mt-[86px] grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-16 items-center justify-items-center max-w-7xl mx-auto px-4">
          {brands.map((brand, idx) => (
            <div key={idx} className="p-2 sm:p-3 lg:p-4">
              <Image
                src={brand.src}
                alt={brand.name}
                width={120}
                height={60}
                className="w-20 h-10 sm:w-28 sm:h-14 lg:w-40 lg:h-20 object-contain opacity-80 hover:opacity-100 hover:scale-105 transition-all duration-300 ease-in-out drop-shadow-sm"
              />
            </div>
          ))}
        </div>
      </div>
      
      {/* Certifications Section */}
      <div className="relative mt-16 sm:mt-24 lg:mt-[320px] py-12 sm:py-16 lg:py-20">
        {/* Mobile and Tablet Layout */}
        <div className="block lg:hidden px-4 sm:px-6">
          {/* Gold wreath with overlaid text for mobile/tablet */}
          <div className="relative flex justify-center mb-8 sm:mb-12">
            <Image
              src={goldWreath}
              alt="Gold Wreath"
              width={300}
              height={300}
              className="w-64 h-64 sm:w-80 sm:h-80 opacity-90"
            />
            {/* Overlaid heading inside the wreath */}
            <div className="absolute inset-0 flex items-center justify-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight text-center">
                <span className="block">Our</span>
                <span className="block">Certifications</span>
              </h2>
            </div>
          </div>

          {/* Certifications - Stacked vertically for mobile/tablet */}
          <div className="space-y-8 sm:space-y-12 max-w-md mx-auto">
            {/* First Certification */}
            <div className="text-center">
              <div className="flex justify-center mb-4 sm:mb-6">
                <Image
                  src={cert1}
                  alt="Certification 1"
                  width={240}
                  height={240}
                  className="w-48 h-48 sm:w-60 sm:h-60 rounded-lg shadow-lg"
                />
              </div>
              <h3 className="font-bold text-lg sm:text-xl md:text-2xl mb-3 sm:mb-4 px-2">
                Affiliations: IATO – Indian Association of Tour Operators
              </h3>
              <p className="text-gray-600 text-sm sm:text-base px-2">
                We offer GPS-enabled rides so you—and your loved ones—can track
                your journey with full transparency.
              </p>
            </div>

            {/* Second Certification */}
            <div className="text-center">
              <div className="flex justify-center mb-4 sm:mb-6">
                <Image
                  src={cert2}
                  alt="Certification 2"
                  width={240}
                  height={240}
                  className="w-48 h-48 sm:w-60 sm:h-60 rounded-lg shadow-lg"
                />
              </div>
              <h3 className="font-bold text-lg sm:text-xl md:text-2xl mb-3 sm:mb-4 px-2">
                Affiliations: IATO – Indian Association of Tour Operators
              </h3>
              <p className="text-gray-600 text-sm sm:text-base px-2">
                We offer GPS-enabled rides so you—and your loved ones—can track
                your journey with full transparency.
              </p>
            </div>
          </div>
        </div>

        {/* Desktop Layout (lg and up) - Original design */}
        <div className="hidden lg:block">
          {/* Gold wreath background */}
          <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
            <Image
              src={goldWreath}
              alt="Gold Wreath"
              width={750}
              height={750}
              className="opacity-90"
            />
          </div>

          {/* Content: Centered text in the golden olive */}
          <div className="absolute inset-0 flex justify-center items-center z-10">
            <h2 className="text-6xl font-bold leading-tight text-center">
              <span className="block">Our</span>
              <span className="block">Certifications</span>
            </h2>
          </div>
          
          {/* Certifications container: positioned at center level of the wreath */}
          <div className="absolute inset-0 flex mt-[145px] justify-between items-center z-10 max-w-[1600px] mx-auto px-1 sm:px-20">
            {/* Left Certification - moved slightly more to the left */}
            <div className="max-w-sm -ml-8 sm:-ml-16">
              <Image
                src={cert1}
                alt="Certification 1"
                width={280}
                height={280}
                className="rounded-lg shadow-lg"
              />
              <h3 className="mt-6 font-bold text-[24px]">
                Affiliations: IATO – Indian Association of Tour Operators
              </h3>
              <p className="text-gray-600 mt-3">
                We offer GPS-enabled rides so you—and your loved ones—can track
                your journey with full transparency.
              </p>
            </div>

            {/* Right Certification - moved slightly more to the right */}
            <div className="max-w-sm -mr-8 sm:-mr-16">
              <Image
                src={cert2}
                alt="Certification 2"
                width={280}
                height={280}
                className="rounded-lg shadow-lg"
              />
              <h3 className="mt-6 font-bold text-[24px]">
                Affiliations: IATO – Indian Association of Tour Operators
              </h3>
              <p className="text-gray-600 mt-3 text-base">
                We offer GPS-enabled rides so you—and your loved ones—can track
                your journey with full transparency.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}