'use client';
import React, { useContext } from "react";
import { SiShopify, CiLock } from "../../../Icons/icon";
import {cardContext} from '../../page'
export default function Navbar() {

    let size=useContext(cardContext);
    return (
        <div className="flex flex-row justify-between h-20 mx-10 items-center box-border">
            <div>
                <div className="bg-bg-navbar text-white text-3xl p-1">
                    <SiShopify />
                </div>
            </div>

            <div className="flex flex-row justify-center text-sm gap-4">
                <div className=" px-3 py-2 text-white rounded-full border-gray-950 transform bg-bg-navbar duration-1000 ">
                    Sale 11.11
                </div>
                <div className="px-3 py-2 hover:text-white rounded-full border-gray-950 transform hover:bg-bg-navbar duration-1000 ">
                    Featured
                </div>
                <div className="px-3 py-2 rounded-full border-gray-950 transform hover:bg-bg-navbar hover:text-white duration-1000 ">
                    Categories
                </div>
                <div className="px-3 py-2 hover:text-white rounded-full border-gray-950 transform hover:bg-bg-navbar duration-1000 ">
                    Seasonal
                </div>
            </div>

            <div className="flex flex-row justify-center gap-4 text-sm">
                <div className="w-9 h-9 rounded-full border-2 flex justify-center items-center relative ">
                    <CiLock />
                    <span className="absolute flex justify-center items-center w-6 h-6 rounded-full text-white bg-bg-navbar -top-[30%] -right-[30%]">
                        {size.size}
                    </span>
                </div>
                <button className="px-4 py-2 rounded-full text-[12px] text-white bg-black">
                    Sign In
                </button>
            </div>
        </div>
    );
}
