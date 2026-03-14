import React from 'react'
import { useSelector, useDispatch } from "react-redux";


function Cart() {
  const dispatch = useDispatch()
  const {isOpen} = useSelector((state) => state.cart)
  if(!isOpen) return;
  return (
    <div>

    </div>
  )
}

export default Cart