import React, { useState } from "react";
import netflixLogo from "../../assets/Netflix_Logo_PMS.png";
import { Link, useNavigate, useParams } from "react-router-dom";
import Alea from '../../assets/profileimage/Alea.png';
import Amina from '../../assets/profileimage/Amina.png';
import Daniel from '../../assets/profileimage/Daniel.png';
import Dalia from '../../assets/profileimage/Dalia.png';
import Ninou from '../../assets/profileimage/Ninou.png';
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../../utilis/redux/userSlice";
import { toggleGptSearchView } from "../../utilis/redux/gptSlice";
import { SUPPORTED_LANGUAGES } from "../../utilis/constants";
import { changeLanguage } from "../../utilis/redux/configSlice";


export const ProfileNavbar = () => {
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const profileUserName=useSelector((store)=>store.user)
  
  const { username } = useParams();
  const profileImages = {Alea, Amina, Daniel, Dalia, Ninou };
  const profileIcon = profileImages[username] || Alea;


  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

const handleGPTSearchClick=()=>{
  //Toggle GPT Search
  dispatch(toggleGptSearchView())
}

  const checkSignOut=()=>{
   // console.log("Signned Out Successfully")
    dispatch(removeUser())
    localStorage.removeItem('token')
    navigate('/')
  }

  const handleLanguageChange=(e)=>{
    dispatch(changeLanguage(e.target.value))
  }

  const showGptSearch=useSelector((store)=>store.gpt.showGptSearch)
  
  return (
    <>
       <div className="fixed top-0 left-0 right-0 bg-black py-1 px-8 flex justify-between items-center z-50">
        <div className="flex items-center "> {/* Left side */}
          <img className="w-20 max-h-10" src={netflixLogo} alt="logo" />
          <div className="text-gray-400 text-sm ml-4 flex items-center space-x-4 w-[120%]">
            <div className="hover:text-red-500 cursor-pointer">
              <Link to='/home'>Home</Link>
            </div>
            <div className="hover:text-red-500 cursor-pointer">
              <Link to='/tvshows'>TV Shows</Link>
            </div>
            <div className="hover:text-red-500 cursor-pointer">
            <Link to='/movies'>Movies</Link>
            </div>
            <div className="hover:text-red-500 cursor-pointer">
            <Link to='/newpopular'>New & Popular</Link>
              </div>
            <div className="hover:text-red-500 cursor-pointer">
              <Link to='/watchlist'>My List</Link></div>
            <div className="hover:text-red-500 cursor-pointer">              
              {/* <Link onClick={navigate('/loader')}>Browse by Languages</Link> */}
              </div>
          </div>          
        </div>

    <div className="flex text-gray-400 items-center space-x-4 relative"> {/* Right side */}
    {showGptSearch &&
    <select className="p-2 mt-1 bg-gray-900 text-white rounded-lg" onChange={handleLanguageChange}>
    {SUPPORTED_LANGUAGES.map((element)=>(
        <option className="p-2" key={element.identifier} value={element.identifier}>{element.name}</option>
      ))
    }
  </select>
    
    }
        

          <button className="hover:text-red-500 cursor-pointer text-sm px-6 p-1 mt-1 text-white rounded-lg bg-purple-600 "
          onClick={handleGPTSearchClick}
          >{!showGptSearch?"GPT Search":"Home"}</button>


          <div className="hover:text-red-500 cursor-pointer text-sm border-red-500">
         Kids
          </div>
          
          
          <div
            className="hover:text-red-500 cursor-pointer text-sm relative"
            onClick={toggleDropdown}
          >
            {profileIcon && <img src={profileIcon} alt={username} className="w-8 h-8 rounded" />}
           
            {isDropdownVisible &&(
              <div className="absolute top-10 mr-3 -left-14 w-[110px] shadow-md rounded">
                {/* Dropdown content */}
               
                <ul className="bg-gray-900 text-white rounded">
                <li className="cursor-pointer hover:text-red-500 px-2 py-[8%] border-b-2 shadow">Help Center</li>
                  
                  <li className="cursor-pointer hover:text-red-500 px-2 py-[8%] border-b-2 shadow">{profileUserName?.name}</li>
                  <li className="cursor-pointer hover:text-red-500 px-2 py-[8%] border-b-2 shadow"
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
