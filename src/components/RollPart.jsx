import React from 'react'
import Roll2 from '../assets/roll2.png'
import MachoMatt from '../assets/machomatt.png'
import Roll1 from '../assets/roll1.png'
import Rollerer from './Rollerer'
import Rollerer2 from './Rollerer2'


function RollPart() {
  return (
    <div className='relative flex items-center justify-center w-full my-0 lg:my-0'>
        <div className='absolute -rotate-10 my-20 lg:my-0 lg:top-78'>
            <Rollerer />
        </div>

        <img src={MachoMatt} alt="img" className='w-[85%] lg:w-[690px] z-20  '/>

        <div className='absolute z-30 rotate-8 my-20 lg:my-0 lg:top-78'>
            <Rollerer2 />
        </div>
        
        
    </div>
  )
}

export default RollPart