import type { Shoe } from "@/types/Shoe";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { addCartItem, cartToggle, checkout, decreaseItemQuantity, increaseItemQuantity, removeCartItem } from "./cartReducers";

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
        removeItem: removeCartItem,
        increaseQuantity: increaseItemQuantity,
        decreaseQuantity: decreaseItemQuantity,
        checkOut: checkout
    }
})

export const { toggleCart, addToCart, removeItem, increaseQuantity, decreaseQuantity, checkOut } = cartSlice.actions
export default cartSlice.reducer;