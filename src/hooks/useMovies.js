import { URL } from '../utilis/constants';
import { addNowPlayingMovies, addpopularMovies, addtopRatedMovies, addtrendingMovies, addupcomingMovies } from '../utilis/redux/moviesSlice';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
const useMovies = () => {
    const dispatch=useDispatch()
    const token=localStorage.getItem('token')
    console.log("MoviesToken",token)

    useEffect(() => {
      if(token){
      getMovies();
      }
    }, []);
  
    const getMovies=async()=>{
    const nowplayingmovie=await axios.get(`${URL}/nowplayingmovies`)
    // console.log(nowplayingmovie.data)
    dispatch(addNowPlayingMovies(nowplayingmovie.data))

    const popularmovies=await axios.get(`${URL}/popularmovies`)
    // console.log(popularmovies.data)
    dispatch(addpopularMovies(popularmovies.data))

    const trendingmovies=await axios.get(`${URL}/trendingmovies`)
    // console.log(trendingmovies.data)
    dispatch(addtrendingMovies(trendingmovies.data))

    const topratedmovies=await axios.get(`${URL}/topratedmovies`)
    // console.log(topratedmovies.data)
    dispatch(addtopRatedMovies(topratedmovies.data))    


    const upcomingmovies=await axios.get(`${URL}/upcomingmovies`)
    // console.log(upcomingmovies.data)
    dispatch(addupcomingMovies(upcomingmovies.data))
   
    }
}

export default useMovies;