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
      // <div className="border-[1px] p-5">
      //   <img src={avatar_url}></img>
      //   <h2>Name : {name}</h2>
      //   <h2>Location : {location}</h2>
      //   <h4>Contact : @mukeshkumar0101</h4>
      // </div>
      <section class="bg-white dark:bg-gray-900">
        <div class="py-1 px-4 mx-auto max-w-screen-xl sm:py-2 lg:px-6">
          <div class="max-w-screen-md  mx-auto mb-8 lg:mb-16">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-[#F26B0F] dark:text-white">
              Delivering Happiness to Your Doorstep
            </h2>
            <p class="text-gray-500 sm:text-xl dark:text-gray-400">
              Discover a world of flavors, quick deliveries, and seamless
              experiences with our platform. From local favorites to
              international cuisines, we’ve got you covered.
            </p>
          </div>
          <div class="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
            <div className="scale-100 hover:scale-110 transition-all">
              <div class="flex justify-center  items-center mb-4 w-full h-auto rounded-full bg-primary-100 lg:h-auto lg:w-full dark:bg-primary-900">
                <img
                  className=""
                  src="https://unblast.com/wp-content/uploads/2020/10/Fast-Delivery-Vector-Illustration.jpg"
                  alt=""
                />
              </div>
              <h3 class="mb-2 text-xl font-bold text-[#F26B0F]">
                Fast Deliveries
              </h3>
              <p class="text-gray-500 dark:text-gray-400">
                Get your favorite meals delivered quickly and efficiently with
                our streamlined delivery system.
              </p>
            </div>
            <div className="scale-100 hover:scale-110 transition-all">
              <div class="flex justify-start items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-auto lg:w-full dark:bg-primary-900">
                <img
                  src="https://res.cloudinary.com/hz3gmuqw6/image/upload/c_fill,q_auto,w_750/f_auto/tk-traditional-indian-foods-to-taste-in-2022-phpEXAXNS"
                  alt=""
                />
              </div>
              <h3 class="mb-2 text-xl font-bold text-[#F26B0F]">
                Variety of Cuisines
              </h3>
              <p class="text-gray-500 dark:text-gray-400">
                Explore an extensive range of cuisines and discover new dishes
                to satisfy your cravings.
              </p>
            </div>
            <div className="scale-100 hover:scale-110 transition-all">
              <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-auto lg:w-full dark:bg-primary-900">
                <img
                  src="https://deorwineblog.b-cdn.net/uploads/2020/10/Real-time-Track-GPS-700x434.jpg"
                  alt=""
                />
              </div>
              <h3 class="mb-2 text-xl font-bold text-[#F26B0F]">
                Real-Time Tracking
              </h3>
              <p class="text-gray-500 dark:text-gray-400">
                Track your order from the kitchen to your doorstep in real-time.
              </p>
            </div>
            <div className="scale-100 hover:scale-110 transition-all">
              <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-auto lg:w-full dark:bg-primary-900">
                <img
                  src="https://www.bdtask.com/blog/assets/plugins/ckfinder/core/connector/php/uploads/images/promote-your-food-combo-offers.jpg"
                  alt=""
                />
              </div>
              <h3 class="mb-2 text-xl font-bold text-[#F26B0F]">
                Exclusive Deals
              </h3>
              <p class="text-gray-500 dark:text-gray-400">
                Save big with our daily offers, discounts, and combo deals
                tailored for you.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default UserClass;
