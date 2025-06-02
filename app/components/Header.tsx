import Navbar from "./Navbar";
import ClientLogos from "./ClientLogos";
import { ReactNode } from "react";
import { sanity } from "@/lib/sanity";

export default async function Header({
  children,
  showClientLogos = true,
}: {
  children: ReactNode;
  showClientLogos?: boolean;
}) 
{
  const settings = await sanity.fetch(`*[_type == "siteSettings"][0]{bookingLink}`);
  console.log("settings", settings);
  return (
    <header
      className="relative md:min-h-[80vh] flex flex-col justify-between"
      style={{ 
        backgroundImage: "url('/images/hero-bg.png')",
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
    <Navbar bookingLink={settings?.bookingLink} />
      <div className="relative z-10 px-4 sm:px-8 md:px-16 lg:px-24 pt-16 pb-6 flex flex-col md:flex-row items-center justify-between flex-1">
        {children}
      </div>
      {showClientLogos && <ClientLogos />}
    </header>
  );
} 