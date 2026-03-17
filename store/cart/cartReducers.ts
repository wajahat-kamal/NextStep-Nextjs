import { Shoe } from "@/types/Shoe";
import { PayloadAction } from "@reduxjs/toolkit";

export const cartToggle = (state) => {
    state.isOpen = !state.isOpen
}

export const addCartItem = (state, action: PayloadAction<Shoe>) => {
    const item = state.cartItems.find((item: Shoe) => item.id === action.payload.id)
    if (item) {
        item.quantity += 1;
    } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
    }
}

export const removeCartItem = (state, action: PayloadAction<number>) => {
    state.cartItems = state.cartItems.filter((item: Shoe) => item.id !== action.payload)
}

export const increaseItemQuantity = (state, action: PayloadAction<number>) => {
    const item = state.cartItems.find((item: Shoe) => item.id === action.payload)
    if (item) {
        item.quantity++;
    }
}

export const decreaseItemQuantity = (state, action: PayloadAction<number>) => {
    const item = state.cartItems.find((item: Shoe) => item.id === action.payload)
    if (item && item.quantity > 1) {
        item.quantity--;
    }
}

export const checkout = (state) => {
    state.cartItems = []
    state.isOpen = false
}