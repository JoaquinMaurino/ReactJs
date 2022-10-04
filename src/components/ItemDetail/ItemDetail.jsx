import ItemCount from "../ItemCount/ItemCount";
import "../ItemCount/Counter.css";
import "./ItemDetail.css";
import {useState, useContext} from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import {cartContext} from "../Cart/CartContext"

function ItemDetail(item) {

const [cantidad, setCantidad] = useState()

const { addItem } = useContext(cartContext)

const [showItemCount, setShowItemCount] = useState(true);


function addToCart(count) {
  alert(`Agregaste ${count} productos al carrito`);
  setShowItemCount(false);
  addItem(item, count)
}

  return (
    <div className="container">
      <img src={item.img} alt="" />
      <div>
        <h1>{item.name}</h1>
        <p>{item.detail}</p>
        <h3>{item.price}</h3>
        <div className="text-center">
          {showItemCount ? <ItemCount initial={1} stock={item.stock} onAdd={addToCart}/>: <Link to="/cart"> <Button>Finalizar Compra</Button></Link>}
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;
