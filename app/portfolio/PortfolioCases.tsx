import Image from "next/image";
import Link from "next/link";
import cases from "./casesData";

export default function PortfolioCases({ heading = "Check Our Works With\nReal Results", excludeSlug, limit }: { heading?: string, excludeSlug?: string, limit?: number }) {
  // Filter out the current case and limit to the specified number
  let filteredCases = cases;
  if (excludeSlug) {
    filteredCases = filteredCases.filter(item => item.slug !== excludeSlug);
  }
  if (limit) {
    filteredCases = filteredCases.slice(0, limit);
  }

  return (
    <section className="max-w-full mx-auto px-4 sm:px-18 py-16 text-center md:text-left">
      <h2 className="text-3xl sm:text-5xl font-medium text-[#181818] mb-10 md:leading-16 text-center md:text-left">
        {heading}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:mx-0 mx-auto">
        {filteredCases.map((item) => (
          <Link
            key={item.client}
            href={item.link}
            className="block"
          >
            <div
              className={`rounded-2xl ${item.color}  p-8 flex flex-col gap-6 shadow-sm`}
            >
              <div className="flex items-center gap-3 mb-4 md:mx-0 mx-auto">
                <Image src={item.logo} alt={item.client} width={52} height={52} className="w-[140px]"/>
                {/* <span className="font-semibold text-2xl text-[#181818]">{item.client}</span> */}
              </div>
              <h3 className="text-4xl font-medium text-[#181818] mb-2 md:leading-12 md:pr-20 pr-0">
                {item.title}
              </h3>
              <p className="text-[#000000] text-base font-light mb-4">
                {item.description}
              </p>
              <span className="text-[#031CA6] text-lg font-normal md:mx-0 mx-auto inline-flex items-center gap-1 border-b border-[#031CA6] w-fit hover:border-blue-700 transition-all mb-2 cursor-pointer">
                See Detail
                <Image src="/images/arrow-right-colored.svg" alt="Right Arrow" width={24} height={24} className="ml-1"/>
              </span>
              <span className="pb-4 border-b border-gray-300"></span>
              <div className="flex flex-wrap gap-3 mt-auto md:mx-0 mx-auto">
                {item.stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-white rounded-2xl px-4 py-2 text-xs font-medium text-[#181818] flex flex-row items-center min-w-[120px] md:mx-0 mx-auto"
                  >
                    <span className="text-[#031CA6] text-[14px] font-bold">{stat.value}</span>
                    <span className="text-[#505050] text-[14px] font-normal ml-2 text-center">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
} 