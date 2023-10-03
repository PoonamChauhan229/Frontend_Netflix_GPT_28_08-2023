import { useSelector } from 'react-redux'
import { ProfileNavbar } from '../Navbar_ProfilePage/ProfileNavbar'
import NewPopularSecondaryContainer from './NewPopularSecondaryContainer'
import LoaderBrowse from '../LoaderPage/LoaderBrowse'

const NewPopularBrowse = () => {
   // useMovies() 
    const movies=useSelector((store)=>store.tvSeries?.popularTvSeries)
    //console.log(movies)
  return (
    <>
    <ProfileNavbar/>
    {
      movies?<NewPopularSecondaryContainer/>:<LoaderBrowse/>
    }
   
    
    
    </>
  )
}
export default NewPopularBrowse