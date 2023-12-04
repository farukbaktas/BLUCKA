import React from 'react';
import HighlightedText from '../components/HighLight'
import Down from '../components/Down'
import a from '../assets/videos/a.mp4';
import b from '../assets/videos/b.mp4';
import c from '../assets/videos/c.mp4';
import d from '../assets/videos/d.mp4';
import e from '../assets/videos/e.mp4';
import f from '../assets/videos/f.mp4';
import g from '../assets/videos/g.mp4';


const videos = [a, b, c, d, e, f, g];

const Home = () => {
  const clip = videos[Math.floor(Math.random() * videos.length)];

  return (
    
    <React.Fragment>

      <div className='bg-black text-white'>
        <video autoPlay loop muted className='fixed w-full h-full object-cover z-0'>
            <source src={clip} type='video/mp4' />
            <source src={clip} type="video/ogg" />
        </video>
     
      <div className="font-mono cursor bg-cover text-black w-screen h-screen relative">
      <div className="h-full relative">
        
        <div className="max-w-8xl justify-between mx-auto px-16 sm:px-16 md:px-16 lg:px-32 flex flex-col">
          <div className="pt-4 sm:pt-8 md:pt-12 lg:pt-20">
            <img
              src="https://cdn.discordapp.com/attachments/1171396831989739570/1171828588908118047/Blucka_logo.png?ex=655e196b&is=654ba46b&hm=e9411488c7dccd8df285497705f66f3f2ecd932596ae849d3d10bf6ef75d9e94&  "
              alt="BLUCKA LOGO"
              className="w-[800px] sm:w-[900px] md:w-[350px] lg:w-[450px]"
            />
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
                    </div>
                </div>
          </div>
        </div>
      </div>
      <Down/>
</div>
</div>

    </React.Fragment>
  );
};

export default Home
