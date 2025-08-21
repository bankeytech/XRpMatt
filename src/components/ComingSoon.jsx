import React from 'react'
import Roll1 from './Roll1'
import Roll2 from './Roll2'
import Roll3 from './Roll3'


function ComingSoon() {
  return (
    <div className='flex flex-col items-center justify-center lg:mt-10 mt-40'>
        <h1 className='text-[#FFFCD3] lg:text-[9vw] text-[11vw]'>
            MINT COMING SOON
        </h1>
        <Roll1/> 
        <Roll2/>
        <Roll3/>

    </div>
  )
}

export default ComingSoon