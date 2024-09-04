/** @format */

import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
// import resList from "../../utils/mockData";
import Shimmer from "../shimmer";
import { Backdrop, CircularProgress } from "@mui/material";
import { useSnackbar } from "notistack";
import { Link } from "react-router-dom";
function Body() {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filterRestaurantList, setFilterRestaurantList] = useState([]);
  const [searchText, setSearchText] = useState();
  const [loader, setLoader] = useState(false);
  const { enqueueSnackbar } = useSnackbar();

  // console.log("body render")

  useEffect(() => {
    setLoader(true);
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.73390&lng=76.78890&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    console.log(json);
    if (
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
        .length > 0
    )
      // console.log(
      //   json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
      // );
      setLoader(false);
    enqueueSnackbar("Your favourite food items are here", {
      style: { background: "#FFAF00" },
      anchorOrigin: {
        horizontal: "right",
        vertical: "top",
      },
      autoHideDuration: 4000,
    });
    setListOfRestaurants(
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants.map(
        (key, index) => key.info
      ) || []
    );
    setFilterRestaurantList(
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants.map(
        (key, index) => key.info
      ) || []
    );
  };

  const handleSearch = () => {
    console.log(searchText);
    const filterRestaurant = listOfRestaurants.filter((res) =>
      res.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setLoader(true);
    setFilterRestaurantList(filterRestaurant);
    setLoader(false);
  };

  return (
    <>
      <div className="body pt-20">
        {loader ? (
          <Backdrop open>
            <CircularProgress sx={{ fontSize: "100px", color: "orangered" }} />
          </Backdrop>
        ) : (
          <>
            <div className="filter flex gap-2 px-2">
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Search food"
                  className="search-box border-[1px] border-black py-1"
                  onChange={(e) => setSearchText(e.target.value)}
                  value={searchText}
                />
                <button
                  className="search-btn bg-[#FFAF00] text-white px-5 py-1"
                  onClick={handleSearch}>
                  Search
                </button>
              </div>
              <button
                className="filter-btn bg-[#FFAF00] text-white px-5 py-1"
                onClick={() => {
                  // console.log(listOfRestaurants);
                  setLoader(true);
                  const filterList = listOfRestaurants.filter(
                    (res) => res.avgRating > 4
                  );
                  setListOfRestaurants(filterList);
                  setLoader(false);
                }}>
                Top rated
              </button>
            </div>
            <div className="res-container flex flex-wrap">
              {filterRestaurantList.map((restaurant, index) => (
                <Link to={"/restaurants/" + restaurant.id} key={restaurant.id}>
                  {" "}
                  <RestaurantCard resData={restaurant} />
                </Link>
              ))}
              {/*  */}
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Body;
