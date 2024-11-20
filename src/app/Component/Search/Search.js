import React from 'react'
import {GoSearch} from '../../../IconReact/icon'
export default function Search() {
  return (
    <div className='h-1/5 flex justify-center items-center mt-10'>
      <div className='py-3 w-1/2  border-2 border-gray-400 rounded-full flex justify-between items-center'>
      <input className='ml-5 w-[60%] h-1/6 focus:outline-none' placeholder='Search product by name, category or trend'/>
      <button className='text-white mr-2 h-9 w-9 rounded-full flex justify-center items-center bg-bg-navbar'><GoSearch/></button>
      </div>
    </div>
   
  )
}
