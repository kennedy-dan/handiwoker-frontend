import React, { useState, useEffect } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { getCarts, removeFromCart } from "../store/slice/cartSlice";
import { CiSquareRemove } from "react-icons/ci";
import { toast } from "react-toastify";
import { ClipLoader } from "react-spinners";


const CartItem = ({
  key,
  cartItem,
  onQuantInc,
  onQuantDec,
  totalPrice,
  onRemoveFromCart,
}) => {
  const dispatch = useDispatch();
  const [qty, setQty] = useState(cartItem.qty);
  const [deleteLoading, setdeleteLoading] = useState(false);
  const [cartremoved, setcartremoved] = useState(false);
    const {removeCart} = useSelector(state => state.carts) 
  const { _id } = cartItem;

  console.log(totalPrice);

  useEffect(() => {
    dispatch(getCarts());
  }, [qty, cartremoved, dispatch, removeCart]);
  

  

//INCREASE QUANTITY OF CART
  const onQuantIncrement = () => {
    setQty(qty + 1);
    onQuantInc(_id, qty + 1);
  };

//REDUCE QUANTITY OF CART
  const onQuantDecrement = () => {
    if (qty <= 1) return;
    setQty(qty - 1);
    onQuantDec(_id, qty - 1);
  };

  // const onRemoveFromCart = (_id) => {
  //   console.log(_id)
  //   dispatch(removeFromCart(_id))
  // }

  const removeFromCart = (id) => {
    onRemoveFromCart(id);
    setcartremoved(true);     
    if(id === cartItem._id){
      setdeleteLoading(true)
    }     
    if(id !== cartItem._id){
      setdeleteLoading(false)
    }     
  }

  console.log(cartItem.price * cartItem.qty);
  return (
    <div className="">
      <div className="grid content-center py-6 grid-cols-5 md:gap-7 gap-2 ">
        <div className="flex items-center h-full">
          <button
            onClick={() => removeFromCart(cartItem._id)}
            className=""
          >
            {removeCart.status === 'loading' && deleteLoading === true ? <ClipLoader /> : <CiSquareRemove style={{ width: 40, height: 60, color: "red" }} />}
            
          </button>
        </div>
        <div className="flex">
          <div className="bg-[#f2f2f2] my-6 h-fit hidden md:block">
            <img src={cartItem.img} className="md:h-20 h-10 " />
          </div>
          <p className="md:ml-3 ml-1 py-12 text-[13px] md:text-base">
            {cartItem.name}
          </p>
        </div>
        <div className="justify-self-star py-12">
          <p className="text-[13px] md:text-base">{cartItem.price}</p>
        </div>
        <div className="my-11">
          <div className="border items-center py-1 md:py-2  justify-between flex md:w-28 w-16">
            <button onClick={onQuantDecrement}>
              <MdKeyboardArrowLeft />
            </button>
            <p>{cartItem.qty}</p>
            <button onClick={onQuantIncrement}>
              <MdKeyboardArrowRight />
            </button>
          </div>
        </div>
        <div className="py-12">
          <p className="text-[13px] md:text-base">
            {" "}
            {cartItem.price * cartItem.qty}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
