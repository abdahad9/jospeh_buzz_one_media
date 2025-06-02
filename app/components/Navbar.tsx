"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

interface NavbarProps {
  bgClass?: string;
  textClass?: string;
  bookingLink?: string;
}

export default function Navbar({ bgClass = "bg-transparent", textClass = "text-white", bookingLink }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  

  // Choose logo based on background
  const logoSrc = bgClass === "bg-white" ? "/images/logo_dark.png" : "/images/logo1.png";
  console.log('bgClass', bgClass);

  // Helper to check if a link is active
  const isActive = (href: string) => {
    if (href === "/services") return pathname.startsWith("/services");
    return pathname === href;
  };

  return (
    <nav className={`relative z-12 flex items-center justify-between px-6 md:px-12 py-6 ${bgClass} border-b`} style={{ borderBottomWidth: '1px', borderBottomColor: bgClass === 'bg-white' ? 'rgba(0,0,0,0.08)' : 'rgba(255,255,255,0.15)' }}>
      <Link href="/">
        <Image src={logoSrc} alt="Logo" width={80} height={32} style={{ width: 'auto', height: 'auto' }}/>
      </Link>
      {/* Hamburger for mobile */}
      <button
        className={`md:hidden flex flex-col justify-center items-center w-10 h-10 focus:outline-none ${textClass}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span className={`block w-6 h-0.5 bg-current mb-1 transition-transform ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
        <span className={`block w-6 h-0.5 bg-current mb-1 transition-opacity ${menuOpen ? 'opacity-0' : ''}`}></span>
        <span className={`block w-6 h-0.5 bg-current transition-transform ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
      </button>
      {/* Desktop menu */}
      <ul className={`hidden md:flex gap-16 font-normal text-lg ${textClass}`}>
        <li>
          <Link href="/about" className={`${isActive("/about") ? "text-[#F29F05] font-semibold underline underline-offset-4" : "hover:underline"} transition`}>About</Link>
        </li>
        <li>
          <Link href="/services" className={`${isActive("/services") ? "text-[#F29F05] font-semibold underline underline-offset-4" : "hover:underline"} transition`}>Services</Link>
        </li>
        <li>
          <Link href="/portfolio" className={`${isActive("/portfolio") ? "text-[#F29F05] font-semibold underline underline-offset-4" : "hover:underline"} transition`}>Works</Link>
        </li>
        <li>
          <Link href="/pricing" className={`${isActive("/pricing") ? "text-[#F29F05] font-semibold underline underline-offset-4" : "hover:underline"} transition`}>Pricing</Link>
        </li>
        <li>
          <Link href="/blog" className={`${isActive("/blog") ? "text-[#F29F05] font-semibold underline underline-offset-4" : "hover:underline"} transition`}>Insight</Link>
        </li>
        <li>
          <Link href="/contact" className={`${isActive("/contact") ? "text-[#F29F05] font-semibold underline underline-offset-4" : "hover:underline"} transition`}>Contact</Link>
        </li>
      </ul>
      {/* Mobile menu */}
      {menuOpen && (
        <ul className={`absolute top-full left-0 w-full ${bgClass === "bg-white" ? "bg-white" : "bg-[#181818]"} font-medium text-lg flex flex-col gap-4 py-6 px-6 md:hidden shadow-lg z-4 animate-fade-in ${textClass}`}>
          <li>
            <Link href="/about" className={`block py-2 ${isActive("/about") ? "text-[#031CA6] font-semibold underline underline-offset-4" : ""}`} onClick={() => setMenuOpen(false)}>About</Link>
          </li>
          <li>
            <Link href="/services" className={`block py-2 ${isActive("/services") ? "text-[#031CA6] font-semibold underline underline-offset-4" : ""}`} onClick={() => setMenuOpen(false)}>Services</Link>
          </li>
          <li>
            <Link href="/portfolio" className={`block py-2 ${isActive("/portfolio") ? "text-[#031CA6] font-semibold underline underline-offset-4" : ""}`} onClick={() => setMenuOpen(false)}>Works</Link>
          </li>
          <li>
            <Link href="/pricing" className={`block py-2 ${isActive("/pricing") ? "text-[#031CA6] font-semibold underline underline-offset-4" : ""}`} onClick={() => setMenuOpen(false)}>Pricing</Link>
          </li>
          <li>
            <Link href="/blog" className={`block py-2 ${isActive("/blog") ? "text-[#031CA6] font-semibold underline underline-offset-4" : ""}`} onClick={() => setMenuOpen(false)}>Insight</Link>
          </li>
          <li>
            <Link href="/contact" className={`block py-2 ${isActive("/contact") ? "text-[#031CA6] font-semibold underline underline-offset-4" : ""}`} onClick={() => setMenuOpen(false)}>Contact</Link>
          </li>
        </ul>
      )}
      <a
        href={bookingLink}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#F29F05] text-black px-10 py-3 font-normal text-lg hover:bg-[#ffb733] transition cursor-pointer hidden md:block"
      >
        Book a Call
      </a>
    </nav>
  );
} 