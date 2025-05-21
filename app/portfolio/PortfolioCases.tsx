import Image from "next/image";
import Link from "next/link";

const cases = [
  {
    logo: "/images/layers_logo.svg",
    client: "Layers",
    title: "Transforming a Local Cafe with Content Marketing",
    description:
      "A small local café wanted to expand its customer base and establish a stronger online presence. BuzzOne Media crafted a tailored content strategy, including SEO blog posts, engaging social media content, and promotional campaigns.",
    link: "#",
    stats: [
      { label: "increase in website traffic", value: "250%" },
      { label: "new followers", value: "1,500+" },
      { label: "growth in newsletter", value: "300%" },
      { label: "increase in monthly in-store sales", value: "35%" },
    ],
    color: "bg-[#EBF4FB] border-[#D6E6F6]",
  },
  {
    logo: "/images/Sisyphus_logo.svg",
    client: "Sisyphus",
    title: "Boosting an E-Commerce Brand with SEO and Blog Writing",
    description:
      "An emerging e-commerce store struggled with low organic visibility and inconsistent traffic. BuzzOne Media implemented an SEO-driven content plan, focusing on blog articles and optimized product descriptions.",
    link: "#",
    stats: [
      { label: "growth in organic search traffic", value: "200%" },
      { label: "increase engagement rates", value: "3x" },
      { label: "higher conversion rates", value: "45%" },
      { label: "keywords ranked in the top 10", value: "1000+" },
    ],
    color: "bg-[#F4F4F3] border-[#D6E6F6]",
  },
  {
    logo: "/images/Quotient_logo.svg",
    client: "Quotient",
    title: "Scaling a SaaS Startup with Email Marketing and E-Books",
    description:
      "A SaaS company wanted to generate more leads and improve customer retention. BuzzOne Media created high-value e-books and newsletters to target potential clients and maintain relationships with existing users.",
    link: "#",
    stats: [
      { label: "increase in social media", value: "400%" },
      { label: "video ad impressions", value: "2.5M" },
      { label: "new customer reviews", value: "1,200+" },
      { label: "boost in monthly revenue", value: "50%" },
    ],
    color: "bg-[#FEF5E6] border-[#F6D6D6]",
  },
  {
    logo: "/images/Circooles_logo.svg",
    client: "Circooles",
    title: "Rebranding a Retail Chain with Social Media and Video Content",
    description:
      "A struggling retail chain needed a modernized image to attract younger audiences. BuzzOne Media spearheaded a rebranding campaign with dynamic social media content, influencer partnerships, and engaging video ads.",
    link: "#",
    stats: [
      { label: "increase in website traffic", value: "250%" },
      { label: "new followers", value: "1,500+" },
      { label: "growth in newsletter", value: "300%" },
      { label: "increase in monthly in-store sales", value: "35%" },
    ],
    color: "bg-[#F1F3FF] border-[#D6E6F6]",
  },
];

export default function PortfolioCases() {
  return (
    <section className="max-w-full mx-auto px-4 sm:px-18 py-16 text-center md:text-left">
      <h2 className="text-3xl sm:text-5xl font-medium text-[#181818] mb-10 md:leading-16 text-center md:text-left">
        Check Our Works With<br />Real Results
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:mx-0 mx-auto">
        {cases.map((item) => (
          <div
            key={item.client}
            className={`rounded-2xl ${item.color}  p-8 flex flex-col gap-6 shadow-sm`}
          >
            <div className="flex items-center gap-3 mb-4 md:mx-0 mx-auto">
              <Image src={item.logo} alt={item.client} width={52} height={52} className="w-[140px]"/>
              {/* <span className="font-semibold text-2xl text-[#181818]">{item.client}</span> */}
            </div>
            <h3 className="text-4xl font-medium text-[#181818] mb-2 md:leading-12 md:pr-20 pr-0">
              {item.title}
            </h3>
            <p className="text-[#000000] text-base font-light mb-4">
              {item.description}
            </p>
            <Link
              href={item.link}
              className="text-[#031CA6] text-lg font-normal md:mx-0 mx-auto inline-flex items-center gap-1 border-b border-[#031CA6] w-fit hover:border-blue-700 transition-all mb-2"
            >
              See Detail
              <Image src="/images/arrow-right-colored.svg" alt="Right Arrow" width={24} height={24} className="ml-1"/>
            </Link>
            <span className="pb-4 border-b border-gray-300"></span>
            <div className="flex flex-wrap gap-3 mt-auto md:mx-0 mx-auto">
              {item.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white rounded-2xl px-4 py-2 text-xs font-medium text-[#181818] flex flex-row items-center min-w-[120px] md:mx-0 mx-auto"
                >
                  <span className="text-[#031CA6] text-[14px] font-bold">{stat.value}</span>
                  <span className="text-[#505050] text-[14px] font-normal ml-2 text-center">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 