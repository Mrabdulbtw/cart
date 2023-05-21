import React, { createContext, useState,} from 'react'
import { Pro } from '../products'


export const ShopeCotext = createContext(null)

const shopeDataValue = () => {
  let cart = {}
  for (let i = 1; i < Pro.length + 1; i++) {
    cart[i] = 0
  }
  return cart;
} 
   

export default function ShopeContextProvider(props) {

  const [cartItems, setCartItems] = useState(shopeDataValue())

  const addCart = (itemId) => {
    setCartItems((pre) => ({ ...pre, [itemId]: pre[itemId] + 1 })
    )
  }

  const removeCart = (itemId) => {
    setCartItems((pre) => ({ ...pre, [itemId]: pre[itemId] - 1 }))
  }
  const handelChangeCart = (itemId, newAmount) => {
    setCartItems((pre) => ({ ...pre, [itemId]: newAmount }))
  }

  const getCartTotalAmount = () => {
    let TotalAmount = 0
    for (const items in cartItems) {
      if (cartItems[items] > 0) {
        let info = Pro.find((product) => product.id === Number(items))
        TotalAmount += cartItems[items] * info.prise
      }
    }
    return TotalAmount
 
  }

 
  const ContextValue =
    { addCart, removeCart, cartItems, handelChangeCart, getCartTotalAmount }

  return (
    <ShopeCotext.Provider value={ContextValue}>
      {props.children}
    </ShopeCotext.Provider>
  )
}
