import { createSlice } from "@reduxjs/toolkit"

const allDataSlice=createSlice({
   name:"alldataPages",
    initialState:{
      page1:null,
      page2:null,
      page3:null,
      page4:null,
      page5:null
    },
       reducers: {
        addPage1: (state, action) => {
          state.page1 = action.payload;
          
        },
        addPage2: (state, action) => {
          state.page2 = action.payload;
          
        },
        
        addPage3: (state, action) => {
          state.page3 = action.payload;          
        },
        addPage4:(state,action)=>{
          state.page4 = action.payload; 
        },
        addPage5:(state,action)=>{
          state.page5=action.payload
        }
     
      }

})
export const { addPage5,addPage4,addPage3,addPage2,addPage1 } = allDataSlice.actions;
export default allDataSlice.reducer;