import Header from "../components/Header";
import Footer from "../components/Footer";
import FaqSection from "../components/FaqSection";
import CtaBanner from "../components/CtaBanner";
import BlogGrid from "./BlogGrid";
import { sanity } from '../../lib/sanity';

export default async function Blog() {
  const blogPosts = await sanity.fetch(`*[_type == "blogPost"] | order(date desc){
    title,
    "date": date,
    "image": image.asset->url,
    category,
    "link": slug.current
  }`);

  return (
    <main>
      <Header showClientLogos={false}>
        <div className="w-full md:max-w-4xl text-white text-center md:text-left lg:ml-54 ml-1 md:mt-10 mt-1 md:mb-20 mb-10">
            <div className="flex items-center gap-2 mb-4 md:mb-0 md:col-span-1 justify-center md:justify-start">
                <span className="w-2 h-2 bg-[#89BCE8] inline-block" />
                <span className="text-[#fff] text-base font-normal">Insight</span>
            </div>
            <h1
            className="relative font-semibold text-5xl sm:text-6xl md:text-7xl md:leading-[100px] leading-[60px] lg:w-[760px] text-center md:text-left lg:mb-12 mb-12"
            >
                Explore Our Insight for You
            </h1>
            <p
            className="mb-8 text-base sm:text-xl font-normal leading-[1.5] tracking-[0.5px] text-center md:text-left"
            >
                Dive into our latest blog posts to discover how BackOffice can transform your business operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-12 w-fit items-center md:items-start justify-center md:justify-start mx-auto md:mx-0">
            <a
                href="#blog-posts"
                className="bg-[#FFA800] text-black px-8 py-4 hover:bg-[#ffb733] transition cursor-pointer text-base sm:text-lg font-normal leading-[24px] tracking-[0.5px] w-full sm:w-auto text-center"
            >
                Explore Insight
            </a> 
            </div>
        </div>
      </Header>
      <div id="blog-posts">
        <BlogGrid blogPosts={blogPosts} />
      </div>
      <CtaBanner />
      <FaqSection />
      <Footer />
    </main>
  );
} 