"use client";

import { useState } from "react";
import Image from "next/image";
// import blogPosts from "./blogPosts";
// import { sanity } from '../../lib/sanity';

const POSTS_PER_PAGE = 9;

interface BlogPost {
  _id: string;
  title: string;
  slug: string;
  image: string;
  date: string;
  category: string;
  link: string;
}


export default function BlogGrid({ blogPosts }: { blogPosts: BlogPost[] }){
  const [page, setPage] = useState(1);

  console.log('blogPosts', blogPosts);
  
  const totalPages = Math.ceil(blogPosts.length / POSTS_PER_PAGE);

  const paginatedPosts = blogPosts.slice(
    (page - 1) * POSTS_PER_PAGE,
    page * POSTS_PER_PAGE
  );
  // console.log('paginatedPosts', paginatedPosts);

  // Helper for rendering page numbers with ellipsis
  const renderPageNumbers = () => {
    const pages = [];
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1);
      if (page > 3) pages.push("...");
      for (
        let i = Math.max(2, page - 1);
        i <= Math.min(totalPages - 1, page + 1);
        i++
      ) {
        pages.push(i);
      }
      if (page < totalPages - 2) pages.push("...");
      pages.push(totalPages);
    }
    return pages;
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-12 md:px-18 px-4 text-center md:text-left">
        {paginatedPosts.map((post: BlogPost, idx: number) => (
          <a href={post.link} key={idx} className="block group">
            <div className="overflow-hidden rounded-xl mb-4">
              <Image
                src={post.image}
                alt={post.title}
                width={400}
                height={250}
                className="object-cover w-full group-hover:scale-105 transition h-[320px]"
              />
            </div>
            <div className="text-sm text-gray-500 mb-1">{post.date}</div>
            <div className="font-semibold text-2xl text-black mb-2">{post.title}</div>
            <span className="inline-block bg-[#F1F3FF] text-[#031CA6] text-md px-4 py-1 rounded-md">{post.category}</span>
          </a>
        ))}
      </div>
      {/* Pagination */}
      <div className="flex items-center justify-center gap-2 my-8">
        <button
          onClick={() => setPage((p) => Math.max(1, p - 1))}
          disabled={page === 1}
          className="w-10 h-10 flex items-center justify-center rounded transition text-2xl text-gray-500 hover:text-black disabled:opacity-30"
        >
          &lt;
        </button>
        {renderPageNumbers().map((p, idx) =>
          p === "..." ? (
            <span
              key={idx}
              className="w-10 h-10 flex items-center justify-center rounded text-gray-400"
            >
              ...
            </span>
          ) : (
            <button
              key={idx}
              onClick={() => setPage(Number(p))}
              className={`w-10 h-10 flex items-center justify-center rounded transition ${
                page === p
                  ? "bg-[#F29F05] text-black font-bold"
                  : "bg-white text-gray-500 hover:bg-gray-100"
              }`}
            >
              {p}
            </button>
          )
        )}
        <button
          onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
          disabled={page === totalPages}
          className="w-10 h-10 flex items-center justify-center rounded transition text-2xl text-gray-500 hover:text-black disabled:opacity-30"
        >
          &gt;
        </button>
      </div>
    </>
  );
} 