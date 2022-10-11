import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import { BsFillCartFill } from 'react-icons/bs';
import { cartContext} from "./CartContext"



function CartWidget() {
  const {cart, getItemQty} = useContext(cartContext)
  console.log(cart)
  return (
    <div>
    <Link to="/cart">
      <BsFillCartFill/>
      </Link>
      {(cart.length !== 0) && <span>{getItemQty()}</span>}
      </div>
  )
}

export default CartWidget