import Link from "next/link";
import Image from "next/image";

export default function CallToActionBanner() {
  return (
    <section className="w-full py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 bg-white">
      <div className="relative rounded-2xl overflow-hidden flex flex-col items-center justify-center py-16 sm:py-20 md:py-22 px-4 sm:px-6 md:px-8 min-h-[280px] sm:min-h-[320px] md:min-h-[340px]">
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
        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center w-full">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium mb-3 sm:mb-4 text-center text-white">Ready to Elevate Your Brand?</h2>
          <p className="text-sm sm:text-base md:text-lg font-light mb-6 sm:mb-8 text-center max-w-lg md:max-w-xl lg:max-w-2xl text-white">Let&apos;s work together to build something extraordinary. Contact us today to get started.</p>
          <Link href="/contact" className="bg-white text-[#151515] px-6 sm:px-8 md:px-10 lg:px-12 py-3 sm:py-4 hover:bg-gray-100 transition cursor-pointer text-base sm:text-lg font-normal">See More</Link>
        </div>
      </div>
    </section>
  );
} 