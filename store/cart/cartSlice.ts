import { Shoe } from "@/types/Shoe";
import { createSlice } from "@reduxjs/toolkit";


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
        
    }
})