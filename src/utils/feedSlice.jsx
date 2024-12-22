import { createSlice } from "@reduxjs/toolkit";

const feedSlice = createSlice({
    name:"feed",
    initialState:null,
    reducers:{
        addFeed: (state , action)=>{
            return action.payload;
        },
        removeUserFromFeed: (state , action)=>{
            const newFeed = state.filter((x)=> x._id !== action.payload);
            return newFeed;
        }
    }
})

export const {addFeed , removeUserFromFeed} = feedSlice.actions;

export default feedSlice.reducer;