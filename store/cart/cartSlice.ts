import type { Shoe } from "@/types/Shoe";
import { CartState } from "@/types/Store";
import { createSlice } from "@reduxjs/toolkit";

const loadCartItems = () => {
    try {
        if (typeof window === "undefined") return [];
        const data = localStorage.getItem("cartItems")
        return data ? JSON.parse(data) : []
    } catch (error) {
        return []
    }
}

const initialState: CartState = {
    cartItems: loadCartItems(),
    isOpen: false
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        toggleCart: (state) => {
            state.isOpen = !state.isOpen
        },
        closeCart: (state) => {
            state.isOpen = false
        },
        addToCart: (state, action) => {
            const item = state.cartItems.find((item) => item.id === action.payload.id)
            if (item) {
                item.quantity += 1;
            } else {
                state.cartItems.push({ ...action.payload, quantity: 1 });
            }
        },
    }
})

export const { toggleCart, closeCart, addToCart } = cartSlice.actions
export default cartSlice.reducer;