"use client";
import Image from "next/image";
import Navbar from "./Component/Navbar/Navbar";
import Hero from "./Component/Hero/Hero";
import Search from "./Component/Search/Search";
import ProductCard from "./Component/ProductCard/ProductCard";
import { useEffect, useState } from "react";
import getProduct from "./Services/getProduct";
import { rootUrl } from "./Urls/endpoint";
import { limit5 } from "./Urls/urls";
import Shiping from "./Component/Shiping/Shipcard/Shiping";
import TitleandButton from "./Component/Catagory/TitleandButton";
import CatagoryList from "./Component/Catagory/CatagoryList";
import Footer from "./Component/Footer/Footer";
export default function Home() {
    let [product, setproduct] = useState([]);
    let getData = async () => {
        let alldata = await getProduct(`${rootUrl}/${limit5}`);
        setproduct(alldata);
    };
    useEffect(() => {
        getData();
    }, []);
    return (
        <div>
            <Navbar />
            <Hero />
            <Search />
            <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-x-4 mx-10 mt-10  gap-y-4">
                {product &&
                    product.map((it, i) => {
                        return (
                            <div key={i}>
                                {i < 5 ? <ProductCard info={it} /> : ""}
                            </div>
                        );
                    })}
            </div>

            <div>
                <Shiping />
            </div>
            <div className="mx-10">
                <TitleandButton />
            </div>
            <div className="mx-10">
                <CatagoryList />
            </div>
            <h1 className="text-center mt-5 font-extrabold text-2xl">
                Celebrate This Summer
            </h1>
            <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-x-4 gap-y-4 mx-10 mt-10 h-1/4">
                {product &&
                    product.map((it, i) => {
                        return (
                            <div key={i} className="h-auto">
                                <ProductCard info={it} />
                            </div>
                        );
                    })}
            </div>
            <Footer />
        </div>
    );
}
