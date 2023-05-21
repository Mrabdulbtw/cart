import React from 'react'
import { Link } from 'react-router-dom'
import '../component/navbar.css'

export default function Navbar() {
  return (
    <div className='navbar'>
      <div className='navlink'>
        <Link to="/"className='shopname'>Shope</Link>
        <Link to="cart"><i class="fa-solid fa-cart-shopping"></i></Link>
      </div>
    </div>
  )
}
 