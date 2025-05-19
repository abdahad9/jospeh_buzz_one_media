import services from "../../servicesData";
import { notFound } from "next/navigation";
import Navbar from "../../../components/Navbar";
import Image from "next/image";
import HowWeWork from "@/app/components/HowWeWork";
import Footer from "@/app/components/Footer";
import FaqSection from "@/app/components/FaqSection";
import CtaBanner from "@/app/components/CtaBanner";
import OurServices from "../../ourServices";

const WhatClientsGet = [
    {
      title: "Custom Content",
      desc: "Professionally written articles and blogs that align with your brand identity.",
    },
    {
      title: "SEO Optimization",
      desc: "Keyword-focused content designed to boost your search engine visibility.",
    },
    {
      title: "Consistent Publishing",
      desc: "A content calendar tailored to your audience's preferences and peak engagement times.",
    },
    {
      title: "Engaging Topics",
      desc: "Research-driven topics designed to capture attention and retain readers.",
    },
    {
      title: "Analytics Insights",
      desc: "Performance metrics to help measure content success and refine strategies.",
    },
  ];

  const benefits = [
    {
      title: "Stronger Online Presence",
      desc: "Build authority in your industry with expertly crafted articles.",
    },
    {
      title: "Increased Traffic",
      desc: "Attract organic traffic with SEO-optimized content that ranks higher on search engines.",
    },
    {
      title: "Time Efficiency",
      desc: "Save time by entrusting our professionals with your content creation needs.",
    },
    {
      title: "Audience Engagement",
      desc: "Foster deeper connections with readers through relevant and valuable content.",
    },
    {
      title: "Scalable Solutions",
      desc: "Whether you need one article or a full blog series, our services grow with your business.",
    },
  ];

export default async function Page({ params }: { params: { slug: string; subslug: string } }) {
  const service = services.find((s) => s.slug === params.slug);
  if (!service || !service.subServices) return notFound();
  const subService = service.subServices.find((ss) => ss.subslug === params.subslug);
  if (!subService) return notFound();
  

  return (
    <>
      <Navbar bgClass="bg-white" textClass="text-black" />
      
      <section className="w-full bg-white min-h-[60vh]">

        <div className="max-w-full mx-auto px-4 sm:px-8 md:px-16 lg:px-18 pt-10 md:pt-26 md:pb-30 pb-12 items-center text-center md:text-left">
          {/* Breadcrumb */}
          {/* Title, Description, CTA */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <div>
                <div className="flex items-center gap-2 mb-4 justify-center md:justify-start">
                    <span className="w-2 h-2 bg-[#89BCE8] inline-block" />
                    <span className="text-[#505050] text-base font-normal">{service.title}</span>
                </div>
                <h1 className="text-4xl sm:text-5xl md:text-7xl font-medium text-[#181818] mb-6 md:mb-0 md:pr-36 md:leading-20">
                {subService.title}
                </h1>
            </div>
            <div className="md:w-1/2 flex flex-col gap-6 md:items-start justify-center md:justify-start md:pl-40 text-center md:text-left">
              <p className="text-[#505050] text-base font-light md:text-lg mb-2 md:text-left max-w-xl md:pr-10">
                {subService.description}
              </p>
              <div className="flex justify-center md:justify-start">
                <button className="bg-[#F29F05] hover:bg-[#b97f2e] text-black font-medium px-10 py-4 transition w-fit md:w-auto text-base md:text-lg">
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
                src='/images/sub-services.png'
                alt='sub-services'
                width={1200}
                height={500}
                className="object-cover w-full h-[320px] md:h-[420px] lg:h-[760px]"
                priority
              />
            </div>
          </div>
        </div>

        <>
            {/* Overview Section */}
            <div className="max-w-full mx-auto px-4 sm:px-8 md:px-16 lg:px-18 md:py-20 py-12 flex flex-col md:flex-row gap-12 text-center md:text-left">
              <div className="md:w-2/4 w-full">
                <h2 className="text-3xl md:text-5xl font-medium text-[#181818] mb-0 md:mb-8">Overview</h2>
              </div>
              <div className="md:w-2/4 w-full text-[#505050] text-base md:text-lg font-light flex flex-col gap-6">
                <p>Engage your audience with high-quality articles and blogs crafted to resonate with your brand&apos;s voice. Our team of expert writers and strategists develop content that informs, inspires, and drives action. Whether you&apos;re looking to build authority, improve SEO rankings, or connect with your target audience, our blog and article writing services are tailored to your business goals.</p>
                <p>Whether you&apos;re launching a new product, sharing industry insights, or strengthening your online presence, our article and blog services are designed to meet your unique needs. From ideation to publishing, we ensure every piece of content contributes to your business goals while providing value to your audience. Let us help you create a content strategy that sets your brand apart and keeps your readers coming back for more.</p>
              </div>
            </div>
            <div className="border-t border-[#E5E5E5] my-0 md:my-8 md:mx-15" />

            <div className="max-w-full mx-auto px-4 sm:px-8 md:px-16 lg:px-18 py-16 flex flex-col md:flex-row gap-12">
              {/* Left: Heading, Description, Button */}
              <div className="md:w-2/4 w-full flex flex-col gap-8 md:pr-60">
                <h2 className="text-2xl md:text-5xl md:leading-15 font-medium text-[#181818]">What Clients Get from This Service</h2>
              </div>
              {/* Right: Numbered List */}
              <div className="md:w-2/4 w-full flex flex-col gap-10 justify-center md:justify-start">
                {WhatClientsGet.map((data, idx) => (
                  <div key={data.title} className="flex flex-col gap-2 border-b border-[#E5E5E5] pb-6 last:border-b-0 last:pb-0 justify-center md:justify-start text-center md:text-left">
                    <div className="flex items-center gap-4 justify-center md:justify-start">
                      <span className="text-[#031CA6] text-xl md:text-2xl font-medium">{`0${idx + 1}.`}</span>
                      <span className="text-lg md:text-2xl font-medium text-black">{data.title}</span>
                    </div>
                    <p className="text-[#505050] text-base md:text-lg font-light mt-2">{data.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="border-t border-[#E5E5E5] my-8 md:mx-15" />

            <div className="max-w-full mx-auto px-4 sm:px-8 md:px-16 lg:px-18 py-16 flex flex-col md:flex-row gap-12">
              {/* Left: Heading, Description, Button */}
              <div className="md:w-2/4 w-full flex flex-col gap-8 md:pr-60">
                <h2 className="text-2xl md:text-5xl md:leading-15 font-medium text-[#181818]">Benefits of Choosing Our Services</h2>
                <div className="flex justify-center md:justify-start">
                    <button className="bg-[#F29F05] hover:bg-[#b97f2e] text-black font-normal px-10 py-4 transition w-fit md:w-fit text-base md:text-lg">Let&apos;s Talk</button>
                </div>
              </div>
              {/* Right: Numbered List */}
              <div className="md:w-2/4 w-full flex flex-col gap-10 justify-center md:justify-start">
                {benefits.map((data, idx) => (
                  <div key={data.title} className="flex flex-col gap-2 border-b border-[#E5E5E5] pb-6 last:border-b-0 last:pb-0 justify-center md:justify-start text-center md:text-left">
                    <div className="flex items-center gap-4 justify-center md:justify-start">
                      <span className="text-[#031CA6] text-xl md:text-2xl font-medium">{`0${idx + 1}.`}</span>
                      <span className="text-lg md:text-2xl font-medium text-black">{data.title}</span>
                    </div>
                    <p className="text-[#505050] text-base md:text-lg font-light mt-2">{data.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <HowWeWork />
            <OurServices />
            <CtaBanner /> 
            <FaqSection />
            <Footer />
          </>
      </section>
    </>
  );
} 