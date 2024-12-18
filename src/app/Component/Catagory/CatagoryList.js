import React from "react";
import {
    FaSignHanging,
    BsBuildingAdd,
    BsTranslate,
    GiPostOffice,
    GiOpenedFoodCan,
    IoMdAirplane,
} from "../../../Icons/icon";
import CatagoryCard from "./Catagorycard/CatagoryCard";
export default function CatagoryList() {
    return (
        <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-x-6 gap-y-3">
            <CatagoryCard
                icon={<FaSignHanging />}
                title={"Fashion"}
                item={"837 items"}
            />
            <CatagoryCard
                icon={<BsBuildingAdd />}
                title={"Gadgets"}
                item={"664 items"}
            />
            <CatagoryCard
                icon={<BsTranslate />}
                title={"Transport"}
                item={"17480 items"}
            />
            <CatagoryCard
                icon={<GiPostOffice />}
                title={"Office"}
                item={"7182 items"}
            />
            <CatagoryCard
                icon={<GiOpenedFoodCan />}
                title={"Food"}
                item={"883 items"}
            />
            <CatagoryCard
                icon={<IoMdAirplane />}
                title={"Travels"}
                item={"34 items"}
            />
        </div>
    );
}
