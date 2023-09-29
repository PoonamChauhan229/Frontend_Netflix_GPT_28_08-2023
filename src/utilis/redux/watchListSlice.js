import { createSlice } from "@reduxjs/toolkit"

const watchListSlice=createSlice({
   name:"watchlist",
    initialState:{
      playingMovies:null,
      playingTvSeries:null
    },
       reducers: {
        addPlayingMovies: (state, action) => {
          state.playingMovies = action.payload;
          
        },
        addPlayingTvSeries: (state, action) => {
          state.playingTvSeries = action.payload;
          
        }     
      }

})
export const { addPlayingMovies,addPlayingTvSeries } = watchListSlice.actions;
export default watchListSlice.reducer;