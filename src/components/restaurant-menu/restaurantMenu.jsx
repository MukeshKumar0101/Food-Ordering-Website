/** @format */
import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { MENU_API } from "../../utils/constant";
import { Backdrop, CircularProgress } from "@mui/material";

function RestaurantMenu() {
  const [resInfo, setResInfo] = useState(null);
  const [loader, setLoader] = useState(false);
  const { resId } = useParams();

  useEffect(() => {
    setLoader(true);
    fetchMenu();
  }, []);

  // const fetchMenu = async () => {
  //   const data = await fetch(MENU_API + resId);
  //   const json = await data.json();
  //   console.log(json);
  //   setResInfo(json);
  // };
  const fetchMenu = async () => {
    try {
      const data = await fetch(MENU_API + resId);
      const json = await data.json();
      setResInfo(json);
    } catch (error) {
      console.error("Error fetching menu:", error);
    } finally {
      setLoader(false);
    }
  };

  // const { name, price } =
  //   resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
  //     ?.card?.itemCards[1]?.card?.info || {};
  // console.log(name);

  const { name, cuisines, costForTwoMessage } =
    resInfo?.data?.cards[2]?.card?.card?.info || {};

  const { itemCards } =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card || {};

  console.log(itemCards);
  return (
    <div className="mt-24">
      {loader ? (
        <Backdrop open={loader}>
          <CircularProgress sx={{ fontSize: "100px", color: "orangered" }} />
        </Backdrop>
      ) : (
        <div>
          <h1>{name}</h1>
          <p>
            {cuisines} - {costForTwoMessage}
          </p>
          <ul>
            {itemCards?.length ? (
              itemCards.map((el, index) => (
                <li key={index}>
                  {el.card?.info?.name} - {"Rs"}{" "}
                  {el.card?.info?.price / 100 ||
                    el.card?.info?.defaultPrice / 100}
                </li>
              ))
            ) : (
              <li>items not avialable</li>
            )}
            {/* <li>{itemCards[0]?.card?.info?.name}</li>
        <li>{itemCards[1]?.card?.info?.name}</li> */}
            <li>Burger</li>
            <li>Diet Coke</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default RestaurantMenu;
