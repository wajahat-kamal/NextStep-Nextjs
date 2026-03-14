"use client"
import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import cartImage from "@/assets/cart-image.png"
import Image from 'next/image';
import { RootState } from '@/store/store';
import { motion } from 'motion/react';
import { closeCart } from '@/store/cart/cartSlice';
import { X } from 'lucide-react';

function Cart() {

  const dispatch = useDispatch()
  const { isOpen } = useSelector((state: RootState) => state.cart)

  if(!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm">
      {/* Overlay click close */}
      <div className="absolute inset-0" onClick={() => dispatch(closeCart())} />

      {/* Drawer */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
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
              className="h-7 w-7 md:h-10 md:w-10 object-contain opacity-90 pointer-events-none"
              loading="lazy"
            />
            <h3>Your Cart</h3>
          </div>
          <button
            onClick={() => dispatch(closeCart())}
            className="text-zinc-400 hover:text-white transition"
          >
            <X />
          </button>
        </div>

      </motion.div>
    </div>
  )
}

export default Cart