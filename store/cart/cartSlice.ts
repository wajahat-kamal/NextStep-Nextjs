import { Shoe } from "@/types/Shoe";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface CartState {
    cartItems: Shoe[],
    isOpen: boolean
}

const initialState: CartState = {
    cartItems: [],
    isOpen: false
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        toggleCart: (state) => {
            state.isOpen = !state.isOpen
        },
        addToCart: (state, action) => {
            
        }
    }
})