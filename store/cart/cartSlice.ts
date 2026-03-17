import type { Shoe } from "@/types/Shoe";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { addCartItem, cartToggle } from "./cartReducers";

const loadCartItems = () => {
    try {
        if (typeof window === "undefined") return [];
        const data = localStorage.getItem("cartItems")
        return data ? JSON.parse(data) : []
    } catch (error) {
        return []
    }
}

export interface CartItemType extends Shoe {
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
        toggleCart: cartToggle,
        addToCart: addCartItem,
        removeItem: (state, action: PayloadAction<number>) => {
            state.cartItems = state.cartItems.filter((item) => item.id !== action.payload)
        },
        increaseQuantity: (state, action: PayloadAction<number>) => {
            const item = state.cartItems.find((item) => item.id === action.payload)
            if (item) {
                item.quantity += 1;
            }
        },
        decreaseQuantity: (state, action: PayloadAction<number>) => {
            const item = state.cartItems.find((item) => item.id === action.payload)
            if (item && item.quantity > 1) {
                item.quantity -= 1;
            }
        },
        checkOut: (state) => {
            state.cartItems = []
            state.isOpen = false
        }
    }
})

export const { toggleCart, addToCart, removeItem, increaseQuantity, decreaseQuantity, checkOut } = cartSlice.actions
export default cartSlice.reducer;