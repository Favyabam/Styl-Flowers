import React, { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import ProductItem from "./ProductItem";

const Product = () => {
  const { flower_list } = useContext(StoreContext);

  return (
    <div id="product" className="bg-white">
      <div className="flex justify-center">
        <h1 className="text-4xl font-bold bg-pink-100 text-center mb-12 w-full max-w-[69rem] py-4 mt-8">
          <span className="text-black">Latest</span> <span className="text-pink-500">Products</span>
        </h1>
      </div>
      <div className="bg-white py-12 px-20 flex flex-wrap gap-8 justify-center">
        {flower_list.map((item) => {
          return (
            <ProductItem key={item._id} id={item._id} name={item.name} price={item.price} image={item.image} />
          );
        })}
      </div>
    </div>
  );
};

export default Product;
