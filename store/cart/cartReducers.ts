import { Shoe } from "@/types/Shoe";
import { PayloadAction } from "@reduxjs/toolkit";

export interface CartState {
    cartItems: Shoe[];
    isOpen: boolean;
}

export const cartToggle = (state: CartState) => {
    state.isOpen = !state.isOpen
}

export const addCartItem = (state: CartState, action: PayloadAction<Shoe>) => {
    const item = state.cartItems.find((item) => item.id === action.payload.id)
    if (item) {
        item.quantity += 1;
    } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
    }
}

export const removeCartItem = (state: CartState, action: PayloadAction<number>) => {
    state.cartItems = state.cartItems.filter((item) => item.id !== action.payload)
}

export const increaseItemQuantity = (state: CartState, action: PayloadAction<number>) => {
    const item = state.cartItems.find((item) => item.id === action.payload)
    if (item) item.quantity++;
}

export const decreaseItemQuantity = (state: CartState, action: PayloadAction<number>) => {
    const item = state.cartItems.find((item) => item.id === action.payload)
    if (item && item.quantity > 1) item.quantity--;
}

export const checkout = (state: CartState) => {
    state.cartItems = []
    state.isOpen = false
}