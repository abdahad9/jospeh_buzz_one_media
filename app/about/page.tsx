import Testimonials from "../components/Testimonials";
import FaqSection from "../components/FaqSection";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Image from "next/image";
import StatsSection from "../components/StatsSection";
import MissionVisionSection from "./MissionVisionSection";
import ExpertiseSection from "../components/ExpertiseServices";
import MeetOurTeam from "./MeetOurTeam";
import Link from "next/link";
import CtaBanner from "../components/CtaBanner";

export default function About() {
  return (
    <main>
      <Header showClientLogos={false}>
        <div className="w-full md:max-w-2xl text-white text-center md:text-left lg:ml-24 ml-1 md:mt-10 mt-1">
        <div className="flex items-center gap-2 mb-4 md:mb-0 md:col-span-1 justify-center md:justify-start">
            <span className="w-2 h-2 bg-[#89BCE8] inline-block" />
            <span className="text-[#fff] text-base font-normal">About us</span>
        </div>
        <h1
          className="relative font-semibold text-5xl sm:text-6xl md:text-7xl md:leading-[100px] lg:w-[960px] text-center md:text-left lg:mb-12 mb-12"
        >
          Your Digital <br /> Marketing Solution
        </h1>
        <p
          className="mb-8 text-base sm:text-xl font-normal leading-[1.5] tracking-[0.5px] text-center md:text-left"
        >
          Empowering brands to achieve their digital potential through innovative marketing solutions, personalized strategies, and measurable success. Let's take your business to the next level together!
        </p>
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-12 w-fit items-center md:items-start justify-center md:justify-start mx-auto md:mx-0">
          <Link
            href="/services"
            className="bg-[#FFA800] text-black px-8 py-4 hover:bg-[#ffb733] transition cursor-pointer text-base sm:text-lg font-normal leading-[24px] tracking-[0.5px] w-full sm:w-auto text-center"
          >
            Our Services
          </Link>
          <Link
            href="/contact"
            className="flex items-center gap-2 text-white px-0 py-2 cursor-pointer border-0 border-b border-white hover:opacity-80 transition text-base sm:text-lg font-normal leading-[24px] tracking-[0.5px] w-full sm:w-auto justify-center md:justify-start"
          >
            Contact Us
            <Image src="/images/arrow-right.png" alt="Right Arrow" width={24} height={24} />
          </Link>
        </div>
      </div>
      </Header>
      <div className="max-w-full mx-auto w-full px-4 md:px-18 py-20">
        <div className="flex flex-col md:flex-row gap-12">
          {/* Left: Image */}
          <div className="flex-1">
            <Image
              src="/images/aboutbanner.png"
              alt="About Us"
              width={600}
              height={400}
              className="rounded-2xl w-full object-cover h-full"
            />
          </div>
          {/* Right: Content */}
          <div className="flex-1 max-w-3xl md:pl-12 mt-12 md:mt-0 text-center md:text-start">
            <h2 className="text-4xl md:text-5xl font-semibold mb-4 text-black">About Buzz One Media</h2>
            <p className="text-gray-500 mb-8 text-lg">We are a team of passionate digital marketers, designers, and strategists dedicated to helping businesses grow and succeed in the digital landscape.</p>
            <hr className="mb-8" />
            <div className="flex flex-col text-center md:text-start justify-center items-center md:items-start">
              <div className="flex items-start gap-4 mb-1">
                <Image src="/images/icons/mail.svg" alt="Mail" width={28} height={28} />
                <div className="font-semibold text-2xl text-black">Our Mission</div>
              </div>
                <div className="text-[#505050] text-lg mb-6">To empower businesses with innovative digital solutions that drive growth and success.</div>

              <div className="flex items-start gap-4 mb-1">
                <Image src="/images/icons/phone.svg" alt="Phone" width={28} height={28} />
                <div className="font-semibold text-2xl text-black">Our Vision</div>
              </div>
                  <div className="text-gray-700 text-base mb-6">To be the leading digital marketing partner for businesses worldwide.</div>

              <div className="flex items-start gap-4 mb-1">
                <Image src="/images/icons/map-pin.svg" alt="Location" width={28} height={28} />
                  <div className="font-semibold text-2xl text-black">Our Values:</div>
              </div>
                  <div className="text-gray-700 text-base">Innovation, Excellence, Integrity, and Results-Driven Approach</div>
            </div>
          </div>
        </div>
      </div>
      <Testimonials />
      <CtaBanner /> 
      <FaqSection />
      <Footer />
    </main>
  );
}       