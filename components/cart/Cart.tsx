"use client"
import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import cartImage from "@/assets/cart-image.png"
import Image from 'next/image';
import { RootState } from '@/store/store';
import { motion, AnimatePresence } from 'motion/react';
// import { closeCart, removeItem, increaseQuantity, decreaseQuantity } from '@/store/cart/cartSlice';
import { closeCart } from '@/store/cart/cartSlice';
import { ShoppingBag, X } from 'lucide-react';
import { toast } from 'react-toastify';
import CartItem from './CartItem';

function Cart() {
  const dispatch = useDispatch()
  const { cartItems, isOpen } = useSelector((state: RootState) => state.cart)

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0)

  const checkoutHandler = () => {
    toast.success("🎉 Checkout completed successfully!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "dark",
    });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50">

          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => dispatch(closeCart())}
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: 320 }}
            animate={{ x: 0 }}
            exit={{ x: 320 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute right-0 top-0 h-full w-80 bg-primary border-l border-secondary/15 shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-5 border-b border-secondary/10 shrink-0">
              <div className="flex items-center gap-2">
                <Image
                  src={cartImage}
                  alt="Cart"
                  width={24}
                  height={24}
                  className="object-contain opacity-80"
                />
                <h3 className="text-white font-bold text-lg">Your Cart</h3>
                {totalItems > 0 && (
                  <span className="bg-secondary text-primary text-[10px] font-black px-1.5 py-0.5 min-w-[20px] text-center">
                    {totalItems}
                  </span>
                )}
              </div>
              <button
                onClick={() => dispatch(closeCart())}
                className="text-white/40 hover:text-white transition-colors cursor-pointer"
              >
                <X size={20} />
              </button>
            </div>

            {/* Items — scrollable */}
            <div className="flex-1 overflow-y-auto px-5 py-2">
              {cartItems.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
                  <ShoppingBag size={48} className="text-white/10" />
                  <p className="text-white/40 text-sm font-medium">Your cart is empty</p>
                  <button
                    onClick={() => dispatch(closeCart())}
                    className="text-[10px] uppercase tracking-widest text-secondary border border-secondary/30 px-5 py-2 hover:bg-secondary hover:text-primary transition-colors cursor-pointer"
                  >
                    Start Shopping
                  </button>
                </div>
              ) : (
                cartItems.map((item) => (
                  <CartItem
                    key={item.id}
                    item={item}
                  // onIncrease={() => dispatch(increaseQuantity(item.id))}
                  // onDecrease={() => dispatch(decreaseQuantity(item.id))}
                  // onRemove={() => dispatch(removeItem(item.id))}
                  />
                ))
              )}
            </div>

            {/* Footer */}
            {cartItems.length > 0 && (
              <div className="px-4 py-2 border-t border-secondary/10 shrink-0 space-y-1">

                {/* Total */}
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-widest text-white/40">Total</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-black text-white">${total}</span>
                    <span className="text-[10px] text-white/30">USD</span>
                  </div>
                </div>

                {/* Checkout */}
                <button
                  onClick={checkoutHandler}
                  className="w-full bg-secondary hover:bg-secondary/80 text-primary font-bold text-sm uppercase tracking-widest py-3 transition-colors duration-200 cursor-pointer"
                >
                  Checkout
                </button>

                {/* Continue */}
                <button
                  onClick={() => dispatch(closeCart())}
                  className="w-full text-[10px] uppercase tracking-widest text-white/30 hover:text-white transition-colors cursor-pointer"
                >
                  Continue Shopping
                </button>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}

export default Cart
