/** @format */

import React from "react";
import foodlogo from "../../assets/images/food-logo.jpg";

function Footer() {
  return (
    <footer className="bg-[#f3632f] text-white dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0 flex items-center">
            <a href="/" className="flex items-center gap-3">
              <img src={foodlogo} alt="FoodLogo" className="w-20 rounded-md" />
              <span className="self-center text-2xl font-bold whitespace-nowrap">
                YummyBites
              </span>
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-base font-bold uppercase">Company</h2>
              <ul className="font-medium">
                <li className="mb-4">
                  <a href="/about" className="hover:underline">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/careers" className="hover:underline">
                    Careers
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-base font-bold uppercase">Support</h2>
              <ul className="font-medium">
                <li className="mb-4">
                  <a href="/help" className="hover:underline">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="/contact" className="hover:underline">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-base font-bold uppercase">Legal</h2>
              <ul className="font-medium">
                <li className="mb-4">
                  <a href="/privacy-policy" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="/terms" className="hover:underline">
                    Terms & Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm sm:text-center">
            © 2023{" "}
            <a href="/" className="hover:underline">
              YummyBites
            </a>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0 space-x-4">
            <a
              href="#"
              className="text-white hover:text-gray-900 dark:hover:text-white">
              <i className="fab fa-facebook"></i>
            </a>
            <a
              href="#"
              className="text-white hover:text-gray-900 dark:hover:text-white">
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="#"
              className="text-white hover:text-gray-900 dark:hover:text-white">
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="#"
              className="text-white hover:text-gray-900 dark:hover:text-white">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
