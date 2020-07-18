import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Loader from "../Components/Loader";
import { useAxiosGet } from "../Hooks/HttpRequest";
function Product() {
  const { id } = useParams();
  const url = `https://5f0f95de00d4ab0016133f84.mockapi.io/products/${id}`;
  //https://mockapi.io/projects/5f0f95de00d4ab0016133f85/products/2
 
  let content = null;
  let product = useAxiosGet(url);
  if (product.error) {
    content = <p>Try again!</p>;
  }
  if (product.loading) {
    content = <Loader />;
  }

  if (product.data) {
    return (content = (
      <div>
        <h1 className="text-2xl font-bold mb-3">{product.data.name}</h1>
        <div>
          <img src={product.data.avatar} alt={product.data.name} />
        </div>
        <div className="font-bold text-xl mb-3">${product.data.price}</div>
        <div className="">{product.data.createdAt}</div>
      </div>
    ));
  }
  return <div>{content}</div>;
}

export default Product;
