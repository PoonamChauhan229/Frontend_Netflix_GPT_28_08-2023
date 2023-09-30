import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const allPages=useSelector((store)=>store.allDataPages)
  return (
    
    <div className='bg-black'>
      <div className='-mt-52 pl-12 relative z-20'>
      <MovieList title={"Trending Flicks & Shows"} movies={allPages.page1}/>      
      <MovieList title={"Popular Picks: Movies & TV"} movies={allPages.page2}/>
      <MovieList title={"Viewers' Choice: Cinema & TV"} movies={allPages.page3}/>
      <MovieList title={"Blockbuster Fusion: Movies & Series"} movies={allPages.page4}/>
      <MovieList title={"Viewer's Delight: Cinema & Shows"} movies={allPages.page5}/>
     
    </div>
    </div>
  )
}

export default SecondaryContainer