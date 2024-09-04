/** @format */

import "./App.css";
import Body from "./components/body/body";
import Header from "./components/header/Header";
import { SnackbarProvider } from "notistack";
import RestaurantMenu from "./components/restaurant-menu/restaurantMenu";

function App() {
  return (
    <>
      <SnackbarProvider>
        {/* <Header /> */}
        <Body />
        <RestaurantMenu />
      </SnackbarProvider>
    </>
  );
}

export default App;
