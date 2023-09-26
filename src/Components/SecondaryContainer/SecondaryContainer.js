import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies=useSelector((store)=>store.movies)
  const tvSeries=useSelector((store=>store.tvSeries))
  console.log(tvSeries)
  return (
    
    <div className='bg-black'>
      <div className='-mt-52 pl-12 relative z-20'>
      <MovieList title={"Now Playing Movies"} movies={movies.nowPlayingMovies}/>      
      <MovieList title={"Trending Movies"} movies={movies.trendingMovies}/>
      <MovieList title={"TopRated Movies"} movies={movies.topRatedMovies}/>
      <MovieList title={"Upcoming Movies"} movies={movies.upcomingMovies}/>
      <MovieList title={"Popular Movies"} movies={movies.popularMovies}/>


      <MovieList title={"Airing Today TV Series"} movies={tvSeries.airingTodayTvSeries}/> 
      <MovieList title={"Top Rated TV Series"} movies={tvSeries.topRatedTvSeries}/>     
      <MovieList title={"On The Air TV Series"} movies={tvSeries.onTheAirTvSeries}/>
      <MovieList title={"Popular TV Series"} movies={tvSeries.popularTvSeries}/>
     
    </div>
    </div>
  )
}

export default SecondaryContainer