import Image from "next/image";
import cases from "./casesData";    
import { notFound } from "next/navigation";

export default function ProjectChallenge({ slug }: { slug: any }) {
    const portfolioCase = cases.find((c) => c.slug === slug);
    if (!portfolioCase) return notFound();
    
  return (
    <div className="flex flex-col md:flex-row w-full bg-white min-h-[100vh] lg:px-18">
    {/* Sidebar */}
    <aside className="md:w-1/4 w-full border-r border-gray-200 py-6 md:sticky md:top-0 md:h-screen bg-white flex flex-col gap-6 text-left">
    <div className="mb-4 text-center md:text-left">
        <div className="text-lg font-light text-black mb-3">Client</div>
        <div className="flex items-center gap-2 font-semibold text-lg justify-center md:justify-start">
        <Image src={portfolioCase.logo} alt={portfolioCase.client} width={52} height={52} className="w-[100px]"/>
        </div>
    </div>
    <div className="mb-4 text-center md:text-left">
        <div className="text-lg font-light text-black mb-1">Industry</div>
        <div className="font-medium text-xl text-[#0E0E0E]">{portfolioCase.industry}</div>
    </div>
    <div className="mb-4 text-center md:text-left">
        <div className="text-lg font-light text-black mb-1">What we do</div>
        <div className="font-medium text-xl text-[#0E0E0E]">{portfolioCase.whatWeDo}</div>
    </div>
    <div className="mb-4 text-center md:text-left">
        <div className="text-lg font-light text-black mb-1">Year</div>
        <div className="font-medium text-xl text-[#0E0E0E]">{portfolioCase.year}</div>
    </div>
    </aside>
    {/* Main Content */}
    <main className="flex-1 px-4 sm:px-8 md:px-16 lg:px-24 py-2">
    {/* Project Challenge */}
    <section className="mt-2 mb-12 text-center md:text-left">
        <h2 className="text-4xl font-medium mb-5 text-black">Project Challenge</h2>
        <p className="text-[#505050] font-light max-w-4xl">The café, a small family-run business, faced tough competition in a saturated market, struggling to attract new customers and establish a consistent online presence. With limited resources and no dedicated marketing team, their digital channels were underutilized, leaving untapped potential to connect with a wider audience and boost foot traffic.</p>
    </section>
    {/* Our Impact */}
    <section className="mb-12 text-center md:text-left">
        <h2 className="text-4xl font-medium mb-5 text-black">Our Impact</h2>
        <p className="text-[#505050] font-light max-w-4xl">BuzzOne Media crafted a targeted content marketing strategy, starting with SEO-optimized blog posts highlighting their unique offerings and local charm. We developed an engaging social media calendar, showcasing daily specials and behind-the-scenes stories, while also launching a newsletter campaign to foster customer loyalty. These efforts provided a cohesive and impactful brand narrative, both online and offline.</p>
        {/* Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6 mt-12 text-center md:text-left">
        {portfolioCase.stats.map((stat) => (
            <div key={stat.label} className="bg-[#F1F3FF] rounded-xl p-4 text-center md:text-left">
            <div className="text-5xl font-normal text-[#031CA6]">{stat.value}</div>
            <div className="text-xs text-gray-600 mt-1">{stat.label.charAt(0).toUpperCase() + stat.label.slice(1)}</div>
            </div>
        ))}
        </div>
    </section>
    {/* What Made Stand Out */}
    <section className="mb-8 text-center md:text-left">
        <h2 className="text-4xl font-medium mb-5 text-black">What Made Stand Out</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <Image src="/images/standout1.png" alt="Standout 1" width={600} height={400} className="rounded-xl object-cover w-full " />
        <Image src="/images/standout2.png" alt="Standout 2" width={600} height={400} className="rounded-xl object-cover w-full" />
        </div>
        <p className="text-[#505050] font-light max-w-5xl">Our ability to understand the café's core values and community roots set us apart. By focusing on authenticity and creating relatable, visually appealing content, we connected the café with its local audience. Additionally, leveraging analytics and real-time feedback ensured that our strategy adapted to trends and customer preferences, maximizing results.</p>
    </section>
    {/* Result */}
    <section className="mb-10 text-center md:text-left">
        <h2 className="text-4xl font-medium mb-5 text-black">Result</h2>
        <Image src="/images/result.png" alt="Result" width={1200} height={500} className="rounded-xl object-cover w-full h-72 mb-4" />
        <p className="text-[#505050] font-light max-w-5xl">Within just six months, the café experienced a 250% increase in website traffic, gaining significant visibility. Their social media channel flourished with 1,500+ new followers, while newsletter subscribers grew by 300%, providing a reliable channel for ongoing communication. Most notably, monthly in-store sales rose by 35%, cementing the café as a beloved local hotspot.</p>
    </section>
    {/* Conclusion */}
    <section className="mb-8 text-center md:text-left">
        <h2 className="text-4xl font-medium mb-5 text-black">Conclusion</h2>
        <p className="text-[#505050] font-light max-w-5xl">This project demonstrated how tailored content marketing could transform a small business into a thriving local brand. By blending strategy, creativity, and consistent communication, BuzzOne Media helped the café not only achieve its goals but exceed expectations, creating a sustainable growth path for the future.</p>
    </section>
    {/* Testimonial */}
    <section className="mb-8 text-center md:text-left">
        <div className="relative bg-[#FEF5E6] border-l-4 border-[#F6D36D] p-6 rounded-xl max-w-4xl overflow-hidden">
            {/* Decorative Icon/Image */}
            <img
                src="/images/quote-icon.png"
                alt="Quote Icon"
                className="absolute top-0 right-0 w-40 h-30  pointer-events-none select-none"
                aria-hidden="true"
            />
            <div className="font-medium text-xl text-black mb-2">Breathing New Life into Layers Cafe</div>
            <div className="text-gray-800 mb-4">“BuzzOne Media completely transformed how we connect with our customers. Their authentic approach and creative content made us stand out in ways we never imagined. Our foot traffic and online presence have grown beyond our expectations. They didn't just market our café; they told our story. We couldn't be happier with the results!”</div>
            <div className="text-xs text-gray-600">– Sarah L., Owner of Layers Cafe</div>
        </div>
    </section>
    </main>
    </div>
  );
}