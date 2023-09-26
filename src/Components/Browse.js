import useMovies from '../hooks/useMovies'
import MainContainer from './MainContainer/MainContainer'
import { ProfileNavbar } from './ProfileNavbar'
import SecondaryContainer from './SecondaryContainer/SecondaryContainer'

const Browse = () => {
 useMovies() 
  return (
    <>
    <ProfileNavbar/>
    <div className='relative'>
      <MainContainer/>
      <SecondaryContainer/>
    </div>
    </>
  )
}
export default Browse