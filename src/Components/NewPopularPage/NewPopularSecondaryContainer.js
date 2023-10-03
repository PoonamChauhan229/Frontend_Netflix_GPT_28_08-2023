import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from '../HomePage/SecondaryContainer/MovieList'

const NewPopularSecondaryContainer = () => {
  const movies=useSelector((store=>store.movies)) 
  const tvSeries=useSelector((store=>store.tvSeries)) 
  return (    
    <div className='bg-black'>
       <div className='-mt-52 pl-12 relative z-20'>    
      <MovieList title={"Trending Movies"} movies={movies.trendingMovies}/>
      <MovieList title={"Upcoming Movies"} movies={movies.upcomingMovies}/>
      <MovieList title={"Popular Movies"} movies={movies.popularMovies}/>

      <MovieList title={"Airing Today TV Series"} movies={tvSeries.airingTodayTvSeries}/>      
      <MovieList title={"On The Air TV Series"} movies={tvSeries.onTheAirTvSeries}/>
      <MovieList title={"Popular TV Series"} movies={tvSeries.popularTvSeries}/>


    </div>
    </div>
  )
}

export default NewPopularSecondaryContainer