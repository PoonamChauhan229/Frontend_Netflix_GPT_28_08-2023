import { createSlice } from "@reduxjs/toolkit";

const tvSeriesSlice=createSlice({
    name:"tvseries",
    initialState:{
        airingTodayTvSeries:null,
        onTheAirTvSeries:null,
        popularTvSeries:null,
        topRatedTvSeries:null
    },
    reducers:{
        addAiringTodayTvSeries:(state,action)=>{
            state.airingTodayTvSeries=action.payload
        },
        addOnTheAirTvSeries:(state,action)=>{
            state.onTheAirTvSeries=action.payload
        },
        addPopularTvSeries:(state,action)=>{
            state.popularTvSeries=action.payload
        },
        addTopRatedTvSeries:(state,action)=>{
            state.topRatedTvSeries=action.payload
        }
    }
})

export const {addAiringTodayTvSeries,addOnTheAirTvSeries,addPopularTvSeries,addTopRatedTvSeries,airingTodayTvSeries}=tvSeriesSlice.actions;

export default tvSeriesSlice.reducer