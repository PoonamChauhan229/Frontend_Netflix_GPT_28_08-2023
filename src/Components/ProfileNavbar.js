import React, { useState } from "react";
import netflixLogo from "../assets/Netflix_Logo_PMS.png";
import { useNavigate, useParams } from "react-router-dom";
import Alea from '../assets/profile/Alea.png';
import Amina from '../assets/profile/Amina.png';
import Daniel from '../assets/profile/Daniel.png';
import Dalia from '../assets/profile/Dalia.png';
import Ninou from '../assets/profile/Ninou.png';
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../utilis/redux/userSlice";


export const ProfileNavbar = () => {
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const profileUserName=useSelector((store)=>store.user)
  console.log(profileUserName.name)
  // //const Alea=profileUserName.name
  const { username } = useParams();
  const profileImages = {Alea, Amina, Daniel, Dalia, Ninou };
  const profileIcon = profileImages[username] || Alea;


  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  const checkSignOut=()=>{
    console.log("Signned Out Successfully")
    dispatch(removeUser())
    localStorage.removeItem('token')
    navigate('/browse')
  }
  
  return (
    <>
      <div className="bg-black py-2 px-8 flex justify-between items-center relative">
        <div className="flex items-center"> {/* Left side */}
          <img className="w-20 max-h-10" src={netflixLogo} alt="logo" />
          <div className="text-gray-400 text-sm ml-4 flex items-center space-x-4">
            <div className="hover:text-red-500 cursor-pointer">Home</div>
            <div className="hover:text-red-500 cursor-pointer">TV Shows</div>
            <div className="hover:text-red-500 cursor-pointer">Movies</div>
            <div className="hover:text-red-500 cursor-pointer">New & Popular</div>
            <div className="hover:text-red-500 cursor-pointer">My List</div>
            <div className="hover:text-red-500 cursor-pointer">Browse by Languages</div>
          </div>          
        </div>

        <div className="flex text-gray-400 items-center space-x-4 relative"> {/* Right side */}
          <div className="hover:text-red-500 cursor-pointer text-sm">Magnify</div>
          <div className="hover:text-red-500 cursor-pointer text-sm">Kids</div>
          <div
            className="hover:text-red-500 cursor-pointer text-sm relative"
            onClick={toggleDropdown}
          >
            {profileIcon && <img src={profileIcon} alt={username} className="w-8 h-8 rounded" />}
           
            {isDropdownVisible &&(
              <div className="border absolute top-10 mr-3 -left-14 w-[110px] bg-white  shadow-md rounded-lg">
                {/* Dropdown content */}
               
                <ul className="text-gray-700">
                <li className="cursor-pointer hover:text-red-500 px-2 py-2 border-b-2 shadow">Help Center</li>
                  
                  <li className="cursor-pointer hover:text-red-500 px-2 py-2 border-b-2 shadow">{profileUserName?.name}</li>
                  <li className="cursor-pointer hover:text-red-500 px-2 py-2 border-b-2 shadow"
                  onClick={checkSignOut}                 
                  
                  >Sign Out</li>
                  
                </ul>
              </div>
              )}           
          </div>
        </div>
      </div>
    </>
  );
};
