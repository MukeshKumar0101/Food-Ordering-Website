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
          "res-card m-2 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200"
        }>
        <img
          className="rounded-lg"
          alt="res-logo"
          width={"200px"}
          src={`https://media-assets.swiggy.com/swiggy/image/upload/${cloudinaryImageId}`}
        />
        <h3 className="font-bold py-4 text-lg">{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating} stars</h4>
        <h4>{costForTwo}</h4>
        <h4>{avgRating}</h4>
        {/* <Rating initialValue={avgRating} size={"18px"} /> */}
      </div>
    </div>
  );
}

export default RestaurantCard;
