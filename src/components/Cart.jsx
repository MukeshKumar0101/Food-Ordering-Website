/** @format */

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemsList from "./ItemsList";
import { clearCart } from "../utils/cartSlice";
import { MdOutlineShoppingCart } from "react-icons/md";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart(""));
  };

  const totalAmout = cartItems.reduce((total, item) => {
    const price = item.card.info.price
      ? item.card.info.price / 100
      : item.card.info.defaultPrice / 100;
    return total + price * item.quantity;
  }, 0);

  return (
    <div className="mt-20">
      <div className="flex justify-center">
        <h1 className="font-bold text-2xl flex items-center gap-3 ">
          Cart <MdOutlineShoppingCart className="text-[#F3632F]" />
        </h1>
      </div>
      <div className="w-6/12 mx-auto">
        {cartItems.length === 0 ? (
          <p className="text-center font-bold">
            Cart is empty add items to the cart !
            <img
              className="w-80 mx-auto"
              src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-illustration-download-in-svg-png-gif-file-formats--wishlist-bucket-shopping-state-pack-design-development-illustrations-1800917.png?f=webp"
              alt=""
            />
          </p>
        ) : (
          <button
            onClick={handleClearCart}
            className="bg-red-500 text-white px-4 py-2 rounded-lg">
            Clear Cart
          </button>
        )}
        <ItemsList items={cartItems} />
        {cartItems.length == 0 ? (
          ""
        ) : (
          <div className="flex items-center justify-between py-4">
            <span className="font-bold">Total Ammount</span>
            <span className="font-bold">₹ {totalAmout}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
