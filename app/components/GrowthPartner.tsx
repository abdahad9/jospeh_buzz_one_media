import Link from "next/link";
import Image from "next/image";
import StatsSection from "./StatsSection";

export default function GrowthPartner() {
  return (
    <section className="w-full bg-white py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
      <div className="w-full mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-10 md:mb-12 items-start">
          <div className="flex items-center gap-2 mb-4 md:mb-0 md:col-span-1 justify-center md:justify-start">
            <span className="w-2 h-2 bg-[#89BCE8] inline-block" />
            <span className="text-[#505050] text-base font-normal">Who we are</span>
          </div>
          <div className="md:col-span-2 md:pl-6 lg:pl-8 text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-normal mb-3 sm:mb-4 text-[#151515] leading-tight text-center md:text-left">Your Digital Growth Partner</h2>
            <p className="text-sm sm:text-base md:text-lg text-[#0E0E0E] font-light mb-6 sm:mb-8 max-w-lg md:max-w-xl lg:max-w-2xl mx-auto md:mx-0 text-center md:text-left">We&apos;re a team of creative thinkers and marketing experts dedicated to driving measurable results. With a passion for innovation and strategy, we help businesses like yours thrive in the digital landscape.</p>
            <div className="flex justify-center md:justify-start">
              <Link href="/about" className="inline-flex items-center text-[#031CA6] text-sm sm:text-base md:text-lg font-normal group border-b border-[#031CA6] pb-0.5 hover:border-blue-700 transition-all">
                Learn More
                <Image src="/images/arrow-right-colored.svg" alt="Right Arrow" width={18} height={18} className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform inline" />
              </Link>
            </div>
          </div>
        </div>
        <StatsSection />
      </div>
    </section>
  );
} 