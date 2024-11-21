import React from "react";
import {
    MdManageAccounts,
    FaTruck,
    HiBuildingStorefront,
} from "../../../../IconReact/icon";
import ShipCard from "./ShipCard";
export default function Shiping() {
    return (
        <div className="w-full flex justify-center items-center pt-0 ">
            <div className="px-10  flex w-3/4 h-[100px]  justify-center items-center">
                <ShipCard
                    icon={<FaTruck />}
                    title={"Fast shipping"}
                    desc={"Only less than 48 hours"}
                />
                <div className="border-r-2 border-l-2 w-full h-full">
                    <ShipCard
                        icon={<MdManageAccounts />}
                        title={"Secured"}
                        desc={"High end technology"}
                        className="border-l-2"
                    />
                </div>
                <ShipCard
                    icon={<HiBuildingStorefront />}
                    title={"183,499 Stores"}
                    desc={"All high quality products"}
                    className="border-l-2"
                />
            </div>
        </div>
    );
}
