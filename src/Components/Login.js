import React, { useRef, useState } from "react";
import Header from "./Header";
import Banner from "../assets/Banner.jpg";
import { checkValidData } from "../utilis/validate";
import { URL } from "../constants";
import axios from "axios";

const Login = () => {
  const [isSignInForm,setIsSignInForm]=useState(true);
  const [errorMessage,setErrorMessage]=useState(null)

  const email=useRef(null)
  const password=useRef(null)
  const name=useRef(null)


  const toggleSignInForm=()=>{
    setIsSignInForm(!isSignInForm)
  }

  const handleButtonClick=async()=>{
    //Validating the form data
    let message;
    if (isSignInForm) {
      message = checkValidData(email.current.value, password.current.value);
      if(!message){
        const response=await axios.post(`${URL}/users/signin`,{
          email:email.current.value,
          password:password.current.value
        })
        console.log(`Login Successfully`,response.data)
      }      
    } else {
      message = checkValidData(email.current.value,password.current.value,name.current.value);
      if(!message){
        const response= await axios.post(`${URL}/users/signup`,{
          name:name.current.value,
          email:email.current.value,
          password:password.current.value
        })
        console.log("Sign Up response:", response.data);
      }
    }
    console.log(email.current.value)
    console.log(password.current.value)
    console.log(name.current ? name.current.value : null);
    console.log(message)
    setErrorMessage(message)   
  }
  return (
    <div>
      <Header />
      <div className="absolute">
        <img className="" src={Banner} alt="banner" />
      </div>

      <form onSubmit={(e)=>e.preventDefault()} className="absolute p-12 bg-black w-3/12 my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">{isSignInForm?"Sign In":"Sign Up"}</h1>
        
       {!isSignInForm &&(
         <input ref={name} type="text" name="" id="" className="p-4 my-4 w-full bg-gray-700 " placeholder="Full Name"/>
       )
       }
        <input ref={email} type="email" name="" id="" className="p-4 my-4 w-full bg-gray-700 " placeholder="Email Address"/>


        <input ref={password} type="password" name="" id="" className="p-4 my-4 w-full bg-gray-700" placeholder="Password"/>
        
        
        {errorMessage && <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>}
        <button className="p-4 my-6 bg-red-500 w-full rounded-lg"
        onClick={handleButtonClick}
        
        >{isSignInForm?"Sign In":"Sign Up"}</button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>{isSignInForm?"New to NetFlix? Sign Up Now":"Already Registered Sign In Now"}</p>
      </form>
    </div>
  );
};

export default Login;
