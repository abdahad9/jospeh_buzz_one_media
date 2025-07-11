"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
const faqs = [
  {
    question: "How long does it take to see results from your services?",
    answer: "Results vary by service and industry, but most clients see measurable improvements within 3-6 months.",
  },
  {
    question: "What industries do you specialize in?",
    answer: "We work with a wide range of industries, including e-commerce, SaaS, healthcare, and more.",
  },
  {
    question: "Can I choose individual services or a full package?",
    answer: "Absolutely! We offer both à la carte services and comprehensive packages tailored to your needs.",
  },
  {
    question: "How do you measure the success of your strategies?",
    answer: "We use key performance indicators (KPIs) such as traffic, conversions, and ROI to track success.",
  },
  {
    question: "What makes your agency different from others?",
    answer: "Our personalized approach, transparency, and proven results set us apart from the competition.",
  },
];

export default function FaqSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="w-full bg-[#FFFFFF] py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
      <div className="max-w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-start">
        {/* Left: Heading and Contact */}
        <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-[#151515] mb-6 sm:mb-8 md:mb-10 leading-tight text-center lg:text-left">
            Have Questions?<br />We&apos;ve Got Answers
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#505050] font-light mb-6 sm:mb-8 md:mb-10 max-w-lg md:max-w-xl text-center lg:text-left">
            Get clarity on the most common questions about our services, processes, and how we can help your business thrive.
          </p>
          <div className="mb-2 font-normal text-sm sm:text-base text-[#151515] text-center lg:text-left">
            Have other question?
          </div>
          <Link href="/contact" className="text-sm sm:text-base md:text-lg lg:text-xl text-[#031CA6] font-normal hover:text-[#1a2bb5] flex items-center gap-2 w-fit border-b border-[#2A3AFF] pb-1 mx-auto lg:mx-0">
            Contact us
            <Image src="/images/arrow-right-colored.svg" alt="Right Arrow" width={20} height={20} className="ml-1 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"/>
          </Link>
        </div>
        {/* Right: FAQ Accordion */}
        <div className="flex flex-col gap-4 sm:gap-6 items-center lg:items-start">
          {faqs.map((faq, idx) => (
            <div key={faq.question} className="w-full">
              <button
                className="w-full text-lg sm:text-xl md:text-2xl text-[#151515] font-normal bg-white rounded-lg border border-[#E5E5E5] px-3 sm:px-4 py-3 flex items-center justify-between transition hover:shadow text-center lg:text-left"
                onClick={() => setOpen(open === idx ? null : idx)}
                aria-expanded={open === idx}
                aria-controls={`faq-${idx}`}
              >
                <span className="w-full text-center lg:text-left">{faq.question}</span>
                <span className="text-2xl sm:text-3xl text-[#151515] transition-transform cursor-pointer" style={{ transform: open === idx ? "rotate(45deg)" : "rotate(0deg)" }}>
                  +
                </span>
              </button>
              {open === idx && (
                <div
                  id={`faq-${idx}`}
                  className="bg-white border-l border-r border-b border-[#E5E5E5] rounded-b-xl px-4 sm:px-6 md:px-8 py-4 sm:py-6 text-sm sm:text-base md:text-lg text-[#505050] font-light text-center lg:text-left"
                >
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 