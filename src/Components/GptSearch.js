import React from 'react'
import { GptSearchBar } from './GptSearchBar'
import { GptMoviesSuggestion } from './GptMoviesSuggestion'

const GptSearch = () => {
  return (
    <div className='mt-14 bg-white'>
      <GptSearchBar/>
      <GptMoviesSuggestion/>

    </div>
  )
}

export default GptSearch