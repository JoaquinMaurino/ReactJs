import ItemCount from "../ItemCount/ItemCount";
import "../ItemCount/Counter.css";
import "./ItemDetail.css";
import {useState, useContext} from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function ItemDetail(props) {

/* const [cantidad, setCantidad] = useState()

const { addItem } = useContext(CartContext) */

const [showItemCount, setShowItemCount] = useState(true);


function addToCart(count) {
  alert(`Agregaste ${count} productos al carrito`);
  setShowItemCount(false);
}

  return (
    <div className="container">
      <img src={props.img} alt="" />
      <div>
        <h1>{props.name}</h1>
        <p>{props.detail}</p>
        <h3>{props.price}</h3>
        <div className="text-center">
          {showItemCount ? <ItemCount initial={1} stock={props.stock} onAdd={addToCart}/>: <Link to="/cart"> <Button>Finalizar Compra</Button></Link>}
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;
