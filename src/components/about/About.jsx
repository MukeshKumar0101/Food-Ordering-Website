/** @format */

import React from "react";
import User from "../user";
import UserClass from "../UserClass";
import { json } from "react-router-dom";

class About extends React.Component {
  constructor(props) {
    super(props);
    // console.log("parent constructor");
  }
  async componentDidMount() {
    // console.log("parent component did mount");

  }
  render() {
    console.log("parent render");
    return (
      <div className="mt-24">
        {/* <User name={"Mukesh Kumar"} /> */}
        <UserClass name={"Mukesh"} location={"Paonta Sahib"} />
      </div>
    );
  }
}

// below is function component of  about

// function About() {
//   return (
//     <div className="mt-24">
//       <h1>About component</h1>
//       <User name={"Mukesh Kumar"} />
//       <UserClass name={"Harkirat Kaur"} location={"Paonta Sahib"} />
//     </div>
//   );
// }

export default About;
