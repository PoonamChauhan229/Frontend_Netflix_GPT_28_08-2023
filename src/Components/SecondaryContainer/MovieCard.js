import React from 'react';
import { IMG_CDN_URL } from '../../constants';

const MovieCard = ({ poster_path }) => {
  return (
    <div className='pr-4 w-[240px] h-[140px] overflow-hidden'>     
        <img
          src={IMG_CDN_URL + "/" + poster_path}
          alt=""
          className='w-full h-full object-fill'
        />
   
    </div>
  );
}
export default MovieCard;
