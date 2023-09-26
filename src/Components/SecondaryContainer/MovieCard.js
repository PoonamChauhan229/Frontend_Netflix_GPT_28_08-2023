import React from 'react';
import { IMG_CDN_URL } from '../../constants';
import { useNavigate } from 'react-router-dom';

const MovieCard = ({ poster_path,videoTrailer }) => {
  const navigate=useNavigate()
 
  return (
    <div className='pr-4 w-[240px] h-[140px] overflow-hidden'>     
        <img
          src={IMG_CDN_URL + "/" + poster_path}
          alt=""
          className='w-full h-full object-fill'
          onClick={()=>navigate('/watchpage', { state: { videoTrailer } })}
        />
   
    </div>
  );
}
export default MovieCard;
