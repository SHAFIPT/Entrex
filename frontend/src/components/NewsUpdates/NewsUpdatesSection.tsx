"use client";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import new1 from "../../assets/news1.jpg";
import new2 from "../../assets/news2.png";
import new3 from "../../assets/news3.jpg";

const articles = [
  {
    image: new1,
    tag: "BUSINESS",
    tagColor: "bg-orange-100 text-orange-600",
    title: "Surviving through tough times as a first time SaaS...",
    description:
      "Self-service data analytics software that lets you create visually appealing data visualizations and insightful dashboards in minutes.",
    date: "Oct 3",
    readTime: "7 min read",
  },
  {
    image: new2,
    tag: "MARKETING",
    tagColor: "bg-blue-100 text-blue-600",
    title: "SaaS customer development and no-code prototypes",
    description:
      "Self-service data analytics software that lets you create visually appealing data visualizations and insightful dashboards in minutes.",
    date: "Oct 3",
    readTime: "7 min read",
  },
  {
    image: new3,
    tag: "ANALYTICS",
    tagColor: "bg-green-100 text-green-600",
    title: "Highnote Emerges from Stealth with $54 Million in ...",
    description:
      "Self-service data analytics software that lets you create visually appealing data visualizations and insightful dashboards in minutes.",
    date: "Oct 3",
    readTime: "7 min read",
  },
];

export default function NewsUpdatesSection() {
  return (
    <section className="py-8 sm:py-12 lg:py-16">
      <div className="max-w-[1459px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center mb-8 sm:mb-10 lg:mb-12 text-gray-900">
          News & Updates
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-9">
          {articles.map((article, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden flex flex-col group cursor-pointer"
            >
              <div className="overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  width={520}
                  height={260}
                  className="w-full h-48 sm:h-52 lg:h-[260px] object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4 sm:p-6 lg:p-8 flex flex-col flex-grow">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold leading-snug text-gray-900 line-clamp-2 flex-grow">
                  {article.title}
                </h3>
                <p className="mt-3 sm:mt-4 text-gray-700 text-sm sm:text-base leading-relaxed line-clamp-3 flex-grow">
                  {article.description}
                </p>
                {/* Bottom line: tag, date, read time */}
                <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 sm:gap-0">
                  <span
                    className={`px-3 py-1 rounded-full text-xs sm:text-sm font-medium tracking-wide uppercase w-fit ${article.tagColor}`}
                  >
                    {article.tag}
                  </span>
                  <span className="text-gray-600 text-xs sm:text-sm font-medium tracking-wide">
                    {article.date} &nbsp;&middot;&nbsp; {article.readTime}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-8 sm:mt-10 lg:mt-12">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium text-lg sm:text-xl lg:text-[23px] transition-colors duration-200 group"
          >
            View more articles
            <ArrowRight 
              className="w-5 h-5 sm:w-6 sm:h-6 stroke-2 group-hover:translate-x-1 transition-transform duration-200" 
            />
          </a>
        </div>
      </div>
    </section>
  );
}