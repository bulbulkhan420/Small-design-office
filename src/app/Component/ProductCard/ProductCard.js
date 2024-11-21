import React from "react";
import Image from "next/image";
export default function ProductCard({ info }) {
    return (
        <div className="h-full w-full flex hover:shadow-bg-navbar transform duration-700 justify-center items-center border-2 shadow-md rounded-2xl">
            <div className="w-full h-full px-5 pt-5  ">
                <div className="h-auto">
                    <img
                        className="rounded-2xl h-[270px] w-[210px]"
                        src={info.image}
                        alt="No Image"
                    />
                </div>
                <div className="h-[150px] flex justify-between items-center mt-2  ">
                    <div className="flex flex-col space-y-1">
                        <div className="font-bold text-[14px]">
                            {info.title}
                        </div>
                        <div className="text-gray-400 text-[14px]">
                            {info.category}
                        </div>
                    </div>

                    <div className="text-bg-navbar text-[14px]">
                        ${info.price}
                    </div>
                </div>
            </div>
        </div>
    );
}
