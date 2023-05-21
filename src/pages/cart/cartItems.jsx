import React, { useContext } from 'react'
import { ShopeCotext } from '../../context/shopeContext'

export default function CartItems(props) {
    const { productImg, prise, productName, id } = props.data
    const { addCart, removeCart, cartItems, handelChangeCart } = useContext(ShopeCotext)


    return (

        <div className='cartItem'>
            <img src={productImg} alt={productName} />
            <div className="discription">
                <p>
                    <b>
                        $ {prise}
                    </b>
                </p>
                <p>{productName}</p>
                <div className="counthandel">
                    <button onClick={() => removeCart(id)} >-</button>
                    <input type='number' value={cartItems[id]} onChange={(e) => handelChangeCart(id, Number(e.target.value))} />
                    <button onClick={() => addCart(id)} >+</button>
                </div>
            </div>


        </div>
    )
}
