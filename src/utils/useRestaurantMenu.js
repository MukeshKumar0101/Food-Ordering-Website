/** @format */

import { useEffect, useState } from "react";
import { MENU_API } from "./constant";


const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    fetchMenu();
  }, []);
  
  const fetchMenu = async () => {
    setLoader(true);
    try {
      const data = await fetch(MENU_API + resId);
      const json = await data.json();
      setResInfo(json);
    } catch (error) {
      console.error("Error fetching menu:", error);
    } finally {
      setLoader(false);
    }
  };

  return [resInfo, loader];
};

export default useRestaurantMenu;
