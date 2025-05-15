import Link from "next/link";
import Image from "next/image";

export default function CtaBanner() {
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
      <div className="relative flex flex-col lg:flex-row items-start lg:items-end justify-between mt-0 md:mt-30 max-w-full px-4 sm:px-8 md:px-16 lg:px-18 py-14 min-h-[400px]">
        <div className="flex-1">
          <h2 className="text-white text-2xl sm:text-5xl lg:text-6xl font-normal mb-8 leading-tight text-center lg:text-left">
            Don&apos;t Wait to Grow<br />Your Brand
          </h2>
          <p className="text-white text-lg sm:text-2xl font-normal max-w-2xl mx-auto lg:mx-0 text-center lg:text-left">
            Take the first step toward success. Reach out to us today and let&apos;s create something incredible together.
          </p>
        </div>
        <div className="w-full lg:w-auto flex justify-center lg:justify-end">
          <Link
            href="#contact"
            className="bg-white text-[#000] text-lg px-12 py-4 rounded-none shadow-md font-normal transition hover:bg-gray-100"
          >
            Let&apos;s Talk
          </Link>
        </div>
      </div>
    </section>
  );
} 