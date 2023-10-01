import { createSlice } from "@reduxjs/toolkit";

const gptSlice=createSlice({
    name:"gpt",
    initialState:{
        showGptSearch:false,
        GptSearchData:null
    },
    reducers:{
        toggleGptSearchView:(state,action)=>{
            state.showGptSearch=!state.showGptSearch
        },
        addGptSearchData:(state,action)=>{
            state.GptSearchData=action.payload
        }
    }
})
export const {toggleGptSearchView,addGptSearchData}=gptSlice.actions
export default gptSlice.reducer