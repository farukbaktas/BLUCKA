import Link from 'next/link';
import React from 'react';

import blog1 from '../../assets/BlogAssets/biggest.jpg'
import blog2 from '../../assets/BlogAssets/KOL.jpg'
import blog3 from '../../assets/BlogAssets/meme.jpg'

import Image from "next/image";

const blogs = [
  {
    to: "/blog/what-is-the-biggest-web3-company",
    imgSrc: blog1,
    title: "What is the biggest Web3 company?",
    description: "The Web3 landscape is a dynamic ecosystem, constantly evolving with..."
  },
  {
    to: "/blog/who-are-crypto-kols",
    imgSrc: blog2,
    title: "Who are the Crypto KOLs?",
    description: "The cryptocurrency space is a dynamic and ever-evolving landscape."
  },
  {
    to: "/blog/what-is-a-meme-coin",
    imgSrc: blog3,
    title: "What is a meme coin in WEB3?",
    description: "The world of cryptocurrency throws exciting concepts and complex ideas at you..."
  }
];

const Blog = () => {
  return (
    <section className="justify-center bg-black mx-auto w-full mt-12">
      <main className="flex flex-col items-center first-letter:bg-black text-white font-mono">
        <div className="py-8 px-4 mx-auto max-w-screen-xl pb-20 lg:px-32">
          <div className="grid gap-8 lg:grid-cols-3 item-center justify-center">
            {blogs.map((blog, index) => (
              <Link key={index} href={blog.to}>
                <div className="max-w-sm bg-white border-0.5 border-gray-200 rounded-lg shadow">
                  <Image className="rounded-t-lg" src={blog.imgSrc} alt={blog.title} />
                  <div className="p-5">
                    <h5 className="mb-[16px] text-2xl font-bold tracking-tight text-gray-900">{blog.title}</h5>
                    <p className="mb-[28px] font-normal text-gray-700">{blog.description}</p>
                    <div className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-black rounded-lg hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-blue-300">
                      Read more
                      <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </section>
  );
}

export default Blog;
