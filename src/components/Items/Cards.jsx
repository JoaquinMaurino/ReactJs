import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./CardStyles.css";

function Cards(props) {
  return (
    <Card className="card">
      <Card.Img src={props.img} alt="" />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>{props.detail}</Card.Text>
        <Card.Text>{props.price}</Card.Text>
        <Button>Ver Más!</Button>
      </Card.Body>
    </Card>
  );
}

export default Cards;
