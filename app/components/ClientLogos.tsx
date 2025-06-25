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
    <section className="w-full py-8 sm:py-10 md:py-12 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 flex flex-col md:flex-row flex-wrap justify-center md:justify-between items-center gap-6 sm:gap-8 md:gap-10 lg:gap-12 bg-transparent">
      {logos.map((logo) => (
        <Image
          key={logo.alt}
          src={logo.src}
          alt={logo.alt}
          width={100}
          height={40}
          className="w-20 h-8 sm:w-24 sm:h-10 md:w-28 md:h-12 lg:w-32 lg:h-14 xl:w-36 xl:h-16"
        //   className="opacity-70 grayscale hover:opacity-100 hover:grayscale-0 transition"
        />
      ))}
    </section>
  );
} 