import { createSlice } from "@reduxjs/toolkit";

const gptSlice=createSlice({
    name:"gpt",
    initialState:{
        showGptSearch:false,
        gptSearchResults:null,
        tmdbSearchResults:null,
        showLanguageButton:false
    },
    reducers:{
        toggleGptSearchView:(state,action)=>{
            state.showGptSearch=!state.showGptSearch
        },
        addGptSearchData:(state,action)=>{
           const {gptSearchList,tmdbSearchResults}=action.payload
            state.gptSearchResults=gptSearchList
            state.tmdbSearchResults=tmdbSearchResults
        },
        toggleLanguageButton:(state,action)=>{
            state.showLanguageButton=action.payload
        }
    }
})
export const {toggleGptSearchView,addGptSearchData,toggleLanguageButton}=gptSlice.actions
export default gptSlice.reducer