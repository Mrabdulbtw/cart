import React, { useContext } from 'react'
import { ShopeCotext } from '../../context/shopeContext'



export default function Productss(props) {
    const { addCart,cartItems } = useContext(ShopeCotext)


    const { productImg, prise, productName, id } = props.data
    const cartAmount = cartItems[id]

    return (
        <div className='product'>
            <img src={productImg} alt="camera" />
            <div className="discription">
                <p>
                    <b>$ {prise}</b>
                </p>
                <p>{productName}</p>
                <button className='addtoCartBtn' onClick={() => { addCart(id) }} >add to cart  {cartAmount > 0 && <>({cartAmount})</>}
                </button>
            </div>
        </div>
    )
}
