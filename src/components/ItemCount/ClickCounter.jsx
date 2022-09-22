import React, { useState } from "react";
import "./Counter.css";

function ClickCounter(props) {
  const [clickCount, setClickCount] = useState(props.initial);

  function Add() {
    if (clickCount < props.stock) {
      setClickCount(clickCount + 1);
    }
  }

  function Sub() {
    if (clickCount > 0) {
      setClickCount(clickCount - 1);
    }
  }

  function addToCart() {
    alert("Producto agregado al carrito");
  }

  return (
    <div className="text-center">
      <h3>Stock: {props.stock}</h3>
      <div className="container">
        <button onClick={Sub}>-</button>
        <span> {clickCount} </span>
        <button onClick={Add}>+</button>
      </div>
      <button onClick={addToCart}>Agregar al carrito</button>
    </div>
  );
}

export default ClickCounter;
