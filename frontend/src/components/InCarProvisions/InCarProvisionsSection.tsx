
"use client";
import f1 from '../../assets/f1.png'
import f2 from '../../assets/f2.png'
import f3 from '../../assets/f3.png'
import f4 from '../../assets/f4.png'
import f5 from '../../assets/f5.png'
import f6 from '../../assets/f6.png'
import f7 from '../../assets/f7.png'
import f8 from '../../assets/f8.png'
import f9 from '../../assets/f9.png'
import f10 from '../../assets/f10.png'
import f11 from '../../assets/f11.png'
import f12 from '../../assets/f12.png'
import f13 from '../../assets/f13.png'
import Image from 'next/image'

const provisions = [
  { icon: f1, title: "Water bottle" },
  { icon: f2, title: "Newspaper" },
  { icon: f3, title: "Tissue Paper pouch" },
  { icon: f4, title: "Cookies" },
  { icon: f5, title: "Writing slip & Pen" },
  { icon: f6, title: "Ice Box (Based on request)" },
  { icon: f7, title: "Fire Extinguisher Kit" },
  { icon: f8, title: "Perfume" },
  { icon: f9, title: "Hand-phone Charger" },
  { icon: f10, title: "GPS Tracking" },
  { icon: f11, title: "Umbrella" },
  { icon: f12, title: "Torch Light" },
  { icon: f13, title: "First Aid Kit" },
];

export default function InCarProvisionsSection() {
  return (
    <section className="bg-[#f2f2f2] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1500px] mx-auto text-center">
        <h2 className="text-5xl sm:text-6xl lg:text-5xl xl:text-6xl font-bold text-gray-900">
          In-car Provisions
        </h2>
        <p className="mt-2 text-gray-600 text-sm sm:text-base font-medium w-full mx-auto">
          Every ENTREX ride comes with thoughtful in-car provisions to ensure
          your comfort, safety, and satisfaction.
        </p>

        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-[55px] justify-center">
        {provisions.map((item, index) => {
            // Define bigger icon titles
            const biggerIcons = ["GPS Tracking", "Torch Light", "First Aid Kit", "Cookies"];
            const isBigger = biggerIcons.includes(item.title);

            return (
            <div
                key={index}
                className="flex flex-col items-center justify-center bg-[#f2f2f2] rounded-xl border border-gray-300 p-8 hover:bg-[#e2dfdf] transition duration-300"
            >
                <Image
                src={item.icon}
                alt={item.title}
                width={isBigger ? 60 : 32}
                height={isBigger ? 60 : 32}
                />
                <p className="mt-3 text-sm font-medium text-gray-800 text-center">
                {item.title}
                </p>
            </div>
            );
        })}
        </div>

        <div className="mt-[83px]">
          <button className="px-6 py-3 text-white font-semibold rounded-full bg-gradient-to-r from-red-500 to-orange-400 shadow-md hover:shadow-lg transition duration-300">
            Book Your Journey Now
          </button>
        </div>
      </div>
    </section>
  );
}
