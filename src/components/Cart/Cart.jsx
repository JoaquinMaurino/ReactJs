import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { cartContext } from "./CartContext";
import { Button } from "react-bootstrap";
import "./Cart.css";
import CheckoutForm from "../CheckoutForm/CheckoutForm";

function Cart() {
  const { cart, deleteItem, emptyCart, getItemPrice } = useContext(cartContext);

  return cart.length === 0 ? (
    <div className="text-center">
      <h1 className="mt-5">Carrito vacío</h1>
      <h3 className="mt-5 mb-5">No hay ningún item agregado al carrito!</h3>
      <Link to="/">
        <Button>Seguir Comprando</Button>
      </Link>
    </div>
  ) : (
    <>
      <h1 className="text-center">Tu Carrito</h1>
      <table className="text-center tabla">
        <thead className="tableHead">
          <tr className="tableRow">
            <th>Imagen</th>
            <th>Titulo</th>
            <th>Precio Unitario</th>
            <th>Cantidad</th>
            <th>Total</th>
            <th>Remover</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {cart.map((item) => (
            <tr key={item.id} className="tableRow">
              <td id={item.id}>
                <img src={item.img} />
              </td>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>{item.count}</td>
              <td>{item.count * item.price}</td>
              <td>
                <Button
                  className="delete"
                  variant="danger"
                  onClick={() => deleteItem(item.id)}
                >
                  Eliminar item
                </Button>
              </td>
            </tr>
          ))}
          <tr className="rowTotal">
            <th>Total en el carrito:</th>
            <th>${getItemPrice()}</th>
          </tr>
        </tbody>
      </table>
      <div className="vaciar">
        <Button  variant="secondary" onClick={emptyCart}>
          Vaciar Carrito
        </Button>
        <Link to="/">
          <Button>Seguir Comprando</Button>
        </Link>
      </div>
      <div className="text-center">
        <CheckoutForm />
      </div>
    </>
  );
}
export default Cart;
