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