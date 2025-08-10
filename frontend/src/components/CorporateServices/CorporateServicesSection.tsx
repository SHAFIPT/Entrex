"use client";
import Image from "next/image";
import card1 from "../../assets/card1.jpg";
import card2 from "../../assets/card2.jpg";
import card3 from "../../assets/card3.jpg";
import card4 from "../../assets/card4.jpg";
import card5 from "../../assets/card5.jpg";
import vector from "../../assets/Vector (1).png";

export default function CorporateServicesSection() {
  return (
    <section className="bg-[#f2f2f2] py-8 lg:py-12">
      <div className="max-w-[1700px] mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-5xl sm:text-6xl lg:text-7xl xl:text-7xl font-bold text-gray-900">
            Our Services
          </h2>
          <p className="text-gray-500 mt-2">
            Premium travel solutions tailored for businesses and individuals
            across India.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 mb-12 px-4">
          <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 rounded-full font-medium text-sm sm:text-base lg:text-lg transition-all duration-300 hover:shadow-lg hover:scale-105 w-full sm:w-auto min-w-[200px] sm:min-w-[180px] lg:min-w-[220px]">
            Corporate Solutions
          </button>
          <button className="bg-gray-200 text-gray-800 px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 rounded-full font-medium text-sm sm:text-base lg:text-lg transition-all duration-300 hover:bg-gray-300 hover:shadow-md hover:scale-105 w-full sm:w-auto min-w-[200px] sm:min-w-[180px] lg:min-w-[220px]">
            Personal / Retail Rides
          </button>
        </div>


        {/* Services Grid - Much Larger Cards */}
        <div className="grid md:grid-cols-3 gap-10">
          {/* Card 1 - Spans 2 columns */}
          <div className="relative rounded-2xl overflow-hidden group md:col-span-2">
            <Image
              src={card1}
              alt="Employee Commute Solutions"
              width={800}
              height={500}
              className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end p-8">
              {/* Vector Icon */}
              <div className="mb-4">
                <Image
                  src={vector}
                  alt="Service Icon"
                  width={40}
                  height={40}
                  className="w-5 h-5 object-contain filter brightness-0 invert"
                />
              </div>
              <h3 className="text-white text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3">
                Employee Commute Solutions
              </h3>
              <p className="text-gray-200 text-sm sm:text-base md:text-lg w-[500px] leading-relaxed">
                Daily transportation for corporate staff with fixed routes,
                real-time tracking, and punctual pickups.
              </p>
            </div>
          </div>

          {/* Card 2 - Single column */}
          <div className="relative rounded-2xl overflow-hidden group">
            <Image
              src={card2}
              alt="Executive Chauffeur Service"
              width={600}
              height={500}
              className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end p-8">
              {/* Vector Icon */}
              <div className="mb-4">
                <Image
                  src={vector}
                  alt="Service Icon"
                  width={40}
                  height={40}
                  className="w-5 h-5 object-contain filter brightness-0 invert"
                />
              </div>
              <h3 className="text-white text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3">
                Executive Chauffeur Service
              </h3>
              <p className="text-gray-200 text-sm sm:text-base md:text-lg leading-relaxed">
                Suited, trained chauffeurs with luxury vehicles for directors,
                clients, and VIP executives.
              </p>
            </div>
          </div>

          {/* Card 3 - Single column */}
          <div className="relative rounded-2xl overflow-hidden group">
            <Image
              src={card3}
              alt="Event & Conference Travel"
              width={600}
              height={500}
              className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end p-8">
              {/* Vector Icon */}
              <div className="mb-4">
                <Image
                  src={vector}
                  alt="Service Icon"
                  width={40}
                  height={40}
                  className="w-5 h-5 object-contain filter brightness-0 invert"
                />
              </div>
              <h3 className="text-white text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3">
                Event & Conference Travel
              </h3>
              <p className="text-gray-200 text-sm sm:text-base md:text-lg  leading-relaxed">
                Coordinated fleet for business meetings, seminars, and corporate
                gatherings—managed end-to-end.
              </p>
            </div>
          </div>

          {/* Card 4 - Single column */}
          <div className="relative rounded-2xl overflow-hidden group">
            <Image
              src={card4}
              alt="Airport Transfers"
              width={600}
              height={500}
              className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end p-8">
              {/* Vector Icon */}
              <div className="mb-4">
                <Image
                  src={vector}
                  alt="Service Icon"
                  width={40}
                  height={40}
                  className="w-5 h-5 object-contain filter brightness-0 invert"
                />
              </div>
              <h3 className="text-white text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3">
                Airport Transfers
              </h3>
              <p className="text-gray-200 text-sm sm:text-base md:text-lg leading-relaxed">
                Timely drop-offs and pickups for your team and guests from all
                major airports with live flight monitoring.
              </p>
            </div>
          </div>

          {/* Card 5 - Single column */}
          <div className="relative rounded-2xl overflow-hidden group">
            <Image
              src={card5}
              alt="Transport Desk Management"
              width={600}
              height={500}
              className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end p-8">
              {/* Vector Icon */}
              <div className="mb-4">
                <Image
                  src={vector}
                  alt="Service Icon"
                  width={40}
                  height={40}
                  className="w-5 h-5 object-contain filter brightness-0 invert"
                />
              </div>
              <h3 className="text-white text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3">
                Transport Desk Management
              </h3>
              <p className="text-gray-200 text-sm sm:text-base md:text-lg leading-relaxed">
                On-demand ride management with 24×7 support, live dashboards,
                and centralized control from our app or portal.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}