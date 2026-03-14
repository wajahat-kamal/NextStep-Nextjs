export interface CartItemType extends Shoe {
    quantity: number
}

export interface CartState {
    cartItems: CartItemType[],
    isOpen: boolean
}