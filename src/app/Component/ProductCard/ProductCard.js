'use client';
import React, { useContext } from "react";
import Image from "next/image";
import {FaCartPlus} from '../../../Icons/icon'

import {toast} from '../../ToastFile/Toast'
export default function ProductCard({ info,getCartItemLists }) {
    
    return (
        <div className="h-full w-full flex hover:shadow-bg-navbar transform duration-700 justify-center items-center border-2 shadow-md rounded-2xl">
            <div className="w-full h-full px-5 pt-5  ">
                <div className="h-auto">
                    <img
                        className="rounded-2xl h-[180px] w-[220px]"
                        src={info.image}
                        alt="Loading Product Image"
                    />
                </div>

                <div className="h-[120px] flex justify-between items-center mt-1  ">
                    <div className="flex flex-col space-y-1">
                        <div className="font-bold text-[11px]">
                            {info.title}
                        </div>
                        <div className="text-gray-400 text-[10px]">
                            {info.category}
                        </div>
                    </div>

                    <div className="text-bg-navbar text-[11px]">
                        ${info.price}
                    </div>
                </div>
                <div className="w-full h-8 bg-black text-white flex justify-center items-center rounded-md mb-2">
                    <button className="w-full h-full flex justify-center items-center" onClick={()=>{
                       getCartItemLists(info.title);
                       toast.success('Successfully Added to Cart');
                    }}><FaCartPlus/></button>
                </div>
            </div>
           
        </div>
    );
}
