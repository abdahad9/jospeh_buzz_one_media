"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <nav className="relative z-10 flex items-center justify-between px-6 md:px-12 py-6 bg-transparent border-b" style={{ borderBottomWidth: '1px', borderBottomColor: 'rgba(255,255,255,0.15)' }}>
      <Image src="/images/logo1.png" alt="Logo" width={80} height={32} style={{ width: 'auto', height: 'auto' }}/>
      {/* Hamburger for mobile */}
      <button
        className="md:hidden flex flex-col justify-center items-center w-10 h-10 text-white focus:outline-none"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span className={`block w-6 h-0.5 bg-white mb-1 transition-transform ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
        <span className={`block w-6 h-0.5 bg-white mb-1 transition-opacity ${menuOpen ? 'opacity-0' : ''}`}></span>
        <span className={`block w-6 h-0.5 bg-white transition-transform ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
      </button>
      {/* Desktop menu */}
      <ul className="hidden md:flex gap-16 text-white font-medium text-lg">
        <li>
          <Link href="/about" className="hover:underline transition">About</Link>
        </li>
        <li className="relative group">
          <button className="hover:underline transition flex items-center gap-1 focus:outline-none" type="button">
            Services
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
          </button>
          <ul className="absolute left-0 mt-2 w-48 bg-white text-black rounded shadow-lg py-2 z-20 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity">
            <li><Link href="/services/seo" className="block px-4 py-2 hover:bg-gray-100">SEO</Link></li>
            <li><Link href="/services/ppc" className="block px-4 py-2 hover:bg-gray-100">PPC</Link></li>
            <li><Link href="/services/content" className="block px-4 py-2 hover:bg-gray-100">Content Marketing</Link></li>
          </ul>
        </li>
        <li>
          <Link href="/works" className="hover:underline transition">Works</Link>
        </li>
        <li>
          <Link href="/pricing" className="hover:underline transition">Pricing</Link>
        </li>
        <li>
          <Link href="/insight" className="hover:underline transition">Insight</Link>
        </li>
        <li>
          <Link href="/contact" className="hover:underline transition">Contact</Link>
        </li>
      </ul>
      {/* Mobile menu */}
      {menuOpen && (
        <ul className="absolute top-full left-0 w-full bg-[#181818] text-white font-medium text-lg flex flex-col gap-4 py-6 px-6 md:hidden shadow-lg z-40 animate-fade-in">
          <li>
            <Link href="/about" className="block py-2" onClick={() => setMenuOpen(false)}>About</Link>
          </li>
          <li>
            <button
              className="flex items-center gap-1 w-full text-left py-2 focus:outline-none"
              onClick={() => setServicesOpen(!servicesOpen)}
              aria-expanded={servicesOpen}
            >
              Services
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
            </button>
            {servicesOpen && (
              <ul className="pl-4 mt-2 flex flex-col gap-2">
                <li><Link href="/services/seo" className="block py-1" onClick={() => setMenuOpen(false)}>SEO</Link></li>
                <li><Link href="/services/ppc" className="block py-1" onClick={() => setMenuOpen(false)}>PPC</Link></li>
                <li><Link href="/services/content" className="block py-1" onClick={() => setMenuOpen(false)}>Content Marketing</Link></li>
              </ul>
            )}
          </li>
          <li>
            <Link href="/works" className="block py-2" onClick={() => setMenuOpen(false)}>Works</Link>
          </li>
          <li>
            <Link href="/pricing" className="block py-2" onClick={() => setMenuOpen(false)}>Pricing</Link>
          </li>
          <li>
            <Link href="/insight" className="block py-2" onClick={() => setMenuOpen(false)}>Insight</Link>
          </li>
          <li>
            <Link href="/contact" className="block py-2" onClick={() => setMenuOpen(false)}>Contact</Link>
          </li>
        </ul>
      )}
      <button className="bg-[#FFA800] text-black px-10 py-3 font-medium text-lg hover:bg-[#ffb733] transition cursor-pointer hidden md:block">
        Book a Call
      </button>
    </nav>
  );
} 