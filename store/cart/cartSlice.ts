import { Shoe } from "@/types/Shoe";
import { createSlice } from "@reduxjs/toolkit";

const loadCartItems = () => {
    try {
        const data = localStorage.getItem("cartItems")
        return data ? JSON.parse(data) : []
    } catch (error) {
        return []
    }
}

interface CartItemType extends Shoe {
    quantity: number
}

interface CartState {
    cartItems: CartItemType[],
    isOpen: boolean
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
        addToCart: (state, action) => {
            const item = state.cartItems.find((item) => item.id === action.payload.id)
            if (item) item.quantity += 1;
            state.cartItems.push({ ...action.payload, quantity: 1 })
        },
    }
})

export const { toggleCart, addToCart } = cartSlice.actions
export default cartSlice.reducer;