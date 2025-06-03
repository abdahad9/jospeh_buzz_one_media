import Header from "../components/Header";
import Footer from "../components/Footer";
import FaqSection from "../components/FaqSection";
import CtaBanner from "../components/CtaBanner";
import Image from "next/image";
import Testimonials from "../components/Testimonials";
import ContactForm from "./ContactForm";

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
            className="relative font-semibold text-4xl sm:text-6xl md:text-7xl md:leading-[100px] lg:w-[960px] text-center md:text-left lg:mb-12 mb-12"
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

      <section className="max-w-full mx-auto w-full px-4 md:px-18 py-20">
        <div className="flex flex-col md:flex-row gap-12">
          {/* Contact Form */}
          <ContactForm />

          {/* Contact Info */}
          <div className="flex-1 max-w-3xl md:pl-12 mt-12 md:mt-0 text-center md:text-start">
            <h2 className="text-4xl md:text-5xl font-semibold mb-4 text-black">How can we help you?</h2>
            <p className="text-gray-500 mb-8 text-lg">Kindly fill out this form to provide our team with details about your business requirements</p>
            <hr className="mb-8" />
            <div className="flex flex-col text-center md:text-start justify-center items-center md:items-start">
              <div className="flex items-start gap-4 mb-1">
                <Image src="/images/icons/mail.svg" alt="Mail" width={28} height={28} />
                <div className="font-semibold text-2xl text-black">General Inquires</div>
              </div>
                <div className="text-[#505050] text-lg mb-6">contact@buzzonemedia.com</div>

              <div className="flex items-start gap-4 mb-1">
                <Image src="/images/icons/phone.svg" alt="Phone" width={28} height={28} />
                <div className="font-semibold text-2xl text-black">Toll-Free</div>
              </div>
                  <div className="text-gray-700 text-base mb-6">+1-400-123-4567</div>

              <div className="flex items-start gap-4 mb-1">
                <Image src="/images/icons/map-pin.svg" alt="Location" width={28} height={28} />
                  <div className="font-semibold text-2xl text-black">Office Address:</div>
              </div>
                  <div className="text-gray-700 text-base">109 E Highland Ave, Elgin, Illinois, United States</div>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />
      <CtaBanner /> 
      <FaqSection />
      <Footer />
    </main>
  );
} 