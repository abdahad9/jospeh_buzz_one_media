import Image from "next/image";

export default function CallToActionBanner() {
  return (
    <section className="w-full py-0 md:py-16 px-4 sm:px-8 md:px-16 lg:px-18 bg-white">
      <div className="relative rounded-2xl overflow-hidden flex flex-col items-center justify-center py-22 px-4 min-h-[340px]">
        {/* Background image */}
        <Image
          src="/images/blue-background.png" // <-- replace with your image path
          alt="CTA Background"
          fill
          className="object-cover z-0 rotate-180"
          priority
        />
        {/* Optional overlay for readability */}
        <div className="absolute inset-0 z-0" />
        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center w-full">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-medium mb-4 text-center text-white">Ready to Elevate Your Brand?</h2>
          <p className="text-base sm:text-lg font-light mb-8 text-center max-w-1xl text-white">Let's work together to build something extraordinary. Contact us today to get started.</p>
          <button className="bg-white text-[#151515] px-8 py-3 font-normal text-lg hover:bg-gray-100 transition">See More</button>
        </div>
      </div>
    </section>
  );
} 