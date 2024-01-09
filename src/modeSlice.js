import { createSlice } from "@reduxjs/toolkit";










export const modeSlice=createSlice({
    name:"mode",
    initialState:{
        value:"dark"
    },
    reducers:{
        flipTheSwitch:(state)=>{
            if(state.value === "dark"){
                state.value="light"
                
            }else{
                state.value="dark"
                
            }
        }
    }
})


export const {flipTheSwitch} =modeSlice.actions

export default modeSlice.reducer