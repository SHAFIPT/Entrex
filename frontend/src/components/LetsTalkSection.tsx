"use client";
export default function LetsTalkSection() {
  return (
    <section className="py-8 sm:py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6 grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-start">
        
        {/* Left side */}
        <div className="mt-0 sm:mt-8 lg:mt-24 text-center md:text-left">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-10 sm:mb-16 lg:mb-[94px] leading-tight">
            Let&apos;s Talk
          </h2>

          <div className="mb-8 sm:mb-10 lg:mb-8">
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-[43px] font-bold mb-4 sm:mb-5 lg:mb-5 text-gray-900">
              Email
            </h3>
            <p className="text-xl sm:text-2xl lg:text-2xl font-medium text-gray-900 hover:text-blue-800 transition-colors cursor-pointer">
              bookings@entrex.in
            </p>
          </div>

          <div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-[43px] font-bold mb-4 sm:mb-6 lg:mb-5 mt-10 sm:mt-14 lg:mt-[65px] text-gray-900">
              Socials
            </h3>
            <ul className="space-y-4 sm:space-y-5 lg:space-y-8 text-xl sm:text-2xl lg:text-2xl font-medium">
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-300 inline-block hover:scale-105 transform">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-300 inline-block hover:scale-105 transform">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-300 inline-block hover:scale-105 transform">
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Right side - Form */}
        <form className="space-y-4 sm:space-y-5 lg:space-y-6 mt-6 sm:mt-8 md:mt-0">
          {/* Name */}
          <div>
            <label className="block text-base sm:text-lg font-medium mb-2">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full border border-gray-300 rounded-md px-3 sm:px-4 py-2 sm:py-3 text-base sm:text-lg focus:outline-none focus:ring-2 focus:ring-black transition-all"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-base sm:text-lg font-medium mb-2">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-md px-3 sm:px-4 py-2 sm:py-3 text-base sm:text-lg focus:outline-none focus:ring-2 focus:ring-black transition-all"
            />
          </div>

          {/* Service */}
          <div>
            <label className="block text-base sm:text-lg font-medium mb-2">
              What service are you interested in
            </label>
            <select className="w-full border border-gray-300 rounded-md px-3 sm:px-4 py-2 sm:py-3 text-base sm:text-lg font-normal text-gray-500 focus:outline-none focus:ring-2 focus:ring-black transition-all">
              <option>Select project type</option>
              <option>Web Development</option>
              <option>Mobile App</option>
              <option>UI/UX Design</option>
            </select>
          </div>

          {/* Budget */}
          <div>
            <label className="block text-base sm:text-lg font-medium mb-2">Budget</label>
            <select className="w-full border border-gray-300 rounded-md px-3 sm:px-4 py-2 sm:py-3 text-base sm:text-lg font-normal text-gray-500 focus:outline-none focus:ring-2 focus:ring-black transition-all">
              <option>Select project budget</option>
              <option>$500 - $1,000</option>
              <option>$1,000 - $5,000</option>
              <option>$5,000+</option>
            </select>
          </div>

          {/* Message */}
          <div>
            <label className="block text-base sm:text-lg font-medium mb-2">Message</label>
            <textarea
              rows={4}
              className="w-full border border-gray-300 rounded-md px-3 sm:px-4 py-2 sm:py-3 text-base sm:text-lg focus:outline-none focus:ring-2 focus:ring-black resize-none transition-all"
              placeholder="Write your message..."
            ></textarea>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-black text-white py-3 sm:py-4 text-base sm:text-lg font-medium rounded-md hover:bg-gray-900 transition-colors mt-6 sm:mt-8"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}