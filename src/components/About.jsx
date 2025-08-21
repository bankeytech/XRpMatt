import React from 'react'
import BullPic from '../assets/bullpic.png'
import Abt2 from '../assets/about2.png'
import Abt3 from '../assets/about3.png'
import ChartBtn from '../assets/chartbtn.png'
import BuyMatt from '../assets/butmat2.png'
import MAbt2 from '../assets/about2mob.png'
import MAbt3 from '../assets/about3mob.png'
import Rollerer2 from './Rollerer2'

function About() {
  return (
    < >
       <div className='relative flex items-center justify-center w-full'>
          <div className='grid grid-cols-1 lg:grid-cols-2 p-6 place-items-center place-content-center my-15'>
            <div className='ml-20'>
              <img src={BullPic} alt="img" className='w-[80%]' />
            </div>

            <div className=' mt-10 lg:flex flex-col items-center justify-between gap-5 hidden'>
              <h2 className='text-[#FFFCD3]  lg:text-7xl text-4xl'>ABOUT XRP MATT</h2>
              <img src={Abt2} alt="img"  />
              <img src={Abt3} alt="img" />

              <div className='flex flex-row gap-32 items-center justify-center'>
                <img src={ChartBtn} alt="img" className='w-[30%]' />
                <img src={BuyMatt} alt="img" className='w-[30%]'/>
              </div>
            </div>

            <div className=' mt-10 flex flex-col items-center justify-between gap-5 lg:hidden'>
              <h2 className='text-[#FFFCD3]  lg:text-7xl text-4xl'>ABOUT XRP MATT</h2>
              <img src={MAbt2} alt="img"  className='w-[90%]'/>
              <img src={MAbt3} alt="img" className='w-[90%]'/>

              <div className='flex flex-row gap-4 items-center justify-center'>
                <img src={ChartBtn} alt="img" className='w-[20%]' />
                <img src={BuyMatt} alt="img" className='w-[20%]'/>
              </div>
            </div>
          </div>
       </div>

      <div className='rotate-8 '>
          <Rollerer2 className='w-[200px]'/>
      </div>
    </>
   
  )
}

export default About