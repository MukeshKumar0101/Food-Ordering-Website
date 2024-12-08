/** @format */

import React, { useState } from "react";

const One = ({ name, age }) => {
  console.log(name, "testing props");
  const [count, SetCount] = useState(0);

  const handleDecrease = () => {
    if (count <= 0) {
      SetCount(0);
    } else SetCount(count - 1);
  };


  const  fetchData = async () =>{
    const data = await fetch("jkbsjkdbkjsb");
    const json =  data.json();
  } 

  const data =  await fetch("jkbsjkdbkjsb");
  const json =  data.json();


  return (
    <div>
      {/* <ul>
    <li>{name}</li>
    <li>{age}</li>
   </ul>  */}
  
      <button onClick={() => SetCount(count + 1)}>Incease</button>
      <span>{count}</span>
      <button onClick={handleDecrease}>Decrease</button>
    </div>
  );
};

export default One;
