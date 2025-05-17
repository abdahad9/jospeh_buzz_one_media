import Link from "next/link";
import Image from "next/image";

const services = [
  {
    icon: "/images/flower.svg",
    title: "Content Marketing",
    tags: [
      "Website Content",
      "Newsletter Writing",
      "Articles or Blog",
      "E-Book Writing",
      "Script Writing"
    ],
    description:
      "Our content marketing services include blog posts, and creative copy designed to increase traffic, build trust, and position your brand.",
    link: "#"
  },
  {
    icon: "/images/monitor.svg",
    title: "Website Designer",
    tags: [
      "Business Website",
      "Consulting Website",
      "Landing Page",
      "Non-Profit Website",
      "E-Commerce",
      "See More.."
    ],
    description:
      "We design visually appealing, user-friendly, and responsive websites tailored to your brand.",
    link: "#"
  },
  {
    icon: "/images/Calendar.svg",
    title: "SEO Service",
    tags: [
      "E-Commerce Service",
      "Google Maps",
      "Local SEO",
      "Mobile SEO",
      "National SEO"
    ],
    description:
      "Boost your online visibility and rank higher on search engines with our comprehensive SEO strategies.",
    link: "#"
  },
  {
    icon: "/images/Calendar.svg",
    title: "Virtual Assistant",
    tags: [
      "Email Management",
      "Calendar Management",
      "Lead Generation",
      "Market Research",
      "See More.."
    ],
    description:
      "From administrative tasks to managing schedules and emails, our skilled assistants streamline your daily operations.",
    link: "#"
  },
  {
    icon: "/images/Calendar.svg",
    title: "Social Media",
    tags: [
      "Social Media Content",
      "Video Content",
      "Ads Content",
      "Social Media Admin",
      "Social Media Analyst"
    ],
    description:
      "Grow your brand's presence on social platforms with strategic content, consistent engagement, and targeted campaigns.",
    link: "#"
  },
  {
    icon: "/images/Calendar.svg",
    title: "Automations",
    tags: [
      "Reputation Management",
      "Sales Funnels",
      "SMS Marketing",
      "Workflow Automation"
    ],
    description:
      "From email marketing to task automation, we integrate smart tools that save you time, reduce errors, and improve productivity.",
    link: "#"
  }
];

export default function ServicesList() {
  return (
    <section className="max-w-full mx-auto py-16 px-4 sm:px-8 md:px-16 lg:px-24 bg-white">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-[#181818] text-center md:text-left mb-12 md:pr-90 md:leading-16 border-b border-[#505050] pb-16 mt-10">
        We provide comprehensive services that help businesses run smoothly and efficiently.
      </h2>
      <div className="space-y-12 mt-20">
        {services.map((service) => (
          <div key={service.title}>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 md:gap-0 pb-8 border-b border-gray-200">
              {/* Left: Icon, Title, Tags */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-6 justify-center md:justify-start">
                  <Image src={service.icon} alt={service.title} width={50} height={50} />
                  <span className="text-2xl md:text-4xl font-medium text-[#181818]">{service.title}</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-4 md:pr-100 justify-center md:justify-start">
                  {service.tags.map((tag) => (
                    <span key={tag} className="inline-flex items-center bg-[#F1F3FF] text-[#031CA6] text-xs sm:text-sm font-light px-3 py-2 rounded-md whitespace-nowrap">
                      {tag}
                      <Image src="/images/arrow-up-right.svg" className="ml-2" alt="arrow-right" width={18} height={10} />
                    </span>
                  ))}
                </div>
              </div>
              {/* Right: Description and Link */}
              <div className="md:w-1/3 flex flex-col items-center md:items-start md:pl-26 text-center md:text-left">
                <p className="text-gray-600 text-base mb-4 md:mb-8">
                  {service.description}
                </p>
                <Link href={service.link} className="inline-flex items-center text-[#031CA6] text-base sm:text-lg font-light group border-b-1 border-[#031CA6] pb-0.5 hover:border-blue-700 transition-all">
                  More Detail
                  <Image src="/images/arrow-right-colored.png" alt="Right Arrow" width={20} height={20} className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform inline" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 