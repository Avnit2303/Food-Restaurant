import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        items:[],
    },
    reducers:{
        additems:(state,action) =>{
            state.items.push(action.payload)
        },
        removeitem:(state,action)=>{
            state.items.pop()
        },
        clearcart:(state)=>{
            state.items.length = 0;
        },
    },
});

export const {additems,removeitem,clearcart} = cartSlice.actions;
export default cartSlice.reducer;