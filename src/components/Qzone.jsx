import React from 'react'
import swimming from "../assets/swimming.png"
import classImg from "../assets/class.png"
import playground from "../assets/playground.png"

const Qzone = () => {
  return (
    <div className='bg-base-200 p-5'>
       <h2 className='font-bold'>Q-zone</h2>
        <div className=''>
            <img src={swimming} alt="" className='w-full'/>
            <img src={classImg} alt="" className='w-full'/>
            <img src={playground} alt="" className='w-full'/>
        </div>
    </div>
  )
}

export default Qzone