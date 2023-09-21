// store.js
import { configureStore } from "@reduxjs/toolkit";
import userSliceReducer from "./userSlice"; // Import the userReducer from userSlice.js
import movieSliceReducer from "./moviesSlice"; // Import the movieReducer from movieSlice.js

const appStore = configureStore({
  reducer: {
    user: userSliceReducer, // Assign the userReducer to the 'user' slice
    movies: movieSliceReducer, // Assign the movieReducer to the 'movies' slice
  },
});

export default appStore;
