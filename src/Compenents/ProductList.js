import React, { useEffect } from "react";
import ProductCard from "./ProductCard";
import { getProducts } from "../store/slice/ProductSlice";
import { useDispatch, useSelector } from "react-redux";

const ProductList = () => {
  const dispatch = useDispatch();
  const { getProduct } = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(getProducts());
  }, []);
  return (
    <div>
      
      {/* <div className="grid grid-cols-2">
        {getProduct.result?.products.map((product) => (
          <div> */}
            <ProductCard product={getProduct} />
          {/* </div>
        ))}
      </div> */}
    </div>
  );
};

export default ProductList;
