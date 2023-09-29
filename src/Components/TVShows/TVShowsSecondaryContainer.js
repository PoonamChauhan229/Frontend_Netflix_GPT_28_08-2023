import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from '../SecondaryContainer/MovieList'

const TVShowsSecondaryContainer = () => {
  const tvSeries=useSelector((store=>store.tvSeries))
  console.log(tvSeries)
  return (
    
    <div className='bg-black'>
      <div className='-mt-52 pl-12 relative z-20'>
      <MovieList title={"Airing Today TV Series"} movies={tvSeries.airingTodayTvSeries}/> 
      <MovieList title={"Top Rated TV Series"} movies={tvSeries.topRatedTvSeries}/>     
      <MovieList title={"On The Air TV Series"} movies={tvSeries.onTheAirTvSeries}/>
      <MovieList title={"Popular TV Series"} movies={tvSeries.popularTvSeries}/>
     
    </div>
    </div>
  )
}

export default TVShowsSecondaryContainer