import React, { useState } from "react";
import "./Counter.css";

function ItemCount(props) {
  const [clickCount, setClickCount] = useState(props.initial);

  function Add() {
    if (clickCount < props.stock) {
      setClickCount(clickCount + 1);
    }
  }

  function Sub() {
    if (clickCount > 1) {
      setClickCount(clickCount - 1);
    }
  }

  function addToCart() {
    alert("Agregaste " + clickCount + " productos al carrito");
  }

  return (
    <div>
      <h3>Stock: {props.stock}</h3>
      <div>
        <button onClick={Sub}>-</button>
        <span> {clickCount} </span>
        <button onClick={Add}>+</button>
      </div>
      <button className="agregar" onClick={addToCart}>Agregar al carrito</button>
    </div>
  );
}

export default ItemCount;
