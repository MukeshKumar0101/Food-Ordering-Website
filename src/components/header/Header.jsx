/** @format */

import React, { useEffect, useState } from "react";
import "../header/header.css";
import { LOGO_URL } from "../../utils/constant";
import { Link } from "react-router-dom";

function Header() {
  const [authBtn, setAuthBtn] = useState(true);

  return (
    <div className="header flex items-center bg-white shadow-md justify-between px-4 fixed top-0 w-full h-16">
      <div className="logo-container">
        <img className="logo h-20" src={LOGO_URL} alt="" />
      </div>
      <div className="nav-items flex">
        <ul className="flex gap-4">
          <li className="text-[#FFAF00] font-medium text-xl">
            <Link to="/">Home</Link>{" "}
          </li>
          <li className="text-[#FFAF00] font-medium text-xl">
            <Link to="/about">About Us</Link>{" "}
          </li>
          <li className="text-[#FFAF00] font-medium text-xl">
            <Link to="contact">Contact Us</Link>{" "}
          </li>
          <li className="text-[#FFAF00] font-medium text-xl">
            <Link to="cart">Cart</Link>
          </li>
          <li className="bg-[#FFAF00] text-white px-5 py-1 font-medium text-xl">
            <button
              onClick={() => setAuthBtn((prev) => !prev)}
              className="login-btn">
              {authBtn ? "login" : "logout"}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
