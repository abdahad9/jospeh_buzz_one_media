import Link from "next/link";
import Image from "next/image";

const services = [
  {
    icon: "/images/Flower.svg",
    title: "Content Marketing",
    desc: "Our content marketing services include blog posts, and creative copy designed to increase traffic, build trust, and position your brand.",
  },
  {
    icon: "/images/monitor.svg",
    title: "Website Designer",
    desc: "We design visually appealing, user-friendly, and responsive websites tailored to your brand.",
  },
  {
    icon: "/images/Calendar.svg",
    title: "SEO Service",
    desc: "Boost your online visibility and rank higher on search engines with our comprehensive SEO strategies.",
  },
  {
    icon: "/images/Chat-Bubble.svg",
    title: "Virtual Assistant",
    desc: "From administrative tasks to managing schedules and emails, our skilled assistants streamline your daily operations.",
  },
  {
    icon: "/images/Startup.svg",
    title: "Social Media",
    desc: "Grow your brand's presence on social platforms with strategic content, consistent engagement, and targeted campaigns.",
  },
  {
    icon: "/images/Graph-Dot.svg",
    title: "Automations",
    desc: "From email marketing to task automation, we integrate smart tools that save you time, reduce errors, and improve productivity.",
  },
];

export default function ExpertiseServices() {
  return (
    <section className="w-full bg-[#EBF4FB] py-16 px-4 sm:px-8 md:px-16 lg:px-18">
     <div className="w-full mx-auto">
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-2 justify-center md:justify-start">
            <span className="w-2 h-2 bg-[#89BCE8] inline-block" />
            <span className="text-[#505050] text-base font-normal">What we do</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-normal my-6 text-[#151515] leading-tight text-center md:text-left">Our Expertise at Your Service</h2>
          <p className="text-base sm:text-lg text-[#0E0E0E] font-light max-w-6xl mx-auto md:mx-0 text-center md:text-left">From SEO to social media campaigns, web design to content marketing, we provide a wide range of digital marketing services to grow your brand and connect with your audience effectively.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border border-[#AAB2E4] overflow-hidden">
          {services.map((service, idx: number) => {
            let borderClasses = "";
            // Right border except last col (desktop only)
            if ((idx + 1) % 3 !== 0) borderClasses += " lg:border-r ";
            // Bottom border logic
            if (idx < 5) borderClasses += " border-b sm:border-0 lg:border-0 "; // mobile only
            if (idx < 4) borderClasses += " sm:border-b lg:border-0 "; // tablet only
            if (idx < 3) borderClasses += " lg:border-b "; // desktop only
            borderClasses += " border-[#AAB2E4] ";
            return (
              <div
                key={service.title}
                className={`flex flex-col gap-4 p-8 text-center md:text-left items-center md:items-start ${borderClasses}`}
              >
                <div className="flex flex-col md:flex-row items-center md:items-start gap-3 mb-1 w-full">
                  <Image src={service.icon} alt={service.title} width={80} height={80} className="mx-auto md:mx-0" />
                  <div className="md:mx-4 mt-2 md:mt-0 w-full">
                    <h3 className="text-3xl font-medium text-[#0E0E0E] mb-3 text-center md:text-left">{service.title}</h3>
                    <p className="text-[#505050] text-base font-light mb-4 pr-0 md:pr-10 text-center md:text-left">{service.desc}</p>
                    <div className="flex justify-center md:justify-start">
                      <Link href="#" className="inline-flex items-center text-[#031CA6] text-base font-normal group pb-0.5 hover:border-blue-700 transition-all w-max border-b border-[#031CA6]">
                        Learn More
                        <Image src="/images/arrow-right-colored.svg" alt="Right Arrow" width={18} height={18} className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform inline" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="mt-10 flex justify-center md:justify-start">
          <button className="bg-[#FFA800] text-black px-10 cursor-pointer py-4 font-normal text-lg hover:bg-[#ffb733] transition">See More</button>
        </div>
      </div>
    </section>
  );
} 