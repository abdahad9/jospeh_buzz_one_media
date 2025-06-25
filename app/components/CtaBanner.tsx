import Image from "next/image";
import { sanity } from "@/lib/sanity";

export default async function CtaBanner() {
  const settings = await sanity.fetch(`*[_type == "siteSettings"][0]{bookingLink}`);

  return (
    <section className="w-full relative overflow-hidden">
      {/* Background image */}
      <Image
        src="/images/blue-background.png" // <-- replace with your image path
        alt="CTA Background"
        fill
        className="object-cover object-center z-0"
        priority
      />
      {/* Optional overlay for readability */}
      <div className="absolute inset-0 z-0" />
      <div className="relative flex flex-col lg:flex-row items-start lg:items-end justify-between mt-0 md:mt-20 lg:mt-30 max-w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 py-10 sm:py-12 md:py-14 min-h-[300px] sm:min-h-[350px] md:min-h-[400px]">
        <div className="flex-1">
          <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-normal mb-6 sm:mb-8 leading-tight text-center lg:text-left">
            Don&apos;t Wait to Grow<br />Your Brand
          </h2>
          <p className="text-white text-base sm:text-lg md:text-xl lg:text-2xl font-normal max-w-lg md:max-w-xl lg:max-w-2xl mx-auto lg:mx-0 text-center lg:text-left">
            Take the first step toward success. Reach out to us today and let&apos;s create something incredible together.
          </p>
        </div>
        <div className="w-full lg:w-auto flex justify-center lg:justify-end mt-6 sm:mt-8 lg:mt-0">
          <a
            href={settings?.bookingLink || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-[#000] text-base sm:text-lg px-8 sm:px-10 md:px-12 py-3 sm:py-4 rounded-none shadow-md font-normal transition hover:bg-gray-100"
          >
            Let&apos;s Talk
          </a>
        </div>
      </div>
    </section>
  );
} 