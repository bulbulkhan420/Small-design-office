'use client';
import React, { useContext, useState } from 'react'
import {FaBars,SiShopify} from '../../../Icons/icon'
import {cardContext} from '../../page'
export default function navBarSm() {
  let [toggle,settoggle]=useState(false);
  let size=useContext(cardContext);
  return (
    <div>
        <div className='w-full z-20 h-[50px] flex justify-between items-center  bg-black fixed top-0'>
 <div className='text-white p-2 border-2 text-center border-white ml-3 rounded-sm hover:cursor-pointer' onClick={()=>{
  settoggle(!toggle);
 }}>
        <FaBars/>
      </div>
      <div className='bg-white text-black text-4xl mr-3'>
         <SiShopify/> 
      </div>
        </div>
      <div className={`h-auto bg-black transform duration-500 ${toggle?'top-[50px]':'-top-[700px]'}  text-white fixed w-full z-10 top-[50px]`}>

        <div className={`leading-7 text-center hover:text-red-300 hover:cursor-pointer`}>
        Sale 11.11
        </div>

        <div className='leading-7 text-center hover:text-red-300 hover:cursor-pointer'>
            Featured
        </div>

        <div className='leading-7 text-center hover:text-red-300 hover:cursor-pointer'>
            Categories
        </div>

        <div className='leading-7 text-center hover:text-red-300 hover:cursor-pointer'>
            Seasonal
        </div>

        <div className='leading-7 text-center hover:text-red-300 hover:cursor-pointer'>
            Cart List({size.size})
        </div>

        <div className='leading-7 text-center hover:text-red-300 hover:cursor-pointer'>
            Sign In
        </div>
      </div>
    </div>
  )
}
