import React from 'react'
import Image from "next/image";
export default function ProductCard({info}) {
  return (
    <div >
      <div className='w-1/5 h-1/2 p-5 rounded-2xl border-2 shadow-md'>
      <div className='h-3/4'>
        <img className='rounded-2xl h-full'  src={info.imageAddress} alt='No Image'/>
      </div>
      <div className='h-1/3 flex justify-between items-center'>
            <div className='flex flex-col space-y-1'>
            <div className='font-bold'>{info.productName}</div>
            <div className='text-gray-400'>{info.types}</div>
            </div>

            <div className='text-bg-navbar'>
                ${info.price}
            </div>

      </div>

      </div>
    </div>
  )
}
