import React from 'react'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'


const MainContainer = ({movies}) => {
    
    // if(movies===null) return;
    if(!movies)return;
    const mainMovie=movies[0]
    console.log(mainMovie)
    const{original_title,overview,poster_path,videoTrailer}=mainMovie;
  return (
    <>
      <VideoTitle original_title={original_title} overview={overview} poster_path={poster_path}/>
      <VideoBackground videoTrailer={videoTrailer}/>
    </>
  )
}

export default MainContainer