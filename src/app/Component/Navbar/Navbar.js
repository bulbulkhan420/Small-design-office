import React from 'react'
import {SiShopify,CiLock} from '../../../IconReact/icon'
export default function Navbar() {
  return (
    <div className='flex flex-row justify-between h-20 mx-10 items-center box-border'>

      <div>
       <div className='bg-bg-navbar text-[30px]'><SiShopify/></div>
      </div>

      <div className='flex flex-row justify-center text-sm gap-4'>
        <div  className=' px-2 py-1 rounded-full border-gray-950 transform hover:bg-bg-navbar duration-1000 '>Sale 11.11</div>
        <div className='px-2 py-1 rounded-full border-gray-950 transform hover:bg-bg-navbar duration-1000 '>Featured</div>
        <div className='px-2 py-1 rounded-full border-gray-950 transform hover:bg-bg-navbar duration-1000 '>Categories</div>
        <div className='px-2 py-1 rounded-full border-gray-950 transform hover:bg-bg-navbar duration-1000 '>Seasonal</div>
      </div>

      <div className='flex flex-row justify-center gap-4 text-sm'>
      <div className='w-7 h-7 rounded-full border-2 flex justify-center items-center' ><CiLock/></div>
      <button className='px-3 py-1 rounded-full text-white bg-black'>Sign In</button>
      </div>

    </div>
  )
}
