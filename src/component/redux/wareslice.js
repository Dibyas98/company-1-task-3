import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    waredata:[]
}
const wareSlice = createSlice({
    name : 'ware',
    initialState:initialState,
    reducers: {
        getWareData : (state,action) =>{
            // console.log(state);
            state.waredata = [...action.payload]
            // console.log(state);
        }
    }
})

export const {getWareData} =wareSlice.actions;
export default wareSlice.reducer;