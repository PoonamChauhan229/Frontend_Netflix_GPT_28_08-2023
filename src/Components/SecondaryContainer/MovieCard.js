import React from 'react'
import { IMG_CDN_URL } from '../../constants'

const MovieCard = ({poster_path}) => {
    // console.log(movie)
    // const {poster_path}=movie
    
  return (
    <div className='pr-4 w-[200px] h-[100px] '>
  <img src={IMG_CDN_URL + "/" + poster_path} alt="" className='object-cover w-full h-full'/>
</div>



  )
}

export default MovieCard