import React from 'react';
import HighlightedText from '../components/HighLight'
import Down from '../components/Down'
import Subscribe from '../components/Subscribe'
import { Helmet, HelmetProvider } from 'react-helmet-async';

import a from '../assets/videos/a.mp4';
import b from '../assets/videos/b.mp4';
import c from '../assets/videos/c.mp4';
import d from '../assets/videos/d.mp4';
import e from '../assets/videos/e.mp4';
import f from '../assets/videos/f.mp4';
import g from '../assets/videos/g.mp4';
import { Link } from 'react-router-dom';

import Logo from '../assets/BlogAssets/BluckalogoWhite.png'

const videos = [a, b, c, d, e, f, g];

const Home = () => {
  const clip = videos[Math.floor(Math.random() * videos.length)];

  return (
    <HelmetProvider>
    <React.Fragment>
    <Helmet>
        {/* Page Title */}
        <title>BLUCKA: Crypto Creative Agency</title>
        
        {/* Page Description */}
        <meta name="description" content="We are crypto creatives. Your comrades alongside. Our mission is clear. Supercharge your growth." />
        
        {/* Open Graph / Facebook Meta */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content="BLUCKA: Crypto Creative Agency" />
        <meta property="og:description" content="We are crypto creatives. Your comrades alongside. Our mission is clear. Supercharge your growth." />
        <meta property="og:image" content={Logo} />
        <meta property="og:url" content="https://www.blucka.com" />
        
        {/* Twitter Card Meta */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@BluckaAgency" />
        <meta name="twitter:title" content="BLUCKA: Crypto Creative Agency" />
        <meta name="twitter:description" content="We are crypto creatives. Your comrades alongside. Our mission is clear. Supercharge your growth." />
        <meta name="twitter:image" content={Logo} />
        
        {/* Extra Meta*/}
        <meta name="keywords" content="Web3 Gaming, Blockchain, Decentralized Games, Community Growth, BLUCKA" />
        <link rel="canonical" href="https://www.blucka.com/blog" />
    </Helmet>

      <div className='bg-black text-white'>
        <video autoPlay loop muted className='fixed w-full h-full object-cover z-0'>
            <source src={clip} type='video/mp4' />
            <source src={clip} type="video/ogg" />
        </video>

      <div className="font-mono cursor bg-cover text-black w-screen h-screen relative">
      <div className="h-full relative">

        <div className="max-w-8xl justify-between mx-auto px-16 sm:px-16 md:px-16 lg:px-32 flex flex-col">
          <Link to="/blog">
            <div className='flex lg:justify-end justify-center custom-shear mt-4'>
              <button className="animate-blink bg-black text-white font-bold py-2 px-8">BLOG</button>
            </div>
          </Link>
          <div className="pt-4 sm:pt-8 md:pt-12 lg:pt-16">
            <img
              src={Logo}
              alt="BLUCKA LOGO"
              className="w-[800px] sm:w-[900px] md:w-[350px] lg:w-[450px]"/>
            <div className="text-[18px] sm:text-xl md:text-xl lg:text-2xl mt-4 custom-shear">
              <HighlightedText text="We are crypto creatives." />
              <HighlightedText text='Your comrades alongside.'/>
              <HighlightedText text='Our mission is clear.'/>
              <HighlightedText text='Supercharge your growth.'/>
            </div>
          </div>
          <div className="flex text-left justify-start md:justify-end text-[12px] sm:text-[18px] md:text-[20px] lg:text-1xl custom-shear text-black pt-16 sm:pt-16 md:pt-16 lg:pt-12">
          <div className='flex items-end space-x-16 justify-center'>
                    <div className="flex flex-col items-start ">
                        <a href="https://grow.blucka.com/services/brand-building">
                            <HighlightedText text="Brand Building" />
                        </a>
                        <a href="https://grow.blucka.com/services/community-building">
                            <HighlightedText text="Community Building" />
                        </a>
                        <a href="https://grow.blucka.com/services/web3-growth">
                            <HighlightedText text="Web3 Growth" />
                        </a>
                        <a href="https://grow.blucka.com/services/technical-documentation">
                            <HighlightedText text="Technical Documentation" />
                        </a>
                        <a href="https://grow.blucka.com/">
                            <HighlightedText text="Click for More!" />
                        </a>
                    </div>
                </div>
          </div>
        </div>
      </div>
      <Down/>
      <Subscribe/>
      </div>
      </div>

    </React.Fragment>
    </HelmetProvider>
  );
};

export default Home
