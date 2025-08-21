import React from 'react'
import Create from '../assets/create.png'
import Create1 from '../assets/create-1.png'
import Create2 from '../assets/create-2.png'

import MCreate from '../assets/createmob1.png'
import MCreate1 from '../assets/createmob2.png'
import MCreate2 from '../assets/createmob3.png'
import Rollerer from './Rollerer'

function HowToBuy() {
  return (
    <div className='relative flex flex-col items-center justify-center w-[85%] mt-4 lg:mt-0'>
        <h1 className='text-[#FFFCD3] lg:text-[10vw] text-[11vw]'>
            HOW TO BUY
        </h1>
        <div className='lg:flex flex-col gap-5 mt-4 hidden'>
         <img src={Create} alt="img" />
         <img src={Create1} alt="img" />
         <img src={Create2} alt="img" />
        </div >

        <div className='flex flex-col gap-4 lg:hidden'>
         <img src={MCreate} alt="img" />
         <img src={MCreate1} alt="img" />
         <img src={MCreate2} alt="img" />
        </div >

        <h3 className='text-[#FFFCD3] lg:text-[1.5vw] text-[4vw] my-5'>2024 XRPMATT ALL RIGHTS RESERVED </h3>
     
         <div className=''>
          <Rollerer />
         </div>
    </div>
  )
}

export default HowToBuy