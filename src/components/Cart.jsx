/** @format */

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemsList from "./ItemsList";
import { clearCart } from "../utils/cartSlice";
const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart(""));
  };

  return (
    <div className="mt-20">
      <h1 className="font-bold text-xl text-center">Cart</h1>
      <div className="w-6/12 mx-auto">
        {cartItems.length === 0 ? (
          <p className="text-center font-bold">
            Cart is empty add items to the cart !
          </p>
        ) : (
          <button
            onClick={handleClearCart}
            className="bg-red-500 text-white px-4 py-3 rounded-lg">
            Clear Cart
          </button>
        )}
        <ItemsList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
