"use client"
import { addToCart, toggleCart } from '@/store/cart/cartSlice'
import { Shoe } from '@/types/Shoe'
import { ShoppingCart } from 'lucide-react'
import React from 'react'
import { useDispatch } from 'react-redux'

function ShoeDetailPageButtons({ shoe }: { shoe: Shoe }) {
    const dispatch = useDispatch()
    const handleBuyNow = () => {
        dispatch(addToCart(shoe))
        dispatch(toggleCart())
    }
    return (
        <div className="flex flex-col sm:flex-row gap-3">
            <button onClick={() => dispatch(addToCart(shoe))} className="flex-1 flex items-center justify-center gap-2 bg-secondary hover:bg-secondary/80 text-primary font-bold text-sm uppercase tracking-widest py-4 px-8 transition-colors duration-300 cursor-pointer">
                <ShoppingCart size={16} />
                Add to Cart
            </button>
            <button onClick={handleBuyNow} className="flex-1 flex items-center justify-center gap-2 border border-secondary/30 hover:border-secondary text-secondary text-sm uppercase tracking-widest py-4 px-8 transition-colors duration-300 cursor-pointer">
                Buy Now
            </button>
        </div>
    )
}

export default ShoeDetailPageButtons