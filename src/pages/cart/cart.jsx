import React, { useContext } from 'react'
import { Pro } from '../../products'
import { ShopeCotext } from '../../context/shopeContext'
import CartItems from './cartItems'
import '../cart/cart.css'
import { useNavigate } from 'react-router-dom'


export default function Cart() {

  const { cartItems, getCartTotalAmount } = useContext(ShopeCotext)
  const navigate = useNavigate()
  let totalAmount = getCartTotalAmount()

  return (
    <div>   
      <h2>cart Items</h2>
      <div className="cartItems">
        {
          Pro.map((products) => {
            if (cartItems[products.id] !== 0) {
              return (<CartItems data={products} />)
            }
          })
        }
      </div>
      {
        totalAmount > 0 ?
          <div className="totalcontainer">
            <h4><b>total Amount: $ {totalAmount}</b></h4>
            <button onClick={() => { navigate('/') }} > continue shopping</button>
            <button>chckout</button>
          </div>
          : <h5>your cart is emty</h5>
      }
    </div>
  )
} ;
