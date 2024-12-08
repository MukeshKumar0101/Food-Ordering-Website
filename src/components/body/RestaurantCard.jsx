/** @format */

import React, { useEffect, useState } from "react";
import "../body/card.css";
import { CDN_URL } from "../../utils/constant";
import { Rating } from "react-simple-star-rating";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
function RestaurantCard(props) {
  const { resData } = props;
  // console.log("Resdata", resData);
  const {
    cloudinaryImageId,
    name,
    id,
    avgRating,
    cuisines,
    costForTwo,
    // deliveryTime,
  } = resData;
  // useEffect(() => {
  //   console.log("Cloudinary image id", costForTwo);
  // });

  return (
    <div>
      <div
        data-testid="resCard"
        className={
          "res-card m-2 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-[#FFAF00] transition-all duration-300 group shadow-lg shadow-black/20 hover:scale-105 flex flex-col items-stretch h-full"
        }>
        <img
          className="rounded-lg h-48 w-full"
          alt="res-logo"
          width={"200px"}
          src={`https://media-assets.swiggy.com/swiggy/image/upload/${cloudinaryImageId}`}
        />
        <h3 className="font-bold py-4 text-lg text-[#F26B0F] group-hover:text-white">
          {name}
        </h3>
        <h4 className="group-hover:text-white text-gray-500 font-semibold">
          {cuisines.join(", ")}
        </h4>
        <h4 className="group-hover:text-white text-gray-500 font-semibold">
          {avgRating} stars
        </h4>
        <h4 className="group-hover:text-white font-semibold text-gray-500">
          {costForTwo}
        </h4>
        <h4 className="group-hover:text-white font-semibold text-gray-500">
          {avgRating}
        </h4>
        {/* <Rating initialValue={avgRating} size={"18px"} /> */}
      </div>
    </div>
  );
}

// Higher Order component

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label>Promoted</label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

// input - RestaurantCard ==> resturantCardPromoted

export default RestaurantCard;
