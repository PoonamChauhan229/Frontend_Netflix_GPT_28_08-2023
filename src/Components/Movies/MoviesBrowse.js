import { useSelector } from 'react-redux'
import MainContainer from '../MainContainer/MainContainer'
import { ProfileNavbar } from '../ProfileNavbar'
import MoviesSecondaryContainer from './MoviesSecondaryContainer'
import useMovies from '../../hooks/useMovies'

const MoviesBrowse = () => {
   useMovies() 
    const movies=useSelector((store)=>store.movies?.nowPlayingMovies)
    console.log(movies)
  return (
    <>
    <ProfileNavbar/>
    <div className='relative'>
      <MainContainer movies={movies}/>
      <MoviesSecondaryContainer/>
    </div>
    </>
  )
}
export default MoviesBrowse