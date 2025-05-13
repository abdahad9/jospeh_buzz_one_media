import Image from "next/image";

const logos = [
  { src: "/images/Companylogo_1.png", alt: "Amplitude" },
  { src: "/images/Companylogo_2.png", alt: "SpaceX" },
  { src: "/images/Companylogo_3.png", alt: "Classpass" },
  { src: "/images/Companylogo_4.png", alt: "Coinbase" },
  { src: "/images/Companylogo_5.png", alt: "Booking.com" },
  { src: "/images/Companylogo_6.png", alt: "Gumroad" },
  { src: "/images/Companylogo_7.png", alt: "Segment" },
];

export default function ClientLogos() {
  return (
    <section className="w-full py-8 px-8 sm:px-8 md:px-24 flex flex-col md:flex-row flex-wrap justify-center md:justify-between items-center gap-8 md:gap-12 bg-transparent">
      {logos.map((logo) => (
        <Image
          key={logo.alt}
          src={logo.src}
          alt={logo.alt}
          width={120}
          height={40}
        //   className="opacity-70 grayscale hover:opacity-100 hover:grayscale-0 transition"
        />
      ))}
    </section>
  );
} 