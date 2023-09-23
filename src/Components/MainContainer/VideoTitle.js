import React from 'react'

const VideoTitle = ({original_title,overview,poster_path}) => {
  console.log(original_title,overview,poster_path)
  return (
    <div className='pt-[17%] px-12 absolute text-white bg-gradient-to-r from-black aspect-video'>
      <h1 className='text-3xl font-bold'>{original_title}</h1>
      <p className='py-3 text-sm w-1/4'>{overview}</p>
      <div className=''>
        <button className='bg-white text-black text-sm  p-2 px-8 rounded-lg hover:bg-opacity-80' >▶ Play</button>
        <button className='bg-white text-black text-sm mx-2  p-2 px-8 rounded-lg hover:bg-opacity-80'>ℹ More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle