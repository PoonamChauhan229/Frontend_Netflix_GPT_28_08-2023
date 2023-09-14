import React, { useRef, useState } from "react";
import Header from "./Header";
import Banner from "../assets/Banner.jpg";
import { checkValidData } from "../utilis/validate";
import { URL } from "../constants";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../utilis/redux/userSlice";
import { useNavigate, useParams } from "react-router-dom";

const Login = ({isAuthenticated,setIsAuthenticated,isSignInForm,setIsSignInForm,
  setIsSignUpForm,isSignUpForm}) => {
  console.log(isSignInForm)
  // const showSignUpForm=true;

  // console.log(isAuthenticated,setIsAuthenticated)
 
  const [errorMessage,setErrorMessage]=useState(null)
 
  const emailid=useRef(null)
  const upassword=useRef(null)
  const uname=useRef(null)
//console.log(isSignInForm=="siginIn")

  const dispatch=useDispatch();
  const navigate=useNavigate()
  // signin button downside
  const toggleSignInForm=()=>{
    // navigate(`/login/${isSignInForm ? true : false}`);
    console.log(isSignInForm)
    setIsSignInForm(!isSignInForm)

  }

  const handleButtonClick=async()=>{
    //Validating the form data
    let message;
    if (isSignInForm) {
      // if(true){
      message = checkValidData(emailid.current.value, upassword.current.value);
      const tokenid=localStorage.getItem('token')
      console.log(tokenid)
      if(!message){
        const response=await axios.post(`${URL}/users/signin`,
        {
          email:emailid.current.value,
          password:upassword.current.value
        }
        ,
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${tokenid}`
          }
          
        }
        )
        console.log(`Login Successfully`,response.data)
        
        const {_id,email,name}=response.data.user[0]
        console.log(_id,email,name)
        const{token}=response.data
        console.log(token)
        dispatch(addUser({_id,email,name,token}))
        if(tokenid){
          setIsAuthenticated(true)
          navigate('/browse')
        }else{
          setIsAuthenticated(false)
        }
        
        
      }      
    } 
    else{
      message = checkValidData(emailid.current.value,upassword.current.value,uname.current.value);
      if(!message){
        const response= await axios.post(`${URL}/users/signup`,{
          name:uname.current.value,
          email:emailid.current.value,
          password:upassword.current.value
        })
        console.log("Sign Up response:", response.data);
        console.log("token",response.data.token)
        localStorage.setItem("token",response.data.token)

        const {name,email,password}=response.data.user
        console.log(password,email,name)
        const{token}=response.data
        console.log(token)
        dispatch(addUser({name,email,password,token}))

        setIsSignInForm(true)

      }
    }
    console.log(emailid.current.value)
    console.log(upassword.current.value)
    console.log(uname.current ? uname.current.value : null);
    console.log(message)
    setErrorMessage(message)   
  }
  return (
    <div>
      <Header isSignInForm={isSignInForm} setIsSignInForm={setIsSignInForm}
      isSignUpForm={isSignUpForm} setIsSignUpForm={setIsSignUpForm}
      
      />
      <div className="absolute">
        <img className="" src={Banner} alt="banner" />
      </div>

      <form onSubmit={(e)=>e.preventDefault()} className="absolute p-12 bg-black w-3/12 my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
        
        <h1 className="font-bold text-3xl py-4">{isSignInForm ?"Sign In":"Sign Up"}</h1>
        
       {!isSignInForm ?(
         <input ref={uname} type="text" name="" id="" className="p-4 my-4 w-full bg-gray-700 " placeholder="Full Name"/>
       ):null
       }
        <input ref={emailid} type="email" name="" id="email" className="p-4 my-4 w-full bg-gray-700 " placeholder="Email Address"/>


        <input ref={upassword} type="password" name="" id="password" className="p-4 my-4 w-full bg-gray-700" placeholder="Password"/>
        
        
        {errorMessage && <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>}
        <button className="p-4 my-6 bg-red-500 w-full rounded-lg"
        onClick={handleButtonClick}
        
        >{isSignInForm ?"Sign In":"Sign Up"}</button>
        <p className="py-4 cursor-pointer" 
        onClick={toggleSignInForm}
        >
        {!isSignInForm ?"New to NetFlix? Sign In Now":"Already Registered Sign Up Now"}
          </p>
      </form>
    </div>
  );
};

export default Login;
