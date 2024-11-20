'use client';
import Image from "next/image";
import Navbar from "./Component/Navbar/Navbar";
import Hero from "./Component/Hero/Hero";
import Search from "./Component/Search/Search";
import ProductCard from "./Component/ProductCard/ProductCard";
import { useState } from "react";

export default function Home() {
  let allData=[
    {
    imageAddress:'http://upload.wikimedia.org/wikipedia/commons/a/ae/An_Adidas_shoe.jpg',
    productName:'Army Shoe',
    types:'Hiking',
    price:'30.50'

  },
  {
    imageAddress:'http://upload.wikimedia.org/wikipedia/commons/a/ae/An_Adidas_shoe.jpg',
    productName:'Jim Shoe',
    types:'Hiking',
    price:'40.50'

  },
  {
    imageAddress:'http://upload.wikimedia.org/wikipedia/commons/a/ae/An_Adidas_shoe.jpg',
    productName:'Office Shoe',
    types:'Hiking',
    price:'90.50'

  },
  {
    imageAddress:'http://upload.wikimedia.org/wikipedia/commons/a/ae/An_Adidas_shoe.jpg',
    productName:'Army Shoe',
    types:'Hiking',
    price:'378'

  },

];
let [product,setproduct]=useState(allData);
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Search/>
      <div className="grid grid-cols-4 gap-2">
      {
        product && product.map((it,i)=>{
          return <div key={i}>
               <ProductCard info={it}/>
          </div>
        })
      }
     
      </div>
      
    </div>
  );
}
