import { Shoe } from "@/types/Shoe";
import { createSlice } from "@reduxjs/toolkit";


interface CartItemType extends Shoe {
    quantity: number
}

interface CartState {
    cartItems: CartItemType[],
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
            const item = state.cartItems.find((item) => item.id === action.payload.id)
            if (item) item.quantity += 1;
            state.cartItems.push({ ...action.payload, quantity: 1 })
        },
    }
})

export const { toggleCart, addToCart } = cartSlice.actions
export default cartSlice.reducer;