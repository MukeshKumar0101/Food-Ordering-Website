/** @format */
import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { Backdrop, CircularProgress } from "@mui/material";
import useRestaurantMenu from "../../utils/useRestaurantMenu";
import { IoIosStarHalf } from "react-icons/io";
import RestaurantCategory from "../RestaurantCategory";
import UserContext from "../../utils/UserContext";

function RestaurantMenu() {
  const { resId } = useParams();
  const [resInfo, loader] = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(null);

  const { loggedInUser } = useContext(UserContext);
  console.log("menucardsss", loggedInUser);
  const { name, cuisines, costForTwoMessage } =
    resInfo?.data?.cards[2]?.card?.card?.info || {};

  const { itemCards } =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card || {};

  // console.log(
  //   "here log",
  //   resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
  // );

  const categories =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    ) || [];

  // console.log("filter category",categories);

  return (
    <div className="mt-24">
      {loader ? (
        <Backdrop open={loader}>
          <CircularProgress sx={{ fontSize: "100px", color: "orangered" }} />
        </Backdrop>
      ) : (
        <div>
          <div className="pb-4">
            <h1 className="font-bold text-2xl">{name}</h1>
            <p className="font-semibold text-lg">
              {cuisines} - {costForTwoMessage}
            </p>
          </div>
          <hr />
          {categories.map((category, index) => (
            <RestaurantCategory
              key={index}
              data={category?.card?.card}
              showItems={index === showIndex ? true : false}
              setShowIndex={() => {
                setShowIndex(index);
              }}
            />
          ))}
          <hr />
        </div>
      )}
    </div>
  );
}

export default RestaurantMenu;
