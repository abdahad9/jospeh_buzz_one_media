import Header from "../components/Header";
import Footer from "../components/Footer";
import FaqSection from "../components/FaqSection";
import CtaBanner from "../components/CtaBanner";
import PricingPlans from "../components/PricingPlans";
import Testimonials from "../components/Testimonials";
import Plans from "./plans";
import { sanity } from "../../lib/sanity";

export default async function Pricing() {
  const settings = await sanity.fetch(`*[_type == "siteSettings"][0]{bookingLink}`);

  return (
    <main>
      <Header showClientLogos={false}>
        <div className="w-full md:max-w-4xl text-white text-center md:text-left lg:ml-54 ml-1 md:mt-10 mt-1 md:mb-20 mb-10">
            <div className="flex items-center gap-2 mb-4 md:mb-0 md:col-span-1 justify-center md:justify-start">
                <span className="w-2 h-2 bg-[#89BCE8] inline-block" />
                <span className="text-[#fff] text-base font-normal">Pricing</span>
            </div>
            <h1
            className="relative font-semibold text-5xl sm:text-6xl md:text-7xl md:leading-[100px] lg:w-[960px] text-center md:text-left lg:mb-12 mb-12"
            >
                Perfect plans for <br/> your needs.
            </h1>
            <p
            className="mb-8 text-base sm:text-xl font-normal leading-[1.5] tracking-[0.5px] text-center md:text-left"
            >
                We offer flexible pricing options to meet your business needs, whether you&apos;re a startup or an established enterprise
            </p>
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-12 w-fit items-center md:items-start justify-center md:justify-start mx-auto md:mx-0">
            <a
                href={settings?.bookingLink || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#FFA800] text-black px-8 py-4 hover:bg-[#ffb733] transition cursor-pointer text-base sm:text-lg font-normal leading-[24px] tracking-[0.5px] w-full sm:w-auto"
            >
                Let&apos;s Talk
            </a> 
            </div>
        </div>
      </Header>

      <PricingPlans title="Choose The Plan That&apos;s Right For Your Business" />
      <Plans/>
      <Testimonials/>
      <CtaBanner /> 
      <FaqSection />
      <Footer />
    </main>
  );
} 