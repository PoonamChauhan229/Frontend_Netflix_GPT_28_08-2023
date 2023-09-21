import React from 'react';
import { Link } from 'react-router-dom';
import Alea from '../assets/profile/Alea.png'
import Amina from '../assets/profile/Amina.png'
import Daniel from '../assets/profile/Daniel.png'
import Dalia from '../assets/profile/Dalia.png'
import Ninou from '../assets/profile/Ninou.png'

import { useSelector } from "react-redux";

const Profile = () => {
  const profileUserName=useSelector((store)=>store.user)
  console.log(profileUserName.name)
  const profiles = [
    { imgSrc: Alea, username: profileUserName.name },
    { imgSrc: Amina, username: 'Amina' },
    { imgSrc: Dalia, username: 'Dalia' },
    { imgSrc: Daniel, username: 'Daniel' },
    { imgSrc: Ninou, username: 'Ninou' },
  ];

  return (
    <div className="h-screen bg-black flex flex-col justify-center items-center">
      <h1 className="text-3xl font-semibold text-white mb-4">Who is Watching Now?</h1>
      <div className="flex justify-center items-center space-x-4">
        {/* List of Profiles */}
        {profiles.map((profile) => (
          <div key={profile.username} className="text-center">
            <Link to={`/profile/${profile.username}`}>
              <img src={profile.imgSrc} alt="" className="w-32 h-32 mx-auto mb-2" />
              <div className="text-gray-500">{profile.username}</div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profile;