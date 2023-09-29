import { useSelector } from 'react-redux'
import useMovies from '../hooks/useMovies'
import MainContainer from './MainContainer/MainContainer'
import { ProfileNavbar } from './ProfileNavbar'
import SecondaryContainer from './SecondaryContainer/SecondaryContainer'

const Browse = () => {

 useMovies() 
 const movies=useSelector((store)=>store.movies?.nowPlayingMovies)
  return (
    <>
    <ProfileNavbar/>
    <div className='relative'>
      <MainContainer movies={movies}/>
      <SecondaryContainer/>
    </div>
    </>
  )
}
export default Browse