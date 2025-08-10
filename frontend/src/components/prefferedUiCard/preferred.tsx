"use client";
import Image from "next/image";
import carImage from "../../assets/family.png.jpg";
import shape from "../../assets/Shape.png";
import shape1 from "../../assets/Shape1.png";

export default function PreferredSection() {
  return (
    <section className="bg-[#f7f4df] py-8 sm:py-12 lg:py-16">
      <div className="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-medium text-gray-900 leading-tight">
          Why ENTREX Is the Preferred Partner <br className="hidden sm:block" />{" "}
          for Premium Tourist Travel in India
        </h2>
        <p className="mt-6 sm:mt-8 lg:mt-12 text-gray-600 max-w-6xl text-base sm:text-lg md:text-xl lg:text-3xl xl:text-2xl font-normal mx-auto leading-relaxed">
          Whether you&apos;re an international traveler, a corporate guest, or
          an expat exploring India, ENTREX delivers a seamless journey with
          professional chauffeurs, luxury vehicles, and end-to-end travel
          solutions.
        </p>
      </div>

      {/* Mobile & Tablet Layout (md and below) */}
      <div className="block lg:hidden mt-8 sm:mt-12 px-4">
        <div className="max-w-lg mx-auto">
          {/* Main Image */}
          <div
            className="relative rounded-[20px] sm:rounded-[30px] overflow-hidden shadow-lg mx-auto"
            style={{ border: "8px solid black" }}
          >
            <Image
              src={carImage}
              alt="Family traveling in car"
              className="rounded-xl sm:rounded-2xl w-full h-auto"
              width={600}
              height={600}
              priority
            />
          </div>

          {/* Stats Cards - Stacked on Mobile */}
          <div className="space-y-4 mt-6">
            {/* Tours Completed Card */}
            <div className="bg-white shadow-lg rounded-xl p-4 sm:p-6 text-left">
              <p className="text-lg sm:text-xl font-semibold text-[#1d1d4f] leading-snug">
                Tours Completed
              </p>
              <p className="text-2xl sm:text-3xl font-bold text-black leading-tight mt-2">
                27,632{" "}
                <span className="text-green-500 text-sm sm:text-base">+2.5%</span>
              </p>
              <p className="text-xs sm:text-sm text-gray-500 mt-1">
                Compared to (21,340 last year)
              </p>
            </div>

            {/* Hit Rate Card */}
            <div className="bg-white shadow-lg rounded-xl p-4 sm:p-6 flex items-center space-x-4">
              {/* Circle with images */}
              <div className="relative w-12 h-12 sm:w-14 sm:h-14 flex-shrink-0">
                <div className="w-full h-full rounded-full border-[3px] sm:border-[4px] border-gray-300 relative flex items-center justify-center">
                  <Image
                    src={shape1}
                    alt="shape1"
                    width={20}
                    height={20}
                    className="z-10 sm:w-6 sm:h-6"
                  />
                </div>
                <div className="absolute top-6 sm:top-7 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 sm:w-14 h-12 sm:h-14 z-20">
                  <Image
                    src={shape}
                    alt="shape overlay"
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
              </div>

              {/* Text */}
              <div className="text-left">
                <p className="text-2xl sm:text-3xl font-bold text-[#1d1d4f] leading-tight">
                  68%
                </p>
                <p className="text-sm sm:text-base text-gray-500">
                  Hit Rate this year
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Layout (lg and above) */}
      <div className="relative mt-12 hidden lg:flex justify-center overflow-visible px-4 xl:px-8 2xl:px-16">
        <div className="w-full max-w-[1260px] flex justify-center">
          {/* Main Image */}
          <div
            className="relative rounded-[43px] overflow-visible shadow-lg"
            style={{ border: "15px solid black" }}
          >
            <Image
              src={carImage}
              alt="Family traveling in car"
              className="rounded-2xl"
              width={1260}
              height={1260}
              priority
            />

            {/* Left Stat Card - Improved responsive positioning */}
            <div
              className="
                absolute top-[219px] 
                left-0 
                bg-white shadow-lg rounded-xl py-6 text-left 
                
                lg:-translate-x-1/2 lg:px-4 lg:min-w-[280px]
                xl:-translate-x-[55%] xl:px-6 xl:min-w-[320px]
                
                min-[1700px]:-translate-x-[60%] min-[1700px]:px-8 min-[1700px]:min-w-[380px]
                
                2xl:-translate-x-[65%] 2xl:px-8 2xl:min-w-[400px]
              "
            >
              <p className="lg:text-xl xl:text-2xl min-[1700px]:text-3xl font-semibold text-[#1d1d4f] leading-snug">
                Tours Completed
              </p>
              <p className="lg:text-3xl xl:text-4xl min-[1700px]:text-5xl font-bold text-black leading-tight mt-2">
                27,632{" "}
                <span className="text-green-500 lg:text-sm xl:text-base min-[1700px]:text-lg">+2.5%</span>
              </p>
              <p className="text-sm text-gray-500 mt-1">
                Compared to (21,340 last year)
              </p>
            </div>

            {/* Right Stat Card - Improved responsive positioning */}
            <div
              className="
                absolute top-[319px] 
                right-0 
                bg-white shadow-lg rounded-xl py-6 flex items-center space-x-3 
                
                lg:translate-x-1/2 lg:px-4 lg:min-w-[280px] lg:space-x-3
                xl:translate-x-[55%] xl:px-6 xl:min-w-[320px] xl:space-x-4
                
                min-[1700px]:translate-x-[60%] min-[1700px]:px-8 min-[1700px]:min-w-[380px] min-[1700px]:space-x-4
                
                2xl:translate-x-[65%] 2xl:px-8 2xl:min-w-[400px] 2xl:space-x-4
              "
            >
              {/* Left side: Circle with images */}
              <div className="relative lg:w-12 lg:h-12 xl:w-14 xl:h-14 min-[1700px]:w-16  min-[1700px]:h-16 flex-shrink-0">
                {/* Gray circle */}
                <div className="w-full h-full rounded-full lg:border-[3px] xl:border-[4px] min-[1700px]:border-[5px] border-gray-300 relative flex items-center justify-center">
                  {/* shape1 image inside the circle, centered */}
                  <Image
                    src={shape1}
                    alt="shape1"
                    width={20}
                    height={20}
                    className="z-10 lg:w-5 lg:h-5 xl:w-7 xl:h-7 min-[1700px]:w-8 min-[1700px]:h-8"
                  />
                </div>
                {/* shape image positioned on top of the circle */}
                <div className="absolute lg:top-6 xl:top-7 min-[1700px]:top-8 left-1/2 transform -translate-x-1/2 -translate-y-1/2 lg:w-12 lg:h-12 xl:w-14 xl:h-14 min-[1700px]:w-16 min-[1700px]:h-16 z-20">
                  <Image
                    src={shape}
                    alt="shape overlay"
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
              </div>

              {/* Right side: Text */}
              <div className="text-left">
                <p className="lg:text-3xl xl:text-4xl min-[1700px]:text-5xl font-bold text-[#1d1d4f] leading-tight">
                  68%
                </p>
                <p className="lg:text-sm xl:text-base min-[1700px]:text-lg text-gray-500">
                  Hit Rate this year
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}