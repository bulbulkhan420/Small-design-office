import React from "react";

export default function ({ icon, title, item }) {
    return (
        <div className="w-full h-full flex justify-center rounded-lg items-center p-5 flex-col border-2 transform duration-700 hover:border-bg-navbar hover:text-bg-navbar">
            <div className="w-full h-full flex justify-center items-center text-6xl p-3">
                {icon}
            </div>
            <div>
                <div className="w-full h-full flex justify-center items-center flex-col">
                    <div className="font-bold text-[12px] text-black">
                        {title}
                    </div>
                    <div className="text-[10px] text-gray-400">{item}</div>
                </div>
            </div>
        </div>
    );
}
