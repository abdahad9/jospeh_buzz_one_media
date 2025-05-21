import Header from "../components/Header";
import Footer from "../components/Footer";
import FaqSection from "../components/FaqSection";
import CtaBanner from "../components/CtaBanner";

export default function Contact() {
  return (
    <main>
      <Header showClientLogos={false}>
        <div className="w-full md:max-w-4xl text-white text-center md:text-left lg:ml-54 ml-1 md:mt-10 mt-1 md:mb-20 mb-10">
            <div className="flex items-center gap-2 mb-4 md:mb-0 md:col-span-1 justify-center md:justify-start">
                <span className="w-2 h-2 bg-[#89BCE8] inline-block" />
                <span className="text-[#fff] text-base font-normal">Contact</span>
            </div>
            <h1
            className="relative font-semibold text-5xl sm:text-6xl md:text-7xl md:leading-[100px] lg:w-[960px] text-center md:text-left lg:mb-12 mb-12"
            >
                Get in Touch with <br /> Us Today
            </h1>
            <p
            className="mb-8 text-base sm:text-xl font-normal leading-[1.5] tracking-[0.5px] text-center md:text-left"
            >
                We’re happy to meet founders early on in their journey, and would love to hear from you.
            </p>
        </div>
      </Header>

      <CtaBanner /> 
      <FaqSection />
      <Footer />
    </main>
  );
} 