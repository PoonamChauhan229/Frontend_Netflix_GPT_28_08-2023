import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IMG_CDN_URL } from '../constants';


const WatchCard = ({poster_path,videoTrailer}) => {
  
  const navigate = useNavigate();
 

  return (
    <div className='shadow-md pr-2 overflow-clip' style={{ width: "240px", height: "130px" }}
   >
      <img
        src={IMG_CDN_URL + "/" + poster_path}
        className="rounded card-img-top shadow-md"
        alt="..."
        onClick={() => navigate('/watchpage', { state: { videoTrailer } })}
        style={{
          objectFit: "fill", // Maintain aspect ratio and cover the container
          width: "100%",
          height: "100%",
        }}
      />
    </div>
  );
};

export default WatchCard;
