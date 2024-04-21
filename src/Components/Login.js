import React, { useState } from "react";
import Header from "./Header";
import { netflix_background } from "../Utils/constants";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignUpForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={netflix_background} alt="netflix-background" />
      </div>

      <form className="absolute w-3/12 text-center p-12 bg-black bg-opacity-75 mx-auto my-24 right-0 left-1">
        <h1 className="p-2 my-2 font-bold text-3xl mb-2 text-white text-left ">
          { isSignInForm ? "Sign In" : "Sign Up" }
        </h1>
        { !isSignInForm && <input
          type="text"
          placeholder="Enter Full Name"
          className="p-4 my-4 w-full mb-3 relative rounded border bg-transparent border-slate-400 cursor-pointer"
        />}
        <input
          type="text"
          placeholder="Enter Email Address"
          className="p-4 my-4 w-full mb-3 relative rounded border bg-transparent border-slate-400 cursor-pointer"
        />
        <input
          type="password"
          placeholder="Enter Password"
          className="p-4 my-4 w-full mb-6 relative rounded bg-transparent border border-slate-300 cursor-pointer"
        />
        <button className="p-2 my-2 w-full bg-red-600 font-bold relative rounded text-white cursor-pointer">
          { isSignInForm ? "Sign In" : "Sign Up" }
        </button>
        <p className="w-full bg-transparent relative rounded text-gray-400">
          OR
        </p>
        <button className="p-2 my-2 w-full bg-opacity-75 bg-zinc-500 font-bold relative rounded text-white cursor-pointer">
          Use a Sign-In Code
        </button>

        <p className="p-2 my-2 text-white cursor-pointer">Forgot Password?</p>

        <div className="flex">
          <input type="checkbox" className="mr-2 w-5 h-5 cursor-pointer" />
          <p className=" text-white cursor-pointer text-left text-lg">
            Remember me
          </p>
        </div>

        <p className="mt-2 text-left text-gray-400 mb-6">
          { isSignInForm ? "New to Netflix?" : "Already Registered!!" }
          <span
            className="text-white ml-2 cursor-pointer border-b-2"
            onClick={toggleSignUpForm}
          >
            {isSignInForm ? "Sign Up Now" : "Sign In Now"}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
