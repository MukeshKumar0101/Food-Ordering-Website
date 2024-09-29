/** @format */

import { createContext } from "react";

const UserContext = createContext({
  loggedInUser: "Default user1",
});

export default UserContext;
