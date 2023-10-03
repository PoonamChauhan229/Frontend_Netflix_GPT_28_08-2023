import axios from 'axios'
import React, { useEffect } from 'react'
import { URL } from '../../utilis/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addPlayingMovies, addPlayingTvSeries } from '../../utilis/redux/watchListSlice'
import { ProfileNavbar } from '../Navbar_ProfilePage/ProfileNavbar'
import WatchContainer from './WatchContainer'

export const WatchList = () => {
  const watchlistmovies=useSelector((store)=>store.watchlist.playingMovies)
  const watchlisttvseries=useSelector((store)=>store.watchlist.playingTvSeries)
    const dispatch=useDispatch()
    useEffect(()=>{
        getWatchList()
    },[])
    const getWatchList=async()=>{
    const response = await axios.get(`${URL}/watchlist`);
    const watchlistData = response.data;
       
       const moviewatchlist= watchlistData.filter((element)=>element.media_type==="movie")
       dispatch(addPlayingMovies(moviewatchlist))

       const tvserieswatchlist= watchlistData.filter((element)=>element.media_type==="tvseries")
       dispatch(addPlayingTvSeries(tvserieswatchlist))
    }
  return (
    <div>
        <ProfileNavbar/>
         <div className='bg-black'>
         <div className='mt-10 pl-12 relative z-20'>
        <WatchContainer title={"WatchList Movies"} watchlistpropsdata={watchlistmovies}/>
        <WatchContainer title={"WatchList Tv Series"} watchlistpropsdata={watchlisttvseries}/>
        </div>
        </div>
       
    </div>
  )
}
