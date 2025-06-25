import Image from "next/image";
import Link from "next/link";

const services = [
  { name: "SEO Service", href: "/services/seo-service" },
  { name: "Website Designer", href: "/services/website-designer" },
  { name: "Content Marketing", href: "/services/content-marketing" },
  { name: "Virtual Assistant", href: "/services/virtual-assistant" },
  { name: "Social Media", href: "/services/social-media" },
  { name: "Automations", href: "/services/automations" },
];

const shortcuts = [
  { name: "About", href: "/about" },
  { name: "Works", href: "/portfolio" },
  { name: "Pricing", href: "/pricing" },
  { name: "Insight", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

const contact = {
  phone: "+1 139 141 419",
  email: "contact@buzzonemedia.com",
  address: "5201 9th St, Elmendorf AFB, Alaska, United States",
};

const socialLinks = [
  { name: "Instagram", href: "#", icon: "/images/Instagram.svg" },
  { name: "YouTube", href: "#", icon: "/images/Youtube.svg" },
  { name: "Facebook", href: "#", icon: "/images/Facebook.svg" },
  { name: "LinkedIn", href: "#", icon: "/images/Linkedin.svg" },
];

export default function Footer() {
  return (
    <footer className="w-full bg-[#FEF5E6] pt-12 sm:pt-16 md:pt-20 lg:pt-24 pb-6">
      <div className="max-w-full mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10 md:gap-12 lg:gap-16 pb-12 sm:pb-16 md:pb-20">
          {/* Logo and CTA */}
          <div className="sm:col-span-2 lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left">
            <Image src="/images/logo_dark.png" alt="Buzz One Media" width={140} height={40} className="mb-6 sm:mb-8 mx-auto lg:mx-0" />
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-medium text-[#151515] mb-6 sm:mb-8 leading-tight text-center lg:text-left">
              Ready to take your<br />business to the next level?<br />Let&apos;s start today!
            </h3>
            <div className="flex gap-4 sm:gap-6 justify-center lg:justify-start">
              {socialLinks.map((social) => (
                <Link key={social.name} href={social.href} className="text-[#151515] hover:opacity-80">
                  <Image src={social.icon} alt={social.name} width={20} height={20} className="w-5 h-5 sm:w-6 sm:h-6" />
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="sm:col-span-1 lg:col-span-2 lg:col-start-6 text-center lg:text-left">
            <h4 className="text-lg sm:text-xl font-light text-[#505050] mb-4 sm:mb-6 text-center lg:text-left">Services</h4>
            <ul className="space-y-3 sm:space-y-4">
              {services.map((service) => (
                <li key={service.name}>
                  <Link href={service.href} className="text-sm sm:text-base text-[#151515] font-medium hover:text-[#031CA6]">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Shortcuts */}
          <div className="sm:col-span-1 lg:col-span-2 text-center lg:text-left">
            <h4 className="text-lg sm:text-xl font-light text-[#505050] mb-4 sm:mb-6 text-center lg:text-left">Shortcut</h4>
            <ul className="space-y-3 sm:space-y-4">
              {shortcuts.map((shortcut) => (
                <li key={shortcut.name}>
                  <Link href={shortcut.href} className="text-sm sm:text-base text-[#151515] font-medium hover:text-[#031CA6]">
                    {shortcut.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="sm:col-span-2 lg:col-span-3 text-center lg:text-left">
            <h4 className="text-lg sm:text-xl font-light text-[#505050] mb-4 sm:mb-6 text-center lg:text-left">Contact</h4>
            <ul className="space-y-3 sm:space-y-4">
              <li>
                <Link href={`tel:${contact.phone}`} className="text-sm sm:text-base text-[#151515] font-medium hover:text-[#031CA6]">
                  {contact.phone}
                </Link>
              </li>
              <li>
                <Link href={`mailto:${contact.email}`} className="text-sm sm:text-base text-[#151515] font-medium hover:text-[#031CA6]">
                  {contact.email}
                </Link>
              </li>
              <li className="text-sm sm:text-base text-[#151515] font-medium">{contact.address}</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-4 sm:pt-6 border-t border-[#E5E5E5] flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-3 sm:gap-4 text-center sm:text-left">
          <div className="text-sm sm:text-base text-[#505050]">© 2024 Buzz One Media</div>
          <div className="flex gap-6 sm:gap-8 justify-center">
            <Link href="/terms" className="text-sm sm:text-base text-[#505050] hover:text-[#151515]">Terms</Link>
            <Link href="/privacy" className="text-sm sm:text-base text-[#505050] hover:text-[#151515]">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
} 