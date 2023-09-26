import useMovies from '../hooks/useMovies'
import MainContainer from './MainContainer/MainContainer'
import SecondaryContainer from './SecondaryContainer/SecondaryContainer'

const Browse = () => {
 useMovies() 
  return (
    <div>
      <MainContainer/>
      <SecondaryContainer/>
    </div>
  )
}
export default Browse