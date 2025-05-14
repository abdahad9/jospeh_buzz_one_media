import Image from "next/image";

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
    <section className="w-full bg-white py-20 px-4 sm:px-8 md:px-16 lg:px-18">
      <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Left column */}
        <div>
          <div className="flex items-center gap-2 mb-4 text-center md:text-left justify-center md:justify-start">
            <span className="w-2 h-2 bg-[#89BCE8] inline-block" />
            <span className="text-[#505050] text-base font-normal">Why choose us</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-normal mb-16 text-[#151515] leading-tight text-center md:text-left">What Makes Us Different</h2>
          <div className="flex flex-col gap-6 mt-12 lg:pr-20">
            {features.map((feature, idx) => (
              <div key={feature.title} className="flex flex-col md:flex-row items-start gap-4 border-b border-gray-200 mt-4">
                <div className="flex-shrink-0 w-18 h-18 flex items-center justify-center rounded-lg mx-auto md:mx-0">
                  <Image src={feature.icon} alt={feature.title} width={60} height={60} style={{ width: '80px', height: '80px' }}/>
                </div>
                <div className="flex-1 mb-6 text-center md:text-left w-full md:w-auto">
                  <h3 className="text-xl font-semibold text-[#1A237E] mb-2">{feature.title}</h3>
                  <p className="text-[#505050] text-base font-light mb-2 md:pr-50">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Right column */}
        <div className="flex flex-col gap-6 items-start text-center md:text-left">
          <p className="text-[#151515] text-lg font-light mb-2 lg:pr-30">
            From personalized strategies to measurable outcomes, we focus on driving growth, building trust, and exceeding expectations at every step. Discover what makes us the partner you can count on.
          </p>
          <button className="bg-[#FFA800] text-black text-center md:text-left px-8 py-3 font-normal text-lg hover:bg-[#ffb733] transition mb-4">Get Started</button>
          <div className="w-full">
            <Image src="/images/whychoosebanner.png" alt="Why Choose Us" width={480} height={320} className="rounded-xl w-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
} 