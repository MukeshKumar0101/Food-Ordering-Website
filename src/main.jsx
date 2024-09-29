/** @format */

import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/about/About.jsx";
import ContactUs from "./components/contactus/ContactUs.jsx";
import Error from "./components/Error.jsx";
import Layout from "./components/layout.jsx";
import RestaurantMenu from "./components/restaurant-menu/restaurantMenu.jsx";
import { Provider } from "react-redux";
import appStore from "./utils/appStore.js";
import Cart from "./components/Cart.jsx";
// import Grocery from "./components/Grocery.jsx";
const Grocery = lazy(() => import("./components/Grocery.jsx"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: "",
        element: <App />,
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
        path: "/grocery",
        element: (
          <Suspense
            fallback={<h1 className="text-black">wait comming is comming</h1>}>
            <Grocery />{" "}
          </Suspense>
        ),
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={appStore}>
    <RouterProvider router={appRouter}>
      <App />
    </RouterProvider>
  </Provider>
);
