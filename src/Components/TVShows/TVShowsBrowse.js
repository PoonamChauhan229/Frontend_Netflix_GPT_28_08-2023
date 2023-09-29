import { useSelector } from 'react-redux'
import useTVShows from '../../hooks/useTvShows'
import MainContainer from '../MainContainer/MainContainer'
import { ProfileNavbar } from '../ProfileNavbar'
import TVShowsSecondaryContainer from './TVShowsSecondaryContainer'

const TVShowsBrowse = () => {
    useTVShows() 
    const tvseries=useSelector((store)=>store.tvSeries?.popularTvSeries)
    console.log(tvseries)
  return (
    <>
    <ProfileNavbar/>
    <div className='relative'>
      <MainContainer movies={tvseries}/>
      <TVShowsSecondaryContainer/>
    </div>
    </>
  )
}
export default TVShowsBrowse