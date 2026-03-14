import React from 'react'
import { useSelector, useDispatch } from "react-redux";


function Cart() {
  const dispatch = useDispatch()
  const { isOpen } = useSelector((state) => state.cart)
  if (!isOpen) return;
  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm">
      {/* Overlay click close */}
      <div className="absolute inset-0" onClick={() => dispatch(isOpen())} />

      {/* Drawer */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3, ease: "easeIn" }}
        className="absolute right-0 top-0 h-full w-80
          bg-(--secondary) border-l border-white/10
          p-6 shadow-2xl"
      >

      </motion.div>
    </div>
  )
}

export default Cart