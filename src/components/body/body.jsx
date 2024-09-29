/** @format */

import React, { useContext, useEffect, useState } from "react";
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
// import resList from "../../utils/mockData";
// import Shimmer from "../shimmer";
import { Backdrop, CircularProgress } from "@mui/material";
import { useSnackbar } from "notistack";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";
import UserContext from "../../utils/UserContext";

function Body() {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filterRestaurantList, setFilterRestaurantList] = useState([]);
  const [searchText, setSearchText] = useState();
  const [loader, setLoader] = useState(false);
  const { enqueueSnackbar } = useSnackbar();

  const onlineStatus = useOnlineStatus();
  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  const { loggedInUser, setUserName } = useContext(UserContext);

  // console.log("body render", listOfRestaurants);

  useEffect(() => {
    setLoader(true);
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.73390&lng=76.78890&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    // console.log(json);

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
      autoHideDuration: 3000,
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

    if (onlineStatus === false)
      return (
        <h1>
          Looks like you're offline !! please check your internet connection
        </h1>
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
            <div className="filter flex gap-2 px-2 py-5">
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Search food"
                  className="search-box border-[2px] border-[#FFAF00] pl-2 py-1 outline-none"
                  onChange={(e) => setSearchText(e.target.value)}
                  value={searchText}
                />
                {loggedInUser}
                <button
                  className="search-btn bg-[#FFAF00] text-white px-5 py-1 rounded-md border-[2px] border-[#FFAF00] hover:text-[#FFAF00] hover:bg-white font-medium"
                  onClick={handleSearch}>
                  Search
                </button>
              </div>
              <button
                className="filter-btn bg-[#FFAF00] text-white px-5 py-1 rounded-md border-[2px] border-[#FFAF00] hover:text-[#FFAF00] hover:bg-white font-medium"
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
              {/* <div>
                <label>UserName</label>
                <input
                  value={loggedInUser}
                  onChange={(e) => setUserName(e.target.value)}
                  type="text"
                  className="search-box border-[2px] border-[#FFAF00] pl-2 py-1 outline-none"
                />
              </div> */}
            </div>
            <div className="res-container flex flex-wrap ">
              {filterRestaurantList.map((restaurant) => (
                <Link to={"/restaurants/" + restaurant.id} key={restaurant.id}>
                  {" "}
                  <div className="items-stretch flex h-full pb-10">
                    {restaurant.promoted ? (
                      <RestaurantCardPromoted resData={restaurant} />
                    ) : (
                      <RestaurantCard resData={restaurant} />
                    )}
                  </div>
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
