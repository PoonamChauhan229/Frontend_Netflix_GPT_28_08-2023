import { createSlice } from "@reduxjs/toolkit"

const moviesSlice=createSlice({
   name:"movies",
    initialState:{
      nowPlayingMovies:null,
      popularMovies:null,
      trendingMovies:null,
      topRatedMovies:null,
      upcomingMovies:null
    },
       reducers: {
        addNowPlayingMovies: (state, action) => {
          state.nowPlayingMovies = action.payload;
          
        },
        addpopularMovies: (state, action) => {
          state.popularMovies = action.payload;
          
        },
        
        addtrendingMovies: (state, action) => {
          state.trendingMovies = action.payload;          
        },
        addtopRatedMovies:(state,action)=>{
          state.topRatedMovies = action.payload; 
        },
        addupcomingMovies:(state,action)=>{
          state.upcomingMovies=action.payload
        }
     
      }

})
export const { addNowPlayingMovies,addpopularMovies,addtrendingMovies,addtopRatedMovies,addupcomingMovies } = moviesSlice.actions;
export default moviesSlice.reducer;