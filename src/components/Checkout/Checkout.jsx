import React from "react";
import {useParams} from "react-router-dom";
import "./Checkout.css"

function Checkout() {
 const {orderID} = useParams();

  return (
    <div className="text-center">
      <h2 className="mt-5">¡Gracias por tu compra!</h2>
      <h4 className="mt-4">El ID de tu compra es: {orderID} </h4>
    </div>
  );
}

export default Checkout;