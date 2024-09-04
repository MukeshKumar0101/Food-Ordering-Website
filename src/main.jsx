/** @format */

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/about/About.jsx";
import ContactUs from "./components/contactus/ContactUs.jsx";
import Error from "./components/Error.jsx";
import Layout from "./components/layout.jsx";
import RestaurantMenu from "./components/restaurant-menu/restaurantMenu.jsx";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children:[
      {
        path:"",
        element:<App/>
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/restaurants/:resId",
        element:<RestaurantMenu/>
      },
    ]
  },

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={appRouter}>
    <App />
  </RouterProvider>
);
