import React, { useEffect } from 'react'
import netflixLogo from '../assets/Netflix_Logo_PMS.png'
import { useNavigate } from 'react-router-dom'



const Header = ({isSignInForm,setIsSignInForm}) => {
  // console.log(isSignInForm,setIsSignInForm)
  const navigate=useNavigate()

  useEffect(() => {
    if (isSignInForm) {
      navigate(`/login/${isSignInForm}`);
    }
  }, [isSignInForm, navigate]);

  return (
    <>
    <div className='flex justify-between absolute w-screen px-8 py-2 from-black z-10'>
        <img 
        className='w-40'
        src={netflixLogo} alt="logo" />
        
      

<button 
onClick={() => {setIsSignInForm(true)}}
className="bg-red-500 hover:bg-red-600 text-white text-xl font-bold px-6 rounded shadow-md transition duration-300 ease-in-out h-12 m-4">
  Sign In
</button>
  </div>

</>
    
  )
}

export default Header