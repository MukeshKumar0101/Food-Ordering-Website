/** @format */

import React from "react";
import { CDN_URL } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
function ItemsList({ items }) {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-b-[1px] border-gray-400 flex justify-between gap-8">
          <div className="w-9/12">
            <div className="flex flex-col">
              <span className="font-semibold">{item.card.info.name}</span>
              <span className="font-medium">
                ₹{" "}
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-sm">{item.card.info.description}</p>
          </div>
          <div className="w-3/w relative">
            <img
              className="w-28 h-auto"
              src={`https://media-assets.swiggy.com/swiggy/image/upload/${item.card.info.imageId}`}
              alt="itemsimg"
            />
            <button
              onClick={() => handleAddItem(item)}
              className="text-white font-medium h-9 max-w-20 w-full bg-[#F3632F] absolute left-[18px] -bottom-[6px] ">
              Add
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ItemsList;
