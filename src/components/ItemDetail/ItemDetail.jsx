import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";
import {useState, useContext} from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import {cartContext} from "../Cart/CartContext"

function ItemDetail(item) {



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
      <div className="detailText">
        <h1 className="text-center">{item.name}</h1>
        <p className="text-center">{item.detail}</p>
        <h3 className="text-center">${item.price}</h3>
        <div className="text-center">
          {showItemCount ? <ItemCount initial={1} stock={item.stock} onAdd={addToCart}/>: <Link to="/cart"> <Button>Ir al Carrito</Button></Link>}
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;
