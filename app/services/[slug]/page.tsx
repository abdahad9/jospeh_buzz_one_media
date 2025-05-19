import services from "../servicesData";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import HowWeWork from "@/app/components/HowWeWork";
import CtaBanner from "@/app/components/CtaBanner";
import FaqSection from "@/app/components/FaqSection";
import Footer from "@/app/components/Footer";   
import OurServices from "../ourServices";
export default function ServiceDetail({ params }: { params: { slug: string } }) {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) return notFound();

  // Only show these sections for Content Marketing for now
  const isContentMarketing = service.slug === "content-marketing" || service.slug === "website-designer" || service.slug === "seo-service" || service.slug === "virtual-assistant" || service.slug === "social-media" || service.slug === "automations";

  return (
    <>
      <Navbar bgClass="bg-white" textClass="text-black" />
      
      <section className="w-full bg-white min-h-[60vh]">
        {/* Top Section: Breadcrumb, Title, Description, CTA */}
        <div className="max-w-full mx-auto px-4 sm:px-8 md:px-16 lg:px-18 md:pt-26 pt-12 pb-20 text-center md:text-left">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-6 text-center md:text-left justify-center md:justify-start">
            <span className="w-2 h-2 bg-[#89BCE8] inline-block"/>
            <span className="text-[#505050] text-base font-normal">Services</span>
          </div>
          {/* Title, Description, CTA */}
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-medium text-[#181818] mb-6 md:mb-0 md:pr-36 md:leading-20">
              {service.title}
            </h1>
            <div className="md:w-1/2 flex flex-col gap-6 md:items-start md:pl-40 justify-center md:justify-start">
              <p className="text-[#505050] text-base font-light md:text-lg mb-2 md:text-left max-w-xl md:pr-10">
                {service.description}
              </p>
              <div className="flex justify-center md:justify-start">
                <button className="bg-[#F29F05] hover:bg-[#b97f2e] text-black font-medium px-10 py-4 transition w-fit md:w-auto text-base md:text-lg text-center md:text-left">
                    Let&apos;s Talk
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Hero Image */}
        <div className="w-full bg-white">
          <div className="max-w-full">
            <div className="overflow-hidden">
              <Image
                src={service.heroImage}
                alt={service.title}
                width={1200}
                height={500}
                className="object-cover w-full h-[320px] md:h-[420px] lg:h-[768px]"
                priority
              />
            </div>
          </div>
        </div>
        {/* Overview & What's Included Sections */}
        {isContentMarketing && (
          <>
            {/* Overview Section */}
            <div className="max-w-full mx-auto px-4 sm:px-8 md:px-16 lg:px-18 py-20 flex flex-col md:flex-row gap-12 text-center md:text-left">
              <div className="md:w-2/4 w-full">
                <h2 className="text-3xl md:text-5xl font-medium text-[#181818] mb-8">Overview</h2>
              </div>
              <div className="md:w-2/4 w-full text-[#505050] text-base md:text-lg font-light flex flex-col gap-6">
                <p>At Buzz One Media, we specialize in creating compelling content that not only engages but also converts. Our content marketing service is designed to help your brand tell its story in a way that connects with your audience and drives measurable results. From blogs and articles to social media content and email campaigns, we ensure every piece of content serves a strategic purpose.</p>
                <p>By combining creativity, data-driven insights, and industry expertise, we build a content strategy tailored to your brand&apos;s goals. Whether it&apos;s increasing website traffic, building brand awareness, or nurturing leads, our team delivers impactful solutions to keep your audience engaged.</p>
                <div>
                  <span className="block mb-2 font-light">What you&apos;ll get with our Content Marketing Service:</span>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>A tailored content strategy that aligns with your business objectives.</li>
                    <li>High-quality content creation, from blogs to social media posts.</li>
                    <li>SEO-optimized materials to improve search engine rankings.</li>
                    <li>Analytics and reporting to track performance and adjust as needed.</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="border-t border-[#E5E5E5] my-8 md:mx-15" />
            {/* What's Included Section */}
            <div className="max-w-full mx-auto px-4 sm:px-8 md:px-16 lg:px-18 py-16 flex flex-col md:flex-row gap-12 text-center md:text-left">
              {/* Left: Heading, Description, Button */}
              <div className="md:w-2/4 w-full flex flex-col gap-8 md:pr-60 justify-center md:justify-start">
                <h2 className="text-2xl md:text-5xl md:leading-15 font-medium text-[#181818]">What&apos;s Included in Our Content Marketing</h2>
                <p className="text-[#505050] text-base md:text-lg font-light">Our comprehensive content marketing service covers all the essentials to help your brand stand out.</p>
                <div className="flex justify-center md:justify-start text-center md:text-left">
                    <button className="bg-[#F29F05] hover:bg-[#b97f2e] text-black font-normal px-10 py-4 transition w-fit md:w-fit text-base md:text-lg">Let&apos;s Talk</button>
                </div>
              </div>
              {/* Right: Numbered List */}
              <div className="md:w-2/4 w-full flex flex-col gap-10 justify-center md:justify-start">
                {service.tags.map((tag, idx) => (
                     tag != "See More..." && (
                  <div key={tag} className="flex flex-col gap-2 border-b border-[#E5E5E5] pb-6 last:border-b-0 last:pb-0 justify-center md:justify-start">
                    <div className="flex items-center gap-4 justify-center md:justify-start">
                      <span className="text-[#031CA6] text-xl md:text-2xl font-medium">{`0${idx + 1}.`}</span>
                      <span className="text-lg md:text-2xl font-medium text-black">{tag}</span>
                    </div>
                    <p className="text-[#505050] text-base md:text-lg font-light mt-2">{service.tagDescriptions ? service.tagDescriptions[idx] : ''}</p>
                    <div className="flex justify-center md:justify-start text-center md:text-left">
                        <Link href={`/services/${service.slug}/${service.subServices ? service.subServices[idx]?.subslug : ''}`} className="inline-flex items-center justify-center md:justify-start text-[#031CA6] text-base md:text-lg font-medium group border-b border-[#031CA6] pb-0.5 w-fit hover:border-blue-700 transition-all mt-2">
                        Learn More
                        <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                        </Link>
                    </div>
                  </div>
                    )
                ))}
              </div>
            </div>
          </>
        )}
      </section>

      <div className="border-t border-[#E5E5E5] my-8 md:mx-15 bg-white" />

      <HowWeWork />
      <OurServices />
      <CtaBanner /> 
      <FaqSection />
      <Footer />
    </>
  );
} 