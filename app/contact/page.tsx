"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import FaqSection from "../components/FaqSection";
import CtaBanner from "../components/CtaBanner";
import Image from "next/image";
import Testimonials from "../components/Testimonials";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setSubmitted(true);
        setForm({ firstName: "", lastName: "", email: "", company: "", message: "" });
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch (err: unknown) {
      console.error(err);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

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
          <form className="flex-1 text-center md:text-start" onSubmit={handleSubmit}>
            <div className="flex flex-col md:flex-row gap-8 mb-8">
              <div className="flex-1">
                <input name="firstName" type="text" className="w-full border-0 border-b border-gray-400 focus:border-black outline-none py-2 mb-2 bg-transparent text-[#000]" placeholder="First Name" value={form.firstName} onChange={handleChange} required />
              </div>
              <div className="flex-1">
                <input name="lastName" type="text" className="w-full border-0 border-b border-gray-400 focus:border-black outline-none py-2 mb-2 bg-transparent text-[#000]" placeholder="Last Name" value={form.lastName} onChange={handleChange} required />
              </div>
            </div>
            <div className="mb-8">
              <input name="email" type="email" className="w-full border-0 border-b border-gray-400 focus:border-black outline-none py-2 mb-2 bg-transparent text-[#000]" placeholder="Email Address" value={form.email} onChange={handleChange} required />
            </div>
            <div className="mb-8">
              <input name="company" type="text" className="w-full border-0 border-b border-gray-400 focus:border-black outline-none py-2 mb-2 bg-transparent text-[#000]" placeholder="Company" value={form.company} onChange={handleChange} />
            </div>
            <div className="mb-8">
              <textarea name="message" rows={4} className="w-full border-0 border-b border-gray-400 focus:border-black outline-none py-2 mb-2 bg-transparent text-[#000]" placeholder="Message" value={form.message} onChange={handleChange} required />
            </div>
            <button type="submit" className="bg-[#F29F05] cursor-pointer hover:bg-[#e89c1e] text-black px-8 py-3 mt-4 font-normal text-lg transition rounded-none" disabled={loading}>{loading ? "Sending..." : "Submit Message"}</button>
            {submitted && <div className="text-green-600 mt-4">Thank you! Your message has been sent.</div>}
            {error && <div className="text-red-600 mt-4">{error}</div>}
          </form>

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