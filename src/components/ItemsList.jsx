/** @format */

import React from "react";
import { CDN_URL } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../utils/cartSlice";
import { Button } from "@mui/material";

function ItemsList({ items }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  const handleRemoveItem = (item) => {
    dispatch(removeItem(item.card.info));
  };

  const isItemsExist = (item) => {
    return cartItems.some(
      (cartItem) => cartItem.card.info.id === item.card.info.id
    );
  };

  // Get the quantity of an item in the cart
  const getItemQuantity = (item) => {
    const cartItem = cartItems.find(
      (cartItem) => cartItem.card.info.id === item.card.info.id
    );
    return cartItem?.quantity || 0; // Default to 0 if not found
  };

  return (
    // <div className="w-full">
    //   {items.map((item) => (
    //     <div
    //       key={item.card.info.id}
    //       className="p-2 m-2 border-b-[1px] border-gray-400 flex justify-between gap-8">
    //       <div className="w-9/12">
    //         <div className="flex flex-col">
    //           <span className="font-semibold">{item.card.info.name}</span>
    //           <span className="font-medium">
    //             ₹{" "}
    //             {item.card.info.price
    //               ? item.card.info.price / 100
    //               : item.card.info.defaultPrice / 100}
    //           </span>
    //         </div>
    //         <p className="text-sm">{item.card.info.description}</p>
    //       </div>
    //       <div className="w-3/w relative">
    //         <img
    //           className="w-28 h-auto"
    //           src={`https://media-assets.swiggy.com/swiggy/image/upload/${item.card.info.imageId}`}
    //           alt="itemsimg"
    //         />

    //         {isItemsExist(item) ? (
    //           <div className="flex items-center gap-2">
    //             <button
    //               onClick={() => handleRemoveItem(item)}
    //               className="text-white font-medium h-9 max-w-20 w-full bg-red-500 absolute left-[18px] -bottom-[6px] ">
    //               remove
    //             </button>
    //           </div>
    //         ) : (
    //           <button
    //             onClick={() => handleAddItem(item)}
    //             className="text-white font-medium h-9 max-w-20 w-full bg-[#F3632F] absolute left-[18px] -bottom-[6px] ">
    //             Add
    //           </button>
    //         )}
    //       </div>
    //     </div>
    //   ))}
    // </div>
    <div className="w-full">
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-b-[1px] border-gray-400 flex justify-between gap-8">
          <div className="w-9/12">
            <div className="flex flex-col">
              <span className="font-semibold">{item.card.info.name}</span>
              <span className="font-medium ">
                ₹{" "}
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-sm">{item.card.info.description}</p>
          </div>
          <div className="w-3/12 relative">
            <img
              className="w-28 h-auto"
              src={`https://media-assets.swiggy.com/swiggy/image/upload/${item.card.info.imageId}`}
              alt="itemsimg"
            />
            {isItemsExist(item) ? (
              <div className="flex items-center gap-2 absolute left-[18px] -bottom-[6px]">
                <button
                  onClick={() => handleRemoveItem(item)}
                  className="bg-gray-200 px-3 py-1 rounded font-medium">
                  -
                </button>
                <span className="font-medium ">{getItemQuantity(item)}</span>
                <button
                  onClick={() => handleAddItem(item)}
                  className="bg-gray-200 px-3 py-1 rounded font-medium">
                  +
                </button>
              </div>
            ) : (
              <button
                onClick={() => handleAddItem(item)}
                className="text-white font-medium h-9 max-w-20 w-full bg-[#F3632F] absolute left-[18px] -bottom-[6px]">
                Add
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ItemsList;
