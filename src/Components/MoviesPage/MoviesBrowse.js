import { useSelector } from 'react-redux'
import MainContainer from '../HomePage/MainContainer/MainContainer'
import { ProfileNavbar } from '../Navbar_ProfilePage/ProfileNavbar'
import MoviesSecondaryContainer from './MoviesSecondaryContainer'
import useMovies from '../../hooks/useMovies'
import LoaderBrowse from '../LoaderPage/LoaderBrowse'

const MoviesBrowse = () => {
   useMovies() 
    const movies=useSelector((store)=>store.movies?.nowPlayingMovies)
   // console.log(movies)
  return (
    <>
    <ProfileNavbar/>
    {
      movies?(
        <div className='relative'>
      <MainContainer movies={movies}/>
      <MoviesSecondaryContainer/>
    </div>
      ):<LoaderBrowse/>
    }
    </>
  )
}
export default MoviesBrowse