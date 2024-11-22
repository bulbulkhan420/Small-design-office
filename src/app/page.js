"use client";
import Image from "next/image";
import Navbar from "./Component/Navbar/navbar";
import Hero from "./Component/Hero/hero";
import Search from "./Component/Search/search";
import ProductCard from "./Component/ProductCard/productCard";
import { createContext, useEffect, useState } from "react";
import getProduct from "./Services/getProduct";
import { rootUrl } from "./Urls/Endpoint";
import { limit5 } from "./Urls/urls";
import Shiping from "./Component/Shiping/Shipcard/shiping";
import TitleandButton from "./Component/Catagory/titleandButton";
import CatagoryList from "./Component/Catagory/catagoryList";
import Footer from "./Component/Footer/footer";
export const cardContext=createContext();
export default function Home() {
    let [cartItemlists,setcartItemlists]=useState([]);
    
    let [products, setproduct] = useState([]);
    let getCartItemLists=(value)=>{
        cartItemlists.push(value);
        setcartItemlists([...cartItemlists]);
      }
     
    let getData = async () => {
        let alldata = await getProduct(`${rootUrl}/${limit5}`);
        setproduct(alldata);
    };
    useEffect(() => {
        getData();
    }, [cartItemlists]);
    return (
        <cardContext.Provider value={{size:cartItemlists.length}}>
            <div>
            <Navbar />
            <Hero />
            <Search />
            <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-x-3 mx-10 mt-10  gap-y-4">
                {products &&
                    products.map((it, i) => {
                        return (
                            <div key={i}>
                                {i < 5 ? <ProductCard info={it} getCartItemLists={getCartItemLists} /> : ""}
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
            <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-x-3 gap-y-4 mx-10 mt-10 h-1/4">
                {products &&
                    products.map((it, i) => {
                        return (
                            <div key={i} className="h-auto">
                                <ProductCard info={it} getCartItemLists={getCartItemLists} />
                            </div>
                        );
                    })}
            </div>
            <Footer />
        </div>
        </cardContext.Provider>
       
    );
}
