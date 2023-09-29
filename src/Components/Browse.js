import { useSelector } from 'react-redux'
import MainContainer from './MainContainer/MainContainer'
import { ProfileNavbar } from './ProfileNavbar'
import SecondaryContainer from './SecondaryContainer/SecondaryContainer'
import useHomeAll from '../hooks/useHomeAll'

const Browse = () => {
 useHomeAll() 
 const allDataPages=useSelector((store)=>store.allDataPages?.page1)
 console.log(allDataPages)
  return (
    <>
    <ProfileNavbar/>
    <div className='relative'>
      <MainContainer movies={allDataPages}/>
      <SecondaryContainer/>
    </div>
    </>
  )
}
export default Browse