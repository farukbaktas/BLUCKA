import React from 'react';

import Down from '../../components/Down';
import BlogsList from '../../components/BlogComponents/BlogsList'
import Subscribe from '../../components/BlogComponents/Subscribe'
import BlogFooter from '../../components/BlogComponents/BlogFooter'

import Logo from '../../assets/BlogAssets/bluckalogo.jpg'
import PP from '../../assets/BlogAssets/Blogger/faruk.jpg'
import Banner from '../../assets/BlogAssets/web3crypto.jpg'

import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import "../globals.css";

const Blog = () => {
  return (
    <>
    <React.Fragment>
    <Head>
        {/* Page Title */}
        <title>What is Web3 in Crypto? | BLUCKA</title>
        
        {/* Page Description */}
        <meta name="description" content="The world of crypto is brimming with innovation, and Web3 is one of the hottest topics. But what exactly is it? In essence, Web3 is a proposed future version of the internet built on the power of blockchain technology." />
        
        {/* Open Graph / Facebook Meta */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content="What is Web3 in Crypto? | BLUCKA" />
        <meta property="og:description" content="The world of crypto is brimming with innovation, and Web3 is one of the hottest topics. But what exactly is it? In essence, Web3 is a proposed future version of the internet built on the power of blockchain technology." />
        <meta property="og:image" content={`https://www.blucka.com${Banner.src}`} />
        <meta property="og:url" content="https://www.blucka.com/blog/what-is-web3-company" />
        
        {/* Twitter Card Meta */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@BluckaAgency" />
        <meta name="twitter:title" content="What is Web3 in Crypto? | BLUCKA" />
        <meta name="twitter:description" content="The world of crypto is brimming with innovation, and Web3 is one of the hottest topics. But what exactly is it? In essence, Web3 is a proposed future version of the internet built on the power of blockchain technology." />
        <meta name="twitter:image" content={`https://www.blucka.com${Banner.src}`} />
        
        {/* Extra Meta*/}
        <meta name="keywords" content="Web3, decentralization, blockchain, decentralized finance, DeFi, NFT marketplaces, user empowerment, innovation, digital assets, Web3 companies, future of internet, secure transactions, blockchain infrastructure" />
        <link rel="canonical" href="https://www.blucka.com/blog/what-is-web3-company" />
    </Head>

    <div className='bg-black text-white'>
    <div className="font-mono cursor bg-cover text-black w-screen relative">
        <div className="relative">
            
            <div className="max-w-8xl justify-center items-center mx-auto px-4 sm:px-12 md:px-16 lg:px-[300px] flex flex-col">
                <Link href="/">
                    <div className="py-4 sm:py-8 md:py-12 lg:py-8">
                        <Image
                        src={Logo}
                        alt="BLUCKA LOGO"
                        className="w-[200px] sm:w-[200px] md:w-[200px] lg:w-[200px]"/>
                    </div>
                </Link>



                <section className=" justify-center mx-auto w-full mt-4 mb-16">
                <main className=" bg-black text-white ">
                <div className="flex justify-between px-4 mx-auto max-w-screen-xl ">
                    <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue ">
                        <figure id="blog-thumbnail" className="mb-4 item-center"><Image src={Banner} alt="Thumbnail"/>
                            <figcaption className="text-xs"></figcaption>
                        </figure>
                        <header className="mb-4 lg:mb-6 not-format">
                            <address className="flex items-center mb-6 not-italic">
                                <div className="inline-flex items-center mr-3 text-sm text-gray-200 ">
                                    <Image className="mr-4 w-16 h-16 rounded-full" src={PP} alt="BLUCA PP"/>
                                    <div>
                                        <a rel="author" className="text-xl font-bold text-gray-100 ">Faruk Baktas</a>
                                        <p className="text-base font-light text-gray-100 ">Crypto Creative | Research and Development</p>
                                        <p className="text-base font-light text-gray-100 "><time title="February 8th, 2022">Apr. 05, 2024</time></p>
                                    </div>
                                </div>
                            </address>

                            <h1 id="blog-title" className="mb-4 text-3xl font-extrabold leading-tight text-gray-100 lg:mb-6 lg:text-4xl ">What is Web3 in Crypto?</h1>
                        </header>
                        <div className="space-y-4">
                            <p id="blog-description" className="font-semi text-xl">The world of crypto is brimming with innovation, and Web3 is one of the hottest topics. But what exactly is it? In essence, Web3 is a proposed future version of the internet built on the power of blockchain technology.</p>


                            <p className='text-center text-3xl py-4'>...</p>
                            <p className='font-extrabold text-2xl'>Web3: A Shift Towards User Empowerment</p>
                            <p>Currently, big tech companies hold immense control over our online experiences. Web3 aims to disrupt this by creating a decentralized web. Imagine a web where users own their data, participate in platform governance, and interact directly with each other – that's the core vision of Web3.</p>

                            <p className='text-center text-3xl py-4'>...</p>
                            <p className='font-extrabold text-2xl'>Crypto: The Building Blocks of Web3</p>
                            <p>This decentralized future hinges on cryptocurrencies and blockchain technology. Blockchains offer a secure and transparent way to store and share data, making them ideal for the decentralized applications (dApps) that power Web3.</p>

                            <p className='text-center text-3xl py-4'>...</p>
                            <p className='text-xl font-bold'>Hallmarks of a Decentralized Web3</p>
                            <p>- <span className='font-extrabold'>Decentralization:</span> No single entity controls the network, fostering a more democratic online space.</p>
                            <p>- <span className='font-extrabold'>User Ownership:</span> Users have greater control over their data and online experiences.</p>
                            <p>- <span className='font-extrabold'>Transparency on the Blockchain: </span> Transactions and data are publicly verifiable, building trust.</p>
                            <p>- <span className='font-extrabold'>Trustless Interactions: </span> Users connect directly, eliminating the need for intermediaries.</p>
    
                            <p className='font-extrabold text-2xl pt-12'>Web3: A Glimpse into the Future</p>
                            <p>While Web3 is still in its early stages, it has the potential to revolutionize various aspects of the online world. From finance and social media to gaming and identity management, Web3 promises a more user-centric internet.</p>

                            <p className='font-extrabold text-2xl pt-12'>Is Web3 the inevitable future?</p>
                            <p>Only time will tell. But one thing's for sure – Web3 is a fascinating concept that's redefining how we think about the internet.</p>

                            <p className='text-center text-3xl py-4'>...</p>
                            <p className='font-bold italic'>Contact Us for Crypto Marketing Excellence</p>
                            <p>Ready to elevate your brand in the digital currency space? Just drop us an email <a className='hover:text-gray-700' href='mailto:grow@blucka.com'>(grow@blucka.com) </a>. Our Crypto Creatives are eager to discuss how we can amplify your presence in the exciting world of cryptocurrencies, especially during the unique opportunities presented by the current bull market.</p>

                            <p className='text-center text-3xl py-4'>...</p>
                            <p className='font-semibold'>Or mission is clear: Supercharge your growth. BLUCKA! BLUCKA! </p>
                        </div>
                    </article>
                </div>
                </main>
            </section>
            </div>
            
            </div>
            <Subscribe/>
            <BlogsList/>
            <BlogFooter/>

            <Down/>
        </div>
    </div>

    </React.Fragment>
    </>
  );
};

export default Blog
