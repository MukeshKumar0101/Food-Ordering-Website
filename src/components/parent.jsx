/** @format */

// import React from 'react'
// import Child from './child'

// function Parent() {
//   return (
//     <div>
//       <Child name="Mukesh"/>
//     </div>
//   )
// }

// export default Parent

import React, { useState } from "react";
import Child from "./child";

function Parent() {
  const [childData, setChildData] = useState("");

  // Function to receive data from child
  const handleChildData = (data) => {
    setChildData(data); // Update state with data from child
    console.log("Data from Child:", data);
  };

  return (
    <div>
      <h1>Parent Component</h1>
      <p>Data from Child: {childData}</p>
      <Child onSendData={handleChildData} />
    </div>
  );
}

export default Parent;
