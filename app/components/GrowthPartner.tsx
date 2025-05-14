import Link from "next/link";
import Image from "next/image";

export default function GrowthPartner() {
  return (
    <section className="w-full bg-white py-16 px-4 sm:px-8 md:px-16 lg:px-18">
      <div className="w-full mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 items-start">
          <div className="flex items-center gap-2 mb-4 md:mb-0 md:col-span-1">
            <span className="w-2 h-2 bg-[#89BCE8] inline-block" />
            <span className="text-[#505050] text-base font-normal">Who we are</span>
          </div>
          <div className="md:col-span-2 md:pl-8">
            <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-normal mb-4 text-[#151515] leading-tight">Your Digital Growth Partner</h2>
            <p className="text-base sm:text-lg text-[#0E0E0E] font-light mb-8 max-w-2xl">We're a team of creative thinkers and marketing experts dedicated to driving measurable results. With a passion for innovation and strategy, we help businesses like yours thrive in the digital landscape.</p>
            <Link href="#" className="inline-flex items-center text-[#031CA6] text-base sm:text-lg font-normal group border-b border-[#031CA6] pb-0.5 hover:border-blue-700 transition-all">
              Learn More
              <Image src="/images/arrow-right-colored.png" alt="Right Arrow" width={20} height={20} className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform inline" />
            </Link>
          </div>
        </div>
        <div className="w-full mb-12" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 py-8">
          {[
            {
              value: '1,200',
              suffix: '+',
              title: 'Projects Completed',
              desc: 'Successfully delivering exceptional results across various industries worldwide.'
            },
            {
              value: '800',
              suffix: '+',
              title: 'Satisfied Clients',
              desc: 'Building long-term partnerships through trust, quality, and impactful outcomes.'
            },
            {
              value: '10',
              suffix: '+',
              title: 'Years of Experience',
              desc: 'Proven expertise in driving digital transformation and business growth.'
            },
            {
              value: '95',
              suffix: '%',
              title: 'Client Retention Rate',
              desc: 'Our commitment to excellence ensures clients keep coming back for more.'
            }
          ].map((stat) => (
            <div key={stat.title} className="flex flex-col items-start">
              <span className="text-5xl sm:text-6xl lg:text-7xl font-medium text-black mb-2">
                {stat.value}
                <span className="text-[#041DA6] font-bold">{stat.suffix}</span>
              </span>
              <span className="text-base sm:text-lg font-normal text-[#505050] mb-4 mt-2">{stat.title}</span>
              <div className="w-full md:w-88 border-t border-gray-300 mb-4 font-light" />
              <span className="text-[#505050] font-light text-sm sm:text-base">{stat.desc}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 