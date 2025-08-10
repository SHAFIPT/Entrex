"use client";
export default function TopBar() {
  return (
    <div className="bg-white text-black text-xs sm:text-sm py-3 border-b border-gray-200">
      <div className="max-w-[1803px] mx-auto flex flex-col sm:flex-row items-center sm:justify-between px-6 sm:px-20">
        
        {/* Email */}
        <div className="w-full sm:w-auto text-center sm:text-left mb-2 sm:mb-0">
          <p className="font-medium text-[16px] sm:text-[18px]">
            bookings@entrex.in
          </p>
        </div>

        {/* Phone numbers */}
        <div className="w-full sm:w-auto flex flex-wrap justify-center sm:justify-end items-center gap-2 sm:gap-4 font-medium text-[16px] sm:text-[18px]">
          <p>+91 44 4953005</p>
          <span className="hidden sm:inline text-gray-400">|</span>
          <p>+91 44 4953005</p>
          <span className="hidden sm:inline text-gray-400">|</span>
          <p>+91 44 4953005</p>
        </div>
      </div>
    </div>
  );
}
