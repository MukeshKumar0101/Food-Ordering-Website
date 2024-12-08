/** @format */

import React, { useState, useEffect } from "react";
import "../header/header.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";
import foodlogo from "../../assets/images/food-logo.jpg";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../../utils/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../../utils/userSlice";
import Badge from "@mui/material/Badge";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const dispatch = useDispatch();
  const onlineStatus = useOnlineStatus();
  const location = useLocation();
  const navigate = useNavigate();
  const cartItems = useSelector((store) => store.cart.items);
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {});
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/");
      } else {
        dispatch(removeUser());
        navigate("/signin");
        toast.dismiss();
        toast.success("User logged successfully!", {
          position: "top-right",
        });
      }
    });
  }, []);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Us" },
    { path: "/contact", label: "Contact Us" },
    {
      path: "/cart",
      label: (
        <Badge badgeContent={`${cartItems.length}`} color="error">
          {" "}
          <span>Cart</span>
        </Badge>
      ),
    },
  ];

  return (
    <div>
      <ToastContainer />
      <div className="header z-20 flex items-center bg-[#F26B0F] shadow-md justify-between px-4 fixed top-0 w-full h-16">
        <a href="/" className="flex items-center gap-3 outline-none">
          <img src={foodlogo} alt="FoodLogo" className="w-20 rounded-md" />
          <span className="self-center text-2xl font-bold whitespace-nowrap text-white">
            YummyBites
          </span>
        </a>
        <button
          className="text-white lg:hidden"
          onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>
        <div
          className={`nav-items flex flex-col lg:flex-row lg:static fixed top-16 left-0 w-full lg:w-auto bg-[#F26B0F] lg:bg-transparent transition-transform ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          } lg:translate-x-0`}>
          <ul className="flex flex-col lg:flex-row gap-4">
            {navLinks.map((link) => (
              <li
                key={link.path}
                className={`${
                  location.pathname === link.path
                    ? "bg-white text-[#F26B0F] rounded-lg"
                    : "text-white"
                }  hover:text-[#F26B0F] transition-all flex items-center justify-center hover:bg-white max-w-[150px] lg:max-w-full mx-auto lg:mx-0 hover:rounded-lg px-4 py-2 font-medium text-xl`}>
                <Link to={link.path}>{link.label}</Link>
              </li>
            ))}
            <li className="flex justify-center lg:justify-normal pb-4 lg:pb-0">
              {user && (
                <button
                  onClick={handleSignOut}
                  className="login-btn rounded-md font-medium bg-white text-[#F3632F] px-5 py-2  text-xl transition-all hover:scale-105 duration-200">
                  logout
                </button>
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
