import { notFound } from "next/navigation";
import Image from "next/image";
import Navbar from "../../components/Navbar";
import CtaBanner from "@/app/components/CtaBanner";
import FaqSection from "@/app/components/FaqSection";
import Footer from "@/app/components/Footer";
import blogPosts from "../blogPosts";
import Link from "next/link";

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  console.log(slug);

  const post = blogPosts.find((post) => post.link === `/blog/${slug}`);
  if (!post) return notFound();

  const randomPosts = blogPosts.sort(() => Math.random() - 0.5).slice(0, 3);


  const relatedArticles = [
    {
      title: "Crypto Mining and Taxes: What You Need to Know",
      date: "November 21, 2024",
      category: "Insights",
      excerpt: "Explore the tax implications of mining cryptocurrencies, from deductions to declaring ..."
    },
    {
      title: "International Crypto Trading and Tax Implications",
      date: "November 21, 2024",
      category: "Basics",
      excerpt: "Understand the tax obligations when trading cryptocurrencies across different countries ..."
    },
    {
      title: "Top Tools for Tracking Your Crypto Taxes",
      date: "November 21, 2024",
      category: "Tools",
      excerpt: "Discover reliable tools and software to simplify the tracking and reporting of your crypto transactio ..."
    },
    {
      title: "Crypto Gains or Gifts? How to Handle Unusual Transactions",
      date: "November 21, 2024",
      category: "Basics",
      excerpt: "Learn how to correctly report unusual crypto transactions, including airdrops, staking rewards ..."
    },
    {
      title: "Navigating Tax Season: Key Deadlines for Crypto Investors",
      date: "November 21, 2024",
      category: "Insights",
      excerpt: "Mark your calendar with essential tax deadlines for cryptocurrency filings and avoid costly ..."
    }
  ];

  const services = [
    {
      title: "Virtual Assistant",
      description: "From administrative tasks to managing schedules and emails, our skilled assistants streamline ..."
    },
    {
      title: "Social Media",
      description: "Grow your brand's presence on social platforms with strategic content, consistent engagement, ..."
    },
    {
      title: "Automations",
      description: "From email marketing to task automation, we integrate smart tools that save you time, reduce ..."
    }
  ];

  return (
    <>
      <Navbar bgClass="bg-white" textClass="text-black" />
      <main className="max-w-full mx-auto flex flex-col md:flex-row gap-16 px-4 md:px-30 md:py-18 py-4">
        {/* Main Article */}
        <article className="flex-1 max-w-5xl mx-auto md:mx-0">
          <div className="rounded-2xl overflow-hidden mb-8">
            <Image
              src={post.image}
              alt={post.category}
              width={900}
              height={400}
              className="object-cover w-full h-[340px] md:h-[600px]"
              priority
            />
          </div>
          <div className="flex flex-col md:flex-row items-center gap-0 text-sm text-gray-500 mb-2">
            <div className="flex items-center">
                <Image src="/images/layout-list.svg" alt="calendar" width={20} height={20} />
                <span className="px-3 text-lg font-light">{post.category}</span>
            </div>
            <span className="text-lg font-light mx-5">•</span>
            <div className="flex items-center">
                <Image src="/images/calendar_blog.svg" alt="calendar" width={20} height={20} />
                <span className="px-3 text-lg font-light">{post.date}</span>
            </div>
            <span className="text-lg font-light mx-5">•</span>
            <div className="flex items-center">
                <Image src="/images/user.svg" alt="calendar" width={20} height={20} />
                <span className="px-3 text-lg font-light">Ryan Torff</span>
            </div>
          </div>
          <h1 className="text-3xl md:text-6xl font-bold text-black mb-6 leading-tight md:pr-55 pr-0 mt-10 text-center md:text-left">{post.title}</h1>
          <hr className="my-6 border-gray-200" />
          <div className="text-center md:text-left">
            <p className="text-[#373737] text-lg mb-6 font-normal leading-relaxed">In today&apos;s digital age, social media has become
                an indispensable tool for brands looking to build their presence, connect with their audience, and drive business
                growth. With billions of users worldwide actively engaging on platforms like Instagram, Facebook, LinkedIn, and
                TikTok, businesses now have unparalleled opportunities to showcase their products and services. Social media enables
                brands to break geographical barriers, reaching potential customers from every corner of the world with just a few 
                clicks
            </p>
            <p className="text-[#373737] text-lg mb-6 font-normal leading-relaxed">A strong social media strategy not only increases
                 brand visibility but also creates meaningful interactions between businesses and their target audience. Companies that
                  consistently engage their followers, respond to queries, and provide value-driven content foster trust and loyalty. 
                  This two-way communication allows brands to better understand customer needs and preferences, making it easier to tailor
                products, services, and marketing campaigns.
            </p>
            <p className="text-[#373737] text-lg mb-6 font-normal leading-relaxed">Moreover, social media serves as an invaluable platform
                for storytelling. It provides brands with a space to share their mission, vision, and values, helping them build an emotional
                connection with their audience. Whether through compelling visuals, engaging videos, or heartfelt stories, social media
                allows businesses to create a personality that resonates with their customers, turning casual followers into devoted advocates.
            </p>
            <Image src="/images/blog_detail.png" alt="Blog visual" width={900} height={500} className="object-cover w-full h-[300px] rounded-2xl mb-10" />

            <p className="text-[#373737] text-lg mb-6 font-normal leading-relaxed">Data analytics also play a significant role in leveraging
                social media for growth. Platforms like Instagram Insights, Facebook Analytics, and LinkedIn metrics provide valuable insights
                into user behavior, engagement, and campaign performance. This data enables brands to refine their strategies and maximize
                the return on their investment, ensuring that every post, story, or ad aligns with the brand&apos;s objectives and delivers 
                measurable results.
            </p>
            <p className="text-[#373737] text-lg mb-6 font-normal leading-relaxed">In conclusion, social media has revolutionized the way 
                brands grow and thrive in the modern marketplace. By prioritizing engagement, leveraging storytelling, and analyzing user data,
                businesses can harness the power of social media to achieve significant growth and build long-lasting relationships with their 
                audience. For businesses that embrace these opportunities, social media is no longer an option—it&apos;s a necessity for survival and
                success.
            </p>

          </div>
          {/* Testimonial */}
          <div className="flex flex-col md:flex-row items-start gap-6 rounded-xl my-10 text-center md:text-left justify-center md:justify-start">
            <Image
              src="/images/blogs/rhiel_madsen.png"
              alt="Rhiel Madsen"
              width={90}
              height={90}
              className="rounded-xl object-cover w-64 h-64 mx-auto md:mx-0"
            />
            <div>
              <div className="text-lg md:text-2xl text-black font-medium mb-10 mt-4">&quot;The team at BuzzOne Media transformed our brand&apos;s 
                social media presence. Their expertise in creating authentic connections with our audience has set our business apart in a
                competitive market.&quot;</div>
              <div className="text-[#1A56DB] font-semibold text-base mt-2">- Chance Rhiel Madsen</div>
              <div className="text-xs text-gray-500">CO-Founder at Luxe Haven Essentials</div>
            </div>
          </div>
        </article>
        {/* Sidebar */}
        <aside className="w-full md:w-[340px] flex-shrink-0 md:mt-12 mt-0">
          <div className="mb-14 text-center md:text-left">
            <h2 className="text-4xl font-medium text-[#031CA6] mb-6 mt-2">Related Article</h2>
            <div className="flex flex-col gap-6">
              {relatedArticles.map((art, idx) => (
                <div key={idx} className="border-b pb-4">
                  <div className="text-md font-light text-[#031CA6] mb-1">{art.category} <span className="ml-2 text-[#0E0E0E]">{art.date}</span></div>
                  <div className="font-medium text-lg text-black mb-1">{art.title}</div>
                  <div className="text-md text-[#505050] font-light">{art.excerpt}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="mb-10 text-center md:text-left">
            <h2 className="text-4xl font-medium text-[#031CA6] mb-6 mt-2">Our Services</h2>
            <div className="flex flex-col gap-6">
              {services.map((srv, idx) => (
                <div key={idx} className="mb-2 border-b pb-4">
                  <div className="font-medium text-lg text-black mb-1">{srv.title}</div>
                  <div className="text-md text-[#505050] font-light mb-2">{srv.description}</div>
                  <a href="#" className="text-[#F29F05] text-lg font-medium hover:underline">Learn More &rarr;</a>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </main>

      <div className="max-w-full mx-auto w-full px-4 md:px-30 mb-16">
        <div className="flex flex-col md:flex-row items-center justify-between mb-12 text-center md:text-left">
          <h2 className="md:text-6xl text-4xl font-normal text-[#181818] ">You may also like</h2>
            <div className="flex justify-center md:justify-start">
                <Link href="/blog" className="inline-flex items-center text-[#031CA6] text-base font-normal group pb-0.5 hover:border-blue-700 transition-all w-max border-b border-[#031CA6]">
                    Explore More
                <Image src="/images/arrow-right-colored.svg" alt="Right Arrow" width={18} height={18} className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform inline" />
                </Link>
            </div>
          {/* <a href="/blog" className="text-[#031CA6] text-xl underline font-light">Explore More &rarr;</a> */}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {randomPosts.map((post, key) => (
            <a href={post.link} key={key} className="block group">
              <div className="overflow-hidden rounded-xl mb-4 text-center md:text-left">
                <Image
                    src={post.image}
                    alt={post.title}
                    width={400}
                    height={250}
                    className="object-cover w-full h-[320px] group-hover:scale-105 transition"
                />
                </div>
                <div className="text-sm text-gray-500 mb-1">{post.date}</div>
                <div className="font-semibold text-2xl text-black mb-2">{post.title}</div>
                <span className="inline-block bg-[#F1F3FF] text-[#031CA6] text-md px-4 py-1 rounded-md">{post.category}</span>
          </a>
          ))}
        </div>
      </div>
      <CtaBanner />
      <FaqSection />
      <Footer />
    </>
  );
} 