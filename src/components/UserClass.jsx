/** @format */

import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    // console.log(props);

    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default location",
      },
    };
    // console.log("child constructor");
  }

  async componentDidMount() {
    // console.log("child component did mount");
    const data = await fetch("https://api.github.com/users/MukeshKumar0101");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });

    console.log(json);
  }

  render() {
    const { avatar_url, name, location } = this.state.userInfo;
    return (
      <div className="border-[1px] p-5">
        <img src={avatar_url}></img>
        <h2>Name : {name}</h2>
        <h2>Location : {location}</h2>
        <h4>Contact : @mukeshkumar0101</h4>
      </div>
    );
  }
}

export default UserClass;
