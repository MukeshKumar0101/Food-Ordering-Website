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
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
    // enqueueSnackbar("Your favourite food items are here", {
    //   style: { background: "#FFAF00" },
    //   anchorOrigin: {
    //     horizontal: "right",
    //     vertical: "top",
    //   },
    //   autoHideDuration: 3000,
    // });
    
    toast.dismiss(); // Dismiss the loading toast
    toast.success("Restaurants loaded successfully!", {
      position: "top-right",
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

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <>
      <div className="body pt-20">
        {/* Toast Container */}
        <ToastContainer />
        {loader ? (
          <Backdrop open>
            <CircularProgress sx={{ fontSize: "100px", color: "orangered" }} />
          </Backdrop>
        ) : (
          <>
            {/* Carousel Section */}
            <div>
              <div className="mb-5">
                <Slider {...settings}>
                  <div className="h-[400px] bg-cover bg-center">
                    {" "}
                    <img
                      src="https://static.vecteezy.com/system/resources/previews/036/804/331/non_2x/ai-generated-assorted-indian-food-on-dark-wooden-background-free-photo.jpg"
                      alt=""
                    />
                  </div>
                  <div className="h-[400px] w-full bg-cover bg-center">
                    <img
                      className="w-full"
                      src="https://static.vecteezy.com/system/resources/previews/037/236/579/non_2x/ai-generated-beautuful-fast-food-background-with-copy-space-free-photo.jpg"
                      alt=""
                    />
                  </div>
                  <div className="h-[400px] bg-cover bg-center">
                    <img
                      className="w-full"
                      src="https://png.pngtree.com/background/20230417/original/pngtree-burger-ketchup-fast-food-vegetables-background-picture-image_2445024.jpg"
                      alt=""
                    />
                  </div>
                  <div className="h-[400px] bg-cover bg-center">
                    <img
                      className="w-full"
                      src="https://img.freepik.com/free-photo/view-ready-eat-delicious-meal-go_23-2151431768.jpg"
                      alt=""
                    />
                  </div>
                </Slider>
              </div>

              <div className="filter flex justify-center gap-2 px-2 py-5">
                <div className="flex w-full max-w-[450px]  gap-2">
                  <input
                    type="text"
                    placeholder="Search food"
                    className="search-box rounded-md border-[2px] border-[#FFAF00] pl-2 py-3 max-w-96 w-full outline-none"
                    onChange={(e) => setSearchText(e.target.value)}
                    value={searchText}
                  />

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
