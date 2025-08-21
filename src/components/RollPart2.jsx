import React from 'react'
import Rollerer from './Rollerer'
import Rollerer2 from './Rollerer2'

function RollPart2() {
  return (
    <div className='relative flex items-center justify-center w-full my-20 lg:my-30 mb-0 lg:mb-100'>
            <div className='absolute -rotate-10 my-20 lg:my-5 lg:top-2'>
                <Rollerer />
            </div>
    
            <div className='absolute z-30 rotate-8 my-20 lg:my-5 lg:top-2'>
                <Rollerer2 />
            </div>
                      
    </div>
  )
}

export default RollPart2