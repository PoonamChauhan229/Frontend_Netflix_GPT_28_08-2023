import { useSelector } from 'react-redux'
import { ProfileNavbar } from '../ProfileNavbar'
import NewPopularSecondaryContainer from './NewPopularSecondaryContainer'

const NewPopularBrowse = () => {
   // useMovies() 
    const movies=useSelector((store)=>store.tvSeries?.popularTvSeries)
    //console.log(movies)
  return (
    <>
    <ProfileNavbar/>
   
    <NewPopularSecondaryContainer/>
    
    </>
  )
}
export default NewPopularBrowse