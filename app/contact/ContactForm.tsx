'use client';
import { useState } from "react";

export default function ContactForm() {
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
  );
} 