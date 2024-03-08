import { Link } from 'react-router-dom';
import React from 'react';

import blog1 from '../../assets/BlogAssets/How.jpg'
import blog2 from '../../assets/BlogAssets/web3agency.jpg'
import blog3 from '../../assets/BlogAssets/Larticle.jpg'

const blogs = [
  {
    to: "/blog/how-do-i-get-web3-marketing",
    imgSrc: blog1,
    title: "How do I get into Web3 marketing?",
    description: "In the ever-changing realm of Web3, marketers must stay ahead to thrive."
  },
  {
    to: "/blog/what-is-web3-marketing-agency",
    imgSrc: blog2,
    title: "What is a Web3 Marketing Agency?",
    description: "A Web3 marketing agency specializes in promoting blockchain-based companies."
  },
  {
    to: "/blog/give-me-liquidity-or-give-me-death",
    imgSrc: blog3,
    title: "Give Me Liquidity, or Give Me Death",
    description: "In a dystopian world, Bitcoin liquidity is now dictating every aspect of life."
  }
];

const Blog = () => {
  return (
    <section className="justify-center bg-black mx-auto w-full mt-12">
      <main className="flex flex-col items-center first-letter:bg-black text-white font-mono">
        <div className="py-8 px-4 mx-auto max-w-screen-xl pb-20 lg:px-32">
          <div className="grid gap-8 lg:grid-cols-3 item-center justify-center">
            {blogs.map((blog, index) => (
              <Link key={index} to={blog.to}>
                <div className="max-w-sm bg-white border-0.5 border-gray-200 rounded-lg shadow">
                  <img className="rounded-t-lg" src={blog.imgSrc} />
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
