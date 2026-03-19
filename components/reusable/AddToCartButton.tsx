"use client"
import { addToCart } from '@/store/cart/cartSlice'
import { Shoe } from '@/types/Shoe'
import { ShoppingCart } from 'lucide-react'
import React from 'react'
import { useDispatch } from 'react-redux'

function AddToCartButton({ shoe }: { shoe: Shoe }) {
    const dispatch = useDispatch()
    return (
        <button
            className="bg-secondary text-primary w-5 h-5 md:w-7 md:h-7 lg:w-9 lg:h-9 cursor-pointer flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95"
            style={{ backgroundColor: "#FFD33C", color: "#021B41" }}
            aria-label={`Add ${shoe.name} to cart`}
            onClick={() => dispatch(addToCart(shoe))}
        >
            <ShoppingCart className="lg:w-6 lg:h-6 md:w-5 md:h-5 h-4 w-4" />
        </button>
    )
}

export default AddToCartButton