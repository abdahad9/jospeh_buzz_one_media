import Image from "next/image";
import Link from "next/link";
import { sanity } from "@/lib/sanity";

export default async function HeroBanner() {
  const settings = await sanity.fetch(`*[_type == "siteSettings"][0]{bookingLink}`);

  return (
    <div className="flex flex-col md:flex-row items-start justify-between w-full px-4 sm:px-8 md:px-0">
      <div className="w-full md:max-w-2xl lg:max-w-3xl xl:max-w-4xl text-white text-center md:text-left">
        <h1
          className="font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[110px] leading-tight md:leading-[1.1] lg:leading-[1.2] xl:leading-[1.3] 2xl:leading-[155px] text-center md:text-left mb-8 md:mb-12 lg:mb-16 xl:mb-20 2xl:mb-48"
        >
          Empower Your<br />Digital Growth
        </h1>
        <p
          className="mb-8 text-base sm:text-lg md:text-xl lg:text-2xl font-normal leading-[1.5] tracking-[0.5px] text-center md:text-left max-w-2xl md:max-w-none"
        >
          Unlock your business potential with tailored digital marketing strategies.
          Let&apos;s create impactful solutions to help you stand out and succeed in the digital era.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 lg:gap-12 w-fit items-center md:items-start justify-center md:justify-start mx-auto md:mx-0">
          <a
            href={settings?.bookingLink || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#FFA800] text-black px-6 sm:px-8 md:px-10 lg:px-12 py-3 sm:py-4 hover:bg-[#ffb733] transition cursor-pointer text-base sm:text-lg font-normal leading-[24px] tracking-[0.5px] w-full sm:w-auto text-center"
          >
            Book a Call
          </a>
          <Link
            href="/services"
            className="flex items-center gap-2 text-white px-0 py-2 cursor-pointer border-0 border-b border-white hover:opacity-80 transition text-base sm:text-lg font-normal leading-[24px] tracking-[0.5px] w-full sm:w-auto justify-center md:justify-start"
          >
            Our Services
            <Image src="/images/arrow-right.png" alt="Right Arrow" width={24} height={24} />
          </Link>
        </div>
      </div>
      <div className="mt-8 md:mt-0 md:ml-8 lg:ml-12 xl:ml-16 w-full md:w-auto">
        <Image
          src="/images/banner-img.png"
          alt="Hero"
          width={640}
          height={400}
          className="rounded-xl w-full max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto md:mx-0"
        />
      </div>
    </div>
  );
} 