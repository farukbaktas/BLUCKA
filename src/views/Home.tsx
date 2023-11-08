import React, { useEffect, useState } from 'react';
import HighlightedText from '../components/HighLight'
import Down from '../components/Down'
import clip from '../assets/b.mp4'; 


const Home = () => {
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);

  useEffect(() => {
    if (isAudioPlaying) {
      const audioElement = document.getElementById('myAudio') as HTMLAudioElement | null;
      if (audioElement) {
        audioElement.play();
      }
    }
  }, [isAudioPlaying]);

  const playAudio = () => {
    setIsAudioPlaying(true);
  };

  return (
    <React.Fragment>

      <div className='bg-black text-white'>
        <video autoPlay loop muted className='fixed w-full h-full'>
            <source src={clip} type='video/mp4' />
            <source src={clip} type="video/ogg" /> 
        </video>
        <audio id="myAudio">
          <source src='../src/assets/Blucka.wav' type="audio/wav" />
        </audio>
      <button onClick={playAudio} className="font-mono cursor bg-cover text-white w-screen h-screen relative">
      <div className="h-full relative">

        <div className="max-w-8xl justify-between mx-auto px-32 flex flex-col">
          <div className="pt-20">
            <img
              src="https://cdn.discordapp.com/attachments/1171396831989739570/1171828588908118047/Blucka_logo.png?ex=655e196b&is=654ba46b&hm=e9411488c7dccd8df285497705f66f3f2ecd932596ae849d3d10bf6ef75d9e94&  "
              alt="BLUCKA LOGO"
              className="w-[600px]"
            />
          </div>
          <div className="flex text-left justify-end text-4xl custom-shear text-black">
            <div className="text-2xl">
              <HighlightedText text="We are crypto creatives." />
              <HighlightedText text='Your comrades alongside.'/>
              <HighlightedText text='Our mission is clear.'/>
              <HighlightedText text='Supersharge your growth.'/>
            </div>
          </div>
        </div>
      </div>
      <Down/>
</button>
</div>

    </React.Fragment>
  );
};

export default Home
