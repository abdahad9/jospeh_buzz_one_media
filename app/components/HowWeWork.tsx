import Image from "next/image";

const steps = [
  {
    title: "Discovery & Research",
    desc: "We begin by understanding your business, goals, and target audience.",
  },
  {
    title: "Strategy & Planning",
    desc: "We build a tailored plan to achieve impactful results.",
  },
  {
    title: "Design & Execution",
    desc: "Our team brings the strategy to life with creativity and precision.",
  },
  {
    title: "Optimize & Grow",
    desc: "We analyze, optimize, and continuously improve for long-term success.",
  },
];

export default function HowWeWork() {
  return (
    <section className="w-full py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 bg-white">
      <div className="max-w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center md:items-stretch">
        {/* Left: Image */}
        <div>
          <Image
            src="/images/howwework.png"
            alt="How We Work"
            width={600}
            height={400}
            className="rounded-2xl w-full object-cover h-full"
          />
        </div>
        {/* Right: Card */}
        <div className="bg-[#FCF6EA] rounded-2xl p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col gap-4 sm:gap-6 h-full text-center md:text-left items-center md:items-start">
          <div className="flex items-center gap-2 mb-2 justify-center md:justify-start">
            <span className="w-2 h-2 bg-[#89BCE8] inline-block" />
            <span className="text-[#505050] text-base font-normal">Our Process</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium mb-2 text-[#151515] text-center md:text-left">How We Work</h2>
          <p className="text-sm sm:text-base md:text-lg text-[#0E0E0E] font-light mb-4 sm:mb-6 max-w-lg md:max-w-xl lg:max-w-2xl mx-auto md:mx-0 text-center md:text-left">
            Each step is designed to keep you involved, informed, and confident that your goals are on track. Let&apos;s bring your digital vision to life!
          </p>
          <div className="flex flex-col gap-4 sm:gap-6 w-full">
            {steps.map((step) => (
              <div key={step.title} className="flex flex-col gap-2 items-center md:items-start text-center md:text-left w-full">
                <div className="flex flex-col md:flex-row items-center md:items-center gap-2 md:gap-4 w-full">
                  <span className="w-12 h-12 sm:w-14 sm:h-14 md:w-15 md:h-15 flex items-center justify-center rounded-2xl bg-[#FAD99B] text-[#C27F04] font-medium text-xl sm:text-2xl md:text-3xl mb-2 md:mb-0">{steps.indexOf(step) + 1}</span>
                  <div className="text-center md:text-left w-full">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-medium text-[#031CA6] mb-1">{step.title}</h3>
                  </div>
                </div>
                <p className="text-sm sm:text-base md:text-lg text-[#0E0E0E] font-light mt-2 text-center md:text-left w-full">{step.desc}</p>
                {steps.indexOf(step) < steps.length && <div className="w-full border-t border-[#F7C569] mt-3 sm:mt-4" />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 