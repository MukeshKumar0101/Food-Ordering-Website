// /** @format */

// import React from "react";

// function Child(props) {
//   return <div>{props.name}</div>;
// }

// export default Child;


import React from "react";

function Child({ onSendData }) {
  const sendDataToParent = () => {
    const data = "Hello, Parent!"; // Example data to send
    onSendData(data); // Call the parent's function
  };

  return (
    <div>
      <h2>Child Component</h2>
      <button onClick={sendDataToParent}>Send Data to Parent</button>
    </div>
  );
}

export default Child;

