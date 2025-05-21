// import services from "../servicesData";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import HowWeWork from "@/app/components/HowWeWork";
import CtaBanner from "@/app/components/CtaBanner";
import FaqSection from "@/app/components/FaqSection";
import Footer from "@/app/components/Footer";   
import cases from "../casesData";
import ProjectChallenge from "../projectChallenge";
import PortfolioCases from "../PortfolioCases";

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  
  const portfolioCase = cases.find((c) => c.slug === slug);
  if (!portfolioCase) return notFound();

  // Only show these sections for Content Marketing for now
  // const isContentMarketing = service.slug === "content-marketing" || service.slug === "website-designer" || service.slug === "seo-service" || service.slug === "virtual-assistant" || service.slug === "social-media" || service.slug === "automations";

  return (
    <>
      <Navbar bgClass="bg-white" textClass="text-black" />
      <section className="w-full bg-white min-h-[60vh]">
        <div className="max-w-full mx-auto px-4 sm:px-8 md:px-16 lg:px-18 md:pt-26 pt-12 md:pb-20 pb-4 text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-medium text-[#181818] mb-6 md:mb-0 md:pr-160 pr-0 md:leading-22">
              {portfolioCase.title}
            </h1>
        </div>
        {/* Hero Image */}
        <div className="w-full bg-white">
          <div className="max-w-full md:px-18 px-4 mb-14">
            <div className="overflow-hidden rounded-2xl">
              <Image
                src='/images/casesBanner.png'
                alt='case banner'
                width={1200}
                height={500}
                className="object-cover w-full h-[320px] md:h-[420px] lg:h-[600px]"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <ProjectChallenge slug={slug} />
      <PortfolioCases heading="Read Other Cases" excludeSlug={slug} limit={2} />
      <CtaBanner /> 
      <FaqSection />
      <Footer />
    </>
  );
} 