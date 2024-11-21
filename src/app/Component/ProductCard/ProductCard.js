import React from "react";
import Image from "next/image";
export default function ProductCard({ info }) {
    return (
        <div className="h-3/4 w-full flex justify-center items-center">
            <div className="w-full h-full px-5 pb-20 pt-5 rounded-2xl border-2 shadow-md">
                <div className="h-5/6">
                    <img
                        className="rounded-2xl h-full w-full"
                        src={info.image}
                        alt="No Image"
                    />
                </div>
                <div className="h-1/4 flex justify-between items-center mt-1  py-1">
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
