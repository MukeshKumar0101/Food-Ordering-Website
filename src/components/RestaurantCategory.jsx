/** @format */

import React, { useState } from "react";
import ItemsList from "./ItemsList";

const RestaurantCategory = ({ data, showItems, onClick }) => {
  // const [showItems, setShowItems] = useState(false);

  // const handleClick = () => {
  //   setShowIndex(!showItems);
  // };
  // console.log("data here", data);
  
  return (
    <div>
      <div className="bg-gray-200 w-6/12 mx-auto my-4 py-4 shadow-lg p-4">
        <div className="flex justify-between cursor-pointer" onClick={onClick}>
          <span className="font-bold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>
        <div className="flex justify-center">
          {showItems ? <ItemsList items={data.itemCards} /> : ""}
        </div>
      </div>
    </div>
  );
};

export default RestaurantCategory;
