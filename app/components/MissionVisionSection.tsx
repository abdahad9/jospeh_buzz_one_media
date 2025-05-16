import Image from "next/image";

export default function MissionVisionSection() {
  return (
    <section className="w-full py-12 px-4 sm:px-8 md:px-16 lg:px-18 bg-white">
      <div className="max-w-full mx-auto flex flex-col md:flex-row gap-8 items-stretch">
        {/* Left: Image */}
        <div className="md:w-[48%] w-full flex-shrink-0">
          <div className="rounded-2xl overflow-hidden">
            <Image
              src="/images/mission_about.png"
              alt="Team discussing vision and mission"
              width={800}
              height={480}
              className="object-cover w-full h-full rounded-2xl"
              priority
            />
          </div>
        </div>
        {/* Right: Vision and Mission */}
        <div className="md:w-1/2 w-full flex flex-col gap-6 justify-center">
          {/* Vision Card */}
          <div className="bg-[#FFF6E6] rounded-2xl p-8 md:p-10 md:h-1/2">
            <h2 className="text-3xl md:text-5xl font-normal mb-8 text-[#181818]">Our Vision</h2>
            <p className="text-lg text-[#181818] font-normal leading-relaxed">
              To become the leading digital marketing agency, empowering businesses of all sizes to grow, innovate, and connect with their audience through impactful strategies and exceptional service.
            </p>
          </div>
          {/* Mission Card */}
          <div className="bg-[#F3F3FF] rounded-2xl p-8 md:p-10 md:h-1/2">
            <h2 className="text-3xl md:text-5xl font-normal mb-8 text-[#181818]">Our Mission</h2>
            <ul className="list-disc pl-5 space-y-2 text-lg text-[#181818] font-normal">
              <li>Deliver tailored solutions that meet the unique needs of each client.</li>
              <li>Embrace creativity, technology, and data-driven insights to maximize results.</li>
              <li>Foster strong relationships built on trust, transparency, and collaboration.</li>
              <li>Help brands create meaningful connections with their audience while achieving measurable growth.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
} 