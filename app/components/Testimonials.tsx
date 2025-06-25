import Image from "next/image";

const testimonials = [
  {
    stars: 5,
    title: "Results Beyond Expectations",
    quote: "Partnering with this team transformed our online presence. Our SEO ranking improved dramatically!",
    name: "Giana Mango",
    role: "CEO at Foundana Co.",
    avatar: "/images/testimonial1.svg",
  },
  {
    stars: 5,
    title: "A Game Changer for Us",
    quote: "The website they designed not only looks amazing but also converts better than ever before.",
    name: "Mira Septimus",
    role: "Marketing Lead at BCA Ltd.",
    avatar: "/images/testimonial2.svg",
  },
  {
    stars: 5,
    title: "Reliable and Efficient Team",
    quote: "Working with them feels like an extension of our team. Always on time and top quality!",
    name: "Kierra Baptista",
    role: "Operations Head at Bunaka",
    avatar: "/images/testimonial3.svg",
  },
];

export default function Testimonials() {
  return (
    <section className="w-full bg-white pt-0 md:pt-12 lg:pt-16 xl:pt-20 px-0">
      <div className="w-full">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-8 sm:mb-10 md:mb-12 lg:mb-16 gap-6 sm:gap-8 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
          <div>
            <div className="flex items-center gap-2 mb-4 justify-center md:justify-start">
              <span className="w-2 h-2 bg-[#89BCE8] inline-block" />
              <span className="text-[#505050] text-base font-normal">Testimonials</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-normal mb-4 text-[#151515] w-full md:w-auto lg:w-3xl pr-0 md:pr-8 lg:pr-20 xl:pr-40 leading-tight md:leading-10 lg:leading-18 text-center md:text-left">Hear From Our Clients</h2>
          </div>
          <p className="text-sm sm:text-base md:text-lg text-[#0E0E0E] font-light max-w-lg md:max-w-xl lg:max-w-2xl mt-2 md:mt-8 lg:mt-30 text-center md:text-left mx-auto md:mx-0">
                See how we&apos;ve helped businesses like yours succeed with our innovative digital marketing strategies.
          </p>
        </div>
        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-gray-200 w-full">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className={`bg-[#F7F8FE] border-b border-gray-200 md:border-b-0 md:border-r last:border-r-0 py-8 sm:py-10 md:py-12 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 flex flex-col justify-between text-center md:text-left`}
            >
              {/* Stars */}
              <div className="mb-3 sm:mb-4 text-center md:text-left">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <span key={i} className="text-[#FFC107] text-lg sm:text-xl">&#9733;</span>
                ))}
              </div>
              {/* Title */}
              <div className="text-xl sm:text-2xl font-semibold text-[#151515] mb-6 sm:mb-8 text-center md:text-left">{t.title}</div>
              {/* Quote */}
              <div className="text-base sm:text-lg text-[#151515] font-light mb-6 sm:mb-8 w-full max-w-sm md:max-w-md mx-auto md:mx-0 text-center md:text-left">&quot;{t.quote}&quot;</div>
              {/* User Info */}
              <div className="flex items-center gap-3 mt-auto mx-auto md:mx-0 justify-center md:justify-start text-center md:text-left">
                <Image src={t.avatar} alt={t.name} width={50} height={50} className="rounded-full w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16" />
                <div>
                  <div className="font-semibold text-[#151515] text-sm sm:text-base">{t.name}</div>
                  <div className="text-xs sm:text-sm text-[#8A8A8A]">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 