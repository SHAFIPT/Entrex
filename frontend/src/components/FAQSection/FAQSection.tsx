"use client";

export default function FAQSection() {
  return (
    <section className="-mt-[54px] -sm:mt-24 lg:mt-[164px] py-12 sm:py-16 lg:py-20">
      <div className="max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-14">
          <div className="bg-gradient-to-r from-orange-500 to-red-500 text-lg sm:text-xl lg:text-[25px] font-bold mb-2 bg-clip-text text-transparent">
            FAQ
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
            Frequently Asked Questions (FAQs)
          </h2>
          <p className="mt-3 sm:mt-5 text-gray-500 text-sm sm:text-base lg:text-[18px] font-normal max-w-4xl mx-auto px-2">
            Got questions? We&apos;ve got answers! Find solutions to common queries
            about our services, processes, and technology.
          </p>
        </div>

        {/* FAQ List */}
        <div className="flex flex-col lg:flex-row lg:gap-[145px] w-full">
          
          {/* Left Column */}
          <div className="flex-1 space-y-6 sm:space-y-8">
            {/* Expanded Question */}
            <div className="border-b border-gray-200 pb-4 sm:pb-6">
              <div className="flex items-start justify-between w-full text-left">
                <span className="font-semibold text-base sm:text-lg lg:text-[20px] text-blue-600 pr-4">
                  What is Webflow and why is it the best website builder?
                </span>
                <span className="text-blue-600 font-bold text-xl sm:text-2xl leading-none flex-shrink-0">
                  −
                </span>
              </div>
              <p className="mt-3 sm:mt-4 text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed">
                Vitae congue eu consequat ac felis placerat vestibulum lectus
                mauris ultrices. Cursus sit amet dictum sit amet justo donec
                enim diam porttitor lacus luctus accumsan tortor posuere.
              </p>
            </div>

            {/* Other Left Column Questions */}
            <div className="border-b border-gray-200 pb-4 sm:pb-6">
              <div className="flex items-start justify-between w-full text-left">
                <span className="font-semibold text-base sm:text-lg lg:text-xl text-gray-900 pr-4">
                  What is your favorite template from BRIX Templates?
                </span>
                <span className="text-black font-bold text-xl sm:text-2xl leading-none flex-shrink-0">
                  +
                </span>
              </div>
            </div>
            
            <div className="border-b border-gray-200 pb-4 sm:pb-6">
              <div className="flex items-start justify-between w-full text-left">
                <span className="font-semibold text-base sm:text-lg lg:text-xl text-gray-900 pr-4">
                  How do you ensure template quality and performance?
                </span>
                <span className="text-black font-bold text-xl sm:text-2xl leading-none flex-shrink-0">
                  +
                </span>
              </div>
            </div>
            
            <div className="border-b border-gray-200 pb-4 sm:pb-6">
              <div className="flex items-start justify-between w-full text-left">
                <span className="font-semibold text-base sm:text-lg lg:text-xl text-gray-900 pr-4">
                  Can I customize templates to match my brand?
                </span>
                <span className="text-black font-bold text-xl sm:text-2xl leading-none flex-shrink-0">
                  +
                </span>
              </div>
            </div>
            
            <div className="border-b border-gray-200 pb-4 sm:pb-6">
              <div className="flex items-start justify-between w-full text-left">
                <span className="font-semibold text-base sm:text-lg lg:text-xl text-gray-900 pr-4">
                  What support do you provide after purchase?
                </span>
                <span className="text-black font-bold text-xl sm:text-2xl leading-none flex-shrink-0">
                  +
                </span>
              </div>
            </div>
            
            <div className="border-b border-gray-200 pb-4 sm:pb-6">
              <div className="flex items-start justify-between w-full text-left">
                <span className="font-semibold text-base sm:text-lg lg:text-xl text-gray-900 pr-4">
                  Do you offer refunds on template purchases?
                </span>
                <span className="text-black font-bold text-xl sm:text-2xl leading-none flex-shrink-0">
                  +
                </span>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex-1 space-y-6 sm:space-y-8 mt-6 sm:mt-8 lg:mt-0">
            {/* Right Column Questions */}
            <div className="border-b border-gray-200 pb-4 sm:pb-6">
              <div className="flex items-start justify-between w-full text-left">
                <span className="font-semibold text-base sm:text-lg lg:text-xl text-gray-900 pr-4">
                  Why is BRIX Templates the best Webflow agency?
                </span>
                <span className="text-black font-bold text-xl sm:text-2xl leading-none flex-shrink-0">
                  +
                </span>
              </div>
            </div>

            <div className="border-b border-gray-200 pb-4 sm:pb-6">
              <div className="flex items-start justify-between w-full text-left">
                <span className="font-semibold text-base sm:text-lg lg:text-xl text-gray-900 pr-4">
                  How often do you release new templates?
                </span>
                <span className="text-black font-bold text-xl sm:text-2xl leading-none flex-shrink-0">
                  +
                </span>
              </div>
            </div>
            
            {/* Expanded Question in Right Column */}
            <div className="border-b border-gray-200 pb-4 sm:pb-6">
              <div className="flex items-start justify-between w-full text-left">
                <span className="font-semibold text-base sm:text-lg lg:text-xl text-blue-600 pr-4">
                  What makes your templates SEO-friendly?
                </span>
                <span className="text-blue-600 font-bold text-xl sm:text-2xl leading-none flex-shrink-0">
                  −
                </span>
              </div>
              <p className="mt-3 sm:mt-4 text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed">
                Vitae congue eu consequat ac felis placerat vestibulum lectus
                mauris ultrices. Cursus sit amet dictum sit amet justo donec
                enim diam porttitor lacus luctus accumsan tortor posuere.
              </p>
            </div>
                      
            <div className="border-b border-gray-200 pb-4 sm:pb-6">
              <div className="flex items-start justify-between w-full text-left">
                <span className="font-semibold text-base sm:text-lg lg:text-xl text-gray-900 pr-4">
                  Do you provide custom development services?
                </span>
                <span className="text-black font-bold text-xl sm:text-2xl leading-none flex-shrink-0">
                  +
                </span>
              </div>
            </div>
            
            <div className="border-b border-gray-200 pb-4 sm:pb-6">
              <div className="flex items-start justify-between w-full text-left">
                <span className="font-semibold text-base sm:text-lg lg:text-xl text-gray-900 pr-4">
                  What payment methods do you accept?
                </span>
                <span className="text-black font-bold text-xl sm:text-2xl leading-none flex-shrink-0">
                  +
                </span>
              </div>
            </div>
            
            <div className="border-b border-gray-200 pb-4 sm:pb-6">
              <div className="flex items-start justify-between w-full text-left">
                <span className="font-semibold text-base sm:text-lg lg:text-xl text-gray-900 pr-4">
                  How can I get started with BRIX Templates?
                </span>
                <span className="text-black font-bold text-xl sm:text-2xl leading-none flex-shrink-0">
                  +
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}