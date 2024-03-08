import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Down from '../components/Down';
import { Link } from 'react-router-dom';
import Subscribe from '../components/BlogComponents/Subscribe'
import BlogFooter from '../components/BlogComponents/BlogFooter'

import blog1 from '../assets/BlogAssets/bull.jpg'
import blog2 from '../assets/BlogAssets/astronot.jpg'
import blog3 from '../assets/BlogAssets/robot.jpg'
import blog4 from '../assets/BlogAssets/B.jpg'
import blog5 from '../assets/BlogAssets/Larticle.jpg'
import blog6 from '../assets/BlogAssets/web3agency.jpg'
import blog7 from '../assets/BlogAssets/how.jpg'
import blog8 from '../assets/BlogAssets/web3ads.jpg'
import blog9 from '../assets/BlogAssets/web2.jpg'


const blogPosts = [
    {
        title: "Web2 Marketing vs Web3 Marketing",
        description: "Web3 marketing signifies a transformative departure from Web2 marketing",
        imgSrc: blog9,
        linkTo: "blog/what-is-the-difference-between-web2-marketing-and-web3-marketing"
    },
    {
        title: "What is Web3 advertising?",
        description: "Web3 advertising represents a revolutionary shift in the online landscape",
        imgSrc: blog8,
        linkTo: "/blog/what-is-web3-advertising"
    },
    {
        title: "How do I get into Web3 marketing?",
        description: "In the ever-changing realm of Web3, marketers must stay ahead to thrive.",
        imgSrc: blog7,
        linkTo: "/blog/how-do-i-get-web3-marketing"
    },
    {
        title: "What is a Web3 Marketing Agency?",
        description: "A Web3 marketing agency specializes in promoting blockchain-based companies",
        imgSrc: blog6,
        linkTo: "/blog/what-is-web3-marketing-agency"
    },
    {
        title: "Give Me Liquidity, or Give Me Death",
        description: "In a dystopian world, Bitcoin liquidity is now dictating every aspect of life.",
        imgSrc: blog5,
        linkTo: "/blog/give-me-liquidity-or-give-me-death"
    },
    {
        title: "Bears, Bulls, Bitcoins... Battlestar Galactica",
        description: "With the market cap of bitcoin (BTC) hard-shelved at",
        imgSrc: blog4,
        linkTo: "/blog/bears-bulls-bitcoins"
    },
    {
        title: "Unleash the Web3 Gaming",
        description: "Community-driven growth stands as the cornerstone of success in the Web3 gaming realm, and here’s why.",
        imgSrc: blog3,
        linkTo: "/blog/unleash-the-web3-gaming"
    },
    {
        title: "Elevating Presence in Bull Market",
        description: "In the exhilarating surge of the bull market, where opportunities abound and competition will reach new",
        imgSrc: blog2,
        linkTo: "/blog/elevating-presence-in-bull-market"
    },
    {
        title: "Merging Genius for Web3 Marketing",
        description: "Introducing BLUCKA: The Crypto Creative Agency, a trailblazing entity at the forefront of Web3 marketing.",
        imgSrc: blog1,
        linkTo: "/blog/merging-genius-for-web3-marketing"
    }
];

const Blog = () => {
    return (
        <HelmetProvider>
            <Helmet>
                <title>BLOG | BLUCKA</title>
                <meta name="description" content="Our mission is clear: Supercharge your growth." />

                <meta property="og:type" content="article" />
                <meta property="og:title" content="BLOG | BLUCKA" />
                <meta property="og:description" content="Our mission is clear: Supercharge your growth." />
                <meta property="og:image" content="https://media.discordapp.net/attachments/1197467042886996018/1208705467488927774/BLUCKA_LOGO.png?ex=65e441b0&is=65d1ccb0&hm=d25b36ab6ab7c4454c7aa4c5adfd4476680f73a5180e1309e738810cdf23a061&=&format=webp&quality=lossless&width=2268&height=1186" />
                <meta property="og:url" content="https://www.blucka.com/blog/" />
                
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:creator" content="@BluckaAgency" />
                <meta name="twitter:title" content="BLOG | BLUCKA" />
                <meta name="twitter:description" content="Our mission is clear: Supercharge your growth." />
                <meta name="twitter:image" content="https://media.discordapp.net/attachments/1197467042886996018/1208705467488927774/BLUCKA_LOGO.png?ex=65e441b0&is=65d1ccb0&hm=d25b36ab6ab7c4454c7aa4c5adfd4476680f73a5180e1309e738810cdf23a061&=&format=webp&quality=lossless&width=2268&height=1186" />
                <meta name="keywords" content="Web3 Marketing, Blockchain, Creative Agency, Web3 Growth Hacking, Crypto Knowledge, BLUCKA, BLUCKA BLOG" />
                <link rel="canonical" href="https://www.blucka.com/blog/" />
            </Helmet>
            <section className="justify-center bg-black mx-auto w-full mt-12">
                <main className="flex flex-col items-center first-letter:bg-black text-white font-mono">
                    <Link to="/">
                        <img src="https://media.discordapp.net/attachments/1197467042886996018/1211591447527297044/Bluckalogo.png?ex=65eec177&is=65dc4c77&hm=651a142d71078501964f4f82c531d3ac40561f42663b8b1c4f1710a482c03b5a&=&format=webp&quality=lossless&width=2268&height=608" alt="BLUCKA LOGO" className="w-[200px] items-center justify-center" />
                    </Link>
                    <div className="py-8 px-4 mx-auto max-w-screen-xl pb-20 lg:px-32">
                        <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
                            <h2 className="mb-4 text-2xl lg:text-3xl tracking-tight text-white">The Blog</h2>
                            <p className="font-light text-gray-300 sm:text-xl">Our mission is clear: Supercharge your growth.</p>
                        </div>
                        <div className="grid gap-8 lg:grid-cols-3 item-center justify-center">
                            {blogPosts.map((post, index) => (
                                <Link key={index} to={post.linkTo}>
                                    <div className="max-w-sm bg-white border-0.5 border-gray-200 rounded-lg shadow">
                                        <img className="rounded-t-lg" src={post.imgSrc} alt="Thumbnail" />
                                        <div className="p-5">
                                            <h5 className="mb-[16px] text-2xl font-bold tracking-tight text-gray-900">{post.title}</h5>
                                            <p className="mb-[28px] font-normal text-gray-700">{post.description}</p>
                                            <div className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-black rounded-lg hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-blue-300">
                                                Read more
                                                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/></svg>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className='pb-20'>
                    <Subscribe/>
                    
                    </div>
                    <Down />

                </main>
                
            </section>
            <BlogFooter/>
        </HelmetProvider>
        
    );
};

export default Blog;
