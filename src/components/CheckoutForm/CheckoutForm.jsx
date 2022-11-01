import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { cartContext } from "../Cart/CartContext";
import Button from "react-bootstrap/Button";
import { createBuyOrder } from "../../services/firestore";
import "./CheckoutForm.css";

function CheckoutForm() {
  const [dataForm, setDataForm] = useState({
    name: "",
    phone: "",
    email: "",
  });
  const { cart, getItemPrice, emptyCart } = useContext(cartContext);
  const navigate = useNavigate();

  function checkOut() {
    const orderData = {
      buyer: dataForm,
      items: cart,
      date: new Date(),
      total: getItemPrice(),
    };
    createBuyOrder(orderData).then((orderID) => {
      navigate(`/checkout/${orderID}`);
    });

    emptyCart();
  }

  function inputChange(event) {
    let inputName = event.target.name;
    let inputValue = event.target.value;

    const newDataForm = { ...dataForm };
    newDataForm[inputName] = inputValue;
    setDataForm(newDataForm);
  }

  return (
    <div className="formContainer">
      <h4>
        Completa el siguiente formulario con tus datos para finalizar tu compra:
      </h4>
      <form onSubmit={checkOut}>
        <div>
          <label htmlFor="name">Nombre</label>
          <input
            value={dataForm.name}
            onChange={inputChange}
            name="name"
            placeholder="Nombre"
            type="text"
            required
          />
        </div>
        <div>
          <label htmlFor="phone">Telefono</label>
          <input
            value={dataForm.phone}
            onChange={inputChange}
            name="phone"
            placeholder="Telefono"
            type="text"
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            value={dataForm.email}
            onChange={inputChange}
            name="email"
            placeholder="Correo"
            type="text"
            required
          />
        </div>
        <div>
          <Link>
            <Button  disabled={!dataForm.email || !dataForm.name || !dataForm.phone} onClick={checkOut}>Finalizar Compra</Button>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default CheckoutForm;
