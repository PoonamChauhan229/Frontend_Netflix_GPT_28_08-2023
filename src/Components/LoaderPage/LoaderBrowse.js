
import {ProfileNavbar} from '../../components/Navbar_ProfilePage/ProfileNavbar'
import LoaderPrimaryContainer from './LoaderPrimaryContainer'
import LoaderList from './LoaderList'

const LoaderBrowse = () => {
 
  return (
    <>
 
    <ProfileNavbar/>
    <LoaderPrimaryContainer/>
  
    <LoaderList/>
   
  
    {/* {
      showGptSearch?<GptSearch/>:<div className='relative'>
      <MainContainer movies={allDataPages}/>
      <SecondaryContainer/>
    </div>
    
    } */}
    
    
    </>
  )
}
export default LoaderBrowse