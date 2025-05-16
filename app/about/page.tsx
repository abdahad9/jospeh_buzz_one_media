import Testimonials from "../components/Testimonials";
import FaqSection from "../components/FaqSection";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Image from "next/image";
import StatsSection from "../components/StatsSection";
import Link from "next/link";
import MissionVisionSection from "../components/MissionVisionSection";
import ExpertiseSection from "../components/ExpertiseServices";
import MeetOurTeam from "./MeetOurTeam";
export default function About() {
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
          Empowering brands to achieve their digital potential through innovative marketing solutions, personalized strategies, and measurable success. Let’s take your business to the next level together!
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

      <section className="w-full bg-white py-16 px-4 sm:px-8 md:px-16 lg:px-18">
        <div className="w-full mx-auto">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between">
            {/* <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-12 gap-8 px-4 sm:px-8 md:px-16 lg:px-18">     */}
                <h1 className="relative font-normal text-5xl sm:text-6xl md:text-6xl text-black text-center md:text-left lg:mb-12 mb-12">
                    Our Story
                </h1>
                <div className="md:col-span-2 md:pl-8 text-center md:text-left md:mr-50 md:mt-20">
                    <p className="text-base sm:text-lg text-[#0E0E0E] font-light mb-8 max-w-2xl mx-auto md:mx-0 text-center md:text-left">
                    At Buzz One Media, we believe that every brand has a unique story to tell, and our mission is to help you share it with 
                    the world. Established with a passion for creativity and a deep understanding of digital trends, we’ve become a trusted 
                    partner for businesses seeking impactful growth. Over the years, we’ve worked with clients across industries, delivering
                    results-driven strategies that turn ideas into lasting impressions</p>
                    <p className="text-base sm:text-lg text-[#0E0E0E] font-light mb-8 max-w-2xl mx-auto md:mx-0 text-center md:text-left">
                    Our journey started with a simple goal: to bridge the gap between businesses and their audiences in a fast-evolving 
                    digital world. Today, we continue to thrive by embracing innovation, collaborating closely with our clients, and 
                    focusing on what matters most—achieving your goals and building a brand that stands out in the crowd.</p>
                </div>
            </div>
            <StatsSection />
        </div>
        </section>   
        <MissionVisionSection/>
        <ExpertiseSection/>
        <MeetOurTeam/>
      <Testimonials />
      <FaqSection />
      <Footer />
    </main>
  );
}       