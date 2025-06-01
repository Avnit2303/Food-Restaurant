import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice"
const cartstore = configureStore({
    reducer:{
        cart:cartReducer,
    },

});

export default cartstore;