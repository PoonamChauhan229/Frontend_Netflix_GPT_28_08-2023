import React from 'react';
import { useLocation } from 'react-router-dom';

const WatchPage = () => {
  const location = useLocation();
  const { videoTrailer } = location.state || {};

  return (
    <div className='fixed -top-[60px] left-0 w-screen h-screen'>
      <iframe
        className='w-full h-full'
        style={{ margin: 0, padding: 0 }}
        src={`https://www.youtube.com/embed/${videoTrailer}?autoplay=1&rel=0&modestbranding=1&showinfo=0&fs=0&frameborder=0`}
        title="Uber Intercity | Woman Entrepreneur | Go Anywhere"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default WatchPage;
