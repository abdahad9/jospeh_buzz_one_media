import Image from "next/image";
import Link from "next/link";

const features = [
  {
    icon: "/images/Multiple-Stars.svg",
    title: "Proven Success",
    desc: "Over 1200+ projects completed with a 95% client retention rate.",
  },
  {
    icon: "/images/Dial-Pad.svg",
    title: "Tailored Strategies for You",
    desc: "We customize solutions that align with your unique business goals.",
  },
  {
    icon: "/images/Content-Statistic.svg",
    title: "Result-Driven Approach",
    desc: "Every service we provide is focused on measurable success.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="w-full bg-white py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
      <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 lg:gap-20 items-start">
        {/* Left column */}
        <div>
          <div className="flex items-center gap-2 mb-4 text-center md:text-left justify-center md:justify-start">
            <span className="w-2 h-2 bg-[#89BCE8] inline-block" />
            <span className="text-[#505050] text-base font-normal">Why choose us</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-normal mb-8 sm:mb-12 md:mb-16 lg:mb-20 text-[#151515] leading-tight text-center md:text-left">What Makes Us Different</h2>
          <div className="flex flex-col gap-4 sm:gap-6 md:gap-8 mt-8 sm:mt-12 lg:pr-8 xl:pr-12 2xl:pr-20">
            {features.map((feature) => (
              <div key={feature.title} className="flex flex-col md:flex-row items-center md:items-start gap-3 sm:gap-4 border-b border-gray-200 mt-2 sm:mt-4 text-center md:text-left">
                <div className="flex-shrink-0 w-16 h-16 sm:w-18 sm:h-18 flex items-center justify-center rounded-lg mx-auto md:mx-0">
                  <Image src={feature.icon} alt={feature.title} width={60} height={60} style={{ width: '60px', height: '60px' }} className="sm:w-16 sm:h-16 md:w-20 md:h-20"/>
                </div>
                <div className="flex-1 mb-4 sm:mb-6 text-center md:text-left w-full md:w-auto">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#1A237E] mb-2">{feature.title}</h3>
                  <p className="text-sm sm:text-base text-[#505050] font-light mb-2 md:pr-8 lg:pr-12 xl:pr-16">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Right column */}
        <div className="flex flex-col gap-4 sm:gap-6 md:gap-8 items-center md:items-start text-center md:text-left">
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#151515] font-light mb-2 lg:pr-8 xl:pr-12 2xl:pr-30 text-center md:text-left">
            From personalized strategies to measurable outcomes, we focus on driving growth, building trust, and exceeding expectations at every step. Discover what makes us the partner you can count on.
          </p>
          <div className="flex justify-center md:justify-start w-full">
            <Link href="/contact" className="bg-[#FFA800] text-black text-center md:text-left px-6 sm:px-8 md:px-10 lg:px-12 py-3 sm:py-4 font-normal text-base sm:text-lg hover:bg-[#ffb733] transition mb-4">Get Started</Link>
          </div>
          <div className="w-full flex justify-center md:justify-start">
            <Image src="/images/whychoosebanner.png" alt="Why Choose Us" width={480} height={320} className="rounded-xl w-full max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
} 