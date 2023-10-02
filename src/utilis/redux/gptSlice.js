import { createSlice } from "@reduxjs/toolkit";

const gptSlice=createSlice({
    name:"gpt",
    initialState:{
        showGptSearch:false,
        gptSearchResults:null,
        tmdbSearchResults:null
    },
    reducers:{
        toggleGptSearchView:(state,action)=>{
            state.showGptSearch=!state.showGptSearch
        },
        addGptSearchData:(state,action)=>{
           const {gptSearchList,tmdbSearchResults}=action.payload
            state.gptSearchResults=gptSearchList
            state.tmdbSearchResults=tmdbSearchResults
        }
    }
})
export const {toggleGptSearchView,addGptSearchData}=gptSlice.actions
export default gptSlice.reducer