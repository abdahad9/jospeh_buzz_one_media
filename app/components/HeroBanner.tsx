import Image from "next/image";

export default function HeroBanner() {
  return (
    <div className="flex flex-col md:flex-row items-start justify-between w-full">
      <div className="max-w-xl text-white">
        <h1 className="text-5xl font-bold mb-6 relative"
            style={{
                fontSize: "139px",
                width: "960px",
                zIndex: 1,
                fontWeight: '600',
                lineHeight: '170px',
                marginBottom: '200px',
              }}
        >Empower Your<br />Digital Growth</h1>
        <p className="mb-8 text-lg"
        style={{
            fontSize: '18px',
            lineHeight: '24px',
            fontWeight: '400',
            letterSpacing: '0.5px',
        }}>
          Unlock your business potential with tailored digital marketing strategies.
          Let's create impactful solutions to help you stand out and succeed in the digital era.
        </p>
        <div className="flex gap-12">
          <button className="bg-[#FFA800] text-black px-8 py-4 font-medium hover:bg-[#ffb733] transition cursor-pointer"
               style={{
                fontSize: '18px',
                lineHeight: '24px',
                fontWeight: '400',
                letterSpacing: '0.5px',
            }}>
            Book a Call
          </button>
          <button className="flex items-center gap-2 text-white px-0 py-4 font-medium cursor-pointer border-0 border-b-2 border-white hover:opacity-80 transition"
            style={{
              fontSize: '18px',
              lineHeight: '24px',
              fontWeight: '400',
              letterSpacing: '0.5px',
              borderBottomWidth: '1px',
              borderBottomColor: '#fff',
              background: 'transparent',
              borderRadius: 0,
              paddingBottom: '8px',
              marginBottom: '6px',
            }}>
            Our Services
            <Image src="/images/arrow-right.png" alt="Right Arrow" width={24} height={24} />
          </button>
        </div>
      </div>
      <div className="mt-10 md:mt-0 md:ml-12">
        <Image
          src="/images/banner-img.png"
          alt="Hero"
          width={640}
          height={400}
          className="rounded-xl"
        />
      </div>
    </div>
  );
} 