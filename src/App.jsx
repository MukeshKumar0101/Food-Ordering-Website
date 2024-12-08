/** @format */

import "./App.css";
import Body from "./components/body/body";
import { SnackbarProvider } from "notistack";
import RestaurantMenu from "./components/restaurant-menu/restaurantMenu";
import UserContext from "./utils/UserContext";
import { useEffect, useState } from "react";

function App() {

  const [userName, setUserName] = useState();
  useEffect(() => {
    const data = {
      name: "Mukesh Kumar",
    };
    setUserName(data.name);
    // console.log(data.name);
  }, []);



  return (
    <>
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <SnackbarProvider>
          <Body />
          <RestaurantMenu />
        </SnackbarProvider>
      </UserContext.Provider>
    </>
  );
}

export default App;
