"use client"
import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import cartImage from "@/assets/cart-image.png"
import Image from 'next/image';
import { RootState } from '@/store/store';
import { motion, AnimatePresence } from 'motion/react';
import { closeCart } from '@/store/cart/cartSlice';
import { X } from 'lucide-react';
import { toast } from 'react-toastify';
import CartItem from './CartItem';

function Cart() {

  const dispatch = useDispatch()
  const { cartItems, isOpen } = useSelector((state: RootState) => state.cart)

  const checkoutHandler = () => {
    // dispatch(checkout());

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
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm">
          {/* Overlay click close */}
          <div className="absolute inset-0" onClick={() => dispatch(closeCart())} />

          {/* Drawer */}
          <motion.div
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 300 }}
            transition={{ duration: 0.3, ease: "easeIn" }}
            className="absolute right-0 top-0 h-full w-80
              bg-primary border-l border-white/10
              p-6 shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="text-xl md:text-2xl font-semibold text-white flex flex-row gap-1 items-center">
                <Image
                  src={cartImage}
                  alt="Cart"
                  width={10}
                  height={10}
                  className="h-7 w-7 object-contain opacity-90 pointer-events-none"
                  loading="lazy"
                />
                <h3>Your Cart</h3>
              </div>
              <button
                onClick={() => dispatch(closeCart())}
                className="text-zinc-300 hover:text-white transition cursor-pointer"
              >
                <X />
              </button>
            </div>

            {cartItems.length === 0 && (
              <p className="text-sm text-zinc-300 text-center mt-20">
                Your cart is empty
              </p>
            )}

            <div className="space-y-4">
              {cartItems.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>

            {cartItems.length > 0 && (
              <div className="absolute bottom-6 left-6 right-6 space-y-3">
                <button
                  onClick={checkoutHandler}
                  className="w-full bg-(--primary) text-white py-2 rounded-xl
                hover:opacity-90 transition"
                >
                  Checkout
                </button>

                <button
                  onClick={() => dispatch(closeCart())}
                  className="w-full text-sm text-zinc-400 hover:text-white transition"
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