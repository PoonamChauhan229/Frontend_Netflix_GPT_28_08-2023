import React, { useState } from "react";
import Header from "./Header";
import Banner from "../assets/Banner.jpg";

const Login = () => {
  const [isSignInForm,setIsSignInForm]=useState(true);

  const toggleSignInForm=()=>{
    setIsSignInForm(!isSignInForm)
  }
  return (
    <div>
      <Header />
      <div className="absolute">
        <img className="" src={Banner} alt="banner" />
      </div>

      <form className="absolute p-12 bg-black w-3/12 my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">{isSignInForm?"Sign In":"Sign Up"}</h1>
        
       {!isSignInForm &&(
         <input type="text" name="" id="" className="p-4 my-4 w-full bg-gray-700 " placeholder="Full Name"/>
       )
       }
        <input type="email" name="" id="" className="p-4 my-4 w-full bg-gray-700 " placeholder="Email Address"/>


        <input type="password" name="" id="" className="p-4 my-4 w-full bg-gray-700" placeholder="Password"/>
        <button className="p-4 my-6 bg-red-500 w-full rounded-lg">{isSignInForm?"Sign In":"Sign Up"}</button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>{isSignInForm?"New to NetFlix? Sign Up Now":"Already Registered Sign In Now"}</p>
      </form>
    </div>
  );
};

export default Login;
