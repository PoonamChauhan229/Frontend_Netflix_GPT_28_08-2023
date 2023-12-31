import React from 'react';
import { IMG_CDN_URL, URL } from '../../../utilis/constants';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const MovieCard = ({original_title,original_name,poster_path,movieid,videoTrailer,media_type}) => {
  
  const navigate = useNavigate();
  const addDatatoWatchList=async()=>{
    const response= await axios.post(`${URL}/watchlist/add`,{
      original_title,original_name,poster_path,id:movieid,videoTrailer,media_type
    })
    //console.log(response)
  }

  return (
    <div className='shadow-md pr-2 overflow-clip' style={{ width: "240px", height: "130px" }}
    onClick={()=>{addDatatoWatchList()}}
    >
      <img
        src={IMG_CDN_URL + "/" + poster_path}
        className="rounded card-img-top shadow-md"
        alt="..."
        onClick={() => navigate('/watchpage', { state: { videoTrailer } })}
        style={{
          objectFit: "cover", // Maintain aspect ratio and cover the container
          width: "100%",
          height: "100%",
        }}
      />
    </div>
  );
};

export default MovieCard;
