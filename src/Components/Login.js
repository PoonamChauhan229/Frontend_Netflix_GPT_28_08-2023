import React, { useRef, useState } from "react";
import Banner from "../assets/Banner.jpg";
import { checkValidData } from "../utilis/validate";
import { URL } from "../utilis/constants";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../utilis/redux/userSlice";
import { useNavigate } from "react-router-dom";
import TopHeader from "./HomeFrontPageHeader/TopHeader";
import { signinValidate } from "../utilis/signinValidate";
import { signUpValidate } from "../utilis/signUpValidate";

const Login = ({ isAuthenticated, setIsAuthenticated, isSignInForm, setIsSignInForm, setIsSignUpForm, isSignUpForm }) => {

  const tokenid = localStorage.getItem('token');
  const [errorMessage, setErrorMessage] = useState("");
  const [otherErrorMessage, setOtherErrorMessage] = useState("");

  const emailid = useRef(null);
  const upassword = useRef(null);
  const uname = useRef(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // signin button downside
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
    // Clear both error messages when toggling form
    setErrorMessage("");
    setOtherErrorMessage("");
  };

  const handleButtonClick = async () => {
    // Validating the form data
    let message;
    if (isSignInForm) {
      message = checkValidData(emailid.current.value, upassword.current.value);

      if (!message) {
        localStorage.getItem('token');
        // Sign-in function validate
        const isSignin = await signinValidate(emailid, upassword);
        console.log(isSignin.error);
        if (isSignin.error) {
          console.log("User Not Found");
          setOtherErrorMessage("User Not Found, Please SignUp");
          // Clear errorMessage
          setErrorMessage("");
        } else {
          console.log(isSignin.data.user.email);
          const { _id, email, name } = isSignin.data.user;
          const { token } = isSignin.data;
          localStorage.setItem("token", isSignin.data.token);
          axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
          dispatch(addUser({ _id, email, name, token }));
          if (token) {
            setIsAuthenticated(true);
            navigate('/profile');
          } else {
            setIsAuthenticated(false);
          }
          // Clear both error messages
          setOtherErrorMessage("");
          setErrorMessage("");
        }
      }
    } else {
      // Signup
      message = checkValidData(emailid.current.value, upassword.current.value, uname.current.value);
      if (!message) {       
        // Clear both error messages
        setOtherErrorMessage("");
        setErrorMessage("");
        const isSignup = await signUpValidate(uname,upassword,emailid,);
        console.log(isSignup.error);
          if(isSignup.error){
            console.log("User Already Exists!!! Please Signin");
            setOtherErrorMessage("User Already Exists!!! Please Signin");
          }else{
            localStorage.setItem("token",isSignup.data.token)
            const {name,email,password}=isSignup.data.user
            const{token}=isSignup.data
            dispatch(addUser({name,email,password,token}))
            setIsSignInForm(true)
          }        
      }
    }
    // Set errorMessage if there is an error in validation
    setErrorMessage(message);
  };

  return (
    <div>
      <TopHeader
        isSignInForm={isSignInForm}
        setIsSignInForm={setIsSignInForm}
        isSignUpForm={isSignUpForm}
        setIsSignUpForm={setIsSignUpForm}
      />
      <div className="absolute">
        <img className="h-screen w-screen" src={Banner} alt="banner" />
      </div>

      <form onSubmit={(e) => e.preventDefault()} className="absolute p-12 bg-black w-3/12 my-28 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">

        <h1 className="font-bold text-xl py-3">{isSignInForm ? "Sign In" : "Sign Up"}</h1>

        {!isSignInForm ? (
          <input ref={uname} type="text" name="" id="" className="p-4 my-4 w-full bg-gray-700 " placeholder="Full Name" />
        ) : null}
        <input ref={emailid} type="email" name="" id="email" className="p-4 my-4 w-full bg-gray-700 " placeholder="Email Address" />


        <input ref={upassword} type="password" name="" id="password" className="p-4 my-4 w-full bg-gray-700" placeholder="Password" />

        {(errorMessage || otherErrorMessage) && <p className="text-red-500 font-bold text-sm py-2">{errorMessage ? errorMessage : otherErrorMessage}</p>}

        <button className="p-4 my-6 bg-red-500 w-full rounded-lg" onClick={handleButtonClick}>
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {!isSignInForm ? "New to Netflix? Sign In Now" : "Already Registered? Sign Up Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
