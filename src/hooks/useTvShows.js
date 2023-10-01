import { URL } from '../utilis/constants';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { addAiringTodayTvSeries, addOnTheAirTvSeries, addTopRatedTvSeries,addPopularTvSeries } from '../utilis/redux/tvseriesSlice';
import axios from 'axios';

const useTvShows = () => {
    const dispatch=useDispatch()
    const token=localStorage.getItem('token')
    console.log("MoviesToken",token)

    useEffect(() => {
      if(token){
        getTvShows();
      }
    }, []);
  
    const getTvShows=async()=>{


    //TV series
    const airingtodaytvseries=await axios.get(`${URL}/airingtodaytvseries`)
    // console.log(airingtodaytvseries.data)
    dispatch(addAiringTodayTvSeries(airingtodaytvseries.data))

    const ontheairtvseries=await axios.get(`${URL}/ontheairtvseries`)
    // console.log(ontheairtvseries.data)
    dispatch(addOnTheAirTvSeries(ontheairtvseries.data))

    const populartvseries=await axios.get(`${URL}/populartvseries`)
    // console.log(populartvseries.data)
    dispatch(addPopularTvSeries(populartvseries.data))
    

    const topratedtvseries=await axios.get(`${URL}/topratedtvseries`)
    // console.log(topratedtvseries.data)
    dispatch(addTopRatedTvSeries(topratedtvseries.data))
    
    }
}

export default useTvShows;