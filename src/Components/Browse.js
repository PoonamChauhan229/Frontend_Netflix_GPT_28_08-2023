import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer/MainContainer'
import SecondaryContainer from './SecondaryContainer/SecondaryContainer'

const Browse = () => {
  useNowPlayingMovies() 
  return (
    <div>
      <MainContainer/>
      <SecondaryContainer/>
    </div>
  )
}
export default Browse