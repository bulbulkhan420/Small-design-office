import React from "react";

export default function ({ icon, title, desc }) {
    return (
        <div className="w-full h-full py-2 px-5  flex justify-center items-center flex-row ">
            <div className="hover:text-bg-navbar h-3/4 w-1/4 text-6xl text-left">
                {icon}
            </div>
            <div className="flex h-3/4 w-3/4 flex-col gap-y-1">
                <div className="font-semibold">{title}</div>
                <div className="text-gray-400">{desc}</div>
            </div>
        </div>
    );
}
