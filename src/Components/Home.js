import React, { useState } from "react";
import Header from "./Header";
import Banner from "../assets/Banner.jpg";
import Login from "./Login";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();

//   const [showSignUpForm, setShowSignUpForm] = useState(false);
 
  const handleGetStartedClick = () => {
  
    navigate(`/login/true`);
  }
  
  return (
    <>
      {/* {console.log(showSignUpForm)} */}

      <div className="fixed top-0 left-0 w-screen h-screen flex flex-col bg-gradient-to-b from-black z-10 bg-black">
        <Header />
        <div className="flex flex-col justify-center items-center h-full">
          <img className="w-full" src={Banner} alt="banner" />
          <div className="absolute top-1/2 transform -translate-y-1/2 text-5xl font-bold text-white text-center w-full">
            <p>Unlimited movies, TV shows and more</p>
            <p className="text-4xl text-white my-4 font-semibold">
              Watch anywhere. Cancel anytime.
            </p>
            <p className="text-3xl text-white">
              Ready to watch? create or restart your membership.
            </p>

            <button
              onClick={() => handleGetStartedClick()}
              className="bg-red-700 hover:bg-red-600 text-white text-lg font-bold px-7 rounded shadow-md transition duration-300 ease-in-out h-10 m-4"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
