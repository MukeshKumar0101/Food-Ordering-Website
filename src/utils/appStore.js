/** @format */

import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../utils/cartSlice";
import userReducer from "../utils/userSlice";
const appStore = configureStore({
  reducer: {
    cart: cartReducer,
    user: userReducer,
  },
});

export default appStore;
