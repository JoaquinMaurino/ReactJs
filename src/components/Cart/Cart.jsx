import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { cartContext } from "./CartContext";
import { Button } from "react-bootstrap";

function Cart() {
  const { cart, deleteItem, emptyCart, getItemPrice } = useContext(cartContext);
  (cart.length === 0) && <h2>No hay items agregados al carrito!</h2>;
  return (
    <div>
      {cart.map((item) => (
        <>
          <h3>{item.name}</h3>
          <p>{item.price}</p>
          <p>{item.count}</p>
          <p>{getItemPrice}</p>
          <Button variant="danger" onClick={()=>deleteItem(item.id)}>
            Eliminar item
          </Button>
        </>
      ))}
      {(cart.length !== 0) && <Button variant="secondary" onClick={emptyCart}>Vaciar Carrito</Button>}
    </div>
  );
}
export default Cart;
