import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Loader from "../Components/Loader";
import ProductCard from "../Components/ProductCard";
import { useAxiosGet } from "../Hooks/HttpRequest";

function Home() {
  const { id } = useParams();
  const url =
    "https://5f0f95de00d4ab0016133f84.mockapi.io/products?page=1&limit=10";
 let products = useAxiosGet(url)
 
  let content = null;
  if (products.error) {
    content = <p>Try again!</p>;
  }
  if (products.loading) {
    content = <Loader></Loader>;
  }
  if (products.data) {
    content = (
     products.data.map((product,key)=>
       <div key={key}>
         <ProductCard 
         product={product}/>
       </div>
    )
    );
  }
  return (
    <div>
      <h1 className="font-bold text-2xl">Beest Seller</h1>
      {content}
    </div>
  );
}

export default Home;
