"use client";
import Image from "next/image";
import Navbar from "./Component/Navbar/navBarLg";
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
import NavBarSm from './Component/Navbar/navBarSm'
export const cardContext=createContext();
export default function Home() {
    let [cartItemlists,setcartItemlists]=useState([]);
    
    let [products, setproduct] = useState([]);
    let getCartItemLists=(value)=>{
        cartItemlists.push(value);
        setcartItemlists([...cartItemlists]);

        console.log(cartItemlists);
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
                <div></div>
                <div className="md:hidden ">
                <NavBarSm/>
                </div>
            <div className="hidden md:block" >
            <Navbar />
            </div>
          
            <Hero />
            <Search />
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-1 md:gap-x-3 mx-2 md:mx-10 mt-10 gap-y-2 md:gap-y-4">
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
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-1 md:gap-x-3 mx-2 md:mx-10 mt-10 gap-y-2 md:gap-y-4">
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
