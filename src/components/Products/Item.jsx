import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./ItemStyles.css";

function Item(props) {
  return (
    <Card className="card">
      <Card.Img src={props.img} alt="" />
      <Card.Body>
        <Card.Title><h3>{props.name}</h3></Card.Title>
        <Card.Text>{props.detail}</Card.Text>
        <Card.Text><h5>{props.price}</h5></Card.Text>
        <Button>Ver Más!</Button>
      </Card.Body>
    </Card>
  );
}

export default Item;
