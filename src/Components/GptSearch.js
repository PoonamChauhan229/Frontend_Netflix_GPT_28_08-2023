import React from 'react'
import { GptSearchBar } from './GptSearchBar'
import { GptMoviesSuggestion } from './GptMoviesSuggestion'
import Banner from '../../src/assets/Banner.jpg'

const GptSearch = () => {
  return (
    <div className=''>
       <div className="absolute -z-10">
        <img className="" src={Banner} alt="banner" />
      </div>
      <GptSearchBar/>
      <GptMoviesSuggestion/>

    </div>
  )
}

export default GptSearch