import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart/cartSlice";

export const store = configureStore({
    reducer: {
        cart: cartReducer
    }
})

store.subscribe(() => {
    const state = store.getState();
    localStorage.setItem("cartItems", JSON.parse(state.cart.cartItems))
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch