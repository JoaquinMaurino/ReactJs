import ItemCount from "../ItemCount/ItemCount";
import "../ItemCount/Counter.css";
import "./ItemDetail.css";

function ItemDetail(props) {
  return (
    <div className="container">
      <img src={props.img} alt="" />
      <div>
        <h1>{props.name}</h1>
        <p>{props.detail}</p>
        <h3>{props.price}</h3>
        <div className="text-center">
          <ItemCount initial={1} stock={props.stock} />
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;
