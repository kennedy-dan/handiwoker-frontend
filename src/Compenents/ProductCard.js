import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../store/slice/ProductSlice";
import { addToCart } from "../store/slice/cartSlice";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  console.log(product);
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const [productName, setproductName] = useState(null);
  // const dispatch = useDispatch()
  // useEffect(() => {
  //    dispatch(getProducts())
  // }, [])
  console.log(productName);
  const onAddToCart = (_id, name) => {
    // const { _id } = product;
    console.log(_id);
    const cartItems = {
      quantity: quantity,
      product: _id,
    };
    setproductName(name);
    dispatch(addToCart({ cartItems: [cartItems] }));
  };

  return (
    <div>
      <div className="m-10 py-10 borde shadow-sm">
      <p className="text-xl  sm:mx-16 mx-10  md:mx-28 font-bold">Products</p>

      </div>
      {productName ? (
        <div className="border sm:mx-16 mx-10  md:mx-28 border-gray-300 text-gray-400 items-center flex px-8 py-2 mt-10 justify-between">
          <p className="md:text-sm text-[7px]">{productName} has been added to your cart</p>
          <Link
            to="/cart"
            className="py-1 px-2  md:py-3 md:px-5 text-white bg-gray-800  hover:bg-white hover:text-gray-800 border border-black font-semibold text-[4px] md:text-[15px]"
          >
            view cart
          </Link>
        </div>
      ) : null}

      <div className="grid grid-cols-1 md:grid-cols-2">
        {product.result?.products.map((product) => (
          <div className=" m-10 border shadow-lg">
            <div className="grid lg:grid-cols-2 md:grid-cols-1 py-10 px-8">
              <div className=" h-fit">
                <img
                  src={product.images[0].url}
                  className="w-80 lg:h-[300px] h-[250px] object-contain"
                />
              </div>
              <div className="pl-7 lg:mt-0 mt-8">
                <p className="text-2xl text-gray-700 font-semibold">
                  {product.name}
                </p>
                <p className="mt-4 text-gray-600 text-sm">
                  {product.description}
                </p>
                <p className="mt-4 text-gray-600">{product.price}</p>
                <button
                  className="text-sm font-semibold py-3 mt-4 px-6 text-white bg-gray-800  hover:bg-white hover:text-gray-800 border border-black"
                  onClick={() => onAddToCart(product._id, product.name)}
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
