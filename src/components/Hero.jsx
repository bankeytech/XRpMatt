import React from 'react'
import XrpMatt from '../assets/home.png'
import About from '../assets/about.png'
import Tokemonics from '../assets/tokenomics.png'
import RoadMap from '../assets/roadman.png'
import CAddress from '../assets/caaddress.png'
import HeroImg from '../assets/heroimg.png'
import EdgeGuyStop from '../assets/edgeguytopx.png'
import EdgeGuyButtom from '../assets/edgeguysbottom.png'

function Hero() {
  return (
    <div className='relative flex items-center justify-center w-full'>
        <div className='relative bodyground flex flex-col items-center justify-center gap-3 border-[2px] 
            border-[#FFFCD3] w-[95%] lg:rounded-[80px] rounded-3xl lg:mt-3 bodyground py-4 overflow-hidden'>
              <img src={EdgeGuyStop} alt="img" className='absolute top-0 animate-pulse'/>
            <div className='flex lg:flex-row flex-col items-center p-6 justify-around z-10 w-full'>
              <div className='gap-4 flex flex-row mr-0 lg:mr-6'>
                <a href="#" target="_blank" rel="noreferrer" className="transition-transform 
                  duration-200 hover:scale-110 active:scale-95">
                 <img src={XrpMatt} alt="img" className='lg:w-40 w-24'/>
                </a>
                <a href="#" target="_blank" rel="noreferrer" className="transition-transform 
                  duration-200 hover:scale-110 active:scale-95">
                 <img src={About} alt="img" className='lg:w-40 w-24'/>
                </a>
              </div>

              {/* mobile */}
              

              <h1 className='text-[#FFFCD3] text-3xl p-0 lg:hidden'>XRP</h1>
              <h1 className='text-[#FFFCD3] text-8xl lg:text-[210px] px-0 lg:px-6 -mt-4'>MATT</h1>
                

              <div className='lg:flex flex-row gap-4 ml-0 lg:ml-6 hidden'>
                <a href="#" target="_blank" rel="noreferrer" className="transition-transform 
                 duration-200 hover:scale-110 active:scale-95 lg:flex hidden">
                 <img src={Tokemonics} alt="img" className='lg:w-40 w-24'/>
                </a>
                <a href="#" target="_blank" rel="noreferrer" className="transition-transform 
                 duration-200 hover:scale-110 active:scale-95 lg:flex hidden">
                 <img src={RoadMap} alt="img" className='lg:w-40 w-24'/>
                </a>
              </div>
            </div>

            <div className='CA'>
              <img src={CAddress} alt="img" className='w-220 px-4 lg:px-0' />
            </div>

           <div className='relative w-[95%] flex lg:flex-col items-center justify-center border-[2px] 
           border-[#FFFCD3] lg:rounded-[80px] rounded-3xl bg-[#1C1727] overflow-clip m-4 '>
              
              <img src={HeroImg} alt="img" className='w-[620px] -mt-16'/>
              <div className='absolute lg:flex flex-row items-center justify-between w-10/12'>
                <div className='lg:flex flex-col gap-4 justify-center items-center hidden'>
                  <h1 className='text-[#FFFCD3] text-9xl lg:text[120px]'>XRP</h1>
                  <h1 className='text-[#FFFCD3] text-9xl lg:text[120px]'>XRP</h1>
                  <h1 className='text-[#FFFCD3] text-9xl lg:text[120px]'>XRP</h1>
                </div>

                <div className='lg:flex flex-col gap-4 justify-center items-center hidden'>
                  <h1 className='text-[#FFFCD3] text-9xl lg:text[120px] ml-0 lg:ml-8'>MATT</h1>
                  <h1 className='text-[#FFFCD3] text-9xl lg:text[120px] ml-0 lg:ml-8'>MATT</h1>
                  <h1 className='text-[#FFFCD3] text-9xl lg:text[120px] ml-0 lg:ml-8'>MATT</h1>
                </div>
              
              </div>  

                <img src={EdgeGuyButtom} alt="img" className='absolute -bottom-2 lg:-bottom-8 z-[1] animate-pulse'/>  
                        
           </div>

           <div className='flex flex-row gap-4 items-center justify-center  lg:hidden'>
              <a>
                <img src={Tokemonics} alt="img" className='w-28'/>
              </a>
              <a>
                <img src={RoadMap} alt="img" className='w-28'/>
              </a>
           </div>
           
            
        </div>
        
        

        
    </div>
  )
}

export default Hero