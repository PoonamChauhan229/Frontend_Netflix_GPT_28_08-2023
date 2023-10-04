import { useSelector } from 'react-redux'
import { ProfileNavbar } from '../Navbar_ProfilePage/ProfileNavbar'
import NewPopularSecondaryContainer from './NewPopularSecondaryContainer'
import LoaderList from '../LoaderPage/LoaderList'

const NewPopularBrowse = () => {
   // useMovies() 
    const movies=useSelector((store)=>store.tvSeries?.popularTvSeries)
    //console.log(movies)
  return (
    <>
    <ProfileNavbar/>
    {
      movies?<NewPopularSecondaryContainer/>:<div className='mt-14'><LoaderList/></div>
    }
   
    
    
    </>
  )
}
export default NewPopularBrowse