import Link from "next/link";
import Image from "next/image";
import services from "./servicesData";

export default function ServicesList() {
  return (
    <section className="max-w-full mx-auto py-16 px-4 sm:px-8 md:px-16 lg:px-24 bg-white">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-[#181818] text-center md:text-left mb-12 md:pr-90 md:leading-16 border-b border-[#505050] pb-16 mt-10">
        We provide comprehensive services that help businesses run smoothly and efficiently.
      </h2>
      <div className="space-y-12 mt-20">
        {services.map((service) => (
          <div key={service.title}>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 md:gap-0 pb-8 border-b border-gray-200">
              {/* Left: Icon, Title, Tags */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-6 justify-center md:justify-start">
                  <Image src={service.icon} alt={service.title} width={50} height={50} />
                  <span className="text-2xl md:text-4xl font-medium text-[#181818]">{service.title}</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-4 md:pr-100 justify-center md:justify-start">
                  {service?.subServices?.map((tag) => (
                    <Link href={`/services/${service.slug}/${tag.subslug}`} key={tag.subslug}>
                      <span key={tag.subslug} className="inline-flex items-center bg-[#F1F3FF] text-[#031CA6] text-xs sm:text-sm font-light px-3 py-2 rounded-md whitespace-nowrap">
                        {tag.title}
                        {tag.subslug != "See More..." && <Image src="/images/arrow-up-right.svg" className="ml-2" alt="arrow-right" width={18} height={10} />}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
              {/* Right: Description and Link */}
              <div className="md:w-1/3 flex flex-col items-center md:items-start md:pl-26 text-center md:text-left">
                <p className="text-gray-600 text-base mb-4 md:mb-8">
                  {service.description}
                </p>
                <Link href={`/services/${service.slug}`} className="inline-flex items-center text-[#031CA6] text-base sm:text-lg font-light group border-b-1 border-[#031CA6] pb-0.5 hover:border-blue-700 transition-all">
                  More Detail
                  <Image src="/images/arrow-right-colored.svg" alt="Right Arrow" width={20} height={20} className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform inline" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 