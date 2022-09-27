import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./ItemStyles.css";
import ItemCount from "../ItemCount/ItemCount";
import "../ItemCount/Counter.css";

function Item(props) {
  return (
    <Card className="card text-center">
      <Card.Img src={props.img} alt="" />
      <Card.Body>
        <Card.Title>
          <h3>{props.name}</h3>
        </Card.Title>
        <Card.Text>{props.detail}</Card.Text>
        <h5>{props.price}</h5>
        <Button>Ver Más!</Button>
        <div className="text-center">
          <ItemCount initial={1} stock={props.stock} />
        </div>
      </Card.Body>
    </Card>
  );
}

export default Item;
