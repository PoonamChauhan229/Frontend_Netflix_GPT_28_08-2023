import React from 'react'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'


const MainContainer = ({movies}) => {
    
    // if(movies===null) return;
    if(!movies)return;
    const mainMovie=movies[0]
    //console.log(mainMovie)
    const{original_title,overview,poster_path,videoTrailer,original_name}=mainMovie;
  return (
    <>
      <VideoTitle original_title={original_title} overview={overview} poster_path={poster_path} original_name={original_name}/>
      <VideoBackground videoTrailer={videoTrailer}/>
    </>
  )
}

export default MainContainer