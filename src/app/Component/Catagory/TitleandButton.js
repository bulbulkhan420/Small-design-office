import React from "react";

export default function TitleandButton() {
    return (
        <div className="w-full h-48 flex flex-row items-center justify-between">
            <div className="flex   w-full items-center justify-start ">
                <div className="text-left font-extrabold">
                    <span> Explore</span>
                    <br />
                    <span> Our Categories</span>
                </div>
            </div>

            <div className="flex w-full items-center justify-end">
                <button className="py-3 px-4 rounded-full text-white bg-black">
                    View All
                </button>
            </div>
        </div>
    );
}
