import React from 'react'
import { useState, useRef } from 'react';
import Header from './components/Header'
import Hero from './components/Hero'
import RollPart from './components/RollPart'
import About from './components/About'
import Tokenomics from './components/Tokenomics'
import RollPart2 from './components/RollPart2'
import ComingSoon from './components/ComingSoon'
import HowToBuy from './components/HowToBuy'
import Video from './assets/video.MP4'
import Enter from './assets/enter.png'
import bgmusic from './assets/musicc.mp3';

  

function App() {

  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const handlePlayMusic = () => {
    if (audioRef.current) {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleToggleMute = () => {
    if (audioRef.current) {
      if (isMuted) {
        audioRef.current.muted = false;
      } else {
        audioRef.current.muted = true;
      }
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className='relative flex flex-col items-center w-full overflow-clip'>

      {!isPlaying && (
      <div className='bg-black/60 backdrop-blur-xl fixed flex flex-col items-center justify-center z-[60] w-full h-screen'>
        <h2 className='text-[#FFFCD3] lg:text-7xl text-4xl'>XRP MATT</h2>
        <video src={Video} autoPlay muted loop playsInline className='lg:w-1/2 w-11/12 rounded-3xl object-cover' />
        <img src={Enter} alt="img"
         className="w-60 p-3 z-[60] cursor-pointer"
            onClick={handlePlayMusic} />
      </div>
      )}
      <audio ref={audioRef} src={bgmusic} loop />




      {/* <Header /> */}
      <Hero/>
      <RollPart/>
      <About/>
      <Tokenomics />
      <RollPart2/>
      <ComingSoon/>
      <HowToBuy />
      
    </div>
  )
}

export default App