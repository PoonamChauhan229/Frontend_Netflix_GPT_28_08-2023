import React from "react";
import TopHeader from "./TopHeader";
import Banner from "../../assets/Banner.jpg";
import { useNavigate } from "react-router-dom";
const BottomHeader = ({isSignInForm,setIsSignInForm, isSignUpForm,setIsSignUpForm}) => {
  const navigate = useNavigate();

  
  const handleGetStartedClick = () => {
    setIsSignInForm(false); // Set to false to show the signup form
    setIsSignUpForm(true); // Set to true to show the signup form
    navigate("/login"); // Navigate to the login route
  };
 
  return (
    <>
     <div className="fixed top-0 left-0 w-screen h-screen flex flex-col bg-gradient-to-b from-black z-10 bg-black">
      <TopHeader isSignInForm={isSignInForm} setIsSignInForm={setIsSignInForm} />

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
            onClick={handleGetStartedClick}
            className="bg-red-600 hover:bg-red-600 text-white text-xl font-bold px-10 rounded shadow-md transition duration-300 ease-in-out h-14 m-4"
          >
            Get Started
          </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BottomHeader;
