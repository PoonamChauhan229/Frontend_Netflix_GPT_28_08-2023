import React from 'react'
import MovieList from '../HomePage/SecondaryContainer/MovieList'
import { useSelector } from 'react-redux'

export const GptMoviesSuggestion = () => {
  const allGptSearchData = useSelector((store) => store.gpt.tmdbSearchResults)
  console.log(allGptSearchData)

  // Check if allGptSearchData is defined and not null
  if (!allGptSearchData) {
    return null; // or display an appropriate loading message or error message
  }

  return (
    <div>
      <div className='mt-10'>
        <div className=''>
          {
            allGptSearchData.map((element,index)=>(
              <MovieList title={"Best Suggestions Movies/TvShows Suggestions-"+(index+1)} movies={element}/>
            ))
          }
           
      
          
        </div>
      </div>
    </div>
  )
}
