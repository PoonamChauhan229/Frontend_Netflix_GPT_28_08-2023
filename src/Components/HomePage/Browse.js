import { useSelector } from 'react-redux'
import MainContainer from './MainContainer/MainContainer'
import SecondaryContainer from './SecondaryContainer/SecondaryContainer'
import useHomeAll from '../../hooks/useHomeAll'
import GptSearch from '../GPTSearchPage/GptSearch'
import Loader from '../Loader'
import {ProfileNavbar} from '../Navbar_ProfilePage/ProfileNavbar'

const Browse = () => {
 useHomeAll() 
 const allDataPages=useSelector((store)=>store.allDataPages?.page1)
 //console.log(allDataPages)
 const showGptSearch=useSelector((store)=>store.gpt.showGptSearch)
  return (
    <>
 
    <ProfileNavbar/>
  
    {
      showGptSearch?<GptSearch/>:<div className='relative'>
      <MainContainer movies={allDataPages}/>
      <SecondaryContainer/>
    </div>
    
    }
    
    
    </>
  )
}
export default Browse