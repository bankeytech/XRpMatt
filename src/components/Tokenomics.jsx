import React from 'react'
import BullEye from '../assets/bulldude.png'
import Supply from '../assets/supply.png'
import XrpChain from "../assets/xrpchain.png"
import Lpburned from "../assets/lpburned.png"
import Gun from '../assets/gunn.png'
import RoadMap1 from '../assets/roadmap1.png'
import RoadMap2 from '../assets/roadmap2.png'
import RoadMap3 from '../assets/roadmap3.png'
import RoadMap4 from '../assets/roadmap4.png'

import MRoadMap1 from '../assets/roadmap1mob.png'
import MRoadMap2 from '../assets/roadmap2mob.png'
import MRoadMap3 from "../assets/roadmap3mob.png"
import MRoadMap4 from '../assets/roadmap4mob.png'

function Tokenomics() {
  return (
    <div className='relative flex items-center justify-center w-full lg:my-40 my-15 px-10'>
        <div className='relative bg-[#1C1727] bodyguide flex flex-col items-center justify-center border-[2px] 
            border-[#FFFCD3] w-[100%] lg:rounded-[80px] rounded-3xl bodyground lg:mt-3 py-4 px-4'>

              <div className='relative flex items-center justify-center my-5'>
                <h1 className='text-[#FFFCD3]  lg:text-[10vw] text-4xl'>TOKENOMICS</h1>
                <div className='absolute lg:-top-10 -top-10'>
                  <img src={BullEye} alt="img" className='lg:w-[20%] w-[35%] lg:ml-80 ml-18' />
                </div>                
              </div>
              
              <div className='flex flex-col lg:flex-row items-center justify-center gap-4 lg:my-15 my-5 mb-15 lg-mb-0'>
                <img src={Supply} alt="img" className='lg:w-[30%] w-[55%]'/>
                <img src={XrpChain} alt="img" className='lg:w-[30%] w-[55%]' />
                <img src={Lpburned} alt="img" className='lg:w-[30%] w-[55%]'/>
              </div>

              <div className='relative flex flex-col items-center justify-center my-5 lg:my-0'>
                <h1 className='text-[#FFFCD3] lg:text-[11vw] text-4xl'>ROADMAP</h1>
                <div className='absolute lg:w-[80vw] w-[78vw] lg:-top-2 -top-12'>
                  <img src={Gun} alt="img" className='w-full' />
                </div>             
              </div>

              <div className='lg:flex flex-col items-center justify-center my-10 w-[95%] gap-4 hidden'>
                <img src={RoadMap1} alt="img" />
                <img src={RoadMap2} alt="img" />
                <img src={RoadMap3} alt="img" />
                <img src={RoadMap4} alt="img" />
              </div>

              <div className='flex flex-col items-center justify-center w-[95%] gap-4 lg:hidden'>
                <img src={MRoadMap1} alt="img" />
                <img src={MRoadMap2} alt="img" />
                <img src={MRoadMap3} alt="img" />
                <img src={MRoadMap4} alt="img" />
              </div>


        </div>
        
    </div>
  )
}

export default Tokenomics