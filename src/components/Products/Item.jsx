import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./ItemStyles.css";
import "../ItemCount/Counter.css";
import {Link} from "react-router-dom"

function Item(props) {
  return (
    <Card className="card text-center">
      <Card.Img src={props.img} alt="" />
      <Card.Body>
        <Card.Title>
          <h3>{props.name}</h3>
        </Card.Title>
        {/*  <Card.Text>{props.detail}</Card.Text> */}
        <h5>{props.price}</h5>
        <Link to={`/detail/${props.id}`}>
          <Button>Ver Más!</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

export default Item;
