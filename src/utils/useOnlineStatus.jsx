/** @format */

import React, { useEffect, useState } from "react";

function useOnlineStatus() {
  const [onlineStatus, setOnelineStatus] = useState(true);

  useEffect(() => {
    window.addEventListener("offline", () => {
      setOnelineStatus(false);
    });
    window.addEventListener("online", () => {
      setOnelineStatus(true);
    });
  }, []);

  return onlineStatus;
}

export default useOnlineStatus;
