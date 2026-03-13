import { createSlice } from "@reduxjs/toolkit";


interface CartState {
    
}

const initialState = {
    cartItems: [],
    isOpen: false
}

const cartSlice = createSlice({
    initialState,

})