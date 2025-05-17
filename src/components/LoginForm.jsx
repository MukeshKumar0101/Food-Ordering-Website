/** @format */

import React, { useRef, useState } from "react";
import { CheckValidationData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import loginbg from "../assets/images/loginbg.jpg";
import { IoEye } from "react-icons/io5";
import { IoMdEyeOff } from "react-icons/io";

function LoginForm() {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  // const dispatch = useDispatch(null);

  const handleButtonClick = () => {
    const errorMessage = CheckValidationData(
      email.current.value,
      password.current.value
      // name.current.value,
    );
    setErrorMsg(errorMessage);
    if (errorMessage) return;
    // sign in sign up logic here

    if (!isSignInForm) {
      // signup logic here
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorCode + "" + errorMessage);
        });
    } else {
      // sign in logic

      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorCode + "" + errorMessage);
        });
    }
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const HandleTogglePasword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="relative">
      <img className="w-full h-screen" src={loginbg} alt="" />
      <div className="flex justify-center mx-5">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="absolute w-full  top-[200px] bg-black/70 sm:max-w-[500px] max-w-[320px] mx-auto py-10 px-10">
          <h2 className="text-2xl font-bold text-white text-center pb-2">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h2>
          <div className="flex flex-col">
            {!isSignInForm && (
              <input
                type="text"
                placeholder="Full Name"
                className="p-3 m-2 px-2 rounded-md w-full"
              />
            )}

            <input
              ref={email}
              type="text"
              placeholder="Email Address"
              className="p-3 m-2 px-2 rounded-md w-full"
            />
            {/* <p className="text-red-600 text-sm font-semibold px-3">{errorMsg}</p> */}
            <div className="w-full relative">
              <input
                ref={password}
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="p-3 m-2  rounded-md w-full"
              />
              <p className="text-red-600 text-sm font-semibold px-2">
                {errorMsg}
              </p>

              <div
                className="absolute top-6 right-0 cursor-pointer"
                onClick={HandleTogglePasword}>
                {showPassword ? <IoEye /> : <IoMdEyeOff />}
              </div>
            </div>

            <button
              onClick={handleButtonClick}
              className="p-3 m-2 bg-[#E50914] hover:bg-[#8d1f25] w-full transition-all text-white rounded-md">
              {isSignInForm ? "Sign In" : "Sign Up"}
            </button>
          </div>
          <p
            className="p-3 text-sm font-bold cursor-pointer text-white"
            onClick={toggleSignInForm}>
            {isSignInForm
              ? "New to Foody ? Sing Up Now"
              : "Already registered ? Sign In"}
          </p>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
