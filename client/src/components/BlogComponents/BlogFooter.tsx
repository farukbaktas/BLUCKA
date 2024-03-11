import React from 'react';
import Logo from '../../assets/BlogAssets/BluckalogoWhite.png'

const Blog = () => {
  return (


<footer className="text-white md:py-4 py-20">
    <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
              <a href="https://blucka.com/" className="flex items-center">
                  <img src={Logo} className="h-16 me-3" alt="Blucka Logo" />
              </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                  <h2 className="mb-6 text-lg font-semibold text-white uppercase">Resources</h2>
                  <ul className="text-gray-400  font-medium">
                      <li className="mb-4">
                          <a href="https://grow.blucka.com/" className="hover:underline">Docs</a>
                      </li>
                      <li>
                          <a href="https://grow.blucka.com/overview/about" className="hover:underline">About Us</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 className="mb-6 text-lg font-semibold text-white uppercase">Follow us</h2>
                  <ul className="text-gray-400  font-medium">
                      <li className="mb-4">
                          <a href="https://twitter.com/BluckaAgency" className="hover:underline ">Twitter</a>
                      </li>
                      <li>
                          <a href="https://discord.gg/pBVWcEp6qg" className="hover:underline">Discord</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 className="mb-6 text-lg font-semibold text-white uppercase">BLUCKA</h2>
                  <ul className="text-gray-400 font-medium">
                      <li className="mb-4">
                          <a href="https://www.blucka.com/blog/" className="hover:underline">Blog</a>
                      </li>
                      <li>
                          <a href="#https://www.blucka.com/contact" className="hover:underline">Contact Us</a>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
      <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-400 sm:text-center ">© 2024 <a href="https://blucka.com/" className="hover:underline">BLUCKA™</a>. All Rights Reserved.
          </span>
          
      </div>
    </div>
</footer>

);
}

export default Blog;
