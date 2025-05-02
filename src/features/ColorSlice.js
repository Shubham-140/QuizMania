import { createSlice } from "@reduxjs/toolkit";

const initialState={
    lightMode:false,
}

export const ColorSlice=createSlice({
    name:'ColorSlice',
    initialState,
    reducers:{
        toggleMode:(state)=>{
            state.lightMode=!state.lightMode;
        },

    }
})

export const {toggleMode}=ColorSlice.actions;
export default ColorSlice.reducer;