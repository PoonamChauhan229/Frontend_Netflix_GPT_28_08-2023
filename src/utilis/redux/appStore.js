// store.js
import { configureStore } from "@reduxjs/toolkit";
import userSliceReducer from "./userSlice"; // Import the userReducer from userSlice.js
import movieSliceReducer from "./moviesSlice"; // Import the movieReducer from movieSlice.js
import tvSeriesSliceReducer from './tvseriesSlice';
import watchlistSliceReducer from './watchListSlice'
import alldataPagesSliceReducer from'./allDataSlice'
import gptSliceReducer from './gptSlice'
import configSliceReducer from './configSlice'
const appStore = configureStore({
  reducer: {
    user: userSliceReducer, // Assign the userReducer to the 'user' slice
    movies: movieSliceReducer, // Assign the movieReducer to the 'movies' slice
    tvSeries:tvSeriesSliceReducer,
    watchlist:watchlistSliceReducer,
    allDataPages:alldataPagesSliceReducer,
    gpt:gptSliceReducer,
    config:configSliceReducer
  },
});

export default appStore;
