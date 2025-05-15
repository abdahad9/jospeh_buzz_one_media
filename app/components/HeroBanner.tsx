import Image from "next/image";

export default function HeroBanner() {
  return (
    <div className="flex flex-col md:flex-row items-start justify-between w-full px-4 sm:px-8 md:px-0">
      <div className="w-full md:max-w-2xl text-white text-center md:text-left">
        <h1
          className="relative font-semibold z-10 text-5xl sm:text-6xl md:text-[140px] md:leading-[170px] lg:w-[960px] text-center md:text-left lg:mb-48 mb-12"
        >
          Empower Your<br />Digital Growth
        </h1>
        <p
          className="mb-8 text-base sm:text-xl font-normal leading-[1.5] tracking-[0.5px] text-center md:text-left"
        >
          Unlock your business potential with tailored digital marketing strategies.
          Let's create impactful solutions to help you stand out and succeed in the digital era.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-12 w-fit items-center md:items-start justify-center md:justify-start mx-auto md:mx-0">
          <button
            className="bg-[#FFA800] text-black px-8 py-4 hover:bg-[#ffb733] transition cursor-pointer text-base sm:text-lg font-normal leading-[24px] tracking-[0.5px] w-full sm:w-auto"
          >
            Book a Call
          </button>
          <button
            className="flex items-center gap-2 text-white px-0 py-2 cursor-pointer border-0 border-b border-white hover:opacity-80 transition text-base sm:text-lg font-normal leading-[24px] tracking-[0.5px] w-full sm:w-auto justify-center md:justify-start"
          >
            Our Services
            <Image src="/images/arrow-right.png" alt="Right Arrow" width={24} height={24} />
          </button>
        </div>
      </div>
      <div className="mt-10 md:mt-0 md:ml-12">
        <Image
          src="/images/banner-img.png"
          alt="Hero"
          width={640}
          height={400}
          className="rounded-xl"
        />
      </div>
    </div>
  );
} 