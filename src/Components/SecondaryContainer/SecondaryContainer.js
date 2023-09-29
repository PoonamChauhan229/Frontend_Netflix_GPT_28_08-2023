import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const allPages=useSelector((store)=>store.allDataPages)
  return (
    
    <div className='bg-black'>
      <div className='-mt-52 pl-12 relative z-20'>
      <MovieList title={"Now Playing Movies"} movies={allPages.page1}/>      
      <MovieList title={"Trending Movies"} movies={allPages.page2}/>
      <MovieList title={"TopRated Movies"} movies={allPages.page3}/>
      <MovieList title={"Upcoming Movies"} movies={allPages.page4}/>
      <MovieList title={"Popular Movies"} movies={allPages.page5}/>
     
    </div>
    </div>
  )
}

export default SecondaryContainer