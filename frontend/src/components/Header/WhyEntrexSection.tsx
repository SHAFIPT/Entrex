"use client";
import Image from "next/image";
import carImage from "../../assets/carImag.png";
import premium from "../../assets/premium-icon.png";
import transpenren from "../../assets/transparent-icon.png";
import medel from "../../assets/medal.png";
import support from "../../assets/24-support.png";
import magic from "../../assets/magic-star.png";
import gps from "../../assets/gps.png";

export default function WhyEntrexSection() {
  const featuresLeft = [
    {
      icon: (
        <Image src={premium} alt="Premium Chauffeurs" width={32} height={32} />
      ),
      title: "Premium Chauffeurs",
      desc: "All our drivers are handpicked, background-verified, professionally dressed, and trained for top-tier customer service.",
    },
    {
      icon: (
        <Image src={magic} alt="Premium Chauffeurs" width={32} height={32} />
      ),
      title: "Well-Maintained Vehicles",
      desc: "Our fleet is serviced regularly, sanitized daily, and equipped with modern amenities for a smooth and safe ride.",
    },
    {
      icon: <Image src={gps} alt="Premium Chauffeurs" width={32} height={32} />,
      title: "Real-Time Tracking",
      desc: "We offer GPS-enabled rides so you—and your loved ones—can track your journey with full transparency.",
    },
  ];

  const featuresRight = [
    {
      icon: (
        <Image
          src={transpenren}
          alt="Premium Chauffeurs"
          width={32}
          height={32}
        />
      ),
      title: "Transparent Pricing",
      desc: "No hidden charges. Transparent fare structure with real-time billing through our app.",
    },
    {
      icon: (
        <Image src={medel} alt="Premium Chauffeurs" width={32} height={32} />
      ),
      title: "Punctual & Reliable",
      desc: "Time is valuable. Our chauffeurs arrive ahead of schedule and follow optimized routes for timely arrivals.",
    },
    {
      icon: (
        <Image src={support} alt="Premium Chauffeurs" width={32} height={32} />
      ),
      title: "24×7 Dedicated Support",
      desc: "Our operations team is available around the clock to assist with bookings, changes, or emergencies.",
    },
  ];

  return (
    <section className="py-16 -lg:py-20 pb-8 -lg:pb-12 bg-[#f2f2f2]">
      <div className="max-w-7xl mx-auto px-4 text-center">
        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
          Why{" "}
          <span className="relative inline-block">
            <span className="relative z-10 text-black">ENTREX?</span>
            <span
              className="
        absolute 
        bottom-[-12px] sm:bottom-[-14px] lg:bottom-[-16px] 
        left-0 
        w-[170px] sm:w-[200px] lg:w-[250px] 
        h-6 sm:h-7 lg:h-8 
        bg-gradient-to-r from-red-500 to-orange-400 
        -z-0
        "
              style={{
                transform: "rotate(-3deg)",
                transformOrigin: "left bottom",
              }}
            ></span>
          </span>
        </h2>

        <p className="text-lg sm:text-xl text-gray-600 -mb-12">
          Trusted by hundreds of travelers and corporates across India for a
          premium ride experience.
        </p>

        {/* Desktop Layout */}
        <div className="hidden md:block relative">
          {/* Car Image */}
          <div className="flex justify-center">
            <Image
              src={carImage}
              alt="Entrex Car"
              className="w-full max-w-5xl object-contain"
            />
          </div>

          {/* Left Side */}
          <div className="absolute top-[15%] left-[124px] max-w-xs text-right">
            <div className="flex items-center justify-end gap-2">
              {featuresLeft[0].icon}
              <h3 className="font-bold text-xl">{featuresLeft[0].title}</h3>
            </div>
            <p className="text-gray-600">{featuresLeft[0].desc}</p>
          </div>

          <div className="absolute top-[40%] -left-[134px] max-w-xs text-right">
            <div className="flex items-center justify-end gap-2">
              {featuresLeft[1].icon}
              <h3 className="font-semibold text-xl">{featuresLeft[1].title}</h3>
            </div>
            <p className="text-gray-600">{featuresLeft[1].desc}</p>
          </div>

          <div className="absolute bottom-[10%] -left-[134px] max-w-xs text-right">
            <div className="flex items-center justify-end gap-2">
              {featuresLeft[2].icon}
              <h3 className="font-semibold text-xl">{featuresLeft[2].title}</h3>
            </div>
            <p className="text-gray-600">{featuresLeft[2].desc}</p>
          </div>

          {/* Right Side */}
          <div className="absolute top-[15%] right-0 max-w-xs text-left">
            <div className="flex items-center gap-2">
              {featuresRight[0].icon}
              <h3 className="font-semibold text-xl">
                {featuresRight[0].title}
              </h3>
            </div>
            <p className="text-gray-600">{featuresRight[0].desc}</p>
          </div>

          <div className="absolute top-[40%] -right-[120px] max-w-xs text-left">
            <div className="flex items-center gap-2">
              {featuresRight[1].icon}
              <h3 className="font-semibold text-xl">
                {featuresRight[1].title}
              </h3>
            </div>
            <p className="text-gray-600">{featuresRight[1].desc}</p>
          </div>

          <div className="absolute bottom-[10%] -right-[120px] max-w-xs text-left">
            <div className="flex items-center gap-2">
              {featuresRight[2].icon}
              <h3 className="font-semibold text-xl">
                {featuresRight[2].title}
              </h3>
            </div>
            <p className="text-gray-600">{featuresRight[2].desc}</p>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden space-y-8">
          <div className="flex justify-center">
            <Image
              src={carImage}
              alt="Entrex Car"
              className="w-64 sm:w-80 object-contain"
            />
          </div>
          {[...featuresLeft, ...featuresRight].map((f, i) => (
            <div key={i} className="flex items-start gap-4 text-left">
              {f.icon}
              <div>
                <h3 className="font-semibold text-lg">{f.title}</h3>
                <p className="text-gray-600">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
