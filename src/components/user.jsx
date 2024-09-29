/** @format */

import React from "react";
import { useState } from "react";

function User({ name }) {
  const [count] = useState(8);
  const [count2] = useState(10);
  return (
    <div className="border-[1px] p-5">
      <h1>count : {count}</h1>
      <h1>count2 : {count2}</h1>
      <h2>Name : {name}</h2>
      <h2>Location : Dehradun</h2>
      <h4>Contact : @mukeshkumar0101</h4>
    </div>
  );
}

export default User;
