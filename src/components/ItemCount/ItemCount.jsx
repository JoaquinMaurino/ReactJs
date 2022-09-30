import React, { useState } from "react";
import "./Counter.css";
import Button from "react-bootstrap/Button";

function ItemCount(props) {
  const [count, setCount] = useState(props.initial);

  function Add() {
    if (count < props.stock) {
      setCount(count + 1);
    }
  }

  function Sub() {
    if (count > 1) {
      setCount(count - 1);
    }
  }

  return (
    <div>
      <h3>Stock: {props.stock}</h3>
      <div>
        <button onClick={Sub}>-</button>
        <span> {count} </span>
        <button onClick={Add}>+</button>
      </div>
      <Button className="agregar" onClick={() => props.onAdd(count)}>
        Agregar al carrito
      </Button>
    </div>
  );
}

export default ItemCount;
