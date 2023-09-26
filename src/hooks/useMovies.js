import { URL } from '../constants';
import { addNowPlayingMovies, addpopularMovies, addtopRatedMovies, addtrendingMovies, addupcomingMovies } from '../utilis/redux/moviesSlice';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { addAiringTodayTvSeries, addOnTheAirTvSeries, addTopRatedTvSeries,addPopularTvSeries } from '../utilis/redux/tvseriesSlice';

const useMovies = () => {
    const dispatch=useDispatch()

    useEffect(() => {
      getMovies();
    }, []);
  
    const getMovies=async()=>{
    const nowplayingmovie=await axios.get(`${URL}/nowplayingmovies`)
    console.log(nowplayingmovie.data)
    dispatch(addNowPlayingMovies(nowplayingmovie.data))

    const popularmovies=await axios.get(`${URL}/popularmovies`)
    console.log(popularmovies.data)
    dispatch(addpopularMovies(popularmovies.data))

    const trendingmovies=await axios.get(`${URL}/trendingmovies`)
    console.log(trendingmovies.data)
    dispatch(addtrendingMovies(trendingmovies.data))

    const topratedmovies=await axios.get(`${URL}/topratedmovies`)
    console.log(topratedmovies.data)
    dispatch(addtopRatedMovies(topratedmovies.data))    


    const upcomingmovies=await axios.get(`${URL}/upcomingmovies`)
    console.log(upcomingmovies.data)
    dispatch(addupcomingMovies(upcomingmovies.data))

    //TV series
    const airingtodaytvseries=await axios.get(`${URL}/airingtodaytvseries`)
    console.log(airingtodaytvseries.data)
    dispatch(addAiringTodayTvSeries(airingtodaytvseries.data))

    const ontheairtvseries=await axios.get(`${URL}/ontheairtvseries`)
    console.log(ontheairtvseries.data)
    dispatch(addOnTheAirTvSeries(ontheairtvseries.data))

    const populartvseries=await axios.get(`${URL}/populartvseries`)
    console.log(populartvseries.data)
    dispatch(addPopularTvSeries(populartvseries.data))
    

    const topratedtvseries=await axios.get(`${URL}/topratedtvseries`)
    console.log(topratedtvseries.data)
    dispatch(addTopRatedTvSeries(topratedtvseries.data))
    
    }
}

export default useMovies;