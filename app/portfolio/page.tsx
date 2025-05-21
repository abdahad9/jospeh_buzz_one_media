import Header from "@/app/components/Header";
import Image from "next/image";
import Testimonials from "@/app/components/Testimonials";
import FaqSection from "@/app/components/FaqSection";
import Footer from "@/app/components/Footer";
import CtaBanner from "../components/CtaBanner";
import PortfolioCases from "./PortfolioCases";
import WhyChooseUs from "../components/WhyChooseUs";

export default function Portfolio() {
  return (
    <main>
      <Header>
        <div className="flex flex-col md:flex-row items-center justify-start w-full px-4 sm:px-8 md:px-0">
          <div className="mt-10 md:mt-0 ">
            <Image
              src="/images/aboutbanner.png"
              alt="Hero"
              width={620}
              height={400}
              className="rounded-xl"
            />
          </div>
          <div className="w-full md:max-w-2xl text-white text-center md:text-left lg:ml-24 ml-1 md:mt-10 mt-1">
            <div className="flex items-center gap-2 mb-4 md:mb-0 md:col-span-1 justify-center md:justify-start">
                <span className="w-2 h-2 bg-[#89BCE8] inline-block" />
                <span className="text-[#fff] text-base font-normal">Our Cases</span>
            </div>
            <h1
              className="relative font-semibold text-5xl sm:text-6xl md:text-7xl md:leading-[100px] lg:w-[960px] text-center md:text-left lg:mb-12 mb-12"
            >
              We Create only <br /> Awesome Project
            </h1>
            <p
              className="mb-8 text-base sm:text-xl font-normal leading-[1.5] tracking-[0.5px] text-center md:text-left"
            >
              Empowering brands to achieve their digital potential through innovative marketing solutions, personalized strategies, and measurable success. Let&apos;s take your business to the next level together!
            </p>
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-12 w-fit items-center md:items-start justify-center md:justify-start mx-auto md:mx-0">
              <button
                className="bg-[#FFA800] text-black px-8 py-4 hover:bg-[#ffb733] transition cursor-pointer text-base sm:text-lg font-normal leading-[24px] tracking-[0.5px] w-full sm:w-auto"
              >
                Our Services
              </button>
              <button
                className="flex items-center gap-2 text-white px-0 py-2 cursor-pointer border-0 border-b border-white hover:opacity-80 transition text-base sm:text-lg font-normal leading-[24px] tracking-[0.5px] w-full sm:w-auto justify-center md:justify-start"
              >
                Contact Us
                <Image src="/images/arrow-right.png" alt="Right Arrow" width={24} height={24} />
              </button>
            </div>
          </div>
        </div>
      </Header>

      <PortfolioCases />
      <WhyChooseUs />
      <Testimonials />
      <CtaBanner /> 
      <FaqSection />
      <Footer />
    </main>
  );
}       