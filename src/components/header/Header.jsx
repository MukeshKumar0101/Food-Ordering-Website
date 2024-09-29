/** @format */

import React, { useEffect, useState, useContext } from "react";
import "../header/header.css";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";
import foodlogo from "../../assets/images/food-logo.jpg";
import UserContext from "../../utils/UserContext";
import { useSelector } from "react-redux";

function Header() {
  const [authBtn, setAuthBtn] = useState(true);
  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);

  // subscribing to the store using a selectore
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems)
  
  return (
    <div>
      <div className="header z-20 flex items-center bg-[#F3632F] shadow-md justify-between px-4 fixed top-0 w-full h-16">
        <div className="logo-container">
          <img className="logo w-20" src={foodlogo} alt="" />
        </div>
        <div className="nav-items flex">
          <ul className="flex gap-4">
            <li className="text-white flex items-center justify-center font-medium text-xl">
              Active Status : {onlineStatus ? "✅" : "🔴"}
            </li>
            <li className="text-white flex items-center justify-center hover:text-white hover:bg-[#FFAF00] px-2 font-medium text-xl">
              <Link to="/">Home</Link>{" "}
            </li>
            <li className="text-white flex items-center justify-center font-medium text-xl hover:text-white hover:bg-[#FFAF00] px-2">
              <Link to="/about">About Us</Link>{" "}
            </li>
            <li className="text-white flex items-center justify-center font-medium text-xl hover:text-white hover:bg-[#FFAF00] px-2">
              <Link to="/contact">Contact Us</Link>{" "}
            </li>
            <li className="text-white flex cursor-pointer items-center justify-center font-medium text-xl hover:text-white hover:bg-[#FFAF00] px-2">
              <Link to="/cart">Cart</Link> ({cartItems.length} items)
            </li>
            <li className="text-white flex items-center justify-center font-medium text-xl hover:text-white hover:bg-[#FFAF00] px-2">
              <Link to="/grocery">Grocery</Link>
            </li>
            <li>
              <button
                onClick={() => setAuthBtn((prev) => !prev)}
                className="login-btn rounded-md font-medium bg-white text-[#F3632F] px-5 py-1  text-xl transition-all hover:scale-105 duration-200">
                {authBtn ? "login" : "logout"}
              </button>
            </li>
            {/* <li>{loggedInUser}</li> */}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
