import React from 'react'
import { Pro } from '../../products'
import Productss from './productss'
import '../shop/shop.css'



export default function Shop() {
  return (
    <div className='shop' >
      <div className='tittel' >
        <h2>
          My products6  
        </h2>
      </div>
      <div className='products' >
        {
          Pro.map((products) => <Productss data={products} />)
        }
      </div>


    </div>

  )
}
