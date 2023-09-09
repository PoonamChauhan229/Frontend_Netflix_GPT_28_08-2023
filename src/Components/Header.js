import React from 'react'
import netflixLogo from '../assets/Netflix_Logo_PMS.png'
import { useNavigate } from 'react-router-dom'



const Header = () => {
  const navigate=useNavigate()
  return (
    <>
    <div className='flex justify-between absolute w-screen px-8 py-2 from-black z-10'>
        <img 
        className='w-40'
        src={netflixLogo} alt="logo" />
        
        <button 
        onClick={()=>navigate('/login/false')}
        className="bg-red-500 hover:bg-red-600 text-white text-sm font-bold px-5 rounded shadow-md transition duration-300 ease-in-out h-9 m-4">
  Sign In
</button>
  </div>

</>
    
  )
}

export default Header