import React from 'react'

export default function Hero() {
  return (
    <div className='h-1/3 w-full mt-20 flex flex-col justify-center items-center gap:3 md:gap-4 '> 
      <div className='text-3xl md:text-4xl lg:text-6xl font-extrabold'>Greats Products.</div>
      <div className='text-3xl md:text-4xl lg:text-6xl font-extrabold'>Even Cheaper Price.</div>
      <div className='text-[10px] md:text-xl text-gray-400 '>We have small supplier with great quality, only pay less than necessary</div>
    </div>
  )
}
