import { URL } from '../constants';
import { addNowPlayingMovies } from '../utilis/redux/moviesSlice';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

const useNowPlayingMovies = () => {
    const dispatch=useDispatch()

    useEffect(() => {
      getNowPlayingMovies();
    }, []);
  
    const getNowPlayingMovies=async()=>{
    const movie=await axios.get(`${URL}/nowplayingmovies`)
    console.log(movie.data)
    dispatch(addNowPlayingMovies(movie.data))
    }
}

export default useNowPlayingMovies;